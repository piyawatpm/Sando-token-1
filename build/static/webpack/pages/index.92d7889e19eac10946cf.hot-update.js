"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/pages/connectWallet/walletCard.tsx":
/*!***********************************************************!*\
  !*** ./src/components/pages/connectWallet/walletCard.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/sukonratkanjanasuttiyakorn/Documents/projects/web-sando-token/Sando-token/src/components/pages/connectWallet/walletCard.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar WalletCard = function WalletCard() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      errorMessage = _useState[0],\n      setErrorMessage = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      walletAddress = _useState2[0],\n      setWalletAddress = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      walletBalance = _useState3[0],\n      setWalletBalance = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isConnected = _useState4[0],\n      setIsConnected = _useState4[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false),\n      _React$useState2 = (0,_Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),\n      showModal = _React$useState2[0],\n      setShowModal = _React$useState2[1];\n\n  var connectWalletHandler = function connectWalletHandler() {\n    console.log(\"requesting account...\");\n\n    if (window.ethereum) {\n      //metamask installed\n      console.log(\"metamask detected\");\n      window.ethereum.request({\n        method: \"eth_requestAccounts\"\n      }).then(function (result) {\n        accountChangedHandler(result[0]);\n      });\n      setIsConnected(true);\n      setShowModal(false);\n    } else {\n      setErrorMessage(\"install metamask\");\n    }\n  };\n\n  var accountChangedHandler = function accountChangedHandler(newAccount) {\n    //set default account to the account that passed in\n    setWalletAddress(newAccount);\n    getWalletBalance(newAccount.toString());\n  };\n\n  var getWalletBalance = function getWalletBalance(address) {\n    window.ethereum.request({\n      method: \"eth_getBalance\",\n      params: [address, \"latest\"]\n    }).then(function (balance) {\n      setWalletBalance(ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.formatEther(balance));\n    });\n  };\n\n  var chainChangedHandler = function chainChangedHandler() {\n    window.location.reload();\n  }; // window.ethereum.on('accountsChanged', accountChangedHandler);\n  // window.ethereum.on('chainChange', chainChangedHandler);\n\n  /*\n  const [walletAddress, setwalletAddress] = useState(\" \");\n  const [walletBalance, setwalletBalance] = useState(\"\");\n  const [isConnected, setIsConnected] = useState(false);\n   async function connect() {\n    console.log(\"requesting account...\");\n     //check if metamask extension exists\n    if (typeof window.ethereum !== \"undefined\") {\n      console.log(\"metamask detected\");\n       try {\n        const accounts = await window.ethereum.request({\n          method: \"eth_requestAccounts\",\n        });\n        setIsConnected(true);\n        setwalletAddress(accounts[0]);\n        let connectedProvider = new ethers.providers.Web3Provider(\n          window.ethereum\n        );\n      } catch (error) {\n        console.log(\"error connecting..\");\n      }\n    } else {\n      console.log(\"metamask not detected\");\n    }\n  }\n   const getWalletBalance = (address) => {\n    window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})\n    .then(balance => {\n      setWalletBalance(ethers.utils.formatEther(balance));\n    })\n  };\n  */\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [isConnected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"flex mr-20 px-10\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n          className: \"absolute text-[#FF0090] bg-white rounded-l-full font-bold px-2 py-1 z-0 right-20 bottom-7 mr-20 \",\n          children: [walletBalance, \" ETH\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n          className: \"truncate absolute text-white bg-[#FF0090] rounded-full font-bold px-2 py-1 w-40 z-10 bottom-7 mr-2\",\n          children: walletAddress\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n          href: \"\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"svg\", {\n            xmlns: \"http://www.w3.org/2000/svg\",\n            className: \"ml-5 h-8 w-8 bg-[#FF0090] rounded-full\",\n            fill: \"none\",\n            viewBox: \"0 0 24 24\",\n            stroke: \"currentColor\",\n            strokeWidth: 2,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"path\", {\n              strokeLinecap: \"round\",\n              strokeLinejoin: \"round\",\n              d: \"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n      // href=\"/\"\n      className: \"bg-[#FF0090] hover:bg-[#cc0274] text-white text-sm font-bold py-2 px-5 rounded-full\",\n      type: \"submit\",\n      onClick: function onClick() {\n        return setShowModal(true);\n      },\n      children: \"Connect Wallet\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }, _this), errorMessage, showModal ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"relative w-auto my-6 mx-auto max-w-3xl\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-[#171717] py-2 px-10 outline-none focus:outline-none\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n              className: \"p-1 ml-auto bg-red border-0 text-red float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n              onClick: function onClick() {\n                return setShowModal(false);\n              },\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                className: \"bg-transparent text-gray-500  h-6 w-6 text-3xl block outline-none focus:outline-none\",\n                children: \"\\xD7\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 151,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 147,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"flex px-10 py-5\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n                className: \"text-xl font-semibold text-white text-center ml-8 \",\n                children: \"Connect your wallet\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 156,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 155,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"flex items-center justify-center mt-5 px-10\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n                onClick: connectWalletHandler,\n                className: \"bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-11 rounded-xl\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n                  className: \"flex\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                    src: \"/images/wallets/metamask.svg\",\n                    className: \"w-12 \",\n                    alt: \"metamask\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 169,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n                    className: \"ml-3 pt-2\",\n                    children: \"Metamask\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 174,\n                    columnNumber: 23\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 168,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 164,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 163,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"flex items-center justify-center py-5 mb-5\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n                href: \"/\",\n                className: \"bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-5 rounded-xl\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n                  className: \"flex\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                    src: \"/images/wallets/walletconnect.png\",\n                    className: \"w-12 \",\n                    alt: \"wallet-connect\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 184,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n                    className: \"ml-2 pt-2\",\n                    children: \"WalletConnect\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 189,\n                    columnNumber: 23\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 183,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 179,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 178,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 144,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 141,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"backdrop-blur-lg fixed inset-0 z-40\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 196,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true) : null]\n  }, void 0, true);\n};\n\n_s(WalletCard, \"yixPCOokSz8A4atMLWNWIM88tMo=\");\n\n_c = WalletCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WalletCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"WalletCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wYWdlcy9jb25uZWN0V2FsbGV0L3dhbGxldENhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7OztBQUVBLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDdkIsa0JBQXdDRiwrQ0FBUSxDQUFDLElBQUQsQ0FBaEQ7QUFBQSxNQUFPRyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG1CQUEwQ0osK0NBQVEsQ0FBQyxJQUFELENBQWxEO0FBQUEsTUFBT0ssYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQTBDTiwrQ0FBUSxDQUFDLElBQUQsQ0FBbEQ7QUFBQSxNQUFPTyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBc0NSLCtDQUFRLENBQUMsS0FBRCxDQUE5QztBQUFBLE1BQU9TLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0Esd0JBQWtDWCxxREFBQSxDQUFlLEtBQWYsQ0FBbEM7QUFBQTtBQUFBLE1BQU9ZLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQ2pDQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjs7QUFFQSxRQUFJQyxNQUFNLENBQUNDLFFBQVgsRUFBcUI7QUFDbkI7QUFDQUgsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQUMsTUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQ0dDLE9BREgsQ0FDVztBQUFFQyxRQUFBQSxNQUFNLEVBQUU7QUFBVixPQURYLEVBRUdDLElBRkgsQ0FFUSxVQUFDQyxNQUFELEVBQVk7QUFDaEJDLFFBQUFBLHFCQUFxQixDQUFDRCxNQUFNLENBQUMsQ0FBRCxDQUFQLENBQXJCO0FBQ0QsT0FKSDtBQUtBWCxNQUFBQSxjQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0FFLE1BQUFBLFlBQVksQ0FB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O0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUF5REU7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpERjtBQUFBLG9CQURRLEdBNEROLElBN0dOO0FBQUEsa0JBREY7QUFpSEQsQ0FyTUQ7O0dBQU1YOztLQUFBQTtBQXVNTiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9jb25uZWN0V2FsbGV0L3dhbGxldENhcmQudHN4P2U4OTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5cbmNvbnN0IFdhbGxldENhcmQgPSAoKSA9PiB7XG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3dhbGxldEFkZHJlc3MsIHNldFdhbGxldEFkZHJlc3NdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt3YWxsZXRCYWxhbmNlLCBzZXRXYWxsZXRCYWxhbmNlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNDb25uZWN0ZWQsIHNldElzQ29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjb25uZWN0V2FsbGV0SGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInJlcXVlc3RpbmcgYWNjb3VudC4uLlwiKTtcblxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgIC8vbWV0YW1hc2sgaW5zdGFsbGVkXG4gICAgICBjb25zb2xlLmxvZyhcIm1ldGFtYXNrIGRldGVjdGVkXCIpO1xuICAgICAgd2luZG93LmV0aGVyZXVtXG4gICAgICAgIC5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgYWNjb3VudENoYW5nZWRIYW5kbGVyKHJlc3VsdFswXSk7XG4gICAgICAgIH0pO1xuICAgICAgc2V0SXNDb25uZWN0ZWQodHJ1ZSk7XG4gICAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJpbnN0YWxsIG1ldGFtYXNrXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhY2NvdW50Q2hhbmdlZEhhbmRsZXIgPSAobmV3QWNjb3VudCkgPT4ge1xuICAgIC8vc2V0IGRlZmF1bHQgYWNjb3VudCB0byB0aGUgYWNjb3VudCB0aGF0IHBhc3NlZCBpblxuICAgIHNldFdhbGxldEFkZHJlc3MobmV3QWNjb3VudCk7XG4gICAgZ2V0V2FsbGV0QmFsYW5jZShuZXdBY2NvdW50LnRvU3RyaW5nKCkpO1xuICB9O1xuXG4gIGNvbnN0IGdldFdhbGxldEJhbGFuY2UgPSAoYWRkcmVzcykgPT4ge1xuICAgIHdpbmRvdy5ldGhlcmV1bVxuICAgICAgLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX2dldEJhbGFuY2VcIiwgcGFyYW1zOiBbYWRkcmVzcywgXCJsYXRlc3RcIl0gfSlcbiAgICAgIC50aGVuKChiYWxhbmNlKSA9PiB7XG4gICAgICAgIHNldFdhbGxldEJhbGFuY2UoZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKGJhbGFuY2UpKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNoYWluQ2hhbmdlZEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9O1xuXG4gIC8vIHdpbmRvdy5ldGhlcmV1bS5vbignYWNjb3VudHNDaGFuZ2VkJywgYWNjb3VudENoYW5nZWRIYW5kbGVyKTtcblxuICAvLyB3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlJywgY2hhaW5DaGFuZ2VkSGFuZGxlcik7XG5cbiAgLypcbiAgY29uc3QgW3dhbGxldEFkZHJlc3MsIHNldHdhbGxldEFkZHJlc3NdID0gdXNlU3RhdGUoXCIgXCIpO1xuICBjb25zdCBbd2FsbGV0QmFsYW5jZSwgc2V0d2FsbGV0QmFsYW5jZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzQ29ubmVjdGVkLCBzZXRJc0Nvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcInJlcXVlc3RpbmcgYWNjb3VudC4uLlwiKTtcblxuICAgIC8vY2hlY2sgaWYgbWV0YW1hc2sgZXh0ZW5zaW9uIGV4aXN0c1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm1ldGFtYXNrIGRldGVjdGVkXCIpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxuICAgICAgICB9KTtcbiAgICAgICAgc2V0SXNDb25uZWN0ZWQodHJ1ZSk7XG4gICAgICAgIHNldHdhbGxldEFkZHJlc3MoYWNjb3VudHNbMF0pO1xuICAgICAgICBsZXQgY29ubmVjdGVkUHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoXG4gICAgICAgICAgd2luZG93LmV0aGVyZXVtXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGNvbm5lY3RpbmcuLlwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJtZXRhbWFzayBub3QgZGV0ZWN0ZWRcIik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0V2FsbGV0QmFsYW5jZSA9IChhZGRyZXNzKSA9PiB7XG4gICAgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe21ldGhvZDogJ2V0aF9nZXRCYWxhbmNlJywgcGFyYW1zOiBbYWRkcmVzcywgJ2xhdGVzdCddfSlcbiAgICAudGhlbihiYWxhbmNlID0+IHtcbiAgICAgIHNldFdhbGxldEJhbGFuY2UoZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKGJhbGFuY2UpKTtcbiAgICB9KVxuICB9O1xuICAqL1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc0Nvbm5lY3RlZCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1yLTIwIHB4LTEwXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtWyNGRjAwOTBdIGJnLXdoaXRlIHJvdW5kZWQtbC1mdWxsIGZvbnQtYm9sZCBweC0yIHB5LTEgei0wIHJpZ2h0LTIwIGJvdHRvbS03IG1yLTIwIFwiPnt3YWxsZXRCYWxhbmNlfSBFVEg8L2gzPlxuICAgICAgICAgIFxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0cnVuY2F0ZSBhYnNvbHV0ZSB0ZXh0LXdoaXRlIGJnLVsjRkYwMDkwXSByb3VuZGVkLWZ1bGwgZm9udC1ib2xkIHB4LTIgcHktMSB3LTQwIHotMTAgYm90dG9tLTcgbXItMlwiPnt3YWxsZXRBZGRyZXNzfTwvaDM+XG4gICAgICAgICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtNSBoLTggdy04IGJnLVsjRkYwMDkwXSByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTcgMTZsNC00bTAgMGwtNC00bTQgNEg3bTYgNHYxYTMgMyAwIDAxLTMgM0g2YTMgMyAwIDAxLTMtM1Y3YTMgMyAwIDAxMy0zaDRhMyAzIDAgMDEzIDN2MVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgLy8gaHJlZj1cIi9cIlxuICAgICAgICBjbGFzc05hbWU9XCJiZy1bI0ZGMDA5MF0gaG92ZXI6YmctWyNjYzAyNzRdIHRleHQtd2hpdGUgdGV4dC1zbSBmb250LWJvbGQgcHktMiBweC01IHJvdW5kZWQtZnVsbFwiXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XG4gICAgICA+XG4gICAgICAgIENvbm5lY3QgV2FsbGV0XG4gICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgICB7ZXJyb3JNZXNzYWdlfVxuICAgICAgey8qIFxuICAgICAge2lzQ29ubmVjdGVkID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz5BZGRyZXNzOnt3YWxsZXRBZGRyZXNzfTwvaDM+XG4gICAgICAgICAgPGgzPkJhbGFuY2U6e3dhbGxldEJhbGFuY2V9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbm5lY3QoKX0+Y29ubmVjdCB3YWxsZXQ8L2J1dHRvbj5cbiAgICAgICl9XG5cbiAgICAgICAqL31cbiAgICAgXG4gICAgICB7c2hvd01vZGFsID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXggb3ZlcmZsb3cteC1oaWRkZW4gb3ZlcmZsb3cteS1hdXRvIGZpeGVkIGluc2V0LTAgei01MCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctYXV0byBteS02IG14LWF1dG8gbWF4LXctM3hsXCI+XG4gICAgICAgICAgICAgIHsvKmNvbnRlbnQqL31cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0wIHJvdW5kZWQtWzMwcHhdIHNoYWRvdy1sZyByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIHctZnVsbCBiZy1bIzE3MTcxN10gcHktMiBweC0xMCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICAgICAgey8qaGVhZGVyKi99XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEgbWwtYXV0byBiZy1yZWQgYm9yZGVyLTAgdGV4dC1yZWQgZmxvYXQtcmlnaHQgdGV4dC0zeGwgbGVhZGluZy1ub25lIGZvbnQtc2VtaWJvbGQgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IHRleHQtZ3JheS01MDAgIGgtNiB3LTYgdGV4dC0zeGwgYmxvY2sgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICDDl1xuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBweC0xMCBweS01XCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgbWwtOCBcIj5cbiAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCB5b3VyIHdhbGxldFxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKmJvZHkqL31cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtNSBweC0xMFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb25uZWN0V2FsbGV0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyNmMGYwZjBdIGhvdmVyOmJnLVsjYzRjNGM0XSB0ZXh0LWJsYWNrIHRleHQtMnhsIGZvbnQtYm9sZCBweS0yIHB4LTExIHJvdW5kZWQteGxcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3dhbGxldHMvbWV0YW1hc2suc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTIgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIm1ldGFtYXNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtbC0zIHB0LTJcIj5NZXRhbWFzazwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS01IG1iLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyNmMGYwZjBdIGhvdmVyOmJnLVsjYzRjNGM0XSB0ZXh0LWJsYWNrIHRleHQtMnhsIGZvbnQtYm9sZCBweS0yIHB4LTUgcm91bmRlZC14bFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvd2FsbGV0cy93YWxsZXRjb25uZWN0LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ3YWxsZXQtY29ubmVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWwtMiBwdC0yXCI+V2FsbGV0Q29ubmVjdDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2Ryb3AtYmx1ci1sZyBmaXhlZCBpbnNldC0wIHotNDBcIj48L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImV0aGVycyIsIldhbGxldENhcmQiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJ3YWxsZXRBZGRyZXNzIiwic2V0V2FsbGV0QWRkcmVzcyIsIndhbGxldEJhbGFuY2UiLCJzZXRXYWxsZXRCYWxhbmNlIiwiaXNDb25uZWN0ZWQiLCJzZXRJc0Nvbm5lY3RlZCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImNvbm5lY3RXYWxsZXRIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInRoZW4iLCJyZXN1bHQiLCJhY2NvdW50Q2hhbmdlZEhhbmRsZXIiLCJuZXdBY2NvdW50IiwiZ2V0V2FsbGV0QmFsYW5jZSIsInRvU3RyaW5nIiwiYWRkcmVzcyIsInBhcmFtcyIsImJhbGFuY2UiLCJ1dGlscyIsImZvcm1hdEV0aGVyIiwiY2hhaW5DaGFuZ2VkSGFuZGxlciIsImxvY2F0aW9uIiwicmVsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/pages/connectWallet/walletCard.tsx\n");

/***/ })

});