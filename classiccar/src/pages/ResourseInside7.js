import React from "react";
import "../css/resourse.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import Navbar from "./Nav";
import Footer from "./Footer";
import comment from "../img/comment6.png";
import comment1 from "../img/comment7.png";

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
        <h1>Transport Resources</h1>
        <h6>
          Need to ship a classic car across the country? ClassicCars.com can
          help. Hire a vehicle transport company that specializes in the safe
          transportation of classic and collector vehicles.
        </h6>
      </section>
      <hr className="hr-for-resourse-inside" />

      <section className="second-section-inside">
        <div className="comment-div-resourse-inside">
          <div className="img-comment-resourse">
            <img src={comment} alt="" />
          </div>
          <div className="text-comment-resourse">
            <h2>National Transport Services</h2>
            <p>
              National Transport Services is a family owned business located in
              San Antonio, TX. Our staff has strong dedication and commitment to
              providing quality service. Our team knows that every customer is
              important and deserves the very best service. We provide our
              customers with cost-effective transportation solutions. No matter
              the destination, your vehicle is in the best hands with us.
            </p>
            <div className="df-visit-web-side-resourse">
              <p>
                <FaGlobe /> Visit Website
              </p>
              <p>
                <RiDoubleQuotesL /> Get A Free Quote
              </p>
            </div>
          </div>
        </div>
        <hr className="hr-for-resourse-inside1" />
        <div className="comment-div-resourse-inside">
          <div className="img-comment-resourse">
            <img src={comment1} alt="" />
          </div>
          <div className="text-comment-resourse">
            <h2>Shipydrive</h2>
            <p>
              Fast Car Shipping & Motorcycle Shipping! Best Vehicle Shippers in
              the USA. We offer fast and efficient vehicle transport solutions
              Nationwide through out the USA, including Hawaii, Puerto Rico and
              Alaska. We specialize in auto and motorcycle transportation,
              providing door-to-door service for both local and long-distance
              moves.
            </p>
            <div className="df-visit-web-side-resourse">
              <p>
                <FaGlobe /> Visit Website
              </p>
              <p>
                <RiDoubleQuotesL /> Get A Free Quote
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
