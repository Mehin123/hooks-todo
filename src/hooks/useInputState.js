import React, {useState} from 'react'

export default function  useInputState (initial){
    const [state,setState]=useState(initial)

    const handleChange=(e)=>
        setState(e.target.value)
    
        const reset=()=>{
            setState("")
      
        }
        return [state,handleChange,reset]
}