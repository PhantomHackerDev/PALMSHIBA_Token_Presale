import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens";
import "./index.css";
import "react-toastify/ReactToastify.css";

import BackgroundMask_1 from "./components/BackgroundMask_1";
import BackgroundMask_2 from "./components/BackgroundMask_2";
import BackgroundMask_3 from "./components/BackgroundMask_3";
import BackgroundCartoonIcons from "./components/BackgroundIcons";

import RootLayout from "./components/Layout";
import TermsAndConditions from "./screens/TermsAndConditions";
// import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootLayout>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route
            path={"/termsAndConditions"}
            element={<TermsAndConditions />}
          />
        </Routes>
      </Router>
      {/* <BackgroundMask_1 />
      <BackgroundMask_2 />
      <BackgroundMask_3 />
      <    /> */}
    </RootLayout>
  </React.StrictMode>
);
