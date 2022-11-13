import CartMenuProduct from "./cart-menu-product"
import CartMenuTop from "./cart-menu-top"
import { useLocalStorage } from "usehooks-ts";
import { ChosenProductType } from "../ui/buttons/buy-now-button";
import { useLocation } from "react-router-dom";

export interface CartMenuType {
  mouseEnterStatus: boolean;
}

const CartMenu:React.FC<CartMenuType> = ({mouseEnterStatus}) => {
  const [products, setProducts] = useLocalStorage<ChosenProductType[]|[]>('products',[]);
  const {pathname} = useLocation()
  
  const isHiddenStyle = () => {
    if (products?.length !== 0 && mouseEnterStatus && pathname === "/cart"){
      return "hidden"
    }else if (products?.length !== 0 && mouseEnterStatus) {
      return ""
    }else {
      return "hidden"
    }
  }

  const productsList = products?.map((product:ChosenProductType) =>
      <CartMenuProduct key={product?.id} />
  )
 
  return (
    <div className={`absolute w-80 bg-white border shadow p-3
    shadow-slate-200 z-10 rounded-lg -left-28 mt-3 ${isHiddenStyle()}`}>
      <CartMenuTop /> 
      <div className="h-48 overflow-y-scroll">
        {productsList}
      </div>
      <div className="border-t pt-4 flex justify-center">
        <button className="bg-red-400 text-white rounded-lg w-full
            hover:opacity-80 py-2"> Go to cart</button>
      </div>
      
    </div>
  )
}

export default CartMenu
