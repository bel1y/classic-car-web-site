import React, { useRef, useState } from 'react';
import s from "../css/sellMyCar.module.css"
import { MdOutlineClose } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BiSolidCalendarAlt } from "react-icons/bi";
import { TbNotebook } from "react-icons/tb";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { CgShare } from "react-icons/cg";
import { FaShareAlt } from "react-icons/fa";  
import { FaCheck } from "react-icons/fa6";
import { HiCheck } from "react-icons/hi2";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
export default function SellMyCar() {
  return (
    <div>
      <div className={s.imgd}>

</div>
<div className={s.imgg}>
<h1>Sell Your Classic Car <br /> <span>List your classic car in front of millions of classic car enthusiasts.</span></h1>
</div>
        <header className={s.header1}>

        </header>
        <div style={{width:'100%',background:'white'}}>
        <div className={s.table1}>
            <div className={s.white}>
              <div className={s.premium}>
              <div className={s.choose}>
                <p>Choose the right package for you and sell your classic car safely, quickly and for the best price</p>
               <div className={s.pricing}>
                <div className={s.pric1}>
                <h3>Pricing</h3>
                </div>
               </div>
                <div className={s.sold1}>
                    <div className={s.until}>
                    <BiSolidCalendarAlt /> <h3>Listed Until Sold</h3>
                    </div>
                    <span>Duration of time your vehicle is listed on ClassicCars.com.</span>
                </div>

               
               <div className={s.pricing}>
                <div className={s.sold2}>
                    <div className={s.until2}>
                    <FaStar /> <h3>Featured Listing</h3>
                    </div>
                    <span>Duration of time your vehicle is listed on ClassicCars.com.</span>
                </div>
               </div>
             

               <div className={s.pricing}>
                <div className={s.sold3}>
                    <div className={s.until3}>
                    <CgShare /><h3> Social Exposure</h3>
                    </div>
                    <span>Listing will be featured on social media in front of 760,000 followers.</span>
                </div>
               </div>

               <div className={s.pricing}>
                <div className={s.sold4}>
                    <div className={s.until3}>
                    <img src="https://classiccars.com/img/logos/AutoHunter-Live-Online-Auctions-Item.gif" alt="" /> <h3>AutoHunter Online Auctions</h3>
                    </div>
                    <span>Eligible for AutoHunter consideration. No seller commissions. No risk. Fast, safe, personalized service.</span>
                </div>
               </div>




               <div className={s.pricing1}>
                <div className={s.sold5}>
                    <div className={s.until3}>
                    <TbNotebook style={{fontSize:'25px'}} />
 <h3> Newsletter Exposure</h3>
                    </div>
                    <span>Listing will be featured in the "Downshift" in front of 180,000 newsletter subscribers</span>
                </div>
               </div>


              </div>
                <div className={s.regular2}>
                    <h1 style={{color:'#821213'}}>Regular</h1>
                    <div className={s.pric0}>
                      <span>$149.99</span></div> <br />
                    <button>LIST NOW</button>
                    <h3 className={s.guar}>Guaranteed</h3>
                    <div className={s.pricx}>
                      <MdOutlineClose /><br />
                    </div>
                   
                     <div className={s.pric_1}>
                     <MdOutlineClose /><br />
                     </div>
               
                    
                      <div className={s.pricx_1}>
                      <MdOutlineClose /><br />
                      </div>
                      <div className={s.pric_1}>
                     <MdOutlineClose /><br />
                     </div>
                </div>
                <div className={s.regular1}>
                    <h1 style={{color:'#821213'}}>Plus</h1>
                    <div className={s.pric}>
                      <span>$189.99</span></div> 
                    <button>LIST NOW</button>
                    <h3 className={s.guar}>Guaranteed</h3>
                    <div className={s.pric1}>
                    <h3>4 Weeks</h3>
                    </div>
                   <div className={s.pric_2}>
                   <span>2 Social Media Posts</span><br />
                   </div>
                  <div className={s.pricx_1}>
                  <MdOutlineClose /><br />
                  </div>
                  <div className={s.pric_1}>
                     <MdOutlineClose /><br />
                     </div>
                </div>
                <div className={s.regular}>
                    <h1 style={{color:'#821213'}}>Premium</h1>
                    <div className={s.pric2}>
                      <span>$349.99</span></div> 
                    <button>LIST NOW</button>
                    <h3 className={s.guar}>Guaranteed</h3>
                   <div className={s.pricx}>
                   <MdOutlineClose /><br />
                   </div>
                   <div className={s.pric_2}>
                  <span>4 Social Media Posts</span>
                   </div>
                  
               <div style={{color:'red',fontWeight:900}} className={s.pricx_1}>  <HiCheck /></div>

               <div style={{color:'red',fontWeight:900}} className={s.pric_1}>  <HiCheck /></div>
                </div>
              </div>
            </div>
<div className={s.weeks}>
  <div className={s.week}>
    <div  className={s.greyh}>
      <div className={s.gry}>
      <h1 >Regular</h1>
      <BiSolidDownArrow onClick={()=>{
      document.querySelectorAll("#listn")[0].style='display:block'
      document.querySelectorAll("#down1")[0].style='display:none'
      document.querySelectorAll("#down2")[0].style='display:block'
    }} id='down1'/>
    <BiSolidUpArrow onClick={()=>{
      document.querySelectorAll("#listn")[0].style='display:none'
      document.querySelectorAll("#down1")[0].style='display:block'
      document.querySelectorAll("#down2")[0].style='display:none'
    }} id='down2' className={s.solid}/>
      <h1 style={{color:'#821213'}}>$149.99</h1>
      </div>
    
    </div>
    <div id='listn' className={s.list}>
        <div className={s.gur}>
          <h3>  Listed Until Sold</h3>
          <h3>Guaranteed</h3>
        </div>
        <div className={s.butn}>
          <button>List Now</button>
        </div>
      </div>
  </div>

  <div className={s.week}>
    <div  className={s.greyh}>
      <div className={s.gry}>
      <h1 className={s.pre}>Plus</h1>
      <BiSolidDownArrow onClick={()=>{
      document.querySelectorAll("#listn")[1].style='display:block'
      document.querySelectorAll("#down1")[1].style='display:none'
      document.querySelectorAll("#down2")[1].style='display:block'
    }} id='down1'/>
    <BiSolidUpArrow onClick={()=>{
      document.querySelectorAll("#listn")[1].style='display:none'
      document.querySelectorAll("#down1")[1].style='display:block'
      document.querySelectorAll("#down2")[1].style='display:none'
    }} id='down2' className={s.solid}/>
      <h1 style={{color:'#821213'}}>$189.99</h1>
      </div>
    
    </div>
    <div id='listn' className={s.list}>
        <div className={s.gur}>
          <h3>  Listed Until Sold</h3>
          <h3>Guaranteed</h3>
        </div>
        <div className={s.gur1}>
        <div className={s.gur}>
        <h3> <FaStar />  Featured Listing</h3>
          <h3>4 Weeks</h3>
        </div>
        </div>
        <div className={s.butn}>
          <button>List Now</button>
        </div>
      </div>
  </div>

  <div className={s.week}>
    <div  className={s.greyh}>
      <div className={s.gry}>
      <h1>Premium</h1>
      <BiSolidDownArrow onClick={()=>{
      document.querySelectorAll("#listn")[2].style='display:block'
      document.querySelectorAll("#down1")[2].style='display:none'
      document.querySelectorAll("#down2")[2].style='display:block'
    }} id='down1'/>
    <BiSolidUpArrow onClick={()=>{
      document.querySelectorAll("#listn")[2].style='display:none'
      document.querySelectorAll("#down1")[2].style='display:block'
      document.querySelectorAll("#down2")[2].style='display:none'
    }} id='down2' className={s.solid}/>
      <h1 style={{color:'#821213'}}>$349.99</h1>
      </div>
    
    </div>
    <div id='listn' className={s.list}>
        <div className={s.gur}>
          <h3>  Listed Until Sold</h3>
          <h3>Guaranteed</h3>
        </div>
        <div className={s.gur1}>
        <div className={s.gur}>
        <h3> <FaStar />  Featured Listing</h3>
          <h3>4 Weeks</h3>
        </div>
        </div>
        <div className={s.gur}>
          <h3> <FaShareAlt />  Social Exposure</h3>
          <h3>4 Social Media Posts</h3>
        </div>
        <div className={s.gur1}>
        <div className={s.gur}>
        <h3>AutoHunter Online Auction Consideration</h3>
          <FaCheck style={{color:'red'}} />
        </div>
        </div>
        <div className={s.gur}>
          <h3>Newsletter Exposure</h3>
          <FaCheck style={{color:'red'}} />
        </div>
        <div className={s.butn}>
          <button>List Now</button>
        </div>
      </div>
  </div>
</div>

        </div></div>

        <div className={s.swip1}>
        <Swiper navigation={true} modules={[Navigation]} 
          breakpoints={{
            // Breackpointlar bo'yicha stil o'zgartirish
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}
