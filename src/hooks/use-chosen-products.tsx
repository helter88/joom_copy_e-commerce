import {useEffect, useState} from 'react'

const getStorageValue = () => {
    const saved = localStorage.getItem('products') as string
    const initial = JSON.parse(saved);
    return initial || []
  }

const useChosenProducts = () => {

    const [products, setProducts] = useState(() => {
        return getStorageValue();
      });

      const updateProducts = () => {
        setProducts(getStorageValue())
      }
      
      useEffect(() => {
        // storing input name
        localStorage.setItem('products', JSON.stringify(products));
      }, [products]);
      
  return [products, setProducts]
  
}

export default useChosenProducts
