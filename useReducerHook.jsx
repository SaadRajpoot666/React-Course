
import { useReducer, useEffect } from "react";
const actions  = {
    Increment : "increment", Decerement:"decrement",Reset:"reset" , Change: "Count_Change"
}
function reducer(count, action) {
  switch (action.type) {
    case actions.Decerement:
      return count - 1;
    case "INCREMENT":
      return count + 1;
    case "reset":
      return (count = 0);
    case "Count_Change":
      return count + action.payload.value;
    default:
      return count;
  }
}
export function UseReducerHook({ title, initialCount = 0 }) {
  document.title = title;
  const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      {count}
      <button onClick={() => dispatch({ type: actions.Decerement })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button
        onClick={() =>
          dispatch({ type: "Count_Change", payload: { value: 10 } })
        }
      >
        +10
      </button>
    </>
  );
}
