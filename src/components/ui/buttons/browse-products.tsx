import { Navigate, useNavigate } from "react-router-dom"



const BrowseProducts = () => {
    const navigation = useNavigate()
    const onClickHandler = () => {
        navigation('/')
    }
  return (
    <button className='bg-red-500 opacity-80 text-white text-lg
    py-3 px-5 rounded-xl' onClick={onClickHandler}>
      Browse products
    </button>
  )
}

export default BrowseProducts
