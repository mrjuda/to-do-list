"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  text-decoration: none;\n  background-color: #f8f8f8;\n  margin: 0;\n  padding: 0;\n}\nbody ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.hidden {\n  display: none;\n}\n\n.to-do-container {\n  background-color: #fff;\n  font-size: 1.2rem;\n  margin: 1rem 4rem;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0.2rem 0.2rem 0.9rem #bbb;\n}\n.to-do-container .to-do-header {\n  display: grid;\n  grid-template-columns: auto 2.5rem;\n  padding: 0.4rem 0.4rem;\n  border-bottom: 1px solid #ddd;\n}\n.to-do-container .to-do-header .to-do-header-title {\n  text-align: left;\n  padding: 0.4rem 0.4rem;\n}\n.to-do-container .to-do-header .refresh-btn {\n  color: #777;\n  margin: 0.4rem 1rem;\n  width: 1rem;\n  height: 1rem;\n  cursor: pointer;\n}\n.to-do-container .to-do-header .refresh-btn::before {\n  content: \"⇅\";\n}\n.to-do-container .add-new {\n  display: grid;\n  grid-template-columns: auto 2.5rem;\n  padding: 0.4rem 0.4rem;\n  border-bottom: 1px solid #ddd;\n}\n.to-do-container .add-new input {\n  font-size: 1.2rem;\n  font-style: italic;\n}\n.to-do-container .add-new .new-input {\n  padding: 0.4rem 0.4rem;\n  outline: none;\n  border: none;\n}\n.to-do-container .add-new .new-input::placeholder {\n  color: #888;\n}\n.to-do-container .add-new .new-input-btn {\n  color: #777;\n  margin: 0.4rem 1rem;\n  width: 1rem;\n  height: 1rem;\n  cursor: pointer;\n}\n.to-do-container .add-new .new-input-btn::before {\n  content: \"↵\";\n}\n.to-do-container ul,\n.to-do-container .task-container {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.to-do-container ul li,\n.to-do-container ul .unchecked-slot,\n.to-do-container .task-container li,\n.to-do-container .task-container .unchecked-slot {\n  display: grid;\n  grid-template-columns: 2.5rem auto 2.5rem;\n  margin: 0;\n  padding: 0.4rem 0.4rem;\n  border-bottom: 1px solid #ddd;\n  align-items: center;\n}\n.to-do-container ul li .box,\n.to-do-container ul .unchecked-slot .box,\n.to-do-container .task-container li .box,\n.to-do-container .task-container .unchecked-slot .box {\n  margin: 0.4rem;\n  width: 1rem;\n  height: 1rem;\n  cursor: pointer;\n}\n.to-do-container ul li .unchecked,\n.to-do-container ul .unchecked-slot .unchecked,\n.to-do-container .task-container li .unchecked,\n.to-do-container .task-container .unchecked-slot .unchecked {\n  border: solid #888 2px;\n  border-radius: 0.2rem;\n}\n.to-do-container ul li .checked,\n.to-do-container ul .unchecked-slot .checked,\n.to-do-container .task-container li .checked,\n.to-do-container .task-container .unchecked-slot .checked {\n  color: #00c;\n  font-size: 2rem;\n  transform: rotate(135deg);\n  transform-origin: 90% 90%;\n  cursor: pointer;\n}\n.to-do-container ul li .checked::before,\n.to-do-container ul .unchecked-slot .checked::before,\n.to-do-container .task-container li .checked::before,\n.to-do-container .task-container .unchecked-slot .checked::before {\n  content: \"¬\";\n}\n.to-do-container ul li .task,\n.to-do-container ul .unchecked-slot .task,\n.to-do-container .task-container li .task,\n.to-do-container .task-container .unchecked-slot .task {\n  text-align: left;\n  margin: 0.4rem;\n}\n.to-do-container ul li .task::before,\n.to-do-container ul .unchecked-slot .task::before,\n.to-do-container .task-container li .task::before,\n.to-do-container .task-container .unchecked-slot .task::before {\n  content: \"\";\n}\n.to-do-container ul li .done,\n.to-do-container ul .unchecked-slot .done,\n.to-do-container .task-container li .done,\n.to-do-container .task-container .unchecked-slot .done {\n  color: #777;\n  text-decoration: line-through;\n}\n.to-do-container ul li .done::before,\n.to-do-container ul .unchecked-slot .done::before,\n.to-do-container .task-container li .done::before,\n.to-do-container .task-container .unchecked-slot .done::before {\n  content: \"Task done\";\n}\n.to-do-container ul li .handle,\n.to-do-container ul .unchecked-slot .handle,\n.to-do-container .task-container li .handle,\n.to-do-container .task-container .unchecked-slot .handle {\n  font-weight: bolder;\n  color: #777;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n.to-do-container ul li .handle::before,\n.to-do-container ul .unchecked-slot .handle::before,\n.to-do-container .task-container li .handle::before,\n.to-do-container .task-container .unchecked-slot .handle::before {\n  content: \"🗑\";\n}\n.to-do-container ul li .delete-btn,\n.to-do-container ul .unchecked-slot .delete-btn,\n.to-do-container .task-container li .delete-btn,\n.to-do-container .task-container .unchecked-slot .delete-btn {\n  cursor: pointer;\n  text-align: center;\n  align-items: flex-start;\n}\n.to-do-container ul li .delete-btn::before,\n.to-do-container ul .unchecked-slot .delete-btn::before,\n.to-do-container .task-container li .delete-btn::before,\n.to-do-container .task-container .unchecked-slot .delete-btn::before {\n  content: \"🗑\";\n}\n\n.clear-all-btn {\n  color: #888;\n  background-color: #f1f1f1;\n  border: none;\n  width: 100%;\n  padding: 1rem;\n  align-self: center;\n  cursor: pointer;\n}\n\n.clear-all-btn:hover {\n  color: #444;\n  background-color: #e7e7e7;\n  text-decoration: underline;\n}\n\n.hello {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.4rem;\n  color: red;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAEhB;EACE,yCAAA;EACA,kBAAA;EACA,qBAAA;EACA,yBAAA;EACA,SAAA;EACA,UAAA;AAAF;AAEE;EACE,gBAAA;EACA,SAAA;EACA,UAAA;AAAJ;;AAIA;EACE,aAAA;AADF;;AAIA;EACE,sBAAA;EACA,iBAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,qCAAA;AADF;AAGE;EACE,aAAA;EACA,kCAAA;EACA,sBAAA;EACA,6BAAA;AADJ;AAGI;EACE,gBAAA;EACA,sBAAA;AADN;AAII;EACE,WAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;AAFN;AAKI;EACE,YAAA;AAHN;AAOE;EACE,aAAA;EACA,kCAAA;EACA,sBAAA;EACA,6BAAA;AALJ;AAOI;EACE,iBAAA;EACA,kBAAA;AALN;AAQI;EACE,sBAAA;EACA,aAAA;EACA,YAAA;AANN;AASI;EACE,WAAA;AAPN;AAUI;EACE,WAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;AARN;AAWI;EACE,YAAA;AATN;AAaE;;EAEE,aAAA;EACA,sBAAA;EACA,UAAA;AAXJ;AAaI;;;;EAEE,aAAA;EACA,yCAAA;EACA,SAAA;EACA,sBAAA;EACA,6BAAA;EACA,mBAAA;AATN;AAWM;;;;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;AANR;AASM;;;;EACE,sBAAA;EACA,qBAAA;AAJR;AAOM;;;;EACE,WAAA;EACA,eAAA;EACA,yBAAA;EACA,yBAAA;EACA,eAAA;AAFR;AAKM;;;;EACE,YAAA;AAAR;AAGM;;;;EACE,gBAAA;EACA,cAAA;AAER;AACM;;;;EACE,WAAA;AAIR;AADM;;;;EACE,WAAA;EACA,6BAAA;AAMR;AAHM;;;;EACE,oBAAA;AAQR;AALM;;;;EACE,mBAAA;EACA,WAAA;EACA,SAAA;EACA,UAAA;EACA,eAAA;AAUR;AAPM;;;;EAEE,aAAA;AAWR;AARM;;;;EACE,eAAA;EACA,kBAAA;EACA,uBAAA;AAaR;AAVM;;;;EACE,aAAA;AAeR;;AATA;EACE,WAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;AAYF;;AATA;EACE,WAAA;EACA,yBAAA;EACA,0BAAA;AAYF;;AATA;EACE,aAAA;EACA,sBAAA;EACA,WAAA;EACA,eAAA;EACA,UAAA;AAYF","sourcesContent":["// style.scss\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  text-decoration: none;\n  background-color: #f8f8f8;\n  margin: 0;\n  padding: 0;\n\n  ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n}\n\n.hidden {\n  display: none;\n}\n\n.to-do-container {\n  background-color: #fff;\n  font-size: 1.2rem;\n  margin: 1rem 4rem;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0.2rem 0.2rem 0.9rem #bbb;\n\n  .to-do-header {\n    display: grid;\n    grid-template-columns: auto 2.5rem;\n    padding: 0.4rem 0.4rem;\n    border-bottom: 1px solid #ddd;\n\n    .to-do-header-title {\n      text-align: left;\n      padding: 0.4rem 0.4rem;\n    }\n\n    .refresh-btn {\n      color: #777;\n      margin: 0.4rem 1rem;\n      width: 1rem;\n      height: 1rem;\n      cursor: pointer;\n    }\n\n    .refresh-btn::before {\n      content: \"⇅\";\n    }\n  }\n\n  .add-new {\n    display: grid;\n    grid-template-columns: auto 2.5rem;\n    padding: 0.4rem 0.4rem;\n    border-bottom: 1px solid #ddd;\n\n    input {\n      font-size: 1.2rem;\n      font-style: italic;\n    }\n\n    .new-input {\n      padding: 0.4rem 0.4rem;\n      outline: none;\n      border: none;\n    }\n\n    .new-input::placeholder {\n      color: #888;\n    }\n\n    .new-input-btn {\n      color: #777;\n      margin: 0.4rem 1rem;\n      width: 1rem;\n      height: 1rem;\n      cursor: pointer;\n    }\n\n    .new-input-btn::before {\n      content: \"↵\";\n    }\n  }\n\n  ul,\n  .task-container {\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n\n    li,\n    .unchecked-slot {\n      display: grid;\n      grid-template-columns: 2.5rem auto 2.5rem;\n      margin: 0;\n      padding: 0.4rem 0.4rem;\n      border-bottom: 1px solid #ddd;\n      align-items: center;\n\n      .box {\n        margin: 0.4rem;\n        width: 1rem;\n        height: 1rem;\n        cursor: pointer;\n      }\n\n      .unchecked {\n        border: solid #888 2px;\n        border-radius: 0.2rem;\n      }\n\n      .checked {\n        color: #00c;\n        font-size: 2rem;\n        transform: rotate(135deg);\n        transform-origin: 90% 90%;\n        cursor: pointer;\n      }\n\n      .checked::before {\n        content: \"¬\";\n      }\n\n      .task {\n        text-align: left;\n        margin: 0.4rem;\n      }\n\n      .task::before {\n        content: \"\";\n      }\n\n      .done {\n        color: #777;\n        text-decoration: line-through;\n      }\n\n      .done::before {\n        content: \"Task done\";\n      }\n\n      .handle {\n        font-weight: bolder;\n        color: #777;\n        margin: 0;\n        padding: 0;\n        cursor: pointer;\n      }\n\n      .handle::before {\n        // content: \"⁝\";\n        content: \"🗑\";\n      }\n\n      .delete-btn {\n        cursor: pointer;\n        text-align: center;\n        align-items: flex-start;\n      }\n\n      .delete-btn::before {\n        content: \"🗑\";\n      }\n    }\n  }\n}\n\n.clear-all-btn {\n  color: #888;\n  background-color: #f1f1f1;\n  border: none;\n  width: 100%;\n  padding: 1rem;\n  align-self: center;\n  cursor: pointer;\n}\n\n.clear-all-btn:hover {\n  color: #444;\n  background-color: #e7e7e7;\n  text-decoration: underline;\n}\n\n.hello {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.4rem;\n  color: red;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_libraryModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/libraryModule.js */ "./src/modules/libraryModule.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");



const library = new _modules_libraryModule_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

library.paintToPage();
library.setUpAddListener();

// library.setInputFieldListeners();
// library.setCheckboxFieldListeners();

/***/ }),

/***/ "./src/modules/bookModule.js":
/*!***********************************!*\
  !*** ./src/modules/bookModule.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Book)
/* harmony export */ });
class Book {
  title;

  completed;

  index;
}

/***/ }),

/***/ "./src/modules/libraryModule.js":
/*!**************************************!*\
  !*** ./src/modules/libraryModule.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Library)
/* harmony export */ });
/* harmony import */ var _strShelfModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strShelfModule.js */ "./src/modules/strShelfModule.js");
/* harmony import */ var _bookModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookModule.js */ "./src/modules/bookModule.js");



class Library {
  shelf = [];

  bookshelf;

  addButton = document.getElementById('add-btn');

  newTitle = document.getElementById('newTitle');

  frontShelf = document.getElementById('frontShelf');

  removeButton;

  static pushToStorage = (obj) => {
    const stringify = JSON.stringify(obj);
    localStorage.setItem('strShelf', stringify);
  }

  static displayBook(title, id) {
    return `
        <div class="box unchecked"></div>
        <div class="task title-author">${title}</div>
        <div class="handle removeButton" id="${id}" type="button"></div>
        `;
  }

  pullFromStorage = () => {
    const parsed = JSON.parse(localStorage.getItem('strShelf'));
    let counter = 1;
    const preShelf = [];
    // Returns the length of the localstorage shelf
    // (even when the page reloads)
    const shelfSize = Object.values(parsed).length;

    for (let i = 0; i < shelfSize; i += 1) {
      // Returns the Nth item saved on the localstorage
      if (this.shelf.length === 0) {
        for (let i = 0; i < shelfSize; i += 1) {
          this.shelf.push(Object.values(parsed)[i]);
        }
      }
      const parsedBook = parsed[`${counter}`];
      const tempShelf = Library.displayBook(parsedBook.title, counter);
      preShelf.push(tempShelf);
      counter += 1;
    }
    return preShelf;
  }

  paintToPage = () => {
    const preShelf = this.pullFromStorage();
    this.frontShelf.innerHTML = '';
    for (let i = 0; i < preShelf.length; i += 1) {
      const createdBook = document.createElement('div');
      createdBook.classList.add('unchecked-slot', 'book');
      createdBook.innerHTML = preShelf[i];
      createdBook.id = i + 1;
      this.frontShelf.appendChild(createdBook);
    }
    this.setRemoveListeners();
  }

  updateShelf = () => {
    this.bookshelf = new _strShelfModule_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

    let counter = 0;
    for (let i = 0; i < this.shelf.length; i += 1) {
      counter += 1;
      this.shelf[i].id = counter;
    }
    for (let i = 0; i < this.shelf.length; i += 1) {
      // GIVES THE BOOK OBJ AN ID #NUMBER
      this.bookshelf[`${this.shelf[i].id}`] = this.shelf[i];
    }
    Library.pushToStorage(this.bookshelf);
  }

  newBook = (title) => {
    this.bookshelf = new _strShelfModule_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const book = new _bookModule_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    book.title = title;
    book.completed = false;
    this.shelf.push(book);
    this.updateShelf();
    this.paintToPage();
  }

  removeBook = (id) => {
    for (let i = 0; i < this.shelf.length; i += 1) {
      if (this.shelf[i].id === parseInt(id, 10)) {
        this.shelf.splice(i, 1);
        this.updateShelf();
      }
      this.paintToPage();
    }
  }

  setRemoveListeners = () => {
    this.removeButton = document.querySelectorAll('.removeButton');
    this.removeButton.forEach((button) => {
      button.addEventListener('click', (e) => {
        console.log(e.target.id);
        this.removeBook(e.target.id);
      });
    });
  }

  setUpAddListener = () => {
    this.addButton.addEventListener('click', () => {
      this.newBook(this.newTitle.value);
      this.pullFromStorage();
      this.newTitle.value = '';
      // this.setRemoveListeners();
    });
  }
}

/***/ }),

/***/ "./src/modules/strShelfModule.js":
/*!***************************************!*\
  !*** ./src/modules/strShelfModule.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StrShelf)
/* harmony export */ });
class StrShelf {
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FDVGU7QUFDZjs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjJDO0FBQ1I7O0FBRXBCO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE1BQU07QUFDL0MsK0NBQStDLEdBQUc7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsZUFBZTtBQUNuQztBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFFBQVE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QiwwREFBUTs7QUFFakM7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QiwwREFBUTtBQUNqQyxxQkFBcUIsc0RBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RIZTtBQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Jvb2tNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xpYnJhcnlNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0clNoZWxmTW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmJvZHkgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvLWRvLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDFyZW0gNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNoYWRvdzogMC4ycmVtIDAuMnJlbSAwLjlyZW0gI2JiYjtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciAudG8tZG8taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMi41cmVtO1xcbiAgcGFkZGluZzogMC40cmVtIDAuNHJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIC50by1kby1oZWFkZXIgLnRvLWRvLWhlYWRlci10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMC40cmVtIDAuNHJlbTtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciAudG8tZG8taGVhZGVyIC5yZWZyZXNoLWJ0biB7XFxuICBjb2xvcjogIzc3NztcXG4gIG1hcmdpbjogMC40cmVtIDFyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciAudG8tZG8taGVhZGVyIC5yZWZyZXNoLWJ0bjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLih4VcXFwiO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIC5hZGQtbmV3IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMi41cmVtO1xcbiAgcGFkZGluZzogMC40cmVtIDAuNHJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIC5hZGQtbmV3IGlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIC5hZGQtbmV3IC5uZXctaW5wdXQge1xcbiAgcGFkZGluZzogMC40cmVtIDAuNHJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi50by1kby1jb250YWluZXIgLmFkZC1uZXcgLm5ldy1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM4ODg7XFxufVxcbi50by1kby1jb250YWluZXIgLmFkZC1uZXcgLm5ldy1pbnB1dC1idG4ge1xcbiAgY29sb3I6ICM3Nzc7XFxuICBtYXJnaW46IDAuNHJlbSAxcmVtO1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50by1kby1jb250YWluZXIgLmFkZC1uZXcgLm5ldy1pbnB1dC1idG46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4oa1XFxcIjtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciB1bCxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi50by1kby1jb250YWluZXIgdWwgbGksXFxuLnRvLWRvLWNvbnRhaW5lciB1bCAudW5jaGVja2VkLXNsb3QsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgbGksXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgLnVuY2hlY2tlZC1zbG90IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuNXJlbSBhdXRvIDIuNXJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50by1kby1jb250YWluZXIgdWwgbGkgLmJveCxcXG4udG8tZG8tY29udGFpbmVyIHVsIC51bmNoZWNrZWQtc2xvdCAuYm94LFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIGxpIC5ib3gsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgLnVuY2hlY2tlZC1zbG90IC5ib3gge1xcbiAgbWFyZ2luOiAwLjRyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciB1bCBsaSAudW5jaGVja2VkLFxcbi50by1kby1jb250YWluZXIgdWwgLnVuY2hlY2tlZC1zbG90IC51bmNoZWNrZWQsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgbGkgLnVuY2hlY2tlZCxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciAudW5jaGVja2VkLXNsb3QgLnVuY2hlY2tlZCB7XFxuICBib3JkZXI6IHNvbGlkICM4ODggMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIHVsIGxpIC5jaGVja2VkLFxcbi50by1kby1jb250YWluZXIgdWwgLnVuY2hlY2tlZC1zbG90IC5jaGVja2VkLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIGxpIC5jaGVja2VkLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIC51bmNoZWNrZWQtc2xvdCAuY2hlY2tlZCB7XFxuICBjb2xvcjogIzAwYztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA5MCUgOTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIHVsIGxpIC5jaGVja2VkOjpiZWZvcmUsXFxuLnRvLWRvLWNvbnRhaW5lciB1bCAudW5jaGVja2VkLXNsb3QgLmNoZWNrZWQ6OmJlZm9yZSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciBsaSAuY2hlY2tlZDo6YmVmb3JlLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIC51bmNoZWNrZWQtc2xvdCAuY2hlY2tlZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLCrFxcXCI7XFxufVxcbi50by1kby1jb250YWluZXIgdWwgbGkgLnRhc2ssXFxuLnRvLWRvLWNvbnRhaW5lciB1bCAudW5jaGVja2VkLXNsb3QgLnRhc2ssXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgbGkgLnRhc2ssXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgLnVuY2hlY2tlZC1zbG90IC50YXNrIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW46IDAuNHJlbTtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciB1bCBsaSAudGFzazo6YmVmb3JlLFxcbi50by1kby1jb250YWluZXIgdWwgLnVuY2hlY2tlZC1zbG90IC50YXNrOjpiZWZvcmUsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgbGkgLnRhc2s6OmJlZm9yZSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciAudW5jaGVja2VkLXNsb3QgLnRhc2s6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciB1bCBsaSAuZG9uZSxcXG4udG8tZG8tY29udGFpbmVyIHVsIC51bmNoZWNrZWQtc2xvdCAuZG9uZSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciBsaSAuZG9uZSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciAudW5jaGVja2VkLXNsb3QgLmRvbmUge1xcbiAgY29sb3I6ICM3Nzc7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciB1bCBsaSAuZG9uZTo6YmVmb3JlLFxcbi50by1kby1jb250YWluZXIgdWwgLnVuY2hlY2tlZC1zbG90IC5kb25lOjpiZWZvcmUsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgbGkgLmRvbmU6OmJlZm9yZSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciAudW5jaGVja2VkLXNsb3QgLmRvbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiVGFzayBkb25lXFxcIjtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciB1bCBsaSAuaGFuZGxlLFxcbi50by1kby1jb250YWluZXIgdWwgLnVuY2hlY2tlZC1zbG90IC5oYW5kbGUsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgbGkgLmhhbmRsZSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciAudW5jaGVja2VkLXNsb3QgLmhhbmRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgY29sb3I6ICM3Nzc7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIHVsIGxpIC5oYW5kbGU6OmJlZm9yZSxcXG4udG8tZG8tY29udGFpbmVyIHVsIC51bmNoZWNrZWQtc2xvdCAuaGFuZGxlOjpiZWZvcmUsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgbGkgLmhhbmRsZTo6YmVmb3JlLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIC51bmNoZWNrZWQtc2xvdCAuaGFuZGxlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIvCfl5FcXFwiO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIHVsIGxpIC5kZWxldGUtYnRuLFxcbi50by1kby1jb250YWluZXIgdWwgLnVuY2hlY2tlZC1zbG90IC5kZWxldGUtYnRuLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIGxpIC5kZWxldGUtYnRuLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIC51bmNoZWNrZWQtc2xvdCAuZGVsZXRlLWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciB1bCBsaSAuZGVsZXRlLWJ0bjo6YmVmb3JlLFxcbi50by1kby1jb250YWluZXIgdWwgLnVuY2hlY2tlZC1zbG90IC5kZWxldGUtYnRuOjpiZWZvcmUsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgbGkgLmRlbGV0ZS1idG46OmJlZm9yZSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciAudW5jaGVja2VkLXNsb3QgLmRlbGV0ZS1idG46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi8J+XkVxcXCI7XFxufVxcblxcbi5jbGVhci1hbGwtYnRuIHtcXG4gIGNvbG9yOiAjODg4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsZWFyLWFsbC1idG46aG92ZXIge1xcbiAgY29sb3I6ICM0NDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5oZWxsbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgY29sb3I6IHJlZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0UseUNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUFGO0FBRUU7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUo7O0FBSUE7RUFDRSxhQUFBO0FBREY7O0FBSUE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtBQURGO0FBR0U7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBREo7QUFHSTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7QUFETjtBQUlJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRk47QUFLSTtFQUNFLFlBQUE7QUFITjtBQU9FO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUxKO0FBT0k7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBTE47QUFRSTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFOTjtBQVNJO0VBQ0UsV0FBQTtBQVBOO0FBVUk7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFSTjtBQVdJO0VBQ0UsWUFBQTtBQVROO0FBYUU7O0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQVhKO0FBYUk7Ozs7RUFFRSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBVE47QUFXTTs7OztFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFOUjtBQVNNOzs7O0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtBQUpSO0FBT007Ozs7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBRlI7QUFLTTs7OztFQUNFLFlBQUE7QUFBUjtBQUdNOzs7O0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBRVI7QUFDTTs7OztFQUNFLFdBQUE7QUFJUjtBQURNOzs7O0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0FBTVI7QUFITTs7OztFQUNFLG9CQUFBO0FBUVI7QUFMTTs7OztFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQVVSO0FBUE07Ozs7RUFFRSxhQUFBO0FBV1I7QUFSTTs7OztFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBYVI7QUFWTTs7OztFQUNFLGFBQUE7QUFlUjs7QUFUQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVlGOztBQVRBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFZRjs7QUFUQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQVlGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIHN0eWxlLnNjc3NcXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG8tZG8tY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbjogMXJlbSA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3gtc2hhZG93OiAwLjJyZW0gMC4ycmVtIDAuOXJlbSAjYmJiO1xcblxcbiAgLnRvLWRvLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAyLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcblxcbiAgICAudG8tZG8taGVhZGVyLXRpdGxlIHtcXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW07XFxuICAgIH1cXG5cXG4gICAgLnJlZnJlc2gtYnRuIHtcXG4gICAgICBjb2xvcjogIzc3NztcXG4gICAgICBtYXJnaW46IDAuNHJlbSAxcmVtO1xcbiAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnJlZnJlc2gtYnRuOjpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCLih4VcXFwiO1xcbiAgICB9XFxuICB9XFxuXFxuICAuYWRkLW5ldyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAyLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcblxcbiAgICBpbnB1dCB7XFxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB9XFxuXFxuICAgIC5uZXctaW5wdXQge1xcbiAgICAgIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW07XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm5ldy1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiAjODg4O1xcbiAgICB9XFxuXFxuICAgIC5uZXctaW5wdXQtYnRuIHtcXG4gICAgICBjb2xvcjogIzc3NztcXG4gICAgICBtYXJnaW46IDAuNHJlbSAxcmVtO1xcbiAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLm5ldy1pbnB1dC1idG46OmJlZm9yZSB7XFxuICAgICAgY29udGVudDogXFxcIuKGtVxcXCI7XFxuICAgIH1cXG4gIH1cXG5cXG4gIHVsLFxcbiAgLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgbGksXFxuICAgIC51bmNoZWNrZWQtc2xvdCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuNXJlbSBhdXRvIDIuNXJlbTtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMC40cmVtIDAuNHJlbTtcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgIC5ib3gge1xcbiAgICAgICAgbWFyZ2luOiAwLjRyZW07XFxuICAgICAgICB3aWR0aDogMXJlbTtcXG4gICAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgLnVuY2hlY2tlZCB7XFxuICAgICAgICBib3JkZXI6IHNvbGlkICM4ODggMnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgICAgIH1cXG5cXG4gICAgICAuY2hlY2tlZCB7XFxuICAgICAgICBjb2xvcjogIzAwYztcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA5MCUgOTAlO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICAuY2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCLCrFxcXCI7XFxuICAgICAgfVxcblxcbiAgICAgIC50YXNrIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBtYXJnaW46IDAuNHJlbTtcXG4gICAgICB9XFxuXFxuICAgICAgLnRhc2s6OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICB9XFxuXFxuICAgICAgLmRvbmUge1xcbiAgICAgICAgY29sb3I6ICM3Nzc7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgICB9XFxuXFxuICAgICAgLmRvbmU6OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiVGFzayBkb25lXFxcIjtcXG4gICAgICB9XFxuXFxuICAgICAgLmhhbmRsZSB7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICAgICAgY29sb3I6ICM3Nzc7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICAuaGFuZGxlOjpiZWZvcmUge1xcbiAgICAgICAgLy8gY29udGVudDogXFxcIuKBnVxcXCI7XFxuICAgICAgICBjb250ZW50OiBcXFwi8J+XkVxcXCI7XFxuICAgICAgfVxcblxcbiAgICAgIC5kZWxldGUtYnRuIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgIH1cXG5cXG4gICAgICAuZGVsZXRlLWJ0bjo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCLwn5eRXFxcIjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmNsZWFyLWFsbC1idG4ge1xcbiAgY29sb3I6ICM4ODg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xlYXItYWxsLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzQ0NDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmhlbGxvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgTGlicmFyeSBmcm9tICcuL21vZHVsZXMvbGlicmFyeU1vZHVsZS5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmNvbnN0IGxpYnJhcnkgPSBuZXcgTGlicmFyeSgpO1xuXG5saWJyYXJ5LnBhaW50VG9QYWdlKCk7XG5saWJyYXJ5LnNldFVwQWRkTGlzdGVuZXIoKTtcblxuLy8gbGlicmFyeS5zZXRJbnB1dEZpZWxkTGlzdGVuZXJzKCk7XG4vLyBsaWJyYXJ5LnNldENoZWNrYm94RmllbGRMaXN0ZW5lcnMoKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rIHtcbiAgdGl0bGU7XG5cbiAgY29tcGxldGVkO1xuXG4gIGluZGV4O1xufSIsImltcG9ydCBTdHJTaGVsZiBmcm9tICcuL3N0clNoZWxmTW9kdWxlLmpzJztcbmltcG9ydCBCb29rIGZyb20gJy4vYm9va01vZHVsZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpYnJhcnkge1xuICBzaGVsZiA9IFtdO1xuXG4gIGJvb2tzaGVsZjtcblxuICBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJ0bicpO1xuXG4gIG5ld1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1RpdGxlJyk7XG5cbiAgZnJvbnRTaGVsZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcm9udFNoZWxmJyk7XG5cbiAgcmVtb3ZlQnV0dG9uO1xuXG4gIHN0YXRpYyBwdXNoVG9TdG9yYWdlID0gKG9iaikgPT4ge1xuICAgIGNvbnN0IHN0cmluZ2lmeSA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0clNoZWxmJywgc3RyaW5naWZ5KTtcbiAgfVxuXG4gIHN0YXRpYyBkaXNwbGF5Qm9vayh0aXRsZSwgaWQpIHtcbiAgICByZXR1cm4gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94IHVuY2hlY2tlZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzayB0aXRsZS1hdXRob3JcIj4ke3RpdGxlfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGFuZGxlIHJlbW92ZUJ1dHRvblwiIGlkPVwiJHtpZH1cIiB0eXBlPVwiYnV0dG9uXCI+PC9kaXY+XG4gICAgICAgIGA7XG4gIH1cblxuICBwdWxsRnJvbVN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RyU2hlbGYnKSk7XG4gICAgbGV0IGNvdW50ZXIgPSAxO1xuICAgIGNvbnN0IHByZVNoZWxmID0gW107XG4gICAgLy8gUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBsb2NhbHN0b3JhZ2Ugc2hlbGZcbiAgICAvLyAoZXZlbiB3aGVuIHRoZSBwYWdlIHJlbG9hZHMpXG4gICAgY29uc3Qgc2hlbGZTaXplID0gT2JqZWN0LnZhbHVlcyhwYXJzZWQpLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hlbGZTaXplOyBpICs9IDEpIHtcbiAgICAgIC8vIFJldHVybnMgdGhlIE50aCBpdGVtIHNhdmVkIG9uIHRoZSBsb2NhbHN0b3JhZ2VcbiAgICAgIGlmICh0aGlzLnNoZWxmLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoZWxmU2l6ZTsgaSArPSAxKSB7XG4gICAgICAgICAgdGhpcy5zaGVsZi5wdXNoKE9iamVjdC52YWx1ZXMocGFyc2VkKVtpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHBhcnNlZEJvb2sgPSBwYXJzZWRbYCR7Y291bnRlcn1gXTtcbiAgICAgIGNvbnN0IHRlbXBTaGVsZiA9IExpYnJhcnkuZGlzcGxheUJvb2socGFyc2VkQm9vay50aXRsZSwgY291bnRlcik7XG4gICAgICBwcmVTaGVsZi5wdXNoKHRlbXBTaGVsZik7XG4gICAgICBjb3VudGVyICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBwcmVTaGVsZjtcbiAgfVxuXG4gIHBhaW50VG9QYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHByZVNoZWxmID0gdGhpcy5wdWxsRnJvbVN0b3JhZ2UoKTtcbiAgICB0aGlzLmZyb250U2hlbGYuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVTaGVsZi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY3JlYXRlZEJvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNyZWF0ZWRCb29rLmNsYXNzTGlzdC5hZGQoJ3VuY2hlY2tlZC1zbG90JywgJ2Jvb2snKTtcbiAgICAgIGNyZWF0ZWRCb29rLmlubmVySFRNTCA9IHByZVNoZWxmW2ldO1xuICAgICAgY3JlYXRlZEJvb2suaWQgPSBpICsgMTtcbiAgICAgIHRoaXMuZnJvbnRTaGVsZi5hcHBlbmRDaGlsZChjcmVhdGVkQm9vayk7XG4gICAgfVxuICAgIHRoaXMuc2V0UmVtb3ZlTGlzdGVuZXJzKCk7XG4gIH1cblxuICB1cGRhdGVTaGVsZiA9ICgpID0+IHtcbiAgICB0aGlzLmJvb2tzaGVsZiA9IG5ldyBTdHJTaGVsZigpO1xuXG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGVsZi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY291bnRlciArPSAxO1xuICAgICAgdGhpcy5zaGVsZltpXS5pZCA9IGNvdW50ZXI7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGVsZi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgLy8gR0lWRVMgVEhFIEJPT0sgT0JKIEFOIElEICNOVU1CRVJcbiAgICAgIHRoaXMuYm9va3NoZWxmW2Ake3RoaXMuc2hlbGZbaV0uaWR9YF0gPSB0aGlzLnNoZWxmW2ldO1xuICAgIH1cbiAgICBMaWJyYXJ5LnB1c2hUb1N0b3JhZ2UodGhpcy5ib29rc2hlbGYpO1xuICB9XG5cbiAgbmV3Qm9vayA9ICh0aXRsZSkgPT4ge1xuICAgIHRoaXMuYm9va3NoZWxmID0gbmV3IFN0clNoZWxmKCk7XG4gICAgY29uc3QgYm9vayA9IG5ldyBCb29rKCk7XG4gICAgYm9vay50aXRsZSA9IHRpdGxlO1xuICAgIGJvb2suY29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy5zaGVsZi5wdXNoKGJvb2spO1xuICAgIHRoaXMudXBkYXRlU2hlbGYoKTtcbiAgICB0aGlzLnBhaW50VG9QYWdlKCk7XG4gIH1cblxuICByZW1vdmVCb29rID0gKGlkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoZWxmLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5zaGVsZltpXS5pZCA9PT0gcGFyc2VJbnQoaWQsIDEwKSkge1xuICAgICAgICB0aGlzLnNoZWxmLnNwbGljZShpLCAxKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaGVsZigpO1xuICAgICAgfVxuICAgICAgdGhpcy5wYWludFRvUGFnZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldFJlbW92ZUxpc3RlbmVycyA9ICgpID0+IHtcbiAgICB0aGlzLnJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmVCdXR0b24nKTtcbiAgICB0aGlzLnJlbW92ZUJ1dHRvbi5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKTtcbiAgICAgICAgdGhpcy5yZW1vdmVCb29rKGUudGFyZ2V0LmlkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VXBBZGRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICB0aGlzLmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMubmV3Qm9vayh0aGlzLm5ld1RpdGxlLnZhbHVlKTtcbiAgICAgIHRoaXMucHVsbEZyb21TdG9yYWdlKCk7XG4gICAgICB0aGlzLm5ld1RpdGxlLnZhbHVlID0gJyc7XG4gICAgICAvLyB0aGlzLnNldFJlbW92ZUxpc3RlbmVycygpO1xuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyU2hlbGYge1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==