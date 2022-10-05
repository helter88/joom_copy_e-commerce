import {ReactComponent as Hamburger} from './../../img/hamburger-icon.svg'
import CategoryText from './CategoryText'

const CategoryNavigation = () => {
  return (
    <div className='flex space-x-8 items-center'>
        <a className='space-x-2 flex items-center cursor-pointer hover:text-red-400 hover:fill-red-400'>
            <Hamburger aria-label='hamburger icon'/>
            <p className='text-sm font-medium whitespace-nowrap'>Wszystkie kategorie</p>
        </a>
        <a className='space-x-2 flex items-center cursor-pointer'>
            <img className='h-4' src='https://resources.joomcdn.net/icon/feed@2x.png' alt='icon opinions'/>
            <p className='text-sm font-medium whitespace-nowrap text-red-400'>Recenzje użytkowników</p>
        </a>
        <CategoryText category='Garderoba' />
      
    </div>
  )
}

export default CategoryNavigation
