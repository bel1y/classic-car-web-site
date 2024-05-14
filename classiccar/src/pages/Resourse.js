import React from "react";
import "../css/resourse.css";
import Navbar from "./Nav";
import Footer from "./Footer";
import {
  FaBook,
  FaCreditCard,
  FaDollarSign,
  FaEye,
  FaGavel,
  FaTruck,
  FaWrench,
} from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
export default function Resourse() {
  function open() {
    window.location = "/resourse-inside";
  }
  function open1() {
    window.location = "/resourse-inside-1";
  }
  function open2() {
    window.location = "/resourse-inside-2";
  }
  function open3() {
    window.location = "/resourse-inside-3";
  }
  function open4() {
    window.location = "/resourse-inside-4";
  }
  function open5() {
    window.location = "/resourse-inside-5";
  }
  function open6() {
    window.location = "/resourse-inside-6";
  }
  function open7() {
    window.location = "/resourse-inside-7";
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

      <section className="section-resourse">
        <div onClick={() => open()} className="big-div-resourse">
          <h1>
            <FaBook /> Catalogs
          </h1>
          <p>
            Whether you're a seasoned collector or just getting started, if you
            own a classic car you're going to need parts. These companies
            provide parts catalogs on request.
          </p>
          <div className="inside-little-resourse">
            <span>+ More Info</span>
          </div>
        </div>
        <div onClick={() => open1()} className="big-div-resourse">
          <h1>
            <FaCreditCard /> Financing
          </h1>
          <p>
            Financing a classic car or truck can differ greatly from financing a
            new vehicle, especially if the vehicle is rare or heavily
            customized.
          </p>
          <div className="inside-little-resourse">
            <span>+ More Info</span>
          </div>
        </div>
        <div onClick={() => open2()} className="big-div-resourse">
          <h1>
            <FaEye /> Inspections & Appraisals
          </h1>
          <p>
            You found the perfect classic! At least you think you did. Hire an
            inspection service or appraiser that specializes in classic cars!
          </p>
          <div className="inside-little-resourse">
            <span>+ More Info</span>
          </div>
        </div>
        <div onClick={() => open3()} className="big-div-resourse">
          <h1>
            <FaDollarSign /> Insurance
          </h1>
          <p>
            You’ve invested your time and money finding the classic car of your
            dreams. Now it’s time to protect your car against loss from
            collision, theft, and other dangers.
          </p>
          <div className="inside-little-resourse">
            <span>+ More Info</span>
          </div>
        </div>
        <div onClick={() => open4()} className="big-div-resourse">
          <h1>
            <FaGavel /> Online Auctions -- AutoHunter
          </h1>
          <p>
            Looking for the classic car of your dreams? Check out AutoHunter ...
          </p>
          <div className="inside-little-resourse">
            <span>+ More Info</span>
          </div>
        </div>
        <div onClick={() => open5()} className="big-div-resourse">
          <h1>
            <FaWrench /> Restoration Shops, Vehicle Parts, & Products
          </h1>
          <p>
            Properly restoring a classic vehicle takes patience, dedication, and
            skill. Professionally restored cars and trucks look better, run
            better, and last longer.
          </p>
          <div className="inside-little-resourse">
            <span>+ More Info</span>
          </div>
        </div>
        <div onClick={() => open6()} className="big-div-resourse">
          <h1>
            <AiOutlineTransaction /> Safe-n-Secure™ Transactions
          </h1>
          <p>
            Safe-n-Secure™ is a comprehensive and exclusive system of policies
            and procedures that help shield ClassicCars.com buyers and sellers
            from fraud.
          </p>
          <div className="inside-little-resourse">
            <span>+ More Info</span>
          </div>
        </div>
        <div onClick={() => open7()} className="big-div-resourse">
          <h1>
            <FaTruck /> Transport Companies
          </h1>
          <p>
            Need to ship a classic car across the country? ClassicCars.com can
            help. Hire a vehicle transport company that specializes in the safe
            transportation of classic vehicles.
          </p>
          <div className="inside-little-resourse">
            <span>+ More Info</span>
          </div>
        </div>
        <div className="for-span-section-resourse">
          <span>
            This page contains affiliate links and ClassicCars.com may be
            compensated if you make a purchase through these links.
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
}
