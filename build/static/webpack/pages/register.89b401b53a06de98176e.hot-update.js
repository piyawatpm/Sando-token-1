"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/ibamhrk/Documents/GitHub/Sando-token/src/pages/register.tsx\",\n    _s = $RefreshSig$();\n\n // Declare password strength type\n\n\n\n\nfunction Register() {\n  _s();\n\n  // The password\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      password = _useState[0],\n      setPassword = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"Very Weak\"),\n      passwordStrength = _useState2[0],\n      setPasswordStrength = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      isButtonDisabled = _useState3[0],\n      setIsButtonDisabled = _useState3[1]; // This function will be triggered when the password input field changes\n\n\n  var inputHandler = function inputHandler(event) {\n    var enteredValue = event.target.value.trim();\n    setPassword(enteredValue);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (password.length <= 4) {\n      setPasswordStrength(\"Very Weak\");\n      setIsButtonDisabled(true);\n    } else if (password.length <= 6) {\n      setPasswordStrength(\"Weak\");\n      setIsButtonDisabled(true);\n    } else if (password.length <= 8) {\n      setPasswordStrength(\"Medium\");\n    } else if (password.length <= 12) {\n      setPasswordStrength(\"Strong\");\n      setIsButtonDisabled(false);\n    } else {\n      setPasswordStrength(\"Very Strong\");\n      setIsButtonDisabled(false);\n    }\n  }, [password]); // Button handler function\n\n  var buttonHandler = function buttonHandler() {\n    alert(\"You have entered a strong enough password\"); // Do otehr things here\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"mx-auto bg-gray-200 w-96 h-fit rounded-2xl p-5 text-black\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center pb-3\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n          src: \"/images/sando-logo.png\",\n          alt: \"sando logo image\",\n          className: \"w-12 h-12\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n          className: \"text-2xl text-black font-extrabold\",\n          children: \"SANDO TOKEN\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        className: \"text-xl font-bold\",\n        children: \"Register\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        className: \"pt-3\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Email address\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 5\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            type: \"email\",\n            className: \"mb-3 rounded-2xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 5\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 3\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Username\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 5\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            type: \"text\",\n            className: \"mb-3 rounded-2xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 5\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 3\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 5\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            type: \"password\",\n            value: password,\n            onChange: inputHandler,\n            className: \"mb-3 rounded-2xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 5\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 3\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Confirm Password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 5\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            type: \"password\",\n            className: \"mb-3 rounded-2xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 5\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 3\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 1\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(Register, \"TbpmyEyufkGD5GHsQ878ZFnzfNo=\");\n\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\n\nvar _c;\n\n$RefreshReg$(_c, \"Register\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQixxQkFBUyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLGVBU0U7QUFBQSxrQ0FDRTtBQUFNLHFCQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFPLGdCQUFJLEVBQUMsVUFBWjtBQUF1QixpQkFBSyxFQUFFZCxRQUE5QjtBQUNJLG9CQUFRLEVBQUVNLFlBRGQ7QUFDNEIscUJBQVMsRUFBQztBQUR0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURixlQWNFO0FBQUEsa0NBQ0U7QUFBTSxxQkFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBTyxnQkFBSSxFQUFDLFVBQVo7QUFBdUIscUJBQVMsRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWtDRDs7R0F4RVFQOztLQUFBQTtBQTBFVCwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcmVnaXN0ZXIudHN4P2E2N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gRGVjbGFyZSBwYXNzd29yZCBzdHJlbmd0aCB0eXBlXG50eXBlIFBhc3N3b3JkU3RyZW5ndGggPVxuICB8IFwiVmVyeSBXZWFrXCJcbiAgfCBcIldlYWtcIlxuICB8IFwiTWVkaXVtXCJcbiAgfCBcIlN0cm9uZ1wiXG4gIHwgXCJWZXJ5IFN0cm9uZ1wiO1xuXG5mdW5jdGlvbiBSZWdpc3RlcigpOiBKU1guRWxlbWVudCB7XG5cbiAgLy8gVGhlIHBhc3N3b3JkXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkU3RyZW5ndGgsIHNldFBhc3N3b3JkU3RyZW5ndGhdID1cbiAgICB1c2VTdGF0ZTxQYXNzd29yZFN0cmVuZ3RoPihcIlZlcnkgV2Vha1wiKTtcbiAgY29uc3QgW2lzQnV0dG9uRGlzYWJsZWQsIHNldElzQnV0dG9uRGlzYWJsZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBwYXNzd29yZCBpbnB1dCBmaWVsZCBjaGFuZ2VzXG4gIGNvbnN0IGlucHV0SGFuZGxlciA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBlbnRlcmVkVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudHJpbSgpO1xuICAgIHNldFBhc3N3b3JkKGVudGVyZWRWYWx1ZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGFzc3dvcmQubGVuZ3RoIDw9IDQpIHtcbiAgICAgIHNldFBhc3N3b3JkU3RyZW5ndGgoXCJWZXJ5IFdlYWtcIik7XG4gICAgICBzZXRJc0J1dHRvbkRpc2FibGVkKHRydWUpO1xuICAgIH0gZWxzZSBpZiAocGFzc3dvcmQubGVuZ3RoIDw9IDYpIHtcbiAgICAgIHNldFBhc3N3b3JkU3RyZW5ndGgoXCJXZWFrXCIpO1xuICAgICAgc2V0SXNCdXR0b25EaXNhYmxlZCh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHBhc3N3b3JkLmxlbmd0aCA8PSA4KSB7XG4gICAgICBzZXRQYXNzd29yZFN0cmVuZ3RoKFwiTWVkaXVtXCIpO1xuICAgIH0gZWxzZSBpZiAocGFzc3dvcmQubGVuZ3RoIDw9IDEyKSB7XG4gICAgICBzZXRQYXNzd29yZFN0cmVuZ3RoKFwiU3Ryb25nXCIpO1xuICAgICAgc2V0SXNCdXR0b25EaXNhYmxlZChmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFBhc3N3b3JkU3RyZW5ndGgoXCJWZXJ5IFN0cm9uZ1wiKTtcbiAgICAgIHNldElzQnV0dG9uRGlzYWJsZWQoZmFsc2UpO1xuICAgIH1cbiAgfSwgW3Bhc3N3b3JkXSk7XG5cbiAgLy8gQnV0dG9uIGhhbmRsZXIgZnVuY3Rpb25cbiAgY29uc3QgYnV0dG9uSGFuZGxlciA9ICgpID0+IHtcbiAgICBhbGVydChcIllvdSBoYXZlIGVudGVyZWQgYSBzdHJvbmcgZW5vdWdoIHBhc3N3b3JkXCIpO1xuICAgIC8vIERvIG90ZWhyIHRoaW5ncyBoZXJlXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGJnLWdyYXktMjAwIHctOTYgaC1maXQgcm91bmRlZC0yeGwgcC01IHRleHQtYmxhY2tcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwYi0zXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NhbmRvLWxvZ28ucG5nXCJcbiAgICAgICAgICBhbHQ9XCJzYW5kbyBsb2dvIGltYWdlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIGgtMTJcIlxuICAgICAgICAvPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ibGFjayBmb250LWV4dHJhYm9sZFwiPlNBTkRPIFRPS0VOPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPlJlZ2lzdGVyPC9oMT5cbjxmb3JtIGNsYXNzTmFtZT1cInB0LTNcIj5cbiAgPGxhYmVsPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+RW1haWwgYWRkcmVzczwvc3Bhbj5cbiAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwibWItMyByb3VuZGVkLTJ4bCBiZy1bI0VCRUJFQl0gZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItWyNDNEM0QzRdIHctZnVsbCBweS0yIHB4LTUgbXQtMlwiIC8+XG4gIDwvbGFiZWw+XG4gIDxsYWJlbD5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPlVzZXJuYW1lPC9zcGFuPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cIm1iLTMgcm91bmRlZC0yeGwgYmctWyNFQkVCRUJdIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLVsjQzRDNEM0XSB3LWZ1bGwgcHktMiBweC01IG10LTJcIiAvPlxuICA8L2xhYmVsPlxuICA8bGFiZWw+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5QYXNzd29yZDwvc3Bhbj5cbiAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICBvbkNoYW5nZT17aW5wdXRIYW5kbGVyfSBjbGFzc05hbWU9XCJtYi0zIHJvdW5kZWQtMnhsIGJnLVsjRUJFQkVCXSBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1bI0M0QzRDNF0gdy1mdWxsIHB5LTIgcHgtNSBtdC0yXCIgLz5cbiAgPC9sYWJlbD5cbiAgPGxhYmVsPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+Q29uZmlybSBQYXNzd29yZDwvc3Bhbj5cbiAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwibWItMyByb3VuZGVkLTJ4bCBiZy1bI0VCRUJFQl0gZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItWyNDNEM0QzRdIHctZnVsbCBweS0yIHB4LTUgbXQtMlwiIC8+XG4gIDwvbGFiZWw+XG48L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlZ2lzdGVyIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkU3RyZW5ndGgiLCJzZXRQYXNzd29yZFN0cmVuZ3RoIiwiaXNCdXR0b25EaXNhYmxlZCIsInNldElzQnV0dG9uRGlzYWJsZWQiLCJpbnB1dEhhbmRsZXIiLCJldmVudCIsImVudGVyZWRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsImxlbmd0aCIsImJ1dHRvbkhhbmRsZXIiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/register.tsx\n");

/***/ })

});