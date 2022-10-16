import { Link } from "react-router-dom";

interface CategoryTextType {
    category: string;
    categoryId: number;
    onCategoryHandle: () =>void
}

const CategoryText: React.FC<CategoryTextType> = ({category, categoryId, onCategoryHandle}) => {
  return (
    <Link to={`/?category=${category?.toLocaleLowerCase()}`}
    className="cursor-pointer" 
    onClick={onCategoryHandle} 
    id={`${categoryId}`}>
       <p className='text-sm font-normal whitespace-nowrap hover:text-red-400 text-gray-600 '>{category}</p> 
    </Link>
    

  )
}

export default CategoryText
