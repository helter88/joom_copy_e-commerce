import {ReactComponent as Close} from '../../assets/img/close-icon.svg'
const CartMenu = () => {
  return (
    <div className='absolute w-64 bg-white border shadow p-3
    shadow-slate-200 z-10 rounded-lg -left-20 mt-3'>
      <div className='flex justify-between'>
        <div className='flex gap-x-2 text-xs font-bold'>
            <span>My cart</span>
            <span className='text-slate-400'>3</span>
            <span className='text-slate-400'>products</span>
        </div>
        <div className='w-3'>
            <Close className='fill-slate-400 hover:fill-black cursor-pointer' width="100%" />
        </div>
      </div>
    </div>
  )
}

export default CartMenu
