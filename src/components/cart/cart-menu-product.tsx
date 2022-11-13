import React from 'react'
import useFetchProductById from '../../hooks/use-fetch-product-by-id';



const CartMenuProduct = ({prodId}: {prodId: string}) => {
  const {product} = useFetchProductById(prodId);

  return (
    <div className='py-4 flex gap-x-2 border-b'>
        <img className='w-16 rounded-lg'
            src={product?.images[0]} alt="product" />
        <div>
            <p className='text-sm font-medium mt-0.5'>PLN {product?.price}</p>
            <p className='text-sm'>{product?.title}</p>
        </div>
        
    </div>
  )
}

export default CartMenuProduct
