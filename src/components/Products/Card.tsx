
import StarsRating from './../../img/stars-rating.png';

export interface CardData {
    price: string;
    title: string;
    imageSource: string;
}

const Card: React.FC<CardData> = ({price, title, imageSource}) => {
  return (
    <div className="w-1/5 pb-8 cursor-pointer ">
        <div className='overflow-hidden rounded-xl'>
           <img className='rounded-xl hover:scale-110 transition-all duration-500' src={imageSource} alt='product photo' /> 
        </div>
        
        <p className='pt-4 text-xl font-medium'> {price}</p>
        <img src={StarsRating} alt='stars rating'/>
        <p className='text-xs'>{title}</p>
    </div>
  )
}

export default Card
