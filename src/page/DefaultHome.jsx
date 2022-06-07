import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DefaultHome = () => {
  if (localStorage.getItem("lang") === null) {
    localStorage.setItem("lang", "en");
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("lang") === "en") {
      // eslint-disable-next-line
      navigate("/en");
    }

    if (localStorage.getItem("lang") === "id") {
      // eslint-disable-next-line
      navigate("/id");
    }
  }, []);

  return <></>;
};

export default DefaultHome;
