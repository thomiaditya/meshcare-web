import React from "react";
import { Link } from "react-router-dom";

export default function HeaderId() {
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
                      Beranda
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#about">Tentang</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#info">Apa Itu Psikologi?</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#contact">Kontak</a>
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
                      <a href="#download">Unduh Sekarang</a>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
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
