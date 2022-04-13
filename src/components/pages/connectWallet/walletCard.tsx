import React, { useState } from "react";
import { ethers } from "ethers";

const WalletCard = () => {
  
  /*
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnectButtonText] = useState("Connect Wallet");

  const connectWalletHandler = () => {
    if (window.ethereum) {
      //metamask installed
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
        });
    } else {
      setErrorMessage("install metamask");
    }
  };

  const accountChangedHandler = (newAccount) => {
      //set default account to the account that passed in
      setDefaultAccount(newAccount);
      getUserBalance(newAccount.toString());
  };

  const getUserBalance = (address) => {
    window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})
    .then(balance => {
      setUserBalance(ethers.utils.formatEther(balance));
    })
  };

  const chainChangedHandler = () =>{
    window.location.reload();
  }

*/

  // window.ethereum.on('accountsChanged', accountChangedHandler);

  // window.ethereum.on('chainChange', chainChangedHandler);



  const [walletAddress, setwalletAddress] = useState(" ");
  const [walletBalance, setwalletBalance] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  async function connect() {
    console.log("requesting account...");

    //check if metamask extension exists
    if (typeof window.ethereum !== "undefined") {
      console.log("metamask detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setIsConnected(true);
        setwalletAddress(accounts[0]);
        let connectedProvider = new ethers.providers.Web3Provider(
          window.ethereum
        );
      } catch (error) {
        console.log("error connecting..");
      }
    } else {
      console.log("metamask not detected");
    }
  }

  const getWalletBalance = (address) => {
    window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})
    .then(balance => {
      setWalletBalance(ethers.utils.formatEther(balance));
    })
  };

  return (
    <>
      {/* 
      <button onClick={connectWalletHandler}>{connButtonText}</button>
      <div>
        <h3>Address:{defaultAccount}</h3>
        <h3>Bal:{userBalance}</h3>
      </div>
      {errorMessage}
      */}
      {isConnected ? (
        <div>
          <h3>Address:{walletAddress}</h3>
          <h3>Balance:{walletBalance}</h3>
        </div>
      ) : (
        <button onClick={() => connect()}>connect wallet</button>
      )}
    </>
  );
};

export default WalletCard;
