import React from "react";
import "../css/inside.css";
import Navbar from "./Nav";
import Footer from "./Footer";
import inside from "../img/inside3.png";

export default function Inside() {
  return (
    <>
      <Navbar />
      <div className="big-div-inside">
        <h1>
          Auction Central - Classic Car Auction Group - 9th Annual Salt Lake
          City Online Classic Car Auction
        </h1>
        <h3>
          9th Annual Salt Lake City Online Classic Car Auction - ONLINE: May 11,
          2024
        </h3>
        <p>
          Join us on your phone, computer or device of your choice for the 9th
          Annual Salt Lake City Online Classic Car Auction! Market and Venue
          limitations have moved this auction to online only with an excellent
          line-up of classic and collector cars presented for sale through our
          interactive online bidding platform. Cars are sourced from throughout
          the greater Utah region and vehicle details, location and pictures are
          your gateway to bid on and buy one or more of these great cars!
          Pre-Bidding opens on lots at 8am MST on Saturday, May 4. Pre-Bidding
          closes on lots at 9:30am MST on Saturday, May 11 in preparation for
          the interactive online portion of the auction. Starting at 10am MST,
          cars are sold individually by lot number with the auction platform
          displaying the vehicle description and pictures carousel. Bidding is
          “live” on each car right from your computer!
        </p>
        <img src={inside} alt="" />
      </div>

      <Footer />
    </>
  );
}
