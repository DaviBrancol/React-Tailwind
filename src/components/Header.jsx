import React from "react";
import { Link, withRouter } from "react-router-dom";

function Header({ history }) {
  return (
    <div className="fixed w-full py-6 shadow-md bg-white border-t-4 border-solid border-primary-500">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-primary-500 font-semibold text-2xl">
          React Tailwind Sample
        </h1>
        <ul className="inline-flex space-x-10 text-primary-500">
          <li className="hover:underline cursor-pointer">Item 1</li>
          <li className="hover:underline cursor-pointer">Item 2</li>
          <li className="hover:underline cursor-pointer">Item 3</li>
          <li className="hover:underline cursor-pointer">Item 4</li>
          <li className="hover:underline cursor-pointer">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link to="/registro">Registro</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default withRouter(Header);
