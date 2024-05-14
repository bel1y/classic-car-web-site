import React, { useEffect, useRef, useState } from "react";
import "../css/sellacar.css";
import Navbar from "./Nav";
import Footer from "./Footer";
import { IoCloseSharp, IoCheckmarkOutline, IoCaretDown } from "react-icons/io5";
import { FaCalendar, FaStar, FaShareAlt } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import new1 from "../img/new.png";
import second from "../img/safe-sellacar.png";
import { BsCheck } from "react-icons/bs";
import s from "../css/forswiper.module.css";
import f from "../css/forseconswiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import porsche from "../img/porsche.png";

export default function Sellacar() {
  function open() {
    document.querySelector(".special-for-mediya-table-sellacar").style =
      "display:block";
    document.querySelector(".special-for-mediya-table-sellacar1").style =
      "display:none";
    document.querySelector(".special-for-mediya-table-sellacar2").style =
      "display:none";
  }
  function open1() {
    document.querySelector(".special-for-mediya-table-sellacar1").style =
      "display:block";
    document.querySelector(".special-for-mediya-table-sellacar").style =
      "display:none";
    document.querySelector(".special-for-mediya-table-sellacar2").style =
      "display:none";
  }
  function open2() {
    document.querySelector(".special-for-mediya-table-sellacar2").style =
      "display:block";
    document.querySelector(".special-for-mediya-table-sellacar1").style =
      "display:none";
    document.querySelector(".special-for-mediya-table-sellacar").style =
      "display:none";
  }
  return (
    <div>
      <Navbar />
      <header className="header-sellacar">
        <div className="text-header-sellacar">
          <h1>Sell Your Classic Car</h1>
          <h3>
            List your classic car in front of millions of classic car
            enthusiasts.
          </h3>
        </div>
      </header>

      <section className="section-table-sellacar">
        <table>
          <tr className="special-for-bgc-in-sellacar">
            <th className="big-th-in-sellacar special-for-padding-sellacar">
              Choose the right package for you and sell your classic car safely,
              quickly and for the best price
            </th>
            <th className="small-th-in-sellacar">Regular</th>
            <th className="small-th-in-sellacar">Plus</th>
            <th className="small-th-in-sellacar special-for-padding-sellacar1">
              Premium
            </th>
          </tr>
          <tr className="special-for-bgc-in-sellacar1">
            <td className="big-td-in-sellacar special-for-padding-sellacar">
              Pricing
            </td>
            <td className="small-td-in-sellacar">$149.99</td>
            <td className="small-td-in-sellacar">$189.99</td>
            <td className="small-td-in-sellacar special-for-padding-sellacar1">
              $349.99
            </td>
          </tr>
          <tr className="special-for-bgc-in-sellacar">
            <td className="big-td-in-sellacar special-for-padding-sellacar"></td>
            <td className="small-td-in-sellacar">
              <button>LIST NOW</button>
            </td>
            <td className="small-td-in-sellacar">
              <button>LIST NOW</button>
            </td>
            <td className="small-td-in-sellacar special-for-padding-sellacar1">
              <button>LIST NOW</button>
            </td>
          </tr>
          <tr className="special-for-bgc-in-sellacar">
            <td className="big-td-in-sellacar special-for-padding-sellacar">
              <p>
                <FaCalendar className="FaCalendar-sellacar" /> Listed Until Sold
              </p>
              <span>
                Duration of time your vehicle is listed on ClassicCars.com.
              </span>
            </td>
            <td className="small-td-in-sellacar">
              <p>Guaranteed</p>
            </td>
            <td className="small-td-in-sellacar">
              <p>Guaranteed</p>
            </td>
            <td className="small-td-in-sellacar special-for-padding-sellacar1">
              <p>Guaranteed</p>
            </td>
          </tr>
          <tr className="special-for-bgc-in-sellacar1">
            <td className="big-td-in-sellacar special-for-padding-sellacar">
              <p>
                <FaStar className="FaCalendar-sellacar" /> Featured Listing
              </p>
              <span>
                Get Home Page exposure and a higher ranking on search results.
              </span>
            </td>
            <td className="small-td-in-sellacar">
              <IoCloseSharp className="IoCloseSharp-sellacar" />
            </td>
            <td className="small-td-in-sellacar">
              <h6>4 Weeks</h6>
            </td>
            <td className="small-td-in-sellacar special-for-padding-sellacar1">
              <h6>Until Sold</h6>
            </td>
          </tr>
          <tr className="special-for-bgc-in-sellacar">
            <td className="big-td-in-sellacar special-for-padding-sellacar">
              <p>
                <FaShareAlt /> Social Exposure
              </p>
              <span>
                Listing will be featured on social media in front of 760,000
                followers.
              </span>
            </td>
            <td className="small-td-in-sellacar">
              <IoCloseSharp className="IoCloseSharp-sellacar" />
            </td>
            <td className="small-td-in-sellacar">
              <h5>2 Social Media Posts</h5>
            </td>
            <td className="small-td-in-sellacar special-for-padding-sellacar1">
              <h5>4 Social Media Posts</h5>
            </td>
          </tr>
          <tr className="special-for-bgc-in-sellacar1">
            <td className="big-td-in-sellacar special-for-padding-sellacar">
              <p>
                <img src={new1} alt="" /> AutoHunter Online Auctions
              </p>
              <span>
                Eligible for AutoHunter consideration. No seller commissions. No
                risk.
              </span>
            </td>
            <td className="small-td-in-sellacar">
              <IoCloseSharp className="IoCloseSharp-sellacar" />
            </td>
            <td className="small-td-in-sellacar">
              <IoCloseSharp className="IoCloseSharp-sellacar" />
            </td>
            <td className="small-td-in-sellacar special-for-padding-sellacar1">
              <IoCheckmarkOutline className="IoCheckmarkOutline-sellacar" />
            </td>
          </tr>
          <tr className="special-for-bgc-in-sellacar">
            <td className="big-td-in-sellacar special-for-padding-sellacar">
              <p>
                <FaNewspaper /> Newsletter Exposure
              </p>
              <span>
                Listing will be featured in the "Downshift" in front of 180,000
                newsletter subscribers.
              </span>
            </td>
            <td className="small-td-in-sellacar">
              <IoCloseSharp className="IoCloseSharp-sellacar" />
            </td>
            <td className="small-td-in-sellacar">
              <IoCloseSharp className="IoCloseSharp-sellacar" />
            </td>
            <td className="small-td-in-sellacar special-for-padding-sellacar1">
              <IoCheckmarkOutline className="IoCheckmarkOutline-sellacar" />
            </td>
          </tr>
        </table>
      </section>

      <section className="section-for-mediya-sellacar">
        <div className="big-div-mediya-sellacar">
          <div className="div-mediya-sellacar" onClick={() => open()}>
            <h3>Regular</h3>
            <h4>
              <IoCaretDown />
            </h4>
            <h1>$149.99</h1>
          </div>
          <div className="special-for-mediya-table-sellacar">
            <div className="div-mediya-sellacar1">
              <h3>Listed Until Sold</h3>
              <h4></h4>
              <h1>Guaranteed</h1>
            </div>
            <div className="special-for-button-div-sellacar">
              <button>LIST NOW</button>
            </div>
          </div>
        </div>

        <div className="big-div-mediya-sellacar">
          <div className="div-mediya-sellacar" onClick={() => open1()}>
            <h3>Plus</h3>
            <h4>
              <IoCaretDown />
            </h4>
            <h1>$189.99</h1>
          </div>
          <div className="special-for-mediya-table-sellacar1">
            <div className="div-mediya-sellacar1">
              <h3>Listed Until Sold</h3>
              <h4></h4>
              <h1>Guaranteed</h1>
            </div>
            <div className="div-mediya-sellacar2">
              <h3>
                <FaStar className="FaCalendar-sellacar" /> Featured Listing
              </h3>
              <h4></h4>
              <h1>4 Weeks</h1>
            </div>
            <div className="special-for-button-div-sellacar">
              <button>LIST NOW</button>
            </div>
          </div>
        </div>

        <div className="big-div-mediya-sellacar">
          <div className="div-mediya-sellacar" onClick={() => open2()}>
            <h3>Premium</h3>
            <h4>
              <IoCaretDown />
            </h4>
            <h1>$349.99</h1>
          </div>
          <div className="special-for-mediya-table-sellacar2">
            <div className="div-mediya-sellacar1">
              <h3>Listed Until Sold</h3>
              <h4></h4>
              <h1>Guaranteed</h1>
            </div>
            <div className="div-mediya-sellacar2">
              <h3>
                <FaStar className="FaCalendar-sellacar" /> Featured Listing
              </h3>
              <h4></h4>
              <h1>4 Weeks</h1>
            </div>
            <div className="div-mediya-sellacar1">
              <h3>
                <FaShareAlt /> Social Exposure
              </h3>
              <h4></h4>
              <h1>4 Social Media Posts</h1>
            </div>
            <div className="div-mediya-sellacar2">
              <h3>AutoHunter Online Auctions</h3>
              <h4></h4>
              <h1>
                <IoCheckmarkOutline className="IoCheckmarkOutline-mediya-sellacar" />
              </h1>
            </div>
            <div className="div-mediya-sellacar1">
              <h3>Newsletter Exposure</h3>
              <h4></h4>
              <h1>
                <IoCheckmarkOutline className="IoCheckmarkOutline-mediya-sellacar" />
              </h1>
            </div>
            <div className="special-for-button-div-sellacar">
              <button>LIST NOW</button>
            </div>
          </div>
        </div>
      </section>

      <section className="second-section-sellacar">
        <div className="about-sell-in-sellacar">
          <h1>Drive more people to your listing</h1>
          <div className="text-sell-in-sellacar">
            <div className="check-sellacar-div">
              <BsCheck />
            </div>
            <div className="text-lettle-sellacar">
              <p>
                <b>Want to show off your classic car?</b> Our listings feature
                descriptions with nearly unlimited length, as well as the
                ability to upload as many as 100 photos along with video
              </p>
            </div>
          </div>
          <div className="text-sell-in-sellacar">
            <div className="check-sellacar-div">
              <BsCheck />
            </div>
            <div className="text-lettle-sellacar">
              <p>
                <b>Need to make changes?</b> You can edit your listing whenever
                it is convenient for you
              </p>
            </div>
          </div>
          <div className="text-sell-in-sellacar">
            <div className="check-sellacar-div">
              <BsCheck />
            </div>
            <div className="text-lettle-sellacar">
              <p>
                <b>Don't be in the dark:</b> Use our seller dashboard to track
                how many views your ad is getting
              </p>
            </div>
          </div>
          <div className="text-sell-in-sellacar">
            <div className="check-sellacar-div">
              <BsCheck />
            </div>
            <div className="text-lettle-sellacar">
              <p>
                <b>Leverage our huge reach</b> - across search engines, social
                media and the ClassicCars.com community - to promote your
                vehicle
              </p>
            </div>
          </div>
          <div className="text-sell-in-sellacar">
            <div className="check-sellacar-div">
              <BsCheck />
            </div>
            <div className="text-lettle-sellacar">
              <p>
                <b>In a hurry?</b> We get it: You can post your listing now and
                add photos later
              </p>
            </div>
          </div>
          <div className="text-sell-in-sellacar">
            <div className="check-sellacar-div">
              <BsCheck />
            </div>
            <div className="text-lettle-sellacar">
              <p>
                <b>
                  Sellers, you'll get emails from interested buyers sent
                  directly to your inbox
                </b>{" "}
                - no messing with another email system
              </p>
            </div>
          </div>
          <div className="text-sell-in-sellacar">
            <div className="check-sellacar-div">
              <BsCheck />
            </div>
            <div className="text-lettle-sellacar">
              <p>
                <b>Our Safe-n-SecureTM program</b> lets both sellers and buyers
                be confident that their sale is going through a protected
                process
              </p>
            </div>
          </div>
        </div>
        <div className="about-sell-in-sellacar1">
          <h1>Trusted by Hundreds of Thousands of Sellers</h1>
          <p>What Buyers and Sellers are saying about Classiccars.com</p>
          <div className="review-in-sellacar">
            <div className="first-review-in-sellacar">
              <h4>Great</h4>
              <div className="star-review-in-sellacar">
                <div className="FaStar-sellacar">
                  <FaStar />
                </div>
                <div className="FaStar-sellacar">
                  <FaStar />
                </div>
                <div className="FaStar-sellacar">
                  <FaStar />
                </div>
                <div className="FaStar-sellacar">
                  <FaStar />
                </div>
                <div className="FaStar-sellacar1">
                  <FaStar />
                </div>
              </div>
              <p>
                Based on <span>1,117 reviews</span>
              </p>
              <h5>
                <span className="span-FaStar-sellacar">
                  <FaStar />
                </span>{" "}
                Trustpilot
              </h5>
            </div>
            <div className="second-review-in-sellacar">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className={f.mySwiper}
              >
                <SwiperSlide>
                  <div className="big-swiper-nothing-sellacar">
                    <div className="for-star-div-review-sellacar">
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                    </div>
                    <p>great</p>
                    <span>great website</span>
                    <h6>Chris Bulger, April 24</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="big-swiper-nothing-sellacar">
                    <div className="for-star-div-review-sellacar">
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                    </div>
                    <p>great</p>
                    <span>great website</span>
                    <h6>Chris Bulger, April 24</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="big-swiper-nothing-sellacar">
                    <div className="for-star-div-review-sellacar">
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                    </div>
                    <p>great</p>
                    <span>great website</span>
                    <h6>Chris Bulger, April 24</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="big-swiper-nothing-sellacar">
                    <div className="for-star-div-review-sellacar">
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                    </div>
                    <p>great</p>
                    <span>great website</span>
                    <h6>Chris Bulger, April 24</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="big-swiper-nothing-sellacar">
                    <div className="for-star-div-review-sellacar">
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                    </div>
                    <p>great</p>
                    <span>great website</span>
                    <h6>Chris Bulger, April 24</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="big-swiper-nothing-sellacar">
                    <div className="for-star-div-review-sellacar">
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                    </div>
                    <p>great</p>
                    <span>great website</span>
                    <h6>Chris Bulger, April 24</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="big-swiper-nothing-sellacar">
                    <div className="for-star-div-review-sellacar">
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                    </div>
                    <p>great</p>
                    <span>great website</span>
                    <h6>Chris Bulger, April 24</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="big-swiper-nothing-sellacar">
                    <div className="for-star-div-review-sellacar">
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                    </div>
                    <p>great</p>
                    <span>great website</span>
                    <h6>Chris Bulger, April 24</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="big-swiper-nothing-sellacar">
                    <div className="for-star-div-review-sellacar">
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                      <div className="FaStar-sellacar2">
                        <FaStar />
                      </div>
                    </div>
                    <p>great</p>
                    <span>great website</span>
                    <h6>Chris Bulger, April 24</h6>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="read-more-sellacar">READ MORE REVIEWS</div>
        </div>
      </section>

      <section className="third-section-sellacar">
        <h1>Recent Private Seller Listings</h1>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={s.mySwiper}
          breakpoints={{
            300: {
              spaceBetween: 30,
              slidesPerView: 1,
            },
            600: {
              spaceBetween: 30,
              slidesPerView: 2,
            },
            900: {
              spaceBetween: 30,
              slidesPerView: 3,
            },
            1230: {
              spaceBetween: 30,
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div className="big-inside-div-for-swiper-sellacar">
              <div className="div-for0img-swiper-porsche">
                <img src={porsche} alt="" />
              </div>
              <p>2011 Porsche 911</p>
              <h4>$40,000</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="big-inside-div-for-swiper-sellacar">
              <div className="div-for0img-swiper-porsche">
                <img src={porsche} alt="" />
              </div>
              <p>2011 Porsche 911</p>
              <h4>$40,000</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="big-inside-div-for-swiper-sellacar">
              <div className="div-for0img-swiper-porsche">
                <img src={porsche} alt="" />
              </div>
              <p>2011 Porsche 911</p>
              <h4>$40,000</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="big-inside-div-for-swiper-sellacar">
              <div className="div-for0img-swiper-porsche">
                <img src={porsche} alt="" />
              </div>
              <p>2011 Porsche 911</p>
              <h4>$40,000</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="big-inside-div-for-swiper-sellacar">
              <div className="div-for0img-swiper-porsche">
                <img src={porsche} alt="" />
              </div>
              <p>2011 Porsche 911</p>
              <h4>$40,000</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="big-inside-div-for-swiper-sellacar">
              <div className="div-for0img-swiper-porsche">
                <img src={porsche} alt="" />
              </div>
              <p>2011 Porsche 911</p>
              <h4>$40,000</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="big-inside-div-for-swiper-sellacar">
              <div className="div-for0img-swiper-porsche">
                <img src={porsche} alt="" />
              </div>
              <p>2011 Porsche 911</p>
              <h4>$40,000</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="big-inside-div-for-swiper-sellacar">
              <div className="div-for0img-swiper-porsche">
                <img src={porsche} alt="" />
              </div>
              <p>2011 Porsche 911</p>
              <h4>$40,000</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="big-inside-div-for-swiper-sellacar">
              <div className="div-for0img-swiper-porsche">
                <img src={porsche} alt="" />
              </div>
              <p>2011 Porsche 911</p>
              <h4>$40,000</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="fourth-section-sellacar">
        <div className="div-about-safe-sellacar">
          <img src={second} alt="" />
          <p>Our Industry-leading Safe-n-Secure™ Technology Protects You</p>
          <h5>Buy Or Sell Collector Cars & Trucks Safely & Securely</h5>
        </div>
        <div className="div-about-safe-sellacar1">
          <h3>About Safe-n-Secure™</h3>
          <p>
            We work hard to make ClassicCars.com a safe and friendly environment
            for collector car enthusiasts to buy, sell and maintain their
            automobiles. Our years of experience in the online classifieds
            business has resulted in an exclusive and comprehensive system of
            policies and procedures, interwoven with machine learning
            capabilities, to help shield our buyers and sellers from fraud.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
