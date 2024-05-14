import React from 'react'
import '../css/auction.css'
import Navbar from './Nav'
import Footer from './Footer'
import autohuter from '../img/autohunter.png'
import autohenter2 from '../img/second-autohunter.png'
import aumann from '../img/aumann.png'
import okclassic from '../img/ok-classic.png'
import classiccar from '../img/classic-car.png'
import macauction from '../img/mac-auction.png'
import henderson from '../img/henderson-auction.png'
import thorttle from '../img/throttle-auction.jpg'
import { FaCar, FaInfoCircle  } from "react-icons/fa";

export default function Auction() {

    function open() {
        window.location = '/auction-inside'
    }
    function open1() {
        window.location = '/auction-inside-1'
    }
    function open2() {
        window.location = '/auction-inside-2'
    }
    function open3() {
        window.location = '/auction-inside-3'
    }
    function open4() {
        window.location = '/auction-inside-4'
    }
    function open5() {
        window.location = '/auction-inside-5'
    }
    function open6() {
        window.location = '/auction-inside-6'
    }

  return (
    <div>
        <Navbar/>
        <header className="header-auction">
    <h1>Auction Central</h1>
    <h3>Sponsored By</h3>
    <img src={autohuter} alt="" />
        </header>

    <section className="section-auction">
        <div onClick={()=>open()} className="big-div-auction">
            <div className="first-onside-auction">
                <img src={autohenter2} alt="" />
            </div>
            <div className="second-onside-auction">
                <h1>AutoHunter</h1>
                <p>Premier Online Auction for Classic and Modern Collectibles</p>
                <span>Ongoing</span>
                <div className="df-little-div-auction">
                    <p><FaCar /> See Auction Inventory</p>
                    <p><FaInfoCircle /> Get More Auction Info</p>
                </div>
            </div>
        </div>
        <div onClick={()=>open1()} className="big-div-auction">
            <div className="first-onside-auction">
                <img src={aumann} alt="" />
            </div>
            <div className="second-onside-auction">
                <h1>Annual Pre ‘30 Auction Week</h1>
                <p>Online Only</p>
                <span>April 28 - May 5, 2024</span>
                <div className="df-little-div-auction">
                    <p><FaCar /> See Auction Inventory</p>
                    <p><FaInfoCircle /> Get More Auction Info</p>
                </div>
            </div>
        </div>
        <div onClick={()=>open2()} className="big-div-auction">
            <div className="first-onside-auction">
                <img src={okclassic} alt="" className='okclassic-auction'/>
            </div>
            <div className="second-onside-auction">
                <h1>OK Classics Car and Memorabilia Auction Event</h1>
                <p>Shawnee, OK</p>
                <span>May 3 - 4, 2024</span>
                <div className="df-little-div-auction">
                    <p><FaCar /> See Auction Inventory</p>
                    <p><FaInfoCircle /> Get More Auction Info</p>
                </div>
            </div>
        </div>
        <div onClick={()=>open3()} className="big-div-auction">
            <div className="first-onside-auction">
                <img src={classiccar} alt="" className='classiccar-auction'/>
            </div>
            <div className="second-onside-auction">
                <h1>9th Annual Salt Lake City Online Classic Car Auction</h1>
                <p>Online</p>
                <span>May 16 - 18, 2024</span>
                <div className="df-little-div-auction">
                    <p><FaCar /> See Auction Inventory</p>
                    <p><FaInfoCircle /> Get More Auction Info</p>
                </div>
            </div>
        </div>
        <div onClick={()=>open4()} className="big-div-auction">
            <div className="first-onside-auction">
                <img src={macauction} alt="" className='macauction-auction'/>
            </div>
            <div className="second-onside-auction">
                <h1>Premium Online Collector Car Auction</h1>
                <p>Online</p>
                <span>May 16 - 18, 2024</span>
                <div className="df-little-div-auction">
                    <p><FaCar /> See Auction Inventory</p>
                    <p><FaInfoCircle /> Get More Auction Info</p>
                </div>
            </div>
        </div>
        <div onClick={()=>open5()} className="big-div-auction">
            <div className="first-onside-auction">
                <img src={henderson} alt="" className='macauction-auction'/>
            </div>
            <div className="second-onside-auction">
                <h1>2024 Collector Motor Series Auction</h1>
                <p>Birmingham, Alabama</p>
                <span>May 18, 2024</span>
                <div className="df-little-div-auction">
                    <p><FaCar /> See Auction Inventory</p>
                    <p><FaInfoCircle /> Get More Auction Info</p>
                </div>
            </div>
        </div>
        <div onClick={()=>open6()} className="big-div-auction">
            <div className="first-onside-auction">
                <img src={thorttle} alt="" className='macauction-auction'/>
            </div>
            <div className="second-onside-auction">
                <h1>Throttle Car Club Second Annual Collector Vehicle & Memorabilia Auction</h1>
                <p>Scarborough, Maine</p>
                <span>May 31 - June 1, 2024</span>
                <div className="df-little-div-auction">
                    <p><FaCar /> See Auction Inventory</p>
                    <p><FaInfoCircle /> Get More Auction Info</p>
                </div>
            </div>
        </div>
    </section>

<Footer/>
    </div>
  )
}
