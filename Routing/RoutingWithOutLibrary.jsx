import { NavLink } from "react-router-dom"
import { NavBar } from "./NavBar"
import { About } from "./pages/about"
import { HOME } from "./pages/home"
import { Store } from "./pages/store"

export function RoutingWithoutLibrary(){
    let component 
    switch(window.location.pathname){
        case "/" : component = <HOME    />
        break
        case "/about": component = <About    />
        break
        case "/store": component = <Store    />
        break

     }
    
    return   <>
    
    <NavBar    title={crypto.randomUUID()}   />
    {component}
    </>
}