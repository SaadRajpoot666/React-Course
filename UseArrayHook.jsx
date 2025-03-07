import { useState, useEffect } from "react";
import { useArray } from "./assets/hooks.js";
export function UseArrayHook() {
const IntialValue = [1,3,5]
    // javascript to make a hook
     
const {array,set,push,replace, filter, reset,clear}=  useArray(IntialValue)
  return (
    <div>
      <div className="">{Array.isArray(array) ? array.join(",") : "no array"}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          alignItems: "flex-start",
          marginTop: "1rem",
        }}
      >
        <button onClick={() => set([4.5, 6])}>set to [4,5,6]</button>
        <button onClick={() => push(4)}>Push 4</button>
        <button onClick={() => replace(1,9)}>
          Replace the second element with 9
        </button>
        <button onClick={() => filter((n) => n < 3)}>
          {" "}
          keep numbers less than 3
        </button>
    <button onClick={()=> reset(IntialValue)}>Reset</button>
      <button onClick={()=> clear([])} >Clear</button>
      </div>
    </div>
  );
}
