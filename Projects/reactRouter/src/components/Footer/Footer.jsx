import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <Link to="/" className="logo-link">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="logo-img"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="footer-grid">
            <div className="footer-column">
              <h2 className="footer-heading">Resources</h2>
              <ul className="footer-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h2 className="footer-heading">Follow us</h2>
              <ul className="footer-list">
                <li>
                  <a
                    href="https://github.com//md-mehar-belal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link to="/">Discord</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h2 className="footer-heading">Legal</h2>
              <ul className="footer-list">
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2023 <a href="">Md_Mehar_Belal</a>.
            All Rights Reserved.
          </span>
          <div className="footer-social">
            <Link to="#">
              {" "}
              <svg className="footer-icon">...</svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
