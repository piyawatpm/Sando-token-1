/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/wallet",{

/***/ "./src/components/pages/wallet/get-a-wallet/trust.tsx":
/*!************************************************************!*\
  !*** ./src/components/pages/wallet/get-a-wallet/trust.tsx ***!
  \************************************************************/
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

/***/ "./src/pages/wallet.tsx":
/*!******************************!*\
  !*** ./src/pages/wallet.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_layout_MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/layout/MainLayout */ \"./src/layout/MainLayout.tsx\");\n/* harmony import */ var _components_pages_wallet_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/pages/wallet/key */ \"./src/components/pages/wallet/key.tsx\");\n/* harmony import */ var _components_pages_wallet_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/pages/wallet/detail */ \"./src/components/pages/wallet/detail.tsx\");\n/* harmony import */ var _components_pages_wallet_get_a_wallet_metamask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/pages/wallet/get-a-wallet/metamask */ \"./src/components/pages/wallet/get-a-wallet/metamask.tsx\");\n/* harmony import */ var _components_pages_wallet_get_a_wallet_trust__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/pages/wallet/get-a-wallet/trust */ \"./src/components/pages/wallet/get-a-wallet/trust.tsx\");\n/* harmony import */ var _components_pages_wallet_get_a_wallet_trust__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_pages_wallet_get_a_wallet_trust__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/sukonratkanjanasuttiyakorn/Documents/projects/web-sando-token/Sando-token/src/pages/wallet.tsx\";\n\n\n\n\n\n\n\n\n\nfunction Wallet() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_pages_wallet_key__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_pages_wallet_detail__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_pages_wallet_get_a_wallet_metamask__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_components_pages_wallet_get_a_wallet_trust__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true);\n}\n\n_c = Wallet;\nWallet.layoutProps = {\n  Layout: src_layout_MainLayout__WEBPACK_IMPORTED_MODULE_1__.default\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wallet);\n\nvar _c;\n\n$RefreshReg$(_c, \"Wallet\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvd2FsbGV0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU00sTUFBVCxHQUErQjtBQUMzQixzQkFBTztBQUFBLDRCQUNQLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETyxlQUVQLDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGTyxlQUdQLDhEQUFDLG1GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFITyxlQUlQLDhEQUFDLG9GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKTztBQUFBLGtCQUFQO0FBTUg7O0tBUFFBO0FBU1RBLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQjtBQUNqQkMsRUFBQUEsTUFBTSxFQUFFUCwwREFBVUE7QUFERCxDQUFyQjtBQUlBLCtEQUFlSyxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy93YWxsZXQudHN4PzkzYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSAnc3JjL2xheW91dC9NYWluTGF5b3V0J1xuXG5pbXBvcnQgS2V5IGZyb20gXCJAL2NvbXBvbmVudHMvcGFnZXMvd2FsbGV0L2tleVwiXG5pbXBvcnQgRGV0YWlsIGZyb20gXCJAL2NvbXBvbmVudHMvcGFnZXMvd2FsbGV0L2RldGFpbFwiXG5pbXBvcnQgTWV0YW1hc2sgZnJvbSBcIkAvY29tcG9uZW50cy9wYWdlcy93YWxsZXQvZ2V0LWEtd2FsbGV0L21ldGFtYXNrXCJcbmltcG9ydCBUcnVzdCBmcm9tIFwiQC9jb21wb25lbnRzL3BhZ2VzL3dhbGxldC9nZXQtYS13YWxsZXQvdHJ1c3RcIlxuXG5mdW5jdGlvbiBXYWxsZXQoKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8PlxuICAgIDxLZXkvPlxuICAgIDxEZXRhaWwvPlxuICAgIDxNZXRhbWFzayAvPlxuICAgIDxUcnVzdC8+XG4gICAgPC8+XG59XG5cbldhbGxldC5sYXlvdXRQcm9wcyA9IHtcbiAgICBMYXlvdXQ6IE1haW5MYXlvdXQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldCJdLCJuYW1lcyI6WyJSZWFjdCIsIk1haW5MYXlvdXQiLCJLZXkiLCJEZXRhaWwiLCJNZXRhbWFzayIsIlRydXN0IiwiV2FsbGV0IiwibGF5b3V0UHJvcHMiLCJMYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/wallet.tsx\n");

/***/ })

});