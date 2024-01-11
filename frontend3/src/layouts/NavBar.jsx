import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav>
        <Link to={'/'}><div className="logo">Floral Studio</div></Link>

        <div className="nav-link">
            <Link to={'/'}><p>Home</p></Link>
            <Link><p>About Us</p></Link>
            <Link><p>Pricing</p></Link>
            <Link><p>Portfolio</p></Link>
            <Link><p>Contact</p></Link>


        </div>
      </nav>
    </header>
  );
}

export default NavBar;
