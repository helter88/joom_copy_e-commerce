
interface CategoryTextType {
    category: string;
}

const CategoryText: React.FC<CategoryTextType> = ({category}) => {
  return (
    <a className="cursor-pointer">
       <p className='text-sm font-normal whitespace-nowrap hover:text-red-400 text-gray-600 '>{category}</p> 
    </a>
    

  )
}

export default CategoryText
