import { constants } from 'perf_hooks';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { ResponseProduct, useProductsSortByCategory } from '../../hooks/products-sort-by-category';

export interface MenuType {
  inputText: string
}

const SearchResultsMenu: React.FC<MenuType> = ({inputText}) => {
  const {sortedProductsByCategory: allProducts}= useProductsSortByCategory(null);

  const [isOpen, setIsOpen] = useState(false);
  const [foundProducts, setFoundProducts] = useState<null |ResponseProduct[]>(null)

  useEffect(() =>{
    if (inputText === ''){
      setIsOpen(false)
    }else{
      setIsOpen(true)
      setFoundProducts(allProducts?.filter(({title}:ResponseProduct) => {
        return title?.toLowerCase()?.startsWith(inputText.toLowerCase())
      }
      ))
    }
  },[inputText])




  const displayProducts = foundProducts?.map(({title}) =>{
    return <p key={title} className='p-3 hover:bg-slate-100'>{title}</p>
  })

  return (
    <div className={`absolute ${isOpen ? '' : 'hidden'} py-2 z-10 bg-white rounded-xl w-2/5 
     border-slate-100 shadow-sm shadow-black
    text-sm font-normal whitespace-nowrap text-gray-600`}>
      {displayProducts?.slice(0,5)}
    </div>
  )
}

export default SearchResultsMenu
