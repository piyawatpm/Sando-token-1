import React, { useState } from "react";
import { ethers } from "ethers";

const WalletCard = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const connectWalletHandler = () => {
    console.log("requesting account...");

    if (window.ethereum) {
      //metamask installed
      console.log("metamask detected");
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
        });
      setIsConnected(true);
      setShowModal(false);
    } else {
      setErrorMessage("install metamask");
    }
  };

  const accountChangedHandler = (newAccount) => {
    //set default account to the account that passed in
    setWalletAddress(newAccount);
    getWalletBalance(newAccount.toString());
  };

  const getWalletBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setWalletBalance(ethers.utils.formatEther(balance));
      });
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };

  // window.ethereum.on('accountsChanged', accountChangedHandler);

  // window.ethereum.on('chainChange', chainChangedHandler);

  /*
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
  */

  return (
    <>
      {isConnected ? (
        <div className="flex mr-20 px-10">
          <h3 className="absolute text-[#FF0090] bg-white rounded-l-full font-bold px-2 py-1 z-0 right-20 bottom-7 mr-20 ">{walletBalance} ETH</h3>
          
          <h3 className="truncate absolute text-white bg-[#FF0090] rounded-full font-bold px-2 py-1 w-40 z-10 bottom-7 mr-1">{walletAddress}</h3>
         
        </div>
      ) : (
        <button
        // href="/"
        className="bg-[#FF0090] hover:bg-[#cc0274] text-white text-sm font-bold py-2 px-5 rounded-full"
        type="submit"
        onClick={() => setShowModal(true)}
      >
        Connect Wallet
      </button>
      )}
      {errorMessage}
      {/* 
      {isConnected ? (
        <div>
          <h3>Address:{walletAddress}</h3>
          <h3>Balance:{walletBalance}</h3>
        </div>
      ) : (
        <button onClick={() => connect()}>connect wallet</button>
      )}

       */}
     
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}

              <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-[#171717] py-2 px-10 outline-none focus:outline-none">
                {/*header*/}

                <button
                  className="p-1 ml-auto bg-red border-0 text-red float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-gray-500  h-6 w-6 text-3xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
                <div className="flex px-10 py-5">
                  <h3 className="text-xl font-semibold text-white text-center ml-8 ">
                    Connect your wallet
                  </h3>
                </div>

                {/*body*/}

                <div className="flex items-center justify-center mt-5 px-10">
                  <button
                    onClick={connectWalletHandler}
                    className="bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-11 rounded-xl"
                  >
                    <div className="flex">
                      <img
                        src="/images/wallets/metamask.svg"
                        className="w-12 "
                        alt="metamask"
                      />
                      <h1 className="ml-3 pt-2">Metamask</h1>
                    </div>
                  </button>
                </div>
                <div className="flex items-center justify-center py-5 mb-5">
                  <a
                    href="/"
                    className="bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-5 rounded-xl"
                  >
                    <div className="flex">
                      <img
                        src="/images/wallets/walletconnect.png"
                        className="w-12 "
                        alt="wallet-connect"
                      />
                      <h1 className="ml-2 pt-2">WalletConnect</h1>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-lg fixed inset-0 z-40"></div>
        </>
      ) : null}
    </>
  );
};

export default WalletCard;
