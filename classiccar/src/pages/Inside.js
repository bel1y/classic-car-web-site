import React from 'react'
import '../css/inside.css'
import Navbar from './Nav'
import Footer from './Footer'
import inside from '../img/inside.png'

export default function Inside() {
  return (
    <>
    <Navbar/>
        <div className='big-div-inside'>
        <h1>Auction Central - AutoHunter  -  AutoHunter</h1>
        <h3>AutoHunter  -  Premier Online Auction for Classic and Modern Collectibles:  Ongoing</h3>
        <p>Modern, engaging, effective. From our beginnings at ClassicCars.com we’ve learned what our customers desire. Where other online auctions lack customer service, transactional confidence, and are time consuming, AutoHunter™ provides an online auction solution built on innovative technology supported by an award-winning customer service team. Our seasoned team of automotive experts guide, inform and educate consignors and bidders using our Safe-n-Secure™ platform producing an efficient transaction at the right hammer price.</p>
        <img src={inside} alt="" />
    </div>

    <Footer/>
    </>

  )
}
