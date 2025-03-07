import { useState } from "react"

export function LocalState({title,count,changeCount}){
document.title = title

return<>
<button onClick={()=>changeCount(-1)}>-</button>
{count}
<button onClick={()=>changeCount(1)}>+</button>
</>
}