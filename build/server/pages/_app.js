"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "@badrap/bar-of-progress"
const bar_of_progress_namespaceObject = require("@badrap/bar-of-progress");
var bar_of_progress_default = /*#__PURE__*/__webpack_require__.n(bar_of_progress_namespaceObject);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(2364);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "react-query"
const external_react_query_namespaceObject = require("react-query");
;// CONCATENATED MODULE: external "react-query/devtools"
const devtools_namespaceObject = require("react-query/devtools");
;// CONCATENATED MODULE: ./src/constants/seo-constants.ts
const getURL = () => {
  var _process, _process$env, _process2, _process2$env;

  const url = (_process = process) !== null && _process !== void 0 && (_process$env = _process.env) !== null && _process$env !== void 0 && _process$env.URL && process.env.URL !== '' ? process.env.URL : (_process2 = process) !== null && _process2 !== void 0 && (_process2$env = _process2.env) !== null && _process2$env !== void 0 && _process2$env.VERCEL_URL && process.env.VERCEL_URL !== '' ? process.env.VERCEL_URL : 'http://localhost:3000';
  return url.includes('http') ? url : `https://${url}`;
};
const DEFAULT_TITLE = '';
const DEFAULT_TITLE_TEMPLATE = 'Sando | %s';
const DEFAULT_DESCRIPTION = 'Token';
const DEFAULT_CANONICAL = getURL();
const SITE_NAME = 'Sando';
const DEFAULT_OG_IMAGE = `${DEFAULT_CANONICAL}/preview.png`;
const FAVICON_LINK = '/favicon.ico';
const SEO = {
  DEFAULT_TITLE,
  DEFAULT_TITLE_TEMPLATE,
  DEFAULT_DESCRIPTION,
  DEFAULT_CANONICAL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  FAVICON_LINK
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const progress = new (bar_of_progress_default())({
  size: 2,
  color: '#22D3EE',
  className: 'bar-of-progress',
  delay: 100
});
router_default().events.on('routeChangeStart', progress.start);
router_default().events.on('routeChangeComplete', () => {
  progress.finish();
  window.scrollTo(0, 0);
});
router_default().events.on('routeChangeError', progress.finish);
const {
  DEFAULT_TITLE_TEMPLATE: _app_DEFAULT_TITLE_TEMPLATE,
  DEFAULT_DESCRIPTION: _app_DEFAULT_DESCRIPTION,
  DEFAULT_CANONICAL: _app_DEFAULT_CANONICAL,
  SITE_NAME: _app_SITE_NAME,
  DEFAULT_TITLE: _app_DEFAULT_TITLE,
  DEFAULT_OG_IMAGE: _app_DEFAULT_OG_IMAGE,
  FAVICON_LINK: _app_FAVICON_LINK
} = SEO;
const queryClient = new external_react_query_namespaceObject.QueryClient();

function MyApp({
  Component,
  pageProps,
  router
}) {
  var _layoutProps;

  const canonicalPath = router.pathname === '/' ? '' : router.pathname;
  const url = `${_app_DEFAULT_CANONICAL}${canonicalPath}`;
  const Layout = ((_layoutProps = Component.layoutProps) === null || _layoutProps === void 0 ? void 0 : _layoutProps.Layout) || external_react_.Fragment;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_next_seo_.DefaultSeo, {
      title: _app_DEFAULT_TITLE,
      titleTemplate: _app_DEFAULT_TITLE_TEMPLATE,
      description: _app_DEFAULT_DESCRIPTION,
      canonical: url,
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url,
        site_name: _app_SITE_NAME,
        title: _app_SITE_NAME,
        description: _app_DEFAULT_DESCRIPTION,
        images: [{
          url: _app_DEFAULT_OG_IMAGE,
          alt: _app_SITE_NAME
        }]
      },
      additionalLinkTags: [{
        rel: 'shortcut icon',
        href: _app_FAVICON_LINK
      }]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_query_namespaceObject.QueryClientProvider, {
      client: queryClient,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      }), /*#__PURE__*/jsx_runtime_.jsx(devtools_namespaceObject.ReactQueryDevtools, {
        initialIsOpen: false
      })]
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 2364:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9343));
module.exports = __webpack_exports__;

})();