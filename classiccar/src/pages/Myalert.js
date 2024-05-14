import React from "react";
import Navbar from "./Nav";
import Footer from "./Footer";
import "../css/myalert.css";

export default function Myalert() {
  return (
    <div className="big-div-my-alert">
      <Navbar />
      <h1>My Alerts</h1>
      <h3>
        You have <b>0</b> of <b>5</b> available custom alerts set.
      </h3>
      <Footer />
    </div>
  );
}
