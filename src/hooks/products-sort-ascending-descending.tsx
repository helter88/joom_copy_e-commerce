import { ResponseProduct } from "./products-sort-by-category"

export const useProductsSortAscendingDescending = (sort: string | null, data: ResponseProduct[]) =>{
    
    let sortedProducts;
    switch (sort) {
        case 'Ascending price':
            sortedProducts = data?.sort((a,b) => b.price - a.price );
            
            break;
        case 'Descending price':

            sortedProducts = data?.sort((a,b) => a.price - b.price );
            break;
            
        default:
            sortedProducts= data
        
    }
    return {sortedProducts}

}