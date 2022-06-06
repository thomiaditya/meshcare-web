import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeId from "./page/HomeId";
import HomeEn from "./page/HomeEn";
import DefaultHome from "./page/DefaultHome";
import Preloader from "./components/Preloader";

const App = () => {
  return (
    <Router>
      <Preloader />
      <Routes>
        <Route path="/" element={<DefaultHome />} />
        <Route exact path="/en" element={<HomeEn />} />
        <Route excat path="/id" element={<HomeId />} />
      </Routes>
    </Router>
  );
};

export default App;
