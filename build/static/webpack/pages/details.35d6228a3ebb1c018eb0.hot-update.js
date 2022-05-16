/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/details",{

/***/ "./src/components/pages/details/Howto.tsx":
/*!************************************************!*\
  !*** ./src/components/pages/details/Howto.tsx ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/pages/details.tsx":
/*!*******************************!*\
  !*** ./src/pages/details.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var src_layout_MainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/layout/MainLayout */ \"./src/layout/MainLayout.tsx\");\n/* harmony import */ var _components_pages_details_address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/pages/details/address */ \"./src/components/pages/details/address.tsx\");\n/* harmony import */ var _components_pages_details_what__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/pages/details/what */ \"./src/components/pages/details/what.tsx\");\n/* harmony import */ var _components_pages_details_Howto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/pages/details/Howto */ \"./src/components/pages/details/Howto.tsx\");\n/* harmony import */ var _components_pages_details_Howto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_pages_details_Howto__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_pages_details_unique__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/pages/details/unique */ \"./src/components/pages/details/unique.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/sukonratkanjanasuttiyakorn/Documents/projects/web-sando-token/Sando-token/src/pages/details.tsx\";\n\n\n\n\n\n\n\n\nfunction Details() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"relative overflow-hidden mx-auto w-full  bg-cover bg-center container mt-20\",\n      style: {\n        backgroundImage: \"url(\".concat(\"./images/web/bg-wallet.png\", \")\")\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_pages_details_address__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_pages_details_what__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((_components_pages_details_Howto__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_pages_details_unique__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_c = Details;\nDetails.layoutProps = {\n  Layout: src_layout_MainLayout__WEBPACK_IMPORTED_MODULE_0__.default\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);\n\nvar _c;\n\n$RefreshReg$(_c, \"Details\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGV0YWlscy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ0EsU0FBU0ssT0FBVCxHQUFnQztBQUM5QixzQkFDRTtBQUFBLDJCQUNFO0FBQ0UsZUFBUyxFQUFDLDZFQURaO0FBRUUsV0FBSyxFQUFFO0FBQUVDLFFBQUFBLGVBQWUsZ0JBQVMsNEJBQVQ7QUFBakIsT0FGVDtBQUFBLDhCQUlFLDhEQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFLDhEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FLDhEQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FLDhEQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWFEOztLQWRRRDtBQWdCVEEsT0FBTyxDQUFDRSxXQUFSLEdBQXNCO0FBQ3BCQyxFQUFBQSxNQUFNLEVBQUVSLDBEQUFVQTtBQURFLENBQXRCO0FBSUEsK0RBQWVLLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RldGFpbHMudHN4PzFhNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcInNyYy9sYXlvdXQvTWFpbkxheW91dFwiO1xuXG5pbXBvcnQgQWRkcmVzcyBmcm9tIFwiQC9jb21wb25lbnRzL3BhZ2VzL2RldGFpbHMvYWRkcmVzc1wiO1xuaW1wb3J0IFdoYXQgZnJvbSBcIkAvY29tcG9uZW50cy9wYWdlcy9kZXRhaWxzL3doYXRcIjtcbmltcG9ydCBIb3d0byBmcm9tIFwiQC9jb21wb25lbnRzL3BhZ2VzL2RldGFpbHMvSG93dG9cIlxuaW1wb3J0IFVuaXF1ZSBmcm9tIFwiQC9jb21wb25lbnRzL3BhZ2VzL2RldGFpbHMvdW5pcXVlXCI7XG5mdW5jdGlvbiBEZXRhaWxzKCk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gbXgtYXV0byB3LWZ1bGwgIGJnLWNvdmVyIGJnLWNlbnRlciBjb250YWluZXIgbXQtMjBcIlxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtcIi4vaW1hZ2VzL3dlYi9iZy13YWxsZXQucG5nXCJ9KWAgfX1cbiAgICAgID5cbiAgICAgICAgPEFkZHJlc3MgLz5cbiAgICAgICAgPFdoYXQgLz5cbiAgICAgICAgPEhvd3RvLz5cbiAgICAgICAgPFVuaXF1ZSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbkRldGFpbHMubGF5b3V0UHJvcHMgPSB7XG4gIExheW91dDogTWFpbkxheW91dCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbHM7XG4iXSwibmFtZXMiOlsiTWFpbkxheW91dCIsIkFkZHJlc3MiLCJXaGF0IiwiSG93dG8iLCJVbmlxdWUiLCJEZXRhaWxzIiwiYmFja2dyb3VuZEltYWdlIiwibGF5b3V0UHJvcHMiLCJMYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/details.tsx\n");

/***/ })

});