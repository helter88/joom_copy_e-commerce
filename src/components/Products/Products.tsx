import { useState, useEffect } from 'react'
import Card from "./Card"
import {QueryObserver, useQuery} from '@tanstack/react-query';
import Axios from 'axios';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import ShowMoreButton from './ShowMoreButton';
import { useProducts } from '../../hooks/products';
import { useSearchParams } from 'react-router-dom';

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
  const [searchParams] =  useSearchParams()
  const category = searchParams.get('category') as string

  const {isLoading, products} = useProducts({category})  
  const [numProducts, setNumProducts] = useState(20);
  const {ref:targetRef, inView} = useInView()

  useEffect(() => {
    if(inView){
      add20Products();
    }
    
  }, [numProducts, inView]);
 
  if (false) {
    return <p className='text-red-400'>Error in fetching Products</p>
  }
  
  const add20Products = () => setNumProducts(num => num+20 )
  
  const onClickHandler = () => add20Products();
  const dataSliced = products?.slice(0,numProducts)


  const allProducts = dataSliced?.map(({title, price, images, id}:ResponseProduct) => <Card key={id} price={`PLN ${price}`} title={title} imageSource={images[0]}/>)
  return (
    <div className="mt-2 pt-5 flex flex-col">
      <main className="mx-auto w-4/5 flex flex-wrap gap-x-5">
       {allProducts}
      </main>
      { numProducts === 20 &&
        <ShowMoreButton onClickHandler={onClickHandler} />
      }
      { numProducts >20 && <div ref={targetRef}> See more</div>}
    </div>
    
  )
}

export default Products
