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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/ibamhrk/Documents/GitHub/Sando-token/src/pages/register.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar initialValues = {\n  username: \"\",\n  email: \"\",\n  password: \"\"\n};\n\nvar _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValues),\n    formValue = _useState[0],\n    setFormValues = _useState[1];\n\nvar _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),\n    formErrors = _useState2[0],\n    setFormErrors = _useState2[1];\n\nvar _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    isSubmmited = _useState3[0],\n    setIsSubmitted = _useState3[1];\n\nvar handleChange = function handleChange(e) {\n  var _e$target = e.target,\n      name = _e$target.name,\n      value = _e$target.value;\n  setFormValues(_objectSpread(_objectSpread({}, formValue), {}, (0,_Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, value)));\n};\n\nvar handleSubmit = function handleSubmit(values) {\n  values.preventDefault();\n  setFormErrors(Validate(formValue));\n  setIsSubmitted(true);\n};\n\nvar Validate = function Validate(values) {\n  var error = {};\n  var regex = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/;\n\n  if (!values.username) {\n    error.sername = \"username is required\";\n  }\n\n  if (!values.email) {\n    error.email = \"email is required\";\n  } else if (!regex.test(values.email)) {\n    error.email = \"not a valid email\";\n  }\n\n  if (!values.password) {\n    error.password = \"password is required\";\n  } else if (!values.password.length === 8) {\n    error.password = \"length of password should be of 8 numbers\";\n  }\n\n  return error;\n};\n\n_c = Validate;\n\nvar Register = function Register() {\n  _s();\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    password: \"\",\n    confirmedPassword: \"\"\n  }),\n      check = _useState4[0],\n      setCheck = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      error = _useState5[0],\n      setError = _useState5[1];\n\n  var handleInputChange = function handleInputChange(e) {\n    setCheck(_objectSpread(_objectSpread({}, check), {}, (0,_Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, e.target.name, e.target.value)));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setError(check.password !== check.confirmedPassword);\n  }, [check.password, check.confirmedPassword]);\n  console.log(check);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"mx-auto bg-white w-96 h-fit rounded-2xl p-5 text-black\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center pb-3\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n          src: \"/images/sando-logo.png\",\n          alt: \"sando logo image\",\n          className: \"w-12 h-12\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n          className: \"text-2xl text-black font-extrabold\",\n          children: \"SANDO TOKEN\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n        className: \"text-xl font-bold\",\n        children: \"Register\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n        className: \"pt-3\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Email address\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n            type: \"email\",\n            className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Username\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n            type: \"text\",\n            className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n            className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\",\n            name: \"password\",\n            value: check.password,\n            type: \"password\",\n            id: \"password\",\n            onChange: handleInputChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Confirm Password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n            className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\",\n            value: check.confirmedPassword,\n            type: \"password\",\n            name: \"confirmedPassword\",\n            id: \"confirm\",\n            onChange: handleInputChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n          className: \"text-red-400\",\n          children: error ? \"The passwords do not match\" : \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          className: \"mt-5  items-end bg-[#FB8700] hover:bg-[#df7804] text-white text-sm font-bold py-2 px-10 rounded-3xl  \",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Register, \"bq+gyP/GRNdKpbuu95S6zIFa7ZM=\");\n\n_c2 = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Validate\");\n$RefreshReg$(_c2, \"Register\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBQUE7QUFrRk4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeD9hNjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSB2YWx1ZXMgPSB7IFxuICB1c2VybmFtZTogc3RyaW5nOyBcbiAgZW1haWw6IHN0cmluZzsgXG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5jb25zdCBpbml0aWFsVmFsdWVzID0geyB1c2VybmFtZTogXCJcIiwgZW1haWw6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH07XG5cbmNvbnN0IFtmb3JtVmFsdWUsIHNldEZvcm1WYWx1ZXNdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlcyk7XG5jb25zdCBbZm9ybUVycm9ycywgc2V0Rm9ybUVycm9yc10gPSB1c2VTdGF0ZSh7fSk7XG5jb25zdCBbaXNTdWJtbWl0ZWQsIHNldElzU3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6YW55KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICBzZXRGb3JtVmFsdWVzKHsgLi4uZm9ybVZhbHVlLCBbbmFtZV06IHZhbHVlIH0pO1xufTtcbmNvbnN0IGhhbmRsZVN1Ym1pdCA9ICh2YWx1ZXM6IHsgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQ7IH0pID0+IHtcbiAgdmFsdWVzLnByZXZlbnREZWZhdWx0KCk7XG4gIHNldEZvcm1FcnJvcnMoVmFsaWRhdGUoZm9ybVZhbHVlKSk7XG4gIHNldElzU3VibWl0dGVkKHRydWUpO1xufTtcblxuY29uc3QgVmFsaWRhdGUgPSAodmFsdWVzOiB7IHVzZXJuYW1lOiBhbnk7IGVtYWlsOiBhbnk7IHBhc3N3b3JkOiBhbnk7IH0pID0+IHtcbiAgY29uc3QgZXJyb3IgPSB7fTtcbiAgY29uc3QgcmVnZXggPSAvXlxcdysoW1xcLi1dP1xcdyspKkBcXHcrKFtcXC4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvO1xuXG4gIGlmICghdmFsdWVzLnVzZXJuYW1lKSB7XG4gICAgZXJyb3Iuc2VybmFtZSA9IFwidXNlcm5hbWUgaXMgcmVxdWlyZWRcIjtcbiAgfVxuICBpZiAoIXZhbHVlcy5lbWFpbCkge1xuICAgIGVycm9yLmVtYWlsID0gXCJlbWFpbCBpcyByZXF1aXJlZFwiO1xuICB9IGVsc2UgaWYgKCFyZWdleC50ZXN0KHZhbHVlcy5lbWFpbCkpIHtcbiAgICBlcnJvci5lbWFpbCA9IFwibm90IGEgdmFsaWQgZW1haWxcIjtcbiAgfVxuICBpZiAoIXZhbHVlcy5wYXNzd29yZCkge1xuICAgIGVycm9yLnBhc3N3b3JkID0gXCJwYXNzd29yZCBpcyByZXF1aXJlZFwiO1xuICB9IGVsc2UgaWYgKCF2YWx1ZXMucGFzc3dvcmQubGVuZ3RoID09PSA4KSB7XG4gICAgZXJyb3IucGFzc3dvcmQgPSBcImxlbmd0aCBvZiBwYXNzd29yZCBzaG91bGQgYmUgb2YgOCBudW1iZXJzXCI7XG4gIH1cblxuICByZXR1cm4gZXJyb3I7XG59O1xuXG5jb25zdCBSZWdpc3RlciA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IFtjaGVjaywgc2V0Q2hlY2tdID0gdXNlU3RhdGUoe1xuICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIGNvbmZpcm1lZFBhc3N3b3JkOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIHNldENoZWNrKHtcbiAgICAgIC4uLmNoZWNrLFxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEVycm9yKGNoZWNrLnBhc3N3b3JkICE9PSBjaGVjay5jb25maXJtZWRQYXNzd29yZCk7XG4gIH0sIFtjaGVjay5wYXNzd29yZCwgY2hlY2suY29uZmlybWVkUGFzc3dvcmRdKTtcbiAgY29uc29sZS5sb2coY2hlY2spO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gYmctd2hpdGUgdy05NiBoLWZpdCByb3VuZGVkLTJ4bCBwLTUgdGV4dC1ibGFja1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHBiLTNcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NhbmRvLWxvZ28ucG5nXCJcbiAgICAgICAgICAgIGFsdD1cInNhbmRvIGxvZ28gaW1hZ2VcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMiBoLTEyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWJsYWNrIGZvbnQtZXh0cmFib2xkXCI+U0FORE8gVE9LRU48L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+UmVnaXN0ZXI8L2gxPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwdC0zXCI+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5FbWFpbCBhZGRyZXNzPC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTMgcm91bmRlZC0zeGwgYmctWyNFQkVCRUJdIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLVsjQzRDNEM0XSB3LWZ1bGwgcHktMiBweC01IG10LTJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+VXNlcm5hbWU8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zIHJvdW5kZWQtM3hsIGJnLVsjRUJFQkVCXSBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1bI0M0QzRDNF0gdy1mdWxsIHB5LTIgcHgtNSBtdC0yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPlBhc3N3b3JkPC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTMgcm91bmRlZC0zeGwgYmctWyNFQkVCRUJdIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLVsjQzRDNEM0XSB3LWZ1bGwgcHktMiBweC01IG10LTJcIlxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT17Y2hlY2sucGFzc3dvcmR9XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+Q29uZmlybSBQYXNzd29yZDwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zIHJvdW5kZWQtM3hsIGJnLVsjRUJFQkVCXSBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1bI0M0QzRDNF0gdy1mdWxsIHB5LTIgcHgtNSBtdC0yXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2NoZWNrLmNvbmZpcm1lZFBhc3N3b3JkfVxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybWVkUGFzc3dvcmRcIlxuICAgICAgICAgICAgICBpZD1cImNvbmZpcm1cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtcmVkLTQwMFwiPlxuICAgICAgICAgICAge2Vycm9yID8gXCJUaGUgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiIDogXCJcIn1cbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC01ICBpdGVtcy1lbmQgYmctWyNGQjg3MDBdIGhvdmVyOmJnLVsjZGY3ODA0XSB0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1ib2xkIHB5LTIgcHgtMTAgcm91bmRlZC0zeGwgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpbml0aWFsVmFsdWVzIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZm9ybVZhbHVlIiwic2V0Rm9ybVZhbHVlcyIsImZvcm1FcnJvcnMiLCJzZXRGb3JtRXJyb3JzIiwiaXNTdWJtbWl0ZWQiLCJzZXRJc1N1Ym1pdHRlZCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJ2YWx1ZXMiLCJwcmV2ZW50RGVmYXVsdCIsIlZhbGlkYXRlIiwiZXJyb3IiLCJyZWdleCIsInNlcm5hbWUiLCJ0ZXN0IiwibGVuZ3RoIiwiUmVnaXN0ZXIiLCJjb25maXJtZWRQYXNzd29yZCIsImNoZWNrIiwic2V0Q2hlY2siLCJzZXRFcnJvciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/register.tsx\n");

/***/ })

});