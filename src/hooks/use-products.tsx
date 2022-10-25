import Axios from 'axios';
import {useQuery} from '@tanstack/react-query';

const fetchProducts = ()=>{
    return Axios.get("https://api.escuelajs.co/api/v1/products").then(resp=> resp.data)
  }

const useProducts = () => {
    const {data: allProducts, isError, isLoading} = useQuery(['products'], fetchProducts )

    return {allProducts, isError, isLoading}
}

export default useProducts
