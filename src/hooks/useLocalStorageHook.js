import React ,{useState, useEffect} from 'react'
export default function UseLocalStorageHook (key,initialValue){
    const [state,setState]=useState(()=>{ 
        
        let val;
        try{
    val=JSON.parse(window.localStorage.getItem(key) || String(initialValue))
        }
        
        catch (e) {
            val=initialValue
        }
        return val;
    }
   );

   useEffect (()=>{
       window.localStorage.setItem(key, JSON.stringify(state))
   },[state])


   return [state,setState]
}











