import React from "react";
import u from "../images/u.svg";
import tele from "../images/telephone.svg";
import "./Page5.css";
import { Link, useNavigate } from "react-router-dom";
export default function Page5({
  receiverphoneno,
  setrecieverphoneno,
  acc,
  setrecieveracc,
  contract,
}) {
  const navigate = useNavigate();
  return (
    <div className="connected-screen">
      <div className="connected-content">
        <img src={u} alt="tick_img" className="tick"></img>
        <div className="mobile-heading" style={{ textAlign: "center" }}>
          Start sending crypto
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
              placeholder="Enter reciever's number"
              value={receiverphoneno}
              onChange={(e) => {
                setrecieverphoneno(e.target.value);
              }}
              required
            ></input>
          </form>
          <button className="proceed-button" onClick={checkAccount}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
  async function checkAccount() {
    console.log(contract);
    var game = Number(receiverphoneno);
    var set;
    try {
      set = await contract.checkAccount(game);

      setrecieveracc(set);
    } catch (e) {
      console.log(e);
    }
    console.log(set);
    navigate("/confirm_transaction_details");
  }
}
