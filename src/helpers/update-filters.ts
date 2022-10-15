import {
    useSearchParams,
    useNavigate,
    createSearchParams,
  } from "react-router-dom"

/* TODO: Sortowanie po cenie lub tytule */ 

const useUpdateFilters = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
 
    const updateFilters = ({ key, value }: { key: string; value: string }) => {
        const category = searchParams.get('category') as string
        const sort = searchParams.get('sort') as string
 
        navigate({ 
            pathname: "/",
            search: `?${createSearchParams({ category, sort, [key]: value })}`,
          })
     }

     return updateFilters
}

 

 export default useUpdateFilters
 