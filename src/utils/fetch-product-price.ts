import axios from 'axios';
import { ResponseProduct } from '../hooks/products-sort-by-category';


export async function getPrice(id:string) {
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get<ResponseProduct>(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );

    return  data.price;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}