import CartEmpty from "../components/cart/cart-empty"
import CartWithProducts from "../components/cart/cart-with-products"


const Cart = () => {
  return (
    <div className='mt-16 pb-24 bg-slate-100 absolute inset-x-0'>
      <CartWithProducts />
      {/* <CartEmpty /> */}
    </div>
  )
}

export default Cart
