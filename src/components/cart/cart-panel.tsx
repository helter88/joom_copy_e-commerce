import { useState } from "react";
import { ReactComponent as Bin } from "../../assets/img/bin-icon.svg";
import RemoveAllPopover from "../ui/remove-all-popover";
import { useLocalStorage } from "usehooks-ts";
import { ChosenProductType } from "../ui/buttons/buy-now-button";

const CartPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useLocalStorage<ChosenProductType[] | []>(
    "products",
    []
  );
  const toggle = () => setIsOpen((stat) => !stat);
  const onHandleRemoveAll = () => {
    toggle();
  };
  const numberOfAllProducts = products?.filter(
    (product: ChosenProductType) => product.checked === true
  ).length;

  const isAllChecked = products?.every(
    (product: ChosenProductType) => product.checked === true
  );
  const setChange = () =>
    setProducts((prev: ChosenProductType[]) => {
      let newState: ChosenProductType[];
      if (isAllChecked) {
        newState = prev.map((item: ChosenProductType) => {
          item.checked = false;

          return item;
        });
      } else {
        newState = prev.map((item: ChosenProductType) => {
          item.checked = true;

          return item;
        });
      }
      return newState;
    });

  const onClickAccess =
    numberOfAllProducts === 0 ? {} : { onClick: onHandleRemoveAll };
  const disabledStyle =
    numberOfAllProducts === 0
      ? "cursor-not-allowed opacity-40"
      : "cursor-pointer";

  return (
    <div
      className="flex justify-between my-4
    bg-white sm:p-5 rounded-xl"
    >
      <div className="flex relative">
        <div className="flex items-center gap-x-2">
          <input
            checked={isAllChecked}
            onChange={setChange}
            type="checkbox"
            className="border border-red-400 w-5 h-5
               bg-white accent-red-500 cursor-pointer "
          />
          <label
            htmlFor="checked-checkbox"
            className="text-sm 
                font-medium"
          >
            Select all
          </label>
        </div>
        <RemoveAllPopover openStatus={isOpen} setStatus={toggle} />
      </div>
      <div className={`flex gap-x-2 ${disabledStyle}`} {...onClickAccess}>
        <Bin className="text-red-400" />
        <p className="text-sm text-red-400 hidden sm:flex">
          {`Remove all selected (${numberOfAllProducts})`}
        </p>
      </div>
    </div>
  );
};

export default CartPanel;
