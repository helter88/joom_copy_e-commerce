import { useTransition } from "react";
import { useNavigate } from "react-router-dom"
import useChosenProducts from "../../../hooks/use-chosen-products"

export interface ChosenProductType {
      id: string;
      quantity: number;
      checked: boolean;
      isSelected: boolean;
      onSelect: (id: string) => void
}

const BuyNowButton = ({productID}:{productID:string}) => {
    const navigate = useNavigate()
    const [isPending, startTransition] = useTransition();
    const [products, setProducts] = useChosenProducts()
    const prodObj ={
      id: productID,
      quantity: 1,
      checked: true
    }
    const isProductAlreadyChosen = products?.some((item:ChosenProductType) => item.id === productID )
    const onClickHandler = () => {
        if(isProductAlreadyChosen){
          navigate('/cart')
        }else{
          setProducts((items:ChosenProductType[])=> [prodObj, ...items])
          startTransition(() => navigate('/cart'))
        }
    }

    return (
      <button className='bg-red-500 opacity-80 text-white text-base font-medium
      py-3 px-5 rounded-xl transition-opacity hover:opacity-95 duration-500'
      onClick={onClickHandler}>Buy Now</button>
    )
  }
  
  export default BuyNowButton
    