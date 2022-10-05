import ChooseLanguage from "./ChooseLanguage"
import Currency from "./Currency"

const Navigation = () => {
  return (
    <div className="pt-3 flex items-center justify-between">
      <div className="flex">
        <ChooseLanguage />
        <div className="ml-6">
          <Currency/>
        </div>
      </div>
      
      <div className="space-x-8 text-xs text-gray-400 ">
        <a className="cursor-pointer hover:border-b hover:border-b-gray-400 ">Pomoc</a>
        <a className="cursor-pointer hover:border-b  hover:border-b-gray-400">Dostawa</a>
        <a className="cursor-pointer hover:border-b  hover:border-b-gray-400">Gwarancja</a>
      </div>
      
        
      
    </div>
  )
}

export default Navigation
