import React from "react";

export default function Main() {
  return (
    <>
      <div
        className="main-banner wow fadeIn"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content show-up header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <h6>Konsultasi Media dengan Psikologi</h6>
                        <h2>
                          Melindungi Dan Menjaga <font>Diri Anda</font>
                        </h2>
                        <p>
                          Cerita Anda aman dengan psikiater profesional kami,
                          jadi jangan ragu untuk memberi tahu kami semua yang
                          mengganggu Anda dapat membantu kami mendiagnosis Anda
                          dan memperlakukan Anda dengan benar!
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <div className="border-first-button scroll-to-section">
                          <a href="#download">Unduh Apps</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img src="assets/images/slider-dec.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
