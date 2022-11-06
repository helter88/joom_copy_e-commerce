import React from 'react'
import BrowseProducts from '../ui/buttons/browse-products'

const CartEmpty = () => {
  return (
    <div className='flex flex-col items-center mt-20 mb-12'>
      <img className='w-80' src="https://web-client.joomcdn.net/web-client/938883be5b5331384a6d.png"
      alt="bag" />
      <p className='text-2xl mt-12 mb-8'>Your cart is empty</p>
      <BrowseProducts />
    </div>
  )
}

export default CartEmpty
