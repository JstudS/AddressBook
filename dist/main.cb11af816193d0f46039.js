/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

:root {
    --orange-color: #fa8e3f;
    --grey: #b8b7bc;
    --light-grey-color: #f3f5f1;
    --dark-blue: #020125;
    --carbb-green-color: #02bfae;
}

body {
    font-family: 'Nunito', sans-serif;
    min-height: 100vh;
    background-color: var(--light-grey-color);
}

h1, h2, h3, h4, h5 {
    color: var(--dark-blue);
}

input, button {
    outline: 0;
    font-family: inherit;
    font-size: 1rem;
}

button {
    cursor: pointer;
}

/* modal */

#fullscrin-div {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    z-index: 1;
    display: none;
}

.modal {
    background-color: #fff;
    border-radius: 0.6rem;
    overflow: hidden;
    display: none;
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.2);
}

.modal-head {
    background-color: var(--orange-color);
    padding: 1.2rem 2.4rem;
    font-size: 1.5rem;
    color: #fff;
    position: relative;
}

.modal-head h3 {
    color:  #fff;
}

#close-btn {
    position: fixed;
    background-color: #fff;
    color: var(--grey);
    top: 1rem;
    right: 1.5rem;
    display: block;
    height: 30px;
    width: 30px;
    border: 0;
    border-radius: 50%;
    transition: all .2s ease;
}

#close-btn:hover {
    transform: scale(1.1);
}

.modal-main {
    padding: 1.2rem 2.4rem 1rem 2.4rem;
    max-width: 580px;
    min-width: 500px;
}

.modal-row {
    margin-bottom: 1.2rem;
}

.grid-row {
    display: flex;
    justify-content:  space-between;
}

.modal-col {
    width: 47%;
}

.modal-col.full {
    width: 100%;
}

.modal-col label {
    display: block;
    font-weight: 700;
    color: var(--dark-blue);
    margin-bottom: 0.6rem;
}

.modal-col input, .modal-col select {
    border: 1px solid rgba(184, 183, 188, 0.5);
    border-radius: 3px;
    padding: 0.5rem;
    font-size: 1rem;
    font-family: inherit;
    outline: 0;
    width: 100%;
}

#modal-btn button {
    font-size: 1.1rem;
    color: #fff;
    border: 1px solid rgba(184, 183, 188, 0.5);
    border-radius: 4px;
    padding: 0.6rem 2rem;
    transition: 0.2s ease;
}

#modal-btn button:hover {
    transform: translateY(1px);
}

#save-btn, #update-btn {
    box-shadow: 0 2px 0 0 #bd5305;
    background-color: var(--orange-color);
    margin-right: 0.6rem;
}

#save-btn:hover, #update-btn:hover {
    box-shadow: 0 1px 0 0 #bd5305;
}

#delete-btn {
    background-color: #d33c41;
    box-shadow: 0 2px 0 0 #8a1f23;
}

#delete-btn:hover {
    box-shadow: 0 1px 0 0 #8a1f23;
}

/* address list */
.addr-book {
    padding: 1.4rem;
    margin: 0 auto;
    max-width: 1200px;
    min-width: 700px;
}

.addr-book-content {
    background-color: #fff;
    padding: 1.6rem;
    border-radius: 4px;
}

.addr-book-head {
    padding-top: 1.5rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.addr-book-head h2{
    font-size: 2.2rem;
}

.addr-book-head i{
    color: var(--orange-color);
}

.addr-book-top {
    padding: 1rem 0;
}

.addr-book-top .btn {
    border: 0;
    color: #fff;
    padding: 0.8rem;
    border-radius: 3px;
    transition: .2s ease;
    background-color: var(--orange-color);
    box-shadow: 0 2px 0 0 #bd5305;
}

.addr-book-top .btn:hover {
    transform: translateY(1px);
}

.addr-book-list {
    margin: 1rem;
    min-height: 450px;
}

.addr-table {
    margin-top: 2rem;
    width: 100%;
    text-align: left;
    border-collapse: collapse;
}

.addr-table thead{
    border-bottom: 1px solid #e3e4f1;
}

.addr-table thead tr th {
    padding-bottom: 0.8rem;
}

.addr-table tbody td {
    padding: 1.5rem 0;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 600;
}

.addr-table tbody td:nth-child(1){
    padding-left: 0.5rem;
    padding-right: 1rem;
}

.addr-table tbody td:nth-child(2){
    font-weight: 800;
}

.addr-table .addressing-name {
    color: var(--dark-blue);
}

.addr-table .address{
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
}

.addr-table tbody td:nth-child(3) span {
    background-color: var(--light-grey-color);
    display: inline-block;
    padding: 0.3rem 0.6rem;
    border-radius: 8px;
}

.addr-table tbody tr {
    cursor:  pointer;
}

.addr-table tbody tr:hover {
    background-color: var(--orange-color);
    transition: .2s ease;
    color: #fff;
}

.addr-table tbody tr:hover td, .addr-table tbody tr:hover span {
    color: #fff;
}

.addr-table tbody tr:hover td:nth-child(3) span {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.6)
}

/* for error message */
.errorMsg {
    border: 1px solid #d33c41;
}`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap');\r\n\r\n*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n    --orange-color: #fa8e3f;\r\n    --grey: #b8b7bc;\r\n    --light-grey-color: #f3f5f1;\r\n    --dark-blue: #020125;\r\n    --carbb-green-color: #02bfae;\r\n}\r\n\r\nbody {\r\n    font-family: 'Nunito', sans-serif;\r\n    min-height: 100vh;\r\n    background-color: var(--light-grey-color);\r\n}\r\n\r\nh1, h2, h3, h4, h5 {\r\n    color: var(--dark-blue);\r\n}\r\n\r\ninput, button {\r\n    outline: 0;\r\n    font-family: inherit;\r\n    font-size: 1rem;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\n/* modal */\r\n\r\n#fullscrin-div {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    display: none;\r\n}\r\n\r\n.modal {\r\n    background-color: #fff;\r\n    border-radius: 0.6rem;\r\n    overflow: hidden;\r\n    display: none;\r\n    position: fixed;\r\n    top: 2rem;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.modal-head {\r\n    background-color: var(--orange-color);\r\n    padding: 1.2rem 2.4rem;\r\n    font-size: 1.5rem;\r\n    color: #fff;\r\n    position: relative;\r\n}\r\n\r\n.modal-head h3 {\r\n    color:  #fff;\r\n}\r\n\r\n#close-btn {\r\n    position: fixed;\r\n    background-color: #fff;\r\n    color: var(--grey);\r\n    top: 1rem;\r\n    right: 1.5rem;\r\n    display: block;\r\n    height: 30px;\r\n    width: 30px;\r\n    border: 0;\r\n    border-radius: 50%;\r\n    transition: all .2s ease;\r\n}\r\n\r\n#close-btn:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.modal-main {\r\n    padding: 1.2rem 2.4rem 1rem 2.4rem;\r\n    max-width: 580px;\r\n    min-width: 500px;\r\n}\r\n\r\n.modal-row {\r\n    margin-bottom: 1.2rem;\r\n}\r\n\r\n.grid-row {\r\n    display: flex;\r\n    justify-content:  space-between;\r\n}\r\n\r\n.modal-col {\r\n    width: 47%;\r\n}\r\n\r\n.modal-col.full {\r\n    width: 100%;\r\n}\r\n\r\n.modal-col label {\r\n    display: block;\r\n    font-weight: 700;\r\n    color: var(--dark-blue);\r\n    margin-bottom: 0.6rem;\r\n}\r\n\r\n.modal-col input, .modal-col select {\r\n    border: 1px solid rgba(184, 183, 188, 0.5);\r\n    border-radius: 3px;\r\n    padding: 0.5rem;\r\n    font-size: 1rem;\r\n    font-family: inherit;\r\n    outline: 0;\r\n    width: 100%;\r\n}\r\n\r\n#modal-btn button {\r\n    font-size: 1.1rem;\r\n    color: #fff;\r\n    border: 1px solid rgba(184, 183, 188, 0.5);\r\n    border-radius: 4px;\r\n    padding: 0.6rem 2rem;\r\n    transition: 0.2s ease;\r\n}\r\n\r\n#modal-btn button:hover {\r\n    transform: translateY(1px);\r\n}\r\n\r\n#save-btn, #update-btn {\r\n    box-shadow: 0 2px 0 0 #bd5305;\r\n    background-color: var(--orange-color);\r\n    margin-right: 0.6rem;\r\n}\r\n\r\n#save-btn:hover, #update-btn:hover {\r\n    box-shadow: 0 1px 0 0 #bd5305;\r\n}\r\n\r\n#delete-btn {\r\n    background-color: #d33c41;\r\n    box-shadow: 0 2px 0 0 #8a1f23;\r\n}\r\n\r\n#delete-btn:hover {\r\n    box-shadow: 0 1px 0 0 #8a1f23;\r\n}\r\n\r\n/* address list */\r\n.addr-book {\r\n    padding: 1.4rem;\r\n    margin: 0 auto;\r\n    max-width: 1200px;\r\n    min-width: 700px;\r\n}\r\n\r\n.addr-book-content {\r\n    background-color: #fff;\r\n    padding: 1.6rem;\r\n    border-radius: 4px;\r\n}\r\n\r\n.addr-book-head {\r\n    padding-top: 1.5rem;\r\n    margin-bottom: 2rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.addr-book-head h2{\r\n    font-size: 2.2rem;\r\n}\r\n\r\n.addr-book-head i{\r\n    color: var(--orange-color);\r\n}\r\n\r\n.addr-book-top {\r\n    padding: 1rem 0;\r\n}\r\n\r\n.addr-book-top .btn {\r\n    border: 0;\r\n    color: #fff;\r\n    padding: 0.8rem;\r\n    border-radius: 3px;\r\n    transition: .2s ease;\r\n    background-color: var(--orange-color);\r\n    box-shadow: 0 2px 0 0 #bd5305;\r\n}\r\n\r\n.addr-book-top .btn:hover {\r\n    transform: translateY(1px);\r\n}\r\n\r\n.addr-book-list {\r\n    margin: 1rem;\r\n    min-height: 450px;\r\n}\r\n\r\n.addr-table {\r\n    margin-top: 2rem;\r\n    width: 100%;\r\n    text-align: left;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.addr-table thead{\r\n    border-bottom: 1px solid #e3e4f1;\r\n}\r\n\r\n.addr-table thead tr th {\r\n    padding-bottom: 0.8rem;\r\n}\r\n\r\n.addr-table tbody td {\r\n    padding: 1.5rem 0;\r\n    color: rgba(0, 0, 0, 0.6);\r\n    font-weight: 600;\r\n}\r\n\r\n.addr-table tbody td:nth-child(1){\r\n    padding-left: 0.5rem;\r\n    padding-right: 1rem;\r\n}\r\n\r\n.addr-table tbody td:nth-child(2){\r\n    font-weight: 800;\r\n}\r\n\r\n.addr-table .addressing-name {\r\n    color: var(--dark-blue);\r\n}\r\n\r\n.addr-table .address{\r\n    font-weight: 600;\r\n    color: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.addr-table tbody td:nth-child(3) span {\r\n    background-color: var(--light-grey-color);\r\n    display: inline-block;\r\n    padding: 0.3rem 0.6rem;\r\n    border-radius: 8px;\r\n}\r\n\r\n.addr-table tbody tr {\r\n    cursor:  pointer;\r\n}\r\n\r\n.addr-table tbody tr:hover {\r\n    background-color: var(--orange-color);\r\n    transition: .2s ease;\r\n    color: #fff;\r\n}\r\n\r\n.addr-table tbody tr:hover td, .addr-table tbody tr:hover span {\r\n    color: #fff;\r\n}\r\n\r\n.addr-table tbody tr:hover td:nth-child(3) span {\r\n    background-color: #fff;\r\n    color: rgba(0, 0, 0, 0.6)\r\n}\r\n\r\n/* for error message */\r\n.errorMsg {\r\n    border: 1px solid #d33c41;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./index.js */ "./src/index.js?dfde"), __webpack_require__.b);
// Module
var code = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width , initial-scale=1.0">
    <title>MailBook</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
     
    <!-- form modal -->
     <div id="fullscreen-div"></div>
     <form class="modal" id="modal">
        <div class="modal-content">
            <div class="modal-head">
                <h3 id="modal-title">Add Address</h3>
                <button type="button" id="close-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-main">

                <div class="modal-row">
                    <div class="modal-col full">
                        <label>How should your mail be addressed?</label>
                        <input type="text" name="addr_ing_name" placeholder="E.g The Smith Family" class="form-control">
                    </div>
                </div>

                <div class="modal-row grid-row">
                    <div class="modal-col">
                        <label>First Name</label>
                        <input type="text" name="first_name" placeholder="The first name" class="form-control">
                    </div>
                    <div class="modal-col">
                        <label>Last Name</label>
                        <input type="text" name="last_name" placeholder="The last name" class="form-control">
                    </div>
                </div>

                <div class="modal-row grid-row">
                    <div class="modal-col">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="The email" class="form-control">
                    </div>
                    <div class="modal-col">
                        <label>Phone</label>
                        <input type="text" name="phone" placeholder="The phone number" class="form-control">
                    </div>
                </div>

                <div class="modal-row grid-row">
                    <div class="modal-col">
                        <label>Street address</label>
                        <input type="text" name="street_address" placeholder="Street address, appartment, house number, etc." class="form-control">
                    </div>
                    <div class="modal-col">
                        <label>Postal Code</label>
                        <input type="text" name="postal_code" placeholder="60323" class="form-control">
                    </div>
                </div>

                <div class="modal-row grid-row">
                    <div class="modal-col">
                        <label>City</label>
                        <input type="text" name="city" placeholder="City name" class="form-control">
                    </div>
                    <div class="modal-col">
                        <label>Country</label>
                        <select name="country" id="country-list">
                            <option>USA</option>
                        </select>
                    </div>
                </div>

                <div class="modal-row">
                    <div class="modal-col full">
                        <label>Labels</label>
                        <select name="label" id="">
                            <option value="Family">Family</option>
                            <option value="Friends">Friends</option>
                            <option value="Colleagues">Colleagues</option>
                        </select>
                    </div>
                </div>
            
                <div class="modal-row" id="modal-btn">
                    <button type="submit" id="save-btn">Save</button>
                </div>
            </div>
        </div>
     </form>
    <!-- end form modal -->
     

    <!-- address book home -->
     <div class="addr-book" id="addr-book">
        <div class="addr-book-content">
            <div class="addr-book-head">
                <i class="fa-solid fa-address-book fa-2x"></i>
                <h2>Address<span>Book</span></h2>
            </div>
        </div>

        <div class="addr-book-top">
            <button type="button" class="btn" id="add-btn">
                <span><i class="fas fa-plus"></i>Add address
                </span>
            </button>
        </div>

        <div class="addr-book-list" id="addrt-book-list">
            <table class="addr-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Address</th>
                        <th>Labels</th>
                        <th>By Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <span class="addressing-name">Smith Family</span><br><span class="address">Johnson Street - 5668, Lake side</span>
                        </td>
                        <td><span>Colleagues</span></td>
                        <td>Mark Smith</td>
                        <td>123-456-7890</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>
                            <span class="addressing-name">Smith Family</span><br><span class="address">Johnson Street - 5668, Lake side</span>
                        </td>
                        <td><span>Colleagues</span></td>
                        <td>Mark Smith</td>
                        <td>123-456-7890</td>
                    </tr>
                </tbody>
            </table>
        </div>
     </div>
    <!-- end of address book home -->

    ${"<" + "script"} src="${___HTML_LOADER_IMPORT_0___}">${"<" + "/script"}>
</body>
</html>`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js?dfde":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/index.js";

/***/ }),

/***/ "./src/countries.json":
/*!****************************!*\
  !*** ./src/countries.json ***!
  \****************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"country":"Afghanistan","abbreviation":"AF"},{"country":"Albania","abbreviation":"AL"},{"country":"Algeria","abbreviation":"DZ"},{"country":"American Samoa","abbreviation":"AS"},{"country":"Andorra","abbreviation":"AD"},{"country":"Angola","abbreviation":"AO"},{"country":"Anguilla","abbreviation":"AI"},{"country":"Antarctica","abbreviation":"AQ"},{"country":"Antigua and Barbuda","abbreviation":"AG"},{"country":"Argentina","abbreviation":"AR"},{"country":"Armenia","abbreviation":"AM"},{"country":"Aruba","abbreviation":"AW"},{"country":"Australia","abbreviation":"AU"},{"country":"Austria","abbreviation":"AT"},{"country":"Azerbaijan","abbreviation":"AZ"},{"country":"Bahamas","abbreviation":"BS"},{"country":"Bahrain","abbreviation":"BH"},{"country":"Bangladesh","abbreviation":"BD"},{"country":"Barbados","abbreviation":"BB"},{"country":"Belarus","abbreviation":"BY"},{"country":"Belgium","abbreviation":"BE"},{"country":"Belize","abbreviation":"BZ"},{"country":"Benin","abbreviation":"BJ"},{"country":"Bermuda","abbreviation":"BM"},{"country":"Bhutan","abbreviation":"BT"},{"country":"Bolivia","abbreviation":"BO"},{"country":"Bosnia and Herzegovina","abbreviation":"BA"},{"country":"Botswana","abbreviation":"BW"},{"country":"Bouvet Island","abbreviation":"BV"},{"country":"Brazil","abbreviation":"BR"},{"country":"British Indian Ocean Territory","abbreviation":"IO"},{"country":"Brunei","abbreviation":"BN"},{"country":"Bulgaria","abbreviation":"BG"},{"country":"Burkina Faso","abbreviation":"BF"},{"country":"Burundi","abbreviation":"BI"},{"country":"Cambodia","abbreviation":"KH"},{"country":"Cameroon","abbreviation":"CM"},{"country":"Canada","abbreviation":"CA"},{"country":"Cape Verde","abbreviation":"CV"},{"country":"Cayman Islands","abbreviation":"KY"},{"country":"Central African Republic","abbreviation":"CF"},{"country":"Chad","abbreviation":"TD"},{"country":"Chile","abbreviation":"CL"},{"country":"China","abbreviation":"CN"},{"country":"Christmas Island","abbreviation":"CX"},{"country":"Cocos (Keeling) Islands","abbreviation":"CC"},{"country":"Colombia","abbreviation":"CO"},{"country":"Comoros","abbreviation":"KM"},{"country":"Congo","abbreviation":"CG"},{"country":"Cook Islands","abbreviation":"CK"},{"country":"Costa Rica","abbreviation":"CR"},{"country":"Croatia","abbreviation":"HR"},{"country":"Cuba","abbreviation":"CU"},{"country":"Cyprus","abbreviation":"CY"},{"country":"Czech Republic","abbreviation":"CZ"},{"country":"Denmark","abbreviation":"DK"},{"country":"Djibouti","abbreviation":"DJ"},{"country":"Dominica","abbreviation":"DM"},{"country":"Dominican Republic","abbreviation":"DO"},{"country":"East Timor","abbreviation":"TP"},{"country":"Ecuador","abbreviation":"EC"},{"country":"Egypt","abbreviation":"EG"},{"country":"El Salvador","abbreviation":"SV"},{"country":"Equatorial Guinea","abbreviation":"GQ"},{"country":"Eritrea","abbreviation":"ER"},{"country":"Estonia","abbreviation":"EE"},{"country":"Ethiopia","abbreviation":"ET"},{"country":"Falkland Islands","abbreviation":"FK"},{"country":"Faroe Islands","abbreviation":"FO"},{"country":"Fiji Islands","abbreviation":"FJ"},{"country":"Finland","abbreviation":"FI"},{"country":"France","abbreviation":"FR"},{"country":"French Guiana","abbreviation":"GF"},{"country":"French Polynesia","abbreviation":"PF"},{"country":"French Southern territories","abbreviation":"TF"},{"country":"Gabon","abbreviation":"GA"},{"country":"Gambia","abbreviation":"GM"},{"country":"Georgia","abbreviation":"GE"},{"country":"Germany","abbreviation":"DE"},{"country":"Ghana","abbreviation":"GH"},{"country":"Gibraltar","abbreviation":"GI"},{"country":"Greece","abbreviation":"GR"},{"country":"Greenland","abbreviation":"GL"},{"country":"Grenada","abbreviation":"GD"},{"country":"Guadeloupe","abbreviation":"GP"},{"country":"Guam","abbreviation":"GU"},{"country":"Guatemala","abbreviation":"GT"},{"country":"Guernsey","abbreviation":"GG"},{"country":"Guinea","abbreviation":"GN"},{"country":"Guinea-Bissau","abbreviation":"GW"},{"country":"Guyana","abbreviation":"GY"},{"country":"Haiti","abbreviation":"HT"},{"country":"Heard Island and McDonald Islands","abbreviation":"HM"},{"country":"Holy See (Vatican City State)","abbreviation":"VA"},{"country":"Honduras","abbreviation":"HN"},{"country":"Hong Kong","abbreviation":"HK"},{"country":"Hungary","abbreviation":"HU"},{"country":"Iceland","abbreviation":"IS"},{"country":"India","abbreviation":"IN"},{"country":"Indonesia","abbreviation":"ID"},{"country":"Iran","abbreviation":"IR"},{"country":"Iraq","abbreviation":"IQ"},{"country":"Ireland","abbreviation":"IE"},{"country":"Isle of Man","abbreviation":"IM"},{"country":"Israel","abbreviation":"IL"},{"country":"Italy","abbreviation":"IT"},{"country":"Ivory Coast","abbreviation":"CI"},{"country":"Jamaica","abbreviation":"JM"},{"country":"Japan","abbreviation":"JP"},{"country":"Jersey","abbreviation":"JE"},{"country":"Jordan","abbreviation":"JO"},{"country":"Kazakhstan","abbreviation":"KZ"},{"country":"Kenya","abbreviation":"KE"},{"country":"Kiribati","abbreviation":"KI"},{"country":"Kuwait","abbreviation":"KW"},{"country":"Kyrgyzstan","abbreviation":"KG"},{"country":"Laos","abbreviation":"LA"},{"country":"Latvia","abbreviation":"LV"},{"country":"Lebanon","abbreviation":"LB"},{"country":"Lesotho","abbreviation":"LS"},{"country":"Liberia","abbreviation":"LR"},{"country":"Libyan Arab Jamahiriya","abbreviation":"LY"},{"country":"Liechtenstein","abbreviation":"LI"},{"country":"Lithuania","abbreviation":"LT"},{"country":"Luxembourg","abbreviation":"LU"},{"country":"Macao","abbreviation":"MO"},{"country":"North Macedonia","abbreviation":"MK"},{"country":"Madagascar","abbreviation":"MG"},{"country":"Malawi","abbreviation":"MW"},{"country":"Malaysia","abbreviation":"MY"},{"country":"Maldives","abbreviation":"MV"},{"country":"Mali","abbreviation":"ML"},{"country":"Malta","abbreviation":"MT"},{"country":"Marshall Islands","abbreviation":"MH"},{"country":"Martinique","abbreviation":"MQ"},{"country":"Mauritania","abbreviation":"MR"},{"country":"Mauritius","abbreviation":"MU"},{"country":"Mayotte","abbreviation":"YT"},{"country":"Mexico","abbreviation":"MX"},{"country":"Micronesia, Federated States of","abbreviation":"FM"},{"country":"Moldova","abbreviation":"MD"},{"country":"Monaco","abbreviation":"MC"},{"country":"Mongolia","abbreviation":"MN"},{"country":"Montenegro","abbreviation":"ME"},{"country":"Montserrat","abbreviation":"MS"},{"country":"Morocco","abbreviation":"MA"},{"country":"Mozambique","abbreviation":"MZ"},{"country":"Myanmar","abbreviation":"MM"},{"country":"Namibia","abbreviation":"NA"},{"country":"Nauru","abbreviation":"NR"},{"country":"Nepal","abbreviation":"NP"},{"country":"Netherlands","abbreviation":"NL"},{"country":"Netherlands Antilles","abbreviation":"AN"},{"country":"New Caledonia","abbreviation":"NC"},{"country":"New Zealand","abbreviation":"NZ"},{"country":"Nicaragua","abbreviation":"NI"},{"country":"Niger","abbreviation":"NE"},{"country":"Nigeria","abbreviation":"NG"},{"country":"Niue","abbreviation":"NU"},{"country":"Norfolk Island","abbreviation":"NF"},{"country":"North Korea","abbreviation":"KP"},{"country":"Northern Ireland","abbreviation":"GB"},{"country":"Northern Mariana Islands","abbreviation":"MP"},{"country":"Norway","abbreviation":"NO"},{"country":"Oman","abbreviation":"OM"},{"country":"Pakistan","abbreviation":"PK"},{"country":"Palau","abbreviation":"PW"},{"country":"Palestine","abbreviation":"PS"},{"country":"Panama","abbreviation":"PA"},{"country":"Papua New Guinea","abbreviation":"PG"},{"country":"Paraguay","abbreviation":"PY"},{"country":"Peru","abbreviation":"PE"},{"country":"Philippines","abbreviation":"PH"},{"country":"Pitcairn","abbreviation":"PN"},{"country":"Poland","abbreviation":"PL"},{"country":"Portugal","abbreviation":"PT"},{"country":"Puerto Rico","abbreviation":"PR"},{"country":"Qatar","abbreviation":"QA"},{"country":"Reunion","abbreviation":"RE"},{"country":"Romania","abbreviation":"RO"},{"country":"Russian Federation","abbreviation":"RU"},{"country":"Rwanda","abbreviation":"RW"},{"country":"Saint Helena","abbreviation":"SH"},{"country":"Saint Kitts and Nevis","abbreviation":"KN"},{"country":"Saint Lucia","abbreviation":"LC"},{"country":"Saint Pierre and Miquelon","abbreviation":"PM"},{"country":"Saint Vincent and the Grenadines","abbreviation":"VC"},{"country":"Samoa","abbreviation":"WS"},{"country":"San Marino","abbreviation":"SM"},{"country":"Sao Tome and Principe","abbreviation":"ST"},{"country":"Saudi Arabia","abbreviation":"SA"},{"country":"Senegal","abbreviation":"SN"},{"country":"Serbia","abbreviation":"RS"},{"country":"Seychelles","abbreviation":"SC"},{"country":"Sierra Leone","abbreviation":"SL"},{"country":"Singapore","abbreviation":"SG"},{"country":"Slovakia","abbreviation":"SK"},{"country":"Slovenia","abbreviation":"SI"},{"country":"Solomon Islands","abbreviation":"SB"},{"country":"Somalia","abbreviation":"SO"},{"country":"South Africa","abbreviation":"ZA"},{"country":"South Georgia and the South Sandwich Islands","abbreviation":"GS"},{"country":"South Korea","abbreviation":"KR"},{"country":"South Sudan","abbreviation":"SS"},{"country":"Spain","abbreviation":"ES"},{"country":"Sri Lanka","abbreviation":"LK"},{"country":"Sudan","abbreviation":"SD"},{"country":"Suriname","abbreviation":"SR"},{"country":"Svalbard and Jan Mayen","abbreviation":"SJ"},{"country":"Swaziland","abbreviation":"SZ"},{"country":"Sweden","abbreviation":"SE"},{"country":"Switzerland","abbreviation":"CH"},{"country":"Syria","abbreviation":"SY"},{"country":"Tajikistan","abbreviation":"TJ"},{"country":"Tanzania","abbreviation":"TZ"},{"country":"Thailand","abbreviation":"TH"},{"country":"The Democratic Republic of Congo","abbreviation":"CD"},{"country":"Timor-Leste","abbreviation":"TL"},{"country":"Togo","abbreviation":"TG"},{"country":"Tokelau","abbreviation":"TK"},{"country":"Tonga","abbreviation":"TO"},{"country":"Trinidad and Tobago","abbreviation":"TT"},{"country":"Tunisia","abbreviation":"TN"},{"country":"Turkey","abbreviation":"TR"},{"country":"Turkmenistan","abbreviation":"TM"},{"country":"Turks and Caicos Islands","abbreviation":"TC"},{"country":"Tuvalu","abbreviation":"TV"},{"country":"Uganda","abbreviation":"UG"},{"country":"Ukraine","abbreviation":"UA"},{"country":"United Arab Emirates","abbreviation":"AE"},{"country":"United Kingdom","abbreviation":"UK"},{"country":"United States","abbreviation":"US"},{"country":"United States Minor Outlying Islands","abbreviation":"UM"},{"country":"Uruguay","abbreviation":"UY"},{"country":"Uzbekistan","abbreviation":"UZ"},{"country":"Vanuatu","abbreviation":"VU"},{"country":"Venezuela","abbreviation":"VE"},{"country":"Vietnam","abbreviation":"VN"},{"country":"Virgin Islands, British","abbreviation":"VG"},{"country":"Virgin Islands, U.S.","abbreviation":"VI"},{"country":"Wallis and Futuna","abbreviation":"WF"},{"country":"Western Sahara","abbreviation":"EH"},{"country":"Yemen","abbreviation":"YE"},{"country":"Zambia","abbreviation":"ZM"},{"country":"Zimbabwe","abbreviation":"ZW"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _countries_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countries.json */ "./src/countries.json");




// regular expression for validation
const strRegex =  /^[a-zA-Z\s]*$/; // containing only letters
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
/* supports following number formats - (123) 456-7890, (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 */
const digitRegex = /^\d+$/;

//////////////////////////

const counrtyList = document.getElementById('country-list');
const fullscreenDiv = document.getElementById('fullscreen-div');
const addBtn = document.getElementById('add-btn');
const closeBtn = document.getElementById('close-btn');
const modalBtn = document.getElementById('modal-btn');
const form = document.getElementById('modal');
const addrBookList = document.querySelector('#addr-book-list tbody');

//////////////////////////

let addrName = "";
let firstName = "";
let lastName = "";
let email = "";
let phone = "";
let streetAddr = "";
let postCode = "";
let city = "";
let country = "";
let labels = "";
// UI class 

class UI {
    static showModal() {
        form.style.display = "block";
        fullscreenDiv.style.display = "block";
    }

    static closeModal() {
        modal.style.display = "none";
        fullscreenDiv.style.display = "none"
    }
}


//DOM content Loaded 
window.addEventListener('DOMContentLoaded', () => {
    loadJSON();
    addEventListeners();
})

//event listeners
function addEventListeners(){
    // show add item modal
    addBtn.addEventListener('click', () => {
        form.reset();
        UI.showModal();
    })
    // close add item modal
    closeBtn.addEventListener('click', UI.closeModal);

    // add an address item
    modalBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if(event.target.id == "save-btn"){
            let isFormValid = getFormData();
            if(!isFormValid) {
                form.querySelector('input').forEach(input => {
                    setTimeout(() => {
                       input.classList.remove('errorMsg');
                    }, 2500);
                })
            }
        }
    })
}

//load countries list 
function loadJSON() {
        let html = "";
        _countries_json__WEBPACK_IMPORTED_MODULE_2__.forEach(country => {
            html += `<option> ${country.country} </option>`;
        });
        counrtyList.innerHTML = html;
    }

// get form data
function getFormData() {
    let inputValidStatus = [];
    if(!strRegex.test(form.addr_ing_name.value) || form.addr_ing_name.value.trim().length == 0){
        addErrMsg(form.addr_ing_name);
        inputValidStatus[0] = false;
    } else {
        addrName = form.addr_ing_name.value;
        inputValidStatus[0] = true;
    }

    if(!strRegex.test(form.first_name.value) || form.first_name.value.trim().length == 0){
        addErrMsg(form.first_name);
        inputValidStatus[1] = false;
    } else {
        firstName = form.first_name.value;
        inputValidStatus[1] = true;
    }

    if(!strRegex.test(form.last_name.value) || form.last_name.value.trim().length == 0){
        addErrMsg(form.last_name);
        inputValidStatus[2] = false;
    } else {
        lastName = form.last_name.value;
        inputValidStatus[2] = true;
    }

    if(!emailRegex.test(form.email.value)){
        addErrMsg(form.email);
        inputValidStatus[3] = false;
    } else {
        email = form.email.value;
        inputValidStatus[3] = true;
    }
    
    if(!phoneRegex.test(form.phone.value)){
        addErrMsg(form.phone);
        inputValidStatus[4] = false;
    } else {
        phone = form.phone.value;
        inputValidStatus[4] = true;
    }

    if(!(form.street_addr.value.trim().length > 0)){
        addErrMsg(form.street_addr);
        inputValidStatus[5] = false;
    } else {
        streetAddr = form.street_addr.value;
        inputValidStatus[5] = true;
    }

    if(!digitRegex.test(form.postal_code.value)){
        addErrMsg(form.postal_code);
        inputValidStatus[6] = false;
    } else {
        postCode = form.postal_code.value;
        inputValidStatus[6] = true;
    }

    if(!strRegex.test(form.city.value) || form.city.value.trim().length == 0){
        addErrMsg(form.city);
        inputValidStatus[7] = false;
    } else {
        city = form.city.value;
        inputValidStatus[7] = true;
    }
    country = form.country.value;
    labels = form.labels.value;
    return inputValidStatus.includes(false) ? false : true;
}

function addErrMsg(inputBox) {
    inputBox.classList.add('errorMsg')
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jYjExYWY4MTYxOTNkMGY0NjAzOS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDRIQUE0SCxrRUFBa0UsK0JBQStCO0FBQzdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEs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QUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXBsZXdlYi8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vc2ltcGxld2ViLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zaW1wbGV3ZWIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zaW1wbGV3ZWIvLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9zaW1wbGV3ZWIvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vc2ltcGxld2ViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NpbXBsZXdlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2ltcGxld2ViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NpbXBsZXdlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zaW1wbGV3ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zaW1wbGV3ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zaW1wbGV3ZWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2ltcGxld2ViL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NpbXBsZXdlYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2ltcGxld2ViL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc2ltcGxld2ViL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2ltcGxld2ViL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2ltcGxld2ViL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3NpbXBsZXdlYi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zaW1wbGV3ZWIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NpbXBsZXdlYi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzppdGFsLHdnaHRAMCwyMDAuLjEwMDA7MSwyMDAuLjEwMDAmZmFtaWx5PVNvdXJjZStTZXJpZis0Oml0YWwsb3Bzeix3Z2h0QDAsOC4uNjAsMjAwLi45MDA7MSw4Li42MCwyMDAuLjkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gICAgLS1vcmFuZ2UtY29sb3I6ICNmYThlM2Y7XHJcbiAgICAtLWdyZXk6ICNiOGI3YmM7XHJcbiAgICAtLWxpZ2h0LWdyZXktY29sb3I6ICNmM2Y1ZjE7XHJcbiAgICAtLWRhcmstYmx1ZTogIzAyMDEyNTtcclxuICAgIC0tY2FyYmItZ3JlZW4tY29sb3I6ICMwMmJmYWU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5LWNvbG9yKTtcclxufVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1IHtcclxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xyXG59XHJcblxyXG5pbnB1dCwgYnV0dG9uIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogbW9kYWwgKi9cclxuXHJcbiNmdWxsc2NyaW4tZGl2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAycmVtO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLm1vZGFsLWhlYWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDEuMnJlbSAyLjRyZW07XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZCBoMyB7XHJcbiAgICBjb2xvcjogICNmZmY7XHJcbn1cclxuXHJcbiNjbG9zZS1idG4ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcclxuICAgIHRvcDogMXJlbTtcclxuICAgIHJpZ2h0OiAxLjVyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG59XHJcblxyXG4jY2xvc2UtYnRuOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLm1vZGFsLW1haW4ge1xyXG4gICAgcGFkZGluZzogMS4ycmVtIDIuNHJlbSAxcmVtIDIuNHJlbTtcclxuICAgIG1heC13aWR0aDogNTgwcHg7XHJcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4ubW9kYWwtcm93IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcclxufVxyXG5cclxuLmdyaWQtcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubW9kYWwtY29sIHtcclxuICAgIHdpZHRoOiA0NyU7XHJcbn1cclxuXHJcbi5tb2RhbC1jb2wuZnVsbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1vZGFsLWNvbCBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcclxufVxyXG5cclxuLm1vZGFsLWNvbCBpbnB1dCwgLm1vZGFsLWNvbCBzZWxlY3Qge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODQsIDE4MywgMTg4LCAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNtb2RhbC1idG4gYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4NCwgMTgzLCAxODgsIDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAwLjZyZW0gMnJlbTtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxufVxyXG5cclxuI21vZGFsLWJ0biBidXR0b246aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XHJcbn1cclxuXHJcbiNzYXZlLWJ0biwgI3VwZGF0ZS1idG4ge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMCAwICNiZDUzMDU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XHJcbn1cclxuXHJcbiNzYXZlLWJ0bjpob3ZlciwgI3VwZGF0ZS1idG46aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMCAwICNiZDUzMDU7XHJcbn1cclxuXHJcbiNkZWxldGUtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzNjNDE7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAwIDAgIzhhMWYyMztcclxufVxyXG5cclxuI2RlbGV0ZS1idG46aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMCAwICM4YTFmMjM7XHJcbn1cclxuXHJcbi8qIGFkZHJlc3MgbGlzdCAqL1xyXG4uYWRkci1ib29rIHtcclxuICAgIHBhZGRpbmc6IDEuNHJlbTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xyXG59XHJcblxyXG4uYWRkci1ib29rLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEuNnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmFkZHItYm9vay1oZWFkIHtcclxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZHItYm9vay1oZWFkIGgye1xyXG4gICAgZm9udC1zaXplOiAyLjJyZW07XHJcbn1cclxuXHJcbi5hZGRyLWJvb2staGVhZCBpe1xyXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XHJcbn1cclxuXHJcbi5hZGRyLWJvb2stdG9wIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMDtcclxufVxyXG5cclxuLmFkZHItYm9vay10b3AgLmJ0biB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAuOHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgMCAjYmQ1MzA1O1xyXG59XHJcblxyXG4uYWRkci1ib29rLXRvcCAuYnRuOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xyXG59XHJcblxyXG4uYWRkci1ib29rLWxpc3Qge1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgbWluLWhlaWdodDogNDUwcHg7XHJcbn1cclxuXHJcbi5hZGRyLXRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4uYWRkci10YWJsZSB0aGVhZHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlNGYxO1xyXG59XHJcblxyXG4uYWRkci10YWJsZSB0aGVhZCB0ciB0aCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44cmVtO1xyXG59XHJcblxyXG4uYWRkci10YWJsZSB0Ym9keSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYWRkci10YWJsZSB0Ym9keSB0ZDpudGgtY2hpbGQoMSl7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5hZGRyLXRhYmxlIHRib2R5IHRkOm50aC1jaGlsZCgyKXtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5hZGRyLXRhYmxlIC5hZGRyZXNzaW5nLW5hbWUge1xyXG4gICAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XHJcbn1cclxuXHJcbi5hZGRyLXRhYmxlIC5hZGRyZXNze1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbn1cclxuXHJcbi5hZGRyLXRhYmxlIHRib2R5IHRkOm50aC1jaGlsZCgzKSBzcGFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXktY29sb3IpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmFkZHItdGFibGUgdGJvZHkgdHIge1xyXG4gICAgY3Vyc29yOiAgcG9pbnRlcjtcclxufVxyXG5cclxuLmFkZHItdGFibGUgdGJvZHkgdHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcclxuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5hZGRyLXRhYmxlIHRib2R5IHRyOmhvdmVyIHRkLCAuYWRkci10YWJsZSB0Ym9keSB0cjpob3ZlciBzcGFuIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYWRkci10YWJsZSB0Ym9keSB0cjpob3ZlciB0ZDpudGgtY2hpbGQoMykgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KVxyXG59XHJcblxyXG4vKiBmb3IgZXJyb3IgbWVzc2FnZSAqL1xyXG4uZXJyb3JNc2cge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QzM2M0MTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxVQUFVOztBQUVWO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1Asb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCxTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGFBQWE7SUFDYixjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFDQUFxQztJQUNyQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHFDQUFxQztJQUNyQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxvQkFBb0I7SUFDcEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0kseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzppdGFsLHdnaHRAMCwyMDAuLjEwMDA7MSwyMDAuLjEwMDAmZmFtaWx5PVNvdXJjZStTZXJpZis0Oml0YWwsb3Bzeix3Z2h0QDAsOC4uNjAsMjAwLi45MDA7MSw4Li42MCwyMDAuLjkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1vcmFuZ2UtY29sb3I6ICNmYThlM2Y7XFxyXFxuICAgIC0tZ3JleTogI2I4YjdiYztcXHJcXG4gICAgLS1saWdodC1ncmV5LWNvbG9yOiAjZjNmNWYxO1xcclxcbiAgICAtLWRhcmstYmx1ZTogIzAyMDEyNTtcXHJcXG4gICAgLS1jYXJiYi1ncmVlbi1jb2xvcjogIzAyYmZhZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsIGJ1dHRvbiB7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogbW9kYWwgKi9cXHJcXG5cXHJcXG4jZnVsbHNjcmluLWRpdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDJyZW07XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDNweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaGVhZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XFxyXFxuICAgIHBhZGRpbmc6IDEuMnJlbSAyLjRyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaGVhZCBoMyB7XFxyXFxuICAgIGNvbG9yOiAgI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuI2Nsb3NlLWJ0biB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xcclxcbiAgICB0b3A6IDFyZW07XFxyXFxuICAgIHJpZ2h0OiAxLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvc2UtYnRuOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtbWFpbiB7XFxyXFxuICAgIHBhZGRpbmc6IDEuMnJlbSAyLjRyZW0gMXJlbSAyLjRyZW07XFxyXFxuICAgIG1heC13aWR0aDogNTgwcHg7XFxyXFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1yb3cge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5ncmlkLXJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogIHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb2wge1xcclxcbiAgICB3aWR0aDogNDclO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29sLmZ1bGwge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbCBsYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29sIGlucHV0LCAubW9kYWwtY29sIHNlbGVjdCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTg0LCAxODMsIDE4OCwgMC41KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9kYWwtYnRuIGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODQsIDE4MywgMTg4LCAwLjUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuNnJlbSAycmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNtb2RhbC1idG4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XFxyXFxufVxcclxcblxcclxcbiNzYXZlLWJ0biwgI3VwZGF0ZS1idG4ge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDJweCAwIDAgI2JkNTMwNTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XFxyXFxufVxcclxcblxcclxcbiNzYXZlLWJ0bjpob3ZlciwgI3VwZGF0ZS1idG46aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIDAgI2JkNTMwNTtcXHJcXG59XFxyXFxuXFxyXFxuI2RlbGV0ZS1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMzYzQxO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDJweCAwIDAgIzhhMWYyMztcXHJcXG59XFxyXFxuXFxyXFxuI2RlbGV0ZS1idG46aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIDAgIzhhMWYyMztcXHJcXG59XFxyXFxuXFxyXFxuLyogYWRkcmVzcyBsaXN0ICovXFxyXFxuLmFkZHItYm9vayB7XFxyXFxuICAgIHBhZGRpbmc6IDEuNHJlbTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkci1ib29rLWNvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxLjZyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHItYm9vay1oZWFkIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRyLWJvb2staGVhZCBoMntcXHJcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRyLWJvb2staGVhZCBpe1xcclxcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHItYm9vay10b3Age1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5hZGRyLWJvb2stdG9wIC5idG4ge1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAwLjhyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgMCAjYmQ1MzA1O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkci1ib29rLXRvcCAuYnRuOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XFxyXFxufVxcclxcblxcclxcbi5hZGRyLWJvb2stbGlzdCB7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgbWluLWhlaWdodDogNDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRyLXRhYmxlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxufVxcclxcblxcclxcbi5hZGRyLXRhYmxlIHRoZWFke1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTRmMTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHItdGFibGUgdGhlYWQgdHIgdGgge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkci10YWJsZSB0Ym9keSB0ZCB7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkci10YWJsZSB0Ym9keSB0ZDpudGgtY2hpbGQoMSl7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkci10YWJsZSB0Ym9keSB0ZDpudGgtY2hpbGQoMil7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbi5hZGRyLXRhYmxlIC5hZGRyZXNzaW5nLW5hbWUge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHItdGFibGUgLmFkZHJlc3N7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxufVxcclxcblxcclxcbi5hZGRyLXRhYmxlIHRib2R5IHRkOm50aC1jaGlsZCgzKSBzcGFuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleS1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkci10YWJsZSB0Ym9keSB0ciB7XFxyXFxuICAgIGN1cnNvcjogIHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRyLXRhYmxlIHRib2R5IHRyOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2U7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkci10YWJsZSB0Ym9keSB0cjpob3ZlciB0ZCwgLmFkZHItdGFibGUgdGJvZHkgdHI6aG92ZXIgc3BhbiB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkci10YWJsZSB0Ym9keSB0cjpob3ZlciB0ZDpudGgtY2hpbGQoMykgc3BhbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNilcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9yIGVycm9yIG1lc3NhZ2UgKi9cXHJcXG4uZXJyb3JNc2cge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDMzYzQxO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2luZGV4LmpzXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBjb2RlID0gYDwhRE9DVFlQRSBodG1sPlxyXG48aHRtbCBsYW5nPVwiZW5cIj5cclxuPGhlYWQ+XHJcbiAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj5cclxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGggLCBpbml0aWFsLXNjYWxlPTEuMFwiPlxyXG4gICAgPHRpdGxlPk1haWxCb29rPC90aXRsZT5cclxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzYuNi4wL2Nzcy9hbGwubWluLmNzc1wiIGludGVncml0eT1cInNoYTUxMi1LYzMyM3ZHQkVxelRtb3VBRUNuVmNleVFxeXFkc1NpcUxRSVNCTDI5YVVXNFUvTTdwU1BBL2dFVVpRcXYxY3d4NE9uWXhUeHZlNVVNZzVHVDZMNEpKZz09XCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyXCIgLz5cclxuPC9oZWFkPlxyXG48Ym9keT5cclxuICAgICBcclxuICAgIDwhLS0gZm9ybSBtb2RhbCAtLT5cclxuICAgICA8ZGl2IGlkPVwiZnVsbHNjcmVlbi1kaXZcIj48L2Rpdj5cclxuICAgICA8Zm9ybSBjbGFzcz1cIm1vZGFsXCIgaWQ9XCJtb2RhbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgaWQ9XCJtb2RhbC10aXRsZVwiPkFkZCBBZGRyZXNzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2xvc2UtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1tYWluXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb2wgZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SG93IHNob3VsZCB5b3VyIG1haWwgYmUgYWRkcmVzc2VkPzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyX2luZ19uYW1lXCIgcGxhY2Vob2xkZXI9XCJFLmcgVGhlIFNtaXRoIEZhbWlseVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcm93IGdyaWQtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmaXJzdF9uYW1lXCIgcGxhY2Vob2xkZXI9XCJUaGUgZmlyc3QgbmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TGFzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxhc3RfbmFtZVwiIHBsYWNlaG9sZGVyPVwiVGhlIGxhc3QgbmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcm93IGdyaWQtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJUaGUgZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lXCIgcGxhY2Vob2xkZXI9XCJUaGUgcGhvbmUgbnVtYmVyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1yb3cgZ3JpZC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TdHJlZXQgYWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdHJlZXRfYWRkcmVzc1wiIHBsYWNlaG9sZGVyPVwiU3RyZWV0IGFkZHJlc3MsIGFwcGFydG1lbnQsIGhvdXNlIG51bWJlciwgZXRjLlwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UG9zdGFsIENvZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicG9zdGFsX2NvZGVcIiBwbGFjZWhvbGRlcj1cIjYwMzIzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1yb3cgZ3JpZC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiBwbGFjZWhvbGRlcj1cIkNpdHkgbmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q291bnRyeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImNvdW50cnlcIiBpZD1cImNvdW50cnktbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5VU0E8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbCBmdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5MYWJlbHM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJsYWJlbFwiIGlkPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmFtaWx5XCI+RmFtaWx5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRnJpZW5kc1wiPkZyaWVuZHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDb2xsZWFndWVzXCI+Q29sbGVhZ3Vlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1yb3dcIiBpZD1cIm1vZGFsLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwic2F2ZS1idG5cIj5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgPC9mb3JtPlxyXG4gICAgPCEtLSBlbmQgZm9ybSBtb2RhbCAtLT5cclxuICAgICBcclxuXHJcbiAgICA8IS0tIGFkZHJlc3MgYm9vayBob21lIC0tPlxyXG4gICAgIDxkaXYgY2xhc3M9XCJhZGRyLWJvb2tcIiBpZD1cImFkZHItYm9va1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZGRyLWJvb2stY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkci1ib29rLWhlYWRcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtYWRkcmVzcy1ib29rIGZhLTJ4XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGgyPkFkZHJlc3M8c3Bhbj5Cb29rPC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkci1ib29rLXRvcFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0blwiIGlkPVwiYWRkLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT5BZGQgYWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFkZHItYm9vay1saXN0XCIgaWQ9XCJhZGRydC1ib29rLWxpc3RcIj5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiYWRkci10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGFiZWxzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkJ5IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGhvbmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFkZHJlc3NpbmctbmFtZVwiPlNtaXRoIEZhbWlseTwvc3Bhbj48YnI+PHNwYW4gY2xhc3M9XCJhZGRyZXNzXCI+Sm9obnNvbiBTdHJlZXQgLSA1NjY4LCBMYWtlIHNpZGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3Bhbj5Db2xsZWFndWVzPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NYXJrIFNtaXRoPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjEyMy00NTYtNzg5MDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWRkcmVzc2luZy1uYW1lXCI+U21pdGggRmFtaWx5PC9zcGFuPjxicj48c3BhbiBjbGFzcz1cImFkZHJlc3NcIj5Kb2huc29uIFN0cmVldCAtIDU2NjgsIExha2Ugc2lkZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzcGFuPkNvbGxlYWd1ZXM8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk1hcmsgU21pdGg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTIzLTQ1Ni03ODkwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICA8L2Rpdj5cclxuICAgIDwhLS0gZW5kIG9mIGFkZHJlc3MgYm9vayBob21lIC0tPlxyXG5cclxuICAgICR7XCI8XCIgKyBcInNjcmlwdFwifSBzcmM9XCIke19fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19ffVwiPiR7XCI8XCIgKyBcIi9zY3JpcHRcIn0+XHJcbjwvYm9keT5cclxuPC9odG1sPmA7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcclxuaW1wb3J0ICcuL2luZGV4Lmh0bWwnO1xyXG5pbXBvcnQgZGF0YUNvdW50cmllcyBmcm9tICcuL2NvdW50cmllcy5qc29uJ1xyXG5cclxuLy8gcmVndWxhciBleHByZXNzaW9uIGZvciB2YWxpZGF0aW9uXHJcbmNvbnN0IHN0clJlZ2V4ID0gIC9eW2EtekEtWlxcc10qJC87IC8vIGNvbnRhaW5pbmcgb25seSBsZXR0ZXJzXHJcbmNvbnN0IGVtYWlsUmVnZXggPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG5jb25zdCBwaG9uZVJlZ2V4ID0gL15bXFwrXT9bKF0/WzAtOV17M31bKV0/Wy1cXHNcXC5dP1swLTldezN9Wy1cXHNcXC5dP1swLTldezQsNn0kL2ltO1xyXG4vKiBzdXBwb3J0cyBmb2xsb3dpbmcgbnVtYmVyIGZvcm1hdHMgLSAoMTIzKSA0NTYtNzg5MCwgKDEyMyk0NTYtNzg5MCwgMTIzLTQ1Ni03ODkwLCAxMjMuNDU2Ljc4OTAsIDEyMzQ1Njc4OTAsICszMTYzNjM2MzYzNCwgMDc1LTYzNTQ2NzI1ICovXHJcbmNvbnN0IGRpZ2l0UmVnZXggPSAvXlxcZCskLztcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5jb25zdCBjb3VucnR5TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudHJ5LWxpc3QnKTtcclxuY29uc3QgZnVsbHNjcmVlbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsc2NyZWVuLWRpdicpO1xyXG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJ0bicpO1xyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1idG4nKTtcclxuY29uc3QgbW9kYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYnRuJyk7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuY29uc3QgYWRkckJvb2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHItYm9vay1saXN0IHRib2R5Jyk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxubGV0IGFkZHJOYW1lID0gXCJcIjtcclxubGV0IGZpcnN0TmFtZSA9IFwiXCI7XHJcbmxldCBsYXN0TmFtZSA9IFwiXCI7XHJcbmxldCBlbWFpbCA9IFwiXCI7XHJcbmxldCBwaG9uZSA9IFwiXCI7XHJcbmxldCBzdHJlZXRBZGRyID0gXCJcIjtcclxubGV0IHBvc3RDb2RlID0gXCJcIjtcclxubGV0IGNpdHkgPSBcIlwiO1xyXG5sZXQgY291bnRyeSA9IFwiXCI7XHJcbmxldCBsYWJlbHMgPSBcIlwiO1xyXG4vLyBVSSBjbGFzcyBcclxuXHJcbmNsYXNzIFVJIHtcclxuICAgIHN0YXRpYyBzaG93TW9kYWwoKSB7XHJcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGZ1bGxzY3JlZW5EaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xvc2VNb2RhbCgpIHtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZnVsbHNjcmVlbkRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vRE9NIGNvbnRlbnQgTG9hZGVkIFxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGxvYWRKU09OKCk7XHJcbiAgICBhZGRFdmVudExpc3RlbmVycygpO1xyXG59KVxyXG5cclxuLy9ldmVudCBsaXN0ZW5lcnNcclxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKXtcclxuICAgIC8vIHNob3cgYWRkIGl0ZW0gbW9kYWxcclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgVUkuc2hvd01vZGFsKCk7XHJcbiAgICB9KVxyXG4gICAgLy8gY2xvc2UgYWRkIGl0ZW0gbW9kYWxcclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuY2xvc2VNb2RhbCk7XHJcblxyXG4gICAgLy8gYWRkIGFuIGFkZHJlc3MgaXRlbVxyXG4gICAgbW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC5pZCA9PSBcInNhdmUtYnRuXCIpe1xyXG4gICAgICAgICAgICBsZXQgaXNGb3JtVmFsaWQgPSBnZXRGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBpZighaXNGb3JtVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvck1zZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDI1MDApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8vbG9hZCBjb3VudHJpZXMgbGlzdCBcclxuZnVuY3Rpb24gbG9hZEpTT04oKSB7XHJcbiAgICAgICAgbGV0IGh0bWwgPSBcIlwiO1xyXG4gICAgICAgIGRhdGFDb3VudHJpZXMuZm9yRWFjaChjb3VudHJ5ID0+IHtcclxuICAgICAgICAgICAgaHRtbCArPSBgPG9wdGlvbj4gJHtjb3VudHJ5LmNvdW50cnl9IDwvb3B0aW9uPmA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY291bnJ0eUxpc3QuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgIH1cclxuXHJcbi8vIGdldCBmb3JtIGRhdGFcclxuZnVuY3Rpb24gZ2V0Rm9ybURhdGEoKSB7XHJcbiAgICBsZXQgaW5wdXRWYWxpZFN0YXR1cyA9IFtdO1xyXG4gICAgaWYoIXN0clJlZ2V4LnRlc3QoZm9ybS5hZGRyX2luZ19uYW1lLnZhbHVlKSB8fCBmb3JtLmFkZHJfaW5nX25hbWUudmFsdWUudHJpbSgpLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICBhZGRFcnJNc2coZm9ybS5hZGRyX2luZ19uYW1lKTtcclxuICAgICAgICBpbnB1dFZhbGlkU3RhdHVzWzBdID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFkZHJOYW1lID0gZm9ybS5hZGRyX2luZ19uYW1lLnZhbHVlO1xyXG4gICAgICAgIGlucHV0VmFsaWRTdGF0dXNbMF0gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCFzdHJSZWdleC50ZXN0KGZvcm0uZmlyc3RfbmFtZS52YWx1ZSkgfHwgZm9ybS5maXJzdF9uYW1lLnZhbHVlLnRyaW0oKS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgYWRkRXJyTXNnKGZvcm0uZmlyc3RfbmFtZSk7XHJcbiAgICAgICAgaW5wdXRWYWxpZFN0YXR1c1sxXSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmaXJzdE5hbWUgPSBmb3JtLmZpcnN0X25hbWUudmFsdWU7XHJcbiAgICAgICAgaW5wdXRWYWxpZFN0YXR1c1sxXSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIXN0clJlZ2V4LnRlc3QoZm9ybS5sYXN0X25hbWUudmFsdWUpIHx8IGZvcm0ubGFzdF9uYW1lLnZhbHVlLnRyaW0oKS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgYWRkRXJyTXNnKGZvcm0ubGFzdF9uYW1lKTtcclxuICAgICAgICBpbnB1dFZhbGlkU3RhdHVzWzJdID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxhc3ROYW1lID0gZm9ybS5sYXN0X25hbWUudmFsdWU7XHJcbiAgICAgICAgaW5wdXRWYWxpZFN0YXR1c1syXSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIWVtYWlsUmVnZXgudGVzdChmb3JtLmVtYWlsLnZhbHVlKSl7XHJcbiAgICAgICAgYWRkRXJyTXNnKGZvcm0uZW1haWwpO1xyXG4gICAgICAgIGlucHV0VmFsaWRTdGF0dXNbM10gPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZW1haWwgPSBmb3JtLmVtYWlsLnZhbHVlO1xyXG4gICAgICAgIGlucHV0VmFsaWRTdGF0dXNbM10gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZighcGhvbmVSZWdleC50ZXN0KGZvcm0ucGhvbmUudmFsdWUpKXtcclxuICAgICAgICBhZGRFcnJNc2coZm9ybS5waG9uZSk7XHJcbiAgICAgICAgaW5wdXRWYWxpZFN0YXR1c1s0XSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwaG9uZSA9IGZvcm0ucGhvbmUudmFsdWU7XHJcbiAgICAgICAgaW5wdXRWYWxpZFN0YXR1c1s0XSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIShmb3JtLnN0cmVldF9hZGRyLnZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSl7XHJcbiAgICAgICAgYWRkRXJyTXNnKGZvcm0uc3RyZWV0X2FkZHIpO1xyXG4gICAgICAgIGlucHV0VmFsaWRTdGF0dXNbNV0gPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RyZWV0QWRkciA9IGZvcm0uc3RyZWV0X2FkZHIudmFsdWU7XHJcbiAgICAgICAgaW5wdXRWYWxpZFN0YXR1c1s1XSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIWRpZ2l0UmVnZXgudGVzdChmb3JtLnBvc3RhbF9jb2RlLnZhbHVlKSl7XHJcbiAgICAgICAgYWRkRXJyTXNnKGZvcm0ucG9zdGFsX2NvZGUpO1xyXG4gICAgICAgIGlucHV0VmFsaWRTdGF0dXNbNl0gPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcG9zdENvZGUgPSBmb3JtLnBvc3RhbF9jb2RlLnZhbHVlO1xyXG4gICAgICAgIGlucHV0VmFsaWRTdGF0dXNbNl0gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCFzdHJSZWdleC50ZXN0KGZvcm0uY2l0eS52YWx1ZSkgfHwgZm9ybS5jaXR5LnZhbHVlLnRyaW0oKS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgYWRkRXJyTXNnKGZvcm0uY2l0eSk7XHJcbiAgICAgICAgaW5wdXRWYWxpZFN0YXR1c1s3XSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjaXR5ID0gZm9ybS5jaXR5LnZhbHVlO1xyXG4gICAgICAgIGlucHV0VmFsaWRTdGF0dXNbN10gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgY291bnRyeSA9IGZvcm0uY291bnRyeS52YWx1ZTtcclxuICAgIGxhYmVscyA9IGZvcm0ubGFiZWxzLnZhbHVlO1xyXG4gICAgcmV0dXJuIGlucHV0VmFsaWRTdGF0dXMuaW5jbHVkZXMoZmFsc2UpID8gZmFsc2UgOiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFcnJNc2coaW5wdXRCb3gpIHtcclxuICAgIGlucHV0Qm94LmNsYXNzTGlzdC5hZGQoJ2Vycm9yTXNnJylcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=