import React from "react";
import "../css/inside.css";
import Navbar from "./Nav";
import Footer from "./Footer";
import inside from "../img/inside4.png";

export default function Inside() {
  return (
    <>
      <Navbar />
      <div className="big-div-inside">
        <h1>
          Auction Central - Motorsport Auction Group - Premium Online Collector
          Car Auction
        </h1>
        <h3>
          Premium Online Collector Car Auction - Online: May 16 - 18, 2024
        </h3>
        <p>
          250 cars to be auctioned online! Motorsport Auction Group is a
          collector car auction company with a focus on classics, muscle cars,
          street rods, vintage cars, and leading automobile products. Our events
          are tailored to long time car enthusiasts looking to buy and sell
          automobiles as well as those new to the collector car hobby. We invite
          all bidders and consignors to join us for this Premium ONLINE
          Collector Car Auction.
        </p>
        <img src={inside} alt="" />
      </div>

      <Footer />
    </>
  );
}
