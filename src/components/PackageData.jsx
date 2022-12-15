import React from 'react'
import {  useGetAllSubscriptionQuery} from "../services/packageApi";
const PackageData = () => {
    const { data,isLoading} = useGetAllSubscriptionQuery();
  return (
    <div>
    console.log(data)
      
    </div>
  )
}

export default PackageData
