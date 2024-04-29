import React, { useState } from 'react'
import '../css/search.css'
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Search() {
    const [page, setPage] = useState(1);

    function BigButton1() {
        document.querySelector(".button-search1").style=
        "background-color:#fff; margin-top:-20px;"    
        document.querySelector(".button-search2").style=
         "background-color:#f2f2f2; margin-top: 0px;"   
         document.querySelector(".button-search3").style=
         "background-color:#f2f2f2; margin-top: 0px;"    

    }
    function BigButton2() {
    document.querySelector(".button-search2").style=
    "background-color:#fff; margin-top:-20px;"    
    document.querySelector(".button-search1").style=
     "background-color:#f2f2f2; margin-top: 0px;"   
     document.querySelector(".button-search3").style=
     "background-color:#f2f2f2; margin-top: 0px;" 
      

       }

       function BigButton3() {
        document.querySelector(".button-search3").style=
        "background-color:#fff; margin-top:-20px;"    
        document.querySelector(".button-search1").style=
         "background-color:#f2f2f2; margin-top: 0px;"   
         document.querySelector(".button-search2").style=
         "background-color:#f2f2f2; margin-top: 0px;" 


       }
   

  return (
    <div>
        <Navbar/>
        <header className="header-search">
    <div className="text-search-header">
    <h1>Advanced Search Options</h1>
        <h3>Search with more options to find the classic of your dreams.</h3>
    </div>
        </header>


        <section className='section-search'>
                <div className="button-search">
                <button className='button-search1' onClick={()=>BigButton1()}>Find by Details</button>
                <button className='button-search2' onClick={()=>BigButton2()}>Find by Browser Links</button>
                <button className='button-search3' onClick={()=>BigButton3()}>Find by CC-Number</button>
                </div>
                {page==1 ? <div className='page-first-search'>
                <p>Find by Specific Details</p>
                <div className="big-search-div">
                    <div className="first-div-search">
                        <h3>Year(s):</h3>
                    <div className="search-input-div">
                <div className="first-input-search">
                    <p>From</p>
                    <input type="text" />
                </div>
                <div className="first-input-search">
                    <p>To</p>
                    <input type="text" />
                </div>
                    </div>
                    <h3>Vehicle:</h3>
                    <div className="select-search-div">
                    <p>Make</p>
                    <select name="" id="">
                  <option value=""></option>
                  <option value="">BMW</option>
                  <option value="">AUDI</option>
                  <option value="">MERS</option>
                  <option value="">FERRARI</option>
                </select>
                <p>Model</p>
                <select name="" id="">
                    <option value="">Model Selection</option>
                </select>
                    </div>
                    <h3>Price:</h3>
                    <div className="input-search-div">
                        <p>Lowest</p>
                        <input type="text" />
                        <p>Highest</p>
                        <input type="text" />
                    </div>
                    </div>
                    <div className="second-div-search">
                        <h3>Location:</h3>
                        <div className="select-and-input-search">
                            <p>Country</p>
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                            <div className="state-and-zip-search">
                                <div className="select-search-div">
                                <p>State</p>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                                </div>
                                <div className="input-search-div">
                                    <p>Zip</p>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <h3>Key Details:</h3>
                        <div className="description-select-search">
                            <p>Keyword (Description)</p>
                            <input type="text" />
                            <p>Vehicle Type</p>
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                        </div>
                        <h3>Include:</h3>
                        <div className="input-check-search-div">
                            <div className="input-check-search">
                                <input type="checkbox" />
                                <p> Private Sellers</p>
                            </div>
                            <div className="input-check-search">
                                <input type="checkbox" />
                                <p> Dealer Showcase</p>
                            </div>
                            <div className="input-check-search">
                                <input type="checkbox" />
                                <p> Auction Showcase</p>
                            </div>
                        </div>
                    </div>
                    <div className="third-div-search">
                    <h3>Sorting Options:</h3>
                    <div className="div-select-page-size-search">
                        <p>Sort Term</p>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                        <p>Sort Ascending</p>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                        <p>Page Size</p>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </div>
                    </div>
                </div>
                </div>:<></>}
               
        </section>
    </div>
  )
}
