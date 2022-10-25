
import { useState } from 'react'
import Input from './input'
import SearchResultsMenu from './search-results-menu'

const SearchBar = () => {

  const [inputText, setInputText] = useState('');

  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value);

  

  return (
    <>
      <Input inputText={inputText} onChangeHandler={onChangeHandler} />
      <SearchResultsMenu inputText={inputText} setInputText={setInputText} />
    </>
  )
}

export default SearchBar
