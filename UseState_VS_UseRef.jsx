import { useRef, useState } from "react";
import { requestFormReset } from "react-dom";

export function UseState_VS_UseRef(){
  const nameRef = useRef("")
  function handleSubmit(e){
    const name = nameRef.current.value
    e.preventDefault()
    if(name === '')return
 alert(`Name is: ${name}`)
  }
  return <form action="" onSubmit={handleSubmit}>
<label htmlFor="">Name</label>
<br />
<input type="text" ref={nameRef}/>
<br /><br />
<button>Click to Alert</button>

  </form>
}