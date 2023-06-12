import React from "react";
import arrow from "../images/arrow.svg";
import "./Page6.css";
import { ethers } from "ethers";
import { Link, useNavigate } from "react-router-dom";
export default function Page6({
  amount,
  setamount,
  receiverphoneno,
  acc,
  contract,
  receiveracc,
}) {
  const navigate = useNavigate();
  return (
    <div className="transfer-screen">
      <div className="transfer-content">
        <img src={arrow} alt="tick_img" className="tick"></img>
        <div className="transfer-heading">Send Crypto to</div>
        <div className="transfer-number">{receiverphoneno}</div>
        <div className="wallet-container">
          Metamask wallet<br></br>
          <span style={{ color: "#739EFC" }}>{receiveracc}</span>
        </div>
        <div className="transfer-selector">
          <div className="currency">
            <span style={{ color: "white", fontWeight: 500 }}>
              Select currency
            </span>
            <select>
              <option>MATIC</option>
            </select>
          </div>
          <div className="blockchain">
            <span style={{ color: "white", fontWeight: 500 }}>
              Select blockchain
            </span>
            <select>
              <option>Polygon</option>
            </select>
          </div>
          <div className="amount">
            <span style={{ color: "white", fontWeight: 500 }}>
              Enter amount
            </span>
            <input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setamount(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="transaction">
          <button className="confirm-btn" onClick={sendTransaction}>
            Confirm transaction
          </button>
        </div>
      </div>
    </div>
  );
  async function sendTransaction() {
    //coversion of input from USDC to Wei
    //var x = 11.5 / 8;
    //var amnt = Number(amount);
    //console.log(amnt);
    //var v = amnt * x;
    //let usdcBalance = ethers.parseUnits(v.toString(), 18);
    let a = Number(amount);
    const amount_for_transaction = "0x" + a.toString(16);

    //Calling Metamask for transaction
    const receiver = contract
      .checkAccount(receiverphoneno)
      .then((res) => {
        try {
          window.ethereum
            .request({
              method: "eth_sendTransaction",
              params: [
                {
                  from: acc.address, // The user's active address.
                  to: res, // Required except during contract publications.
                  value: amount_for_transaction, // Only required to send Matic to the recipient from the initiating external account.
                },
              ],
            })
            .then((txHash) => {
              console.log(txHash);
              navigate("/transaction_confirmed");
            })
            .catch((error) => {
              console.error(error);
            });
        } catch (e) {
          console.log(e);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(receiver);
  }
}
