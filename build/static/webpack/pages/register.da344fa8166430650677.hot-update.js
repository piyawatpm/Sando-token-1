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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/ibamhrk/Documents/GitHub/Sando-token/src/pages/register.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar Register = function Register() {\n  _s();\n\n  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({\n    defaultValues: {\n      email: \"\",\n      username: \"\",\n      password: \"\",\n      confirmedPassword: \"\",\n      example: \"\",\n      exampleRequired: \"\"\n    }\n  }),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      watch = _useForm.watch,\n      errors = _useForm.formState.errors;\n\n  console.log(watch(\"email\")); // you can watch individual input by pass the name of the input\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    password: \"\",\n    confirmedPassword: \"\"\n  }),\n      check = _useState[0],\n      setCheck = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  var handleInputChange = function handleInputChange(e) {\n    setCheck(_objectSpread(_objectSpread({}, check), {}, (0,_Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, e.target.name, e.target.value)));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setError(check.password !== check.confirmedPassword);\n  }, [check.password, check.confirmedPassword]);\n  console.log(check);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"mx-auto bg-white w-96 h-fit rounded-2xl p-5 text-black\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center pb-3\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n          src: \"/images/sando-logo.png\",\n          alt: \"sando logo image\",\n          className: \"w-12 h-12\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n          className: \"text-2xl text-black font-extrabold\",\n          children: \"SANDO TOKEN\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n        className: \"text-xl font-bold\",\n        children: \"Register\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n        className: \"pt-3\",\n        onSubmit: handleSubmit(function (data) {\n          alert(JSON.stringify(data));\n        }),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Email address\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", _objectSpread(_objectSpread({}, register(\"email\", {\n            required: true\n          })), {}, {\n            type: \"email\",\n            className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\"\n          }), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, _this), errors.email && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            children: \"This field is required\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 30\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Username\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", _objectSpread(_objectSpread({}, register(\"username\", {\n            required: true\n          })), {}, {\n            type: \"text\",\n            className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\"\n          }), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 13\n          }, _this), errors.username && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            children: \"This field is required\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 33\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", _objectSpread(_objectSpread({}, register(\"password\", {\n            required: true\n          })), {}, {\n            className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\",\n            name: \"password\",\n            value: check.password,\n            type: \"password\",\n            id: \"password\",\n            onChange: handleInputChange\n          }), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this), errors.password && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            children: \"This field is required\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 33\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n            className: \"font-normal\",\n            children: \"Confirm Password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", _objectSpread(_objectSpread({}, register(\"confirmedPassword\", {\n            required: true\n          })), {}, {\n            className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\",\n            value: check.confirmedPassword,\n            type: \"password\",\n            name: \"confirmedPassword\",\n            id: \"confirm\",\n            onChange: handleInputChange\n          }), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, _this), errors.confirmedPassword && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            children: \"This field is required\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 42\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n          className: \"text-red-400\",\n          children: error ? \"The passwords do not match\" : \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          className: \"mt-5  items-end bg-[#FB8700] hover:bg-[#df7804] text-white text-sm font-bold py-2 px-10 rounded-3xl  \",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Register, \"zwZmfQF3TevsQTcyUxDJMGOIXl4=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm];\n});\n\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\n\nvar _c;\n\n$RefreshReg$(_c, \"Register\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVnaXN0ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7QUFFQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFtQjtBQUFBOztBQUNsQyxpQkFLSUQsd0RBQU8sQ0FBQztBQUNWRSxJQUFBQSxhQUFhLEVBQUU7QUFDYkMsTUFBQUEsS0FBSyxFQUFFLEVBRE07QUFFYkMsTUFBQUEsUUFBUSxFQUFFLEVBRkc7QUFHYkMsTUFBQUEsUUFBUSxFQUFFLEVBSEc7QUFJYkMsTUFBQUEsaUJBQWlCLEVBQUUsRUFKTjtBQUtiQyxNQUFBQSxPQUFPLEVBQUUsRUFMSTtBQU1iQyxNQUFBQSxlQUFlLEVBQUU7QUFOSjtBQURMLEdBQUQsQ0FMWDtBQUFBLE1BQ0VDLFFBREYsWUFDRUEsUUFERjtBQUFBLE1BRUVDLFlBRkYsWUFFRUEsWUFGRjtBQUFBLE1BR0VDLEtBSEYsWUFHRUEsS0FIRjtBQUFBLE1BSWVDLE1BSmYsWUFJRUMsU0FKRixDQUllRCxNQUpmOztBQWdCQUUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQUssQ0FBQyxPQUFELENBQWpCLEVBakJrQyxDQWlCTDs7QUFFN0Isa0JBQTBCYiwrQ0FBUSxDQUFDO0FBQ2pDTyxJQUFBQSxRQUFRLEVBQUUsRUFEdUI7QUFFakNDLElBQUFBLGlCQUFpQixFQUFFO0FBRmMsR0FBRCxDQUFsQztBQUFBLE1BQU9VLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUlBLG1CQUEwQm5CLCtDQUFRLENBQUMsS0FBRCxDQUFsQztBQUFBLE1BQU9vQixLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLENBQUQsRUFBWTtBQUNwQ0osSUFBQUEsUUFBUSxpQ0FDSEQsS0FERyx3S0FFTEssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBRkosRUFFV0YsQ0FBQyxDQUFDQyxNQUFGLENBQVNFLEtBRnBCLEdBQVI7QUFJRCxHQUxEOztBQU9BekIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RvQixJQUFBQSxRQUFRLENBQUNILEtBQUssQ0FBQ1gsUUFBTixLQUFtQlcsS0FBSyxDQUFDVixpQkFBMUIsQ0FBUjtBQUNELEdBRlEsRUFFTixDQUFDVSxLQUFLLENBQUNYLFFBQVAsRUFBaUJXLEtBQUssQ0FBQ1YsaUJBQXZCLENBRk0sQ0FBVDtBQUdBUSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWjtBQUVBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsd0RBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsdUNBQWY7QUFBQSxnQ0FDRTtBQUNFLGFBQUcsRUFBQyx3QkFETjtBQUVFLGFBQUcsRUFBQyxrQkFGTjtBQUdFLG1CQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUU7QUFBSSxtQkFBUyxFQUFDLG9DQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBU0U7QUFBSSxpQkFBUyxFQUFDLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEYsZUFVRTtBQUNFLGlCQUFTLEVBQUMsTUFEWjtBQUVFLGdCQUFRLEVBQUVOLFlBQVksQ0FBQyxVQUFDZSxJQUFELEVBQVU7QUFDL0JDLFVBQUFBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVILElBQWYsQ0FBRCxDQUFMO0FBQ0QsU0FGcUIsQ0FGeEI7QUFBQSxnQ0FNRTtBQUFBLGtDQUNFO0FBQU0scUJBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHVHQUNNaEIsUUFBUSxDQUFDLE9BQUQsRUFBVTtBQUFFb0IsWUFBQUEsUUFBUSxFQUFFO0FBQVosV0FBVixDQURkO0FBRUUsZ0JBQUksRUFBQyxPQUZQO0FBR0UscUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsRUFPR2pCLE1BQU0sQ0FBQ1QsS0FBUCxpQkFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQWVFO0FBQUEsa0NBQ0U7QUFBTSxxQkFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsdUdBQ01NLFFBQVEsQ0FBQyxVQUFELEVBQWE7QUFBRW9CLFlBQUFBLFFBQVEsRUFBRTtBQUFaLFdBQWIsQ0FEZDtBQUVFLGdCQUFJLEVBQUMsTUFGUDtBQUdFLHFCQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLEVBT0dqQixNQUFNLENBQUNSLFFBQVAsaUJBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVB0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsZUF3QkU7QUFBQSxrQ0FDRTtBQUFNLHFCQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSx1R0FDTUssUUFBUSxDQUFDLFVBQUQsRUFBYTtBQUFFb0IsWUFBQUEsUUFBUSxFQUFFO0FBQVosV0FBYixDQURkO0FBRUUscUJBQVMsRUFBQyxnR0FGWjtBQUdFLGdCQUFJLEVBQUMsVUFIUDtBQUlFLGlCQUFLLEVBQUViLEtBQUssQ0FBQ1gsUUFKZjtBQUtFLGdCQUFJLEVBQUMsVUFMUDtBQU1FLGNBQUUsRUFBQyxVQU5MO0FBT0Usb0JBQVEsRUFBRWU7QUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLEVBV0dSLE1BQU0sQ0FBQ1AsUUFBUCxpQkFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4QkYsZUFxQ0U7QUFBQSxrQ0FDRTtBQUFNLHFCQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSx1R0FDTUksUUFBUSxDQUFDLG1CQUFELEVBQXNCO0FBQUVvQixZQUFBQSxRQUFRLEVBQUU7QUFBWixXQUF0QixDQURkO0FBRUUscUJBQVMsRUFBQyxnR0FGWjtBQUdFLGlCQUFLLEVBQUViLEtBQUssQ0FBQ1YsaUJBSGY7QUFJRSxnQkFBSSxFQUFDLFVBSlA7QUFLRSxnQkFBSSxFQUFDLG1CQUxQO0FBTUUsY0FBRSxFQUFDLFNBTkw7QUFPRSxvQkFBUSxFQUFFYztBQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsRUFXR1IsTUFBTSxDQUFDTixpQkFBUCxpQkFBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQ0YsZUFrREU7QUFBSSxtQkFBUyxFQUFDLGNBQWQ7QUFBQSxvQkFDR1ksS0FBSyxHQUFHLDRCQUFILEdBQWtDO0FBRDFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbERGLGVBdURFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxtQkFBUyxFQUFDLHVHQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTZFRCxDQWpIRDs7R0FBTWpCO1VBTUFEOzs7S0FOQUM7QUFtSE4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeD9hNjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5cbmNvbnN0IFJlZ2lzdGVyID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICB3YXRjaCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtKHtcbiAgICBkZWZhdWx0VmFsdWVzOiB7XG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICBjb25maXJtZWRQYXNzd29yZDogXCJcIixcbiAgICAgIGV4YW1wbGU6IFwiXCIsXG4gICAgICBleGFtcGxlUmVxdWlyZWQ6IFwiXCIsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2cod2F0Y2goXCJlbWFpbFwiKSk7IC8vIHlvdSBjYW4gd2F0Y2ggaW5kaXZpZHVhbCBpbnB1dCBieSBwYXNzIHRoZSBuYW1lIG9mIHRoZSBpbnB1dFxuXG4gIGNvbnN0IFtjaGVjaywgc2V0Q2hlY2tdID0gdXNlU3RhdGUoe1xuICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIGNvbmZpcm1lZFBhc3N3b3JkOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIHNldENoZWNrKHtcbiAgICAgIC4uLmNoZWNrLFxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEVycm9yKGNoZWNrLnBhc3N3b3JkICE9PSBjaGVjay5jb25maXJtZWRQYXNzd29yZCk7XG4gIH0sIFtjaGVjay5wYXNzd29yZCwgY2hlY2suY29uZmlybWVkUGFzc3dvcmRdKTtcbiAgY29uc29sZS5sb2coY2hlY2spO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBiZy13aGl0ZSB3LTk2IGgtZml0IHJvdW5kZWQtMnhsIHAtNSB0ZXh0LWJsYWNrXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcGItM1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvc2FuZG8tbG9nby5wbmdcIlxuICAgICAgICAgICAgYWx0PVwic2FuZG8gbG9nbyBpbWFnZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIGgtMTJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtYmxhY2sgZm9udC1leHRyYWJvbGRcIj5TQU5ETyBUT0tFTjwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj5SZWdpc3RlcjwvaDE+XG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHQtM1wiXG4gICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5FbWFpbCBhZGRyZXNzPC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImVtYWlsXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTMgcm91bmRlZC0zeGwgYmctWyNFQkVCRUJdIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLVsjQzRDNEM0XSB3LWZ1bGwgcHktMiBweC01IG10LTJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgPHA+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvcD59XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPlVzZXJuYW1lPC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInVzZXJuYW1lXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMyByb3VuZGVkLTN4bCBiZy1bI0VCRUJFQl0gZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItWyNDNEM0QzRdIHctZnVsbCBweS0yIHB4LTUgbXQtMlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Vycm9ycy51c2VybmFtZSAmJiA8cD5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkPC9wPn1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+UGFzc3dvcmQ8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwicGFzc3dvcmRcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMyByb3VuZGVkLTN4bCBiZy1bI0VCRUJFQl0gZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItWyNDNEM0QzRdIHctZnVsbCBweS0yIHB4LTUgbXQtMlwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtjaGVjay5wYXNzd29yZH1cbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIDxwPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L3A+fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5Db25maXJtIFBhc3N3b3JkPC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImNvbmZpcm1lZFBhc3N3b3JkXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTMgcm91bmRlZC0zeGwgYmctWyNFQkVCRUJdIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLVsjQzRDNEM0XSB3LWZ1bGwgcHktMiBweC01IG10LTJcIlxuICAgICAgICAgICAgICB2YWx1ZT17Y2hlY2suY29uZmlybWVkUGFzc3dvcmR9XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtZWRQYXNzd29yZFwiXG4gICAgICAgICAgICAgIGlkPVwiY29uZmlybVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZXJyb3JzLmNvbmZpcm1lZFBhc3N3b3JkICYmIDxwPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L3A+fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtcmVkLTQwMFwiPlxuICAgICAgICAgICAge2Vycm9yID8gXCJUaGUgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiIDogXCJcIn1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIFxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC01ICBpdGVtcy1lbmQgYmctWyNGQjg3MDBdIGhvdmVyOmJnLVsjZGY3ODA0XSB0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1ib2xkIHB5LTIgcHgtMTAgcm91bmRlZC0zeGwgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VGb3JtIiwiUmVnaXN0ZXIiLCJkZWZhdWx0VmFsdWVzIiwiZW1haWwiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY29uZmlybWVkUGFzc3dvcmQiLCJleGFtcGxlIiwiZXhhbXBsZVJlcXVpcmVkIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImVycm9ycyIsImZvcm1TdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjaGVjayIsInNldENoZWNrIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImRhdGEiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/register.tsx\n");

/***/ })

});