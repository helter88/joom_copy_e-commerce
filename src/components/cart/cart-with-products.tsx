import { useState } from 'react';
import {ReactComponent as Bin} from '../../assets/img/bin-icon.svg';
import useChosenProducts from '../../hooks/use-chosen-products';
import { ChosenProductType } from '../ui/buttons/buy-now-button';
import CartPanel from './cart-panel';
import CartProduct from './cart-product';
import YourCart from './your-cart';

const CartWithProducts = () => {
  const [products] = useChosenProducts();
  const [selected, setSelected] = useState<string[]>(products.map((p: any) => p.id) || [])
 console.log(selected, "xxx")
  const handleOnSelect = (id: string) => { 
    console.log(id, "trying to select xxx")
    setSelected(selected?.some(s => s === id) ? selected.filter(s => s !== id) : [...selected, id])
  }  

  const handleSelectAll = () => setSelected(selected.length > 0 ? [] : products.map((p: any) => p.id))

  const allCartProducts = products?.map((product:ChosenProductType) => {
    
    return (<CartProduct key={product.id} 
      checked={product.checked} 
      id={product.id} 
      onSelect={handleOnSelect} 
      isSelected={selected?.some(s => s === product.id) || false} 
      quantity={product.quantity}/> 
    ) 
  })

  return (
    <>
      <div className='px-72'>
        <p className='text-2xl font-medium mt-8 mb-3'>My cart</p>
        <div className='grid grid-cols-3 gap-x-8'>
            <div className='col-span-2 '>  
              <CartPanel isAllSelected={selected.length === products.length} onSelectAll={handleSelectAll} />
              <div className=' my-4 bg-white p-5 rounded-xl'>
                  {allCartProducts}
                </div>
            </div>
            <div className='col-span-1'>
                <YourCart />
            </div>
        </div>
            
      </div>
    </>
  )
}

export default CartWithProducts
