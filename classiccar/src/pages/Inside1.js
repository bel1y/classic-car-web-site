import React from 'react'
import '../css/inside.css'
import Navbar from './Nav'
import Footer from './Footer'
import inside from '../img/inside1.png'

export default function Inside() {
  return (
    <>
    <Navbar/>
        <div className='big-div-inside'>
        <h1>Auction Central - Aumann Auctions  -  Annual Pre ‘30 Auction Week</h1>
        <h3>Annual Pre ‘30 Auction Week  -  Online Only:  April 28 - May 5, 2024</h3>
        <p>Online Only Auction! Aumann Auctions annual Pre ‘30 auction week is coming up! For over a span of 8 days, starting April 28th, there will be 10+ auctions featuring an array of Pre 1930's antiques, tractors, parts, engines, signs, vehicles, motorcycles, literature, memorabilia, oddities, collectibles and more. On top of all that, this auction will be like never before as 10 of the actual movie cars from the Oscar nominated movie 'Killers of the Flower Moon' will be auctioned off. On top of these various movie cars, we have a vast array of kinds of early 20th century vehicles and motorcycles. These online catalogs for the multitude of auctions are live and available to bid! Don't miss your chance to add to your collection or own a piece of cinematic history! Visit Aumann's website for more in depth information about the upcoming Pre '30 week of auctions!</p>
        <img src={inside} alt="" />
    </div>

    <Footer/>
    </>

  )
}
