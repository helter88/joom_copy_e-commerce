import { Link, useSearchParams } from "react-router-dom";
import useUpdateFilters from '../../helpers/update-filters'

interface CategoryTextType {
    category: string;
    categoryId: number;
}

const textRed = `text-red-400`

const CategoryText: React.FC<CategoryTextType> = ({category, categoryId}) => {
  const updateFilters = useUpdateFilters()
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') as string;
  const isActive = category.toLowerCase() === currentCategory
 
  return ( 
    <Link 
    className="cursor-pointer" 
    to={`/?category=${category?.toLowerCase()}`} 
    id={`${categoryId}`} 
    onClick={() => updateFilters({key: 'category', value: category})}
    >
       <p className={`text-sm font-normal whitespace-nowrap hover:${textRed} ${isActive? textRed : 'text-gray-600'} `} >{category}</p> 
    </Link>
  )
}

export default CategoryText
