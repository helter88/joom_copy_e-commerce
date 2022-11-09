import {ReactComponent as Close} from '../../assets/img/close-icon.svg'

const CartMenuTop = () => {
  return (
    <div className='flex justify-between border-b pb-3'>
        <div className='flex gap-x-2 text-xs font-bold'>
            <span>My cart</span>
            <span className='text-slate-400'>3</span>
            <span className='text-slate-400'>products</span>
        </div>
        <div className='w-3'>
            <Close className='fill-slate-400 hover:fill-black cursor-pointer' width="100%" />
        </div>
      </div>
  )
}

export default CartMenuTop
