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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/sukonratkanjanasuttiyakorn/Documents/projects/web-sando-token/Sando-token/src/components/pages/connectWallet/walletCard.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar WalletCard = function WalletCard() {\n  _s();\n\n  /*\n  const [errorMessage, setErrorMessage] = useState(null);\n  const [defaultAccount, setDefaultAccount] = useState(null);\n  const [userBalance, setUserBalance] = useState(null);\n  const [connButtonText, setConnectButtonText] = useState(\"Connect Wallet\");\n   const connectWalletHandler = () => {\n    if (window.ethereum) {\n      //metamask installed\n      window.ethereum\n        .request({ method: \"eth_requestAccounts\" })\n        .then((result) => {\n          accountChangedHandler(result[0]);\n        });\n    } else {\n      setErrorMessage('install metamask');\n    }\n  };\n   const accountChangedHandler = (newAccount) => {\n      //set default account to the account that passed in\n      setDefaultAccount(newAccount);\n      getUserBalance(newAccount.toString());\n  };\n   const getUserBalance = (address) => {\n    window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})\n    .then(balance => {\n      setUserBalance(ethers.utils.formatEther(balance));\n    })\n  };\n   const chainChangedHandler = () =>{\n    window.location.reload();\n  }\n   */\n  // window.ethereum.on('accountsChanged', accountChangedHandler);\n  // window.ethereum.on('chainChange', chainChangedHandler);\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\" \"),\n      walletAddress = _useState[0],\n      setwalletAddress = _useState[1];\n\n  function requestAccount() {\n    return _requestAccount.apply(this, arguments);\n  }\n\n  function _requestAccount() {\n    _requestAccount = (0,_Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var accounts;\n      return _Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(\"requesting account...\"); //check if metamask extension exists\n\n              if (!window.ethereum) {\n                _context.next = 15;\n                break;\n              }\n\n              console.log(\"metamask detected\");\n              _context.prev = 3;\n              _context.next = 6;\n              return window.ethereum.request({\n                method: \"eth_requestAccounts\"\n              });\n\n            case 6:\n              accounts = _context.sent;\n              setwalletAddress(accounts[0]);\n              _context.next = 13;\n              break;\n\n            case 10:\n              _context.prev = 10;\n              _context.t0 = _context[\"catch\"](3);\n              console.log(\"error connecting..\");\n\n            case 13:\n              _context.next = 16;\n              break;\n\n            case 15:\n              console.log(\"metamask not detected\");\n\n            case 16:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[3, 10]]);\n    }));\n    return _requestAccount.apply(this, arguments);\n  }\n\n  function connectWallet() {\n    return _connectWallet.apply(this, arguments);\n  }\n\n  function _connectWallet() {\n    _connectWallet = (0,_Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      return _Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (!(typeof window.ethereum !== 'undefined')) {\n                _context2.next = 3;\n                break;\n              }\n\n              _context2.next = 3;\n              return re;\n\n            case 3:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _connectWallet.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n      onClick: requestAccount,\n      children: \"connect wallet\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h3\", {\n        children: [\"Address:\", walletAddress]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(WalletCard, \"mEera/EpRnOhMv+joN2GakY5TOA=\");\n\n_c = WalletCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WalletCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"WalletCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wYWdlcy9jb25uZWN0V2FsbGV0L3dhbGxldENhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUdBLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDdkI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9FO0FBRUE7QUFFQSxrQkFBMENELCtDQUFRLENBQUMsR0FBRCxDQUFsRDtBQUFBLE1BQU9FLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQTNDdUIsV0E2Q1JDLGNBN0NRO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDhaQTZDdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBREYsQ0FHRTs7QUFIRixtQkFJTUMsTUFBTSxDQUFDQyxRQUpiO0FBQUE7QUFBQTtBQUFBOztBQUtJSCxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUxKO0FBQUE7QUFBQSxxQkFRNkJDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFDN0NDLGdCQUFBQSxNQUFNLEVBQUU7QUFEcUMsZUFBeEIsQ0FSN0I7O0FBQUE7QUFRWUMsY0FBQUEsUUFSWjtBQVdNUixjQUFBQSxnQkFBZ0IsQ0FBQ1EsUUFBUSxDQUFDLENBQUQsQ0FBVCxDQUFoQjtBQVhOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBYU1OLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaOztBQWJOO0FBQUE7QUFBQTs7QUFBQTtBQWdCSUQsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7O0FBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBN0N1QjtBQUFBO0FBQUE7O0FBQUEsV0FpRVJNLGFBakVRO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDZaQWlFdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNLLE9BQU9MLE1BQU0sQ0FBQ0MsUUFBZCxLQUEyQixXQURoQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQUVVSyxFQUZWOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBakV1QjtBQUFBO0FBQUE7O0FBdUV2QixzQkFDRTtBQUFBLDRCQVNFO0FBQVEsYUFBTyxFQUFFVCxjQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGLGVBVUU7QUFBQSw2QkFDRTtBQUFBLCtCQUFhRixhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRjtBQUFBLGtCQURGO0FBZ0JELENBdkZEOztHQUFNRDs7S0FBQUE7QUF5Rk4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvY29ubmVjdFdhbGxldC93YWxsZXRDYXJkLnRzeD9lODk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5jb25zdCBXYWxsZXRDYXJkID0gKCkgPT4ge1xuICAvKlxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtkZWZhdWx0QWNjb3VudCwgc2V0RGVmYXVsdEFjY291bnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt1c2VyQmFsYW5jZSwgc2V0VXNlckJhbGFuY2VdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjb25uQnV0dG9uVGV4dCwgc2V0Q29ubmVjdEJ1dHRvblRleHRdID0gdXNlU3RhdGUoXCJDb25uZWN0IFdhbGxldFwiKTtcblxuICBjb25zdCBjb25uZWN0V2FsbGV0SGFuZGxlciA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICAvL21ldGFtYXNrIGluc3RhbGxlZFxuICAgICAgd2luZG93LmV0aGVyZXVtXG4gICAgICAgIC5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgYWNjb3VudENoYW5nZWRIYW5kbGVyKHJlc3VsdFswXSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ2luc3RhbGwgbWV0YW1hc2snKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWNjb3VudENoYW5nZWRIYW5kbGVyID0gKG5ld0FjY291bnQpID0+IHtcbiAgICAgIC8vc2V0IGRlZmF1bHQgYWNjb3VudCB0byB0aGUgYWNjb3VudCB0aGF0IHBhc3NlZCBpblxuICAgICAgc2V0RGVmYXVsdEFjY291bnQobmV3QWNjb3VudCk7XG4gICAgICBnZXRVc2VyQmFsYW5jZShuZXdBY2NvdW50LnRvU3RyaW5nKCkpO1xuICB9O1xuXG4gIGNvbnN0IGdldFVzZXJCYWxhbmNlID0gKGFkZHJlc3MpID0+IHtcbiAgICB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7bWV0aG9kOiAnZXRoX2dldEJhbGFuY2UnLCBwYXJhbXM6IFthZGRyZXNzLCAnbGF0ZXN0J119KVxuICAgIC50aGVuKGJhbGFuY2UgPT4ge1xuICAgICAgc2V0VXNlckJhbGFuY2UoZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKGJhbGFuY2UpKTtcbiAgICB9KVxuICB9O1xuXG4gIGNvbnN0IGNoYWluQ2hhbmdlZEhhbmRsZXIgPSAoKSA9PntcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cblxuICAqL1xuXG4gIC8vIHdpbmRvdy5ldGhlcmV1bS5vbignYWNjb3VudHNDaGFuZ2VkJywgYWNjb3VudENoYW5nZWRIYW5kbGVyKTtcblxuICAvLyB3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlJywgY2hhaW5DaGFuZ2VkSGFuZGxlcik7XG5cbiAgY29uc3QgW3dhbGxldEFkZHJlc3MsIHNldHdhbGxldEFkZHJlc3NdID0gdXNlU3RhdGUoXCIgXCIpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RBY2NvdW50KCkge1xuICAgIGNvbnNvbGUubG9nKFwicmVxdWVzdGluZyBhY2NvdW50Li4uXCIpO1xuXG4gICAgLy9jaGVjayBpZiBtZXRhbWFzayBleHRlbnNpb24gZXhpc3RzXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgY29uc29sZS5sb2coXCJtZXRhbWFzayBkZXRlY3RlZFwiKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHNldHdhbGxldEFkZHJlc3MoYWNjb3VudHNbMF0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBjb25uZWN0aW5nLi5cIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibWV0YW1hc2sgbm90IGRldGVjdGVkXCIpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RXYWxsZXQoKXtcbiAgICBpZih0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgYXdhaXQgcmVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXRIYW5kbGVyfT57Y29ubkJ1dHRvblRleHR9PC9idXR0b24+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+QWRkcmVzczp7ZGVmYXVsdEFjY291bnR9PC9oMz5cbiAgICAgICAgPGgzPkJhbDp7dXNlckJhbGFuY2V9PC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAge2Vycm9yTWVzc2FnZX1cbiAgICAgICovfVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXF1ZXN0QWNjb3VudH0+Y29ubmVjdCB3YWxsZXQ8L2J1dHRvbj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5BZGRyZXNzOnt3YWxsZXRBZGRyZXNzfTwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIldhbGxldENhcmQiLCJ3YWxsZXRBZGRyZXNzIiwic2V0d2FsbGV0QWRkcmVzcyIsInJlcXVlc3RBY2NvdW50IiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImFjY291bnRzIiwiY29ubmVjdFdhbGxldCIsInJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/pages/connectWallet/walletCard.tsx\n");

/***/ })

});