import * as React from "react";
// import { ethers } from "ethers";
import "./App.css";

export default function App() {
  const wave = () => {};

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
          <span role="img" className="wave" aria-label="waving hand">
            👋
          </span>{" "}
          Hey there!
        </div>

        <div className="bio">
          I am Rishi and I am building a Web3 App with Solidity + Ethereum Smart
          Contracts so that's pretty cool right? Connect your Ethereum wallet
          and wave at me!
        </div>

        <button className="waveButton" onClick={wave}>
          <span role="img" className="wave" aria-label="waving hand">
            👋
          </span>{" "}
          Wave at Me
        </button>
      </div>
    </div>
  );
}
