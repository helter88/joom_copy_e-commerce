import React from 'react'

const QuantityManager = ({quantity}: {quantity: number}) => {
  return (
    <>
        <button className='rounded-full  bg-slate-100 text-lg h-5 w-5
            flex items-center justify-center'>
                <span>-</span>
        </button>
        <span className='text-sm h-5 w-5 text-center'>{quantity}</span>
        <button className='rounded-full bg-slate-100 text-lg h-5 w-5
            flex items-center justify-center'>
                <span>+</span>
        </button>
    </>
  )
}

export default QuantityManager
