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

      useEffect(() => {
        // storing input name
        localStorage.setItem('products', JSON.stringify(products));
        window.dispatchEvent(new Event('storage'))
      }, [products]);

      useEffect(() => {
        const handleStorage = () => {
          setProducts(getStorageValue());
          
          
        }
      
        window.addEventListener('storage', handleStorage)
        return () => window.removeEventListener('storage', handleStorage)
      }, [])

  return [products, setProducts]
  
}

export default useChosenProducts
