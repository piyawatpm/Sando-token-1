"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/metamask",{

/***/ "./src/components/pages/connectWallet/walletCard.tsx":
/*!***********************************************************!*\
  !*** ./src/components/pages/connectWallet/walletCard.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/sukonratkanjanasuttiyakorn/Documents/projects/web-sando-token/Sando-token/src/components/pages/connectWallet/walletCard.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar WalletCard = function WalletCard() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      errorMessage = _useState[0],\n      setErrorMessage = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      walletAddress = _useState2[0],\n      setWalletAddress = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      walletBalance = _useState3[0],\n      setWalletBalance = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isConnected = _useState4[0],\n      setIsConnected = _useState4[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false),\n      _React$useState2 = (0,_Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),\n      showModal = _React$useState2[0],\n      setShowModal = _React$useState2[1];\n\n  var connectWalletHandler = function connectWalletHandler() {\n    console.log(\"requesting account...\");\n\n    if (window.ethereum) {\n      //metamask installed\n      console.log(\"metamask detected\");\n      window.ethereum.request({\n        method: \"eth_requestAccounts\"\n      }).then(function (result) {\n        accountChangedHandler(result[0]);\n      });\n      setIsConnected(true);\n      setShowModal(false);\n    } else {\n      setErrorMessage(\"install metamask\");\n    }\n  };\n\n  var accountChangedHandler = function accountChangedHandler(newAccount) {\n    //set default account to the account that passed in\n    setWalletAddress(newAccount);\n    getWalletBalance(newAccount.toString());\n  };\n\n  var getWalletBalance = function getWalletBalance(address) {\n    window.ethereum.request({\n      method: \"eth_getBalance\",\n      params: [address, \"latest\"]\n    }).then(function (balance) {\n      setWalletBalance(ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.formatEther(balance));\n    });\n  };\n\n  var chainChangedHandler = function chainChangedHandler() {\n    window.location.reload();\n  }; // window.ethereum.on('accountsChanged', accountChangedHandler);\n  // window.ethereum.on('chainChange', chainChangedHandler);\n\n  /*\n  const [walletAddress, setwalletAddress] = useState(\" \");\n  const [walletBalance, setwalletBalance] = useState(\"\");\n  const [isConnected, setIsConnected] = useState(false);\n   async function connect() {\n    console.log(\"requesting account...\");\n     //check if metamask extension exists\n    if (typeof window.ethereum !== \"undefined\") {\n      console.log(\"metamask detected\");\n       try {\n        const accounts = await window.ethereum.request({\n          method: \"eth_requestAccounts\",\n        });\n        setIsConnected(true);\n        setwalletAddress(accounts[0]);\n        let connectedProvider = new ethers.providers.Web3Provider(\n          window.ethereum\n        );\n      } catch (error) {\n        console.log(\"error connecting..\");\n      }\n    } else {\n      console.log(\"metamask not detected\");\n    }\n  }\n   const getWalletBalance = (address) => {\n    window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})\n    .then(balance => {\n      setWalletBalance(ethers.utils.formatEther(balance));\n    })\n  };\n  */\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [isConnected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"static\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n        className: \"absolute text-[#FF0090] bg-white rounded-l-full font-bold px-1 py-1 z-0 right-10 bottom-7\",\n        children: [walletBalance, \" ETH\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n        className: \"truncate absolute text-white bg-[#FF0090] rounded-full font-bold px-2 py-1 w-36 z-10 bottom-7\",\n        children: walletAddress\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n      // href=\"/\"\n      className: \"bg-[#FF0090] hover:bg-[#cc0274] text-white text-sm font-bold py-2 px-5 rounded-full\",\n      type: \"submit\",\n      onClick: function onClick() {\n        return setShowModal(true);\n      },\n      children: \"Connect Wallet\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 9\n    }, _this), errorMessage, showModal ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"relative w-auto my-6 mx-auto max-w-3xl\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-[#171717] py-2 px-10 outline-none focus:outline-none\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n              className: \"p-1 ml-auto bg-red border-0 text-red float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n              onClick: function onClick() {\n                return setShowModal(false);\n              },\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                className: \"bg-transparent text-gray-500  h-6 w-6 text-3xl block outline-none focus:outline-none\",\n                children: \"\\xD7\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 133,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 129,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"flex px-10 py-5\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n                className: \"text-xl font-semibold text-white text-center ml-8 \",\n                children: \"Connect your wallet\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 138,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 137,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"flex items-center justify-center mt-5 px-10\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n                onClick: connectWalletHandler,\n                className: \"bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-11 rounded-xl\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n                  className: \"flex\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                    src: \"/images/wallets/metamask.svg\",\n                    className: \"w-12 \",\n                    alt: \"metamask\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 151,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n                    className: \"ml-3 pt-2\",\n                    children: \"Metamask\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 156,\n                    columnNumber: 23\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 150,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 146,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 145,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"flex items-center justify-center py-5 mb-5\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n                href: \"/\",\n                className: \"bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-5 rounded-xl\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n                  className: \"flex\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                    src: \"/images/wallets/walletconnect.png\",\n                    className: \"w-12 \",\n                    alt: \"wallet-connect\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 166,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n                    className: \"ml-2 pt-2\",\n                    children: \"WalletConnect\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 171,\n                    columnNumber: 23\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 165,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 161,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 160,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"backdrop-blur-lg fixed inset-0 z-40\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 178,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true) : null]\n  }, void 0, true);\n};\n\n_s(WalletCard, \"yixPCOokSz8A4atMLWNWIM88tMo=\");\n\n_c = WalletCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WalletCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"WalletCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wYWdlcy9jb25uZWN0V2FsbGV0L3dhbGxldENhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7OztBQUVBLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDdkIsa0JBQXdDRiwrQ0FBUSxDQUFDLElBQUQsQ0FBaEQ7QUFBQSxNQUFPRyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG1CQUEwQ0osK0NBQVEsQ0FBQyxJQUFELENBQWxEO0FBQUEsTUFBT0ssYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQTBDTiwrQ0FBUSxDQUFDLElBQUQsQ0FBbEQ7QUFBQSxNQUFPTyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBc0NSLCtDQUFRLENBQUMsS0FBRCxDQUE5QztBQUFBLE1BQU9TLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0Esd0JBQWtDWCxxREFBQSxDQUFlLEtBQWYsQ0FBbEM7QUFBQTtBQUFBLE1BQU9ZLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQ2pDQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjs7QUFFQSxRQUFJQyxNQUFNLENBQUNDLFFBQVgsRUFBcUI7QUFDbkI7QUFDQUgsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQUMsTUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQ0dDLE9BREgsQ0FDVztBQUFFQyxRQUFBQSxNQUFNLEVBQUU7QUFBVixPQURYLEVBRUdDLElBRkgsQ0FFUSxVQUFDQyxNQUFELEVBQVk7QUFDaEJDLFFBQUFBLHFCQUFxQixDQUFDRCxNQUFNLENBQUMsQ0FBRCxDQUFQLENBQXJCO0FBQ0QsT0FKSDtBQUtBWCxNQUFBQSxjQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0FFLE1BQUFBLFlBQVksQ0FB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R0UsdUJBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFNRTtBQUFJLDZCQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFuQkYsZUFrQ0U7QUFBSyx1QkFBUyxFQUFDLDRDQUFmO0FBQUEscUNBQ0U7QUFDRSxvQkFBSSxFQUFDLEdBRFA7QUFFRSx5QkFBUyxFQUFDLG9GQUZaO0FBQUEsdUNBSUU7QUFBSywyQkFBUyxFQUFDLE1BQWY7QUFBQSwwQ0FDRTtBQUNFLHVCQUFHLEVBQUMsbUNBRE47QUFFRSw2QkFBUyxFQUFDLE9BRlo7QUFHRSx1QkFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQU1FO0FBQUksNkJBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBeURFO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6REY7QUFBQSxvQkFEUSxHQTRETixJQTNGTjtBQUFBLGtCQURGO0FBK0ZELENBbkxEOztHQUFNWDs7S0FBQUE7QUFxTE4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvY29ubmVjdFdhbGxldC93YWxsZXRDYXJkLnRzeD9lODk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5jb25zdCBXYWxsZXRDYXJkID0gKCkgPT4ge1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbd2FsbGV0QmFsYW5jZSwgc2V0V2FsbGV0QmFsYW5jZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzQ29ubmVjdGVkLCBzZXRJc0Nvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJyZXF1ZXN0aW5nIGFjY291bnQuLi5cIik7XG5cbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICAvL21ldGFtYXNrIGluc3RhbGxlZFxuICAgICAgY29uc29sZS5sb2coXCJtZXRhbWFzayBkZXRlY3RlZFwiKTtcbiAgICAgIHdpbmRvdy5ldGhlcmV1bVxuICAgICAgICAucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGFjY291bnRDaGFuZ2VkSGFuZGxlcihyZXN1bHRbMF0pO1xuICAgICAgICB9KTtcbiAgICAgIHNldElzQ29ubmVjdGVkKHRydWUpO1xuICAgICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiaW5zdGFsbCBtZXRhbWFza1wiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWNjb3VudENoYW5nZWRIYW5kbGVyID0gKG5ld0FjY291bnQpID0+IHtcbiAgICAvL3NldCBkZWZhdWx0IGFjY291bnQgdG8gdGhlIGFjY291bnQgdGhhdCBwYXNzZWQgaW5cbiAgICBzZXRXYWxsZXRBZGRyZXNzKG5ld0FjY291bnQpO1xuICAgIGdldFdhbGxldEJhbGFuY2UobmV3QWNjb3VudC50b1N0cmluZygpKTtcbiAgfTtcblxuICBjb25zdCBnZXRXYWxsZXRCYWxhbmNlID0gKGFkZHJlc3MpID0+IHtcbiAgICB3aW5kb3cuZXRoZXJldW1cbiAgICAgIC5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9nZXRCYWxhbmNlXCIsIHBhcmFtczogW2FkZHJlc3MsIFwibGF0ZXN0XCJdIH0pXG4gICAgICAudGhlbigoYmFsYW5jZSkgPT4ge1xuICAgICAgICBzZXRXYWxsZXRCYWxhbmNlKGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihiYWxhbmNlKSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjaGFpbkNoYW5nZWRIYW5kbGVyID0gKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfTtcblxuICAvLyB3aW5kb3cuZXRoZXJldW0ub24oJ2FjY291bnRzQ2hhbmdlZCcsIGFjY291bnRDaGFuZ2VkSGFuZGxlcik7XG5cbiAgLy8gd2luZG93LmV0aGVyZXVtLm9uKCdjaGFpbkNoYW5nZScsIGNoYWluQ2hhbmdlZEhhbmRsZXIpO1xuXG4gIC8qXG4gIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXR3YWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiIFwiKTtcbiAgY29uc3QgW3dhbGxldEJhbGFuY2UsIHNldHdhbGxldEJhbGFuY2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0Nvbm5lY3RlZCwgc2V0SXNDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgY29uc29sZS5sb2coXCJyZXF1ZXN0aW5nIGFjY291bnQuLi5cIik7XG5cbiAgICAvL2NoZWNrIGlmIG1ldGFtYXNrIGV4dGVuc2lvbiBleGlzdHNcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgY29uc29sZS5sb2coXCJtZXRhbWFzayBkZXRlY3RlZFwiKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHNldElzQ29ubmVjdGVkKHRydWUpO1xuICAgICAgICBzZXR3YWxsZXRBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICAgICAgbGV0IGNvbm5lY3RlZFByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKFxuICAgICAgICAgIHdpbmRvdy5ldGhlcmV1bVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBjb25uZWN0aW5nLi5cIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibWV0YW1hc2sgbm90IGRldGVjdGVkXCIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldFdhbGxldEJhbGFuY2UgPSAoYWRkcmVzcykgPT4ge1xuICAgIHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHttZXRob2Q6ICdldGhfZ2V0QmFsYW5jZScsIHBhcmFtczogW2FkZHJlc3MsICdsYXRlc3QnXX0pXG4gICAgLnRoZW4oYmFsYW5jZSA9PiB7XG4gICAgICBzZXRXYWxsZXRCYWxhbmNlKGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihiYWxhbmNlKSk7XG4gICAgfSlcbiAgfTtcbiAgKi9cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNDb25uZWN0ZWQgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGljXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtWyNGRjAwOTBdIGJnLXdoaXRlIHJvdW5kZWQtbC1mdWxsIGZvbnQtYm9sZCBweC0xIHB5LTEgei0wIHJpZ2h0LTEwIGJvdHRvbS03XCI+e3dhbGxldEJhbGFuY2V9IEVUSDwvaDM+XG4gICAgICAgICAgXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRydW5jYXRlIGFic29sdXRlIHRleHQtd2hpdGUgYmctWyNGRjAwOTBdIHJvdW5kZWQtZnVsbCBmb250LWJvbGQgcHgtMiBweS0xIHctMzYgei0xMCBib3R0b20tN1wiPnt3YWxsZXRBZGRyZXNzfTwvaDM+XG4gICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgIC8vIGhyZWY9XCIvXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctWyNGRjAwOTBdIGhvdmVyOmJnLVsjY2MwMjc0XSB0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1ib2xkIHB5LTIgcHgtNSByb3VuZGVkLWZ1bGxcIlxuICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxuICAgICAgPlxuICAgICAgICBDb25uZWN0IFdhbGxldFxuICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgICAge2Vycm9yTWVzc2FnZX1cbiAgICAgIHsvKiBcbiAgICAgIHtpc0Nvbm5lY3RlZCA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDM+QWRkcmVzczp7d2FsbGV0QWRkcmVzc308L2gzPlxuICAgICAgICAgIDxoMz5CYWxhbmNlOnt3YWxsZXRCYWxhbmNlfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25uZWN0KCl9PmNvbm5lY3Qgd2FsbGV0PC9idXR0b24+XG4gICAgICApfVxuXG4gICAgICAgKi99XG4gICAgIFxuICAgICAge3Nob3dNb2RhbCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4IG92ZXJmbG93LXgtaGlkZGVuIG92ZXJmbG93LXktYXV0byBmaXhlZCBpbnNldC0wIHotNTAgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWF1dG8gbXktNiBteC1hdXRvIG1heC13LTN4bFwiPlxuICAgICAgICAgICAgICB7Lypjb250ZW50Ki99XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMCByb3VuZGVkLVszMHB4XSBzaGFkb3ctbGcgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCB3LWZ1bGwgYmctWyMxNzE3MTddIHB5LTIgcHgtMTAgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgICAgIHsvKmhlYWRlciovfVxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIG1sLWF1dG8gYmctcmVkIGJvcmRlci0wIHRleHQtcmVkIGZsb2F0LXJpZ2h0IHRleHQtM3hsIGxlYWRpbmctbm9uZSBmb250LXNlbWlib2xkIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCB0ZXh0LWdyYXktNTAwICBoLTYgdy02IHRleHQtM3hsIGJsb2NrIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgw5dcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHgtMTAgcHktNVwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIG1sLTggXCI+XG4gICAgICAgICAgICAgICAgICAgIENvbm5lY3QgeW91ciB3YWxsZXRcbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7Lypib2R5Ki99XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTUgcHgtMTBcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29ubmVjdFdhbGxldEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjZjBmMGYwXSBob3ZlcjpiZy1bI2M0YzRjNF0gdGV4dC1ibGFjayB0ZXh0LTJ4bCBmb250LWJvbGQgcHktMiBweC0xMSByb3VuZGVkLXhsXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy93YWxsZXRzL21ldGFtYXNrLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJtZXRhbWFza1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWwtMyBwdC0yXCI+TWV0YW1hc2s8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktNSBtYi01XCI+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjZjBmMGYwXSBob3ZlcjpiZy1bI2M0YzRjNF0gdGV4dC1ibGFjayB0ZXh0LTJ4bCBmb250LWJvbGQgcHktMiBweC01IHJvdW5kZWQteGxcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3dhbGxldHMvd2FsbGV0Y29ubmVjdC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwid2FsbGV0LWNvbm5lY3RcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1sLTIgcHQtMlwiPldhbGxldENvbm5lY3Q8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tkcm9wLWJsdXItbGcgZml4ZWQgaW5zZXQtMCB6LTQwXCI+PC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYWxsZXRDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJXYWxsZXRDYXJkIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJ3YWxsZXRCYWxhbmNlIiwic2V0V2FsbGV0QmFsYW5jZSIsImlzQ29ubmVjdGVkIiwic2V0SXNDb25uZWN0ZWQiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJjb25uZWN0V2FsbGV0SGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJ0aGVuIiwicmVzdWx0IiwiYWNjb3VudENoYW5nZWRIYW5kbGVyIiwibmV3QWNjb3VudCIsImdldFdhbGxldEJhbGFuY2UiLCJ0b1N0cmluZyIsImFkZHJlc3MiLCJwYXJhbXMiLCJiYWxhbmNlIiwidXRpbHMiLCJmb3JtYXRFdGhlciIsImNoYWluQ2hhbmdlZEhhbmRsZXIiLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/pages/connectWallet/walletCard.tsx\n");

/***/ })

});