import {useState,useEffect} from "react"
export function UseFetchHook(){
    const [data,setData] = useState()
    const [error,seterror] = useState(false)
    const [isLoading,setIsLoading] = useState(true)

useEffect(()=>{
    setData(undefined)
    seterror(false)
    setIsLoading(true)
    const controller = new AbortController()
    fetch(URL,{signal: controller.signal, ...option}).then(res=>res.jspn()).then(data=>setData(data)).catch(e=> {
        if(e.name === "AbortError") return
        seterror(true)
    }).finally(()=> setIsLoading(false))
return ()=>{
    controller.abort()
}
},[URL])

return [data,error,isLoading]
    return <div>
        
    </div>
}