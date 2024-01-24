import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-3/5">
      <ul className="flex justify-between items-center mx-10 font-semibold text-black">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li className="relative">
          <Link to={"/prediction"}>Prediction</Link>
        </li>
        <li>
          <Link to={"/transportaion"}>Transportation</Link>
        </li>
        <li>
          <Link to={"/community"}>Community</Link>
        </li>
        <li>
          <Link to={"/contacts"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
