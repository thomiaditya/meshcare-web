import React from "react";

export default function Download() {
  return (
    <>
      {/* <!-- *****DOWNLOAD***** --> */}
      <div id="download" className="download">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div
                className="section-heading  wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <h6>Dapatkan Aplikasi</h6>
                <h4>Unduh Sekarang</h4>
                <div className="line-dec"></div>
              </div>
            </div>

            <div className="col-lg-4 offset-lg-4 ">
              <form id="search" action="#" method="GET">
                <div className="row">
                  <div className="col-lg-5 col-sm-4">
                    <fieldset>
                      <input
                        type="address"
                        name="address"
                        className="email"
                        placeholder="Alamat Email..."
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-7 col-sm-6">
                    <fieldset>
                      <button type="submit" className="main-button">
                        Unduh
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
