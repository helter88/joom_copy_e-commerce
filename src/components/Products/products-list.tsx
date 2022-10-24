import { useState, useEffect } from 'react'
import Card from "./card";
import { useInView } from 'react-intersection-observer';
import ShowMoreButton from './show-more-button';
import { ResponseProduct, useProductsSortByCategory } from '../../hooks/products-sort-by-category';
import { useSearchParams } from 'react-router-dom';
import { useProductsSortAscendingDescending } from '../../hooks/products-sort-ascending-descending';



const ProductsList = () => {
  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get('category');
  const sortTypeFromURL = searchParams.get('sort');

  const {sortedProductsByCategory, isError} = useProductsSortByCategory(categoryFromURL);
  const {sortedProducts} = useProductsSortAscendingDescending(sortTypeFromURL, sortedProductsByCategory )
  const [numProducts, setNumProducts] = useState(20);
  const {ref:targetRef, inView} = useInView()

  // console.log(sortedProducts);

  useEffect(() =>{
      setNumProducts(20);
  }, [searchParams])

  useEffect(() => {
    if(inView){
      if(numProducts < sortedProductsByCategory.length){
        add20Products();
      } 
    }
    
  }, [numProducts, inView]);

  if (isError) {
    return <p className='text-red-400'>Error in fetching Products</p>
  }
  
  const add20Products = () => setNumProducts(num => num+20 )
  
  const onClickHandler = () => add20Products();
  const dataSliced = sortedProducts?.slice(0,numProducts)


  const allProducts = dataSliced?.map(({title, price, images, id}:ResponseProduct) => <Card key={id} price={`PLN ${price}`} title={title} imageSource={images[0]}/>)
  return (
    <div className="mt-2 pt-5 flex flex-col">
      <main className="mx-auto w-4/5 flex flex-wrap gap-x-5">
       {allProducts}
      </main>
      { numProducts === 20 &&
        <ShowMoreButton onClickHandler={onClickHandler} />
      }
      { numProducts >20 && <div className='self-center pt-8 pb-20 mr-28' 
      ref={targetRef}> No more products to display</div>}
    </div>
    
  )
}

export default ProductsList
