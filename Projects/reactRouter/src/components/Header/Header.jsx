import React from "react"
import { Link, NavLink } from "react-router-dom";
import "../../App.css";


export default function Header() {
  return (
    <header className="custom-header">
      <nav className="custom-nav">
        <div className="nav-container">
          <Link to="/" className="logo-link">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="logo"
              alt="Logo"
            />
          </Link>
          <div className="auth-buttons">
            <Link to="#" className="login-button">
              <p>Log in</p>
            </Link>
            <Link to="#" className="signup-button">
              <p>Get started</p>
            </Link>
          </div>
          <div className="nav-links" id="mobile-menu-2">
            <ul className="nav-list">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                  }
                >
                 <p> Home </p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                  }
                >
                 <p>About</p> 
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                  }
                >
                  <p>Contact</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                  }
                >
                  <p>Github</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

