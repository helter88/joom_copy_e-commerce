import { Link, useSearchParams } from "react-router-dom";

interface CategoryTextType {
    category: string;
    categoryId: number;
    onCategoryHandle: () =>void
}

const CategoryText: React.FC<CategoryTextType> = ({category, categoryId, onCategoryHandle}) => {
  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get('category');
  const isCategoryActive = categoryFromURL === category.toLowerCase()

  const textRed400 = 'text-red-400'

  return (
    <Link to={`/?category=${category?.toLowerCase()}`}
    className="cursor-pointer" 
    onClick={onCategoryHandle} 
    id={`${categoryId}`}>
       <p className= {`text-sm font-normal whitespace-nowrap hover:${textRed400} ${isCategoryActive ? textRed400 : 'text-gray-600'} `}>{category}</p> 
    </Link>
    

  )
}

export default CategoryText 
