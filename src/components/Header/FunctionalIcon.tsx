import {ReactComponent as Bell } from './../../img/bell-icon.svg'
import {ReactComponent as Person } from './../../img/person-icon.svg'
import {ReactComponent as Box } from './../../img/box-icon.svg'
import {ReactComponent as ShoppingCart } from './../../img/shopping_cart-icon.svg'

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
    const Icon = iconBox[icon]
  return (
    <a className='flex flex-col items-center cursor-pointer'>
        <Icon aria-label={icon}/>
      <p className='text-sm font-medium whitespace-nowrap'>{text}</p>
    </a>
  )
}

export default FunctionalIcon
