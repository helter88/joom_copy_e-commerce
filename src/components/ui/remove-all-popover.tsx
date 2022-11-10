import useChosenProducts from '../../hooks/use-chosen-products'

interface RemoveAllPopoverType {
    openStatus: boolean,
    setStatus: () => void
}

const RemoveAllPopover:React.FC<RemoveAllPopoverType> = ({openStatus, setStatus}) => {
    const [products, setProducts] = useChosenProducts()
    const onYesHandler= () => {
        setProducts([]);
        setStatus();

    }
    const activeStyle= openStatus ? 'scale-100' : 'scale-0'

  return (
    <div className={`absolute left-64 -top-8 bg-white border shadow p-3
         shadow-slate-200 z-10 rounded-lg w-max 
         flex flex-col items-center ${activeStyle} transition-all
         before:w-0 before:h-0 before:border-[10px] before:border-transparent
         before:border-l-slate-200 before:absolute before:-right-5`}>
        <span className='text-sm'>Are you sure that you 
            want to remove 2 items from your cart?
        </span>
        <div className='flex gap-x-2 mt-3'>
            <button className='text-sm py-0.5 px-10 bg-red-400
             text-white rounded-full hover:opacity-80' onClick={onYesHandler}>Yes</button>
            <button className='text-sm py-0.5 px-10 border
             border-slate-400 text-slate-400 bg-white rounded-full'
             onClick={setStatus}>No</button>  
        </div>
    </div>
  )
}

export default RemoveAllPopover
