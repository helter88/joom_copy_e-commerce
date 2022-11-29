import { useState, useEffect } from "react";
import Card from "./card";
import { useInView } from "react-intersection-observer";
import ShowMoreButton from "./show-more-button";
import {
  ResponseProduct,
  useProductsSortByCategory,
} from "../../hooks/products-sort-by-category";
import { useSearchParams } from "react-router-dom";
import { useProductsSortAscendingDescending } from "../../hooks/products-sort-ascending-descending";
import { useProductsSearch } from "../../hooks/products-search";

const ProductsList = () => {
  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category");
  const sortTypeFromURL = searchParams.get("sort");
  const searchTypeFromURL = searchParams.get("search");

  const { searchedProducts, isError: isError2 } =
    useProductsSearch(searchTypeFromURL);
  const { sortedProductsByCategory, isError } =
    useProductsSortByCategory(categoryFromURL);

  const products =
    searchTypeFromURL !== null ? searchedProducts : sortedProductsByCategory;

  const showError = searchTypeFromURL !== null ? isError2 : isError;

  const { sortedProducts } = useProductsSortAscendingDescending(
    sortTypeFromURL,
    products
  );
  const [numProducts, setNumProducts] = useState(20);
  const { ref: targetRef, inView } = useInView();

  // console.log(sortedProducts);

  useEffect(() => {
    setNumProducts(20);
  }, [searchParams]);

  useEffect(() => {
    if (inView) {
      if (numProducts < products.length) {
        add20Products();
      }
    }
  }, [numProducts, inView]);

  if (showError) {
    return <p className="text-red-400">Error in fetching Products</p>;
  }

  const add20Products = () => setNumProducts((num) => num + 20);

  const onClickHandler = () => add20Products();
  const dataSliced = sortedProducts?.slice(0, numProducts);

  const allProducts = dataSliced?.map(
    ({ title, price, images, id }: ResponseProduct) => (
      <Card
        key={id}
        price={`PLN ${price}`}
        title={title}
        imageSource={images[0]}
        id={id}
      />
    )
  );
  return (
    <div className="mt-2 pt-5 flex flex-col md:min-w-[50rem]">
      <main className="md:mx-auto md:w-4/5 flex justify-center md:justify-start flex-wrap md:gap-x-5 gap-x-3">
        {allProducts}
      </main>
      {numProducts === 20 && <ShowMoreButton onClickHandler={onClickHandler} />}
      {numProducts > 20 && (
        <div className="self-center pt-8 pb-20 lg:mr-28" ref={targetRef}>
          {" "}
          No more products to display
        </div>
      )}
    </div>
  );
};

export default ProductsList;
