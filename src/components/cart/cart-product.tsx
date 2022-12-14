import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { ReactComponent as Bin } from "../../assets/img/bin-icon.svg";
import useFetchProductById from "../../hooks/use-fetch-product-by-id";
import { noImagePath, onImageError } from "../products/card";
import BinPopover from "../ui/bin-popover";
import { ChosenProductType } from "../ui/buttons/buy-now-button";
import QuantityManager from "../ui/quantity-manager";

const CartProduct = ({ checked, id, quantity }: ChosenProductType) => {
  const { product, isError } = useFetchProductById(id);
  const [isBinClicked, setIsBinClicked] = useState(false);
  const [products, setProducts] = useLocalStorage<ChosenProductType[] | []>(
    "products",
    []
  );

  const updateBinState = () => setIsBinClicked((stat) => !stat);

  if (isError) {
    return <></>;
  }

  const isChecked =
    products.filter((item: ChosenProductType) => item.id === id)[0].checked ===
    true;

  const setChange = () =>
    setProducts((prev: ChosenProductType[]) =>
      prev.map((item: ChosenProductType) => {
        if (item.id === id) {
          item.checked = !item.checked;
        }
        return item;
      })
    );

  return (
    <div className="flex justify-between mb-8 ">
      <div className="flex">
        <div className="flex items-start gap-x-2">
          <input
            checked={isChecked}
            onChange={setChange}
            type="checkbox"
            className="mt-2 border border-red-400 w-5 h-5 bg-white
                         accent-red-500 cursor-pointer"
          />
          <img
            className="w-28 rounded-lg"
            src={product?.images[0] || noImagePath}
            alt="product photo"
            onError={onImageError}
          />
          <div className="flex flex-col justify-between h-full">
            <p className="text-sm">{product?.title}</p>
            <p className="text-base font-medium sm:invisible">{`PLN ${quantity * product?.price
              }`}</p>
            <div className="flex gap-x-0.5">
              <QuantityManager quantity={quantity} id={id} />
              <div className="relative flex">
                <Bin
                  className="ml-4 text-slate-400 hover:text-red-400 cursor-pointer"
                  onClick={updateBinState}
                />
                {isBinClicked && (
                  <BinPopover id={id} updateBinState={updateBinState} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-base font-medium invisible sm:visible ">{`PLN ${quantity * product?.price
          }`}</p>
      </div>
    </div>
  );
};

export default CartProduct;
