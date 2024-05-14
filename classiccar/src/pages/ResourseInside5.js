import React from "react";
import "../css/resourse.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import Navbar from "./Nav";
import Footer from "./Footer";
import comment from "../img/comment5.png";

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
        <h1>Restoration Shops, Vehicle Parts, & Products</h1>
        <h6>
          Properly restoring a classic vehicle takes patience, dedication, and
          skill. Professionally restored cars and trucks look better, run
          better, last longer, and command higher prices. These specialty
          restoration companies can help you with even your most challenging
          restoration needs.
        </h6>
      </section>
      <hr className="hr-for-resourse-inside" />

      <section className="second-section-inside">
        <div className="comment-div-resourse-inside">
          <div className="img-comment-resourse">
            <img src={comment} alt="" />
          </div>
          <div className="text-comment-resourse">
            <h2>Pro Comp Custom</h2>
            <p>
              Pro Comp Custom is a high end restoration shop known for its
              classic restorations and one-of-a-kind builds. Pro Comp
              specializes in restoration, custom paint, and custom fabrication
              for street rods, hot rods, rat rods, resto mods, kustoms, exotics,
              vintage, late model, muscle, classics, and everything in between.
            </p>
            <div className="df-visit-web-side-resourse">
              <p>
                <FaGlobe /> Visit Website
              </p>
              <p>
                <RiDoubleQuotesL /> Restoration Services
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
