import React from "react";
import tick from "../images/tick.svg";
import "./Page4.css";
import { Link, useNavigate } from "react-router-dom";
export default function Page4({ acc, phoneno }) {
  return (
    <div className="connected-screen">
      <div className="connected-content">
        <img src={tick} alt="tick_img" className="tick"></img>
        <div className="confirmation-message1">
          Number linked to your wallet!
        </div>
        <div className="confirmation-message-sub1" style={{ marginBottom: 40 }}>
          Your NFT number has been successfully linked to your wallet.
        </div>
        <div
          className="wallet-address"
          id="address"
          style={{ textAlign: "center" }}
        >
          {phoneno}
          <br></br> + <br></br> {acc.address}{" "}
        </div>
        <Link to="/reciever_mobile_number">
          <button className="send-btn">Start sending crypto</button>
        </Link>
      </div>
    </div>
  );
}
