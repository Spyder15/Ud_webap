import "./Page1.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import ellipse from "../images/ellipse.png";
import iphone from "../images/iphone.png";
import border from "../images/border.png";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { utils } from "ethers";
import conABI from "../abi/abi.json";
import config from "../config.json";

function Page1({ acc, setacc, contract, setcontract }) {
  const navigate = useNavigate();
  async function getAccount() {
    try {
      // POLYGON MAINNET REQUEST FOR ACCOUNTS ... TO CONNECT TO METAMASK
    //   await window.ethereum.request({
    //     method: "wallet_switchEthereumChain",
    //     params: [{ chainId: "0x89" }],
    //   });
    // } catch (switchError) {
    //   var next = 137;
    //   // This error code indicates that the chain has not been added to MetaMask.{Uncomment to use}
    //   if (switchError.code === 4902) {
    //     try {
    //       await window.ethereum.request({
    //         method: "wallet_addEthereumChain",
    //         params: [
    //           {
    //             chainId: "0x" + next.toString(16),
    //             chainName: "Polygon Mainnet",
    //             nativeCurrency: {
    //               name: "MATIC",
    //               symbol: "MATIC",
    //               decimals: 18,
    //             },
    //             rpcUrls: [
    //               " https://polygon-mainnet.infura.io ",
    //               "https://rpc.ankr.com/polygon",
    //               "https://polygon-bor.publicnode.com",
    //             ] /* ... */,
    //           },
    //         ],
    //       });

          // THIS IS THE POLYGON MUMBAI REQUEST FOR ACCOUNTS... TO CONNECT TO METAMASK {uncomment to use}
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x13881" }],
          });
        } catch (switchError) {
          var next = 80001;
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code === 4902) {
            try {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: "0x" + next.toString(16),
                    chainName: "Polygon Testnet",
                    nativeCurrency: {
                      name: "MATIC",
                      symbol: "MATIC",
                      decimals: 18,
                    },
                    rpcUrls: [
                      "https://rpc-mumbai.maticvigil.com/",
                    ] /* ... */,
                  },
                ],
              });
        } catch (addError) {
          console.log(addError);
        }
      }
      // handle other "switch" errors
    }
    //This is used to call the metamask provider
    const provider = new ethers.BrowserProvider(window.ethereum);
    console.log(provider);

    //This is used to acces the checked in accounts
    provider
      .getSigner()
      .then((res) => {
        console.log(res);

        //This is used to interact with the contract
        const usdcContract = new ethers.Contract(config.address, conABI, res);
        setacc(res);
        setcontract(usdcContract);

        navigate("/connected");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <div className="App-header">
        <p className="heading" style={{ fontFamily: "Arial" }}>
          Your Web3
          <br /> Mobile Number
        </p>
        <div className="sub-heading" style={{ fontFamily: "arial" }}>
          Join the revolution of seamless web3 communication
        </div>
        <div className="connect">
          <button className="connect-text" onClick={getAccount}>
            Connect Metamask wallet
          </button>
        </div>
        <div className="bottompart">
          <img className="ellipse" src={ellipse} alt="img"></img>
          <div className="mobile" style={{ backgroundImage: `url(${border})` }}>
            <img src={iphone} alt="img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
