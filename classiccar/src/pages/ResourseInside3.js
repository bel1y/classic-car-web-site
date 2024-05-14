import React from "react";
import "../css/resourse.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import Navbar from "./Nav";
import Footer from "./Footer";
import comment from "../img/comment2.png";
import comment1 from "../img/comment3.png";

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
        <h1>Insurance Resourcess</h1>
        <h6>
          You’ve invested your time and money finding the classic car of your
          dreams. Now it’s time to protect your car against loss from collision,
          theft, and other dangers. Don’t take a chance with your classic car’s
          insurance. Protect your investment and get peace of mind from a
          company that specializes in insuring classic and collector vehicles.
        </h6>
      </section>
      <hr className="hr-for-resourse-inside" />

      <section className="second-section-inside">
        <div className="comment-div-resourse-inside">
          <div className="img-comment-resourse">
            <img src={comment} alt="" />
          </div>
          <div className="text-comment-resourse">
            <h2>Hagerty</h2>
            <p>
              Hagerty is not just the world’s largest provider of specialty
              insurance for enthusiast vehicles: they are all-in on the
              automotive lifestyle dedicated to the love of driving. Hagerty is
              home to Hagerty Drivers Club, DriveShare, Car Values, Hagerty
              Drivers Club magazine and MotorsportReg. Hagerty also helps keep
              car culture alive for future generations through youth programs,
              support for Historic Vehicle Association, and the RPM Foundation.
              For more information, call 800-922-4050 or visit Hagerty.com
            </p>
            <div className="df-visit-web-side-resourse">
              <p>
                <FaGlobe /> Visit Website
              </p>
              <p>
                <RiDoubleQuotesL /> Get a Free Quote
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
            <h2>Grundy Insurance</h2>
            <p>
              The James A. Grundy Agency, Inc. began as a small insurance
              company with a special knack for innovation. Since 1947, they have
              grown to be the premier provider of specialized insurance not only
              for collector vehicles, but for everything that is important to
              you. The basis of their success is that every Grundy policy
              includes superior coverage, legendary service, and substantial
              savings.
            </p>
            <div className="df-visit-web-side-resourse">
              <p>
                <FaGlobe /> Visit Website
              </p>
              <p>
                <RiDoubleQuotesL /> Get a Free Quote
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
