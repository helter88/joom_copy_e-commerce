import Axios from "axios"
import { useMemo } from "react"
import { ResponseProduct } from "./products-sort-by-category";
import useProducts from "./use-products";



export const useProductsSearch = (search: string | null) =>{

    const {allProducts, isError, isLoading} = useProducts();

    const searchedProducts = useMemo(()=>{
        return search ?
            allProducts?.filter((d:ResponseProduct) => d.title.toLowerCase().startsWith(search.toLowerCase()) )
            : allProducts
    }, [search, isLoading])
    return {searchedProducts, isError}
}