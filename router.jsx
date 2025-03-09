import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import { HOME } from "./Routing/pages/home";
import { Store } from "./Routing/pages/store";
import { About } from "./Routing/pages/about";
import { NavBar } from "./Routing/NavBar";
import { Team } from "./Routing/pages/Team";
  import {TeamMember} from "./Routing/pages/TeamMember"
 
import { TeamNav } from "./Routing/pages/TeamNav";
export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "/", element: <HOME /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      {path : "/team", element:<TeamNavLayout   />, children:[
         {index: true, element: <Team    />}, 
         {path:":memberId", element: <TeamMember   />},
          

      ]}
       
    ],
  },
]);
function NavLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
function TeamNavLayout(){
   return <>
   <TeamNav  />
   <Outlet   />
   </>
}