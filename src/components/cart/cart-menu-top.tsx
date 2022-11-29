import { useLocalStorage } from "usehooks-ts";
import { ReactComponent as Close } from "../../assets/img/close-icon.svg";

const CartMenuTop = () => {
  const [products, setProducts] = useLocalStorage("products", []);
  const [isOpenCartMenu, setIsOpenCartMenu] = useLocalStorage(
    "isOpenCartMenu",
    false
  );

  const numProd = products.length;
  return (
    <div className="flex justify-between border-b pb-3">
      <div className="flex gap-x-2 text-xs font-bold">
        <span>My cart</span>
        <span className="text-slate-400">{numProd}</span>
        <span className="text-slate-400">products</span>
      </div>
      <div className="w-3" onClick={() => setIsOpenCartMenu(false)}>
        <Close
          className="fill-slate-400 hover:fill-black cursor-pointer"
          width="100%"
        />
      </div>
    </div>
  );
};

export default CartMenuTop;
