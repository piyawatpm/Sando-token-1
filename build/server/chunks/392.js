exports.id = 392;
exports.ids = [392];
exports.modules = {

/***/ 1765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_MainLayout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-burger-menu"
var external_react_burger_menu_ = __webpack_require__(8568);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/Sidebar.tsx





/* harmony default export */ const Sidebar = (props => {
  const {
    0: isOpen,
    1: setOpen
  } = (0,external_react_.useState)(false);
  return (
    /*#__PURE__*/
    // Pass on our props
    jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_burger_menu_.slide, {
        right: true,
        width: "100%",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "",
          className: "menu-item py-4 px-2  font-semibold hover:text-green-500 transition duration-300",
          children: "Home"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "",
          className: "menu-item py-4 px-2  font-semibold hover:text-green-500 transition duration-300",
          children: "Tokensale"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "",
          className: "menu-item py-4 px-2  font-semibold hover:text-green-500 transition duration-300",
          children: "Staking"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "",
          className: "menu-item py-4 px-2  font-semibold hover:text-green-500 transition duration-300",
          children: "Buy"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "relative mb-5 md:mb-0 md:mr-10 group text-white",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "/login",
            children: "Login"
          }), " | ", /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "/register",
            children: "Register"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          // href="/"
          className: " bg-[#FF0090] hover:bg-[#cc0274] text-white text-sm font-bold py-2 px-5 rounded-full sr-only xl:not-sr-only",
          type: "submit" //onClick={() => setShowModal(true)}
          ,
          children: "Connect Wallet"
        })]
      })
    })
  );
});
;// CONCATENATED MODULE: ./src/components/Header.tsx






function Header() {
  const [showModal, setShowModal] = external_react_default().useState(false);
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: "sticky top-0 z-50 navbar white bg-cover bg-center bg-no-repeat bg-[#0f0f0f] ",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "relative mx-auto container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: "flex justify-between text-white",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex px-5 py-3 xl:px-12 w-full items-center md:w-screen sm:w-screen lg:w-screen",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "flex  font-heading",
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/sando-logo-text.svg",
              alt: "sando logo image",
              className: "w-11/12"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "sr-only xl:not-sr-only 2xl:not-sr-only hidden md:flex  mx-auto font-bold font-heading space-x-5",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "hover:text-gray-200",
                href: "/",
                children: "Home"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "hover:text-gray-200",
                href: "/sale",
                children: "Tokensale"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "hover:text-gray-200",
                href: "/staking",
                children: "Staking"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "hover:text-gray-200",
                href: "/buy",
                children: "Buy"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "hover:text-gray-200 mr-5",
                href: "/whitepaper",
                children: "Whitepaper"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: " dropdown inline-block relative z-10",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
              className: " text-white font-semibold py-1 px-1  inline-flex items-center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "mr-1",
                children: "English"
              }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
                className: "fill-current h-5 w-5 mr-8",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "dropdown-menu absolute hidden text-white pt-1 font-bold bg-zinc-800 rounded-lg mt-1",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "flex rounded hover:text-gray-300 py-2 px-4  block whitespace-no-wrap ml-2",
                  href: "#",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "mr-2",
                    children: "Thai"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "flex rounded  hover:text-gray-300 py-2 px-4  block whitespace-no-wrap ml-2",
                  href: "#",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "mr-2",
                    children: "Turkish"
                  })
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col md:flex-row mt-5 md:mt-0 items-end md:items-center md:justify-end",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex sr-only  xl:not-sr-only 2xl:not-sr-only ",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "relative top-2.5 mb-5 sm:mb-0 sm:mr-5 group text-white font-bold ",
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/login",
                  children: "Login"
                }), " | ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/register",
                  children: "Register"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                // href="/"
                className: " bg-[#FF0090] hover:bg-[#cc0274] text-white text-sm font-bold py-3 px-5 rounded-full",
                type: "submit",
                onClick: () => setShowModal(true),
                children: "Connect Wallet"
              })]
            }), showModal ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "relative w-auto my-6 mx-auto max-w-3xl",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-[#171717] py-2 px-10 outline-none focus:outline-none",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                      className: "p-1 ml-auto bg-red border-0 text-red float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                      onClick: () => setShowModal(false),
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "bg-transparent text-gray-500  h-6 w-6 text-3xl block outline-none focus:outline-none",
                        children: "\xD7"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "flex px-10 py-5",
                      children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                        className: "text-xl font-semibold text-white text-center ml-8 ",
                        children: "Connect your wallet"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "flex items-center justify-center mt-5 px-10",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "/metamask",
                        className: "bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-11 rounded-xl",
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "flex",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                            src: "/images/wallets/metamask.svg",
                            className: "w-12 ",
                            alt: "metamask"
                          }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
                            className: "ml-3 pt-2",
                            children: "Metamask"
                          })]
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "flex items-center justify-center mt-5",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "/metamask",
                        className: "bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-5 rounded-xl",
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "flex",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                            src: "/images/wallets/walletconnect.png",
                            className: "w-12 ",
                            alt: "wallet-connect"
                          }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
                            className: "ml-2 pt-2",
                            children: "WalletConnect"
                          })]
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "flex items-center justify-center mt-5 px-10",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "/",
                        className: "bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-9 rounded-xl",
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "flex",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                            src: "/images/wallet/trust-wallet-icon.svg",
                            className: "w-11 ",
                            alt: "trust wallet icon"
                          }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
                            className: "ml-3 pt-2",
                            children: "Trust Wallet"
                          })]
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "flex items-center justify-center mt-5 mb-5 px-10",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "/",
                        className: "bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-12 rounded-xl",
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "flex",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                            src: "/images/wallet/phantom-icon.svg",
                            className: "w-12 ",
                            alt: "phantom icon"
                          }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
                            className: "ml-5 pt-2",
                            children: "Phantom"
                          })]
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                      className: "flex items-center justify-center",
                      children: "What\u2019s a Wallet?"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "flex items-center justify-center px-10",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "/wallet",
                        className: "mt-2 mb-5 w-48 inline-block text-center px-6 py-1 bg-[#FF0090] hover:bg-[#cc0274] text-white text-xl font-bold font-bold leading-normal rounded-full shadow-md hover:shadow-lg focus:bg-[#cc0274] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#cc0274] active:shadow-lg transition duration-150 ease-in-out",
                        children: "Learn More"
                      })
                    })]
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "backdrop-blur-lg fixed inset-0 z-40"
              })]
            }) : null]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "float-right xl:hidden",
          children: /*#__PURE__*/jsx_runtime_.jsx(Sidebar, {
            className: " text-white xl:hidden"
          })
        })]
      })
    })
  });
}

/* harmony default export */ const components_Header = (Header);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/Footer.tsx





const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: "bg-cover bg-no-repeat bg-[#0f0f0f]" // style={{ backgroundImage: `url(${'./images/Footer.svg'})` }}
    ,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "relative mx-auto container pb-5",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "grid grid-rows-2 mx-10 pt-10 pb-5",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "grid grid-cols-4 gap-2 px-5",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-span-2 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/images/sando-logo.svg",
                alt: "sando logo image",
                className: "w-20 mt-5"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/sando-token-text.png",
                  alt: "sando logo text",
                  className: "h-1/4 mt-6 ml-3"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  className: "text-white font-normal text-sm ml-3 mt-2",
                  children: ["Currency used for our project platforms : ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Oceansky, Sandora and Metasando."]
                })]
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-span-2  ml-12",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "mt-5 mb-3 font-bold text-white ml-10 px-10",
              children: "Join the community"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex gap-3 ml-10 px-10",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "https://facebook.com/sandotoken",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  target: "_blank",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    className: "h-10 w-10 hover:opacity-75",
                    src: "/images/social_media/FB.png",
                    alt: "facebook"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "https://twitter.com/@Sando_Token",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  target: "_blank",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    className: "h-10 w-10 hover:opacity-75",
                    src: "/images/social_media/Twitter.png",
                    alt: "Twitter"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "https://instagram.com/Sandotoken",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  target: "_blank",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    className: "h-10 w-10 hover:opacity-75",
                    src: "/images/social_media/Instagram.png",
                    alt: "Instagram"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "https://www.youtube.com/channel/UCFMswzNKdyDwS29b73269uw",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  target: "_blank",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    className: "h-10 w-10 hover:opacity-75",
                    src: "/images/social_media/Youtube.png",
                    alt: "Youtube"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "https://tiktok.com/@sandotoken",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  target: "_blank",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    className: "h-10 w-10 hover:opacity-75",
                    src: "/images/social_media/TikTok.png",
                    alt: "TikTok"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "https://www.linkedin.com/in/sando-token-a94282233/",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  target: "_blank",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    className: "h-10 w-10 hover:opacity-75",
                    src: "/images/social_media/Linkedin.png",
                    alt: "Linkedin"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "https://discord.gg/gjPUjuQY",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  target: "_blank",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    className: "h-10 w-10 hover:opacity-75",
                    src: "/images/social_media/Discord.png",
                    alt: "Discord"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "https://t.me/+hk4UEOF_HGdlNDI1",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  target: "_blank",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    className: "h-10 w-10 hover:opacity-75",
                    src: "/images/social_media/Telegram.png",
                    alt: "Telegram"
                  })
                })
              })]
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "grid grid-cols-4 gap-4 mb-5 px-10 ml-8 mt-2",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: " text-white ml-10",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              className: "text-[#ff0090] text-base font-bold pb-1",
              children: "Resources"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "font-normal text-base hover:text-gray-200",
                  href: "/projects",
                  children: "Projects"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "font-normal text-base hover:text-gray-200",
                  href: "/comingsoon",
                  children: "Whitepaper"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "font-normal text-base hover:text-gray-200",
                  href: "/gasfee",
                  children: "Gas Fees Token"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "font-normal text-base hover:text-gray-200",
                  href: "/wallet",
                  children: "Wallet"
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "text-white ml-20",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              className: "text-[#ff0090] text-base font-bold pb-1",
              children: "Token"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "font-normal text-base hover:text-gray-200",
                  href: "/addsando",
                  children: "Sando"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "font-normaltext-base  hover:text-gray-200",
                  href: "/sale",
                  children: "Tokensale"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "font-normal text-base hover:text-gray-200",
                  href: "/buy",
                  children: "Buy"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "font-normal text-base hover:text-gray-200",
                  href: "/staking",
                  children: "Staking"
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "text-white ml-20",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              className: "text-[#ff0090] text-base font-bold pb-1",
              children: "About"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "font-normal text-base hover:text-gray-200",
                  href: "/company",
                  children: "Company"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "font-normal text-base hover:text-gray-200",
                  href: "/contactus",
                  children: "Contact us"
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "text-white ml-20",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              className: "text-[#ff0090] font-bold text-base pb-1",
              children: "Support"
            }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
              children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "font-normal hover:text-gray-200 text-base",
                  href: "/help",
                  children: "Help Centre"
                })
              })
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-white text-sm mx-10 ml-20",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Copyright \xA9 2022 SANDORA PTY LTD, All rights reserved"
        })
      })]
    })
  });
};

/* harmony default export */ const components_Footer = (Footer);
;// CONCATENATED MODULE: ./src/layout/MainLayout.tsx






function MainLayout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "wraper",
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), children, /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
}

/* harmony default export */ const layout_MainLayout = (MainLayout);

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;