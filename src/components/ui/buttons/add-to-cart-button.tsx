import { useLocalStorage } from "usehooks-ts";
import useTimeout from "../../../hooks/use-timeout";
import { ChosenProductType } from "./buy-now-button";

const AddToCartButton = ({ productID }: { productID: string }) => {
  const [products, setProducts] = useLocalStorage<ChosenProductType[] | []>(
    "products",
    []
  );
  const [isOpenCartMenu, setIsOpenCartMenu] = useLocalStorage(
    "isOpenCartMenu",
    false
  );

  const timoutFunction = () => {
    setIsOpenCartMenu(false);
  };
  const { reset, clear } = useTimeout(timoutFunction, 2000);

  const prodObj = {
    id: productID,
    quantity: 1,
    checked: true,
  };

  const isProductAlreadyChosen = products?.some(
    (item: ChosenProductType) => item.id === productID
  );

  const onClickHandler = () => {
    if (isProductAlreadyChosen) {
      setIsOpenCartMenu(true);
      reset();
    } else {
      setProducts((items: ChosenProductType[]) => [prodObj, ...items]);
      setIsOpenCartMenu(true);
      reset();
    }
  };

  return (
    <button
      className="bg-slate-800 text-white text-base font-medium
    py-3 px-5 rounded-xl hover:opacity-80 transition-opacity duration-500"
      onClick={onClickHandler}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
