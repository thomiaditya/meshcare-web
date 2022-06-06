import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DefaultHome = () => {
  if (localStorage.getItem("lang") === null) {
    localStorage.setItem("lang", "en");
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("lang") === "en") {
      navigate("/en");
    }

    if (localStorage.getItem("lang") === "id") {
      navigate("/id");
    }
  }, []);

  return <></>;
};

export default DefaultHome;
