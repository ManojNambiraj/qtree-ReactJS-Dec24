import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  const modules = { listStyleType: "none", display: "flex", gap: "20px"};
  return (
    <div>
      <ul style={modules}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link to={"/contacts"}>Contacts</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
