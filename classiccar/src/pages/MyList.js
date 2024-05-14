import React from "react";
import "../css/mylist.css";
import Footer from "./Footer";
import Navbar from "./Nav";

export default function MyList() {
  return (
    <div className="big-div-my-list">
      <Navbar />
      <h1>Listing for: Private Seller</h1>
      <h3>Manage your saved vehicles.</h3>
      <div className="my-list-add-new-car-to-sell">
        <button className="button-add-new-new-listing">+ADD NEW LIST</button>
        <div className="input-fiter-add-new-div">
          <p>Filter By</p>
          <div className="input-fiter-add-new-div1">
            <input type="text" placeholder="Filter..." />
            <button>GO</button>
          </div>
        </div>
        <div className="input-fiter-add-new-div2">
          <p>Sort By</p>
          <select name="" id="">
            <option value="">Age</option>
            <option value="">Year</option>
            <option value="">Make/Model</option>
            <option value="">Price</option>
            <option value="">Status</option>
            <option value="">Total Views</option>
          </select>
        </div>
        <div className="input-fiter-add-new-div2">
          <p>Sorting Order</p>
          <select name="" id="">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
        <div className="input-fiter-add-new-div2">
          <p>Sorting Order</p>
          <select name="" id="">
            <option value="">25</option>
            <option value="">50</option>
            <option value="">100</option>
          </select>
        </div>
      </div>
      <h5>
        Items with a tan background are featured listings. Items with a silver
        background are listings requiring renewal.
      </h5>
      <Footer />
    </div>
  );
}
