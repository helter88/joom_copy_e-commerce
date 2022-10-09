import { useState } from 'react'
import Card from "./Card"
import {useQuery} from '@tanstack/react-query';
import Axios from 'axios';
import ShowMoreButton from './ShowMoreButton';

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

const fetchProducts = ()=>{
  return Axios.get("https://api.escuelajs.co/api/v1/products").then(resp=> resp.data)
}

const Products: React.FC = () => {
  const {data, isError} = useQuery(['products'], fetchProducts)
  const [numProducts, setNumProducts] = useState(20)


  if (isError) {
    return <p className='text-red-400'>Error in fetching Products</p>
  }
  
  const add20Products = () => setNumProducts(num => num+20 )
  
  const onClickHandler = () => setNumProducts(num => num+20 );
  const dataSliced = data?.slice(0,numProducts)


  const allProducts = dataSliced?.map(({title, price, images, id}:ResponseProduct) => <Card key={id} price={`PLN ${price}`} title={title} imageSource={images[0]}/>)

  

  // const showButton = numProducts === 20 && 

  return (
    <div className="mt-2 pt-5 flex flex-col">
      <main className="mx-auto w-4/5 flex flex-wrap gap-x-5">
       {allProducts}
      </main>
      <div className="self-center pt-8 pb-20 mr-28">
      <ShowMoreButton onClickHandler={onClickHandler} />
      </div>
      
    </div>
    
  )
}

export default Products
