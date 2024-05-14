import React from "react";
import "../css/inside.css";
import Navbar from "./Nav";
import Footer from "./Footer";
import inside from "../img/inside6.png";

export default function Inside() {
  return (
    <>
      <Navbar />
      <div className="big-div-inside">
        <h1>
          Auction Central - Throttle Car Club - Throttle Car Club Second Annual
          Collector Vehicle & Memorabilia Auction
        </h1>
        <h3>
          Throttle Car Club Second Annual Collector Vehicle & Memorabilia
          Auction - Scarborough, Maine: May 31 - June 1, 2024
        </h3>
        <p>
          Throttle Car Club, New England's hottest new luxury car club & event
          center is hosting its 2nd annual Classic/Luxury/Specialty Motorcar
          Auction on May 31 & June 1 at our new 35,000 SF located in
          Scarborough, ME. This unique event will feature as many as 100
          vehicles for sale on site. With over 500 on-site attendees expected,
          local sponsors and vendors, food trucks and both in-person and online
          viewing & bidding this event is expected to sell out. On-site bidders
          will enjoy full access to the event including seating in the auction
          hall near all the action, pre-auction preview and entrance to Friday
          evening’s Welcome reception. Sellers will enjoy full access to the
          event, a Friday evening welcome reception, both onsite and online
          pre-qualified buyers and a low listing fee.
        </p>
        <img src={inside} alt="" />
      </div>

      <Footer />
    </>
  );
}
