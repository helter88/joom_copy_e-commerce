import CartEmpty from "../components/cart/cart-empty"
import CartWithProducts from "../components/cart/cart-with-products"
import { useLocalStorage } from 'usehooks-ts';
import { ChosenProductType } from "../components/ui/buttons/buy-now-button";



const Cart = () => {
  const [products] = useLocalStorage<ChosenProductType[]|[]>('products',[]);
  const isAnyProductAdded = products.length ===0 ? false : true

  return (
    <div className='mt-16 pb-24 bg-slate-100 absolute inset-x-0'>
      {isAnyProductAdded ? <CartWithProducts /> : <CartEmpty /> }
      
    </div>
  )
}

export default Cart
