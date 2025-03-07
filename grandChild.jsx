import { ThemeContext } from "./useContextHook";
import { useContext } from "react";
export function GrandChild( ) {
    const value = useContext(ThemeContext)
    // we can also write this as
    const {isDark,ToggleTheme} = useContext(ThemeContext)
 return  <button
    style={{
        backgroundColor: isDark ? "white" : "black",
        color:  isDark ? "black" : "white",
      transition: "all 1s linear",
    }}
    onClick={() =>  ToggleTheme()}
  >
    Toggle Theme
  </button>;
}
