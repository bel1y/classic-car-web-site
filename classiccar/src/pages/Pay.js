import React from 'react'
import logo from '../img/classiccarlogo.webp'
import { FaLock  } from "react-icons/fa";
import '../css/pay.css'
import { FaChevronRight } from "react-icons/fa6";


export default function Pay() {
  
  return (
    <div>
    <div className="navbar-in-pay-for-add">
        <img src={logo} alt="" />
        <p><FaLock /></p>
    </div>
    <header className='header-in-pay-div'>
        <h1>Checkout</h1>
        <h3>Review  <FaChevronRight  />
  Select payment  <FaChevronRight  />
  Get ready for buyers!</h3>
    </header>

    <section className='big-pay-div'>
    <div className="your-item-pay">
      <p>Your Items</p>
    </div>
    <table className="table-in-pay">
      <tr>
        <th className='quantity-table-pay'>Quantity</th>
        <th className='description-table-pay'>Description</th>
        <th className='price-table-pay'>Price</th>
        <th></th>
      </tr>
      <tr>
        <td>1</td>
        <td>Regular Listing (1849338)</td>
        <td>$149.99</td>
        <td className='for-special-button-pay-div'>
          <button className='button-in-table-pay'>EDIT</button>
          <button onClick={() => window.location = "/my-list"} className='button-in-table-pay1'>REMOVE ITEM</button>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td><b>Total: $149.99</b></td>
        <td></td>
      </tr>
    </table>
    </section>
    </div>
  )
}
