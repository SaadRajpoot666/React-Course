import { Link } from "react-router-dom";

export function NavBar({ title }) {
  document.title = title;
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/team">team</Link>
        </li>
      </ul>
    </>
  );
}
