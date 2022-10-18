import { useState, useEffect, useRef } from 'react'

const useOpenCloseDropdown = () => {
    const [isClicked, setIsClicked] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e:MouseEvent) => {
        if (isClicked && !elementRef.current?.contains(e?.target as Node)) {
          setIsClicked(false);
        }
      }

    useEffect(()=>{
        document.body.addEventListener("click", handleClickOutside)
        return ()=> document.body.removeEventListener('click', handleClickOutside)
      },[isClicked])

    const toggle = () => setIsClicked((val)=> !val)
  return {isClicked, toggle, elementRef}
}

export default useOpenCloseDropdown
