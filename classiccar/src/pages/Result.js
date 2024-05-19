import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../css/result.css';
import '../css/home.css';
import Nav from './Nav'
import Accordion from "react-bootstrap/Accordion";
import { MdDelete } from "react-icons/md";
import car from '../img/car.jpg';
import axios from 'axios';
import { FaBell } from "react-icons/fa";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import nowlife from '../img/now-life.png';
import Footer from './Footer';
import url from './host';

export default function Result() {
    const [data, setData] = useState([]);
    var [category,setCategory]=useState([])
    var [subcategory,setSubCategory]=useState([])
    const [filter, setFilter] = useState(JSON.parse(localStorage.getItem("search")));
    
      useEffect(()=>{
    

    axios.get(`${url}/api/v1/cars`)
    .then(res=>{
    axios.get(`${url}/api/v1/category`).then(res2=>{
      setCategory(res2.data)
      console.log(res2.data);
      axios.get(`${url}/api/v1/subcategory`).then(res3=>{
    setSubCategory(res3.data)
    console.log(res3.data);
      })
    })
      setData(res.data)
    })
    .catch(err=>{
    
    })



      },[])






function open(id) {
  window.location = `/about-car/${id}`
}

function refinesearch() {
  window.location = "/search"
}

  return (
    <div className='big-div-result'>
        <Nav/>
        <h1>Classic Cars for Sale</h1>
        <h3>Classifieds for Classic Cars. New listings are added daily.</h3>
        <h5><b>{data.length}</b> vehicles matched. Page 1 of <b>{Math.ceil(data.length / 15)}</b>. 15 results per page.</h5>

<div className="df-result-div-big">
<div className="accordion-home">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Popular Searches</Accordion.Header>
              <Accordion.Body>
                <p>Ford Mustang</p>
                <p>Chevrolet Corvette</p>
                <p>Chevrolet Camaro</p>
                <p>Chevrolet Impala</p>
                <p>Chevrolet C10</p>
                <p>Ford Thunderbird</p>
                <p>Chevrolet Chevelle</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>BROWSE BY CATEGORY</Accordion.Header>
              <Accordion.Body>
                <p>$250,000 and Up</p>
                <p>Under $5,000</p>
                <p>Trucks</p>
                <p>Newest Listings</p>
                <p>Muscle Cars</p>
                <p>Motorcycles</p>
                <p>Luxury Performance</p>
                <p>Future Classics</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>BROWSE BY MAKE</Accordion.Header>
              <Accordion.Body>
                <p>All Makes A to E</p>
                <p>All Makes F to M</p>
                <p>All Makes N to Z</p>
                <p>Alfa Romeo (133)</p>
                <p>AMC (120)</p>
                <p>Aston Martin (97)</p>
                <p>Audi (105)</p>
                <p>BMW (507)</p>
              </Accordion.Body>
            </Accordion.Item>
            
          </Accordion>
        </div>
        <div className="zillions-big-div-result-block">
            <div className="search-tools-dig-div">
                <div className="first-div-search-tools-result">
                    <h5>Search Tools</h5>
                    <div className="refing-searching-result">
                    <p>SET AN ALERT? <FaBell /></p>
                    <p onClick={()=>refinesearch()}>REFINE SEARCH?</p>
                    </div>
                </div>
                <div className="second-div-search-tools-result">
                    <div className="select-for-search-div-result">
                        <p>Sort By</p>
                        <select name="" id="">
                            <option value="">Default</option>
                            <option value="">Date Listed</option>
                            <option value="">Year</option>
                            <option value="">Make/Model</option>
                            <option value="">Asking price</option>
                        </select>
                    </div>
                    <div className="select-for-search-div-result">
                        <p>Sorting Order</p>
                        <select name="" id="">
                            <option value="">Highest</option>
                            <option value="">Lowest</option>
                        </select>
                    </div>
                    <div className="select-for-search-div-result">
                        <p>Results Per Page</p>
                        <select name="" id="">
                            <option value="">15</option>
                            <option value="">30</option>
                            <option value="">60</option>
                        </select>
                    </div>
                </div>
                <hr />
                <div className="third-div-search-tools-result">
                <div className="pres-next-div-result for-media-pres-next-div-result">
                <TbPlayerTrackPrevFilled />
                </div>
                <div className="pres-next-div-result">
                <FaCaretLeft />
                </div>
                <div className="pres-next-div-result for-bgc-pres-next-div-result">
                <p>1-15</p>
                </div>
                <div className="pres-next-div-result">
                <p>16-30</p>
                </div>
                <div className="pres-next-div-result">
                <p>31-45</p>
                </div>
                <div className="pres-next-div-result for-media-pres-next-div-result">
                <p>46-60</p>
                </div>
                <div className="pres-next-div-result for-media-pres-next-div-result">
                <p>61-75</p>
                </div>
                <div className="pres-next-div-result">
                <FaCaretRight  />
                </div>
                <div className="pres-next-div-result for-media-pres-next-div-result">
                <TbPlayerTrackNextFilled />
                </div>

                </div>
            </div>
            {data.map((item,key)=>{
                return <div className="div-big-result-df" key = {key} onClick={()=>open(item.id)}>
                <div className="first-img-result-div">
                    <img src={item.image} alt="" />
                </div>
                <div className="first-text-result-div">
                    <div className="inside-little-result-div">
                        <p>Featured Private Seller</p>
                        <span>{item.listing_id}</span>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                <div className="df-delete-and-price-result">
                    <p>${item.price}</p>
                </div>
                </div>
            </div>
              
            })}
        </div>

        
</div>



<div className="big-div-for-img-result">
  <img src={nowlife} alt="" />
</div>
<Footer/>
    </div>
  )
}
