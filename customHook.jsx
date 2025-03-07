import { useState } from "react";
export function CustomHooks() {
  const input = Input("");
const Button = useConsoleButton(()=>{
    console.log("Muhammad Saad")
})

  const [darkMode, toggleDarkMode] = toggle(false);
  return (
    <>
      <div
        style={{
          background: darkMode ? "black" : "white",
          color: darkMode ? "white" : "black",
        }}
      >
        <label htmlFor="name">
          <input type="text" value={input.value} onChange={input.onchange} />
        </label>
        <button onClick={toggleDarkMode}>Toggle Theme</button>
      </div>
      <button {...Button}>click me</button>
    </>
  );
}


function useConsoleButton(initialValue){
    const [value,setValue] = useState(initialValue)
    return{
        value, onclick: setValue(initialValue)
    }
}


function Input(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onchange: (e) => setValue(e.target.value),
  };
}
function toggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  function toggleTheme() {
    setValue((currValue) => !currValue);
  }
  return [value, toggleTheme];
}
