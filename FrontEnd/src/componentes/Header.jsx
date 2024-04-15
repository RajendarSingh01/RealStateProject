import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="bg-red-200 shadow-md p-3">
      <div className="flex justify-between items-center">
        <Link to="/">
          <span className="text-blue-500 text-lg font-bold">Real</span>
          <span className="text-green-500 text-lg font-bold">State</span>
        </Link>
        <div>
          <form className="bg-red-100 p-3 rounded-lg sm:w-96 flex justify-between items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none"
            />
            <FaSearch />
          </form>
        </div>

        <ul className="hidden sm:flex">
          <Link to="/">
            <li className="p-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="p-2">About</li>
          </Link>
          <Link to="/signin">
            <li className="p-2">Sign in</li>
          </Link>
          <Link to="/singup">
            <li className="p-2">Sign up</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
