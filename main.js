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

    const getNumToDos = () => numToDos;

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
    const addToProject = (projectId, item, itemId) => {
        const toDoSection = document.querySelector('.toDos');
        const toDo = document.createElement("div");
        toDo.setAttribute("data-todoid", `${itemId}`);
        toDo.setAttribute("data-projectid", `${projectId}`);
        toDo.textContent = JSON.stringify(item);
        toDoSection.appendChild(toDo);
    };

    // function to display project items in the DOM
    // project: internal project object
    // projectId: id of the project in the DOM
    const viewProject = (project, projectId) => {
        const toDos = project.getToDos();
        toDos.forEach((toDo) => {
            const item = {
                title: toDo.getTitle(),
                description: toDo.getDescription(),
                dueDate: toDo.getDueDate(),
                priority: toDo.getPriority(),
            }   
            addToProject(projectId, item, toDo.getId());
        });
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
            input.setAttribute("type", field.type);
            input.setAttribute("id", field.for);
            input.setAttribute("name", field.for);
            if(field.for === "title" || field.for === "date"){
                input.setAttribute("required", "true");
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
            input.setAttribute("type", "radio");
            input.setAttribute("name", "priority");
            input.setAttribute("id", option.id);
            input.setAttribute("value", option.id);
            if(option.id === "medium") {
                input.setAttribute("required", "true");
                input.setAttribute("selected", "true");
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
        submitButton.setAttribute("type", "submit");
        submitButton.setAttribute("data-projectid", `${projectId}`);
        itemForm.appendChild(submitButton);

        const cancelButton = document.createElement("button");
        cancelButton.textContent = "Cancel";
        cancelButton.setAttribute("type", "reset");
        itemForm.appendChild(cancelButton);

        itemForm.style.display = "block";

        const contentSection = document.querySelector(".content");
        contentSection.appendChild(itemForm);

        return itemForm;
    };

    return { addProject, removeProject, clearProjectContent, displayAddItemButton, renderAddItemForm, viewProject, addToProject };

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
        displayController.viewProject(project, projectId);
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
    // extracts data from the form and adds it to the appropriate project
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
            if(option.getAttribute("selected") == true){
                priorityValue = option.value;
            }
        });

        item.priority = priorityValue;

        // add item to internal toDoModule and get the id
        const itemId = toDoModule.addToProject(projectId, item);

        // add item to the DOM
        displayController.addToProject(projectId, item, itemId);

    };



    // const addItemsToProjectDummy = (projectid, item) => {
    //     const itemId = toDoModule.addToProject(projectid, item);
    //     if(projectid == currentProject.getAttribute("data-projectid")){
    //         displayController.addToProject(projectid, item, itemId);
    //     }
    // };

    // const addToDoButton = document.querySelector(".content .addButton");
    // addToDoButton.addEventListener('click', (event) => {
    //     const projectId = Math.floor(Math.random() * 3);
    //     const item = { title: 'Work on to do', description: 'n/a', dueDate: 'A week Later', priority: 'high' };
    //     addItemsToProjectDummy(projectId, item);
    //     const item2 = {title: 'Work on table', description: 'Finish assembling the table', dueDate: 'Sometime next week', priority: 'medium'};
    //     addItemsToProjectDummy(projectId, item2);
    // });

})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELG9CQUFvQixnQkFBZ0Isb0JBQW9CLHNEQUFzRCw2Q0FBNkMsc0JBQXNCLHFDQUFxQyxHQUFHLGNBQWMsOEJBQThCLEdBQUcsc0JBQXNCLHlCQUF5QixHQUFHLGNBQWMscUJBQXFCLHlCQUF5QiwwQkFBMEIsR0FBRyxnQkFBZ0IsdUJBQXVCLEdBQUcsZ0JBQWdCLHFCQUFxQix5QkFBeUIsR0FBRywyQkFBMkIsb0JBQW9CLGlCQUFpQixvQkFBb0IsOEJBQThCLDhCQUE4QixHQUFHLHlCQUF5Qix1QkFBdUIsb0JBQW9CLDZCQUE2QixrQkFBa0IsdUNBQXVDLG1CQUFtQix3QkFBd0IsR0FBRywrQkFBK0Isc0JBQXNCLDZCQUE2QixHQUFHLGFBQWEseUJBQXlCLEdBQUcsT0FBTyxvRkFBb0YsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksZ0NBQWdDLG9CQUFvQixnQkFBZ0Isb0JBQW9CLHNEQUFzRCw2Q0FBNkMsc0JBQXNCLHFDQUFxQyxHQUFHLGNBQWMsOEJBQThCLEdBQUcsc0JBQXNCLHlCQUF5QixHQUFHLGNBQWMscUJBQXFCLHlCQUF5QiwwQkFBMEIsR0FBRyxnQkFBZ0IsdUJBQXVCLEdBQUcsZ0JBQWdCLHFCQUFxQix5QkFBeUIsR0FBRywyQkFBMkIsb0JBQW9CLGlCQUFpQixvQkFBb0IsOEJBQThCLDhCQUE4QixHQUFHLHlCQUF5Qix1QkFBdUIsb0JBQW9CLDZCQUE2QixrQkFBa0IsdUNBQXVDLG1CQUFtQix3QkFBd0IsR0FBRywrQkFBK0Isc0JBQXNCLDZCQUE2QixHQUFHLGFBQWEseUJBQXlCLEdBQUcsbUJBQW1CO0FBQzlpRjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnlCOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixHQUFHLFdBQVcsTUFBTSxpQkFBaUIsWUFBWSxjQUFjLFFBQVEsY0FBYyxTQUFTO0FBQzdIO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTs7QUFFQSxhQUFhO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsOEJBQThCO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsYUFBYTs7QUFFYixDQUFDOztBQUVELG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsVUFBVTtBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLFVBQVU7QUFDcEc7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLE9BQU87QUFDbkQsK0NBQStDLFVBQVU7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsVUFBVTtBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsNkNBQTZDO0FBQ3RFLHlCQUF5QixzREFBc0Q7QUFDL0UseUJBQXlCLDJDQUEyQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsd0JBQXdCLEdBQUcsOEJBQThCLEdBQUcsMEJBQTBCO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxVQUFVO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxhQUFhOztBQUViLENBQUM7OztBQUdELGdDQUFnQztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFVBQVU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsUUFBUTs7QUFFUixDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyIG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDFmcjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZiwgc2VyaWY7XFxufVxcblxcbmJvZHkgPiAqIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5oZWFkZXIsIC5mb290ZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXG59XFxuXFxuLmFkZEJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxufVxcblxcblxcbi5jb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG59XFxuXFxuLmNvbnRlbnQgLmFkZEl0ZW1Gb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY29udGVudCAuYWRkQnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtvbGl2ZWdyZWVuO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGVudCAuYWRkQnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsYUFBYTtJQUNiLCtDQUErQztJQUMvQyxzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnI7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsIHNlcmlmO1xcbn1cXG5cXG5ib2R5ID4gKiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaGVhZGVyLCAuZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxufVxcblxcbi5hZGRCdXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG5cXG4uY29udGVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbi5jb250ZW50IC5hZGRJdGVtRm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNvbnRlbnQgLmFkZEJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb2xpdmVncmVlbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRlbnQgLmFkZEJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xuXG4vLyB0b0RvIGl0ZW0gZmFjdG9yeVxuY29uc3QgdG9Eb0ZhY3RvcnkgPSAoaWQgPSBudWxsLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMgPSBmYWxzZSkgPT4ge1xuXG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiBpZDtcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiBzdGF0dXM7XG5cbiAgICBjb25zdCBzdW1tYXJpemUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1bW1hcnkgPSBgSWQ6ICR7aWR9XFxuVGl0bGU6ICR7dGl0bGV9XFxuRGVzY3JpcHRpb246ICR7ZGVzY3JpcHRpb259XFxuRHVlIERhdGU6ICR7ZHVlRGF0ZX1cXG5Qcmlvcml0eTogJHtwcmlvcml0eX1gO1xuICAgICAgICByZXR1cm4gc3VtbWFyeTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRJZCwgZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBnZXRQcmlvcml0eSwgZ2V0U3RhdHVzLCBzdW1tYXJpemUgfTtcbn07XG5cbi8vIHByb2plY3QgZmFjdG9yeVxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHRvRG9zID0gW107XG4gICAgbGV0IG51bVRvRG9zID0gMDtcblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuXG4gICAgY29uc3QgYWRkID0gKHRvRG8pID0+IHtcbiAgICAgICAgdG9Eb3MucHVzaCh0b0RvKTtcbiAgICAgICAgbnVtVG9Eb3MrKztcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlID0gKGl0ZW1JbmRleCkgPT4ge1xuICAgICAgICBpZiAoIUJvb2xlYW4odG9Eb3NbaXRlbUluZGV4XSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIGl0ZW0gaW4gdGhpcyBwcm9qZWN0IVwiKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgdG9Eb3NbaXRlbUluZGV4XTtcbiAgICAgICAgbnVtVG9Eb3MtLTtcbiAgICB9O1xuXG4gICAgY29uc3QgdmlzdWFsaXplID0gKCkgPT4ge1xuICAgICAgICB0b0Rvcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLnN1bW1hcml6ZSgpKTtcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VG9Eb3MgPSAoKSA9PiB0b0RvcztcblxuICAgIGNvbnN0IGdldE51bVRvRG9zID0gKCkgPT4gbnVtVG9Eb3M7XG5cbiAgICByZXR1cm4geyBnZXROYW1lLCBhZGQsIHJlbW92ZSwgZ2V0VG9Eb3MsIGdldE51bVRvRG9zLCB2aXN1YWxpemUgfTtcbn07XG5cblxuLy8gaW50ZXJuYWwgcHJvamVjdHMgbW9kdWxlXG5jb25zdCB0b0RvTW9kdWxlID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuICAgIGxldCBudW1Qcm9qZWN0cyA9IDA7XG5cbiAgICBjb25zdCBnZXROdW1Qcm9qZWN0cyA9ICgpID0+IG51bVByb2plY3RzO1xuXG4gICAgLy8gY3JlYXRlIGEgbmV3IHByb2plY3QgYW5kIGFkZCB0byBwcm9qZWN0cyBsaXN0XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3RGYWN0b3J5KHByb2plY3ROYW1lKSk7XG4gICAgICAgIG51bVByb2plY3RzICs9IDE7XG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSBhbiBleGlzdGluZyBwcm9qZWN0IGdpdmVuIGl0cyBpZFxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdElkKSA9PiB7XG4gICAgICAgIGlmICghQm9vbGVhbihwcm9qZWN0c1twcm9qZWN0SWRdKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJlbW92ZSBhbiBhIHByb2plY3QgdGhhdCBkb2Vzbid0IGV4aXN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHByb2plY3RJZCBpcyB0aGUgaW5kZXggb2YgdGhlIHByb2plY3QgaW4gdGhlIGFycmF5IGFzIHdlbGwgYXMgdGhlIHByb2plY3RJZCBkYXRhIGF0dHJpYnV0ZSBvZiB0aGUgRE9NIG5vZGUgXG4gICAgICAgIGRlbGV0ZSBwcm9qZWN0c1twcm9qZWN0SWRdO1xuICAgICAgICBudW1Qcm9qZWN0cy0tO1xuICAgIH07XG5cbiAgICAvLyBkaXNwbGF5IGFsbCBpdGVtcyBvbiBhIHByb2plY3QgYW5kIHJldHVybiB0aGUgcHJvamVjdFxuICAgIGNvbnN0IHZpZXdQcm9qZWN0ID0gKHByb2plY3RJZCkgPT4ge1xuICAgICAgICBpZiAoIUJvb2xlYW4ocHJvamVjdHNbcHJvamVjdElkXSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB2aWV3IGEgcHJvamVjdCB0aGF0IGRvZXNuJ3QgZXhpc3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYFByb2plY3QgbmFtZTogJHtwcm9qZWN0c1twcm9qZWN0SWRdLmdldE5hbWUoKX1gKTtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdElkXS52aXN1YWxpemUoKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzW3Byb2plY3RJZF07XG4gICAgfTtcblxuICAgIC8vIGdldCBudW1iZXIgb2YgaXRlbXMvdG9Eb3MgaW4gYSBwcm9qZWN0XG4gICAgY29uc3QgZ2V0TnVtVG9Eb3MgPSAocHJvamVjdElkKSA9PiBwcm9qZWN0c1twcm9qZWN0SWRdLmdldE51bVRvRG9zKCk7XG5cbiAgICAvLyBhZGQgYSB0b0RvIGl0ZW0gdG8gYW4gZXhpc3RpbmcgcHJvamVjdCBhbmQgcmV0dXJuIHRoZSBpZFxuICAgIGNvbnN0IGFkZFRvUHJvamVjdCA9IChwcm9qZWN0SWQsIGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKCFCb29sZWFuKHByb2plY3RzW3Byb2plY3RJZF0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgYWRkIGFuIGl0ZW0gdG8gYSBwcm9qZWN0IHRoYXQgZG9lc24ndCBleGlzdFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpdGVtIGhhcyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGFuZCBwcmlvcml0eSBhdHRyaWJ1dGVzXG4gICAgICAgIGxldCB0aXRsZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uO1xuICAgICAgICBsZXQgZHVlRGF0ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGl0bGUgPSBpdGVtLnRpdGxlO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgZHVlRGF0ZSA9IGl0ZW0uZHVlRGF0ZTtcbiAgICAgICAgICAgIHByaW9yaXR5ID0gaXRlbS5wcmlvcml0eTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gZ2V0TnVtVG9Eb3MocHJvamVjdElkKTtcbiAgICAgICAgY29uc3QgdG9EbyA9IHRvRG9GYWN0b3J5KGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdElkXS5hZGQodG9Ebyk7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIGEgdG9EbyBpdGVtIGZyb20gYW4gZXhpc3RpbmcgcHJvamVjdFxuICAgIGNvbnN0IHJlbW92ZUZyb21Qcm9qZWN0ID0gKHByb2plY3RJZCwgaXRlbUlkKSA9PiB7XG4gICAgICAgIGlmICghQm9vbGVhbihwcm9qZWN0c1twcm9qZWN0SWRdKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJlbW92ZSBhbiBpdGVtIGZyb20gYSBwcm9qZWN0IHRoYXQgZG9lc24ndCBleGlzdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0c1twcm9qZWN0SWRdLnJlbW92ZShpdGVtSWQpO1xuXG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldE51bVByb2plY3RzLCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCB2aWV3UHJvamVjdCwgZ2V0TnVtVG9Eb3MsIGFkZFRvUHJvamVjdCwgcmVtb3ZlRnJvbVByb2plY3QgfTtcblxufSkoKTtcblxuLy8gRE9NIGNvbnRyb2xsZXI7IGFkZHMgc3R1ZmYgdG8gYW5kIHJlbW92ZXMgc3R1ZmYgZnJvbSBkb21cbi8vIGNvbnRyb2xzIHRoZSBldmVudCBsaXN0ZW5lcnMgYXMgd2VsbFxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuXG4gICAgLy8gYWRkIG5ldyBwcm9qZWN0IHRvIGRpc3BsYXkgYW5kIHJldHVybiB0aGUgbm9kZVxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdE5hbWUsIHByb2plY3RJZCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIsIGAke3Byb2plY3RJZH1gKTtcbiAgICAgICAgcHJvamVjdHNTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlQWxsSXRlbXMgPSAocHJvamVjdE5vZGUpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdE5vZGUpO1xuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBwcm9qZWN0Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RpZFwiKTtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW1zVG9EZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBkaXYudG9Eb3MgW2RhdGEtcHJvamVjdGlkPVwiJHtwcm9qZWN0SWR9XCJdYCk7XG4gICAgICAgIGxpc3RJdGVtc1RvRGVsZXRlLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVQYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBub2RlUGFyZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlQWxsSXRlbXN2MiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9Eb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb3MnKTtcbiAgICAgICAgd2hpbGUodG9Eb1NlY3Rpb24uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdG9Eb1NlY3Rpb24ucmVtb3ZlQ2hpbGQodG9Eb1NlY3Rpb24uZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHByb2plY3QgYXMgd2VsbCBhcyB0aGUgdG8gZG8gbGlzdCBpdGVtc1xuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdE5vZGUpID0+IHtcbiAgICAgICAgLy8gZGVsZXRlQWxsSXRlbXMocHJvamVjdE5vZGUpO1xuICAgICAgICBkZWxldGVBbGxJdGVtc3YyKCk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHByb2plY3ROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwcm9qZWN0Tm9kZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyUHJvamVjdENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgICAgICBkZWxldGVBbGxJdGVtc3YyKCk7XG4gICAgICAgIGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQgLmFkZEJ1dHRvblwiKTtcbiAgICAgICAgaWYoYWRkSXRlbUJ1dHRvbiAhPT0gbnVsbCl7XG4gICAgICAgICAgICBjb250ZW50U2VjdGlvbi5yZW1vdmVDaGlsZChhZGRJdGVtQnV0dG9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZGluZyB0b0RvcyB0byBhIHByb2plY3RcbiAgICBjb25zdCBhZGRUb1Byb2plY3QgPSAocHJvamVjdElkLCBpdGVtLCBpdGVtSWQpID0+IHtcbiAgICAgICAgY29uc3QgdG9Eb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb3MnKTtcbiAgICAgICAgY29uc3QgdG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvRG8uc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvaWRcIiwgYCR7aXRlbUlkfWApO1xuICAgICAgICB0b0RvLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIsIGAke3Byb2plY3RJZH1gKTtcbiAgICAgICAgdG9Eby50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pO1xuICAgICAgICB0b0RvU2VjdGlvbi5hcHBlbmRDaGlsZCh0b0RvKTtcbiAgICB9O1xuXG4gICAgLy8gZnVuY3Rpb24gdG8gZGlzcGxheSBwcm9qZWN0IGl0ZW1zIGluIHRoZSBET01cbiAgICAvLyBwcm9qZWN0OiBpbnRlcm5hbCBwcm9qZWN0IG9iamVjdFxuICAgIC8vIHByb2plY3RJZDogaWQgb2YgdGhlIHByb2plY3QgaW4gdGhlIERPTVxuICAgIGNvbnN0IHZpZXdQcm9qZWN0ID0gKHByb2plY3QsIHByb2plY3RJZCkgPT4ge1xuICAgICAgICBjb25zdCB0b0RvcyA9IHByb2plY3QuZ2V0VG9Eb3MoKTtcbiAgICAgICAgdG9Eb3MuZm9yRWFjaCgodG9EbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdG9Eby5nZXRUaXRsZSgpLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0b0RvLmdldERlc2NyaXB0aW9uKCksXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogdG9Eby5nZXREdWVEYXRlKCksXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IHRvRG8uZ2V0UHJpb3JpdHkoKSxcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIGFkZFRvUHJvamVjdChwcm9qZWN0SWQsIGl0ZW0sIHRvRG8uZ2V0SWQoKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBmdW5jdGlvbiB0byBkaXNwbGF5IHRoZSBhZGQgdG8gZG8gYnV0dG9uXG4gICAgLy8gcmV0dXJucyB0aGUgYnV0dG9uIG5vZGUgb25jZSBjcmVhdGVkL2Rpc3BsYXllZFxuICAgIGNvbnN0IGRpc3BsYXlBZGRJdGVtQnV0dG9uID0gKHByb2plY3RJZCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SWQpO1xuICAgICAgICBjb25zdCBjb250ZW50U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFkZEJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgSXRlbVwiO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0aWRcIiwgYCR7cHJvamVjdElkfWApO1xuICAgICAgICBjb250ZW50U2VjdGlvbi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH07XG5cbiAgICAvLyBmdW5jdGlvbiB0byBkaXNwbGF5IGFkZCBmb3JtIGluIHRoZSBET01cbiAgICAvLyByZXR1cm5zIHRoZSBmb3JtIG5vZGUgb25jZSBkaXNwbGF5ZWRcbiAgICBjb25zdCByZW5kZXJBZGRJdGVtRm9ybSA9IChwcm9qZWN0SWQpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpdGVtRm9ybS5jbGFzc0xpc3QuYWRkKFwiYWRkSXRlbUZvcm1cIik7XG5cbiAgICAgICAgY29uc3QgZmllbGRzID0gW3tmb3I6IFwidGl0bGVcIiwgdHlwZTogXCJ0ZXh0XCIsIHRleHRDOiBcIlRpdGxlOiBcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9yOiBcImRlc2NcIiwgdHlwZTogXCJ0ZXh0YXJlYVwiLCB0ZXh0QzogXCJEZXNjcmlwdGlvbjogXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2ZvcjogXCJkYXRlXCIsIHR5cGU6IFwiZGF0ZVwiLCB0ZXh0QzogXCJEYXRlOiBcIn1dO1xuICAgICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGZpZWxkLmZvcik7XG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGZpZWxkLnRleHRDO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGZpZWxkLnR5cGUpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgZmllbGQuZm9yKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgZmllbGQuZm9yKTtcbiAgICAgICAgICAgIGlmKGZpZWxkLmZvciA9PT0gXCJ0aXRsZVwiIHx8IGZpZWxkLmZvciA9PT0gXCJkYXRlXCIpe1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICAgICAgICAgIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZChcInJhZGlvTGFiZWxcIik7XG4gICAgICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHJhZGlvTGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbe2lkOiBcImxvd1wiLCB0ZXh0QzogXCJMb3dcIn0sIHtpZDogXCJtZWRpdW1cIiwgdGV4dEM6IFwiTWVkaXVtXCJ9LCB7aWQ6IFwiaGlnaFwiLCB0ZXh0QzogXCJIaWdoXCJ9XTtcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgb3B0aW9uLmlkKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG9wdGlvbi5pZCk7XG4gICAgICAgICAgICBpZihvcHRpb24uaWQgPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgb3B0aW9uLmlkKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gb3B0aW9uLnRleHRDO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQocm93KTtcblxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIsIGAke3Byb2plY3RJZH1gKTtcbiAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJlc2V0XCIpO1xuICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgICAgIGl0ZW1Gb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgICAgY29uc3QgY29udGVudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgICAgIGNvbnRlbnRTZWN0aW9uLmFwcGVuZENoaWxkKGl0ZW1Gb3JtKTtcblxuICAgICAgICByZXR1cm4gaXRlbUZvcm07XG4gICAgfTtcblxuICAgIHJldHVybiB7IGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGNsZWFyUHJvamVjdENvbnRlbnQsIGRpc3BsYXlBZGRJdGVtQnV0dG9uLCByZW5kZXJBZGRJdGVtRm9ybSwgdmlld1Byb2plY3QsIGFkZFRvUHJvamVjdCB9O1xuXG59KSgpO1xuXG5cbi8vIGxvZ2ljL3JlYWN0aXZpdHkgY29udHJvbGxlcjsgY2FsbHMgdGhlIGZ1bmN0aW9ucyBvbiB0aGUgZGlzcGxheUNvbnRyb2xsZXIgYXMgd2VsbCBhcyB0aGUgaW50ZXJuYWwgdG9Eb0xpc3QgbW9kdWxlXG4vLyBjcmVhdGVzIGFsbCBldmVudCBsaXN0ZW5lcnMgaGVyZVxuY29uc3QgbG9naWNDb250cm9sbGVyID0gKCgpID0+IHtcblxuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IG51bGw7XG4gICAgY29uc3QgZ2V0TnVtUHJvamVjdHMgPSAoKSA9PiB0b0RvTW9kdWxlLmdldE51bVByb2plY3RzKCk7XG4gICAgY29uc3QgZ2V0TnVtVG9Eb3MgPSAocHJvamVjdElkKSA9PiB0b0RvTW9kdWxlLmdldE51bVRvRG9zKHByb2plY3RJZCk7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IFtcIk9uZVwiLCBcIlR3b1wiLCBcIlRocmVlXCJdO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhciAuYWRkQnV0dG9uXCIpO1xuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gZ2V0IHRoZSBwcm9qZWN0IG5hbWVcbiAgICAgICAgLy8gYWRkIHRvIGludGVybmFsIG1vZHVsZSBhcyB3ZWxsIGFzIHRoZSBkaXNwbGF5IG1vZHVsZVxuICAgICAgICAvLyBzZXQgY3VycmVudCBwcm9qZWN0IHRvIHRoZSBuZXdseSBhZGRlZCBwcm9qZWN0XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdDtcbiAgICAgICAgICAgIGNvbnN0IG51bVByb2plY3RzID0gZ2V0TnVtUHJvamVjdHMoKTtcbiAgICAgICAgICAgIHRvRG9Nb2R1bGUuYWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IGRpc3BsYXlDb250cm9sbGVyLmFkZFByb2plY3QocHJvamVjdE5hbWUsIG51bVByb2plY3RzKTtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblByb2plY3QpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvIHJ1biBvbmNlIGEgcHJvamVjdCBoYXMgYmVlbiBjbGlja2VkXG4gICAgLy8gY2xlYXIgdGhlIGN1cnJlbnQgdG8gZG8gbGlzdCBhbmQgcmVwb3B1bGF0ZVxuICAgIC8vIGRpc3BsYXkgdGhlIGFkZCBpdGVtcyBidXR0b24gZm9yIHRoaXMgcHJvamVjdFxuICAgIGNvbnN0IG9wZW5Qcm9qZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROb2RlID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBwcm9qZWN0Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RpZFwiKTtcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY2xlYXJQcm9qZWN0Q29udGVudCgpO1xuICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3ROb2RlO1xuICAgICAgICAvLyBkaXNwbGF5IGludGVybmFsIHByb2plY3QgdG8gZG8gaXRlbXNcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRvRG9Nb2R1bGUudmlld1Byb2plY3QocHJvamVjdElkKTtcbiAgICAgICAgLy8gZGlzcGxheSB0aGUgcHJvamVjdCB0byBEbyBpdGVtcyBpbiB0aGUgRE9NXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnZpZXdQcm9qZWN0KHByb2plY3QsIHByb2plY3RJZCk7XG4gICAgICAgIC8vIHNob3cgdGhlIGFkZCBpdGVtIGJ1dHRvbiBhcyB3ZWxsXG4gICAgICAgIHNob3dBZGRUb0RvQnV0dG9uKHByb2plY3RJZCk7XG4gICAgfTtcblxuICAgIC8vIHJlbmVkZXIgdGhlIGFkZCBpdGVtIGJ1dHRvbiBpbiB0aGUgRE9NXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBidXR0b25cbiAgICBjb25zdCBzaG93QWRkVG9Eb0J1dHRvbiA9IChwcm9qZWN0SWQpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheUFkZEl0ZW1CdXR0b24ocHJvamVjdElkKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdElkKTtcbiAgICAgICAgICAgIHJlbmRlckFkZEl0ZW1Gb3JtKHByb2plY3RJZCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyByZW5kZXIgdGhlIGFkZCBpdGVtIGZvcm0gaW4gdGhlIERPTVxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lcnMgdG8gaW4tZm9ybSBidXR0b21zXG4gICAgY29uc3QgcmVuZGVyQWRkSXRlbUZvcm0gPSAocHJvamVjdElkKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJBZGRJdGVtRm9ybShwcm9qZWN0SWQpO1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bdHlwZT1zdWJtaXRdXCIpO1xuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHZhbGlkYXRlRm9ybShmb3JtKSl7XG4gICAgICAgICAgICAgICAgYWRkSXRlbVRvUHJvamVjdChwcm9qZWN0SWQsIGZvcm0pO1xuICAgICAgICAgICAgICAgIHJlbW92ZVRvRG9Gb3JtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcihcImJ1dHRvblt0eXBlPXJlc2V0XVwiKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVUb0RvRm9ybSk7XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgYWRkIHRvRG8gZm9ybSBmcm9tIHRoZSBET01cbiAgICBjb25zdCByZW1vdmVUb0RvRm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9Eb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZEl0ZW1Gb3JtXCIpO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0b0RvRm9ybS5wYXJlbnRFbGVtZW50O1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodG9Eb0Zvcm0pO1xuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIHRvIHZhbGlkYXRlIGZvcm0gZW50cmllc1xuICAgIC8vIHJldHVybnMgdHJ1ZSB1cG9uIHN1Y2Nlc3NcbiAgICAvLyBhbGVydHMgdGhlIHVzZXIgdXBvbiBmYWlsdXJlXG4gICAgY29uc3QgdmFsaWRhdGVGb3JtID0gKGZvcm0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJZZXQgdG8gaW1wbGVtZW50IHZhbGlkYXRpb24hXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLy8gY2FsbGVkIGJ5IGFkZCBidXR0b24gaW4gYWRkIHRvIGRvIGZvcm1cbiAgICAvLyBleHRyYWN0cyBkYXRhIGZyb20gdGhlIGZvcm0gYW5kIGFkZHMgaXQgdG8gdGhlIGFwcHJvcHJpYXRlIHByb2plY3RcbiAgICAvLyBhc3N1bWVzIGZvcm0gZGF0YSBpcyB2YWxpZGF0ZWRcbiAgICBjb25zdCBhZGRJdGVtVG9Qcm9qZWN0ID0gKHByb2plY3RJZCwgZm9ybSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgQWRkaW5nIHRvIHByb2plY3QgJHtwcm9qZWN0SWR9YCk7XG4gICAgXG4gICAgICAgIC8vIGV4dHJhY3QgZGF0YSBhbmQgYWRkIHRvIHRvRG9Nb2R1bGUgYW5kIERPTVxuICAgICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICAgICAgdGl0bGU6IGZvcm0ucXVlcnlTZWxlY3RvcihgaW5wdXRbaWQ9XCJ0aXRsZVwiXWApLnZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGZvcm0ucXVlcnlTZWxlY3RvcihgaW5wdXRbaWQ9XCJkZXNjXCJdYCkudmFsdWUsXG4gICAgICAgICAgICBkdWVEYXRlOiBmb3JtLnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3R5cGU9XCJkYXRlXCJdYCkudmFsdWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHByaW9yaXR5VmFsdWUgPSBudWxsO1xuICAgICAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9XCJyYWRpb1wiXWApO1xuICAgICAgICBwcmlvcml0eU9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZihvcHRpb24uZ2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIikgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlWYWx1ZSA9IG9wdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbS5wcmlvcml0eSA9IHByaW9yaXR5VmFsdWU7XG5cbiAgICAgICAgLy8gYWRkIGl0ZW0gdG8gaW50ZXJuYWwgdG9Eb01vZHVsZSBhbmQgZ2V0IHRoZSBpZFxuICAgICAgICBjb25zdCBpdGVtSWQgPSB0b0RvTW9kdWxlLmFkZFRvUHJvamVjdChwcm9qZWN0SWQsIGl0ZW0pO1xuXG4gICAgICAgIC8vIGFkZCBpdGVtIHRvIHRoZSBET01cbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuYWRkVG9Qcm9qZWN0KHByb2plY3RJZCwgaXRlbSwgaXRlbUlkKTtcblxuICAgIH07XG5cblxuXG4gICAgLy8gY29uc3QgYWRkSXRlbXNUb1Byb2plY3REdW1teSA9IChwcm9qZWN0aWQsIGl0ZW0pID0+IHtcbiAgICAvLyAgICAgY29uc3QgaXRlbUlkID0gdG9Eb01vZHVsZS5hZGRUb1Byb2plY3QocHJvamVjdGlkLCBpdGVtKTtcbiAgICAvLyAgICAgaWYocHJvamVjdGlkID09IGN1cnJlbnRQcm9qZWN0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIpKXtcbiAgICAvLyAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmFkZFRvUHJvamVjdChwcm9qZWN0aWQsIGl0ZW0sIGl0ZW1JZCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9O1xuXG4gICAgLy8gY29uc3QgYWRkVG9Eb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudCAuYWRkQnV0dG9uXCIpO1xuICAgIC8vIGFkZFRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAvLyAgICAgY29uc3QgcHJvamVjdElkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XG4gICAgLy8gICAgIGNvbnN0IGl0ZW0gPSB7IHRpdGxlOiAnV29yayBvbiB0byBkbycsIGRlc2NyaXB0aW9uOiAnbi9hJywgZHVlRGF0ZTogJ0Egd2VlayBMYXRlcicsIHByaW9yaXR5OiAnaGlnaCcgfTtcbiAgICAvLyAgICAgYWRkSXRlbXNUb1Byb2plY3REdW1teShwcm9qZWN0SWQsIGl0ZW0pO1xuICAgIC8vICAgICBjb25zdCBpdGVtMiA9IHt0aXRsZTogJ1dvcmsgb24gdGFibGUnLCBkZXNjcmlwdGlvbjogJ0ZpbmlzaCBhc3NlbWJsaW5nIHRoZSB0YWJsZScsIGR1ZURhdGU6ICdTb21ldGltZSBuZXh0IHdlZWsnLCBwcmlvcml0eTogJ21lZGl1bSd9O1xuICAgIC8vICAgICBhZGRJdGVtc1RvUHJvamVjdER1bW15KHByb2plY3RJZCwgaXRlbTIpO1xuICAgIC8vIH0pO1xuXG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==