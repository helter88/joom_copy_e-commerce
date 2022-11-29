import Axios from "axios";
import { useMemo } from "react";
import useProducts from "./use-products";

export interface ResponseProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
}

export const useProductsSortByCategory = (category: string | null) => {
  const { allProducts, isError, isLoading } = useProducts();

  const sortedProductsByCategory = useMemo(() => {
    return category
      ? allProducts?.filter(
          (d: ResponseProduct) => d.category.name.toLowerCase() === category
        )
      : allProducts;
  }, [category, isLoading]);
  return { sortedProductsByCategory, isError };
};
