import Axios from "axios"
import { useMemo } from "react"
import { useQuery} from '@tanstack/react-query';

export interface ResponseProduct  {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
      id: number;
      name: string;
      image: string;
    };
    images: string[];
  }

const fetchProducts = ()=>{
    return Axios.get("https://api.escuelajs.co/api/v1/products").then(resp=> resp.data)
  }
export const useProductsSortByCategory = (category: string | null) =>{
    const {data, isError, isLoading} = useQuery(['products'], fetchProducts)

    const sortedProductsByCategory = useMemo(()=>{
        return category ?
            data?.filter((d:ResponseProduct) => d.category.name.toLowerCase() === category )
            : data
    }, [category, isLoading])
    return {sortedProductsByCategory, isError}
}
