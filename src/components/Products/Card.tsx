
import StarsRating from './../../assets/img/stars-rating.png';

export interface CardData {
    price: string;
    title: string;
    imageSource: string;
}

const noImagePath = "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"

const Card: React.FC<CardData> = ({price, title, imageSource}) => {

  const onImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) =>{
    e.currentTarget.src = noImagePath
  }      

  return (
    <div className="w-1/5 pb-8 cursor-pointer">
        <div className='overflow-hidden rounded-xl'>
           <img className='rounded-xl hover:scale-110 transition-all duration-500' src={imageSource || noImagePath} alt='product photo' onError={onImageError} /> 
        </div>
        
        <p className='pt-4 text-xl font-medium'> {price}</p>
        <img src={StarsRating} alt='stars rating' />
        <p className='text-xs'>{title}</p>
    </div>
  )
}

export default Card
