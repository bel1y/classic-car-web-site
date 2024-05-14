import React from "react";
import "../css/inventoryanalytics.css";
import Navbar from "./Nav";
import Footer from "./Footer";
import { FaChevronDown } from "react-icons/fa";

export default function Inventoryanalytic() {
  return (
    <div className="big-div-inventory-analytics">
      <Navbar />
      <h1>
        Inventory Analytics for: <span>AAA aaa</span>
      </h1>
      <div className="selec-and-text-inventorya">
        <h3>Choose which month's stats you want to see:</h3>
        <select name="" id="">
          <option value="">May, 2024</option>
          <option value="">April, 2024</option>
          <option value="">March, 2024</option>
          <option value="">February, 2024</option>
          <option value="">January, 2024</option>
          <option value="">December, 2023</option>
          <option value="">November, 2023</option>
          <option value="">October, 2023</option>
          <option value="">September, 2023</option>
          <option value="">August, 2023</option>
          <option value="">July, 2023</option>
          <option value="">June, 2023</option>
          <option value="">May, 2023</option>
          <option value="">April, 2023</option>
          <option value="">March, 2023</option>
          <option value="">February, 2023</option>
          <option value="">January, 2023</option>
          <option value="">December, 2022</option>
          <option value="">November, 2022</option>
          <option value="">October, 2022</option>
          <option value="">September, 2022</option>
          <option value="">August, 2022</option>
          <option value="">July, 2022</option>
          <option value="">June, 2022</option>
          <option value="">May, 2022</option>
          <option value="">April, 2022</option>
          <option value="">March, 2022</option>
          <option value="">February, 2022</option>
          <option value="">January, 2022</option>
          <option value="">December, 2021</option>
          <option value="">November, 2021</option>
          <option value="">October, 2021</option>
          <option value="">September, 2021</option>
          <option value="">August, 2021</option>
          <option value="">July, 2021</option>
          <option value="">June, 2021</option>
          <option value="">May, 2021</option>
          <option value="">April, 2021</option>
          <option value="">March, 2021</option>
          <option value="">February, 2021</option>
          <option value="">January, 2021</option>
          <option value="">December, 2020</option>
          <option value="">November, 2020</option>
          <option value="">October, 2020</option>
          <option value="">September, 2020</option>
          <option value="">August, 2020</option>
          <option value="">July, 2020</option>
          <option value="">June, 2020</option>
          <option value="">May, 2020</option>
          <option value="">April, 2020</option>
          <option value="">March, 2020</option>
          <option value="">February, 2020</option>
          <option value="">January, 2020</option>
        </select>
      </div>
      <div className="df-inventory-analytics-div">
        <div className="first-inventory-analytics-div">
          <p>Performance Summary & Legend</p>
          <p>
            <FaChevronDown />
          </p>
        </div>
        <div className="second-inventory-analytics-div">
          <div className="inside-second-inventory-analytics-div">
            <h4>Summary for Your Entire Inventory</h4>
            <table>
              <tr>
                <th className="th-in-inventory-analytics1"></th>
                <th className="th-in-inventory-analytics">April 2024</th>
                <th className="th-in-inventory-analytics">May 2024</th>
                <th className="th-in-inventory-analytics2">Change M/M:</th>
              </tr>
              <tr>
                <td className="th-in-inventory-analytics4">Vehicles Listed:</td>
                <td className="th-in-inventory-analytics3">0</td>
                <td className="th-in-inventory-analytics3">0</td>
                <td className="th-in-inventory-analytics3">0.0%</td>
              </tr>
              <tr>
                <td className="th-in-inventory-analytics4">Vehicles added:</td>
                <td className="th-in-inventory-analytics3">0</td>
                <td className="th-in-inventory-analytics3">0</td>
                <td className="th-in-inventory-analytics3">0.0%</td>
              </tr>
              <tr>
                <td className="th-in-inventory-analytics4">Vehicles sold:</td>
                <td className="th-in-inventory-analytics3">0</td>
                <td className="th-in-inventory-analytics3">0</td>
                <td className="th-in-inventory-analytics3">0.0%</td>
              </tr>
              <tr>
                <td className="th-in-inventory-analytics4">
                  Appearances in search results:
                </td>
                <td className="th-in-inventory-analytics3">0</td>
                <td className="th-in-inventory-analytics3">0</td>
                <td className="th-in-inventory-analytics3">0.0%</td>
              </tr>
              <tr>
                <td className="th-in-inventory-analytics4">
                  Views by Interested Buyers:
                </td>
                <td className="th-in-inventory-analytics3">0</td>
                <td className="th-in-inventory-analytics3">0</td>
                <td className="th-in-inventory-analytics3">0.0%</td>
              </tr>
              <tr>
                <td className="th-in-inventory-analytics4">
                  Click-through Rate:
                </td>
                <td className="th-in-inventory-analytics3">0</td>
                <td className="th-in-inventory-analytics3">0</td>
                <td className="th-in-inventory-analytics3">0.0%</td>
              </tr>
              <tr>
                <td className="th-in-inventory-analytics4">
                  Sales Leads: <b>*</b>
                </td>
                <td className="th-in-inventory-analytics3">0</td>
                <td className="th-in-inventory-analytics3">0</td>
                <td className="th-in-inventory-analytics3">0.0%</td>
              </tr>
              <tr>
                <td className="th-in-inventory-analytics4">
                  Favorites: <b>* *</b>
                </td>
                <td className="th-in-inventory-analytics3">0</td>
                <td className="th-in-inventory-analytics3">0</td>
                <td className="th-in-inventory-analytics3">0.0%</td>
              </tr>
            </table>
            <div className="down-table-div-inventory-analytics">
              <p>
                <b>*</b> Sales Leads: Number of sales leads via telephone and
                online forms.
              </p>
              <p>
                <b>* *</b> Favorites: Number of visitors who added your listing
                to their favorites.
              </p>
            </div>
          </div>
          <div className="inside-second-inventory-analytics-div">
            <h4>Action Items to Optimize Your Listings</h4>
            <table>
              <tr>
                <th className="second-th-in-inventory-analytics">
                  Number of Vehicle Listings
                </th>
                <th className="second-th-in-inventory-analytics">
                  Recomendations
                </th>
              </tr>
              <tr>
                <td className="second-td-in-inventory-analytics">
                  <p>Needing more photos:</p>
                  <b>0</b>
                </td>
                <td className="for-fz-second-div">
                  Buyers like to view 25 or more photos for each listing.
                </td>
              </tr>
              <tr>
                <td className="second-td-in-inventory-analytics">
                  <p>Lacking a video:</p>
                  <b>0</b>
                </td>
                <td className="for-fz-second-div">
                  Videos get buyer's attention, add 1 video to each listing.
                </td>
              </tr>
              <tr>
                <td className="second-td-in-inventory-analytics">
                  <p>Description too short:</p>
                  <b>0</b>
                </td>
                <td className="for-fz-second-div">
                  We recommend using 200-500 words in each listing's description
                  for the best performance.
                </td>
              </tr>
              <tr>
                <td className="second-td-in-inventory-analytics">
                  <p>Vehicle detail sections incomplete:</p>
                  <b>0</b>
                </td>
                <td className="for-fz-second-div">
                  Listings with all detail sections completed perform the best.
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="display-div-select-inventory-analytics">
        <div className="first-select-div-inventory-analytics first-select-div-inventory-analytics1">
          <p>Sort By:</p>
          <select name="" id="">
            <option value="">Default</option>
            <option value="">Make</option>
            <option value="">Model</option>
            <option value="">Year</option>
          </select>
        </div>
        <div className="first-select-div-inventory-analytics first-select-div-inventory-analytics2">
          <p>Show Me:</p>
          <select name="" id="">
            <option value="">Everything</option>
            <option value="">Listings with too few photos</option>
            <option value="">Listings with no video</option>
            <option value="">
              Listings where the description is too short
            </option>
            <option value="">Listings with too few extended details</option>
          </select>
        </div>
      </div>
      <div className="otdelno-div-inventory-analytics">
        <p>Performance Details</p>
      </div>
      <Footer />
    </div>
  );
}
