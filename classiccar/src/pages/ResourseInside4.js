import React from "react";
import "../css/resourse.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import Navbar from "./Nav";
import Footer from "./Footer";
import comment from "../img/comment4.png";

export default function ResourseInside() {
  function back() {
    window.location = "/resourse";
  }
  return (
    <div>
      <Navbar />
      <header className="header-resourse">
        <div className="header-text-resourse">
          <h1>Resource Guide</h1>
          <h3>
            Find your resources for finance, inspection, shipping and much more.
          </h3>
        </div>
      </header>
      <section className="first-section-inside">
        <p onClick={() => back()}>
          <MdArrowBackIosNew /> Return to Resource Guide
        </p>
        <h1>Online Auctions</h1>
        <h6>
          Looking for the classic car of your dreams? Check out these online
          auctions ...
        </h6>
      </section>
      <hr className="hr-for-resourse-inside" />

      <section className="second-section-inside">
        <div className="comment-div-resourse-inside">
          <div className="img-comment-resourse">
            <img src={comment} alt="" />
          </div>
          <div className="text-comment-resourse">
            <h2>AutoHunter</h2>
            <p>
              Modern, engaging, effective. From our beginnings at
              ClassicCars.com we’ve learned what our customers desire. Where
              other online auctions lack customer service, transactional
              confidence, and are time consuming, AutoHunter provides an online
              auction solution built on innovative technology supported by an
              award-winning customer service team. Our seasoned team of
              automotive experts guide, inform and educate consignors and
              bidders using our Safe-n-Secure™ platform producing an efficient
              transaction at the right hammer price.
            </p>
            <div className="df-visit-web-side-resourse">
              <p>
                <FaGlobe /> Visit Website
              </p>
              <p>
                <RiDoubleQuotesL />
                Register to Bid
              </p>
            </div>
          </div>
        </div>
        <hr className="hr-for-resourse-inside1" />
      </section>
      <div className="for-span-section-resourse">
        <span>
          This page contains affiliate links and ClassicCars.com may be
          compensated if you make a purchase through these links.
        </span>
      </div>

      <Footer />
    </div>
  );
}
