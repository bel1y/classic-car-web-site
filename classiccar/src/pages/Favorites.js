import React from 'react'
import Navbar from './Nav'
import Footer from './Footer'
import '../css/favorite.css'
import car from '../img/car.jpg'
import { MdDelete } from "react-icons/md";

export default function Favorites() {
  return (
    <div className='big-div-favorite-page'>
        <Navbar/>
        <h1>Your Favorites</h1>
        <h3>Here's the collection of your favorite classic cars.</h3>
        <div className="div-big-favorite-df">
            <div className="first-img-favorites-div">
                <img src={car} alt="" />
            </div>
            <div className="first-text-favorites-div">
                <div className="inside-little-favorites-div">
                    <p>Featured Private Seller</p>
                    <span>CC-1814750</span>
                </div>
                <h4>1969 Chevrolet Corvette</h4>
                <p>new engine new everything all service records available car owned by two collectors almost never driven</p>
            <div className="df-delete-and-price-favorites">
                <p><MdDelete className='MdDelete-favorite'/> DEL</p>
                <h5>$75,000</h5>
            </div>
            </div>
        </div>
        <div className="div-big-favorite-df">
            <div className="first-img-favorites-div">
                <img src={car} alt="" />
            </div>
            <div className="first-text-favorites-div">
                <div className="inside-little-favorites-div">
                    <p>Featured Private Seller</p>
                    <span>CC-1814750</span>
                </div>
                <h4>1969 Chevrolet Corvette</h4>
                <p>new engine new everything all service records available car owned by two collectors almost never driven</p>
            <div className="df-delete-and-price-favorites">
                <p><MdDelete className='MdDelete-favorite'/> DEL</p>
                <h5>$75,000</h5>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
