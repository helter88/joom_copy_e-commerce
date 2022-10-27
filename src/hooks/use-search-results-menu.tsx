import { useEffect, useState } from 'react'
import useProducts from './use-products';
import { useSearchParams } from 'react-router-dom';
import { ResponseProduct} from './products-sort-by-category';


const useSearchResultsMenu= (inputText:string, setInputText:React.Dispatch<React.SetStateAction<string>>) => {
    const {allProducts}= useProducts();
    const [searchParams, setSearchParams] = useSearchParams();

    const searchURL = searchParams.get('search')

    const [isOpen, setIsOpen] = useState(false);
    const [foundProducts, setFoundProducts] = useState<null |ResponseProduct[]>(null)

    useEffect(() =>{
        if (inputText === '') {
          setIsOpen(false)
        }else{
          setIsOpen(true)
          setFoundProducts(allProducts?.filter(({title}:ResponseProduct) => {
            return title?.toLowerCase()?.startsWith(inputText.toLowerCase())
          }
          ))
        }
      },[inputText])

      
    useEffect(()=>{
        if (foundProducts?.length === 0) {
        setIsOpen(false)
        }
    }, [foundProducts])

    useEffect(()=>{
        if (searchURL !== null) {
        setIsOpen(false)
        }
    }, [searchURL])


    const onCLickHandler= (title: string) => {
        setSearchParams({search: `${title}`})
        setInputText(title)
        setIsOpen(false);
      }

  return {isOpen, onCLickHandler, foundProducts}
}

export default useSearchResultsMenu
