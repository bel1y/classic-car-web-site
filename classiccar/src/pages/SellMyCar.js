import React from 'react'
import s from "../css/sellMyCar.module.css"
import { FaStar } from "react-icons/fa";
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
              </div>
                <div className={s.regular}></div>
                <div className={s.regular}></div>
                <div className={s.regular}></div>
              </div>
            </div>
        </div>
    </div>
  )
}
