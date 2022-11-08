import {ReactComponent as Bell } from './../../assets/img/bell-icon.svg'
import {ReactComponent as Person } from './../../assets/img/person-icon.svg'
import {ReactComponent as Box } from './../../assets/img/box-icon.svg'
import {ReactComponent as ShoppingCart } from './../../assets/img/shopping_cart-icon.svg'
import { Link} from 'react-router-dom';

interface IconBoxType {
    bell: typeof Bell;
    person: typeof Person;
    box: typeof Box;
    cart: typeof ShoppingCart;
}

const iconBox: IconBoxType ={
    bell: Bell,
    person: Person,
    box: Box,
    cart: ShoppingCart

}

interface FunctionalIconType {
    icon: keyof IconBoxType;
    text: string;
}

const FunctionalIcon: React.FC<FunctionalIconType> = ({icon, text}) => {
    const navigationHref = icon === 'cart' ? "/cart" : "/"
    const Icon = iconBox[icon]
  return (
    <Link to={navigationHref} className='flex flex-col items-center cursor-pointer'>
        <Icon aria-label={icon}/>
      <p className='text-sm font-medium whitespace-nowrap'>{text}</p>
    </Link>
  )
}

export default FunctionalIcon
