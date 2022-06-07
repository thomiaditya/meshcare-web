import React, { useState } from "react";

export default function DownloadEn() {
  const [email, setEmail] = useState("");

  const handleClick = (e) => {
    
    // Check if email is valid
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      alert("Email is not valid!");
      return;
    }


    fetch(`${process.env.BACKEND_URL}/api/waiting-list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        alert("Waiting list successfully added");
      })
      .catch((err) => console.log(err));
  };

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
                <h6>Get Your Free Donwload Applications</h6>
                <h4>Download Now</h4>
                <div className="line-dec"></div>
              </div>
            </div>

            <div className="col-lg-4 offset-lg-4 ">
              <form id="search">
                <div className="row">
                  <div className="col-lg-5 col-sm-4">
                    <fieldset>
                      <input
                        type="email"
                        name="address"
                        className="email"
                        placeholder="Email Address..."
                        autoComplete="on"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-7 col-sm-6">
                    <fieldset>
                      <button
                        onClick={() => {
                          handleClick();
                        }}
                        type="button"
                        className="main-button"
                      >
                        Get Free Now
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
