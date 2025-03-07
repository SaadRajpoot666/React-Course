import { useEffect, useRef, useState } from "react";
import { L50 } from "react-isloading";
import "./assets/user.css";
export function DerivedState() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [filtered, setFiltered] = useState(items);
   
  return (
    <>
      <label htmlFor="lessThan"> Show less than</label>
      <input
        type="number"
        name=""
        id="lessthan"
        onChange={(i) =>
          setFiltered(items.filter((item) => item < i.target.valueAsNumber))
        }
      />

      <br />
      <br />
      <div className="">{filtered.join(",")}</div>
      <br />
      <button onClick={() => setFiltered((i) => [...i, 4.5])}>
        Add 4.5 to list
      </button>
    </>
  );
}