import React from 'react'

const BinPopover = () => {
  return (
    <div className='bg-white border shadow p-3 absolute left-10 -top-8 shadow-slate-200 
        z-10 rounded-lg w-max flex flex-col items-center'> 
        <span className='text-sm'>Are you sure that you want to remove item from your cart?</span>
        <div className='flex gap-x-2 mt-3'>
            <button className='text-sm py-0.5 px-10 bg-red-400
             text-white rounded-full hover:opacity-80'>Yes</button>
            <button className='text-sm py-0.5 px-10 border border-slate-400 text-slate-400 bg-white  rounded-full'>No</button>  
        </div>
        
    </div>
  )
}

export default BinPopover
