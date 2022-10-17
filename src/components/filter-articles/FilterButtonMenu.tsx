import React from 'react'

export interface FilterButtonMenuProps {
    options: string[];
    isActive: true | false
}

const FilterButtonMenu: React.FC<FilterButtonMenuProps> = ({options, isActive}) => {
    const allOptions = options.map((v)=>(
        <div key={v} className='py-2 text-sm hover:text-red-400'>
           <a>{v}</a> 
        </div>
        
        ))
  return (
    <div className={`absolute flex flex-col mt-2 bg-white shadow-lg shadow-black w-64 pl-4 rounded-xl z-10 ${isActive ? '' : 'hidden'}`}>
      {allOptions}
    </div>
  )
}

export default FilterButtonMenu
