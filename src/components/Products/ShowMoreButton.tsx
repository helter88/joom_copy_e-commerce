import React from 'react'

const ShowMoreButton = ({onClickHandler}:  {onClickHandler: () => void}) => {
  return ( 
    <button className="text-base font-medium border py-3 px-9 border-black rounded-xl hover:text-red-400 hover:border-red-400" onClick={ onClickHandler }>SHOW MORE</button>
  ) 
}

export default ShowMoreButton
