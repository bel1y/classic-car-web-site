import React from "react";
import "../css/inside.css";
import Navbar from "./Nav";
import Footer from "./Footer";
import inside from "../img/inside2.png";

export default function Inside() {
  return (
    <>
      <Navbar />
      <div className="big-div-inside">
        <h1>
          Auction Central - Ok Classics - OK Classics Car and Memorabilia
          Auction Event
        </h1>
        <h3>
          OK Classics Car and Memorabilia Auction Event - Shawnee, OK: May 3 -
          4, 2024
        </h3>
        <p>
          OK Classics auction May 3 & 4, 2024 will feature classic cars,
          pickups, motorcycles & automotive memorabilia. Located at The Grand
          Casino Resort 777 Grand Casino Blvd, Shawnee, OK 74804.
          https://www.proxibid.com/Ball-Auction-Service/OK-CLASSICS-CLASSIC-CAR-AUCTION/event-catalog/257492
        </p>
        <img src={inside} alt="" className="ok-classic-inside" />
      </div>

      <Footer />
    </>
  );
}
