import ProductImage from './../../img/default-product.jpeg'
import StarsRating from './../../img/stars-rating.png';

interface CardData {
    price: string;
    description: string;
}

const Card: React.FC<CardData> = ({price, description}) => {
  return (
    <div className="w-1/5 pb-8 cursor-pointer ">
        <div className='overflow-hidden rounded-xl'>
           <img className='rounded-xl hover:scale-110 transition-all duration-500' src={ProductImage} alt='product photo' /> 
        </div>
        
        <p className='pt-4 text-xl font-medium'> {price}</p>
        <img src={StarsRating} alt='stars rating'/>
        <p className='text-xs'>{description}</p>
    </div>
  )
}

export default Card
