import React,{useState} from 'react'
export default function useToggleState(initial){
    const [state,setState]=useState(initial)
const handleChange=()=>{
    setState(!state)
}
return [state,handleChange]
}