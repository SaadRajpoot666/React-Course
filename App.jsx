import { TodoListApp } from "./TodoList.jsx";
import { CallBackHook } from "./useCallbackHook.jsx";
import { CustomHooks } from "./customHook.jsx";
import { UseFetchHook } from "./useFetchHook.jsx";
import { UseArrayHook } from "./UseArrayHook.jsx";
import { UseLocalStorageHook } from "./LocalStorageHook.jsx";

import { UseState_VS_UseRef } from "./UseState_VS_UseRef.jsx";
import { Form } from "./FormFromLibrary";
import { UseReducerHook } from "./useReducerHook.jsx";
import { UseContextHook } from "./useContextHook.jsx";
import { LocalState } from "./localState.jsx";
import { useState } from "react";
import {DerivedState} from "./derivedState.jsx"
import {EnvironmentVariables} from "./environmentVariables.jsx"
import { AdvanceTodoList } from "./AdvanceTodoListApp/AdvanceTodoList.jsx";
function App() {
  //     const [count,setCount] = useState(0)
  //     function changeCount(value){
  //         setCount(c => c+value)
  //     }
  //  return <LocalState title={"Local State"}  count={count} changeCount = {changeCount}  />

return <TodoListApp   />



}

export default App;
