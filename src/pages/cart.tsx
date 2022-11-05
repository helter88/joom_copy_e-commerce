import React from 'react'

function Cart() {
  return (
    <div className='mt-16 bg-slate-100 absolute inset-x-0'>
      <div className='px-72'>
        <p className='text-2xl font-medium mt-8 mb-3'>My cart</p>
        <div className='grid grid-cols-3 gap-x-8'>
            <div className='col-span-2 flex justify-between my-4
            bg-white p-5 rounded-xl'>
                <div>
                <p>Select all</p>  
                </div>
                <div>
                <p>Remove all selected</p>  
                </div>  
            </div>
            <div className='col-span-1'>
                <p>Your cart</p>
            </div>
        </div>
            
      </div>
    </div>
  )
}

export default Cart
