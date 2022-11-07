import { useNavigate } from "react-router-dom"

const BuyNowButton = ({productID}:{productID:string}) => {
    const navigate = useNavigate()
    const onClickHandler = () => {
      console.log(productID)
      navigate('/cart')
    }
    return (
      <button className='bg-red-500 opacity-80 text-white text-base font-medium
      py-3 px-5 rounded-xl transition-opacity hover:opacity-95 duration-500'
      onClick={onClickHandler}>Buy Now</button>
    )
  }
  
  export default BuyNowButton
    