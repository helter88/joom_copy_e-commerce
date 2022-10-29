import useSearchResultsMenu from "../../hooks/use-search-results-menu";



export interface MenuType {
  inputText: string,
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const generalProperty ={

}

const SearchResultsMenu: React.FC<MenuType> = ({inputText, setInputText}) => {
  
  const {isOpen, onCLickHandler, foundProducts} = useSearchResultsMenu(inputText, setInputText )

  const displayProducts = foundProducts?.map(({title, description}) =>{

    const titleLower = title.toLowerCase()
    const inputTextLower = inputText.toLowerCase();
    const descriptionLower = description.toLowerCase()
    
   if (titleLower.includes(inputTextLower)) {
      let startBold = titleLower.indexOf(inputTextLower)
      let endBold = titleLower.indexOf(inputTextLower)+ inputText.length
      const boldedLetters2 =  
          <>
          <span >{`${title.slice(0, startBold)}`}</span> 
          <span className='font-medium text-black'>{`${title.slice(startBold, endBold)}`}</span> 
          <span>{`${title.slice(endBold)}`}</span>
          </>


          return <p key={`${title + Math.random()}`} className='p-3 hover:bg-slate-100 cursor-pointer'
          onClick={() => onCLickHandler(title) }>{boldedLetters2}</p>
    }else if (descriptionLower.includes(inputTextLower)){
        let startBold = descriptionLower.indexOf(inputTextLower)
        let endBold = descriptionLower.indexOf(inputTextLower)+ inputText.length
        const boldedLetters4 =  
            <>
            <span className="text-xs">{`${description.slice(0, startBold)}`}</span> 
            <span className='text-xs text-black font-bold'>{`${description.slice(startBold, endBold)}`}</span> 
            <span className="text-xs">{`${description.slice(endBold)}`}</span>
            </>
        return (
          <div key={`${title + Math.random()}`} className= 'p-3 hover:bg-slate-100 cursor-pointer'
          onClick={() => onCLickHandler(title) }>
            <p>{title}</p>
            {boldedLetters4}
          </div>
          )
    }
          


    
  })

  return (
    <div className={`absolute ${isOpen ? '' : 'hidden'} py-2 z-10 bg-white rounded-xl w-2/5 
     border-slate-100 shadow-sm shadow-black
    text-sm font-normal whitespace-nowrap text-gray-600`}>
      {displayProducts}
    </div>
  )
}

export default SearchResultsMenu
