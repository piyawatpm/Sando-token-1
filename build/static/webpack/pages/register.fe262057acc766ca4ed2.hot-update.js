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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/ibamhrk/Documents/GitHub/Sando-token/src/pages/register.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar initialValues = {\n  username: \"\",\n  email: \"\",\n  password: \"\"\n};\n\nvar _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValues),\n    formValue = _useState[0],\n    setFormValues = _useState[1];\n\nvar _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),\n    formErrors = _useState2[0],\n    setFormErrors = _useState2[1];\n\nvar _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    isSubmmited = _useState3[0],\n    setIsSubmitted = _useState3[1];\n\nvar Register = function Register() {\n  _s();\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    password: \"\",\n    confirmedPassword: \"\"\n  }),\n      check = _useState4[0],\n      setCheck = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      error = _useState5[0],\n      setError = _useState5[1];\n\n  var handleInputChange = function handleInputChange(e) {\n    setCheck(_objectSpread(_objectSpread({}, check), {}, (0,_Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, e.target.name, e.target.value)));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setError(check.password !== check.confirmedPassword);\n  }, [check.password, check.confirmedPassword]);\n  console.log(check);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"mx-auto bg-white w-96 h-fit rounded-2xl p-5 text-black\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center pb-3\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n          src: \"/images/sando-logo.png\",\n          alt: \"sando logo image\",\n          className: \"w-12 h-12\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n          className: \"text-2xl text-black font-extrabold\",\n          children: \"SANDO TOKEN\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n        className: \"text-xl font-bold\",\n        children: \"Register\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n        className: \"pt-3\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Email address\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n            type: \"email\",\n            className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Username\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n            type: \"text\",\n            className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n            className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\",\n            name: \"password\",\n            value: check.password,\n            type: \"password\",\n            id: \"password\",\n            onChange: handleInputChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Confirm Password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n            className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\",\n            value: check.confirmedPassword,\n            type: \"password\",\n            name: \"confirmedPassword\",\n            id: \"confirm\",\n            onChange: handleInputChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n          className: \"text-red-400\",\n          children: error ? \"The passwords do not match\" : \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          className: \"mt-5  items-end bg-[#FB8700] hover:bg-[#df7804] text-white text-sm font-bold py-2 px-10 rounded-3xl  \",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Register, \"bq+gyP/GRNdKpbuu95S6zIFa7ZM=\");\n\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\n\nvar _c;\n\n$RefreshReg$(_c, \"Register\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFDRSxxQkFBUyxFQUFDLGdHQURaO0FBRUUsZ0JBQUksRUFBQyxVQUZQO0FBR0UsaUJBQUssRUFBRUEsS0FBSyxDQUFDVCxRQUhmO0FBSUUsZ0JBQUksRUFBQyxVQUpQO0FBS0UsY0FBRSxFQUFDLFVBTEw7QUFNRSxvQkFBUSxFQUFFYTtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsRUFTSyxHQVRMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRixlQTBCRTtBQUFBLGtDQUNFO0FBQU0scUJBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQ0UscUJBQVMsRUFBQyxnR0FEWjtBQUVFLGlCQUFLLEVBQUVKLEtBQUssQ0FBQ0QsaUJBRmY7QUFHRSxnQkFBSSxFQUFDLFVBSFA7QUFJRSxnQkFBSSxFQUFDLG1CQUpQO0FBS0UsY0FBRSxFQUFDLFNBTEw7QUFNRSxvQkFBUSxFQUFFSztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCRixlQXFDRTtBQUFJLG1CQUFTLEVBQUMsY0FBZDtBQUFBLG9CQUNHRixLQUFLLEdBQUcsNEJBQUgsR0FBa0M7QUFEMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQ0YsZUF5Q0U7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLG1CQUFTLEVBQUMsdUdBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBK0RELENBaEZEOztHQUFNSjs7S0FBQUE7QUFrRk4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeD9hNjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbiAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IHsgdXNlcm5hbWU6IFwiXCIsIGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9O1xuXG4gIGNvbnN0IFtmb3JtVmFsdWUsIHNldEZvcm1WYWx1ZXNdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlcyk7XG4gIGNvbnN0IFtmb3JtRXJyb3JzLCBzZXRGb3JtRXJyb3JzXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2lzU3VibW1pdGVkLCBzZXRJc1N1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbmNvbnN0IFJlZ2lzdGVyID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgW2NoZWNrLCBzZXRDaGVja10gPSB1c2VTdGF0ZSh7XG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgY29uZmlybWVkUGFzc3dvcmQ6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0Q2hlY2soe1xuICAgICAgLi4uY2hlY2ssXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RXJyb3IoY2hlY2sucGFzc3dvcmQgIT09IGNoZWNrLmNvbmZpcm1lZFBhc3N3b3JkKTtcbiAgfSwgW2NoZWNrLnBhc3N3b3JkLCBjaGVjay5jb25maXJtZWRQYXNzd29yZF0pO1xuICBjb25zb2xlLmxvZyhjaGVjayk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBiZy13aGl0ZSB3LTk2IGgtZml0IHJvdW5kZWQtMnhsIHAtNSB0ZXh0LWJsYWNrXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcGItM1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvc2FuZG8tbG9nby5wbmdcIlxuICAgICAgICAgICAgYWx0PVwic2FuZG8gbG9nbyBpbWFnZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIGgtMTJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtYmxhY2sgZm9udC1leHRyYWJvbGRcIj5TQU5ETyBUT0tFTjwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj5SZWdpc3RlcjwvaDE+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInB0LTNcIj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPkVtYWlsIGFkZHJlc3M8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMyByb3VuZGVkLTN4bCBiZy1bI0VCRUJFQl0gZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItWyNDNEM0QzRdIHctZnVsbCBweS0yIHB4LTUgbXQtMlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5Vc2VybmFtZTwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTMgcm91bmRlZC0zeGwgYmctWyNFQkVCRUJdIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLVsjQzRDNEM0XSB3LWZ1bGwgcHktMiBweC01IG10LTJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+UGFzc3dvcmQ8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMyByb3VuZGVkLTN4bCBiZy1bI0VCRUJFQl0gZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItWyNDNEM0QzRdIHctZnVsbCBweS0yIHB4LTUgbXQtMlwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtjaGVjay5wYXNzd29yZH1cbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5Db25maXJtIFBhc3N3b3JkPC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTMgcm91bmRlZC0zeGwgYmctWyNFQkVCRUJdIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLVsjQzRDNEM0XSB3LWZ1bGwgcHktMiBweC01IG10LTJcIlxuICAgICAgICAgICAgICB2YWx1ZT17Y2hlY2suY29uZmlybWVkUGFzc3dvcmR9XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtZWRQYXNzd29yZFwiXG4gICAgICAgICAgICAgIGlkPVwiY29uZmlybVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1yZWQtNDAwXCI+XG4gICAgICAgICAgICB7ZXJyb3IgPyBcIlRoZSBwYXNzd29yZHMgZG8gbm90IG1hdGNoXCIgOiBcIlwifVxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTUgIGl0ZW1zLWVuZCBiZy1bI0ZCODcwMF0gaG92ZXI6YmctWyNkZjc4MDRdIHRleHQtd2hpdGUgdGV4dC1zbSBmb250LWJvbGQgcHktMiBweC0xMCByb3VuZGVkLTN4bCAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImluaXRpYWxWYWx1ZXMiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmb3JtVmFsdWUiLCJzZXRGb3JtVmFsdWVzIiwiZm9ybUVycm9ycyIsInNldEZvcm1FcnJvcnMiLCJpc1N1Ym1taXRlZCIsInNldElzU3VibWl0dGVkIiwiUmVnaXN0ZXIiLCJjb25maXJtZWRQYXNzd29yZCIsImNoZWNrIiwic2V0Q2hlY2siLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/register.tsx\n");

/***/ })

});