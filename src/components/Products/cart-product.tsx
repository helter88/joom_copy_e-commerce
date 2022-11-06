import React from 'react'

const CartProduct = () => {
  return (
    <>
       <div className='flex'>
            <div className='flex items-start gap-x-2'>
                <input type="checkbox" className="mt-2 border border-red-400 w-5 h-5 bg-white
                         accent-red-500 cursor-pointer" />
                <img className='w-28 rounded-lg'
                    src="https://placeimg.com/640/480/any?r=0.591926261873231" />
                <p className='text-sm'>Handmade Fresh Table</p> 
            </div>
        </div>
        <div>
            <p className='text-base font-medium'>PLN 149</p>
        </div>
    </>
  )
}

export default CartProduct
