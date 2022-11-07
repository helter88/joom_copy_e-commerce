import {ReactComponent as Bin} from '../../assets/img/bin-icon.svg';
import CartProduct from '../products/cart-product';

const CartWithProducts = () => {
  return (
    <>
      <div className='px-72'>
        <p className='text-2xl font-medium mt-8 mb-3'>My cart</p>
        <div className='grid grid-cols-3 gap-x-8'>
            <div className='col-span-2 '>
                <div className='flex justify-between my-4
                 bg-white p-5 rounded-xl'>
                   <div className='flex items-center gap-x-2'>
                        <input type="checkbox" className="border border-red-400 w-5 h-5 bg-white
                     accent-red-500 cursor-pointer " />
                        <label htmlFor="checked-checkbox" className="text-sm font-medium">Select all</label>
                    </div>
                    <div className='flex gap-x-2'>
                        <Bin className='text-red-400'/>
                        <p className="text-sm text-red-400">Remove all selected</p>  
                    </div>
                </div>
                <div className=' my-4 bg-white p-5 rounded-xl'>
                   <CartProduct /> 
                   <CartProduct />
                   
                 </div>
            </div>
            <div className='col-span-1'>
                <p>Your cart</p>
            </div>
        </div>
            
      </div>
    </>
  )
}

export default CartWithProducts
