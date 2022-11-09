import {ReactComponent as Bin} from '../../assets/img/bin-icon.svg';
import RemoveAllPopover from '../ui/remove-all-popover';

const CartPanel = () => {
    const onHandleRemoveAll = () => {
        
    }
  return (
    <div className='flex justify-between my-4
    bg-white p-5 rounded-xl'>
      <div className= 'flex relative'>
            <div className='flex items-center gap-x-2'>
              <input type="checkbox" className="border border-red-400 w-5 h-5
               bg-white accent-red-500 cursor-pointer " />
              <label htmlFor="checked-checkbox" className="text-sm 
                font-medium">Select all</label>  
            </div>
           <RemoveAllPopover />
       </div>
        <div className='flex gap-x-2' onClick={onHandleRemoveAll}>
            <Bin className='text-red-400'/>
            <p className="text-sm text-red-400">Remove all selected</p>  
        </div>
       
   </div>
  )
}

export default CartPanel
