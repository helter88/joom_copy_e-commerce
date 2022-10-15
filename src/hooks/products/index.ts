import {useMemo} from 'react'
import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'

    const fetchProducts = ()=>{
        return Axios.get("https://api.escuelajs.co/api/v1/products").then(resp=> resp.data)
    }
 
  export const useProducts = ({category}: {category?: string}) => {
    const {data, isError, isLoading} = useQuery(['products'], fetchProducts)
    
    const products = useMemo(() => {
        return category ? 
         data?.filter((d: any) => d?.category?.name.toLowerCase() === category)
          :  
        data 
    }, [category, isLoading])

    return {isLoading, isError, products}
  }