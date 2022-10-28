import { useEffect, useState } from 'react'
import useProducts from './use-products';
import { useSearchParams } from 'react-router-dom';
import { ResponseProduct} from './products-sort-by-category';


export interface ScoreFieldType {
  field: string;
  score: number;
}

export interface ProductWithScoreType {
  score: number;
  product: ResponseProduct;
}

const scoreFieldContainer: ScoreFieldType[] = [
  {
    field: "title",
    score: 10
  },
  {
    field: "description",
    score: 9
  }
]




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
          // setFoundProducts(allProducts?.filter(({title}:ResponseProduct) => {
          //   return title?.toLowerCase()?.startsWith(inputText.toLowerCase())
          // }))
          const ProductsWithScore: ProductWithScoreType[] =[]

           allProducts.forEach((product:ResponseProduct) =>{
            let weight = 0
            scoreFieldContainer.forEach((item:ScoreFieldType)=> {
              type ProductKey = keyof typeof product;
              let foundField = product[item.field as ProductKey ] as string
              if (foundField?.toLowerCase().includes(inputText.toLowerCase())){
                if(weight< item.score){
                  weight = item.score
                }
              }
              if (foundField?.toLowerCase().startsWith(inputText.toLowerCase())){

                  weight = item.score + 1
              }
            })
            if (weight > 0){
              ProductsWithScore.push({score: weight, product})
            }
          })
          setFoundProducts(ProductsWithScore?.sort((a,b)=> b.score - a.score)?.map((item)=> item.product)?.slice(0,5));
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
