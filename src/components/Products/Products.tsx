import Card from "./Card"
import {useQuery} from '@tanstack/react-query';
import Axios from 'axios';

export interface ResponseProduct  {
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
const Products = () => {
  const {data, isError} = useQuery(['products'], ()=>{
    return Axios.get("https://api.escuelajs.co/api/v1/products").then((res) => res.data )
  } )

  if (isError) {
    return <p className='text-red-400'>Error in fetching Products</p>
  }

  const allProducts = data?.map(({title, price, images}:ResponseProduct) => <Card price={`PLN ${price}`} title={title} imageSource={images[0]}/>)
  return (
    <main className="mt-2 pt-5 mx-auto w-4/5 flex flex-wrap gap-x-5">
       {allProducts}
    </main>
  )
}

export default Products
