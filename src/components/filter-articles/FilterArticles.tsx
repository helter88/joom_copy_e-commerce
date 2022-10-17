import FilterButton from "./FilterButton"
import FilterButtonMenu from "./FilterButtonMenu"
import { useState, useEffect, useRef } from 'react'

const FilterArticles = () => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(()=>{
    document.body.addEventListener("click", handleClickOutside)
    return ()=> document.body.removeEventListener('click', handleClickOutside)
  },[isClicked])

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e:any) => {
    if (isClicked && !ref.current?.contains(e.target)) {
      setIsClicked(false);
    }
  }

  const onClickHandler = () => setIsClicked((val)=> !val)
  return (
    <div className="mt-20 pt-5 mx-auto w-4/5">
      <div className="relative" ref={ref}>
        <FilterButton onClickHandler={onClickHandler} />
        <FilterButtonMenu options={['By default','Ascending price', 'Descending price']}
          isActive={isClicked}/>
      </div>
      

    </div>
  )
}

export default FilterArticles
