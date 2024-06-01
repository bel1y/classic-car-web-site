import React, { useRef, useState, useEffect } from "react";
import Navbar from "./Nav";
import Footer from "./Footer";
import "../css/home.css";
import Accordion from "react-bootstrap/Accordion";
import reklama from "../img/reklama.gif";
import car from "../img/car.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaCaretDown } from "react-icons/fa";
import axios from "axios";
import url from "./host.js";

export default function Home() {
  const [data, setData] = useState([]);

  function open(id) {
    window.location = `/about-car/${id}`;
  }
  function opensearch() {
    window.location = "/search";
  }
  function openlistinfind(id) {
    window.location = `/listings-find/1?category=${document.querySelector("#make-search-in-home").value}
    &&subcategory=${document.querySelector("#make-search-in-home").value}
    &&year_min=${document.querySelector("#year-min-search-in-home").value}
    &&year_max=${document.querySelector("#year-max-search-in-home").value}`;
  }

  var [category, setCategory] = useState([]);
  var [subcategory, setSubCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/api/v1/cars`)
      .then((res) => {
        axios.get(`${url}/api/v1/category`).then((res2) => {

            setCategory(res2.data);

          axios.get(`${url}/api/v1/subcategory`).then((res3) => {
            setSubCategory(res3.data);
          });
        });
        setData(res.data);
      })
      .catch((err) => {});
  }, []);

  function openselacar() {
    window.location = "/sell-a-car";
  }

  return (
    <div>
      <Navbar />
      <header className="header-home">
        <div className="find-car-home">
          <p className="find-your-classic">Find Your Classic</p>

          <div className="searching-car-home">
            <div className="input-div-home">
              <div className="input-text-home">
                <p>YEAR FROM</p>
                <input type="number" id="year-min-search-in-home" />
              </div>
              <div className="input-text-home">
                <p>YEAR TO</p>
                <input type="number" id="year-max-search-in-home" />
              </div>
            </div>
            <div className="selec-div-home">
              <div className="select-text-home">
                <p>MAKE</p>
                <select name="" id="make-search-in-home">
                  <option value=""></option>
                  {category.map((item) => {
                    return (
                      <option value={item.id}>
                        <p>{item.title}</p>
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="select-text-home">
                <p>MODEL</p>
                <select name="" id="model-search-in-home">
                  <option value=""></option>
                  {subcategory.map((item) => {
                    return (
                      <option value={item.id}>
                        {" "}
                        <p>{item.title}</p>
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          <div className="add-own-searching-home">
            <p onClick={() => opensearch()}>Advanced Search</p>
            <p onClick={() => openlistinfind(data.id)}>Search</p>
          </div>
        </div>

        <div
          className="advertisement-home"
          onClick={() => openlistinfind(data.id)}
        >
          <p>{data.length} CLASSIC CARS AND TRUCKS FOR SALE TODAY</p>
        </div>
      </header>

      <img className="reklama-home" src={reklama} alt="" />

      <section className="first-section-home">
        <div className="accordion-home">
          <Accordion defaultActiveKey="0">
          
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Popular Searches <FaCaretDown /></Accordion.Header>
                  <Accordion.Body>  
                    {category.map((item, key) => {
if(key < 3){
  return <>
  <p
    onClick={() =>
      (window.location = `/listings-find/1?category=${item.id}`)
    }
  >
    {item.title}
  </p>
  </>
}
if(key > 3 && key < 6){
  return <>
  <p
    onClick={() =>
      (window.location = `/listings-find/1?category=${item.id}`)
    }
  >
    {item.title}
  </p>
  </>
}
if(key > 9 && key < 15){
  return <>
  <p
    onClick={() =>
      (window.location = `/listings-find/1?category=${item.id}`)
    }
  >
    {item.title}
  </p>
  </>
}
                          
                        
            })}
                    {subcategory.map((item, key) => {
if(key < 3){
  return <>
  <p
    onClick={() =>
      (window.location = `/listings-find/1?subcategory=${item.id}`)
    }
  >
    {item.title}
  </p>
  </>
}
if(key > 3 && key < 6){
  return <>
  <p
    onClick={() =>
      (window.location = `/listings-find/1?subcategory=${item.id}`)
    }
  >
    {item.title}
  </p>
  </>
}
if(key > 9 && key < 15){
  return <>
  <p
    onClick={() =>
      (window.location = `/listings-find/1?subcategory=${item.id}`)
    }
  >
    {item.title}
  </p>
  </>
}
                          
                        
            })}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Browse By Category <FaCaretDown /></Accordion.Header>
                  <Accordion.Body>  
                    {category.map((item, key) => {
                        if(item.title.length < 11){
                          return (
                            <p
                              onClick={() =>
                                (window.location = `/listings-find/1?subcategory=${item.id}`)
                              }
                            >
                              {item.title}
                            </p>
                            );
                        }
            })}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Browse By Make <FaCaretDown /></Accordion.Header>
                  <Accordion.Body>  
                    {subcategory.map((item, key) => {
                        if(item.title.length < 11){
                          return (
                            <p
                              onClick={() =>
                                (window.location = `/listings-find/1?subcategory=${item.id}`)
                              }
                            >
                              {item.title}
                            </p>
                            );
                        }
            })}
                  </Accordion.Body>
                </Accordion.Item>
              
          </Accordion>
        </div>

        <div className="view-sells-car-home">
          <div className="add-your-car-to-sell">
            <h1 onClick={() => openlistinfind()}>PRIVATE SELLER LISTINGS</h1>
            <h5 onClick={() => openselacar()}>SELL YOUR CAR </h5>
          </div>
          <p className="featured-home">Featured Listings</p>
          <div className="big-cars-div-home">
            {data.map((item, key) => {
              if (key < 100) {
                return (
                  <div className="cars-div-home" onClick={() => open(item.id)}>
                    <img src={item.image} alt="" />

                    <h3 className="title-home">
                      {item.year} {item.title}
                    </h3>
                    <p className="discreaption-home">
                      {item.description.slice(0, 100)}...
                    </p>
                    <span className="price-car-home">${item.price}</span>
                  </div>
                );
              }
            })}

            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                // when window width is >= 640px
                300: {
                  spaceBetween: 30,
                  slidesPerView: 1,
                },
                600: {
                  spaceBetween: 30,
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                960: {
                  spaceBetween: 30,
                  slidesPerView: 3,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {data.map((item, key) => {
                if (key < 15) {
                  return (
                    <SwiperSlide>
                      <div
                        className="cars-div-home1"
                        onClick={() => open(item.id)}
                      >
                        <img src={item.image} alt="" />

                        <h3 className="title-home">
                          {item.year} {item.title}
                        </h3>
                        <p className="discreaption-home">
                          {item.description.slice(0, 100)}...
                        </p>
                        <span className="price-car-home">${item.price}</span>
                      </div>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>

            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                // when window width is >= 640px
                300: {
                  spaceBetween: 30,
                  slidesPerView: 1,
                },
                600: {
                  spaceBetween: 30,
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                960: {
                  spaceBetween: 30,
                  slidesPerView: 3,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {data.map((item, key) => {
                if (key > 15 && key < 30) {
                  return (
                    <SwiperSlide>
                      <div
                        className="cars-div-home1"
                        onClick={() => open(item.id)}
                      >
                        <img src={item.image} alt="" />

                        <h3 className="title-home">
                          {item.year} {item.title}
                        </h3>
                        <p className="discreaption-home">
                          {item.description.slice(0, 100)}...
                        </p>
                        <span className="price-car-home">${item.price}</span>
                      </div>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>

            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                // when window width is >= 640px
                300: {
                  spaceBetween: 30,
                  slidesPerView: 1,
                },
                600: {
                  spaceBetween: 30,
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                960: {
                  spaceBetween: 30,
                  slidesPerView: 3,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {data.map((item, key) => {
                if (key > 30 && key < 45) {
                  return (
                    <SwiperSlide>
                      <div
                        className="cars-div-home1"
                        onClick={() => open(item.id)}
                      >
                        <img src={item.image} alt="" />

                        <h3 className="title-home">
                          {item.year} {item.title}
                        </h3>
                        <p className="discreaption-home">
                          {item.description.slice(0, 100)}...
                        </p>
                        <span className="price-car-home">${item.price}</span>
                      </div>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>

            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                // when window width is >= 640px
                300: {
                  spaceBetween: 30,
                  slidesPerView: 1,
                },
                600: {
                  spaceBetween: 30,
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                960: {
                  spaceBetween: 30,
                  slidesPerView: 3,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {data.map((item, key) => {
                if (key > 45 && key < 60) {
                  return (
                    <SwiperSlide>
                      <div
                        className="cars-div-home1"
                        onClick={() => open(item.id)}
                      >
                        <img src={item.image} alt="" />

                        <h3 className="title-home">
                          {item.year} {item.title}
                        </h3>
                        <p className="discreaption-home">
                          {item.description.slice(0, 100)}...
                        </p>
                        <span className="price-car-home">${item.price}</span>
                      </div>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>

            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                // when window width is >= 640px
                300: {
                  spaceBetween: 30,
                  slidesPerView: 1,
                },
                600: {
                  spaceBetween: 30,
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                960: {
                  spaceBetween: 30,
                  slidesPerView: 3,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {data.map((item, key) => {
                if (key > 60 && key < 75) {
                  return (
                    <SwiperSlide>
                      <div
                        className="cars-div-home1"
                        onClick={() => open(item.id)}
                      >
                        <img src={item.image} alt="" />

                        <h3 className="title-home">
                          {item.year} {item.title}
                        </h3>
                        <p className="discreaption-home">
                          {item.description.slice(0, 100)}...
                        </p>
                        <span className="price-car-home">${item.price}</span>
                      </div>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>

            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                // when window width is >= 640px
                300: {
                  spaceBetween: 30,
                  slidesPerView: 1,
                },
                600: {
                  spaceBetween: 30,
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                960: {
                  spaceBetween: 30,
                  slidesPerView: 3,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {data.map((item, key) => {
                if (key > 75 && key < 100) {
                  return (
                    <SwiperSlide>
                      <div
                        className="cars-div-home1"
                        onClick={() => open(item.id)}
                      >
                        <img src={item.image} alt="" />

                        <h3 className="title-home">
                          {item.year} {item.title}
                        </h3>
                        <p className="discreaption-home">
                          {item.description.slice(0, 100)}...
                        </p>
                        <span className="price-car-home">${item.price}</span>
                      </div>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
