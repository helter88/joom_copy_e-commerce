import Axios from "axios"
import { useMemo } from "react"
import { ResponseProduct } from "./products-sort-by-category";
import useProducts from "./use-products";



export const useProductsSearch = (search: string | null) =>{

    const {allProducts, isError, isLoading} = useProducts();

    const searchedProducts = useMemo(()=>{

        const foundProducts = () => {
            if (search) {
                const filteredProducts = allProducts?.filter((d:ResponseProduct) => 
                d.title.toLowerCase().startsWith(search.toLowerCase()) )
                
                if (filteredProducts.length === 0){
                    return allProducts
                }
                return filteredProducts

            } else {
                return allProducts
            }
        } 

        return foundProducts()

    }, [search, isLoading])
    return {searchedProducts, isError}
}