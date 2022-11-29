import { ChosenProductType } from "./buttons/buy-now-button";
import { useLocalStorage } from "usehooks-ts";

export interface BinPopoverType {
  id: string;
  updateBinState: () => void;
}

const BinPopover: React.FC<BinPopoverType> = ({ id, updateBinState }) => {
  const [products, setProducts] = useLocalStorage<ChosenProductType[] | []>(
    "products",
    []
  );
  const onYesHandler = () => {
    setProducts((items: ChosenProductType[]) =>
      items.filter((product: ChosenProductType) => product.id !== id)
    );
    updateBinState();
  };

  return (
    <div
      className="bg-white border shadow p-3 absolute left-12 -top-8 shadow-slate-200 
        z-10 rounded-lg w-max flex flex-col items-center 
        before:w-0 before:h-0 before:border-[10px] before:border-transparent
         before:border-r-slate-200 before:absolute before:-left-5"
    >
      <span className="text-sm">
        Are you sure that you want to remove item from your cart?
      </span>
      <div className="flex gap-x-2 mt-3">
        <button
          className="text-sm py-0.5 px-10 bg-red-400
             text-white rounded-full hover:opacity-80"
          onClick={onYesHandler}
        >
          Yes
        </button>
        <button
          className="text-sm py-0.5 px-10 border
             border-slate-400 text-slate-400 bg-white rounded-full"
          onClick={updateBinState}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default BinPopover;
