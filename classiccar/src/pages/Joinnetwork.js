import React from "react";
import s from "../css/Join_network.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import Navbar from "./Nav";
import Footer from "./Footer";

export default function Joinnetwork() {
  return (
    <div>
      <Navbar />
      <div className={s.imgg}>
        <div className={s.black}>
          <h1>
            ClassicCars.com Dealer Network <br />
            <span>Join now to grow your business!</span>
          </h1>
        </div>
      </div>
      <div className={s.body}>
        <img
          className={s.clascar}
          src="https://classiccars.com/img/Banner/Dealer-special-728x90.jpg"
          alt=""
        />
        <img
          className={s.pitch}
          src="https://classiccars.com/img/pitch/View-Dealer-Network-Dealers.jpg"
          alt=""
        />

        <div className={s.dealer}>
          <div className={s.network}>
            <h1 className={s.com}>Why the ClassicCars.com Dealer Network?</h1>
            <div className={s.setting}>
              <IoMdSettings className={s.set} />
              <h3>
                24/7 Inventory exposure to over 4+ million monthly visitors
              </h3>
            </div>
            <div className={s.setting}>
              <IoMdSettings className={s.set} />
              <h3>Trusted by over 500 modern and classic car dealers</h3>
            </div>
            <div className={s.setting}>
              <IoMdSettings className={s.set} />
              <h3>Qualified leads to turn inventory faster</h3>
            </div>
            <div className={s.setting}>
              <IoMdSettings className={s.set} />
              <h3> No contract, month to month agreement</h3>
            </div>
            <div className={s.setting}>
              <IoMdSettings className={s.set} />
              <h3>Award-winning customer support team</h3>
            </div>
            <div className={s.setting}>
              <IoMdSettings className={s.set} />
              <h3> Choice of classified listings or auction listings</h3>
            </div>
            <div className={s.setting}>
              <IoMdSettings className={s.set} />
              <h3>Quick startup. List today</h3>
            </div>
          </div>
          <div className={s.hunter}>
            <div className={s.new_feature}>
              <div className={s.df1}>
                <div className={s.new2}>New Feature!</div>
                <h1>
                  <span>The Dealer Network</span> now provides an additional way
                  to move your inventory.
                </h1>
              </div>
              <div className={s.intro}>
                <div className={s.introich}>
                  <h1 style={{ color: "#821213" }}>Introducing AutoHunter</h1>
                  <h3>The premier online collector-car auction platform</h3>
                  <div className={s.fast}>
                    <div className={s.fast1}>
                      <div className={s.checkt}>
                        <FaCheckCircle className={s.circlech} />{" "}
                        <h3>Move Inventory Fast</h3>
                      </div>
                      <div className={s.checkt}>
                        <FaCheckCircle className={s.circlech} />{" "}
                        <h3>No Seller Commission</h3>
                      </div>
                      <div className={s.checkt}>
                        <FaCheckCircle className={s.circlech} />{" "}
                        <h3>Personalized Service</h3>
                      </div>
                    </div>
                    <div className={s.fast1}>
                      <div className={s.checkt}>
                        <FaCheckCircle className={s.circlech} />{" "}
                        <h3>Listed in Days Not Weeks!</h3>
                      </div>
                      <div className={s.checkt}>
                        <FaCheckCircle className={s.circlech} />{" "}
                        <h3>
                          No Risk, Unsold Inventory Relists on ClassicCars.com
                        </h3>
                      </div>
                      <img
                        className={s.online}
                        src="https://classiccars.com/img/logos/AutoHunter-Live-Online-Auctions-Driven-By-Classic-Cars.gif"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className={s.request}>Request more information:</h1>
        <div className={s.input_big}>
          <div className={s.name}>
            <label htmlFor="">Name</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="">Email Address</label>
            <br />
            <input type="text" />
          </div>
          <div className={s.name}>
            <label htmlFor="">Dealership Name</label>
            <br />
            <input type="text" /> <br />
            <label htmlFor="">Preferred Contact Phone Number</label>
            <br />
            <input type="text" />
          </div>
          <div className={s.name}>
            <label htmlFor="">Website</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="">Average Number of Vehicles in Inventory</label>
            <br />
            <input type="text" />

            <div className={s.btn1}>
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
