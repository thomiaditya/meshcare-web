import React from "react";

export default function AboutEn() {
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
                      <h6>About Us</h6>
                      <h4>
                        What is <em>MESHCare</em>
                      </h4>
                      <div className="line-dec"></div>
                    </div>
                    <p>
                      Mental issues should be taken seriously especially when
                      research shows that teenagers currently on a scale of 1 to
                      10, is at a stress level of 5.8. This study also shows
                      that stress caused by poor sleep cycles, lack of exercise,
                      and poor diet.{" "}
                    </p>
                    <p>
                      This is where our app comes in, our app will give you
                      solutions to your problems all around areas of mental
                      problems, by associating with our professional
                      psychiatrists can help you through it this.
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
