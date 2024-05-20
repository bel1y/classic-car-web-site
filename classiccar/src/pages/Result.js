import React, { useState, useEffect } from 'react';
import '../css/result.css';
import '../css/home.css';
import Nav from './Nav'
import Accordion from "react-bootstrap/Accordion";
import axios from 'axios';
import { FaBell } from "react-icons/fa";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import nowlife from '../img/now-life.png';
import Footer from './Footer';
import url from './host';
import { useSearchParams, useParams } from 'react-router-dom';

export default function Result() {
  const [data, setData] = useState([]);
  var [category, setCategory] = useState([])
  const [filter, setFilter] = useState(JSON.parse(localStorage.getItem("search")));
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  var [countpage, setCountPage] = useState(15)
  var [pagnation, setPagnation] = useState([{ start: 1, end: 15 }])
  var [choose, setChoose] = useState(0)
  function getData() {
    var a = Object.fromEntries(searchParams);
    console.log(a);
    if (a.count && a.count.length > 0) {
      setCountPage(a.count)
    }

    setChoose(id - 1)
    if (a.category && a.subcategory) {
      axios.get(`${url}/api/v1/cars?category=${a.category}&&subcategory=${a.subcategory}`)
        .then(res => {
          axios.get(`${url}/api/v1/category`).then(res2 => {
            setCategory(res2.data)
          })
          if (a.count && a.count.length > 0) {
            document.querySelector('#selectpage').value=a.count
            renderP(res.data, a.count)
          } else {
            renderP(res.data, countpage)
          }
          if (a.looking && a.looking.length > 0) {
            document.querySelector('#oreders1').value=a.looking
            if (a.looking == 1) {
              res.data = res.data.sort((a, b) => a.looking - b.looking)
            } else {
              res.data = res.data.sort((a, b) => b.looking - a.looking)
            }
          }
          if (a.description && a.description.length > 0) {
            res.data = res.data.filter(item => item.description.includes(a.description))
          }
        
          if (a.year_max && a.year_max.length > 0 && a.year_min && a.year_min.length > 0) {
            res.data = res.data.filter(item => (a.year_max*1>=item.year && a.year_min*1<=item.year))
          }
        
          if (a.price_max && a.price_max.length > 0 && a.price_min && a.price_min.length > 0) {
            res.data = res.data.filter(item =>(a.price_max*1>=item.price && a.price_min*1<=item.price))
          }

          if (a.lacotion && a.lacotion.length > 0) {
            console.log(a.lacotion);
            res.data = res.data.filter(item =>item.location.includes(a.lacotion.slice(0,-3)))
          }
          if (a.sortterm && a.sortterm.length > 0) {
            document.querySelector('#sort23').value=a.sortterm
            if (a.sortterm == 2) {
              res.data = res.data.sort((a, b) => new Date(a.time_create) - new Date(b.time_create));
            }
            if (a.sortterm == 3) {
              res.data = res.data.sort((a, b) => a.year - b.year)
            }
            if (a.sortterm == 4) {
              res.data = res.data.sort((a, b) => a.title.localeCompare(b.title));
            }
            if (a.sortterm == 5) {
              res.data = res.data.sort((a, b) => a.price - b.price)
            }
          }
          setData(res.data)
        })
        .catch(err => {

        })
    } else {
      axios.get(`${url}/api/v1/cars`)
        .then(res => {
          axios.get(`${url}/api/v1/category`).then(res2 => {
            setCategory(res2.data)
          })
         
        
          if (a.looking && a.looking.length > 0) {
            document.querySelector('#oreders1').value=a.looking
            if (a.looking == 1) {
              res.data = res.data.sort((a, b) => a.looking - b.looking)
            } else {
              res.data = res.data.sort((a, b) => b.looking - a.looking)
            }
          }
          if (a.description && a.description.length > 0) {
            res.data = res.data.filter(item => item.description.includes(a.description))
          }
        
          if (a.year_max && a.year_max.length > 0 && a.year_min && a.year_min.length > 0) {
            res.data = res.data.filter(item => (a.year_max*1>=item.year && a.year_min*1<=item.year))
          }
        
          if (a.price_max && a.price_max.length > 0 && a.price_min && a.price_min.length > 0) {
            res.data = res.data.filter(item =>(a.price_max*1>=item.price && a.price_min*1<=item.price))
          }

          if (a.lacotion && a.lacotion.length > 0) {
            console.log(a.lacotion);
            res.data = res.data.filter(item =>item.location.includes(a.lacotion.slice(0,-3)))
          }
          if (a.sortterm && a.sortterm.length > 0) {
            document.querySelector('#sort23').value=a.sortterm
            if (a.sortterm == 2) {
              res.data = res.data.sort((a, b) => new Date(a.time_create) - new Date(b.time_create));
            }
            if (a.sortterm == 3) {
              res.data = res.data.sort((a, b) => a.year - b.year)
            }
            if (a.sortterm == 4) {
              res.data = res.data.sort((a, b) => a.title.localeCompare(b.title));
            }
            if (a.sortterm == 5) {
              res.data = res.data.sort((a, b) => a.price - b.price)
            }
          } 
           if (a.count && a.count.length > 0) {
            document.querySelector('#selectpage').value=a.count
            renderP(res.data, a.count)
          } else {
            renderP(res.data, countpage)
          }
          setData(res.data)
        })
        .catch(err => {

        })
    }

  }
  function renderP(massive, lem) {
    var send1 = []
    for (let i = 0; i < massive.length / lem; i++) {
      send1.push({ start: (i * lem) + 1, end: (i + 1) * lem })
    }
    console.log(send1);
    setPagnation(send1)
  }

  function selectCount(params) {
    setCountPage(params)
    renderP(data, params)
    setChoose(0)
  }
  useEffect(() => {
    getData()

  }, [searchParams]);


  function open(id) {
    window.location = `/about-car/${id}`
  }

  function refinesearch() {
    window.location = "/search"
  }

  function select_look(params) {
    var a1 = [...data]
    if (params == 1) {
      a1 = a1.sort((a, b) => a.looking - b.looking)
    } else {
      a1 = a1.sort((a, b) => b.looking - a.looking)
    }
    setData(a1)
  }

  function sortData(params) {
    if (params == 1) {
      getData()
    } else {
      var a = Object.fromEntries(searchParams);
      if (a.category && a.subcategory) {
        axios.get(`${url}/api/v1/cars?category=${a.category}&&subcategory=${a.subcategory}`)
          .then(res => {
            var a1
            if (params == 2) {
              console.log("sad");
              a1 = res.data.sort((a, b) => new Date(a.time_create) - new Date(b.time_create));
            }
            if (params == 3) {
              a1 = res.data.sort((a, b) => a.year - b.year)
            }
            if (params == 4) {
              a1 = res.data.sort((a, b) => a.title.localeCompare(b.title));
            }
            if (params == 5) {
              a1 = res.data.sort((a, b) => a.price - b.price)

            }


            setData(a1)


          })
          .catch(err => {

          })
      } else {
        axios.get(`${url}/api/v1/cars`)
          .then(res => {
            var a1
            if (params == 2) {
              console.log("sad");
              a1 = res.data.sort((a, b) => new Date(a.time_create) - new Date(b.time_create));
            }
            if (params == 3) {
              a1 = res.data.sort((a, b) => a.year - b.year)
            }
            if (params == 4) {
              a1 = res.data.sort((a, b) => a.title.localeCompare(b.title));
            }
            if (params == 5) {
              a1 = res.data.sort((a, b) => a.price - b.price)

            }
            setData(a1)
          })
          .catch(err => {

          })
      }
    }

  }
  return (
    <div className='big-div-result'>
      <Nav />
      <h1>Classic Cars for Sale</h1>
      <h3>Classifieds for Classic Cars. New listings are added daily.</h3>
      <h5><b>{data.length}</b> vehicles matched. Page 1 of <b>{Math.ceil(data.length / 15)}</b>. 15 results per page.</h5>

      <div className="df-result-div-big">
        <div className="accordion-home">
          <Accordion defaultActiveKey="0">
            {category.map((item, key) => {
              return <Accordion.Item eventKey={`${key}`}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>
                  {item.sub.map((item2, key) => {
                    return <p onClick={() => window.location = `/listings-find/${item.id}?category=${item.id}&&subcategory=${item2.id}`}>{item2.title}</p>
                  })}

                </Accordion.Body>
              </Accordion.Item>
            })}



          </Accordion>
        </div>
        <div className="zillions-big-div-result-block">
          <div className="search-tools-dig-div">
            <div className="first-div-search-tools-result">
              <h5>Search Tools</h5>
              <div className="refing-searching-result">
                <p>SET AN ALERT? <FaBell /></p>
                <p onClick={() => refinesearch()}>REFINE SEARCH?</p>
              </div>
            </div>
            <div className="second-div-search-tools-result">
              <div className="select-for-search-div-result">
                <p>Sort By</p>
                <select name="" onChange={(e) => { sortData(e.target.value) }} id="sort23">
                  <option value="1">Default</option>
                  <option value="2">Date Listed</option>
                  <option value="3">Year</option>
                  <option value="4">Make/Model</option>
                  <option value="5">Asking price</option>
                </select>
              </div>
              <div className="select-for-search-div-result">
                <p>Sorting Order</p>
                <select name="" onChange={(e) => { select_look(e.target.value) }} id="oreders1">
                  <option value="1">Highest</option>
                  <option value="2">Lowest</option>
                </select>
              </div>
              <div className="select-for-search-div-result">
                <p>Results Per Page</p>
                <select name="" onChange={(e) => { selectCount(e.target.value) }} id="selectpage">
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="60">60</option>
                </select>
              </div>
            </div>
            <hr />
            <div className="third-div-search-tools-result">
              <div onClick={() => { setChoose(0) }} className="pres-next-div-result for-media-pres-next-div-result" >
                <TbPlayerTrackPrevFilled />
              </div>
              <div onClick={() => { if (choose > 0) { setChoose(choose - 1) } }} className="pres-next-div-result">
                <FaCaretLeft />
              </div>

              {pagnation.map((item, key) => {
                if (key === choose) {
                  return <div className="pres-next-div-result for-bgc-pres-next-div-result">
                    <p>{item.start}-{item.end}</p>
                  </div>
                } else {

                  if (choose == 0 && key < 4) {
                    return <div onClick={() => { setChoose(key) }} className="pres-next-div-result">
                      <p >{item.start}-{item.end}</p>
                    </div>
                  } else {
                    if (choose == 1 && key < 4) {
                      return <div onClick={() => { setChoose(key) }} className="pres-next-div-result">
                        <p >{item.start}-{item.end}</p>
                      </div>
                    } else {
                      if (choose == (pagnation.length) - 1 && key > choose - 4) {
                        return <div onClick={() => { setChoose(key) }} className="pres-next-div-result">
                          <p >{item.start}-{item.end}</p>
                        </div>
                      }
                      if (choose > 1 && key > choose - 3 && key < choose + 2 && choose !== (pagnation.length) - 1) {
                        return <div onClick={() => { setChoose(key) }} className="pres-next-div-result">
                          <p >{item.start}-{item.end}</p>
                        </div>
                      }
                    }

                  }


                }

              })}

              <div onClick={() => { if (choose < pagnation.length - 1) { setChoose(choose + 1) } }} className="pres-next-div-result">
                <FaCaretRight />
              </div>
              <div onClick={() => { setChoose(pagnation.length - 1) }} className="pres-next-div-result for-media-pres-next-div-result">
                <TbPlayerTrackNextFilled />
              </div>

            </div>
          </div>
          {data.map((item, key) => {
            if (pagnation[choose] && pagnation[choose].start <= key + 1 && pagnation[choose].end > key) {
              return <div className="div-big-result-df" key={key} onClick={() => open(item.id)}>
                <div className="first-img-result-div">
                  <img src={item.image} alt="" />
                </div>
                <div className="first-text-result-div">
                  <div className="inside-little-result-div">
                    <p>Featured Private Seller</p>
                    <span>{item.listing_id}</span>
                  </div>
                  <h4> {item.year} {item.title}</h4>
                  <p>{item.description}</p>
                  <div className="df-delete-and-price-result">
                    <p>${item.price}</p>
                  </div>
                </div>
              </div>
            }


          })}
        </div>


      </div>



      <div className="big-div-for-img-result">
        <img src={nowlife} alt="" />
      </div>
      <Footer />
    </div>
  )
}
