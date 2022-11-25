import React from 'react'

const ShowMoreButton = ({onClickHandler}: {onClickHandler:() => void}) => {
  return (
    <div className="self-center pt-8 pb-20 lg:mr-28">
        <button className="text-base font-medium border py-3 px-9 border-black rounded-xl hover:text-red-400 hover:border-red-400" onClick={onClickHandler}>SHOW MORE</button>
      </div>
  )
}

export default ShowMoreButton
