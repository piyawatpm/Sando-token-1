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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/sukonratkanjanasuttiyakorn/Documents/projects/web-sando-token/Sando-token/src/components/pages/connectWallet/walletCard.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar WalletCard = function WalletCard() {\n  _s();\n\n  /*\n  const [errorMessage, setErrorMessage] = useState(null);\n  const [defaultAccount, setDefaultAccount] = useState(null);\n  const [userBalance, setUserBalance] = useState(null);\n  const [connButtonText, setConnectButtonText] = useState(\"Connect Wallet\");\n   const connectWalletHandler = () => {\n    if (window.ethereum) {\n      //metamask installed\n      window.ethereum\n        .request({ method: \"eth_requestAccounts\" })\n        .then((result) => {\n          accountChangedHandler(result[0]);\n        });\n    } else {\n      setErrorMessage('install metamask');\n    }\n  };\n   const accountChangedHandler = (newAccount) => {\n      //set default account to the account that passed in\n      setDefaultAccount(newAccount);\n      getUserBalance(newAccount.toString());\n  };\n   const getUserBalance = (address) => {\n    window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})\n    .then(balance => {\n      setUserBalance(ethers.utils.formatEther(balance));\n    })\n  };\n   const chainChangedHandler = () =>{\n    window.location.reload();\n  }\n   */\n  // window.ethereum.on('accountsChanged', accountChangedHandler);\n  // window.ethereum.on('chainChange', chainChangedHandler);\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\" \"),\n      walletAddress = _useState[0],\n      setwalletAddress = _useState[1];\n\n  function requestAccount() {\n    return _requestAccount.apply(this, arguments);\n  }\n\n  function _requestAccount() {\n    _requestAccount = (0,_Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var accounts;\n      return _Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(\"requesting account...\"); //check if metamask extension exists\n\n              if (!window.ethereum) {\n                _context.next = 15;\n                break;\n              }\n\n              console.log(\"metamask detected\");\n              _context.prev = 3;\n              _context.next = 6;\n              return window.ethereum.request({\n                method: \"eth_requestAccounts\"\n              });\n\n            case 6:\n              accounts = _context.sent;\n              setwalletAddress(accounts[0]);\n              _context.next = 13;\n              break;\n\n            case 10:\n              _context.prev = 10;\n              _context.t0 = _context[\"catch\"](3);\n              console.log(\"error connecting..\");\n\n            case 13:\n              _context.next = 16;\n              break;\n\n            case 15:\n              console.log(\"metamask not detected\");\n\n            case 16:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[3, 10]]);\n    }));\n    return _requestAccount.apply(this, arguments);\n  }\n\n  function connectWallet() {\n    return _connectWallet.apply(this, arguments);\n  }\n\n  function _connectWallet() {\n    _connectWallet = (0,_Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var provider;\n      return _Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (!(typeof window.ethereum !== 'undefined')) {\n                _context2.next = 4;\n                break;\n              }\n\n              _context2.next = 3;\n              return requestAccount();\n\n            case 3:\n              provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider();\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _connectWallet.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n      onClick: requestAccount,\n      children: \"connect wallet\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h3\", {\n        children: [\"Address:\", walletAddress]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(WalletCard, \"mEera/EpRnOhMv+joN2GakY5TOA=\");\n\n_c = WalletCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WalletCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"WalletCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wYWdlcy9jb25uZWN0V2FsbGV0L3dhbGxldENhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7OztBQUVBLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDdkI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9FO0FBRUE7QUFFQSxrQkFBMENGLCtDQUFRLENBQUMsR0FBRCxDQUFsRDtBQUFBLE1BQU9HLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQTNDdUIsV0E2Q1JDLGNBN0NRO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDhaQTZDdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBREYsQ0FHRTs7QUFIRixtQkFJTUMsTUFBTSxDQUFDQyxRQUpiO0FBQUE7QUFBQTtBQUFBOztBQUtJSCxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUxKO0FBQUE7QUFBQSxxQkFRNkJDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFDN0NDLGdCQUFBQSxNQUFNLEVBQUU7QUFEcUMsZUFBeEIsQ0FSN0I7O0FBQUE7QUFRWUMsY0FBQUEsUUFSWjtBQVdNUixjQUFBQSxnQkFBZ0IsQ0FBQ1EsUUFBUSxDQUFDLENBQUQsQ0FBVCxDQUFoQjtBQVhOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBYU1OLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaOztBQWJOO0FBQUE7QUFBQTs7QUFBQTtBQWdCSUQsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7O0FBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBN0N1QjtBQUFBO0FBQUE7O0FBQUEsV0FpRVJNLGFBakVRO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDZaQWlFdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ0ssT0FBT0wsTUFBTSxDQUFDQyxRQUFkLEtBQTJCLFdBRGhDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBRVVKLGNBQWMsRUFGeEI7O0FBQUE7QUFJVVMsY0FBQUEsUUFKVixHQUlxQixJQUFJYixpRUFBSixFQUpyQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWpFdUI7QUFBQTtBQUFBOztBQXlFdkIsc0JBQ0U7QUFBQSw0QkFTRTtBQUFRLGFBQU8sRUFBRUksY0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURixlQVVFO0FBQUEsNkJBQ0U7QUFBQSwrQkFBYUYsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkY7QUFBQSxrQkFERjtBQWdCRCxDQXpGRDs7R0FBTUQ7O0tBQUFBO0FBMkZOLCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2Nvbm5lY3RXYWxsZXQvd2FsbGV0Q2FyZC50c3g/ZTg5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcblxuY29uc3QgV2FsbGV0Q2FyZCA9ICgpID0+IHtcbiAgLypcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZGVmYXVsdEFjY291bnQsIHNldERlZmF1bHRBY2NvdW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdXNlckJhbGFuY2UsIHNldFVzZXJCYWxhbmNlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY29ubkJ1dHRvblRleHQsIHNldENvbm5lY3RCdXR0b25UZXh0XSA9IHVzZVN0YXRlKFwiQ29ubmVjdCBXYWxsZXRcIik7XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgLy9tZXRhbWFzayBpbnN0YWxsZWRcbiAgICAgIHdpbmRvdy5ldGhlcmV1bVxuICAgICAgICAucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGFjY291bnRDaGFuZ2VkSGFuZGxlcihyZXN1bHRbMF0pO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdpbnN0YWxsIG1ldGFtYXNrJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFjY291bnRDaGFuZ2VkSGFuZGxlciA9IChuZXdBY2NvdW50KSA9PiB7XG4gICAgICAvL3NldCBkZWZhdWx0IGFjY291bnQgdG8gdGhlIGFjY291bnQgdGhhdCBwYXNzZWQgaW5cbiAgICAgIHNldERlZmF1bHRBY2NvdW50KG5ld0FjY291bnQpO1xuICAgICAgZ2V0VXNlckJhbGFuY2UobmV3QWNjb3VudC50b1N0cmluZygpKTtcbiAgfTtcblxuICBjb25zdCBnZXRVc2VyQmFsYW5jZSA9IChhZGRyZXNzKSA9PiB7XG4gICAgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe21ldGhvZDogJ2V0aF9nZXRCYWxhbmNlJywgcGFyYW1zOiBbYWRkcmVzcywgJ2xhdGVzdCddfSlcbiAgICAudGhlbihiYWxhbmNlID0+IHtcbiAgICAgIHNldFVzZXJCYWxhbmNlKGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihiYWxhbmNlKSk7XG4gICAgfSlcbiAgfTtcblxuICBjb25zdCBjaGFpbkNoYW5nZWRIYW5kbGVyID0gKCkgPT57XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG5cbiAgKi9cblxuICAvLyB3aW5kb3cuZXRoZXJldW0ub24oJ2FjY291bnRzQ2hhbmdlZCcsIGFjY291bnRDaGFuZ2VkSGFuZGxlcik7XG5cbiAgLy8gd2luZG93LmV0aGVyZXVtLm9uKCdjaGFpbkNoYW5nZScsIGNoYWluQ2hhbmdlZEhhbmRsZXIpO1xuXG4gIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXR3YWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiIFwiKTtcblxuICBhc3luYyBmdW5jdGlvbiByZXF1ZXN0QWNjb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyhcInJlcXVlc3RpbmcgYWNjb3VudC4uLlwiKTtcblxuICAgIC8vY2hlY2sgaWYgbWV0YW1hc2sgZXh0ZW5zaW9uIGV4aXN0c1xuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibWV0YW1hc2sgZGV0ZWN0ZWRcIik7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICAgIH0pO1xuICAgICAgICBzZXR3YWxsZXRBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgY29ubmVjdGluZy4uXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm1ldGFtYXNrIG5vdCBkZXRlY3RlZFwiKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjb25uZWN0V2FsbGV0KCl7XG4gICAgaWYodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGF3YWl0IHJlcXVlc3RBY2NvdW50KCk7XG5cbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0V2FsbGV0SGFuZGxlcn0+e2Nvbm5CdXR0b25UZXh0fTwvYnV0dG9uPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPkFkZHJlc3M6e2RlZmF1bHRBY2NvdW50fTwvaDM+XG4gICAgICAgIDxoMz5CYWw6e3VzZXJCYWxhbmNlfTwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICAqL31cbiAgICAgIDxidXR0b24gb25DbGljaz17cmVxdWVzdEFjY291bnR9PmNvbm5lY3Qgd2FsbGV0PC9idXR0b24+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+QWRkcmVzczp7d2FsbGV0QWRkcmVzc308L2gzPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYWxsZXRDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJXYWxsZXRDYXJkIiwid2FsbGV0QWRkcmVzcyIsInNldHdhbGxldEFkZHJlc3MiLCJyZXF1ZXN0QWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJhY2NvdW50cyIsImNvbm5lY3RXYWxsZXQiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/pages/connectWallet/walletCard.tsx\n");

/***/ })

});