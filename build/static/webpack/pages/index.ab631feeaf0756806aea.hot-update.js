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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/sukonratkanjanasuttiyakorn/Documents/projects/web-sando-token/Sando-token/src/components/pages/connectWallet/walletCard.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar WalletCard = function WalletCard() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      errorMessage = _useState[0],\n      setErrorMessage = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      walletAddress = _useState2[0],\n      setWalletAddress = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      walletBalance = _useState3[0],\n      setWalletBalance = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isConnected = _useState4[0],\n      setIsConnected = _useState4[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false),\n      _React$useState2 = (0,_Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),\n      showModal = _React$useState2[0],\n      setShowModal = _React$useState2[1];\n\n  var connectWalletHandler = function connectWalletHandler() {\n    console.log(\"requesting account...\");\n\n    if (window.ethereum) {\n      //metamask installed\n      console.log(\"metamask detected\");\n      window.ethereum.request({\n        method: \"eth_requestAccounts\"\n      }).then(function (result) {\n        accountChangedHandler(result[0]);\n      });\n      setIsConnected(true);\n      setShowModal(false);\n    } else {\n      setErrorMessage(\"install metamask\");\n    }\n  };\n\n  var accountChangedHandler = function accountChangedHandler(newAccount) {\n    //set default account to the account that passed in\n    setWalletAddress(newAccount);\n    getWalletBalance(newAccount.toString());\n  };\n\n  var getWalletBalance = function getWalletBalance(address) {\n    window.ethereum.request({\n      method: \"eth_getBalance\",\n      params: [address, \"latest\"]\n    }).then(function (balance) {\n      setWalletBalance(ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.formatEther(balance));\n    });\n  };\n\n  var chainChangedHandler = function chainChangedHandler() {\n    window.location.reload();\n  }; // window.ethereum.on('accountsChanged', accountChangedHandler);\n  // window.ethereum.on('chainChange', chainChangedHandler);\n\n  /*\n  const [walletAddress, setwalletAddress] = useState(\" \");\n  const [walletBalance, setwalletBalance] = useState(\"\");\n  const [isConnected, setIsConnected] = useState(false);\n   async function connect() {\n    console.log(\"requesting account...\");\n     //check if metamask extension exists\n    if (typeof window.ethereum !== \"undefined\") {\n      console.log(\"metamask detected\");\n       try {\n        const accounts = await window.ethereum.request({\n          method: \"eth_requestAccounts\",\n        });\n        setIsConnected(true);\n        setwalletAddress(accounts[0]);\n        let connectedProvider = new ethers.providers.Web3Provider(\n          window.ethereum\n        );\n      } catch (error) {\n        console.log(\"error connecting..\");\n      }\n    } else {\n      console.log(\"metamask not detected\");\n    }\n  }\n   const getWalletBalance = (address) => {\n    window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})\n    .then(balance => {\n      setWalletBalance(ethers.utils.formatEther(balance));\n    })\n  };\n  */\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [isConnected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"flex mr-20 px-5\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n          className: \"absolute text-[#FF0090] bg-white rounded-l-full font-bold px-2 py-1 z-0 right-20 bottom-7 mr-20 \",\n          children: [walletBalance, \" ETH\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n          className: \"truncate absolute text-white bg-[#FF0090] rounded-full font-bold px-2 py-1 w-40 z-10 bottom-7 mr-2\",\n          children: walletAddress\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n      // href=\"/\"\n      className: \"bg-[#FF0090] hover:bg-[#cc0274] text-white text-sm font-bold py-2 px-5 rounded-full\",\n      type: \"submit\",\n      onClick: function onClick() {\n        return setShowModal(true);\n      },\n      children: \"Connect Wallet\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 9\n    }, _this), errorMessage, showModal ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"relative w-auto my-6 mx-auto max-w-3xl\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-[#171717] py-2 px-10 outline-none focus:outline-none\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n              className: \"p-1 ml-auto bg-red border-0 text-red float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n              onClick: function onClick() {\n                return setShowModal(false);\n              },\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                className: \"bg-transparent text-gray-500  h-6 w-6 text-3xl block outline-none focus:outline-none\",\n                children: \"\\xD7\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 136,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 132,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"flex px-10 py-5\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n                className: \"text-xl font-semibold text-white text-center ml-8 \",\n                children: \"Connect your wallet\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 141,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 140,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"flex items-center justify-center mt-5 px-10\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n                onClick: connectWalletHandler,\n                className: \"bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-11 rounded-xl\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n                  className: \"flex\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                    src: \"/images/wallets/metamask.svg\",\n                    className: \"w-12 \",\n                    alt: \"metamask\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 154,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n                    className: \"ml-3 pt-2\",\n                    children: \"Metamask\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 159,\n                    columnNumber: 23\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 153,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 149,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 148,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"flex items-center justify-center py-5 mb-5\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n                href: \"/\",\n                className: \"bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-5 rounded-xl\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n                  className: \"flex\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                    src: \"/images/wallets/walletconnect.png\",\n                    className: \"w-12 \",\n                    alt: \"wallet-connect\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 169,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n                    className: \"ml-2 pt-2\",\n                    children: \"WalletConnect\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 174,\n                    columnNumber: 23\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 168,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 164,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 163,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 129,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"backdrop-blur-lg fixed inset-0 z-40\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 181,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true) : null]\n  }, void 0, true);\n};\n\n_s(WalletCard, \"yixPCOokSz8A4atMLWNWIM88tMo=\");\n\n_c = WalletCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WalletCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"WalletCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wYWdlcy9jb25uZWN0V2FsbGV0L3dhbGxldENhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7OztBQUVBLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDdkIsa0JBQXdDRiwrQ0FBUSxDQUFDLElBQUQsQ0FBaEQ7QUFBQSxNQUFPRyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG1CQUEwQ0osK0NBQVEsQ0FBQyxJQUFELENBQWxEO0FBQUEsTUFBT0ssYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQTBDTiwrQ0FBUSxDQUFDLElBQUQsQ0FBbEQ7QUFBQSxNQUFPTyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBc0NSLCtDQUFRLENBQUMsS0FBRCxDQUE5QztBQUFBLE1BQU9TLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0Esd0JBQWtDWCxxREFBQSxDQUFlLEtBQWYsQ0FBbEM7QUFBQTtBQUFBLE1BQU9ZLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQ2pDQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjs7QUFFQSxRQUFJQyxNQUFNLENBQUNDLFFBQVgsRUFBcUI7QUFDbkI7QUFDQUgsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQUMsTUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQ0dDLE9BREgsQ0FDVztBQUFFQyxRQUFBQSxNQUFNLEVBQUU7QUFBVixPQURYLEVBRUdDLElBRkgsQ0FFUSxVQUFDQyxNQUFELEVBQVk7QUFDaEJDLFFBQUFBLHFCQUFxQixDQUFDRCxNQUFNLENBQUMsQ0FBRCxDQUFQLENBQXJCO0FBQ0QsT0FKSDtBQUtBWCxNQUFBQSxjQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0FFLE1BQUFBLFlBQVksQ0FB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RUUsNkJBQVMsRUFBQyxPQUZaO0FBR0UsdUJBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFNRTtBQUFJLDZCQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFuQkYsZUFrQ0U7QUFBSyx1QkFBUyxFQUFDLDRDQUFmO0FBQUEscUNBQ0U7QUFDRSxvQkFBSSxFQUFDLEdBRFA7QUFFRSx5QkFBUyxFQUFDLG9GQUZaO0FBQUEsdUNBSUU7QUFBSywyQkFBUyxFQUFDLE1BQWY7QUFBQSwwQ0FDRTtBQUNFLHVCQUFHLEVBQUMsbUNBRE47QUFFRSw2QkFBUyxFQUFDLE9BRlo7QUFHRSx1QkFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQU1FO0FBQUksNkJBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBeURFO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6REY7QUFBQSxvQkFEUSxHQTRETixJQTlGTjtBQUFBLGtCQURGO0FBa0dELENBdExEOztHQUFNWDs7S0FBQUE7QUF3TE4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvY29ubmVjdFdhbGxldC93YWxsZXRDYXJkLnRzeD9lODk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5jb25zdCBXYWxsZXRDYXJkID0gKCkgPT4ge1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbd2FsbGV0QmFsYW5jZSwgc2V0V2FsbGV0QmFsYW5jZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzQ29ubmVjdGVkLCBzZXRJc0Nvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJyZXF1ZXN0aW5nIGFjY291bnQuLi5cIik7XG5cbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICAvL21ldGFtYXNrIGluc3RhbGxlZFxuICAgICAgY29uc29sZS5sb2coXCJtZXRhbWFzayBkZXRlY3RlZFwiKTtcbiAgICAgIHdpbmRvdy5ldGhlcmV1bVxuICAgICAgICAucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGFjY291bnRDaGFuZ2VkSGFuZGxlcihyZXN1bHRbMF0pO1xuICAgICAgICB9KTtcbiAgICAgIHNldElzQ29ubmVjdGVkKHRydWUpO1xuICAgICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiaW5zdGFsbCBtZXRhbWFza1wiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWNjb3VudENoYW5nZWRIYW5kbGVyID0gKG5ld0FjY291bnQpID0+IHtcbiAgICAvL3NldCBkZWZhdWx0IGFjY291bnQgdG8gdGhlIGFjY291bnQgdGhhdCBwYXNzZWQgaW5cbiAgICBzZXRXYWxsZXRBZGRyZXNzKG5ld0FjY291bnQpO1xuICAgIGdldFdhbGxldEJhbGFuY2UobmV3QWNjb3VudC50b1N0cmluZygpKTtcbiAgfTtcblxuICBjb25zdCBnZXRXYWxsZXRCYWxhbmNlID0gKGFkZHJlc3MpID0+IHtcbiAgICB3aW5kb3cuZXRoZXJldW1cbiAgICAgIC5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9nZXRCYWxhbmNlXCIsIHBhcmFtczogW2FkZHJlc3MsIFwibGF0ZXN0XCJdIH0pXG4gICAgICAudGhlbigoYmFsYW5jZSkgPT4ge1xuICAgICAgICBzZXRXYWxsZXRCYWxhbmNlKGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihiYWxhbmNlKSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjaGFpbkNoYW5nZWRIYW5kbGVyID0gKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfTtcblxuICAvLyB3aW5kb3cuZXRoZXJldW0ub24oJ2FjY291bnRzQ2hhbmdlZCcsIGFjY291bnRDaGFuZ2VkSGFuZGxlcik7XG5cbiAgLy8gd2luZG93LmV0aGVyZXVtLm9uKCdjaGFpbkNoYW5nZScsIGNoYWluQ2hhbmdlZEhhbmRsZXIpO1xuXG4gIC8qXG4gIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXR3YWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiIFwiKTtcbiAgY29uc3QgW3dhbGxldEJhbGFuY2UsIHNldHdhbGxldEJhbGFuY2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0Nvbm5lY3RlZCwgc2V0SXNDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgY29uc29sZS5sb2coXCJyZXF1ZXN0aW5nIGFjY291bnQuLi5cIik7XG5cbiAgICAvL2NoZWNrIGlmIG1ldGFtYXNrIGV4dGVuc2lvbiBleGlzdHNcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgY29uc29sZS5sb2coXCJtZXRhbWFzayBkZXRlY3RlZFwiKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHNldElzQ29ubmVjdGVkKHRydWUpO1xuICAgICAgICBzZXR3YWxsZXRBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICAgICAgbGV0IGNvbm5lY3RlZFByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKFxuICAgICAgICAgIHdpbmRvdy5ldGhlcmV1bVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBjb25uZWN0aW5nLi5cIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibWV0YW1hc2sgbm90IGRldGVjdGVkXCIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldFdhbGxldEJhbGFuY2UgPSAoYWRkcmVzcykgPT4ge1xuICAgIHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHttZXRob2Q6ICdldGhfZ2V0QmFsYW5jZScsIHBhcmFtczogW2FkZHJlc3MsICdsYXRlc3QnXX0pXG4gICAgLnRoZW4oYmFsYW5jZSA9PiB7XG4gICAgICBzZXRXYWxsZXRCYWxhbmNlKGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihiYWxhbmNlKSk7XG4gICAgfSlcbiAgfTtcbiAgKi9cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNDb25uZWN0ZWQgPyAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtci0yMCBweC01XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtWyNGRjAwOTBdIGJnLXdoaXRlIHJvdW5kZWQtbC1mdWxsIGZvbnQtYm9sZCBweC0yIHB5LTEgei0wIHJpZ2h0LTIwIGJvdHRvbS03IG1yLTIwIFwiPnt3YWxsZXRCYWxhbmNlfSBFVEg8L2gzPlxuICAgICAgICAgIFxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0cnVuY2F0ZSBhYnNvbHV0ZSB0ZXh0LXdoaXRlIGJnLVsjRkYwMDkwXSByb3VuZGVkLWZ1bGwgZm9udC1ib2xkIHB4LTIgcHktMSB3LTQwIHotMTAgYm90dG9tLTcgbXItMlwiPnt3YWxsZXRBZGRyZXNzfTwvaDM+XG4gICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAvLyBocmVmPVwiL1wiXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLVsjRkYwMDkwXSBob3ZlcjpiZy1bI2NjMDI3NF0gdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtYm9sZCBweS0yIHB4LTUgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCh0cnVlKX1cbiAgICAgID5cbiAgICAgICAgQ29ubmVjdCBXYWxsZXRcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICB7LyogXG4gICAgICB7aXNDb25uZWN0ZWQgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPkFkZHJlc3M6e3dhbGxldEFkZHJlc3N9PC9oMz5cbiAgICAgICAgICA8aDM+QmFsYW5jZTp7d2FsbGV0QmFsYW5jZX08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY29ubmVjdCgpfT5jb25uZWN0IHdhbGxldDwvYnV0dG9uPlxuICAgICAgKX1cblxuICAgICAgICovfVxuICAgICBcbiAgICAgIHtzaG93TW9kYWwgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleCBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gZml4ZWQgaW5zZXQtMCB6LTUwIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1hdXRvIG15LTYgbXgtYXV0byBtYXgtdy0zeGxcIj5cbiAgICAgICAgICAgICAgey8qY29udGVudCovfVxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTAgcm91bmRlZC1bMzBweF0gc2hhZG93LWxnIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgdy1mdWxsIGJnLVsjMTcxNzE3XSBweS0yIHB4LTEwIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICB7LypoZWFkZXIqL31cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSBtbC1hdXRvIGJnLXJlZCBib3JkZXItMCB0ZXh0LXJlZCBmbG9hdC1yaWdodCB0ZXh0LTN4bCBsZWFkaW5nLW5vbmUgZm9udC1zZW1pYm9sZCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgdGV4dC1ncmF5LTUwMCAgaC02IHctNiB0ZXh0LTN4bCBibG9jayBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgIMOXXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHB4LTEwIHB5LTVcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBtbC04IFwiPlxuICAgICAgICAgICAgICAgICAgICBDb25uZWN0IHlvdXIgd2FsbGV0XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qYm9keSovfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC01IHB4LTEwXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXRIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bI2YwZjBmMF0gaG92ZXI6YmctWyNjNGM0YzRdIHRleHQtYmxhY2sgdGV4dC0yeGwgZm9udC1ib2xkIHB5LTIgcHgtMTEgcm91bmRlZC14bFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvd2FsbGV0cy9tZXRhbWFzay5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibWV0YW1hc2tcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1sLTMgcHQtMlwiPk1ldGFtYXNrPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTUgbWItNVwiPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bI2YwZjBmMF0gaG92ZXI6YmctWyNjNGM0YzRdIHRleHQtYmxhY2sgdGV4dC0yeGwgZm9udC1ib2xkIHB5LTIgcHgtNSByb3VuZGVkLXhsXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy93YWxsZXRzL3dhbGxldGNvbm5lY3QucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTIgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIndhbGxldC1jb25uZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtbC0yIHB0LTJcIj5XYWxsZXRDb25uZWN0PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZHJvcC1ibHVyLWxnIGZpeGVkIGluc2V0LTAgei00MFwiPjwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2FsbGV0Q2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZXRoZXJzIiwiV2FsbGV0Q2FyZCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsIndhbGxldEFkZHJlc3MiLCJzZXRXYWxsZXRBZGRyZXNzIiwid2FsbGV0QmFsYW5jZSIsInNldFdhbGxldEJhbGFuY2UiLCJpc0Nvbm5lY3RlZCIsInNldElzQ29ubmVjdGVkIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiY29ubmVjdFdhbGxldEhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwidGhlbiIsInJlc3VsdCIsImFjY291bnRDaGFuZ2VkSGFuZGxlciIsIm5ld0FjY291bnQiLCJnZXRXYWxsZXRCYWxhbmNlIiwidG9TdHJpbmciLCJhZGRyZXNzIiwicGFyYW1zIiwiYmFsYW5jZSIsInV0aWxzIiwiZm9ybWF0RXRoZXIiLCJjaGFpbkNoYW5nZWRIYW5kbGVyIiwibG9jYXRpb24iLCJyZWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/pages/connectWallet/walletCard.tsx\n");

/***/ })

});