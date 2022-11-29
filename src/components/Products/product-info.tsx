import { useEffect, useState } from "react";
import useSingleProduct from "../../hooks/use-single-product";
import AddToCartButton from "../ui/buttons/add-to-cart-button";
import BuyNowButton from "../ui/buttons/buy-now-button";
import FiveStarScore from "../ui/five-star-score";

function ProductInfo() {
  const { product } = useSingleProduct();
  const [dynamicScore, setDynamicScore] = useState<number>(1);

  useEffect(() => {
    const virtualScore = Number((Math.random() * (5 - 1) + 1).toFixed(1));
    setDynamicScore(virtualScore);
  }, []);
  return (
    <>
      <p className="text-2xl font-medium text-stone-800">{product?.title}</p>
      <div className="flex items-baseline">
        <div className="w-20 flex gap-x-1 py-2">
          <FiveStarScore
            quantity={5}
            score={dynamicScore}
            fillColor="rgb(248 113 113)"
            stroke="rgb(248 113 113)"
            emptyColor="rgb(241 245 249)"
          />
        </div>
        <p className="ml-2 text-base text-slate-400">{dynamicScore}</p>
      </div>
      <p className="text-4xl mt-8">PLN {product?.price}</p>
      <div className="my-8 space-x-3">
        <AddToCartButton productID={product?.id} />
        <BuyNowButton productID={product?.id} />
      </div>
      <div>
        <p className="text-lg font-medium text-stone-800 my-2">Description:</p>
        <p className="text-sm leading-6 text-stone-800">
          {product?.description}
        </p>
      </div>
    </>
  );
}

export default ProductInfo;
