/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    height: 100vh;\n    margin: 0;\n    display: grid;\n    grid-template-rows: min-content 1fr min-content;\n    grid-template-columns: max-content 1fr;\n    font-size: 12px;\n    font-family: sans-serif, serif;\n}\n\nbody > * {\n    border: 1px solid black;\n}\n\n.header, .footer {\n    grid-column: 1 / 3;\n}\n\n.sidebar {\n    grid-column: 1;\n    padding-left: 2rem;\n    padding-right: 2rem;\n}\n\n.addButton {\n    margin-top: 3rem;\n}\n\n\n.content {\n    grid-column: 2;\n    padding-left: 2rem;\n}\n\n.content .addItemForm {\n    display: none;\n    width: 50%;\n    padding: 1rem;\n    background-color: white;\n    border: 2px solid black;\n}\n\n.content .addButton {\n    margin-top: 3rem;\n    padding: 1rem;\n    border: 1px solid gray;\n    width: 4rem;\n    background-color: darkolivegreen;\n    color: white;\n    font-weight: bold;\n}\n\n.content .addButton:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n}\n\n.footer {\n    text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,SAAS;IACT,aAAa;IACb,+CAA+C;IAC/C,sCAAsC;IACtC,eAAe;IACf,8BAA8B;AAClC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;;AAGA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,gCAAgC;IAChC,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["body {\n    height: 100vh;\n    margin: 0;\n    display: grid;\n    grid-template-rows: min-content 1fr min-content;\n    grid-template-columns: max-content 1fr;\n    font-size: 12px;\n    font-family: sans-serif, serif;\n}\n\nbody > * {\n    border: 1px solid black;\n}\n\n.header, .footer {\n    grid-column: 1 / 3;\n}\n\n.sidebar {\n    grid-column: 1;\n    padding-left: 2rem;\n    padding-right: 2rem;\n}\n\n.addButton {\n    margin-top: 3rem;\n}\n\n\n.content {\n    grid-column: 2;\n    padding-left: 2rem;\n}\n\n.content .addItemForm {\n    display: none;\n    width: 50%;\n    padding: 1rem;\n    background-color: white;\n    border: 2px solid black;\n}\n\n.content .addButton {\n    margin-top: 3rem;\n    padding: 1rem;\n    border: 1px solid gray;\n    width: 4rem;\n    background-color: darkolivegreen;\n    color: white;\n    font-weight: bold;\n}\n\n.content .addButton:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n}\n\n.footer {\n    text-align: center;\n}"],"sourceRoot":""}]);
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

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");


// toDo item factory
const toDoFactory = (id = null, title, description, dueDate, priority, status = false) => {

    const getId = () => id;
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getStatus = () => status;

    const summarize = () => {
        const summary = `Id: ${id}\nTitle: ${title}\nDescription: ${description}\nDue Date: ${dueDate}\nPriority: ${priority}`;
        return summary;
    }

    return { getId, getTitle, getDescription, getDueDate, getPriority, getStatus, summarize };
};

// project factory
const projectFactory = (name) => {
    const toDos = [];
    let numToDos = 0;

    const getName = () => name;

    const add = (toDo) => {
        toDos.push(toDo);
        numToDos++;
    };

    const remove = (itemIndex) => {
        if (!Boolean(toDos[itemIndex])) {
            throw new Error("Cannot find item in this project!");
        }
        delete toDos[itemIndex];
        numToDos--;
    };

    const visualize = () => {
        toDos.forEach((item) => {
            console.log(item.summarize());
        })
    };

    const getToDos = () => toDos;

    const getNumToDos = () => toDos.length;

    return { getName, add, remove, getToDos, getNumToDos, visualize };
};


// internal projects module
const toDoModule = (() => {
    const projects = [];
    let numProjects = 0;

    const getNumProjects = () => numProjects;

    // create a new project and add to projects list
    const addProject = (projectName) => {
        projects.push(projectFactory(projectName));
        numProjects += 1;
    };

    // remove an existing project given its id
    const removeProject = (projectId) => {
        if (!Boolean(projects[projectId])) {
            throw new Error("Cannot remove an a project that doesn't exist");
        }
        // projectId is the index of the project in the array as well as the projectId data attribute of the DOM node 
        delete projects[projectId];
        numProjects--;
    };

    // display all items on a project and return the project
    const viewProject = (projectId) => {
        if (!Boolean(projects[projectId])) {
            throw new Error("Cannot view a project that doesn't exist");
        }
        console.log(`Project name: ${projects[projectId].getName()}`);
        projects[projectId].visualize();
        return projects[projectId];
    };

    // get number of items/toDos in a project
    const getNumToDos = (projectId) => projects[projectId].getNumToDos();

    // add a toDo item to an existing project and return the id
    const addToProject = (projectId, item) => {
        if (!Boolean(projects[projectId])) {
            throw new Error("Cannot add an item to a project that doesn't exist");
        }
        // item has title, description, dueDate, and priority attributes
        let title;
        let description;
        let dueDate;
        let priority;
        try {
            title = item.title;
            description = item.description;
            dueDate = item.dueDate;
            priority = item.priority;
        } catch (error) {
            throw error;
        }
        const id = getNumToDos(projectId);
        const toDo = toDoFactory(id, title, description, dueDate, priority);
        projects[projectId].add(toDo);
        return id;
    };

    // remove a toDo item from an existing project
    const removeFromProject = (projectId, itemId) => {
        if (!Boolean(projects[projectId])) {
            throw new Error("Cannot remove an item from a project that doesn't exist");
        }
        projects[projectId].remove(itemId);

    };

    return { getNumProjects, addProject, removeProject, viewProject, getNumToDos, addToProject, removeFromProject };

})();

// DOM controller; adds stuff to and removes stuff from dom
// controls the event listeners as well
const displayController = (() => {
    const projectsSection = document.querySelector('.projects');

    // add new project to display and return the node
    const addProject = (projectName, projectId) => {
        const project = document.createElement("div");
        project.textContent = projectName;
        project.setAttribute("data-projectid", `${projectId}`);
        projectsSection.appendChild(project);
        return project;
    };

    const deleteAllItems = (projectNode) => {
        // console.log(projectNode);
        const projectId = projectNode.getAttribute("data-projectid");
        const listItemsToDelete = document.querySelectorAll(`div.toDos [data-projectid="${projectId}"]`);
        listItemsToDelete.forEach((node) => {
            const nodeParent = node.parentNode;
            nodeParent.removeChild(node);
        });
    };

    // removes to do item from DOM
    const removeFromProject = (projectId, todoId) => {
        const element = document.querySelector(`div[data-projectid="${projectId}"][data-todoid="${todoId}"]`);
        if(element == null) {
            throw new Error("Element not found in DOM");
        }
        const parent = element.parentNode;
        parent.removeChild(element);
    };

    const deleteAllItemsv2 = () => {
        const toDoSection = document.querySelector('.toDos');
        while(toDoSection.firstChild) {
            toDoSection.removeChild(toDoSection.firstChild);
        }
    };

    // remove project as well as the to do list items
    const removeProject = (projectNode) => {
        // deleteAllItems(projectNode);
        deleteAllItemsv2();
        const parent = projectNode.parentNode;
        parent.removeChild(projectNode);
    };

    const clearProjectContent = () => {
        const contentSection = document.querySelector(".content");
        deleteAllItemsv2();
        const addItemButton = document.querySelector(".content .addButton");
        if(addItemButton !== null){
            contentSection.removeChild(addItemButton);
        }
    }

    // adding toDos to a project
    // each toDo element has a toDo Id, project Id, and a delete and edit button with those ids
    // return the element after creation
    const addToProject = (projectId, item, itemId) => {
        const toDoSection = document.querySelector('.toDos');
        const toDo = document.createElement("div");
        toDo.setAttribute("data-todoid", `${itemId}`);
        toDo.setAttribute("data-projectid", `${projectId}`);
        toDo.textContent = JSON.stringify(item);
        addItemActionButtons(toDo, projectId, itemId);
        toDoSection.appendChild(toDo);
        return toDo;
    };

    // function to display project items in the DOM
    // project: internal project object
    // projectId: id of the project in the DOM
    // gets toDos from the internal projects module, adds it to the DOM, and adds button to each to do
    // also returns an array of toDo item DOM nodes
    const viewProject = (project, projectId) => {
        const projectNodes = []
        const toDos = project.getToDos();
        toDos.forEach((toDo) => {
            const item = {
                title: toDo.getTitle(),
                description: toDo.getDescription(),
                dueDate: toDo.getDueDate(),
                priority: toDo.getPriority(),
            }   
            projectNodes.push(addToProject(projectId, item, toDo.getId()));
        });
        return projectNodes;
    };

    // function to add edit and delete buttons to the DOM toDo element
    const addItemActionButtons = (toDo, projectId, itemId) => {
        toDo.appendChild(createActionItemButton(projectId, itemId, "Delete"));
        toDo.appendChild(createActionItemButton(projectId, itemId, "Edit"));
    };

    // create a button with the given attributes and return the element
    const createActionItemButton = (projectId, itemId, textC) => {
        const button = document.createElement("button");
        button.setAttribute("data-projectid", `${projectId}`);
        button.setAttribute("data-todoid", `${itemId}`);
        button.textContent = textC;
        if(textC === "Delete"){
            button.classList.add("delete");
        } else {
            button.classList.add("edit");
        }
        return button;
    };
    

    // function to display the add to do button
    // returns the button node once created/displayed
    const displayAddItemButton = (projectId) => {
        console.log(projectId);
        const contentSection = document.querySelector(".content");
        const button = document.createElement("div")
        button.classList.add("addButton");
        button.textContent = "Add Item";
        button.setAttribute("data-projectid", `${projectId}`);
        contentSection.appendChild(button);
        return button;
    };

    // function to display add form in the DOM
    // returns the form node once displayed
    const renderAddItemForm = (projectId) => {
        const itemForm = document.createElement("div");
        itemForm.classList.add("addItemForm");

        const fields = [{for: "title", type: "text", textC: "Title: "},
                        {for: "desc", type: "textarea", textC: "Description: "},
                        {for: "date", type: "date", textC: "Date: "}];
        fields.forEach((field) => {
            const row = document.createElement("div");
            row.classList.add("row");
            const label = document.createElement("label");
            label.setAttribute("for", field.for);
            label.textContent = field.textC;
            row.appendChild(label);

            const input = document.createElement("input");
            input.type = field.type;
            input.id = field.for;
            input.name = field.for;
            if(field.for === "title" || field.for === "date"){
                input.required = true;
            }
            row.appendChild(input);

            itemForm.appendChild(row);
        });


        const row = document.createElement("div");
        const radioLabel = document.createElement("div");
        radioLabel.classList.add("radioLabel");
        radioLabel.textContent = "Priority: ";
        row.appendChild(radioLabel);

        const options = [{id: "low", textC: "Low"}, {id: "medium", textC: "Medium"}, {id: "high", textC: "High"}];
        options.forEach((option) => {
            const input = document.createElement("input");
            input.type = "radio";
            input.name = "priority";
            input.id = option.id;
            input.value = option.id;
            if(option.id === "medium") {
                input.required = true;
                input.checked = true;
            }
            row.appendChild(input);

            const label = document.createElement("label");
            label.setAttribute("for", option.id);
            label.textContent = option.textC;
            row.appendChild(label);
        });

        itemForm.appendChild(row);

        const submitButton = document.createElement("button");
        submitButton.textContent = "Add";
        submitButton.type = "submit";
        submitButton.setAttribute("data-projectid", `${projectId}`);
        itemForm.appendChild(submitButton);

        const cancelButton = document.createElement("button");
        cancelButton.textContent = "Cancel";
        cancelButton.type = "reset";
        itemForm.appendChild(cancelButton);

        itemForm.style.display = "block";

        const contentSection = document.querySelector(".content");
        contentSection.appendChild(itemForm);

        return itemForm;
    };

    return { addProject, removeProject, clearProjectContent, displayAddItemButton, renderAddItemForm, viewProject, addToProject, removeFromProject };

})();


// logic/reactivity controller; calls the functions on the displayController as well as the internal toDoList module
// creates all event listeners here
const logicController = (() => {

    let currentProject = null;
    const getNumProjects = () => toDoModule.getNumProjects();
    const getNumToDos = (projectId) => toDoModule.getNumToDos(projectId);

    const projects = ["One", "Two", "Three"];

    const addProjectButton = document.querySelector(".sidebar .addButton");
    addProjectButton.addEventListener('click', (event) => {
        // get the project name
        // add to internal module as well as the display module
        // set current project to the newly added project
        projects.forEach((project) => {
            const projectName = project;
            const numProjects = getNumProjects();
            toDoModule.addProject(projectName);
            currentProject = displayController.addProject(projectName, numProjects);
            currentProject.addEventListener('click', openProject);
        });
    });

    // function to run once a project has been clicked
    // clear the current to do list and repopulate
    // display the add items button for this project
    const openProject = (event) => {
        const projectNode = event.target;
        const projectId = projectNode.getAttribute("data-projectid");
        displayController.clearProjectContent();
        currentProject = projectNode;
        // display internal project to do items
        const project = toDoModule.viewProject(projectId);
        // display the project to Do items in the DOM
        const toDoNodes = displayController.viewProject(project, projectId);
        // call function to add event listeners to each toDo node buttons
        toDoNodes.forEach(addActionListeners);
        // show the add item button as well
        showAddToDoButton(projectId);
    };

    // reneder the add item button in the DOM
    // add event listener to the button
    const showAddToDoButton = (projectId) => {
        const button = displayController.displayAddItemButton(projectId);
        button.addEventListener('click', () => {
            console.log(projectId);
            renderAddItemForm(projectId);
        });
    };

    // render the add item form in the DOM
    // add event listeners to in-form buttoms
    const renderAddItemForm = (projectId) => {
        const form = displayController.renderAddItemForm(projectId);
        const submitButton = form.querySelector("button[type=submit]");
        submitButton.addEventListener("click", () => {
            if(validateForm(form)){
                addItemToProject(projectId, form);
                removeToDoForm();
            }
        });

        const cancelButton = form.querySelector("button[type=reset]");
        cancelButton.addEventListener("click", removeToDoForm);
    };

    // function to remove the add toDo form from the DOM
    const removeToDoForm = () => {
        const toDoForm = document.querySelector(".addItemForm");
        const parent = toDoForm.parentElement;
        parent.removeChild(toDoForm);
    }

    // function to validate form entries
    // returns true upon success
    // alerts the user upon failure
    const validateForm = (form) => {
        console.log("Yet to implement validation!");
        return true;
    };

    // called by add button in add to do form
    // extracts data from the form and adds it to the appropriate project internally,
    // and renders it on the DOM
    // assumes form data is validated
    const addItemToProject = (projectId, form) => {
        console.log(`Adding to project ${projectId}`);
    
        // extract data and add to toDoModule and DOM
        const item = {
            title: form.querySelector(`input[id="title"]`).value,
            description: form.querySelector(`input[id="desc"]`).value,
            dueDate: form.querySelector(`input[type="date"]`).value,
        };

        let priorityValue = null;
        const priorityOptions = form.querySelectorAll(`input[type="radio"]`);
        priorityOptions.forEach((option) => {
            if(option.checked === true){
                priorityValue = option.value;
            }
        });

        item.priority = priorityValue;

        // add item to internal toDoModule and get the id
        const itemId = toDoModule.addToProject(projectId, item);

        // add item to the DOM
        const toDo = displayController.addToProject(projectId, item, itemId);

        // add listeners to each button in toDo element
        addActionListeners(toDo);
    };

    // function to add delete/edit buttons along with their event listeners
    const addActionListeners = (toDo) => {
        const deleteButton = toDo.querySelector("button.delete");
        deleteButton.addEventListener('click', deleteItem);
        
        const editButton = toDo.querySelector("button.edit");
        editButton.addEventListener('click', editItem);
    };

    // function that gets triggered by the delete item button
    const deleteItem = (event) => {
        const projectId = event.target.getAttribute("data-projectid");
        const todoId = event.target.getAttribute("data-todoid");

        toDoModule.removeFromProject(projectId, todoId);
        displayController.removeFromProject(projectId, todoId);
    };

    // function that gets triggered by the edit item button
    const editItem = (event) => {

    };


})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXVELFVBQVU7QUFDakU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGFBQWE7O0FBRWIsQ0FBQzs7O0FBR0QsZ0NBQWdDO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsVUFBVTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0EsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnI7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsIHNlcmlmO1xcbn1cXG5cXG5ib2R5ID4gKiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaGVhZGVyLCAuZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxufVxcblxcbi5hZGRCdXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG5cXG4uY29udGVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbi5jb250ZW50IC5hZGRJdGVtRm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNvbnRlbnQgLmFkZEJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb2xpdmVncmVlbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRlbnQgLmFkZEJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGFBQWE7SUFDYiwrQ0FBK0M7SUFDL0Msc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnIgbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgMWZyO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmLCBzZXJpZjtcXG59XFxuXFxuYm9keSA+ICoge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmhlYWRlciwgLmZvb3RlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG4uYWRkQnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG59XFxuXFxuXFxuLmNvbnRlbnQge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG5cXG4uY29udGVudCAuYWRkSXRlbUZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jb250ZW50IC5hZGRCdXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29saXZlZ3JlZW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250ZW50IC5hZGRCdXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcblxuLy8gdG9EbyBpdGVtIGZhY3RvcnlcbmNvbnN0IHRvRG9GYWN0b3J5ID0gKGlkID0gbnVsbCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzID0gZmFsc2UpID0+IHtcblxuICAgIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG4gICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4gc3RhdHVzO1xuXG4gICAgY29uc3Qgc3VtbWFyaXplID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzdW1tYXJ5ID0gYElkOiAke2lkfVxcblRpdGxlOiAke3RpdGxlfVxcbkRlc2NyaXB0aW9uOiAke2Rlc2NyaXB0aW9ufVxcbkR1ZSBEYXRlOiAke2R1ZURhdGV9XFxuUHJpb3JpdHk6ICR7cHJpb3JpdHl9YDtcbiAgICAgICAgcmV0dXJuIHN1bW1hcnk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0SWQsIGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksIGdldFN0YXR1cywgc3VtbWFyaXplIH07XG59O1xuXG4vLyBwcm9qZWN0IGZhY3RvcnlcbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCB0b0RvcyA9IFtdO1xuICAgIGxldCBudW1Ub0RvcyA9IDA7XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcblxuICAgIGNvbnN0IGFkZCA9ICh0b0RvKSA9PiB7XG4gICAgICAgIHRvRG9zLnB1c2godG9Ebyk7XG4gICAgICAgIG51bVRvRG9zKys7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZSA9IChpdGVtSW5kZXgpID0+IHtcbiAgICAgICAgaWYgKCFCb29sZWFuKHRvRG9zW2l0ZW1JbmRleF0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBpdGVtIGluIHRoaXMgcHJvamVjdCFcIik7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHRvRG9zW2l0ZW1JbmRleF07XG4gICAgICAgIG51bVRvRG9zLS07XG4gICAgfTtcblxuICAgIGNvbnN0IHZpc3VhbGl6ZSA9ICgpID0+IHtcbiAgICAgICAgdG9Eb3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5zdW1tYXJpemUoKSk7XG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIGNvbnN0IGdldFRvRG9zID0gKCkgPT4gdG9Eb3M7XG5cbiAgICBjb25zdCBnZXROdW1Ub0RvcyA9ICgpID0+IHRvRG9zLmxlbmd0aDtcblxuICAgIHJldHVybiB7IGdldE5hbWUsIGFkZCwgcmVtb3ZlLCBnZXRUb0RvcywgZ2V0TnVtVG9Eb3MsIHZpc3VhbGl6ZSB9O1xufTtcblxuXG4vLyBpbnRlcm5hbCBwcm9qZWN0cyBtb2R1bGVcbmNvbnN0IHRvRG9Nb2R1bGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzID0gW107XG4gICAgbGV0IG51bVByb2plY3RzID0gMDtcblxuICAgIGNvbnN0IGdldE51bVByb2plY3RzID0gKCkgPT4gbnVtUHJvamVjdHM7XG5cbiAgICAvLyBjcmVhdGUgYSBuZXcgcHJvamVjdCBhbmQgYWRkIHRvIHByb2plY3RzIGxpc3RcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdEZhY3RvcnkocHJvamVjdE5hbWUpKTtcbiAgICAgICAgbnVtUHJvamVjdHMgKz0gMTtcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIGFuIGV4aXN0aW5nIHByb2plY3QgZ2l2ZW4gaXRzIGlkXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICAgICAgaWYgKCFCb29sZWFuKHByb2plY3RzW3Byb2plY3RJZF0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmVtb3ZlIGFuIGEgcHJvamVjdCB0aGF0IGRvZXNuJ3QgZXhpc3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHJvamVjdElkIGlzIHRoZSBpbmRleCBvZiB0aGUgcHJvamVjdCBpbiB0aGUgYXJyYXkgYXMgd2VsbCBhcyB0aGUgcHJvamVjdElkIGRhdGEgYXR0cmlidXRlIG9mIHRoZSBET00gbm9kZSBcbiAgICAgICAgZGVsZXRlIHByb2plY3RzW3Byb2plY3RJZF07XG4gICAgICAgIG51bVByb2plY3RzLS07XG4gICAgfTtcblxuICAgIC8vIGRpc3BsYXkgYWxsIGl0ZW1zIG9uIGEgcHJvamVjdCBhbmQgcmV0dXJuIHRoZSBwcm9qZWN0XG4gICAgY29uc3Qgdmlld1Byb2plY3QgPSAocHJvamVjdElkKSA9PiB7XG4gICAgICAgIGlmICghQm9vbGVhbihwcm9qZWN0c1twcm9qZWN0SWRdKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHZpZXcgYSBwcm9qZWN0IHRoYXQgZG9lc24ndCBleGlzdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgUHJvamVjdCBuYW1lOiAke3Byb2plY3RzW3Byb2plY3RJZF0uZ2V0TmFtZSgpfWApO1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0SWRdLnZpc3VhbGl6ZSgpO1xuICAgICAgICByZXR1cm4gcHJvamVjdHNbcHJvamVjdElkXTtcbiAgICB9O1xuXG4gICAgLy8gZ2V0IG51bWJlciBvZiBpdGVtcy90b0RvcyBpbiBhIHByb2plY3RcbiAgICBjb25zdCBnZXROdW1Ub0RvcyA9IChwcm9qZWN0SWQpID0+IHByb2plY3RzW3Byb2plY3RJZF0uZ2V0TnVtVG9Eb3MoKTtcblxuICAgIC8vIGFkZCBhIHRvRG8gaXRlbSB0byBhbiBleGlzdGluZyBwcm9qZWN0IGFuZCByZXR1cm4gdGhlIGlkXG4gICAgY29uc3QgYWRkVG9Qcm9qZWN0ID0gKHByb2plY3RJZCwgaXRlbSkgPT4ge1xuICAgICAgICBpZiAoIUJvb2xlYW4ocHJvamVjdHNbcHJvamVjdElkXSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBhZGQgYW4gaXRlbSB0byBhIHByb2plY3QgdGhhdCBkb2Vzbid0IGV4aXN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGl0ZW0gaGFzIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgYW5kIHByaW9yaXR5IGF0dHJpYnV0ZXNcbiAgICAgICAgbGV0IHRpdGxlO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb247XG4gICAgICAgIGxldCBkdWVEYXRlO1xuICAgICAgICBsZXQgcHJpb3JpdHk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aXRsZSA9IGl0ZW0udGl0bGU7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBkdWVEYXRlID0gaXRlbS5kdWVEYXRlO1xuICAgICAgICAgICAgcHJpb3JpdHkgPSBpdGVtLnByaW9yaXR5O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBnZXROdW1Ub0Rvcyhwcm9qZWN0SWQpO1xuICAgICAgICBjb25zdCB0b0RvID0gdG9Eb0ZhY3RvcnkoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0SWRdLmFkZCh0b0RvKTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cbiAgICAvLyByZW1vdmUgYSB0b0RvIGl0ZW0gZnJvbSBhbiBleGlzdGluZyBwcm9qZWN0XG4gICAgY29uc3QgcmVtb3ZlRnJvbVByb2plY3QgPSAocHJvamVjdElkLCBpdGVtSWQpID0+IHtcbiAgICAgICAgaWYgKCFCb29sZWFuKHByb2plY3RzW3Byb2plY3RJZF0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmVtb3ZlIGFuIGl0ZW0gZnJvbSBhIHByb2plY3QgdGhhdCBkb2Vzbid0IGV4aXN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3RzW3Byb2plY3RJZF0ucmVtb3ZlKGl0ZW1JZCk7XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0TnVtUHJvamVjdHMsIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIHZpZXdQcm9qZWN0LCBnZXROdW1Ub0RvcywgYWRkVG9Qcm9qZWN0LCByZW1vdmVGcm9tUHJvamVjdCB9O1xuXG59KSgpO1xuXG4vLyBET00gY29udHJvbGxlcjsgYWRkcyBzdHVmZiB0byBhbmQgcmVtb3ZlcyBzdHVmZiBmcm9tIGRvbVxuLy8gY29udHJvbHMgdGhlIGV2ZW50IGxpc3RlbmVycyBhcyB3ZWxsXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5cbiAgICAvLyBhZGQgbmV3IHByb2plY3QgdG8gZGlzcGxheSBhbmQgcmV0dXJuIHRoZSBub2RlXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0TmFtZSwgcHJvamVjdElkKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICAgIHByb2plY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0aWRcIiwgYCR7cHJvamVjdElkfWApO1xuICAgICAgICBwcm9qZWN0c1NlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVBbGxJdGVtcyA9IChwcm9qZWN0Tm9kZSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0Tm9kZSk7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3ROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIpO1xuICAgICAgICBjb25zdCBsaXN0SXRlbXNUb0RlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGRpdi50b0RvcyBbZGF0YS1wcm9qZWN0aWQ9XCIke3Byb2plY3RJZH1cIl1gKTtcbiAgICAgICAgbGlzdEl0ZW1zVG9EZWxldGUuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZVBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIG5vZGVQYXJlbnQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyByZW1vdmVzIHRvIGRvIGl0ZW0gZnJvbSBET01cbiAgICBjb25zdCByZW1vdmVGcm9tUHJvamVjdCA9IChwcm9qZWN0SWQsIHRvZG9JZCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtcHJvamVjdGlkPVwiJHtwcm9qZWN0SWR9XCJdW2RhdGEtdG9kb2lkPVwiJHt0b2RvSWR9XCJdYCk7XG4gICAgICAgIGlmKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRWxlbWVudCBub3QgZm91bmQgaW4gRE9NXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVBbGxJdGVtc3YyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0RvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvcycpO1xuICAgICAgICB3aGlsZSh0b0RvU2VjdGlvbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0b0RvU2VjdGlvbi5yZW1vdmVDaGlsZCh0b0RvU2VjdGlvbi5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgcHJvamVjdCBhcyB3ZWxsIGFzIHRoZSB0byBkbyBsaXN0IGl0ZW1zXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0Tm9kZSkgPT4ge1xuICAgICAgICAvLyBkZWxldGVBbGxJdGVtcyhwcm9qZWN0Tm9kZSk7XG4gICAgICAgIGRlbGV0ZUFsbEl0ZW1zdjIoKTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gcHJvamVjdE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHByb2plY3ROb2RlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXJQcm9qZWN0Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgICAgIGRlbGV0ZUFsbEl0ZW1zdjIoKTtcbiAgICAgICAgY29uc3QgYWRkSXRlbUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudCAuYWRkQnV0dG9uXCIpO1xuICAgICAgICBpZihhZGRJdGVtQnV0dG9uICE9PSBudWxsKXtcbiAgICAgICAgICAgIGNvbnRlbnRTZWN0aW9uLnJlbW92ZUNoaWxkKGFkZEl0ZW1CdXR0b24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkaW5nIHRvRG9zIHRvIGEgcHJvamVjdFxuICAgIC8vIGVhY2ggdG9EbyBlbGVtZW50IGhhcyBhIHRvRG8gSWQsIHByb2plY3QgSWQsIGFuZCBhIGRlbGV0ZSBhbmQgZWRpdCBidXR0b24gd2l0aCB0aG9zZSBpZHNcbiAgICAvLyByZXR1cm4gdGhlIGVsZW1lbnQgYWZ0ZXIgY3JlYXRpb25cbiAgICBjb25zdCBhZGRUb1Byb2plY3QgPSAocHJvamVjdElkLCBpdGVtLCBpdGVtSWQpID0+IHtcbiAgICAgICAgY29uc3QgdG9Eb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb3MnKTtcbiAgICAgICAgY29uc3QgdG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvRG8uc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvaWRcIiwgYCR7aXRlbUlkfWApO1xuICAgICAgICB0b0RvLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIsIGAke3Byb2plY3RJZH1gKTtcbiAgICAgICAgdG9Eby50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pO1xuICAgICAgICBhZGRJdGVtQWN0aW9uQnV0dG9ucyh0b0RvLCBwcm9qZWN0SWQsIGl0ZW1JZCk7XG4gICAgICAgIHRvRG9TZWN0aW9uLmFwcGVuZENoaWxkKHRvRG8pO1xuICAgICAgICByZXR1cm4gdG9EbztcbiAgICB9O1xuXG4gICAgLy8gZnVuY3Rpb24gdG8gZGlzcGxheSBwcm9qZWN0IGl0ZW1zIGluIHRoZSBET01cbiAgICAvLyBwcm9qZWN0OiBpbnRlcm5hbCBwcm9qZWN0IG9iamVjdFxuICAgIC8vIHByb2plY3RJZDogaWQgb2YgdGhlIHByb2plY3QgaW4gdGhlIERPTVxuICAgIC8vIGdldHMgdG9Eb3MgZnJvbSB0aGUgaW50ZXJuYWwgcHJvamVjdHMgbW9kdWxlLCBhZGRzIGl0IHRvIHRoZSBET00sIGFuZCBhZGRzIGJ1dHRvbiB0byBlYWNoIHRvIGRvXG4gICAgLy8gYWxzbyByZXR1cm5zIGFuIGFycmF5IG9mIHRvRG8gaXRlbSBET00gbm9kZXNcbiAgICBjb25zdCB2aWV3UHJvamVjdCA9IChwcm9qZWN0LCBwcm9qZWN0SWQpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5vZGVzID0gW11cbiAgICAgICAgY29uc3QgdG9Eb3MgPSBwcm9qZWN0LmdldFRvRG9zKCk7XG4gICAgICAgIHRvRG9zLmZvckVhY2goKHRvRG8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRvRG8uZ2V0VGl0bGUoKSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdG9Eby5nZXREZXNjcmlwdGlvbigpLFxuICAgICAgICAgICAgICAgIGR1ZURhdGU6IHRvRG8uZ2V0RHVlRGF0ZSgpLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiB0b0RvLmdldFByaW9yaXR5KCksXG4gICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICBwcm9qZWN0Tm9kZXMucHVzaChhZGRUb1Byb2plY3QocHJvamVjdElkLCBpdGVtLCB0b0RvLmdldElkKCkpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0Tm9kZXM7XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvIGFkZCBlZGl0IGFuZCBkZWxldGUgYnV0dG9ucyB0byB0aGUgRE9NIHRvRG8gZWxlbWVudFxuICAgIGNvbnN0IGFkZEl0ZW1BY3Rpb25CdXR0b25zID0gKHRvRG8sIHByb2plY3RJZCwgaXRlbUlkKSA9PiB7XG4gICAgICAgIHRvRG8uYXBwZW5kQ2hpbGQoY3JlYXRlQWN0aW9uSXRlbUJ1dHRvbihwcm9qZWN0SWQsIGl0ZW1JZCwgXCJEZWxldGVcIikpO1xuICAgICAgICB0b0RvLmFwcGVuZENoaWxkKGNyZWF0ZUFjdGlvbkl0ZW1CdXR0b24ocHJvamVjdElkLCBpdGVtSWQsIFwiRWRpdFwiKSk7XG4gICAgfTtcblxuICAgIC8vIGNyZWF0ZSBhIGJ1dHRvbiB3aXRoIHRoZSBnaXZlbiBhdHRyaWJ1dGVzIGFuZCByZXR1cm4gdGhlIGVsZW1lbnRcbiAgICBjb25zdCBjcmVhdGVBY3Rpb25JdGVtQnV0dG9uID0gKHByb2plY3RJZCwgaXRlbUlkLCB0ZXh0QykgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0aWRcIiwgYCR7cHJvamVjdElkfWApO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvaWRcIiwgYCR7aXRlbUlkfWApO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0QztcbiAgICAgICAgaWYodGV4dEMgPT09IFwiRGVsZXRlXCIpe1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9O1xuICAgIFxuXG4gICAgLy8gZnVuY3Rpb24gdG8gZGlzcGxheSB0aGUgYWRkIHRvIGRvIGJ1dHRvblxuICAgIC8vIHJldHVybnMgdGhlIGJ1dHRvbiBub2RlIG9uY2UgY3JlYXRlZC9kaXNwbGF5ZWRcbiAgICBjb25zdCBkaXNwbGF5QWRkSXRlbUJ1dHRvbiA9IChwcm9qZWN0SWQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdElkKTtcbiAgICAgICAgY29uc3QgY29udGVudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRCdXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIEl0ZW1cIjtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIsIGAke3Byb2plY3RJZH1gKTtcbiAgICAgICAgY29udGVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9O1xuXG4gICAgLy8gZnVuY3Rpb24gdG8gZGlzcGxheSBhZGQgZm9ybSBpbiB0aGUgRE9NXG4gICAgLy8gcmV0dXJucyB0aGUgZm9ybSBub2RlIG9uY2UgZGlzcGxheWVkXG4gICAgY29uc3QgcmVuZGVyQWRkSXRlbUZvcm0gPSAocHJvamVjdElkKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaXRlbUZvcm0uY2xhc3NMaXN0LmFkZChcImFkZEl0ZW1Gb3JtXCIpO1xuXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IFt7Zm9yOiBcInRpdGxlXCIsIHR5cGU6IFwidGV4dFwiLCB0ZXh0QzogXCJUaXRsZTogXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2ZvcjogXCJkZXNjXCIsIHR5cGU6IFwidGV4dGFyZWFcIiwgdGV4dEM6IFwiRGVzY3JpcHRpb246IFwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3I6IFwiZGF0ZVwiLCB0eXBlOiBcImRhdGVcIiwgdGV4dEM6IFwiRGF0ZTogXCJ9XTtcbiAgICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBmaWVsZC5mb3IpO1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBmaWVsZC50ZXh0QztcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9IGZpZWxkLnR5cGU7XG4gICAgICAgICAgICBpbnB1dC5pZCA9IGZpZWxkLmZvcjtcbiAgICAgICAgICAgIGlucHV0Lm5hbWUgPSBmaWVsZC5mb3I7XG4gICAgICAgICAgICBpZihmaWVsZC5mb3IgPT09IFwidGl0bGVcIiB8fCBmaWVsZC5mb3IgPT09IFwiZGF0ZVwiKXtcbiAgICAgICAgICAgICAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByYWRpb0xhYmVsLmNsYXNzTGlzdC5hZGQoXCJyYWRpb0xhYmVsXCIpO1xuICAgICAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCI7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0gW3tpZDogXCJsb3dcIiwgdGV4dEM6IFwiTG93XCJ9LCB7aWQ6IFwibWVkaXVtXCIsIHRleHRDOiBcIk1lZGl1bVwifSwge2lkOiBcImhpZ2hcIiwgdGV4dEM6IFwiSGlnaFwifV07XG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgICAgICBpbnB1dC5uYW1lID0gXCJwcmlvcml0eVwiO1xuICAgICAgICAgICAgaW5wdXQuaWQgPSBvcHRpb24uaWQ7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IG9wdGlvbi5pZDtcbiAgICAgICAgICAgIGlmKG9wdGlvbi5pZCA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICAgICAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIG9wdGlvbi5pZCk7XG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0QztcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKHJvdyk7XG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICAgICAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0aWRcIiwgYCR7cHJvamVjdElkfWApO1xuICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJyZXNldFwiO1xuICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgICAgIGl0ZW1Gb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgICAgY29uc3QgY29udGVudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgICAgIGNvbnRlbnRTZWN0aW9uLmFwcGVuZENoaWxkKGl0ZW1Gb3JtKTtcblxuICAgICAgICByZXR1cm4gaXRlbUZvcm07XG4gICAgfTtcblxuICAgIHJldHVybiB7IGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGNsZWFyUHJvamVjdENvbnRlbnQsIGRpc3BsYXlBZGRJdGVtQnV0dG9uLCByZW5kZXJBZGRJdGVtRm9ybSwgdmlld1Byb2plY3QsIGFkZFRvUHJvamVjdCwgcmVtb3ZlRnJvbVByb2plY3QgfTtcblxufSkoKTtcblxuXG4vLyBsb2dpYy9yZWFjdGl2aXR5IGNvbnRyb2xsZXI7IGNhbGxzIHRoZSBmdW5jdGlvbnMgb24gdGhlIGRpc3BsYXlDb250cm9sbGVyIGFzIHdlbGwgYXMgdGhlIGludGVybmFsIHRvRG9MaXN0IG1vZHVsZVxuLy8gY3JlYXRlcyBhbGwgZXZlbnQgbGlzdGVuZXJzIGhlcmVcbmNvbnN0IGxvZ2ljQ29udHJvbGxlciA9ICgoKSA9PiB7XG5cbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBudWxsO1xuICAgIGNvbnN0IGdldE51bVByb2plY3RzID0gKCkgPT4gdG9Eb01vZHVsZS5nZXROdW1Qcm9qZWN0cygpO1xuICAgIGNvbnN0IGdldE51bVRvRG9zID0gKHByb2plY3RJZCkgPT4gdG9Eb01vZHVsZS5nZXROdW1Ub0Rvcyhwcm9qZWN0SWQpO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBbXCJPbmVcIiwgXCJUd29cIiwgXCJUaHJlZVwiXTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXIgLmFkZEJ1dHRvblwiKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGdldCB0aGUgcHJvamVjdCBuYW1lXG4gICAgICAgIC8vIGFkZCB0byBpbnRlcm5hbCBtb2R1bGUgYXMgd2VsbCBhcyB0aGUgZGlzcGxheSBtb2R1bGVcbiAgICAgICAgLy8gc2V0IGN1cnJlbnQgcHJvamVjdCB0byB0aGUgbmV3bHkgYWRkZWQgcHJvamVjdFxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3Q7XG4gICAgICAgICAgICBjb25zdCBudW1Qcm9qZWN0cyA9IGdldE51bVByb2plY3RzKCk7XG4gICAgICAgICAgICB0b0RvTW9kdWxlLmFkZFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBkaXNwbGF5Q29udHJvbGxlci5hZGRQcm9qZWN0KHByb2plY3ROYW1lLCBudW1Qcm9qZWN0cyk7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Qcm9qZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBmdW5jdGlvbiB0byBydW4gb25jZSBhIHByb2plY3QgaGFzIGJlZW4gY2xpY2tlZFxuICAgIC8vIGNsZWFyIHRoZSBjdXJyZW50IHRvIGRvIGxpc3QgYW5kIHJlcG9wdWxhdGVcbiAgICAvLyBkaXNwbGF5IHRoZSBhZGQgaXRlbXMgYnV0dG9uIGZvciB0aGlzIHByb2plY3RcbiAgICBjb25zdCBvcGVuUHJvamVjdCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0Tm9kZSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0aWRcIik7XG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNsZWFyUHJvamVjdENvbnRlbnQoKTtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0Tm9kZTtcbiAgICAgICAgLy8gZGlzcGxheSBpbnRlcm5hbCBwcm9qZWN0IHRvIGRvIGl0ZW1zXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0b0RvTW9kdWxlLnZpZXdQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICAgIC8vIGRpc3BsYXkgdGhlIHByb2plY3QgdG8gRG8gaXRlbXMgaW4gdGhlIERPTVxuICAgICAgICBjb25zdCB0b0RvTm9kZXMgPSBkaXNwbGF5Q29udHJvbGxlci52aWV3UHJvamVjdChwcm9qZWN0LCBwcm9qZWN0SWQpO1xuICAgICAgICAvLyBjYWxsIGZ1bmN0aW9uIHRvIGFkZCBldmVudCBsaXN0ZW5lcnMgdG8gZWFjaCB0b0RvIG5vZGUgYnV0dG9uc1xuICAgICAgICB0b0RvTm9kZXMuZm9yRWFjaChhZGRBY3Rpb25MaXN0ZW5lcnMpO1xuICAgICAgICAvLyBzaG93IHRoZSBhZGQgaXRlbSBidXR0b24gYXMgd2VsbFxuICAgICAgICBzaG93QWRkVG9Eb0J1dHRvbihwcm9qZWN0SWQpO1xuICAgIH07XG5cbiAgICAvLyByZW5lZGVyIHRoZSBhZGQgaXRlbSBidXR0b24gaW4gdGhlIERPTVxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgYnV0dG9uXG4gICAgY29uc3Qgc2hvd0FkZFRvRG9CdXR0b24gPSAocHJvamVjdElkKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlBZGRJdGVtQnV0dG9uKHByb2plY3RJZCk7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RJZCk7XG4gICAgICAgICAgICByZW5kZXJBZGRJdGVtRm9ybShwcm9qZWN0SWQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gcmVuZGVyIHRoZSBhZGQgaXRlbSBmb3JtIGluIHRoZSBET01cbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGluLWZvcm0gYnV0dG9tc1xuICAgIGNvbnN0IHJlbmRlckFkZEl0ZW1Gb3JtID0gKHByb2plY3RJZCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtID0gZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyQWRkSXRlbUZvcm0ocHJvamVjdElkKTtcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW3R5cGU9c3VibWl0XVwiKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZih2YWxpZGF0ZUZvcm0oZm9ybSkpe1xuICAgICAgICAgICAgICAgIGFkZEl0ZW1Ub1Byb2plY3QocHJvamVjdElkLCBmb3JtKTtcbiAgICAgICAgICAgICAgICByZW1vdmVUb0RvRm9ybSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bdHlwZT1yZXNldF1cIik7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlVG9Eb0Zvcm0pO1xuICAgIH07XG5cbiAgICAvLyBmdW5jdGlvbiB0byByZW1vdmUgdGhlIGFkZCB0b0RvIGZvcm0gZnJvbSB0aGUgRE9NXG4gICAgY29uc3QgcmVtb3ZlVG9Eb0Zvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvRG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRJdGVtRm9ybVwiKTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdG9Eb0Zvcm0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHRvRG9Gb3JtKTtcbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiB0byB2YWxpZGF0ZSBmb3JtIGVudHJpZXNcbiAgICAvLyByZXR1cm5zIHRydWUgdXBvbiBzdWNjZXNzXG4gICAgLy8gYWxlcnRzIHRoZSB1c2VyIHVwb24gZmFpbHVyZVxuICAgIGNvbnN0IHZhbGlkYXRlRm9ybSA9IChmb3JtKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWWV0IHRvIGltcGxlbWVudCB2YWxpZGF0aW9uIVwiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIC8vIGNhbGxlZCBieSBhZGQgYnV0dG9uIGluIGFkZCB0byBkbyBmb3JtXG4gICAgLy8gZXh0cmFjdHMgZGF0YSBmcm9tIHRoZSBmb3JtIGFuZCBhZGRzIGl0IHRvIHRoZSBhcHByb3ByaWF0ZSBwcm9qZWN0IGludGVybmFsbHksXG4gICAgLy8gYW5kIHJlbmRlcnMgaXQgb24gdGhlIERPTVxuICAgIC8vIGFzc3VtZXMgZm9ybSBkYXRhIGlzIHZhbGlkYXRlZFxuICAgIGNvbnN0IGFkZEl0ZW1Ub1Byb2plY3QgPSAocHJvamVjdElkLCBmb3JtKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBZGRpbmcgdG8gcHJvamVjdCAke3Byb2plY3RJZH1gKTtcbiAgICBcbiAgICAgICAgLy8gZXh0cmFjdCBkYXRhIGFuZCBhZGQgdG8gdG9Eb01vZHVsZSBhbmQgRE9NXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAgICAgICB0aXRsZTogZm9ybS5xdWVyeVNlbGVjdG9yKGBpbnB1dFtpZD1cInRpdGxlXCJdYCkudmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZm9ybS5xdWVyeVNlbGVjdG9yKGBpbnB1dFtpZD1cImRlc2NcIl1gKS52YWx1ZSxcbiAgICAgICAgICAgIGR1ZURhdGU6IGZvcm0ucXVlcnlTZWxlY3RvcihgaW5wdXRbdHlwZT1cImRhdGVcIl1gKS52YWx1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgcHJpb3JpdHlWYWx1ZSA9IG51bGw7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT1cInJhZGlvXCJdYCk7XG4gICAgICAgIHByaW9yaXR5T3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGlmKG9wdGlvbi5jaGVja2VkID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICBwcmlvcml0eVZhbHVlID0gb3B0aW9uLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLnByaW9yaXR5ID0gcHJpb3JpdHlWYWx1ZTtcblxuICAgICAgICAvLyBhZGQgaXRlbSB0byBpbnRlcm5hbCB0b0RvTW9kdWxlIGFuZCBnZXQgdGhlIGlkXG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9IHRvRG9Nb2R1bGUuYWRkVG9Qcm9qZWN0KHByb2plY3RJZCwgaXRlbSk7XG5cbiAgICAgICAgLy8gYWRkIGl0ZW0gdG8gdGhlIERPTVxuICAgICAgICBjb25zdCB0b0RvID0gZGlzcGxheUNvbnRyb2xsZXIuYWRkVG9Qcm9qZWN0KHByb2plY3RJZCwgaXRlbSwgaXRlbUlkKTtcblxuICAgICAgICAvLyBhZGQgbGlzdGVuZXJzIHRvIGVhY2ggYnV0dG9uIGluIHRvRG8gZWxlbWVudFxuICAgICAgICBhZGRBY3Rpb25MaXN0ZW5lcnModG9Ebyk7XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvIGFkZCBkZWxldGUvZWRpdCBidXR0b25zIGFsb25nIHdpdGggdGhlaXIgZXZlbnQgbGlzdGVuZXJzXG4gICAgY29uc3QgYWRkQWN0aW9uTGlzdGVuZXJzID0gKHRvRG8pID0+IHtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdG9Eby5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmRlbGV0ZVwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlSXRlbSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gdG9Eby5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmVkaXRcIik7XG4gICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0SXRlbSk7XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHRoYXQgZ2V0cyB0cmlnZ2VyZWQgYnkgdGhlIGRlbGV0ZSBpdGVtIGJ1dHRvblxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIpO1xuICAgICAgICBjb25zdCB0b2RvSWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10b2RvaWRcIik7XG5cbiAgICAgICAgdG9Eb01vZHVsZS5yZW1vdmVGcm9tUHJvamVjdChwcm9qZWN0SWQsIHRvZG9JZCk7XG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbW92ZUZyb21Qcm9qZWN0KHByb2plY3RJZCwgdG9kb0lkKTtcbiAgICB9O1xuXG4gICAgLy8gZnVuY3Rpb24gdGhhdCBnZXRzIHRyaWdnZXJlZCBieSB0aGUgZWRpdCBpdGVtIGJ1dHRvblxuICAgIGNvbnN0IGVkaXRJdGVtID0gKGV2ZW50KSA9PiB7XG5cbiAgICB9O1xuXG5cbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9