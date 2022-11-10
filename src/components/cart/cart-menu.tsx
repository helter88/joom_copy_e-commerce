import CartMenuProduct from "./cart-menu-product"
import CartMenuTop from "./cart-menu-top"

const CartMenu = () => {
  return (
    <div className='absolute w-80 bg-white border shadow p-3
    shadow-slate-200 z-10 rounded-lg -left-28 mt-3 hidden'>
      <CartMenuTop /> 
      <div className="h-48 overflow-y-scroll">
        <CartMenuProduct />
        <CartMenuProduct />
        <CartMenuProduct />
      </div>
      <div className="border-t pt-4 flex justify-center">
        <button className="bg-red-400 text-white rounded-lg w-full
            hover:opacity-80 py-2"> Go to cart</button>
      </div>
      
    </div>
  )
}

export default CartMenu
