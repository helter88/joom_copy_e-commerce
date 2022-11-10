import userEvent from '@testing-library/user-event';
import { useEffect, useState } from 'react';
import {ReactComponent as Bin} from '../../assets/img/bin-icon.svg';
import RemoveAllPopover from '../ui/remove-all-popover';

interface Props{
  onSelectAll: () => void
  isAllSelected: boolean
}

const CartPanel = ({onSelectAll, isAllSelected}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(true);
    const toggle = () => setIsOpen((stat)=> !stat)
    const onHandleRemoveAll = () => {
        toggle()
    }

    const handleSelect = () => {
      setIsSelected(!isSelected)
      onSelectAll()
    } 
 
    useEffect(() => setIsSelected(isAllSelected), [isAllSelected])

  return (
    <div className='flex justify-between my-4
    bg-white p-5 rounded-xl'> 
      <div className= 'flex relative'>
            <div className='flex items-center gap-x-2'>
              <input checked={isSelected} onChange={handleSelect} type="checkbox" className="border border-red-400 w-5 h-5
               bg-white accent-red-500 cursor-pointer " />
              <label htmlFor="checked-checkbox" className="text-sm 
                font-medium">Select all</label>  
            </div>
           <RemoveAllPopover openStatus={isOpen} setStatus={toggle}/>
       </div>
        <div className='flex gap-x-2 cursor-pointer' onClick={onHandleRemoveAll}>
            <Bin className='text-red-400'/>
            <p className="text-sm text-red-400">Remove all selected</p>  
        </div>
       
   </div>
  )
}

export default CartPanel
