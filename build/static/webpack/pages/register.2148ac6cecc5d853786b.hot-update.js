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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/ibamhrk/Documents/GitHub/Sando-token/src/pages/register.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Register() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      password = _useState[0],\n      setPassword = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      confirmPass = _useState2[0],\n      setConfirmPass = _useState2[1];\n\n  function getPassword(event) {\n    setPassword(event.target.value);\n    console.log(password);\n  } // function confirmPassword(event) {\n  //   let confirmVal = event.target.value;\n  //   if (password === confirmVal) {\n  //     setConfirmPass(\"Password matched\");\n  //   } else {\n  //     setConfirmPass(\"Invalid password\");\n  //   }\n  // }\n\n\n  function confirmPassword(event) {\n    var val = event.target.value;\n    console.log(confirmPass);\n\n    if (password === val) {\n      console.log(confirmPass);\n      setConfirmPass(\"Matched\"); // setConfirmPass(\"Password matched\");\n    } else {\n      console.log(confirmPass);\n      setConfirmPass(\"Password do not match\");\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"mx-auto bg-gray-200 w-96 h-fit rounded-2xl p-5 text-black\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center pb-3\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n          src: \"/images/sando-logo.png\",\n          alt: \"sando logo image\",\n          className: \"w-12 h-12\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n          className: \"text-2xl text-black font-extrabold\",\n          children: \"SANDO TOKEN\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        className: \"text-xl font-bold\",\n        children: \"Register\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        className: \"pt-3\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Email address\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 5\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            type: \"email\",\n            className: \"mb-3 rounded-2xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 5\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 3\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Username\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 5\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            type: \"text\",\n            className: \"mb-3 rounded-2xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 5\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 3\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 5\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            type: \"password\",\n            id: \"pswrd\",\n            name: \"pswrd\",\n            pattern: \"[a-z]{0,9}\",\n            title: \"Password should be digits (0 to 9) or alphabets (a to z).\",\n            onChange: getPassword,\n            className: \"mb-3 rounded-2xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 5\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 3\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Confirm Password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 5\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            type: \"password\",\n            onChange: confirmPassword,\n            className: \"mb-3 rounded-2xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 5\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 3\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 1\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n        className: \"text-black\",\n        children: [\" \", confirmPass, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 1\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(Register, \"RsZcvpObaC6KZvbVsUfKW+61xlc=\");\n\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\n\nvar _c;\n\n$RefreshReg$(_c, \"Register\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDRTtBQUFNLHFCQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFPLGdCQUFJLEVBQUMsVUFBWjtBQUF1QixvQkFBUSxFQUFFTSxlQUFqQztBQUFrRCxxQkFBUyxFQUFDO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWTSxlQWdDTjtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBLHdCQUE2QlIsV0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaENNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBc0NEOztHQXJFUUg7O0tBQUFBO0FBdUVULCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZWdpc3Rlci50c3g/YTY3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gUmVnaXN0ZXIoKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY29uZmlybVBhc3MsIHNldENvbmZpcm1QYXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGZ1bmN0aW9uIGdldFBhc3N3b3JkKGV2ZW50OiB7IHRhcmdldDogeyB2YWx1ZTogU2V0U3RhdGVBY3Rpb248c3RyaW5nPjsgfTsgfSkge1xuICAgIHNldFBhc3N3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2cocGFzc3dvcmQpO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gY29uZmlybVBhc3N3b3JkKGV2ZW50KSB7XG4gIC8vICAgbGV0IGNvbmZpcm1WYWwgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgLy8gICBpZiAocGFzc3dvcmQgPT09IGNvbmZpcm1WYWwpIHtcbiAgLy8gICAgIHNldENvbmZpcm1QYXNzKFwiUGFzc3dvcmQgbWF0Y2hlZFwiKTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgc2V0Q29uZmlybVBhc3MoXCJJbnZhbGlkIHBhc3N3b3JkXCIpO1xuICAvLyAgIH1cbiAgLy8gfVxuICBmdW5jdGlvbiBjb25maXJtUGFzc3dvcmQoZXZlbnQ6IHsgdGFyZ2V0OiB7IHZhbHVlOiBhbnk7IH07IH0pIHtcbiAgICBsZXQgdmFsID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKGNvbmZpcm1QYXNzKTtcbiAgICBpZiAocGFzc3dvcmQgPT09IHZhbCkge1xuICAgICAgY29uc29sZS5sb2coY29uZmlybVBhc3MpO1xuICAgICAgc2V0Q29uZmlybVBhc3MoXCJNYXRjaGVkXCIpO1xuICAgICAgLy8gc2V0Q29uZmlybVBhc3MoXCJQYXNzd29yZCBtYXRjaGVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhjb25maXJtUGFzcyk7XG4gICAgICBzZXRDb25maXJtUGFzcyhcIlBhc3N3b3JkIGRvIG5vdCBtYXRjaFwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gYmctZ3JheS0yMDAgdy05NiBoLWZpdCByb3VuZGVkLTJ4bCBwLTUgdGV4dC1ibGFja1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHBiLTNcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvc2FuZG8tbG9nby5wbmdcIlxuICAgICAgICAgIGFsdD1cInNhbmRvIGxvZ28gaW1hZ2VcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctMTIgaC0xMlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWJsYWNrIGZvbnQtZXh0cmFib2xkXCI+U0FORE8gVE9LRU48L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+UmVnaXN0ZXI8L2gxPlxuPGZvcm0gY2xhc3NOYW1lPVwicHQtM1wiPlxuICA8bGFiZWw+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5FbWFpbCBhZGRyZXNzPC9zcGFuPlxuICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJtYi0zIHJvdW5kZWQtMnhsIGJnLVsjRUJFQkVCXSBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1bI0M0QzRDNF0gdy1mdWxsIHB5LTIgcHgtNSBtdC0yXCIgLz5cbiAgPC9sYWJlbD5cbiAgPGxhYmVsPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+VXNlcm5hbWU8L3NwYW4+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwibWItMyByb3VuZGVkLTJ4bCBiZy1bI0VCRUJFQl0gZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItWyNDNEM0QzRdIHctZnVsbCBweS0yIHB4LTUgbXQtMlwiIC8+XG4gIDwvbGFiZWw+XG4gIDxsYWJlbD5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPlBhc3N3b3JkPC9zcGFuPlxuICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBzd3JkXCJcbiAgICBuYW1lPVwicHN3cmRcIlxuICAgIHBhdHRlcm49XCJbYS16XXswLDl9XCJcbiAgICB0aXRsZT1cIlBhc3N3b3JkIHNob3VsZCBiZSBkaWdpdHMgKDAgdG8gOSkgb3IgYWxwaGFiZXRzIChhIHRvIHopLlwiIG9uQ2hhbmdlPXtnZXRQYXNzd29yZH0gY2xhc3NOYW1lPVwibWItMyByb3VuZGVkLTJ4bCBiZy1bI0VCRUJFQl0gZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItWyNDNEM0QzRdIHctZnVsbCBweS0yIHB4LTUgbXQtMlwiIC8+XG4gIDwvbGFiZWw+XG4gIDxsYWJlbD5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPkNvbmZpcm0gUGFzc3dvcmQ8L3NwYW4+XG4gICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXtjb25maXJtUGFzc3dvcmR9IGNsYXNzTmFtZT1cIm1iLTMgcm91bmRlZC0yeGwgYmctWyNFQkVCRUJdIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLVsjQzRDNEM0XSB3LWZ1bGwgcHktMiBweC01IG10LTJcIiAvPlxuICA8L2xhYmVsPlxuICBcbjwvZm9ybT5cbjxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+IHtjb25maXJtUGFzc30gPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJlZ2lzdGVyIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNvbmZpcm1QYXNzIiwic2V0Q29uZmlybVBhc3MiLCJnZXRQYXNzd29yZCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiY29uZmlybVBhc3N3b3JkIiwidmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/register.tsx\n");

/***/ })

});