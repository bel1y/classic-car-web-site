import React, { useState, useEffect, useRef } from 'react'
import hangerty from '../img/comment2.png'
import getfree from '../img/get-free.png'
import woodside from '../img/woodside.png'
import jegs from '../img/jegs.png'
import '../css/aboutcar.css'
import Navbar from './Nav'
import Footer from './Footer'
import { FaHeartCirclePlus } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import carinside from '../img/classiccar-inside.jpg'
import advericement from '../img/adverticement.png'
import s from '../css/forswiperinaboutcar.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import axios from 'axios'
import { useParams } from 'react-router-dom';


export default function AboutCar() {

  const [data, setData] = useState([]);
  const { id } = useParams();
  

  useEffect(()=>{

    axios.get('https://car-muhammadali-back.onrender.com/api/v1/cars')
    .then(res=>{
    var a = res.data.filter(item=>item.id == id)
    console.log(a);
      setData(a)
    })
    .catch(err=>{
    
    })
  },[])

  return (
    <div className='big-div-about-car'>
        <Navbar/>
        {id}
        <h1 className='h1-aboutcar-div'>For Sale: 1955 Chrysler 300 in Bozeman, Montana</h1>
        <div className="df-anons-aboutcar">
            <div className="first-anons-aboutcar">
    <img src={hangerty} alt="" />
    <p>Collector car insurance</p>
            </div>
            <div className="first-anons-aboutcar">
    <img src={getfree} alt="" />
            </div>
            <div className="first-anons-aboutcar">
    <img src={woodside} alt="" />
    <p>$453.45/month for 96 months</p>
            </div>
            <div className="first-anons-aboutcar">
    <img src={jegs} alt="" />
    <p>High End Performance Parts</p>
            </div>
        </div>

        <section className="first-section-aboutcar">
        <div className="about-car-div">
          <div className="swiper-for-about-car-div">
          <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className={s.mySwiper}
      > {data.map(item=>{
        return <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={item.all_img} alt="" className='about-car-img-div'/>
            </div>
        </SwiperSlide>
        })}
        {/* <SwiperSlide>
          <div className="swiper-zoom-container">
          <img src={carinside} alt="" className='about-car-img-div'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <img src={carinside} alt="" className='about-car-img-div'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <img src={carinside} alt="" className='about-car-img-div'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <img src={carinside} alt="" className='about-car-img-div'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <img src={carinside} alt="" className='about-car-img-div'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <img src={carinside} alt="" className='about-car-img-div'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <img src={carinside} alt="" className='about-car-img-div'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <img src={carinside} alt="" className='about-car-img-div'/>
          </div>
        </SwiperSlide> */}
      </Swiper>
          </div>

    <div className="favorite-cintact-div-aboutcar">
      <button className="add-favorite-div">
        <p><span><FaHeartCirclePlus /></span> favorite</p>
      </button>
      <button className="add-favorite-div">
        <p><span><MdEmail  /></span> Send to a Friend</p>
      </button>
      <button className="add-favorite-div">
        <a href="#cantact-seller-about-car"><p><span><IoPerson  /></span> Contact Seller</p></a>
      </button>
    </div>
    <div className="description-aboutcar-div">
      <h1>Vehicle Description</h1>
      {data.map(item=>{
        return <>
        <p>{item.description}</p>
      </>
      })}
      
    </div>
    <h1>Vehicle Details</h1>
    {data.map(item=>{
      return     <table className='table-in-aboutcar'>
      <tr className='first-tr-in-table-aboutcar'>
        <th>1955 Ford 46 Custom</th>
        <th></th>
      </tr>
      <tr className='first-tr-in-table-aboutcar1'>
        <td>Listing ID:</td>
        <td>{item.listing_id}</td>
      </tr>
      <tr className='first-tr-in-table-aboutcar'>
        <td>Price:</td>
        <td className='special-for-color-aboutcar'>${item.price}</td>
      </tr>
      <tr className='first-tr-in-table-aboutcar1'>
        <td>Location:</td>
        <td>{item.location}</td>
      </tr>
      <tr className='first-tr-in-table-aboutcar'>
        <td>Year:</td>
        <td>{item.year}</td>
      </tr>
      <tr className='first-tr-in-table-aboutcar1'>
        <td>Make:</td>
        <td>{item.make}</td>
      </tr>
      <tr className='first-tr-in-table-aboutcar'>
        <td>Model:</td>
        <td>{item.model}</td>
      </tr>
      <tr className='first-tr-in-table-aboutcar1'>
        <td>Exterior Color:</td>
        <td>{item.exterior_color}</td>
      </tr>
      <tr className='first-tr-in-table-aboutcar'>
        <td>Interior Color:</td>
        <td>{item.interior_color}</td>
      </tr>
      <tr className='first-tr-in-table-aboutcar1'>
        <td>Transmission:</td>
        <td>{item.transmission}</td>
      </tr>
      <tr className='first-tr-in-table-aboutcar'>
        <td>Odometer:</td>
        <td>{item.odometer}</td>
      </tr>
      <tr className='first-tr-in-table-aboutcar1'>
        <td>Exterior Condition:</td>
        <td>{item.engine_condition}</td>
      </tr>
    </table>
    })}

    <div className="listed-by-smone-aboutcar" id='cantact-seller-about-car'>
      <p>Listed By:</p>
      <p>Private Seller</p>
    </div>
    <h1>Contact Seller</h1>
    <div className="input-contact-seller-aboutcar " id='cantact-seller-about-car'>
      <input  type="text" placeholder='First name'/><br />
      <input type="text" placeholder='Last name'/><br />
      <input type="text" placeholder='Email'/><br />
      <input type="text" placeholder='Phone'/><br />
      <textarea name="" id="" placeholder='Massege to Seller'></textarea><br />
      <span>Characters /500</span>
      <div className="check-input-aboutcar">
        <input type="checkbox" />
        <p>Sign me up for the Newsletter</p>
      </div>
      <p className='info-aboutseller-div'>By contacting this seller you accept</p>
      <p className='info-aboutseller-div1'>ClassicCars.com Visitors Agreement.</p>
      <button>MASSEGE SELLER</button>
    </div>
    <div className="similar-vehicles-aboutcar">
      <p>Interested in something else? Search these similar vehicles...</p>
      <button>SIMILAR VEHICLES</button>
    </div>
        </div>

      </section>

      <section className='adverticement-aboutcar'>
        <img src={advericement} alt="" />
      </section>


<Footer/>
    </div>
  )
}
