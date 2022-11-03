
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'
import { useParams } from 'react-router-dom';

const useSingleProduct = () => {
    const {id} = useParams();

    const fetchProduct = () =>{
        return Axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).then(resp => resp.data)
    }
    const {data:product} = useQuery([`product${id}`], fetchProduct)

  return {product}
}

export default useSingleProduct
