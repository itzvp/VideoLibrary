import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const linkStyle = {
    marginRight: "20px",
    color: "black",
    textDecoration: "none",
    fontSize: "18px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <nav>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/bookmarked" style={linkStyle}>
        Bookmarked
      </Link>
    </nav>
  );
};

export default Navbar;
