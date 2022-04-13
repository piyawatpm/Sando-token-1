import React, { useState } from "react";
import {ethers} from "ethers";

const WalletCard = () => {
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
      setErrorMessage('install metamask');
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

 // window.ethereum.on('accountsChanged', accountChangedHandler);

 // window.ethereum.on('chainChange', chainChangedHandler);
  return (
    <>
      <button onClick={connectWalletHandler}>{connButtonText}</button>
      <div>
        <h3>Add:{defaultAccount}</h3>
        <h3>Bal:{userBalance}</h3>
      </div>
      {errorMessage}
    </>
  );
};

export default WalletCard;
