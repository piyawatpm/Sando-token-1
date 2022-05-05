import { slide as Menu } from "react-burger-menu";
import React, { useState, useEffect, useRef } from "react";

export default (props: any) => {
  const [isOpen, setOpen] = useState(false);
  return (
    // Pass on our props
    <>
      <Menu right width={"100%"}>
        <a
          href=""
          className="menu-item py-4 px-2  font-semibold hover:text-green-500 transition duration-300"
        >
          Home
        </a>
        <a
          href=""
          className="menu-item py-4 px-2  font-semibold hover:text-green-500 transition duration-300"
        >
          Tokensale
        </a>
        <a
          href=""
          className="menu-item py-4 px-2  font-semibold hover:text-green-500 transition duration-300"
        >
          Staking
        </a>
        <a
          href=""
          className="menu-item py-4 px-2  font-semibold hover:text-green-500 transition duration-300"
        >
          Buy
        </a>

        <div className="relative mb-5 md:mb-0 md:mr-10 group text-white">
          <a href="/login">Login</a> | <a href="/register">Register</a>
        </div>
        <button
                // href="/"
                className=" bg-[#FF0090] hover:bg-[#cc0274] text-white text-sm font-bold py-2 px-5 rounded-full sr-only xl:not-sr-only"
                type="submit"
                //onClick={() => setShowModal(true)}
              >
                Connect Wallet
              </button>
      </Menu>
    </>
  );
};
