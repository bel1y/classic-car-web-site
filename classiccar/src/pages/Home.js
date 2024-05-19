import React, { useRef, useState, useEffect } from "react";
import Navbar from "./Nav";
import Footer from "./Footer";
import "../css/home.css";
import Accordion from "react-bootstrap/Accordion";
import reklama from "../img/reklama.gif";
import car from "../img/car.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import axios from 'axios'
import url from "./host.js";


export default function Home({match}) {
  const [data, setData] = useState([]);


  function open(id) {
    window.location = `/about-car/${id}`
  }
  function opensearch() {
    window.location = '/search'
  }
  function openlistinfind() {
    window.location = '/listings-find'
  }
var [category,setCategory]=useState([])
var [subcategory,setSubCategory]=useState([])

  useEffect(()=>{

axios.get(`${url}/api/v1/cars`)
.then(res=>{
axios.get(`${url}/api/v1/category`).then(res2=>{
  setCategory(res2.data)
  axios.get(`${url}/api/v1/subcategory`).then(res3=>{
setSubCategory(res3.data)
  })
})
  setData(res.data)
})
.catch(err=>{

})
  },[])

  function searchdata() {
    window.location = '/listings-find'
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
                <input type="text" />
              </div>
              <div className="input-text-home">
                <p>YEAR TO</p>
                <input type="text" />
              </div>
            </div>
            <div className="selec-div-home">
              <div className="select-text-home">
                <p>MAKE</p>
                <select name="" id="">
                  <option value=""></option>
                  {category.map(item=>{
                    return <option value="">
                    <p>
                      {item.title}
                    </p>
                 </option> })}
                </select>
              </div>
              <div className="select-text-home">
                <p>MODEL</p>
                <select name="" id="">
                  <option value=""></option>
                {subcategory.map(item=>{
                    return  <option value=""> <p>
                      {item.title}
                    </p>
                </option> 
               })}
                </select>
              </div>
            </div>
          </div>

          <div className="add-own-searching-home">
            <p onClick={()=>opensearch()}>Advanced Search</p>
            <p onClick={()=>searchdata()}>Search</p>
          </div>
        </div>

        <div className="advertisement-home" onClick={()=>openlistinfind()}>
          <p>38,034 CLASSIC CARS AND TRUCKS FOR SALE TODAY</p>
        </div>
      </header>

      <img className="reklama-home" src={reklama} alt="" />

      <section className="first-section-home">
        <div className="accordion-home">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Popular Searches</Accordion.Header>
              <Accordion.Body>
                <p>Ford Mustang</p>
                <p>Chevrolet Corvette</p>
                <p>Chevrolet Camaro</p>
                <p>Chevrolet Impala</p>
                <p>Chevrolet C10</p>
                <p>Ford Thunderbird</p>
                <p>Chevrolet Chevelle</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>BROWSE BY CATEGORY</Accordion.Header>
              <Accordion.Body>
                <p>$250,000 and Up</p>
                <p>Under $5,000</p>
                <p>Trucks</p>
                <p>Newest Listings</p>
                <p>Muscle Cars</p>
                <p>Motorcycles</p>
                <p>Luxury Performance</p>
                <p>Future Classics</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>BROWSE BY MAKE</Accordion.Header>
              <Accordion.Body>
                <p>All Makes A to E</p>
                <p>All Makes F to M</p>
                <p>All Makes N to Z</p>
                <p>Alfa Romeo (133)</p>
                <p>AMC (120)</p>
                <p>Aston Martin (97)</p>
                <p>Audi (105)</p>
                <p>BMW (507)</p>
              </Accordion.Body>
            </Accordion.Item>
            
          </Accordion>
        </div>

        <div className="view-sells-car-home">
          <div className="add-your-car-to-sell">
            <h1>PRIVATE SELLER LISTINGS</h1>
            <h5>SELL YOUR CAR </h5>
          </div>
          <p className="featured-home">Featured Listings</p>
          <div className="big-cars-div-home">
          {data.map(item=>{
                return <div className="cars-div-home" onClick={()=>open(item.id)}>

                <img src={item.image} alt="" />

                <h3 className="title-home">
                    {item.title}
                </h3>
                <p className="discreaption-home">
                {item.description}
                </p>
                <span className="price-car-home">${item.price}</span>
            </div>
              })}

              
              <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}breakpoints={{
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
      >{data.map(item=>{
        return  <SwiperSlide>       
                <div className="cars-div-home1" onClick={()=>open(item.id)}>

                <img src={item.image} alt="" />

                <h3 className="title-home">
                    {item.title}
                </h3>
                <p className="discreaption-home">
                {item.description}
                </p>
                <span className="price-car-home">{item.price}</span>
            </div>
             </SwiperSlide> })}
        {/* <SwiperSlide>
        <div className="cars-div-home1">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cars-div-home1">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cars-div-home1">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
        </SwiperSlide> */}
      </Swiper>
          </div>
        </div>
      </section>
{/* 
      <section className="first-section-home">
        <div className="accordion-home">
         
        </div>

        <div className="view-sells-car-home">
          <p className="featured-home">High-priced Listings</p>
          <div className="big-cars-div-home">
            <div className="cars-div-home">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
            <div className="cars-div-home">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
            <div className="cars-div-home">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
            <div className="cars-div-home">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
              <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}breakpoints={{
            // when window width is >= 640px
            300: {
              spaceBetween: 30,
              slidesPerView: 1,
            },
            500: {
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
        <SwiperSlide><div className="cars-div-home1">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div></SwiperSlide>
        <SwiperSlide>
        <div className="cars-div-home1">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cars-div-home1">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cars-div-home1">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
        </SwiperSlide>
      </Swiper>
          </div>
        </div>
      </section>

      <section className="first-section-home">
        <div className="accordion-home">
         
        </div>

        <div className="view-sells-car-home">
          <div className="add-your-car-to-sell1">
            <h1>DEALER LISTINGS</h1>
            <h5>SELL YOUR INVENTORY</h5>
          </div>
          <p className="featured-home">Showcased Listings</p>
          <div className="big-cars-div-home">
            <div className="cars-div-home">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
            <div className="cars-div-home">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
            <div className="cars-div-home">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
            <div className="cars-div-home">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
              <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}breakpoints={{
            // when window width is >= 640px
            300: {
              spaceBetween: 30,
              slidesPerView: 1,
            },
            500: {
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
        <SwiperSlide><div className="cars-div-home1">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div></SwiperSlide>
        <SwiperSlide>
        <div className="cars-div-home1">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cars-div-home1">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cars-div-home1">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
        </SwiperSlide>
      </Swiper>
          </div>
        </div>
      </section>


      <section className="first-section-home">
        <div className="accordion-home">
         
        </div>

        <div className="view-sells-car-home">
          <p className="featured-home">High-priced Listings</p>
          <div className="big-cars-div-home">
            <div className="cars-div-home">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
            <div className="cars-div-home">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
            <div className="cars-div-home">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
            <div className="cars-div-home">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
              <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}breakpoints={{
            // when window width is >= 640px
            300: {
              spaceBetween: 30,
              slidesPerView: 1,
            },
            500: {
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
        <SwiperSlide><div className="cars-div-home1">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div></SwiperSlide>
        <SwiperSlide>
        <div className="cars-div-home1">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cars-div-home1">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cars-div-home1">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
        </SwiperSlide>
      </Swiper>
          </div>
        </div>
      </section>


      <section className="first-section-home">
        <div className="accordion-home">
         
        </div>

        <div className="view-sells-car-home">
          <div className="add-your-car-to-sell1">
            <h1>AUCTION LISTINGS</h1>
          </div>
          <p className="featured-home">National Auctions</p>
          <div className="big-cars-div-home">
            <div className="cars-div-home">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
            <div className="cars-div-home">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
            <div className="cars-div-home">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
            <div className="cars-div-home">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
              <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}breakpoints={{
            // when window width is >= 640px
            300: {
              spaceBetween: 30,
              slidesPerView: 1,
            },
            500: {
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
        <SwiperSlide><div className="cars-div-home1">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div></SwiperSlide>
        <SwiperSlide>
        <div className="cars-div-home1">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cars-div-home1">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cars-div-home1">
                <img src={car} alt="" />

                <h3 className="title-home">
                    1972 Chevrolet Camaro SS
                </h3>
                <p className="discreaption-home">
                1972 Chevrolet Camaro SS396 Only a small handful were created by GM for 1972 and most were by special
                </p>
                <span className="price-car-home">$72,000</span>
            </div>
        </SwiperSlide>
      </Swiper>
          </div>
        </div>
      </section> */}

      <Footer/>
    </div>
  );
}
