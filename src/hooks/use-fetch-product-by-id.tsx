
import {useEffect} from 'react'
import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'
import { ChosenProductType } from '../components/ui/buttons/buy-now-button';
import { useLocalStorage} from 'usehooks-ts';

const useFetchProductById = (id:string) => {
  const [products, setProducts] = useLocalStorage<ChosenProductType[]|[]>('products',[]);
    const fetchProduct = () =>{
        return Axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then(resp => resp.data)
        }
    const {data:product, isError} = useQuery([`product${id}`], fetchProduct)
    
  useEffect(()=>{
    if(isError){
      setProducts((prod:ChosenProductType[])=>
      prod.filter((item:ChosenProductType)=> item.id !== id)
      )
    }
  }, [isError])
 
  return {product, isError}
}

export default useFetchProductById
