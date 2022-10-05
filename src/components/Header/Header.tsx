import {ReactComponent as Logo} from './../../img/Joom-logo.svg';
import FunctionalIcon from './FunctionalIcon';
import Input from './Input';

const Header = () => {
  return (
    <div className='my-12 flex items-center'>
      <div className='first-line mr-10 cursor-pointer'>
        <Logo />
      </div>
      <Input />
      <div className='flex space-x-8 ml-10'>
        <FunctionalIcon text='Powiadomienia' icon='bell'/>
        <FunctionalIcon text='Zaloguj się' icon='person'/>
        <FunctionalIcon text='Moje zamówienia' icon='box'/>
        <FunctionalIcon text='Koszyk' icon='cart'/>
      </div>
    </div>
  )
}

export default Header
