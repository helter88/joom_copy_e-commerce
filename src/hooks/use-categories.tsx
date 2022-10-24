import Axios from 'axios';
import {useQuery} from '@tanstack/react-query';

const fetchCategories = ()=>{
    return Axios.get("https://api.escuelajs.co/api/v1/categories").then((res) => res.data )
  }

const useCategories = () => {
    const {data, isError} = useQuery(['category'], fetchCategories )

    return {data, isError}
}

export default useCategories
