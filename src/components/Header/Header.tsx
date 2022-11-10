import CartMenu from '../cart/cart-menu';
import {ReactComponent as Logo} from './../../assets/img/Joom-logo.svg';
import FunctionalIcon from './functional-icon';
import SearchBar from './search-bar';

const Header = () => {
 
  return (
    <div className='my-12 flex items-center'>
      <div className='first-line mr-10 cursor-pointer'>
        <Logo />
      </div>
      <div className='w-full'>
        <SearchBar />
      </div>
      
      <div className='flex space-x-8 ml-10'>
        <FunctionalIcon text='Notyfications' icon='bell'/>
        <FunctionalIcon text='Sign in' icon='person'/>
        <FunctionalIcon text='My orders' icon='box'/>
        <div className="relative before:absolute before:w-4 before:h-4 before:bg-red-400
          before:text-white before:content-['2'] before:text-xs before:text-center 
          before:rounded-full before:left-14">
          <FunctionalIcon text='Shopping cart' icon='cart'/>
          <CartMenu />
        </div>
      </div>
    </div>
  )
}

export default Header
