import React from "react";
import "../css/inside.css";
import Navbar from "./Nav";
import Footer from "./Footer";
import inside from "../img/inside5.png";

export default function Inside() {
  return (
    <>
      <Navbar />
      <div className="big-div-inside">
        <h1>
          Auction Central - Henderson Auctions - 2024 Collector Motor Series
          Auction
        </h1>
        <h3>
          2024 Collector Motor Series Auction - Birmingham, Alabama: May 18,
          2024
        </h3>
        <p>
          Henderson Auctions is thrilled to announce the upcoming 2024 Collector
          Motor Series Auctions, set to take place at the renowned Barber
          Vintage Motorsports Museum on May 18, 2024. This highly anticipated
          event follows the success of the 2023 Collector Motor Series Auctions.
          As the 2024 Collector Motor Series Auctions draw near, Henderson
          Auctions invites all car enthusiasts, collectors, and passionate
          individuals to mark their calendars and join them at the Barber
          Vintage Motorsports Museum on May 18, 2024. This event promises to be
          a celebration of automotive excellence, showcasing the finest vehicles
          and delivering an unforgettable auction experience.
        </p>
        <img src={inside} alt="" />
      </div>

      <Footer />
    </>
  );
}
