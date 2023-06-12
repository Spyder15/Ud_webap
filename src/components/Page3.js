import React, { useState } from "react";
import { useEffect } from "react";
import u from "../images/u.svg";
import tele from "../images/telephone.svg";
import "./Page3.css";
import { ethers } from "ethers";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Page3({ setphoneno, phoneno, contract, acc }) {
  const navigate = useNavigate();
  return (
    <div className="connected-screen">
      <div className="connected-content">
        <img src={u} alt="tick_img" className="tick"></img>
        <div className="mobile-heading" style={{ textAlign: "center" }}>
          Pick Your Web Mobile Number
        </div>
        <div className="mobile-sub">
          Your wallet will be connected to this number
        </div>
        <div className="form">
          <img className="tele-img" src={tele} alt="tele"></img>
          <form>
            <input
              className="phone-input"
              type="tel"
              name="phone"
              pattern="[0-9]{10}"
              maxLength="10"
              inputMode="numeric"
              placeholder="Enter your number"
              value={phoneno}
              onChange={(e) => {
                setphoneno(e.target.value);
              }}
              required
            />
          </form>
          <button className="proceed-button" onClick={setDigits}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );

  async function setDigits() {
    var numb = Number(phoneno);
    //Interaction with contract to establish connection between wallet and phone number
    try {
      contract
        .connect(acc)
        .SettingUniqueId(numb)
        .then(async (res) => {
          console.log(res);
          return res;
        })
        .then((res) => {
          navigate("/mobile_connected_to_address_confirmation");
        });
      console.log("success");
    } catch (e) {
      console.log("error:", e);
    }
  }
}
