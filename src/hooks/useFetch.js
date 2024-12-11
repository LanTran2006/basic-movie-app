import React, { useState,useEffect} from 'react'

function getMovie(link) {
    return fetch(link).then(res=>res.json());
}

export default function useFetch(url,query) {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false);
  let [error,setError]=useState(null)
  useEffect(()=>{
    if (!query) return;
        async function getData() {
            try {
            setLoading(true);
            const response=await getMovie(url+query);
            if (response.Error) {
                console.log('object');
                setError(response.Error);
            } else {
                setData(response?.Search || response);
            }
            } catch (error) {
                setError("unable to get movies");
            } finally {
                setLoading(false);
            }
            
         }
         getData();
   
  },[query])
  
  return {data,loading,error,setData,setLoading,setError};
}
