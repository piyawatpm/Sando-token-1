"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/test01";
exports.ids = ["pages/test01"];
exports.modules = {

/***/ "./src/pages/test01.tsx":
/*!******************************!*\
  !*** ./src/pages/test01.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Test01)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/ibamhrk/Documents/GitHub/Sando-token/src/pages/test01.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction Test01() {\n  const {\n    0: check,\n    1: setCheck\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    password: \"\",\n    confirmedPassword: \"\"\n  });\n  const {\n    0: error,\n    1: setError\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  const handleInputChange = e => {\n    setCheck(_objectSpread(_objectSpread({}, check), {}, {\n      [e.target.name]: e.target.value\n    }));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setError(check.password !== check.confirmedPassword);\n  }, [check.password, check.confirmedPassword]);\n  console.log(check);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: \"Password Match\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      style: {\n        maxWidth: \"300px\",\n        display: \"flex\",\n        flexDirection: \"column\"\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n        htmlFor: \"password\",\n        children: \"Password : \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n        name: \"password\",\n        value: check.password,\n        type: \"password\",\n        id: \"password\",\n        onChange: handleInputChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n        htmlFor: \"confirm\",\n        children: \"Confirm Password : \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n        value: check.confirmedPassword,\n        type: \"password\",\n        name: \"confirmedPassword\",\n        id: \"confirm\",\n        onChange: handleInputChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      className: \"text-red-400\",\n      children: error ? \"The passwords do not match\" : \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGVzdDAxLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWUsU0FBU0UsTUFBVCxHQUFrQjtBQUMvQixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JKLCtDQUFRLENBQUM7QUFDakNLLElBQUFBLFFBQVEsRUFBRSxFQUR1QjtBQUVqQ0MsSUFBQUEsaUJBQWlCLEVBQUU7QUFGYyxHQUFELENBQWxDO0FBSUEsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CUiwrQ0FBUSxDQUFDLEtBQUQsQ0FBbEM7O0FBQ0EsUUFBTVMsaUJBQWlCLEdBQUlDLENBQUQsSUFBVztBQUNuQ04sSUFBQUEsUUFBUSxpQ0FDSEQsS0FERztBQUVOLE9BQUNPLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUFWLEdBQWlCRixDQUFDLENBQUNDLE1BQUYsQ0FBU0U7QUFGcEIsT0FBUjtBQUlELEdBTEQ7O0FBT0FaLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkTyxJQUFBQSxRQUFRLENBQUNMLEtBQUssQ0FBQ0UsUUFBTixLQUFtQkYsS0FBSyxDQUFDRyxpQkFBMUIsQ0FBUjtBQUNELEdBRlEsRUFFTixDQUFDSCxLQUFLLENBQUNFLFFBQVAsRUFBaUJGLEtBQUssQ0FBQ0csaUJBQXZCLENBRk0sQ0FBVDtBQUdBUSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVosS0FBWjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQ0UsV0FBSyxFQUFFO0FBQUVhLFFBQUFBLFFBQVEsRUFBRSxPQUFaO0FBQXFCQyxRQUFBQSxPQUFPLEVBQUUsTUFBOUI7QUFBc0NDLFFBQUFBLGFBQWEsRUFBRTtBQUFyRCxPQURUO0FBQUEsOEJBR0U7QUFBTyxlQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFDRSxZQUFJLEVBQUMsVUFEUDtBQUVFLGFBQUssRUFBRWYsS0FBSyxDQUFDRSxRQUZmO0FBR0UsWUFBSSxFQUFDLFVBSFA7QUFJRSxVQUFFLEVBQUMsVUFKTDtBQUtFLGdCQUFRLEVBQUVJO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBV0U7QUFBTyxlQUFPLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBWUU7QUFDRSxhQUFLLEVBQUVOLEtBQUssQ0FBQ0csaUJBRGY7QUFFRSxZQUFJLEVBQUMsVUFGUDtBQUdFLFlBQUksRUFBQyxtQkFIUDtBQUlFLFVBQUUsRUFBQyxTQUpMO0FBS0UsZ0JBQVEsRUFBRUc7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFzQkU7QUFBSSxlQUFTLEVBQUMsY0FBZDtBQUFBLGdCQUE4QkYsS0FBSyxHQUFHLDRCQUFILEdBQWtDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TYW5kby1Ub2tlbi8uL3NyYy9wYWdlcy90ZXN0MDEudHN4PzA2ODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0MDEoKSB7XG4gIGNvbnN0IFtjaGVjaywgc2V0Q2hlY2tdID0gdXNlU3RhdGUoe1xuICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIGNvbmZpcm1lZFBhc3N3b3JkOiBcIlwiXG4gIH0pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTphbnkpID0+IHtcbiAgICBzZXRDaGVjayh7XG4gICAgICAuLi5jaGVjayxcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEVycm9yKGNoZWNrLnBhc3N3b3JkICE9PSBjaGVjay5jb25maXJtZWRQYXNzd29yZCk7XG4gIH0sIFtjaGVjay5wYXNzd29yZCwgY2hlY2suY29uZmlybWVkUGFzc3dvcmRdKTtcbiAgY29uc29sZS5sb2coY2hlY2spO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5QYXNzd29yZCBNYXRjaDwvaDE+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjMwMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19XG4gICAgICA+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZCA6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgdmFsdWU9e2NoZWNrLnBhc3N3b3JkfVxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbmZpcm1cIj5Db25maXJtIFBhc3N3b3JkIDogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdmFsdWU9e2NoZWNrLmNvbmZpcm1lZFBhc3N3b3JkfVxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgbmFtZT1cImNvbmZpcm1lZFBhc3N3b3JkXCJcbiAgICAgICAgICBpZD1cImNvbmZpcm1cIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtcmVkLTQwMFwiPntlcnJvciA/IFwiVGhlIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIiA6IFwiXCJ9PC9oMT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRlc3QwMSIsImNoZWNrIiwic2V0Q2hlY2siLCJwYXNzd29yZCIsImNvbmZpcm1lZFBhc3N3b3JkIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJtYXhXaWR0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/test01.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/test01.tsx"));
module.exports = __webpack_exports__;

})();