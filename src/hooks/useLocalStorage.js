import React, { useEffect, useState } from 'react'

function useLocalStorage(initialVal) {
   const [val,setVal]=useState(()=>{
    const tmp=localStorage.getItem("item");
    if (tmp) {
         return JSON.parse(tmp);
    }
    return initialVal;
   });
   useEffect(()=>{
      const tmp=localStorage.getItem("item");
      if (tmp) {

      }
       localStorage.setItem("item",JSON.stringify(val))
   },[val])

   return [val,setVal];
}

export default useLocalStorage