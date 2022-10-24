import {ReactComponent as ArrowDown} from './../../assets/img/arrow-down.svg';
const ChooseLanguage = () => {
  return (
    <div className="flex items-center cursor-pointer">
        <div className="w-3 h-4 flex items-center">
            <img className="rounded-sm border" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDIxIDE1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMjF2MTVIMHoiLz48cGF0aCBpZD0iYiIgZD0iTS0xLTFoMjN2MTdILTF6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHVzZSBmaWxsPSIjMjI0MzhCIiB4bGluazpocmVmPSIjYSIvPjxtYXNrIGlkPSJjIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNiIi8+PC9tYXNrPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0zIDFsLTIuMDMuMDNMMSAzbDE2Ljk4IDExLjAzIDIuMDQtLjA0LS4wNC0xLjk3IiBtYXNrPSJ1cmwoI2MpIi8+PHBhdGggZmlsbD0iI0M3MTUyQSIgZD0iTTEgMmwxOCAxMiAxLTFMMiAxIiBtYXNrPSJ1cmwoI2MpIi8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDFoMnYyUzguMjUgMTAuNCAzLjAyIDE0LjAzYy0uMDcuMDQtMiAwLTIgMGwtLjE2LTEuOUwxOCAxeiIgbWFzaz0idXJsKCNjKSIvPjxwYXRoIGZpbGw9IiNDNzE1MkEiIGQ9Ik0xOS4wNC45N0wyMCAyIDIgMTRsLTEtMSIgbWFzaz0idXJsKCNjKSIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik04IDFoNXY0aDd2NWgtN3Y0SDh2LTRIMVY1aDciIG1hc2s9InVybCgjYykiLz48cGF0aCBmaWxsPSIjQzcxNTJBIiBkPSJNOSAxaDN2NWg4djNoLTh2NUg5VjlIMVY2aDgiIG1hc2s9InVybCgjYykiLz48L2c+PC9zdmc+" alt="logo"/>
        </div>
        <p className="text-xs px-1">English</p>
        <ArrowDown aria-label='arrow down' />
    </div>
      
  )
}

export default ChooseLanguage
