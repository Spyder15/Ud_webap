import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import React from "react";
import tick from "../images/arrow.svg";
import "./Page2.css";
import { useLocation } from "react-router-dom";

export default function Page2({ acc }) {
  return (
    <div className="connected-screen">
      <div className="connected-content">
        <img src={tick} alt="tick_img" className="tick"></img>
        <div className="confirmation-message">Wallet Connected!</div>
        <div className="confirmation-message-sub">
          Your wallet has been successfully connected
        </div>
        <div className="wallet-address" id="address">
          {acc.address}
        </div>
        <Link to="/your_mobile_number">
          <button className="proceed-btn">Proceed</button>
        </Link>
      </div>
    </div>
  );
}
