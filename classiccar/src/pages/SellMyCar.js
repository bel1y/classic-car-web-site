import React from 'react'
import s from "../css/sellMyCar.module.css"
import { MdOutlineClose } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BiSolidCalendarAlt } from "react-icons/bi";
export default function SellMyCar() {
  return (
    <div>
        <header>

        </header>
        <div className={s.table1}>
            <div className={s.white}>
              <div className={s.premium}>
              <div className={s.choose}>
                <p>Choose the right package for you and sell your classic car safely, quickly and for the best price</p>
                <h3>Pricing</h3>
                <div className={s.sold1}>
                    <div className={s.until}>
                    <BiSolidCalendarAlt /> <h3>Listed Until Sold</h3>
                    </div>
                    <span>Duration of time your vehicle is listed on ClassicCars.com.</span>
                </div>
              </div>
                <div className={s.regular}>
                    <h1>Regular</h1>
                    <span>$149.99</span> 
                    <button>LIST NOW</button>
                    <h3>Guaranteed</h3>
                    <MdOutlineClose /><br />
                    <MdOutlineClose /><br />
                    <MdOutlineClose /><br />
                </div>
                <div className={s.regular}>
                    <h1>Regular</h1>
                    <span>$149.99</span> 
                    <button>LIST NOW</button>
                    <h3>Guaranteed</h3>
                    <MdOutlineClose /><br />
                    <MdOutlineClose /><br />
                    <MdOutlineClose /><br />
                </div>
                <div className={s.regular}>
                    <h1>Regular</h1>
                    <span>$149.99</span> 
                    <button>LIST NOW</button>
                    <h3>Guaranteed</h3>
                    <MdOutlineClose /><br />
                    <MdOutlineClose /><br />
                    <MdOutlineClose /><br />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
