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
exports.id = "pages/test";
exports.ids = ["pages/test"];
exports.modules = {

/***/ "./src/pages/test.tsx":
/*!****************************!*\
  !*** ./src/pages/test.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hooks_useform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hooks-useform */ \"react-hooks-useform\");\n/* harmony import */ var react_hooks_useform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hooks_useform__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/ibamhrk/Documents/GitHub/Sando-token/src/pages/test.tsx\";\n\n\n\n\nfunction Test() {\n  const {\n    register,\n    handleSubmit,\n    errors\n  } = (0,react_hooks_useform__WEBPACK_IMPORTED_MODULE_1__.useForm)();\n\n  const onSubmit = data => {\n    console.log(\"data\", data);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"main\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n      onSubmit: onSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n          htmlFor: \"firstname\",\n          children: \"First Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n          ref: register({\n            required: true\n          }),\n          id: \"firstname\",\n          name: \"firstname\",\n          type: \"text\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 9\n        }, this), errors.firstname && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"error\",\n          children: \"Enter your name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 31\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n          htmlFor: \"lastname\",\n          children: \"Last Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n          ref: register({\n            required: true\n          }),\n          id: \"lastname\",\n          name: \"lastname\",\n          type: \"text\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }, this), errors.lastname && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"error\",\n          children: \"Enter your last name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 30\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n          htmlFor: \"age\",\n          children: \"Age\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n          ref: register({\n            required: true\n          }),\n          id: \"age\",\n          name: \"age\",\n          type: \"text\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 9\n        }, this), errors.age && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"error\",\n          children: \"Enter your age\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Save\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGVzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFXQSxTQUFTRSxJQUFULEdBQWdCO0FBQ1osUUFBTTtBQUFFQyxJQUFBQSxRQUFGO0FBQVlDLElBQUFBLFlBQVo7QUFBMEJDLElBQUFBO0FBQTFCLE1BQXFDSiw0REFBTyxFQUFsRDs7QUFFQSxRQUFNSyxRQUFRLEdBQUlDLElBQUQsSUFBdUI7QUFDcENDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JGLElBQXBCO0FBQ0QsR0FGSDs7QUFJRixzQkFDRTtBQUFBLDJCQUNBO0FBQU0sY0FBUSxFQUFFRCxRQUFoQjtBQUFBLDhCQUNFO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFPLGFBQUcsRUFBRUgsUUFBUSxDQUFDO0FBQUVPLFlBQUFBLFFBQVEsRUFBRTtBQUFaLFdBQUQsQ0FBcEI7QUFBMEMsWUFBRSxFQUFDLFdBQTdDO0FBQXlELGNBQUksRUFBQyxXQUE5RDtBQUEwRSxjQUFJLEVBQUM7QUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixFQUlJTCxNQUFNLENBQUNNLFNBQVAsaUJBQW9CO0FBQUssbUJBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUp4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVFFO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFPLGFBQUcsRUFBRVIsUUFBUSxDQUFDO0FBQUVPLFlBQUFBLFFBQVEsRUFBRTtBQUFaLFdBQUQsQ0FBcEI7QUFBMEMsWUFBRSxFQUFDLFVBQTdDO0FBQXdELGNBQUksRUFBQyxVQUE3RDtBQUF3RSxjQUFJLEVBQUM7QUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixFQUlJTCxNQUFNLENBQUNPLFFBQVAsaUJBQW1CO0FBQUssbUJBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUp2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQWVFO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFPLGFBQUcsRUFBRVQsUUFBUSxDQUFDO0FBQUVPLFlBQUFBLFFBQVEsRUFBRTtBQUFaLFdBQUQsQ0FBcEI7QUFBMEMsWUFBRSxFQUFDLEtBQTdDO0FBQW1ELGNBQUksRUFBQyxLQUF4RDtBQUE4RCxjQUFJLEVBQUM7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixFQUlJTCxNQUFNLENBQUNRLEdBQVAsaUJBQWM7QUFBSyxtQkFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGLGVBc0JFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEJEOztBQUVELGlFQUFlWCxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU2FuZG8tVG9rZW4vLi9zcmMvcGFnZXMvdGVzdC50c3g/MWE3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2tzLXVzZWZvcm1cIjtcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi9yZWdpc3RlclwiO1xuXG5cblxudHlwZSBQcm9maWxlID0ge1xuICBmaXJzdG5hbWU6IHN0cmluZ1xuICBsYXN0bmFtZTogc3RyaW5nXG4gIGFnZTogbnVtYmVyXG59XG5cbmZ1bmN0aW9uIFRlc3QoKSB7XG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm08UHJvZmlsZT4oKVxuXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YTogUGVyc29uU2NvcmUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuICAgICAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0bmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfSBpZD1cImZpcnN0bmFtZVwiIG5hbWU9XCJmaXJzdG5hbWVcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAge1xuICAgICAgICAgIGVycm9ycy5maXJzdG5hbWUgJiYgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPkVudGVyIHlvdXIgbmFtZTwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdG5hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfSBpZD1cImxhc3RuYW1lXCIgbmFtZT1cImxhc3RuYW1lXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICAgIHtcbiAgICAgICAgICBlcnJvcnMubGFzdG5hbWUgJiYgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPkVudGVyIHlvdXIgbGFzdCBuYW1lPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZ2VcIj5BZ2U8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfSBpZD1cImFnZVwiIG5hbWU9XCJhZ2VcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAge1xuICAgICAgICAgIGVycm9ycy5hZ2UgJiYgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPkVudGVyIHlvdXIgYWdlPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZTwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICA8L21haW4+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3Q7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRm9ybSIsIlRlc3QiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1aXJlZCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/test.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-hooks-useform":
/*!**************************************!*\
  !*** external "react-hooks-useform" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-hooks-useform");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/test.tsx"));
module.exports = __webpack_exports__;

})();