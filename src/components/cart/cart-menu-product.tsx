import React from 'react'

const CartMenuProduct = () => {
  return (
    <div className='py-4 flex gap-x-2 border-b'>
        <img className='w-16 rounded-lg'
            src='https://placeimg.com/640/480/any?r=0.9178516507833767' alt="product" />
        <div>
            <p className='text-sm font-medium mt-0.5'>PLN 519</p>
            <p className='text-sm'>Handmade Fresh Table</p>
        </div>
        
    </div>
  )
}

export default CartMenuProduct
