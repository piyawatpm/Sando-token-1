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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/sukonratkanjanasuttiyakorn/Documents/projects/web-sando-token/Sando-token/src/components/pages/connectWallet/walletCard.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar WalletCard = function WalletCard() {\n  /*\n  const [errorMessage, setErrorMessage] = useState(null);\n  const [defaultAccount, setDefaultAccount] = useState(null);\n  const [userBalance, setUserBalance] = useState(null);\n  const [connButtonText, setConnectButtonText] = useState(\"Connect Wallet\");\n   const connectWalletHandler = () => {\n    if (window.ethereum) {\n      //metamask installed\n      window.ethereum\n        .request({ method: \"eth_requestAccounts\" })\n        .then((result) => {\n          accountChangedHandler(result[0]);\n        });\n    } else {\n      setErrorMessage('install metamask');\n    }\n  };\n   const accountChangedHandler = (newAccount) => {\n      //set default account to the account that passed in\n      setDefaultAccount(newAccount);\n      getUserBalance(newAccount.toString());\n  };\n   const getUserBalance = (address) => {\n    window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})\n    .then(balance => {\n      setUserBalance(ethers.utils.formatEther(balance));\n    })\n  };\n   const chainChangedHandler = () =>{\n    window.location.reload();\n  }\n   */\n  // window.ethereum.on('accountsChanged', accountChangedHandler);\n  // window.ethereum.on('chainChange', chainChangedHandler);\n  function requestAccount() {\n    return _requestAccount.apply(this, arguments);\n  }\n\n  function _requestAccount() {\n    _requestAccount = (0,_Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      return _Users_sukonratkanjanasuttiyakorn_Documents_projects_web_sando_token_Sando_token_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log('requesting account...'); //check if \n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _requestAccount.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n      onClick: requestAccount,\n      children: \"connect wallet\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 1\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h3\", {\n        children: \"Address:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = WalletCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WalletCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"WalletCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wYWdlcy9jb25uZWN0V2FsbGV0L3dhbGxldENhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBR0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUV2QjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0M7QUFFQTtBQTFDd0IsV0EyQ1ZDLGNBM0NVO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDhaQTJDekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixFQURGLENBR0U7O0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0EzQ3lCO0FBQUE7QUFBQTs7QUFpRHZCLHNCQUNFO0FBQUEsNEJBVUo7QUFBUSxhQUFPLEVBQUVGLGNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkksZUFXRTtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGO0FBQUEsa0JBREY7QUFtQkQsQ0FwRUQ7O0tBQU1EO0FBc0VOLCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2Nvbm5lY3RXYWxsZXQvd2FsbGV0Q2FyZC50c3g/ZTg5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7ZXRoZXJzfSBmcm9tIFwiZXRoZXJzXCI7XG5cbmNvbnN0IFdhbGxldENhcmQgPSAoKSA9PiB7XG5cbiAgLypcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZGVmYXVsdEFjY291bnQsIHNldERlZmF1bHRBY2NvdW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdXNlckJhbGFuY2UsIHNldFVzZXJCYWxhbmNlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY29ubkJ1dHRvblRleHQsIHNldENvbm5lY3RCdXR0b25UZXh0XSA9IHVzZVN0YXRlKFwiQ29ubmVjdCBXYWxsZXRcIik7XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgLy9tZXRhbWFzayBpbnN0YWxsZWRcbiAgICAgIHdpbmRvdy5ldGhlcmV1bVxuICAgICAgICAucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGFjY291bnRDaGFuZ2VkSGFuZGxlcihyZXN1bHRbMF0pO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdpbnN0YWxsIG1ldGFtYXNrJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFjY291bnRDaGFuZ2VkSGFuZGxlciA9IChuZXdBY2NvdW50KSA9PiB7XG4gICAgICAvL3NldCBkZWZhdWx0IGFjY291bnQgdG8gdGhlIGFjY291bnQgdGhhdCBwYXNzZWQgaW5cbiAgICAgIHNldERlZmF1bHRBY2NvdW50KG5ld0FjY291bnQpO1xuICAgICAgZ2V0VXNlckJhbGFuY2UobmV3QWNjb3VudC50b1N0cmluZygpKTtcbiAgfTtcblxuICBjb25zdCBnZXRVc2VyQmFsYW5jZSA9IChhZGRyZXNzKSA9PiB7XG4gICAgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe21ldGhvZDogJ2V0aF9nZXRCYWxhbmNlJywgcGFyYW1zOiBbYWRkcmVzcywgJ2xhdGVzdCddfSlcbiAgICAudGhlbihiYWxhbmNlID0+IHtcbiAgICAgIHNldFVzZXJCYWxhbmNlKGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihiYWxhbmNlKSk7XG4gICAgfSlcbiAgfTtcblxuICBjb25zdCBjaGFpbkNoYW5nZWRIYW5kbGVyID0gKCkgPT57XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG5cbiAgKi9cblxuIC8vIHdpbmRvdy5ldGhlcmV1bS5vbignYWNjb3VudHNDaGFuZ2VkJywgYWNjb3VudENoYW5nZWRIYW5kbGVyKTtcblxuIC8vIHdpbmRvdy5ldGhlcmV1bS5vbignY2hhaW5DaGFuZ2UnLCBjaGFpbkNoYW5nZWRIYW5kbGVyKTtcbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RBY2NvdW50KCkge1xuICBjb25zb2xlLmxvZygncmVxdWVzdGluZyBhY2NvdW50Li4uJylcblxuICAvL2NoZWNrIGlmIFxufVxuXG4gIHJldHVybiAoXG4gICAgPD5cblxuICAgIHsvKiBcbiAgICAgIDxidXR0b24gb25DbGljaz17Y29ubmVjdFdhbGxldEhhbmRsZXJ9Pntjb25uQnV0dG9uVGV4dH08L2J1dHRvbj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5BZGRyZXNzOntkZWZhdWx0QWNjb3VudH08L2gzPlxuICAgICAgICA8aDM+QmFsOnt1c2VyQmFsYW5jZX08L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICB7ZXJyb3JNZXNzYWdlfVxuICAgICAgKi99XG48YnV0dG9uIG9uQ2xpY2s9e3JlcXVlc3RBY2NvdW50fT5jb25uZWN0IHdhbGxldDwvYnV0dG9uPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPkFkZHJlc3M6e308L2gzPlxuICAgICAgIFxuICAgICAgPC9kaXY+XG5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJXYWxsZXRDYXJkIiwicmVxdWVzdEFjY291bnQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/pages/connectWallet/walletCard.tsx\n");

/***/ })

});