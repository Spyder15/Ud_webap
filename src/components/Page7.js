import React from "react";
import tick from "../images/tick.svg";
import "./Page7.css";
import { Link, useNavigate } from "react-router-dom";
export default function Page7({ amount, receiverphoneno }) {
  return (
    <div className="final-screen">
      <div className="final-content">
        <img src={tick} alt="tick_img" className="tick"></img>
        <div className="final-message">Transcation completed!</div>
        <div className="final-message-sub">
          You have successfully sent {amount} MATIC to{" "}
          <span style={{ color: "#5D8EFB" }}> {receiverphoneno} </span>
        </div>

        <button className="proceed-btn">
          Send Transcation As Text To Recipient
        </button>
      </div>
    </div>
  );
}
