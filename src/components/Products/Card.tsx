
import FiveStarScore from '../ui/five-star-score';

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
  
  const dynamicScore = Number(((Math.random()* (5-1) + 1)).toFixed(1))
  
 
  return (
    <div className="w-1/5 pb-8 cursor-pointer">
        <div className='overflow-hidden rounded-xl'>
           <img className='rounded-xl hover:scale-110 transition-all duration-500' src={imageSource || noImagePath} alt='product photo' onError={onImageError} /> 
        </div>
        
        <p className='pt-4 text-xl font-medium'> {price}</p>
        <div className='w-20 flex gap-x-1 py-2'>
          <FiveStarScore quantity={5} score={dynamicScore} 
          fillColor="rgb(248 113 113)" stroke="rgb(248 113 113)" emptyColor="rgb(241 245 249)" />
        </div>
        <p className='text-xs'>{title}</p>
    </div>
  )
}

export default Card
