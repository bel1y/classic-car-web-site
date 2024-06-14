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
  function openlistinfind() {
    var link='/listings-find/1?true'
    if(document.querySelector("#make-search-in-home").value){
      link+=`&&category=${document.querySelector("#make-search-in-home").value}`
    }
    if(document.querySelector("#model-search-in-home").value){
      link+=`&&subcategory=${document.querySelector("#model-search-in-home").value}`
    }
    if(document.querySelector("#year-min-search-in-home").value){
      link+=`&&year_min=${document.querySelector("#year-min-search-in-home").value}`
    }
    if(document.querySelector("#year-max-search-in-home").value){
      link+=`&&year_max=${document.querySelector("#year-max-search-in-home").value}`
    }
    window.location = link
  }

  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/api/v1/cars`)
      .then((res) => {
        axios.get(`${url}/api/v1/category`).then((res2) => {
          let forfilter = res2.data
          forfilter=forfilter.sort((a, b) => (a.title).localeCompare(b.title))
          var dd=forfilter.filter(item => item !== '')
          setCategory(dd)
          axios.get(`${url}/api/v1/subcategory`).then((res3) => {
            let forfilter1 = res3.data
            forfilter1=forfilter1.sort((a, b) => (a.title).localeCompare(b.title))
            var dd1=forfilter1.filter(item => item !== '')
            setSubCategory(dd1);
          });
        });
        setData(res.data);
      })
      .catch((err) => {});
  }, []);

  function openselacar() {
    window.location = "/sell-a-car";
  }
  
function forsub() {
  console.log("hello");
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
                <select onChange={(e)=>{
                  var a =[...category]
                  var d=a.filter(item=>item.id==e.target.value)
                  setSubCategory(d[0].sub)  
                }} name="" id="make-search-in-home">
                  <option value=""></option>
                  <optgroup label="Trending Makes">
                  <option value="7" id="special-for-this-option-select1">BMW</option>
                  <option value="6" id="special-for-this-option-select1">Bentley</option>
                  <option value="29" id="special-for-this-option-select1">Mazda</option>
                  <option value="46" id="special-for-this-option-select1">Toyota</option>
                  <option value="41" id="special-for-this-option-select1">Rolls Royce</option>
                  <option value="22" id="special-for-this-option-select1">Jaguar</option>
                  <option value="23" id="special-for-this-option-select1">Jeep</option>
                  <option value="24" id="special-for-this-option-select1">Lamborghini</option>
                  <option value="30" id="special-for-this-option-select1">Mercedes-Benz</option>
                  <option value="13" id="special-for-this-option-select1">Dodge</option>
                  <option value="48" id="special-for-this-option-select1">Volkswagen</option>
                  </optgroup>
                  <optgroup label="Other Makes">
                  {category.map((item, key) => {
                    return <option  value={item.id}>
                        <p>{item.title}</p>
                      </option>
                  })} </optgroup>
                </select>
              </div>
              <div className="select-text-home">
                <p>MODEL</p>
                <select name="" id="model-search-in-home">
                  <option value=""></option>
                  {subcategory.map((item, key) => {
                    return <option value={item.id} id="special-for-this-option-select1">
                        <p>{item.title}</p>
                      </option>
                    
                  })}
                </select>
              </div>
            </div>
          </div>

          <div className="add-own-searching-home">
            <p onClick={() => opensearch()}>Advanced Search</p>
            <p onClick={() => openlistinfind()}>Search</p>
          </div>
        </div>

        <div className="advertisement-home" onClick={() => openlistinfind()}>
          <p>{data.length} CLASSIC CARS AND TRUCKS FOR SALE TODAY</p>
        </div>
      </header>

      <img className="reklama-home" src={reklama} alt="" />

      <section className="first-section-home">
        <div className="accordion-home">

          <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Popular Searches <FaCaretDown /></Accordion.Header>
        <Accordion.Body>
        <p onClick={()=>{
                  window.location="/listings-find/1?category=10&&subcategory=340"
                }}>Chevrolet Corvette</p>
                <p onClick={()=>{
                  window.location="/listings-find/1?category=16&&subcategory=593"
                }}>Ford Mustang</p>
                <p onClick={()=>{
                  window.location="/listings-find/1?category=10&&subcategory=330"
                }}>Chevrolet Camaro</p>
                <p onClick={()=>{
                  window.location="/listings-find/1?category=10&&subcategory=328"
                }}>Chevrolet C10</p>
                <p onClick={()=>{
                  window.location="/listings-find/1?category=10&&subcategory=335"
                }}>Chevrolet Chevelle</p>
                <p onClick={()=>{
                  window.location="/listings-find/1?category=10&&subcategory=347"
                }}>Chevrolet Impala</p>
                <p onClick={()=>{
                  window.location="/listings-find/1?category=16&&subcategory=607"
                }}>Ford Thunderbird</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Browse By Category <FaCaretDown /></Accordion.Header>
        <Accordion.Body>
        <p onClick={()=>{
                  window.location="/listings-find/1?price_min=250000&&price_max=1000000000000"
                }}>$250,000 and Up</p>
                <p onClick={()=>{
                  window.location="/listings-find/1?year_min=1800&&year_max=1950"
                }}>Antiques / Pre-War</p>
                <p onClick={()=>{
                  window.location="/listings-find/1?year_min=1900&&year_max=2001"
                }}>Convertibles</p>
                <p onClick={()=>{
                  window.location="/listings-find/1?year_min=1974&&year_max=2030"
                }}>Future Classics</p>
                <p onClick={()=>{
                  window.location="/listings-find/1?year_min=2020&&year_max=2030"
                }}>Luxury Performance</p>
                <p onClick={()=>{
                  window.location="/listings-find/1?category=18"
                }}>Motorcycles</p>
                <p onClick={()=>{
                  window.location="/listings-find/1?year_min=1900&&year_max=2001"
                }}>Muscle Cars</p>
                <p onClick={()=>{
                  window.location="/listings-find/1?year_min=1900&&year_max=2001"
                }}>Newest Listings</p>
                <p onClick={()=>{
                  window.location="/listings-find/1?price_min=0&&price_max=5000"
                }}>Under $5,000</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Browse By Make <FaCaretDown /></Accordion.Header>
        <Accordion.Body>
        {category.map((item, key) => {
                    return (
                      <p
                        onClick={() =>
                          (window.location = `/listings-find/1?category=${item.id}`)
                        }
                      >
                        {item.title} ({item .count})
                      </p>
                    )
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

                    <h3 className="title-home">{item.title.slice(0, 25)}...</h3>
                    <p className="discreaption-home">
                      {item.description.slice(0, 100)}...
                    </p>
                    <span className="price-car-home">{item.price}</span>
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
                        <span className="price-car-home">{item.price}</span>
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
                        <span className="price-car-home">{item.price}</span>
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
                        <span className="price-car-home">{item.price}</span>
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
                        <span className="price-car-home">{item.price}</span>
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
                        <span className="price-car-home">{item.price}</span>
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
                        <span className="price-car-home">{item.price}</span>
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
