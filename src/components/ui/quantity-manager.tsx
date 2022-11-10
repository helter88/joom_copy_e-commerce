
import useChosenProducts from '../../hooks/use-chosen-products';
import { ChosenProductType } from './buttons/buy-now-button';

export interface QuantityManagerType {
    quantity: number;
    id: string;
}

const QuantityManager: React.FC<QuantityManagerType> = ({quantity, id}) => {
    const [products, setProducts] = useChosenProducts();

    const subtractQuantity = () => {
        if(quantity === 1){
            return
        }else{
            const ReplacedProducts = products?.map((product:ChosenProductType)=>{
              return product?.id === id ? {...product, quantity:product?.quantity-1} : product  
            })
            setProducts(ReplacedProducts)
        }
    }
    const addQuantity = () => {
        const ReplacedProducts = products?.map((product:ChosenProductType)=>{
            return product?.id === id ? {...product, quantity:product?.quantity+1} : product  
          })
          setProducts(ReplacedProducts)
    }
  return (
    <>
        <button className='rounded-full  bg-slate-100 text-lg h-5 w-5
            flex items-center justify-center' onClick={subtractQuantity}>
            <span>-</span>
        </button>
        <span className='text-sm h-5 w-5 text-center'>{quantity}</span>
        <button className='rounded-full bg-slate-100 text-lg h-5 w-5
            flex items-center justify-center' onClick={addQuantity}>
                <span>+</span>
        </button>
    </>
  )
}

export default QuantityManager
