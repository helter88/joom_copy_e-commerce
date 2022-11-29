import { ReactComponent as Bin } from "../../assets/img/bin-icon.svg";
// import useChosenProducts from '../../hooks/use-chosen-products';
import { ChosenProductType } from "../ui/buttons/buy-now-button";
import { useLocalStorage } from "usehooks-ts";
import CartPanel from "./cart-panel";
import CartProduct from "./cart-product";
import YourCart from "./your-cart";

const CartWithProducts = () => {
  const [products] = useLocalStorage<ChosenProductType[] | []>("products", []);
  const allCartProducts = products?.map((product: ChosenProductType) => {
    return (
      <CartProduct
        key={product.id}
        checked={product.checked}
        id={product.id}
        quantity={product.quantity}
      />
    );
  });
  return (
    <>
      <div className="px-4  2xl:px-56 xl:px-48 lg:px-28 md:px-10">
        <p className="text-2xl font-medium mt-8 mb-3">My cart</p>
        <div className="grid grid-cols-3 gap-x-8">
          <div className="col-span-2 ">
            <CartPanel />
            <div className=" my-4 bg-white p-5 rounded-xl">
              {allCartProducts}
            </div>
          </div>
          <div className="col-span-1">
            <YourCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartWithProducts;
