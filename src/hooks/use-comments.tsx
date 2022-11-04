import Axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import { useParams } from 'react-router-dom';


const useComments = () => {
    const {id} = useParams();
    const fetchComments = ()=>{
        return Axios.get(`https://dummyjson.com/comments/post/${id}`).then(resp=> resp.data)
      }
    const {data: comments, isError, isLoading} = useQuery(['comments'], fetchComments )

    return {comments, isError, isLoading}
  
}

export default useComments
