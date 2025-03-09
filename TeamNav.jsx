import { Link, NavLink } from "react-router-dom";
import teammebers from "../../../db.json"
export function TeamNav(){
    return <>
    <ul>
         {teammebers.map(e =>{
            <li key={e.id}>
                < Link to={e.id} >{e.name}</Link>
            </li>
         })}
    </ul>
    </>
}
