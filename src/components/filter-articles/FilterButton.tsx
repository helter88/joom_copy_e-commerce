import {ReactComponent as ArrowMenu} from './../../assets/img/menu_arrow-icon.svg'

const FilterButton = ({onClickHandler}: {onClickHandler: () => void}) => {
  return (
    <button className='flex space-x-2 items-center bg-slate-100 rounded-xl p-2'
      onClick={onClickHandler}>
      <p className='text-sm font-normal text-gray-400'>Sort</p>
      <p className='text-sm font-normal text-gray-600 '>By default</p>
      <ArrowMenu />
    </button>
  )
}

export default FilterButton
