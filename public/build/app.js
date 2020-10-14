(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PageTitle */ "./assets/components/PageTitle.js");
/* harmony import */ var _components_GuessArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/GuessArea */ "./assets/components/GuessArea.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);








function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/",
    exact: true,
    component: _components_PageTitle__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/guessArea",
    exact: true,
    component: _components_GuessArea__WEBPACK_IMPORTED_MODULE_4__["default"]
  }))));
}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ "./assets/components/GuessArea.js":
/*!****************************************!*\
  !*** ./assets/components/GuessArea.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _GuessArea_GameOver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./GuessArea/GameOver */ "./assets/components/GuessArea/GameOver.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var GuessArea = function GuessArea() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])({
    'flag': "../../img/placeholder-flag.png"
  }),
      _useState2 = _slicedToArray(_useState, 2),
      firstCountry = _useState2[0],
      setFirstCountry = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])({
    'flag': "../../img/placeholder-flag.png"
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      secondCountry = _useState4[0],
      setSecondCountry = _useState4[1]; //Displaying the game over component


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      gameOver = _useState6[0],
      setGameOver = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(0),
      _useState8 = _slicedToArray(_useState7, 2),
      streak = _useState8[0],
      setStreak = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_13__["useEffect"])(function () {
    setNewCountries(true);
  }, []);

  function setNewCountries(eraseStreak) {
    var firstRandNum = Math.floor(Math.random() * 250);
    var secondRandNum = Math.floor(Math.random() * 250);
    axios__WEBPACK_IMPORTED_MODULE_18___default.a.get("https://restcountries.eu/rest/v2/all").then(function (res) {
      var countryName = res.data[firstRandNum].name;
      var countryPopulation = res.data[firstRandNum].population;
      var countryArea = res.data[firstRandNum].area;
      var countryCapital = res.data[firstRandNum].capital;
      var countryGini = res.data[firstRandNum].gini;
      var countryFlag = res.data[firstRandNum].flag;
      setFirstCountry({
        'name': countryName,
        'population': countryPopulation,
        'area': countryArea,
        'capital': countryCapital,
        'gini': countryGini,
        'flag': countryFlag
      });
      countryName = res.data[secondRandNum].name;
      countryPopulation = res.data[secondRandNum].population;
      countryArea = res.data[secondRandNum].area;
      countryCapital = res.data[secondRandNum].capital;
      countryGini = res.data[secondRandNum].gini;
      countryFlag = res.data[secondRandNum].flag;
      setSecondCountry({
        'name': countryName,
        'population': countryPopulation,
        'area': countryArea,
        'capital': countryCapital,
        'gini': countryGini,
        'flag': countryFlag
      });
    });
    setGameOver(false);

    if (eraseStreak) {
      setStreak(0);
    }
  }

  function whoHasMorePeople(country1, country2) {
    if (country1.population > country2.population) {
      return country1.name;
    } else {
      return country2.name;
    }
  }

  function handleclick(countryName) {
    if (!gameOver) {
      if (countryName === whoHasMorePeople(firstCountry, secondCountry)) {
        react_toastify__WEBPACK_IMPORTED_MODULE_15__["toast"].success("Correct!");
        setStreak(streak + 1);
        setNewCountries(false);
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_15__["toast"].error("Incorrect!");
        setGameOver(true);
      }
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "guessArea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h1", null, "Streak: ", streak))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "reactColumn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "questionRegion"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h3", null, "question: Which country has more people?"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["Col"], {
    xs: "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "countryPosition"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h1", null, firstCountry.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("img", {
    src: firstCountry.flag,
    onClick: function onClick() {
      return handleclick(firstCountry.name);
    },
    alt: "country"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["Col"], {
    xs: "2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["Col"], {
    xs: "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "countryPosition"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h1", null, secondCountry.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("img", {
    src: secondCountry.flag,
    onClick: function onClick() {
      return handleclick(secondCountry.name);
    },
    alt: "country"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["Col"], null, gameOver ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_GuessArea_GameOver__WEBPACK_IMPORTED_MODULE_17__["default"], {
    setNewCountries: setNewCountries,
    streak: streak
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_15__["ToastContainer"], {
    hideProgressBar: true,
    autoClose: 2000
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (GuessArea);

/***/ }),

/***/ "./assets/components/GuessArea/GameOver.js":
/*!*************************************************!*\
  !*** ./assets/components/GuessArea/GameOver.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var GameOver = function GameOver() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Gameover");
};

/* harmony default export */ __webpack_exports__["default"] = (GameOver);

/***/ }),

/***/ "./assets/components/PageTitle.js":
/*!****************************************!*\
  !*** ./assets/components/PageTitle.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _PageTitle_Leaderboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PageTitle/Leaderboard */ "./assets/components/PageTitle/Leaderboard.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var PageTitle = function PageTitle() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      highscoreData = _useState2[0],
      setHighscoreData = _useState2[1];

  var url = "http://localhost:8000/showHighScore";
  Object(react__WEBPACK_IMPORTED_MODULE_13__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_17___default.a.get(url).then(function (request) {
      setHighscoreData(request.data);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "pageTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Container"], {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "titleText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h1", null, "Guess That Country!")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", null, "Answer the question with the country you think is more fitted. Get a streak going!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Col"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "buttonStart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Link"], {
    to: "/guessArea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("button", {
    className: "bootButton"
  }, "Click Here to Start")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PageTitle);

/***/ }),

/***/ "./assets/components/PageTitle/Leaderboard.js":
/*!****************************************************!*\
  !*** ./assets/components/PageTitle/Leaderboard.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var Leaderboard = function Leaderboard(props) {
  var initData = props.highscoreData;
  console.log(props.highscoreData);

  try {
    var _listInitData = initData.map(function (initData, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
        className: "positionResults",
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", null, initData.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", null, initData.streak));
    });
  } catch (err) {
    console.log("There is an error");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "Leaderboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", null, "Position"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", null, "Nickname"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", null, "Streak")), listInitData));
};

/* harmony default export */ __webpack_exports__["default"] = (Leaderboard);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0d1ZXNzQXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9HdWVzc0FyZWEvR2FtZU92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUGFnZVRpdGxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1BhZ2VUaXRsZS9MZWFkZXJib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwibmFtZXMiOlsiQXBwIiwiUGFnZVRpdGxlIiwiR3Vlc3NBcmVhIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlU3RhdGUiLCJmaXJzdENvdW50cnkiLCJzZXRGaXJzdENvdW50cnkiLCJzZWNvbmRDb3VudHJ5Iiwic2V0U2Vjb25kQ291bnRyeSIsImdhbWVPdmVyIiwic2V0R2FtZU92ZXIiLCJzdHJlYWsiLCJzZXRTdHJlYWsiLCJ1c2VFZmZlY3QiLCJzZXROZXdDb3VudHJpZXMiLCJlcmFzZVN0cmVhayIsImZpcnN0UmFuZE51bSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNlY29uZFJhbmROdW0iLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJjb3VudHJ5TmFtZSIsImRhdGEiLCJuYW1lIiwiY291bnRyeVBvcHVsYXRpb24iLCJwb3B1bGF0aW9uIiwiY291bnRyeUFyZWEiLCJhcmVhIiwiY291bnRyeUNhcGl0YWwiLCJjYXBpdGFsIiwiY291bnRyeUdpbmkiLCJnaW5pIiwiY291bnRyeUZsYWciLCJmbGFnIiwid2hvSGFzTW9yZVBlb3BsZSIsImNvdW50cnkxIiwiY291bnRyeTIiLCJoYW5kbGVjbGljayIsInRvYXN0Iiwic3VjY2VzcyIsImVycm9yIiwiR2FtZU92ZXIiLCJoaWdoc2NvcmVEYXRhIiwic2V0SGlnaHNjb3JlRGF0YSIsInVybCIsInJlcXVlc3QiLCJMZWFkZXJib2FyZCIsInByb3BzIiwiaW5pdERhdGEiLCJjb25zb2xlIiwibG9nIiwibGlzdEluaXREYXRhIiwibWFwIiwiaW5kZXgiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxHQUFULEdBQWU7QUFDWCxzQkFDSSwyREFBQyw4REFBRCxxQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLDJEQUFDLHVEQUFELHFCQUNJLDJEQUFDLHNEQUFEO0FBQU8sUUFBSSxFQUFDLEdBQVo7QUFBZ0IsU0FBSyxNQUFyQjtBQUFzQixhQUFTLEVBQUVDLDZEQUFTQTtBQUExQyxJQURKLGVBRUksMkRBQUMsc0RBQUQ7QUFBTyxRQUFJLEVBQUMsWUFBWjtBQUF5QixTQUFLLE1BQTlCO0FBQStCLGFBQVMsRUFBRUMsNkRBQVNBO0FBQW5ELElBRkosQ0FESixDQURKLENBREo7QUFVSDs7QUFHREMsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUFnQiwyREFBQyxHQUFELE9BQWhCLEVBQXdCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBeEIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1KLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQSxrQkFDb0JLLHVEQUFRLENBQUM7QUFBQyxZQUFRO0FBQVQsR0FBRCxDQUQ1QjtBQUFBO0FBQUEsTUFDYkMsWUFEYTtBQUFBLE1BQ0NDLGVBREQ7O0FBQUEsbUJBRXNCRix1REFBUSxDQUFDO0FBQUMsWUFBUTtBQUFULEdBQUQsQ0FGOUI7QUFBQTtBQUFBLE1B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UUFBUSxDQUFDekMsTUFBZCxDQUhKLENBREo7QUFPSCxLQVJrQixDQUFuQjtBQVNILEdBVkQsQ0FXQSxPQUFNK0MsR0FBTixFQUFXO0FBQ1BMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0g7O0FBR0Qsc0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSx1RkFDSSxvRkFDSSxrRkFESixlQUVJLGtGQUZKLGVBR0ksZ0ZBSEosQ0FESixFQU1TQyxZQU5ULENBREosQ0FESjtBQWFILENBbENEOztBQW9DZUwsMEVBQWYsRTs7Ozs7Ozs7Ozs7QUN0Q0EsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xyXG5pbXBvcnQge1xyXG4gICAgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsXHJcbiAgICBTd2l0Y2gsXHJcbiAgICBSb3V0ZSxcclxuICAgIExpbmtcclxufSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gJy4vY29tcG9uZW50cy9QYWdlVGl0bGUnO1xyXG5pbXBvcnQgR3Vlc3NBcmVhIGZyb20gJy4vY29tcG9uZW50cy9HdWVzc0FyZWEnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvJyBleGFjdCBjb21wb25lbnQ9e1BhZ2VUaXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2d1ZXNzQXJlYScgZXhhY3QgY29tcG9uZW50PXtHdWVzc0FyZWF9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IEdhbWVPdmVyIGZyb20gJy4vR3Vlc3NBcmVhL0dhbWVPdmVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IEd1ZXNzQXJlYSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtmaXJzdENvdW50cnksIHNldEZpcnN0Q291bnRyeV0gPSB1c2VTdGF0ZSh7J2ZsYWcnOiBcIi4uLy4uL2ltZy9wbGFjZWhvbGRlci1mbGFnLnBuZ1wifSk7XHJcbiAgICBjb25zdCBbc2Vjb25kQ291bnRyeSwgc2V0U2Vjb25kQ291bnRyeV0gPSB1c2VTdGF0ZSh7J2ZsYWcnOiBcIi4uLy4uL2ltZy9wbGFjZWhvbGRlci1mbGFnLnBuZ1wifSk7XHJcbiAgICAvL0Rpc3BsYXlpbmcgdGhlIGdhbWUgb3ZlciBjb21wb25lbnRcclxuICAgIGNvbnN0IFtnYW1lT3Zlciwgc2V0R2FtZU92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3N0cmVhaywgc2V0U3RyZWFrXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0TmV3Q291bnRyaWVzKHRydWUpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gc2V0TmV3Q291bnRyaWVzKGVyYXNlU3RyZWFrKSB7XHJcbiAgICAgICAgbGV0IGZpcnN0UmFuZE51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1MCk7XHJcbiAgICAgICAgbGV0IHNlY29uZFJhbmROdW0gPSAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjUwKTtcclxuICAgICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoYGh0dHBzOi8vcmVzdGNvdW50cmllcy5ldS9yZXN0L3YyL2FsbGApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY291bnRyeU5hbWUgPSByZXMuZGF0YVtmaXJzdFJhbmROdW1dLm5hbWU7XHJcbiAgICAgICAgICAgIGxldCBjb3VudHJ5UG9wdWxhdGlvbiA9IHJlcy5kYXRhW2ZpcnN0UmFuZE51bV0ucG9wdWxhdGlvbjtcclxuICAgICAgICAgICAgbGV0IGNvdW50cnlBcmVhID0gcmVzLmRhdGFbZmlyc3RSYW5kTnVtXS5hcmVhO1xyXG4gICAgICAgICAgICBsZXQgY291bnRyeUNhcGl0YWwgPSByZXMuZGF0YVtmaXJzdFJhbmROdW1dLmNhcGl0YWw7XHJcbiAgICAgICAgICAgIGxldCBjb3VudHJ5R2luaSA9IHJlcy5kYXRhW2ZpcnN0UmFuZE51bV0uZ2luaTtcclxuICAgICAgICAgICAgbGV0IGNvdW50cnlGbGFnID0gcmVzLmRhdGFbZmlyc3RSYW5kTnVtXS5mbGFnO1xyXG5cclxuICAgICAgICAgICAgc2V0Rmlyc3RDb3VudHJ5KHtcclxuICAgICAgICAgICAgICAgICduYW1lJzogY291bnRyeU5hbWUsIFxyXG4gICAgICAgICAgICAgICAgJ3BvcHVsYXRpb24nOiBjb3VudHJ5UG9wdWxhdGlvbixcclxuICAgICAgICAgICAgICAgICdhcmVhJzogY291bnRyeUFyZWEsXHJcbiAgICAgICAgICAgICAgICAnY2FwaXRhbCc6IGNvdW50cnlDYXBpdGFsLFxyXG4gICAgICAgICAgICAgICAgJ2dpbmknOiBjb3VudHJ5R2luaSxcclxuICAgICAgICAgICAgICAgICdmbGFnJzogY291bnRyeUZsYWd9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5TmFtZSA9IHJlcy5kYXRhW3NlY29uZFJhbmROdW1dLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5UG9wdWxhdGlvbiA9IHJlcy5kYXRhW3NlY29uZFJhbmROdW1dLnBvcHVsYXRpb247XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5QXJlYSA9IHJlcy5kYXRhW3NlY29uZFJhbmROdW1dLmFyZWE7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5Q2FwaXRhbCA9IHJlcy5kYXRhW3NlY29uZFJhbmROdW1dLmNhcGl0YWw7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5R2luaSA9IHJlcy5kYXRhW3NlY29uZFJhbmROdW1dLmdpbmk7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5RmxhZyA9IHJlcy5kYXRhW3NlY29uZFJhbmROdW1dLmZsYWc7XHJcbiAgICBcclxuICAgICAgICAgICAgc2V0U2Vjb25kQ291bnRyeSh7XHJcbiAgICAgICAgICAgICAgICAnbmFtZSc6IGNvdW50cnlOYW1lLCBcclxuICAgICAgICAgICAgICAgICdwb3B1bGF0aW9uJzogY291bnRyeVBvcHVsYXRpb24sXHJcbiAgICAgICAgICAgICAgICAnYXJlYSc6IGNvdW50cnlBcmVhLFxyXG4gICAgICAgICAgICAgICAgJ2NhcGl0YWwnOiBjb3VudHJ5Q2FwaXRhbCxcclxuICAgICAgICAgICAgICAgICdnaW5pJzogY291bnRyeUdpbmksXHJcbiAgICAgICAgICAgICAgICAnZmxhZyc6IGNvdW50cnlGbGFnfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRHYW1lT3ZlcihmYWxzZSk7XHJcbiAgICAgICAgaWYoZXJhc2VTdHJlYWspIHtcclxuICAgICAgICAgICAgc2V0U3RyZWFrKDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3aG9IYXNNb3JlUGVvcGxlKGNvdW50cnkxLCBjb3VudHJ5Mikge1xyXG4gICAgICAgIGlmIChjb3VudHJ5MS5wb3B1bGF0aW9uID4gY291bnRyeTIucG9wdWxhdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gY291bnRyeTEubmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY291bnRyeTIubmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlY2xpY2soY291bnRyeU5hbWUpIHtcclxuICAgICAgICBpZiAoIWdhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgIGlmIChjb3VudHJ5TmFtZSA9PT0gd2hvSGFzTW9yZVBlb3BsZShmaXJzdENvdW50cnksIHNlY29uZENvdW50cnkpKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiQ29ycmVjdCFcIik7XHJcbiAgICAgICAgICAgICAgICBzZXRTdHJlYWsoc3RyZWFrICsgMSk7XHJcbiAgICAgICAgICAgICAgICBzZXROZXdDb3VudHJpZXMoZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJJbmNvcnJlY3QhXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0R2FtZU92ZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3Vlc3NBcmVhXCI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5TdHJlYWs6IHtzdHJlYWt9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0Q29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uUmVnaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnF1ZXN0aW9uOiBXaGljaCBjb3VudHJ5IGhhcyBtb3JlIHBlb3BsZT88L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRyeVBvc2l0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2ZpcnN0Q291bnRyeS5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Zmlyc3RDb3VudHJ5LmZsYWd9IG9uQ2xpY2s9eygpID0+IGhhbmRsZWNsaWNrKGZpcnN0Q291bnRyeS5uYW1lKX0gYWx0PVwiY291bnRyeVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjJcIj48L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPVwiNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50cnlQb3NpdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntzZWNvbmRDb3VudHJ5Lm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzZWNvbmRDb3VudHJ5LmZsYWd9IG9uQ2xpY2s9eygpID0+IGhhbmRsZWNsaWNrKHNlY29uZENvdW50cnkubmFtZSl9IGFsdD1cImNvdW50cnlcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZ2FtZU92ZXIgPyA8R2FtZU92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV3Q291bnRyaWVzPXtzZXROZXdDb3VudHJpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVhaz17c3RyZWFrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0Jhcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlPXsyMDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHdWVzc0FyZWFcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgR2FtZU92ZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIEdhbWVvdmVyXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVPdmVyXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBMZWFkZXJib2FyZCBmcm9tICcuL1BhZ2VUaXRsZS9MZWFkZXJib2FyZCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBQYWdlVGl0bGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdFtoaWdoc2NvcmVEYXRhLCBzZXRIaWdoc2NvcmVEYXRhXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjgwMDAvc2hvd0hpZ2hTY29yZWA7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQodXJsKS50aGVuKCByZXF1ZXN0ID0+IHtcclxuICAgICAgICAgICAgc2V0SGlnaHNjb3JlRGF0YShyZXF1ZXN0LmRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkd1ZXNzIFRoYXQgQ291bnRyeSE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BbnN3ZXIgdGhlIHF1ZXN0aW9uIHdpdGggdGhlIGNvdW50cnkgeW91IHRoaW5rIGlzIG1vcmUgZml0dGVkLiBHZXQgYSBzdHJlYWsgZ29pbmchPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGVhZGVyYm9hcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hzY29yZURhdGE9e2hpZ2hzY29yZURhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uU3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17XCIvZ3Vlc3NBcmVhXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib290QnV0dG9uXCI+Q2xpY2sgSGVyZSB0byBTdGFydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVRpdGxlXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IExlYWRlcmJvYXJkID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgbGV0IGluaXREYXRhID0gcHJvcHMuaGlnaHNjb3JlRGF0YTtcclxuICAgIGNvbnNvbGUubG9nKHByb3BzLmhpZ2hzY29yZURhdGEpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGxpc3RJbml0RGF0YSA9IGluaXREYXRhLm1hcCgoaW5pdERhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwicG9zaXRpb25SZXN1bHRzXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPntpbmRleCsxfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPntpbml0RGF0YS5uYW1lfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPntpbml0RGF0YS5zdHJlYWt9PC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNhdGNoKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlcmUgaXMgYW4gZXJyb3JcIilcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxlYWRlcmJvYXJkXCI+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+UG9zaXRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5OaWNrbmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlN0cmVhazwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0SW5pdERhdGF9XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWFkZXJib2FyZCIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=