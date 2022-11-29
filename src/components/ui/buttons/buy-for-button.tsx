import React, { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { getPrice } from "../../../utils/fetch-product-price";
import { ChosenProductType } from "./buy-now-button";

const BuyForButton = () => {
  const [products] = useLocalStorage<ChosenProductType[] | []>("products", []);
  const [priceSum, setPriceSum] = useState(0);

  const productsCheckedList = products?.filter((prod: ChosenProductType) => {
    return prod.checked === true;
  });

  useEffect(() => {
    const totalPrice =
      productsCheckedList?.reduce(
        async (prev: Promise<number>, current: ChosenProductType) => {
          let preVal = await prev;
          const price = await getPrice(current.id);
          return preVal + current.quantity * Number(price);
        },
        Promise.resolve(0)
      ) || 0;
    totalPrice.then((sum) => {
      setPriceSum(sum);
    });
  }, [products]);

  return (
    <button
      className="w-full bg-red-400 text-white text-lg 
    py-3 rounded-xl hover:opacity-80 duration-300 my-5"
    >
      Buy for PLN {priceSum}
    </button>
  );
};

export default BuyForButton;
