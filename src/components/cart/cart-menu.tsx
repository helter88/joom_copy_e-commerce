import CartMenuProduct from "./cart-menu-product";
import CartMenuTop from "./cart-menu-top";
import { useLocalStorage } from "usehooks-ts";
import { ChosenProductType } from "../ui/buttons/buy-now-button";
import { useLocation, useNavigate } from "react-router-dom";

export interface CartMenuType {
  windowStatus: boolean;
  handelMouseEnter: () => void;
  handleMouseLeave?: () => void;
}

const CartMenu: React.FC<CartMenuType> = ({
  windowStatus,
  handelMouseEnter,
  handleMouseLeave,
}) => {
  const [products, setProducts] = useLocalStorage<ChosenProductType[] | []>(
    "products",
    []
  );
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isHiddenStyle = () => {
    if (products?.length !== 0 && windowStatus && pathname === "/cart") {
      return "hidden";
    } else if (products?.length !== 0 && windowStatus) {
      return "";
    } else {
      return "hidden";
    }
  };

  const productListContainerStyle =
    products.length >= 3 && "h-48 overflow-y-scroll";

  const productsList = products?.map((product: ChosenProductType) => (
    <CartMenuProduct key={product?.id} prodId={product?.id} />
  ));

  const onClickHandler = () => {
    navigate("/cart");
  };

  return (
    <div
      className={`absolute w-80 bg-white border shadow p-3
    shadow-slate-200 z-10 rounded-lg -left-28 mt-3 ${isHiddenStyle()}`}
      onMouseEnter={handelMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CartMenuTop />
      <div className={`${productListContainerStyle}`}>{productsList}</div>
      <div className="border-t pt-4 flex justify-center">
        <button
          className="bg-red-400 text-white rounded-lg w-full
            hover:opacity-80 py-2"
          onClick={onClickHandler}
        >
          {" "}
          Go to cart
        </button>
      </div>
    </div>
  );
};

export default CartMenu;
