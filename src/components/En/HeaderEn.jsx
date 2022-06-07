import React from "react";
import { Link } from "react-router-dom";

export default function HeaderEn() {
  return (
    <>
      {/* <!-- ***** Header Area Start ***** --> */}
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="index.html" className="logo">
                  <img src="assets/images/logo.png" alt="" />
                </a>
                {/* <!-- ***** Logo End ***** --> */}
                {/* <!-- ***** Menu Start ***** --> */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#about">About</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#info">What is Psychology?</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#contact">Contact</a>
                  </li>
                  {/* <!-- Bahasa --> */}
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Language
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item" to="/en">
                          English
                        </Link>
                      </li>
                      <li style={{ padding: "0px 15px" }}>
                        <Link className="dropdown-item" to="/id">
                          Indonesia
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <li className="scroll-to-section">
                    <div className="border-first-button">
                      <a href="#download">Download Now</a>
                    </div>
                  </li>
                </ul>
                <Link to="/" className="menu-trigger">
                  <span>Menu</span>
                </Link>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ***** Header Area End ***** --> */}
    </>
  );
}
