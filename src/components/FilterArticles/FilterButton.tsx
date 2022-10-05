import {ReactComponent as ArrowMenu} from './../../img/menu_arrow-icon.svg'
const FilterButton = () => {
  return (
    <button className='flex space-x-2 items-center bg-slate-100 rounded-xl p-2'>
      <p className='text-sm font-normal text-gray-400'>Sortuj</p>
      <p className='text-sm font-normal text-gray-600 '>Domyślnie</p>
      <ArrowMenu />
    </button>
  )
}

export default FilterButton
