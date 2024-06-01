import React, { useEffect, useState } from "react";
import "../css/search.css";
import Navbar from "./Nav";
import Footer from "./Footer";
import img from "../img/for-search.png";
import img1 from "../img/for-search1.png";
import img2 from "../img/for-search2.png";
import reklama from "../img/reklama.gif";
import axios from "axios";
import url from "./host";

export default function Search() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  var [category, setCategory] = useState([]);
  var [subcategory, setSubCategory] = useState([]);
  var [country, setCountry] = useState([]);
  useEffect(() => {
    var a = [];
    axios
      .get(`${url}/api/v1/cars`)
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          var push = true;
          for (let j = 0; j < a.length; j++) {
            if (a[j] == res.data[i].location) {
              push = false;
            }
          }
          if (push) {
            a.push(res.data[i].location);
          }
        }
        setCountry(a);

        axios.get(`${url}/api/v1/category`).then((res2) => {
          setCategory(res2.data);
          axios.get(`${url}/api/v1/subcategory`).then((res3) => {
            setSubCategory(res3.data);
          });
        });
        setData(res.data);
      })
      .catch((err) => {});
  }, []);

  function openresult() {
    var a = [
      {
        year: document.querySelector("#year-search").value,
        year1: document.querySelector("#year-max-search").value,
        make: document.querySelector("#select-search").value,
        model: document.querySelector("#model-search").value,
        price: document.querySelector("#price-search").value,
        price1: document.querySelector("#price-search1").value,
        location: document.querySelector("#location-search").value,
        description: document.querySelector("#description-search").value,
      },
    ];
    localStorage.setItem("search", JSON.stringify(a));
    window.location = `/listings-find/1?category=${
      document.querySelector("#select-search").value
    }&&subcategory=${document.querySelector("#model-search").value}&&count=${
      document.querySelector("#countpage").value
    }&&lacotion=${document.querySelector("#location-search").value}&&sortterm=${
      document.querySelector("#sortterm-search").value
    }&&description=${
      document.querySelector("#description-search").value
    }&&year_min=${document.querySelector("#year-search").value}&&year_max=${
      document.querySelector("#year-max-search").value
    }&&price_min=${document.querySelector("#price-search").value}&&price_max=${
      document.querySelector("#price-search1").value
    }&&looking=${document.querySelector("#looking-search").value}`;
  }
  function openresult1() {
    window.location = `/listings-find/1?category=&&subcategory=&&count=15&&lacotion=&&sortterm=1&&description=&&year_min=&&year_max=&&price_min=&&price_max=&&looking=1`;
  }

  function BigButton1() {
    document.querySelector(".button-search1").style =
      "background-color:#fff; margin-top:-20px;";
    document.querySelector(".button-search2").style =
      "background-color:#f2f2f2; margin-top: 0px;";
    document.querySelector(".button-search3").style =
      "background-color:#f2f2f2; margin-top: 0px;";
    setPage(1);
  }
  function BigButton2() {
    document.querySelector(".button-search2").style =
      "background-color:#fff; margin-top:-20px;";
    document.querySelector(".button-search1").style =
      "background-color:#f2f2f2; margin-top: 0px;";
    document.querySelector(".button-search3").style =
      "background-color:#f2f2f2; margin-top: 0px;";
    setPage(2);
  }

  function BigButton3() {
    document.querySelector(".button-search3").style =
      "background-color:#fff; margin-top:-20px;";
    document.querySelector(".button-search1").style =
      "background-color:#f2f2f2; margin-top: 0px;";
    document.querySelector(".button-search2").style =
      "background-color:#f2f2f2; margin-top: 0px;";
    setPage(3);
  }
  function BigButton5() {
    document.querySelector(".button-search5").style =
      "background-color:#fff; margin-top:-20px;";
    document.querySelector(".button-search6").style =
      "background-color:#f2f2f2; margin-top: 0px;";
    document.querySelector(".button-search7").style =
      "background-color:#f2f2f2; margin-top: 0px;";
    setPage(1);
  }
  function BigButton6() {
    document.querySelector(".button-search6").style =
      "background-color:#fff; margin-top:-20px;";
    document.querySelector(".button-search5").style =
      "background-color:#f2f2f2; margin-top: 0px;";
    document.querySelector(".button-search7").style =
      "background-color:#f2f2f2; margin-top: 0px;";
    setPage(2);
  }

  function BigButton7() {
    document.querySelector(".button-search7").style =
      "background-color:#fff; margin-top:-20px;";
    document.querySelector(".button-search5").style =
      "background-color:#f2f2f2; margin-top: 0px;";
    document.querySelector(".button-search6").style =
      "background-color:#f2f2f2; margin-top: 0px;";
    setPage(3);
  }

  function searchfromccnumber() {
    window.location = `/about-car/${
      document.querySelector("#cc-number-searching").value
    }`;
  }

  return (
    <div>
      <Navbar />
      <header className="header-search">
        <div className="text-search-header">
          <h1>Advanced Search Options</h1>
          <h3>Search with more options to find the classic of your dreams.</h3>
        </div>
      </header>

      <div className="reklama-div-search">
        <img src={reklama} alt="" />
      </div>

      <section className="section-search">
        <div className="button-search">
          <button className="button-search1" onClick={() => BigButton1()}>
            Find by Details
          </button>
          <button className="button-search2" onClick={() => BigButton2()}>
            Find by Browser Links
          </button>
          <button className="button-search3" onClick={() => BigButton3()}>
            Find by CC-Number
          </button>
        </div>
        <div className="button-search4">
          <button className="button-search5" onClick={() => BigButton5()}>
            Details
          </button>
          <button className="button-search6" onClick={() => BigButton6()}>
            Pre-defineds
          </button>
          <button className="button-search7" onClick={() => BigButton7()}>
            Listing Num.
          </button>
        </div>
        {page == 1 ? (
          <div className="page-first-search">
            <h3>Find by Specific Details</h3>
            <div className="big-search-div">
              <div className="first-div-search">
                <h3>Year(s):</h3>
                <div className="search-input-div">
                  <div className="first-input-search">
                    <p>From</p>
                    <input type="number" id="year-search" />
                  </div>
                  <div className="first-input-search">
                    <p>To</p>
                    <input type="number" id="year-max-search" />
                  </div>
                </div>
                <h3>Vehicle:</h3>
                <div className="select-search-div">
                  <p>Make</p>
                  <select name="" id="select-search">
                    <option value=""></option>
                    {category.map((item) => {
                      return <option value={item.id}>{item.title}</option>;
                    })}
                  </select>
                  <p>Model</p>
                  <select name="" id="model-search">
                    <option value=""></option>
                    {subcategory.map((item) => {
                      return <option value={item.id}>{item.title}</option>;
                    })}
                  </select>
                </div>
                <h3>Price:</h3>
                <div className="input-search-div">
                  <p>Lowest</p>
                  <input type="number" id="price-search" />
                  <p>Highest</p>
                  <input type="number" id="price-search1" />
                </div>
              </div>
              <div className="second-div-search">
                <h3>Location:</h3>
                <div className="select-and-input-search">
                  <p>Country</p>
                  <select name="" id="location-search">
                    <option value=""></option>
                    {country.map((item, key) => {
                      return <option value={`${item}`}>{item}</option>;
                    })}
                  </select>
                  <div className="state-and-zip-search">
                    <div className="select-search-div1">
                      <p>State</p>
                      <select name="" id="">
                        <option value="">State Selection</option>
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
                  <input type="text" id="description-search" />
                  <p>Vehicle Type</p>
                  <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Car</option>
                    <option value="">Motobike</option>
                    <option value="">Other</option>
                    <option value="">Rv</option>
                    <option value="">Truck</option>
                    <option value="">Van</option>
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
                  <select name="" id="sortterm-search">
                    <option value="1">Default</option>
                    <option value="2">Date List</option>
                    <option value="3">Make/Model</option>
                    <option value="4">Price</option>
                  </select>
                  <p>Sort Ascending</p>
                  <select name="" id="looking-search">
                    <option value="1">Lowest</option>
                    <option value="2">Highest</option>
                  </select>
                  <p>Page Size</p>
                  <select name="" id="countpage">
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="60">60</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="page-first-search-button">
              <button onClick={() => openresult()}>SEARCH</button>
            </div>
          </div>
        ) : (
          <>
            {page == 2 ? (
              <div className="page-first-search">
                <h3>Find by Our Browser Links</h3>
                <p className="page-first-search-p">
                  Our broswer links provide a quick and easy way to find your
                  classic car based on popular searches, common categories and
                  auto makers. This is a great way to find results if you're not
                  too concerned about sepcific details, and just want to see a
                  robust library of classic vehicles.
                </p>
                <div className="big-div-search-by-mark">
                  <div className="first-little-div-search">
                    <div className="div-big-search-by-mark">
                      <div className="div-big-search-by-mark-h1">
                        <h1>Popular Searches:</h1>
                      </div>
                      <div className="div-big-search-by-mark-p">
                      {category.map((item, key) => {
if(key < 3){
  return <>
  <h5
    onClick={() =>
      (window.location = `/listings-find/1?category=${item.id}`)
    }
  >
    {item.title}
  </h5>
  </>
}
if(key > 3 && key < 6){
  return <>
  <h5
    onClick={() =>
      (window.location = `/listings-find/1?category=${item.id}`)
    }
  >
    {item.title}
  </h5>
  </>
}
if(key > 9 && key < 15){
  return <>
  <h5
    onClick={() =>
      (window.location = `/listings-find/1?category=${item.id}`)
    }
  >
    {item.title}
  </h5>
  </>
}
                          
                        
            })}
                    {subcategory.map((item, key) => {
if(key < 3){
  return <>
  <h5
    onClick={() =>
      (window.location = `/listings-find/1?subcategory=${item.id}`)
    }
  >
    {item.title}
  </h5>
  </>
}
if(key > 3 && key < 6){
  return <>
  <h5
    onClick={() =>
      (window.location = `/listings-find/1?subcategory=${item.id}`)
    }
  >
    {item.title}
  </h5>
  </>
}
if(key > 9 && key < 15){
  return <>
  <h5
    onClick={() =>
      (window.location = `/listings-find/1?subcategory=${item.id}`)
    }
  >
    {item.title}
  </h5>
  </>
}
                          
                        
            })}
                      </div>
                    </div>
                    <div className="div-big-search-by-mark">
                      <div className="div-big-search-by-mark-h1">
                        <h1>Browse by Category:</h1>
                      </div>
                      <div className="div-big-search-by-mark-p">
                    {category.map(item=>{
                      return <h5     
                      onClick={() =>
                        (window.location = `/listings-find/1?category=${item.id}`)
                      }>{item.title}</h5>
                    })}
                      </div>
                    </div>
                  </div>
                  <div className="first-little-div-search">
                    <div className="div-big-search-by-mark">
                      <div className="div-big-search-by-mark-h1">
                        <h1>Browse by Make:</h1>
                      </div>
                      <div className="div-big-search-by-mark-p">
                    {subcategory.map((item,key)=>{
                      if (key < 14) {
                        return <h5    onClick={() =>
                          (window.location = `/listings-find/1?subcategory=${item.id}`)
                        }>{item.title}</h5>
                      }
                    })}
                      </div>
                    </div>
                  </div>
                  <div className="first-little-div-search1">
                    <div className="div-big-search-by-mark">
                      <div className="div-big-search-by-mark-h1">
                        <h1></h1>
                      </div>
                      <div className="div-big-search-by-mark-p">
                      {subcategory.map((item,key)=>{
                      if (key > 14 && key <28) {
                        return <h5    onClick={() =>
                          (window.location = `/listings-find/1?subcategory=${item.id}`)
                        }>{item.title}</h5>
                      }
                    })}
                      </div>
                    </div>
                  </div>
                  <div className="first-little-div-search1">
                    <div className="div-big-search-by-mark">
                      <div className="div-big-search-by-mark-h1">
                        <h1></h1>
                      </div>
                      <div className="div-big-search-by-mark-p">
                      {subcategory.map((item,key)=>{
                      if (key > 28 && key < 42) {
                        return <h5    onClick={() =>
                          (window.location = `/listings-find/1?subcategory=${item.id}`)
                        }>{item.title}</h5>
                      }
                    })}
                      </div>
                    </div>
                  </div>
                  <div className="first-little-div-search1">
                    <div className="div-big-search-by-mark">
                      <div className="div-big-search-by-mark-h1">
                        <h1></h1>
                      </div>
                      <div className="div-big-search-by-mark-p">
                      {subcategory.map((item,key)=>{
                      if (key > 42 && key < 56) {
                        return <h5     onClick={() =>
                          (window.location = `/listings-find/1?subcategory=${item.id}`)
                        }>{item.title}</h5>
                      }
                    })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {page == 3 ? (
                  <div className="page-first-search">
                    <h3>Find by ClassicCars.com Vehicle Listing Number</h3>
                    <p className="page-first-search-p1">
                      <b>
                        Instantly transport yourself to the Vehicle Details page
                        of any listing by entering the ClassicCars.com Vehicle
                        Listing Number.
                      </b>
                    </p>
                    <div className="input-how-is-it-work-search">
                      <p>
                        <b>Enter CC-Number Here:</b>
                      </p>
                      <div className="input-search-div1">
                        <p>CC -</p>
                        <input
                          type="number"
                          name=""
                          id="cc-number-searching"
                          placeholder="Enter CC Number"
                        />
                        <button onClick={() => searchfromccnumber()}>
                          SEARCH
                        </button>
                      </div>
                    </div>
                    <div className="how-is-it-working-text-search">
                      <h1>How it Works:</h1>
                      <p>
                        <b>
                          Each listing has its own unique ClassicCars.com
                          Vehicle Listing Number
                        </b>{" "}
                        and is found below the vehicle title in any search
                        results listing, as well as on any vehicle details page
                        at the very top of the vehicle details table. Use any
                        word or note editor program to keep track of the
                        cc-numbers (listings) you want to return to. You can
                        also go to the listing's vehicle details page and save
                        any listing as a favorite, and then access it through
                        your account menu.
                      </p>
                      <div className="big-div-img-df-search">
                        <div className="little-div-img-df-search">
                          <img src={img} alt="" />
                          <p>Search Result Item.</p>
                        </div>
                        <div className="little-div-img-df-search">
                          <img src={img1} alt="" />
                          <p>Vehicle Details Page.</p>
                        </div>
                      </div>
                      <p>
                        <b>
                          If you listed with us, you can find your CC Vehicle
                          Listing Number
                        </b>{" "}
                        by logging into your account and going to My
                        Account/MyListings from the top menu. In each of your
                        listings, you'll find the number in the "Vehicle"
                        column.
                      </p>
                      <img src={img2} alt="" className="img-cc-how-it-work" />
                      <p>
                        If you have any of the CC-Numbers organized, or simply
                        have some memorized, enter one in{" "}
                        <b style={{ color: "#821213" }}>the field above </b>to
                        be teleported to the description and details of the
                        vehicle.
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </>
            )}
          </>
        )}
      </section>

      <Footer />
    </div>
  );
}
