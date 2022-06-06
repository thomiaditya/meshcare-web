import React from "react";

export default function Contact() {
  return (
    <>
      {/* <!-- *****CONTACT***** --> */}
      <div id="contact" className="contact-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div
                className="section-heading wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h6>Hubungi</h6>
                <h4>
                  Hubungi Kami <em> Sekarang</em>
                </h4>
                <div className="line-dec"></div>
              </div>
            </div>
            <div
              className="col-lg-12 wow fadeInUp"
              data-wow-duration="0.5s"
              data-wow-delay="0.25s"
            >
              <form id="contact" action="" method="post">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="contact-dec">
                      <img src="assets/images/contact-dec-v3.png" alt="" />
                    </div>
                  </div>
                  <div className="col-md-auto">
                    <div className="fill-form">
                      <div className="row ">
                        <div className="col-lg-4">
                          <div className="info-post">
                            <div className="icon">
                              <img src="assets/images/email-icon.png" alt="" />
                              <a href="mailto:meshcare@email.com">Email</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="info-post">
                            <div className="icon">
                              <img src="assets/images/phone-icon.png" alt="" />
                              <a href="https://api.whatsapp.com/send?phone=6285785334384">
                                Panggil
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="info-post">
                            <div className="icon">
                              <img
                                src="assets/images/location-icon.png"
                                alt=""
                              />
                              <a href="https://goo.gl/maps/uQGzUXdKztgA5ST9A">
                                Mesh Care
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="name"
                              name="name"
                              id="name"
                              placeholder="Nama"
                              autocomplete="on"
                              required
                            />
                          </fieldset>
                          <fieldset>
                            <input
                              type="text"
                              name="email"
                              id="email"
                              pattern="[^ @]*@[^ @]*"
                              placeholder="Email Anda"
                              required=""
                            />
                          </fieldset>
                          <fieldset>
                            <input
                              type="subject"
                              name="subject"
                              id="subject"
                              placeholder="Subjek"
                              autocomplete="on"
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <textarea
                              name="message"
                              type="text"
                              className="form-control"
                              id="message"
                              placeholder="Pesan"
                              required=""
                            ></textarea>
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="main-button "
                            >
                              Kirim Pesan Sekarang
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </div>
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
