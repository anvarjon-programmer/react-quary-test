// import React, { useEffect, useState } from 'react'
// import { request } from '../configs/data/Instanse'
// import { useQuery } from '@tanstack/react-query'

// const FetchData = () => {

//     const {data, isLoading, refetch, error} = useQuery({ queryKey: ['todo'], queryFn: async() =>await request('posts') })
  
    
//   return (
//     <div>{data?.data.map((item : any, index:number) =>(
//         <li>{item.id}</li>
//     ))}</div>
//   )
// }

// export default FetchData