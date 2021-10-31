import { Link } from "react-router-dom";

import { BsGithub } from "react-icons/bs";
import { FaReact } from "react-icons/fa";

const logoText = "useReact";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container mx-auto flex justify-between">
        <div className="flex-center">
          <Link to="/">
            <FaReact className="text-green-600 mr-2 lg:mr-3" />
          </Link>
          <h1 className="text-center text-green-600 inline-block text-2xl">
            {logoText}
          </h1>
        </div>
        <a href="https://github.com/saiful-70/useReact" title="Source Code">
          <BsGithub className="text-gray-700" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
