import { useSearchParams } from 'react-router-dom'
import useUpdateFilters from '../../helpers/update-filters'
import {ReactComponent as ArrowMenu} from './../../img/menu_arrow-icon.svg'

const filters = [
  {key: 'asc', value: "Ascending"},
  {key: 'desc', value: 'Descending'}
] 

const FilterButton = () => {
  const updateFilters = useUpdateFilters()

  const [searchParams] = useSearchParams() 
  const sort = searchParams.get('sort') as string
 
  return ( 
    <button className='flex space-x-2 items-center bg-slate-100 rounded-xl p-2'>
      <p className='text-sm font-normal text-gray-400'>Sort</p> 
      <select value={sort} onChange={(e) => updateFilters({key: 'sort', value: e.target.value})}>
        {filters.map(({key, value}) => <option value={key}>{value}</option>)}
      </select> 
      <ArrowMenu />
    </button>
  )
}

export default FilterButton
