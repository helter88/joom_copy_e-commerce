import {ReactComponent as ArrowDown} from './../../img/arrow-down.svg';
const ChooseLanguage = () => {
  return (
    <div className="flex items-center cursor-pointer">
        <div className="w-3 h-4 flex items-center">
            <img className="rounded-sm border" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMSAxNSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyMXY3LjVIMCIvPjxwYXRoIGZpbGw9IiNkZDE1M2MiIGQ9Ik0wIDcuNWgyMVYxNUgwIi8+PC9zdmc+" alt="logo"/>
        </div>
        <p className="text-xs px-1">Polski</p>
        <ArrowDown aria-label='arrow down' />
    </div>
      
  )
}

export default ChooseLanguage
