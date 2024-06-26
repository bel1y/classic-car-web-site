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
import url from './host'


export default function AboutCar() {

  const [data, setData] = useState({});
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const { id } = useParams();
  

  useEffect(()=>{

    axios.get(`${url}/api/v1/cars/${id}`)
    .then(res=>{
      setData(res.data)
    })
    .catch(err=>{
    
    })
  },[])

  function sendtofriend() {
    window.location = "/send-message-to-friend"
  }

  function addtofavorite() {
if (user == null) {
  window.location = '/login'
}else{
  var formdata = new FormData()

  formdata.append("user_id", user.id)
  formdata.append("car_id", data.id)

  axios
  .post(`${url}/api/v1/favorite`, formdata)
  .then(res => {
    alert("good")
  })
  .catch(err => {
    alert(err)
  })
}
  }

  function sendmesage() {
    var send="Новый клиент!" +`%0A`
    send+="First name:   "+document.querySelector('#name-client').value+`%0A`
    send+="Last name:   "+document.querySelector('#Last_name').value+`%0A`
    send+="Email:   "+document.querySelector('#Email').value+`%0A`
    send+="Phone:   "+document.querySelector('#phone-client').value+`%0A`
    send+="Massege:   "+document.querySelector('#message-for-seller').value+`%0A`
    send+="Brand:   "+data.make+`%0A`
    send+="Model:   "+data.model+`%0A`  
    send+="CC-code:   "+data.id+`%0A`
    send+="Image:"+data.image+`%0A`
    axios.get(`https://api.telegram.org/bot7326404876:AAG03IuYZsYcwMNviDe7HWwzrQadTGdBv_M/sendMessage?chat_id=-1002225115585&text=${send}`)
    .then(res=>{
      alert( "Wait for an answer.  Our operator will contact you"
      )
    })
  }

  return (
    <div className='big-div-about-car'>
        <Navbar/>
        {id}
        {[data].map(item=>{
          return <h1 className='h1-aboutcar-div'>For Sale: {item.title} in {item.location}</h1>
        })} 
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
      > 
       
     
      {data.all_img && data.all_img.map((item,key)=>{
return <SwiperSlide>
          <div className="swiper-zoom-container">
          <img src={item.image} alt="" className='about-car-img-div'/>
          </div>
        </SwiperSlide>
      })}
      

      </Swiper>
          </div>

    <div className="favorite-cintact-div-aboutcar">
      <button className="add-favorite-div" onClick={()=> addtofavorite()}>
        <p><span><FaHeartCirclePlus /></span> favorite</p>
      </button>
      <button className="add-favorite-div"  onClick={()=> sendtofriend()}>
        <p><span><MdEmail  /></span> Send to a Friend</p>
      </button>
      <button className="add-favorite-div">
        <a href="#cantact-seller-about-car"><p><span><IoPerson  /></span> Contact Seller</p></a>
      </button>
    </div>
    <div className="description-aboutcar-div">
      <h1>Vehicle Description</h1>
   
        <p>{data.description}</p>
   
     
      
    </div>
    <h1>Vehicle Details</h1>
    {[data].map(item=>{
      return     <table className='table-in-aboutcar'>
      <tr className='first-tr-in-table-aboutcar'>
        <th>{item.title}</th>
        <th></th>
      </tr>
      <tr className='first-tr-in-table-aboutcar1'>
        <td>Listing ID:</td>
        <td>{item.listing_id}</td>
      </tr>
      <tr className='first-tr-in-table-aboutcar'>
        <td>Price:</td>
        <td className='special-for-color-aboutcar'>{item.price}</td>
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
      <input id='name-client'  type="text" placeholder='First name'/><br />
      <input type="text" id='Last_name' placeholder='Last name'/><br />
      <input type="text" id='Email' placeholder='Email'/><br />
      <input id='phone-client' type="text" placeholder='Phone'/><br />
      <textarea name="" id="message-for-seller" placeholder='Massege to Seller'></textarea><br />
      <span>Characters /500</span>
      <div className="check-input-aboutcar">
        <input type="checkbox" />
        <p>Sign me up for the Newsletter</p>
      </div>
      <p className='info-aboutseller-div'>By contacting this seller you accept</p>
      <p className='info-aboutseller-div1'>ClassicCars.com Visitors Agreement.</p>
      <button onClick={()=>sendmesage()}>MASSEGE SELLER</button>
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
