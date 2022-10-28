import { useEffect, useState } from 'react'
import useProducts from './use-products';
import { useSearchParams } from 'react-router-dom';
import { ResponseProduct} from './products-sort-by-category';

interface Field {
  field: string,
  weight: number
}

const fields: Field[] = [{
  field: 'title',
  weight: 10,
},
{
  field: 'description',
  weight: 9,
}]

interface FoundProduct {
  score: number 
  product: ResponseProduct
}




const useSearchResultsMenu= (inputText:string, setInputText:React.Dispatch<React.SetStateAction<string>>) => {
    const {allProducts}= useProducts();
    const [searchParams, setSearchParams] = useSearchParams();

    const searchURL = searchParams.get('search')

    const [isOpen, setIsOpen] = useState(false);
    const [foundProducts, setFoundProducts] = useState<null |ResponseProduct[]>(null)

    const checkString = (product: ResponseProduct, field: Field): number => {
      const text: string = product[field.field as keyof typeof product] as string 

      if(text?.toLowerCase()?.startsWith(inputText.toLowerCase())){
        return field.weight + 1
      } 

      if(text?.toLowerCase()?.includes(inputText.toLowerCase())){
        return field.weight
      } 

      return 0
    }

    useEffect(() =>{
        if (inputText === '') {
          setIsOpen(false)
        }else{
          setIsOpen(true)
          setFoundProducts(allProducts?.filter(({title}:ResponseProduct) => {
            return title?.toLowerCase()?.startsWith(inputText.toLowerCase())
          }
          ))

          let foundProducts: FoundProduct[] = []

          allProducts.map((product: ResponseProduct) => {
            let weight = 0
            fields.forEach((field: Field) => {
              if(weight === 0){
                weight = checkString(product, field)
                if(weight > 0)
                  foundProducts.push({score: weight, product: product})
              }
            })
          })
 
          setFoundProducts(foundProducts.sort((a,b) => b.score - a.score).map(fp => fp.product).slice(0, 5))
         
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
