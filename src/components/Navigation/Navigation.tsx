import ChooseLanguage from "./choose-language"
import Currency from "./currency"

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
        <a className="cursor-pointer hover:border-b hover:border-b-gray-400 ">Support</a>
        <a className="cursor-pointer hover:border-b  hover:border-b-gray-400">Delivery</a>
        <a className="cursor-pointer hover:border-b  hover:border-b-gray-400">Warranty</a>
      </div>
      
        
      
    </div>
  )
}

export default Navigation
