import { useState,useEffect, useCallback } from "react"
export function CallBackHook(){
 const [name,setName] = useState("")
 const [age,setAge] = useState(0)
 
 const  printName = useCallback(()=>{

     console.log(`Name: ${name}`)
 },[name])
  
 useEffect(()=>{
    console.log("In Effect")
    printName()
 },[printName])
    return <>
    <input type="text"  value={name} onChange={(e)=> setName(e.target.value)} />
    <input type="number" value={age} onChange={e=>setAge(e.target.valueAsNumber)} />
    </>
    
}