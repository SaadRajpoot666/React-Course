import { useState } from "react";
import { useEffect } from "react";
import { Child } from "./child";
import { createContext } from "react";
   
export const ThemeContext = createContext()


export function UseContextHook({ title }) {
  document.title = title;
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "Black" : "white";
    document.body.style.color = isDark ? "white" : "black";
    document.body.style.transition = "all 1s";
  });
  function ToggleTheme() {
    setIsDark((t) => !t);
  }
  return (
    <>
    <ThemeContext.Provider value={{isDark,ToggleTheme}}>

      <Child />
      <h4>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
        autem soluta alias, possimus at facere voluptate saepe! Ab atque
        similique debitis repellat, nemo assumenda ipsum placeat perferendis
        ducimus mollitia porro voluptate nesciunt ipsam saepe. Aliquam voluptas
        illum quidem fuga aspernatur enim sapiente dolore, repellat et!
      </h4>
    </ThemeContext.Provider>
    </>
  );
}
