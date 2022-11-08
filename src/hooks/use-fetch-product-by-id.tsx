
import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'

const useFetchProductById = (id:string) => {
    
    const fetchProduct = () =>{
        return Axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).then(resp => resp.data)
    }
    const {data:product} = useQuery([`product${id}`], fetchProduct)

  return {product}
}

export default useFetchProductById
