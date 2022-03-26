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
// console.log('test-5')

console.log('index.js LINE 7 > paintToPage: ');
library.paintToPage(11);
// console.log('test-9')
// library.setRemoveListeners();
// console.log('test-11');
console.log('index.js LINE 12 > setUpAddListener(): ');
library.setUpAddListener();

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
      console.log('LINE 39: shelf.toString(): ' + this.shelf.toString() + '\n pllFrmStrg > shelf = ' + this.shelf);
      console.log('pllFrmStrg > preShelf = ' + this.preShelf);
      if (this.shelf.length === 0) {
        this.shelf.push(Object.values(parsed)[i]);
      }
      setTimeout(() => { console.log('LINE 43: pllFrmStrg > for... i = ' + i); }, 500);
      const parsedBook = parsed[`${counter}`];
      const tempShelf = Library.displayBook(parsedBook.title, counter);
      preShelf.push(tempShelf);
      counter += 1;
    }
    // console.log('pllFrmStrg > shelf = ' + this.shelf + '\n pllFrmStrg > preShelf = ' + this.preShelf);
    // console.log('pllFrmStrg > preShelf.length = ' + this.preShelf.length);
    return preShelf;
  }

  paintToPage = (caller) => {
    console.log('caller: ' + caller + ' > paintToPage');
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
    // console.log('bookshelf A: ' + this.bookshelf);
    this.bookshelf = new _strShelfModule_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

    let counter = 0;
    for (let i = 0; i < this.shelf.length; i += 1) {
      counter += 1;
      this.shelf[i].id = counter;
      // this.shelf[i].index = counter;
    }
    for (let i = 0; i < this.shelf.length; i += 1) {
      // GIVES THE BOOK OBJ AN ID #NUMBER
      this.bookshelf[`${this.shelf[i].id}`] = this.shelf[i];
    }
    // console.log('bookshelf C: ' + this.bookshelf);
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
    // this.bookshelf = new StrShelf();

    // this.frontShelf.innerHTML = '';
    // this.removeButton = document.querySelectorAll('.removeButton');

    for (let i = 0; i < this.shelf.length; i += 1) {
      console.log('removeBook > shelf.length: ' + this.shelf.length);
      console.log('removeBook: shelf: ' + this.shelf[0]);
      if (this.shelf[i].id === parseInt(id, 10)) {
        this.shelf.splice(i, 1);
        this.updateShelf();
      }

      this.paintToPage();
      // this.setRemoveListeners();
      // this.removeButton = document.querySelectorAll('.removeButton');
      // this.removeButton.forEach((button) => {
      //   button.addEventListener('click', (e) => {
      //     console.log('addevent-AA-INSIDEfor-loop');
      //     this.removeBook(e.target.id);
      //   });
      // });
    }
  }

  setRemoveListeners = () => {
    this.removeButton = document.querySelectorAll('.removeButton');
    this.removeButton.forEach((button) => {
      button.addEventListener('click', (e) => {
        // console.log('addevent-AA-OUTSIDE-for-loop');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUllO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvYm9va01vZHVsZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvbGlicmFyeU1vZHVsZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RyU2hlbGZNb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuYm9keSB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG8tZG8tY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbjogMXJlbSA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3gtc2hhZG93OiAwLjJyZW0gMC4ycmVtIDAuOXJlbSAjYmJiO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIC50by1kby1oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAyLjVyZW07XFxuICBwYWRkaW5nOiAwLjRyZW0gMC40cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxufVxcbi50by1kby1jb250YWluZXIgLnRvLWRvLWhlYWRlciAudG8tZG8taGVhZGVyLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiAwLjRyZW0gMC40cmVtO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIC50by1kby1oZWFkZXIgLnJlZnJlc2gtYnRuIHtcXG4gIGNvbG9yOiAjNzc3O1xcbiAgbWFyZ2luOiAwLjRyZW0gMXJlbTtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIC50by1kby1oZWFkZXIgLnJlZnJlc2gtYnRuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKHhVxcXCI7XFxufVxcbi50by1kby1jb250YWluZXIgLmFkZC1uZXcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAyLjVyZW07XFxuICBwYWRkaW5nOiAwLjRyZW0gMC40cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxufVxcbi50by1kby1jb250YWluZXIgLmFkZC1uZXcgaW5wdXQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi50by1kby1jb250YWluZXIgLmFkZC1uZXcgLm5ldy1pbnB1dCB7XFxuICBwYWRkaW5nOiAwLjRyZW0gMC40cmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciAuYWRkLW5ldyAubmV3LWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzg4ODtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciAuYWRkLW5ldyAubmV3LWlucHV0LWJ0biB7XFxuICBjb2xvcjogIzc3NztcXG4gIG1hcmdpbjogMC40cmVtIDFyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciAuYWRkLW5ldyAubmV3LWlucHV0LWJ0bjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLihrVcXFwiO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIHVsLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciB1bCBsaSxcXG4udG8tZG8tY29udGFpbmVyIHVsIC51bmNoZWNrZWQtc2xvdCxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciBsaSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciAudW5jaGVja2VkLXNsb3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMi41cmVtIGF1dG8gMi41cmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC40cmVtIDAuNHJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciB1bCBsaSAuYm94LFxcbi50by1kby1jb250YWluZXIgdWwgLnVuY2hlY2tlZC1zbG90IC5ib3gsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgbGkgLmJveCxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciAudW5jaGVja2VkLXNsb3QgLmJveCB7XFxuICBtYXJnaW46IDAuNHJlbTtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIHVsIGxpIC51bmNoZWNrZWQsXFxuLnRvLWRvLWNvbnRhaW5lciB1bCAudW5jaGVja2VkLXNsb3QgLnVuY2hlY2tlZCxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciBsaSAudW5jaGVja2VkLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIC51bmNoZWNrZWQtc2xvdCAudW5jaGVja2VkIHtcXG4gIGJvcmRlcjogc29saWQgIzg4OCAycHg7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxufVxcbi50by1kby1jb250YWluZXIgdWwgbGkgLmNoZWNrZWQsXFxuLnRvLWRvLWNvbnRhaW5lciB1bCAudW5jaGVja2VkLXNsb3QgLmNoZWNrZWQsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgbGkgLmNoZWNrZWQsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgLnVuY2hlY2tlZC1zbG90IC5jaGVja2VkIHtcXG4gIGNvbG9yOiAjMDBjO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDkwJSA5MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50by1kby1jb250YWluZXIgdWwgbGkgLmNoZWNrZWQ6OmJlZm9yZSxcXG4udG8tZG8tY29udGFpbmVyIHVsIC51bmNoZWNrZWQtc2xvdCAuY2hlY2tlZDo6YmVmb3JlLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIGxpIC5jaGVja2VkOjpiZWZvcmUsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgLnVuY2hlY2tlZC1zbG90IC5jaGVja2VkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIsKsXFxcIjtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciB1bCBsaSAudGFzayxcXG4udG8tZG8tY29udGFpbmVyIHVsIC51bmNoZWNrZWQtc2xvdCAudGFzayxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciBsaSAudGFzayxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciAudW5jaGVja2VkLXNsb3QgLnRhc2sge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbjogMC40cmVtO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIHVsIGxpIC50YXNrOjpiZWZvcmUsXFxuLnRvLWRvLWNvbnRhaW5lciB1bCAudW5jaGVja2VkLXNsb3QgLnRhc2s6OmJlZm9yZSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciBsaSAudGFzazo6YmVmb3JlLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIC51bmNoZWNrZWQtc2xvdCAudGFzazo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIHVsIGxpIC5kb25lLFxcbi50by1kby1jb250YWluZXIgdWwgLnVuY2hlY2tlZC1zbG90IC5kb25lLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIGxpIC5kb25lLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIC51bmNoZWNrZWQtc2xvdCAuZG9uZSB7XFxuICBjb2xvcjogIzc3NztcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIHVsIGxpIC5kb25lOjpiZWZvcmUsXFxuLnRvLWRvLWNvbnRhaW5lciB1bCAudW5jaGVja2VkLXNsb3QgLmRvbmU6OmJlZm9yZSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciBsaSAuZG9uZTo6YmVmb3JlLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIC51bmNoZWNrZWQtc2xvdCAuZG9uZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJUYXNrIGRvbmVcXFwiO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIHVsIGxpIC5oYW5kbGUsXFxuLnRvLWRvLWNvbnRhaW5lciB1bCAudW5jaGVja2VkLXNsb3QgLmhhbmRsZSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciBsaSAuaGFuZGxlLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIC51bmNoZWNrZWQtc2xvdCAuaGFuZGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjb2xvcjogIzc3NztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50by1kby1jb250YWluZXIgdWwgbGkgLmhhbmRsZTo6YmVmb3JlLFxcbi50by1kby1jb250YWluZXIgdWwgLnVuY2hlY2tlZC1zbG90IC5oYW5kbGU6OmJlZm9yZSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciBsaSAuaGFuZGxlOjpiZWZvcmUsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgLnVuY2hlY2tlZC1zbG90IC5oYW5kbGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi8J+XkVxcXCI7XFxufVxcbi50by1kby1jb250YWluZXIgdWwgbGkgLmRlbGV0ZS1idG4sXFxuLnRvLWRvLWNvbnRhaW5lciB1bCAudW5jaGVja2VkLXNsb3QgLmRlbGV0ZS1idG4sXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgbGkgLmRlbGV0ZS1idG4sXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgLnVuY2hlY2tlZC1zbG90IC5kZWxldGUtYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4udG8tZG8tY29udGFpbmVyIHVsIGxpIC5kZWxldGUtYnRuOjpiZWZvcmUsXFxuLnRvLWRvLWNvbnRhaW5lciB1bCAudW5jaGVja2VkLXNsb3QgLmRlbGV0ZS1idG46OmJlZm9yZSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciBsaSAuZGVsZXRlLWJ0bjo6YmVmb3JlLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIC51bmNoZWNrZWQtc2xvdCAuZGVsZXRlLWJ0bjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLwn5eRXFxcIjtcXG59XFxuXFxuLmNsZWFyLWFsbC1idG4ge1xcbiAgY29sb3I6ICM4ODg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xlYXItYWxsLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzQ0NDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmhlbGxvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBjb2xvcjogcmVkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUFFaEI7RUFDRSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUY7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFBSjs7QUFJQTtFQUNFLGFBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO0FBREY7QUFHRTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFESjtBQUdJO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtBQUROO0FBSUk7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFGTjtBQUtJO0VBQ0UsWUFBQTtBQUhOO0FBT0U7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBTEo7QUFPSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFMTjtBQVFJO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQU5OO0FBU0k7RUFDRSxXQUFBO0FBUE47QUFVSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVJOO0FBV0k7RUFDRSxZQUFBO0FBVE47QUFhRTs7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBWEo7QUFhSTs7OztFQUVFLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFUTjtBQVdNOzs7O0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQU5SO0FBU007Ozs7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0FBSlI7QUFPTTs7OztFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFGUjtBQUtNOzs7O0VBQ0UsWUFBQTtBQUFSO0FBR007Ozs7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFFUjtBQUNNOzs7O0VBQ0UsV0FBQTtBQUlSO0FBRE07Ozs7RUFDRSxXQUFBO0VBQ0EsNkJBQUE7QUFNUjtBQUhNOzs7O0VBQ0Usb0JBQUE7QUFRUjtBQUxNOzs7O0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBVVI7QUFQTTs7OztFQUVFLGFBQUE7QUFXUjtBQVJNOzs7O0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFhUjtBQVZNOzs7O0VBQ0UsYUFBQTtBQWVSOztBQVRBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBWUY7O0FBVEE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQVlGOztBQVRBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBWUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gc3R5bGUuc2Nzc1xcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50by1kby1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWFyZ2luOiAxcmVtIDRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJveC1zaGFkb3c6IDAuMnJlbSAwLjJyZW0gMC45cmVtICNiYmI7XFxuXFxuICAudG8tZG8taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDIuNXJlbTtcXG4gICAgcGFkZGluZzogMC40cmVtIDAuNHJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxuXFxuICAgIC50by1kby1oZWFkZXItdGl0bGUge1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgcGFkZGluZzogMC40cmVtIDAuNHJlbTtcXG4gICAgfVxcblxcbiAgICAucmVmcmVzaC1idG4ge1xcbiAgICAgIGNvbG9yOiAjNzc3O1xcbiAgICAgIG1hcmdpbjogMC40cmVtIDFyZW07XFxuICAgICAgd2lkdGg6IDFyZW07XFxuICAgICAgaGVpZ2h0OiAxcmVtO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAucmVmcmVzaC1idG46OmJlZm9yZSB7XFxuICAgICAgY29udGVudDogXFxcIuKHhVxcXCI7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5hZGQtbmV3IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDIuNXJlbTtcXG4gICAgcGFkZGluZzogMC40cmVtIDAuNHJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxuXFxuICAgIGlucHV0IHtcXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIH1cXG5cXG4gICAgLm5ldy1pbnB1dCB7XFxuICAgICAgcGFkZGluZzogMC40cmVtIDAuNHJlbTtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcblxcbiAgICAubmV3LWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6ICM4ODg7XFxuICAgIH1cXG5cXG4gICAgLm5ldy1pbnB1dC1idG4ge1xcbiAgICAgIGNvbG9yOiAjNzc3O1xcbiAgICAgIG1hcmdpbjogMC40cmVtIDFyZW07XFxuICAgICAgd2lkdGg6IDFyZW07XFxuICAgICAgaGVpZ2h0OiAxcmVtO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAubmV3LWlucHV0LWJ0bjo6YmVmb3JlIHtcXG4gICAgICBjb250ZW50OiBcXFwi4oa1XFxcIjtcXG4gICAgfVxcbiAgfVxcblxcbiAgdWwsXFxuICAudGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAwO1xcblxcbiAgICBsaSxcXG4gICAgLnVuY2hlY2tlZC1zbG90IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMi41cmVtIGF1dG8gMi41cmVtO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwLjRyZW0gMC40cmVtO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgLmJveCB7XFxuICAgICAgICBtYXJnaW46IDAuNHJlbTtcXG4gICAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICAudW5jaGVja2VkIHtcXG4gICAgICAgIGJvcmRlcjogc29saWQgIzg4OCAycHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICAgICAgfVxcblxcbiAgICAgIC5jaGVja2VkIHtcXG4gICAgICAgIGNvbG9yOiAjMDBjO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDkwJSA5MCU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcblxcbiAgICAgIC5jaGVja2VkOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogXFxcIsKsXFxcIjtcXG4gICAgICB9XFxuXFxuICAgICAgLnRhc2sge1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIG1hcmdpbjogMC40cmVtO1xcbiAgICAgIH1cXG5cXG4gICAgICAudGFzazo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIH1cXG5cXG4gICAgICAuZG9uZSB7XFxuICAgICAgICBjb2xvcjogIzc3NztcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICAgIH1cXG5cXG4gICAgICAuZG9uZTo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJUYXNrIGRvbmVcXFwiO1xcbiAgICAgIH1cXG5cXG4gICAgICAuaGFuZGxlIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgICAgICBjb2xvcjogIzc3NztcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcblxcbiAgICAgIC5oYW5kbGU6OmJlZm9yZSB7XFxuICAgICAgICAvLyBjb250ZW50OiBcXFwi4oGdXFxcIjtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCLwn5eRXFxcIjtcXG4gICAgICB9XFxuXFxuICAgICAgLmRlbGV0ZS1idG4ge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgfVxcblxcbiAgICAgIC5kZWxldGUtYnRuOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogXFxcIvCfl5FcXFwiO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uY2xlYXItYWxsLWJ0biB7XFxuICBjb2xvcjogIzg4ODtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbGVhci1hbGwtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uaGVsbG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBMaWJyYXJ5IGZyb20gJy4vbW9kdWxlcy9saWJyYXJ5TW9kdWxlLmpzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgbGlicmFyeSA9IG5ldyBMaWJyYXJ5KCk7XG4vLyBjb25zb2xlLmxvZygndGVzdC01JylcblxuY29uc29sZS5sb2coJ2luZGV4LmpzIExJTkUgNyA+IHBhaW50VG9QYWdlOiAnKTtcbmxpYnJhcnkucGFpbnRUb1BhZ2UoMTEpO1xuLy8gY29uc29sZS5sb2coJ3Rlc3QtOScpXG4vLyBsaWJyYXJ5LnNldFJlbW92ZUxpc3RlbmVycygpO1xuLy8gY29uc29sZS5sb2coJ3Rlc3QtMTEnKTtcbmNvbnNvbGUubG9nKCdpbmRleC5qcyBMSU5FIDEyID4gc2V0VXBBZGRMaXN0ZW5lcigpOiAnKTtcbmxpYnJhcnkuc2V0VXBBZGRMaXN0ZW5lcigpOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2sge1xuICB0aXRsZTtcblxuICBjb21wbGV0ZWQ7XG5cbiAgaW5kZXg7XG59IiwiaW1wb3J0IFN0clNoZWxmIGZyb20gJy4vc3RyU2hlbGZNb2R1bGUuanMnO1xuaW1wb3J0IEJvb2sgZnJvbSAnLi9ib29rTW9kdWxlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlicmFyeSB7XG4gIHNoZWxmID0gW107XG5cbiAgYm9va3NoZWxmO1xuXG4gIGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYnRuJyk7XG5cbiAgbmV3VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGl0bGUnKTtcblxuICBmcm9udFNoZWxmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zyb250U2hlbGYnKTtcblxuICByZW1vdmVCdXR0b247XG5cbiAgc3RhdGljIHB1c2hUb1N0b3JhZ2UgPSAob2JqKSA9PiB7XG4gICAgY29uc3Qgc3RyaW5naWZ5ID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RyU2hlbGYnLCBzdHJpbmdpZnkpO1xuICB9XG5cbiAgc3RhdGljIGRpc3BsYXlCb29rKHRpdGxlLCBpZCkge1xuICAgIHJldHVybiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3ggdW5jaGVja2VkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrIHRpdGxlLWF1dGhvclwiPiR7dGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoYW5kbGUgcmVtb3ZlQnV0dG9uXCIgaWQ9XCIke2lkfVwiIHR5cGU9XCJidXR0b25cIj48L2Rpdj5cbiAgICAgICAgYDtcbiAgfVxuXG4gIHB1bGxGcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdHJTaGVsZicpKTtcbiAgICBsZXQgY291bnRlciA9IDE7XG4gICAgY29uc3QgcHJlU2hlbGYgPSBbXTtcbiAgICAvLyBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGxvY2Fsc3RvcmFnZSBzaGVsZlxuICAgIC8vIChldmVuIHdoZW4gdGhlIHBhZ2UgcmVsb2FkcylcbiAgICBjb25zdCBzaGVsZlNpemUgPSBPYmplY3QudmFsdWVzKHBhcnNlZCkubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGVsZlNpemU7IGkgKz0gMSkge1xuICAgICAgLy8gUmV0dXJucyB0aGUgTnRoIGl0ZW0gc2F2ZWQgb24gdGhlIGxvY2Fsc3RvcmFnZVxuICAgICAgY29uc29sZS5sb2coJ0xJTkUgMzk6IHNoZWxmLnRvU3RyaW5nKCk6ICcgKyB0aGlzLnNoZWxmLnRvU3RyaW5nKCkgKyAnXFxuIHBsbEZybVN0cmcgPiBzaGVsZiA9ICcgKyB0aGlzLnNoZWxmKTtcbiAgICAgIGNvbnNvbGUubG9nKCdwbGxGcm1TdHJnID4gcHJlU2hlbGYgPSAnICsgdGhpcy5wcmVTaGVsZik7XG4gICAgICBpZiAodGhpcy5zaGVsZi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5zaGVsZi5wdXNoKE9iamVjdC52YWx1ZXMocGFyc2VkKVtpXSk7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgY29uc29sZS5sb2coJ0xJTkUgNDM6IHBsbEZybVN0cmcgPiBmb3IuLi4gaSA9ICcgKyBpKTsgfSwgNTAwKTtcbiAgICAgIGNvbnN0IHBhcnNlZEJvb2sgPSBwYXJzZWRbYCR7Y291bnRlcn1gXTtcbiAgICAgIGNvbnN0IHRlbXBTaGVsZiA9IExpYnJhcnkuZGlzcGxheUJvb2socGFyc2VkQm9vay50aXRsZSwgY291bnRlcik7XG4gICAgICBwcmVTaGVsZi5wdXNoKHRlbXBTaGVsZik7XG4gICAgICBjb3VudGVyICs9IDE7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdwbGxGcm1TdHJnID4gc2hlbGYgPSAnICsgdGhpcy5zaGVsZiArICdcXG4gcGxsRnJtU3RyZyA+IHByZVNoZWxmID0gJyArIHRoaXMucHJlU2hlbGYpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdwbGxGcm1TdHJnID4gcHJlU2hlbGYubGVuZ3RoID0gJyArIHRoaXMucHJlU2hlbGYubGVuZ3RoKTtcbiAgICByZXR1cm4gcHJlU2hlbGY7XG4gIH1cblxuICBwYWludFRvUGFnZSA9IChjYWxsZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZygnY2FsbGVyOiAnICsgY2FsbGVyICsgJyA+IHBhaW50VG9QYWdlJyk7XG4gICAgY29uc3QgcHJlU2hlbGYgPSB0aGlzLnB1bGxGcm9tU3RvcmFnZSgpO1xuICAgIHRoaXMuZnJvbnRTaGVsZi5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZVNoZWxmLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjcmVhdGVkQm9vayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY3JlYXRlZEJvb2suY2xhc3NMaXN0LmFkZCgndW5jaGVja2VkLXNsb3QnLCAnYm9vaycpO1xuICAgICAgY3JlYXRlZEJvb2suaW5uZXJIVE1MID0gcHJlU2hlbGZbaV07XG4gICAgICBjcmVhdGVkQm9vay5pZCA9IGkgKyAxO1xuICAgICAgdGhpcy5mcm9udFNoZWxmLmFwcGVuZENoaWxkKGNyZWF0ZWRCb29rKTtcbiAgICB9XG4gICAgdGhpcy5zZXRSZW1vdmVMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHVwZGF0ZVNoZWxmID0gKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdib29rc2hlbGYgQTogJyArIHRoaXMuYm9va3NoZWxmKTtcbiAgICB0aGlzLmJvb2tzaGVsZiA9IG5ldyBTdHJTaGVsZigpO1xuXG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGVsZi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY291bnRlciArPSAxO1xuICAgICAgdGhpcy5zaGVsZltpXS5pZCA9IGNvdW50ZXI7XG4gICAgICAvLyB0aGlzLnNoZWxmW2ldLmluZGV4ID0gY291bnRlcjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoZWxmLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAvLyBHSVZFUyBUSEUgQk9PSyBPQkogQU4gSUQgI05VTUJFUlxuICAgICAgdGhpcy5ib29rc2hlbGZbYCR7dGhpcy5zaGVsZltpXS5pZH1gXSA9IHRoaXMuc2hlbGZbaV07XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdib29rc2hlbGYgQzogJyArIHRoaXMuYm9va3NoZWxmKTtcbiAgICBMaWJyYXJ5LnB1c2hUb1N0b3JhZ2UodGhpcy5ib29rc2hlbGYpO1xuICB9XG5cbiAgbmV3Qm9vayA9ICh0aXRsZSkgPT4ge1xuICAgIHRoaXMuYm9va3NoZWxmID0gbmV3IFN0clNoZWxmKCk7XG4gICAgY29uc3QgYm9vayA9IG5ldyBCb29rKCk7XG4gICAgYm9vay50aXRsZSA9IHRpdGxlO1xuICAgIGJvb2suY29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy5zaGVsZi5wdXNoKGJvb2spO1xuICAgIHRoaXMudXBkYXRlU2hlbGYoKTtcbiAgICB0aGlzLnBhaW50VG9QYWdlKCk7XG4gIH1cblxuICByZW1vdmVCb29rID0gKGlkKSA9PiB7XG4gICAgLy8gdGhpcy5ib29rc2hlbGYgPSBuZXcgU3RyU2hlbGYoKTtcblxuICAgIC8vIHRoaXMuZnJvbnRTaGVsZi5pbm5lckhUTUwgPSAnJztcbiAgICAvLyB0aGlzLnJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmVCdXR0b24nKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGVsZi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc29sZS5sb2coJ3JlbW92ZUJvb2sgPiBzaGVsZi5sZW5ndGg6ICcgKyB0aGlzLnNoZWxmLmxlbmd0aCk7XG4gICAgICBjb25zb2xlLmxvZygncmVtb3ZlQm9vazogc2hlbGY6ICcgKyB0aGlzLnNoZWxmWzBdKTtcbiAgICAgIGlmICh0aGlzLnNoZWxmW2ldLmlkID09PSBwYXJzZUludChpZCwgMTApKSB7XG4gICAgICAgIHRoaXMuc2hlbGYuc3BsaWNlKGksIDEpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNoZWxmKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucGFpbnRUb1BhZ2UoKTtcbiAgICAgIC8vIHRoaXMuc2V0UmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICAvLyB0aGlzLnJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmVCdXR0b24nKTtcbiAgICAgIC8vIHRoaXMucmVtb3ZlQnV0dG9uLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgLy8gICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdhZGRldmVudC1BQS1JTlNJREVmb3ItbG9vcCcpO1xuICAgICAgLy8gICAgIHRoaXMucmVtb3ZlQm9vayhlLnRhcmdldC5pZCk7XG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8gfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0UmVtb3ZlTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHRoaXMucmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZUJ1dHRvbicpO1xuICAgIHRoaXMucmVtb3ZlQnV0dG9uLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZGV2ZW50LUFBLU9VVFNJREUtZm9yLWxvb3AnKTtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQpO1xuICAgICAgICB0aGlzLnJlbW92ZUJvb2soZS50YXJnZXQuaWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRVcEFkZExpc3RlbmVyID0gKCkgPT4ge1xuICAgIHRoaXMuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5uZXdCb29rKHRoaXMubmV3VGl0bGUudmFsdWUpO1xuICAgICAgdGhpcy5wdWxsRnJvbVN0b3JhZ2UoKTtcbiAgICAgIHRoaXMubmV3VGl0bGUudmFsdWUgPSAnJztcbiAgICAgIC8vIHRoaXMuc2V0UmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0clNoZWxmIHtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=