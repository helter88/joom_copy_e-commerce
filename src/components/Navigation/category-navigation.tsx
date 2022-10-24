
import {ReactComponent as Hamburger} from './../../assets/img/hamburger-icon.svg';
import CategoryText from './category-text';
import {useQuery} from '@tanstack/react-query';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

export interface ResponseName {
    id: number;
    name: string;
    image: string;
}

const fetchCategories = ()=>{
  return Axios.get("https://api.escuelajs.co/api/v1/categories").then((res) => res.data )
}

const CategoryNavigation = () => {
  const {data, isError} = useQuery(['category'], fetchCategories )
  const navigator = useNavigate();

  const onHandleAllProducts = () => {
    navigator('/')
  }
 
  if (isError) {
    return <p className='text-red-400'>Error in fetching Categories</p>
  }

  const allCategories = data?.map(({name,id}:ResponseName) => <CategoryText key={id} category={name} categoryId = {id} onCategoryHandle={()=> console.log('categoryhandler"')} />)

  return (
    <div className='flex gap-y-4 gap-x-6 items-center w-full flex-wrap'>
        <a className='space-x-2 flex items-center cursor-pointer hover:text-red-400 hover:fill-red-400' onClick={onHandleAllProducts}>
            <Hamburger aria-label='hamburger icon'/>
            <p className='text-sm font-medium whitespace-nowrap'>All categories</p>
        </a>
        <a className='space-x-2 flex items-center cursor-pointer'>
            <img className='h-4' src='https://resources.joomcdn.net/icon/feed@2x.png' alt='icon opinions'/>
            <p className='text-sm font-medium whitespace-nowrap text-red-400'>Users' reviews</p>
        </a>
        {allCategories}
      
    </div>
  )
}

export default CategoryNavigation
