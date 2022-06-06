import React from "react";

export default function About() {
  return (
    <>
      {/* <!-- *****ABOUT***** --> */}
      <div id="about" className="about section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="about-left-image  wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img src="assets/images/about-dec.png" alt="" />
                  </div>
                </div>
                <div
                  className="col-lg-6 align-self-center  wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <div className="about-right-content">
                    <div className="section-heading">
                      <h6>Tentang Kami</h6>
                      <h4>
                        Apa Itu <em>MESHCare</em>
                      </h4>
                      <div className="line-dec"></div>
                    </div>
                    <p>
                      Masalah mental seharusnya ditanggapi dengan serius
                      terutama ketika penelitian menunjukkan bahwa remaja saat
                      ini pada skala 1 sampai 10, berada pada tingkat stres 5,8.
                      Studi ini juga menunjukkan bahwa stres disebabkan oleh
                      siklus tidur yang buruk, kurang berolahraga, dan pola
                      makan yang buruk.{" "}
                    </p>
                    <p>
                      Di sinilah aplikasi kami masuk, aplikasi kami akan memberi
                      Anda solusi untuk masalah Anda di sekitar bidang masalah
                      mental, dengan bergaul dengan psikiater profesional kami
                      dapat membantu Anda melewatinya ini.
                    </p>
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
