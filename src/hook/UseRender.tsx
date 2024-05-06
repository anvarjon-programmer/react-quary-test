import { useQuery } from '@tanstack/react-query'
import { request } from '../configs/data/Instanse'

export const useRender = () => {
    const {data, isLoading, refetch, error} = useQuery({ queryKey: ['todo'], queryFn: async() =>await request('posts') })
console.log(data);
    
  return {
     data:data,
     isLoading,
     refetch,
     error
     }
  }

