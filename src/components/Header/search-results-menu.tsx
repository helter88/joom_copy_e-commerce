import useSearchResultsMenu from "../../hooks/use-search-results-menu";



export interface MenuType {
  inputText: string,
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchResultsMenu: React.FC<MenuType> = ({inputText, setInputText}) => {
  
  const {isOpen, onCLickHandler, foundProducts} = useSearchResultsMenu(inputText, setInputText )

  const displayProducts = foundProducts?.map(({title}) =>{

    const boldedLetters = inputText ? 
    <>
    <span className='font-medium text-black'>{`${title.slice(0, inputText.length)}`}</span> 
    <span>{`${title.slice(inputText.length)}`}</span>
    </>
    : <span>{title}</span>

    return <p key={`${title + Math.random()}`} className='p-3 hover:bg-slate-100 cursor-pointer'
    onClick={() => onCLickHandler(title) }>{boldedLetters}</p>
  })

  return (
    <div className={`absolute ${isOpen ? '' : 'hidden'} py-2 z-10 bg-white rounded-xl w-2/5 
     border-slate-100 shadow-sm shadow-black
    text-sm font-normal whitespace-nowrap text-gray-600`}>
      {displayProducts?.slice(0,5)}
    </div>
  )
}

export default SearchResultsMenu
