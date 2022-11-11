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
        // const handleStorage = () => {
        //   getStorageValue();
          
        // }
        console.log('from eventlistener')
        window.addEventListener('storage', (e)=> console.log(e.newValue))
        return () => window.removeEventListener('storage', (e)=> console.log(e.newValue))
      }, [])

      useEffect(() => {
        
        localStorage.setItem('products', JSON.stringify(products));
        window.dispatchEvent(new Event('storage'))
        console.log("info from dispatch")
      }, [products]);

     

  return [products, setProducts]
  
}

export default useChosenProducts
