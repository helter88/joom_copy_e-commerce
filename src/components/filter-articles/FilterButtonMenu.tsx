import React from 'react'
import { useSearchParams } from 'react-router-dom';

export interface FilterButtonMenuProps {
    options: string[];
    isSelected: true | false
    toggleClick: ()=>void
}


const FilterButtonMenu: React.FC<FilterButtonMenuProps> = ({options, isSelected, toggleClick}) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const categoryParamsURL = searchParams.get('category');

  
    const onClickHandler= (v:string) => setSearchParams({category: `${categoryParamsURL}`,
      sort: v })

    const allOptions = options.map((v)=>(
        <div key={v} className='py-2 text-sm hover:text-red-400'>
           <button onClick={() => {
            onClickHandler(v);
            toggleClick();
            }}>{v}</button> 
        </div>
        
        ))
  return (
    <div className={`absolute flex flex-col mt-2 bg-white shadow-lg shadow-black w-64 pl-4 rounded-xl z-10 ${isSelected ? '' : 'hidden'}`}>
      {allOptions}
    </div>
  )
}

export default FilterButtonMenu
