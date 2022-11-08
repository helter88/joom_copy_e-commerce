import {ReactComponent as Bin} from '../../assets/img/bin-icon.svg';
import useFetchProductById from '../../hooks/use-fetch-product-by-id';
import { noImagePath, onImageError } from '../products/card';
import { ChosenProductType } from '../ui/buttons/buy-now-button';

const CartProduct = ({checked, id, quantity}: ChosenProductType) => {
  const {product} = useFetchProductById(id);

  return (
    <div className='flex justify-between mb-8 '>
       <div className='flex'>
            <div className='flex items-start gap-x-2'>
                <input type="checkbox" className="mt-2 border border-red-400 w-5 h-5 bg-white
                         accent-red-500 cursor-pointer" />
                <img className='w-28 rounded-lg'
                    src={product?.images[0] || noImagePath} 
                    alt='product photo' onError={onImageError}/>
                <div className='flex flex-col justify-between h-full'>
                  <p className='text-sm'>{product?.title}</p>
                  <div className='flex gap-x-0.5'>
                    <button className='rounded-full  bg-slate-100 text-lg h-5 w-5
                      flex items-center justify-center'><span>-</span></button>
                    <span className='text-sm h-5 w-5 text-center'>{quantity}</span>
                    <button className='rounded-full bg-slate-100 text-lg h-5 w-5
                      flex items-center justify-center'><span>+</span></button>
                    <Bin className='ml-4 text-slate-400 hover:text-red-400 cursor-pointer' />
                  </div>
                </div>
                
            </div>
        </div>
        <div>
            <p className='text-base font-medium'>{`PLN ${quantity * product?.price}`}</p>
        </div>
    </div>
  )
}

export default CartProduct
