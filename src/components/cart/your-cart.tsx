import { useRef, useState } from "react";
import BuyForButton from "../ui/buttons/buy-for-button";

const YourCart = () => {
  const [isValid, setIsValid] = useState(true);
  const textref = useRef(null);

  const onHandleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsValid(false);
    }
  };
  const onClickHandler = () => {
    setIsValid(false);
  };

  return (
    <div className=" my-4 bg-white p-5 rounded-xl">
      <p className="text-xl font-medium">Your cart</p>
      <div className="mt-8 flex gap-x-10">
        <input
          type="text"
          placeholder="Promo code"
          className="rounded-xl h-11 outline-none 
        border pl-4 w-2/3"
          ref={textref}
          onKeyDown={onHandleKeyDown}
        />
        <button
          className="text-base font-medium text-red-400"
          onClick={onClickHandler}
        >
          Apply
        </button>
      </div>
      {isValid || (
        <p className="ml-4 text-sm my-2 text-red-400">
          This is an invalid promo code
        </p>
      )}
      <BuyForButton />
    </div>
  );
};

export default YourCart;
