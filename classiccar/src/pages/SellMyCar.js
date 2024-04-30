import React from 'react'
import s from "../css/sellMyCar.module.css"
import { MdOutlineClose } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BiSolidCalendarAlt } from "react-icons/bi";
import { TbNotebook } from "react-icons/tb";
import { CgShare } from "react-icons/cg";
import { HiCheck } from "react-icons/hi2";
export default function SellMyCar() {
  return (
    <div>
        <header className={s.header1}>
<div className={s.imgd}>
  
</div>
        </header>
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
                      <span>$149.99</span></div> 
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
        </div>
    </div>
  )
}
