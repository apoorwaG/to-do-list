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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    height: 100vh;\n    margin: 0;\n    display: grid;\n    grid-template-rows: min-content 1fr min-content;\n    grid-template-columns: max-content 1fr;\n    font-size: 12px;\n    font-family: sans-serif, serif;\n}\n\nbody > * {\n    border: 1px solid black;\n}\n\n.header, .footer {\n    grid-column: 1 / 3;\n}\n\n.hidden {\n    display: none;\n}\n\n.sidebar {\n    grid-column: 1;\n    padding-left: 2rem;\n    padding-right: 2rem;\n}\n\n.addButton {\n    margin-top: 3rem;\n}\n\n\n.content {\n    grid-column: 2;\n    padding-left: 2rem;\n}\n\n.content .addItemForm {\n    display: none;\n    width: 50%;\n    padding: 1rem;\n    background-color: white;\n    border: 2px solid black;\n}\n\n.content .addButton {\n    margin-top: 3rem;\n    padding: 1rem;\n    border: 1px solid gray;\n    width: 4rem;\n    background-color: darkolivegreen;\n    color: white;\n    font-weight: bold;\n}\n\n.content .addButton:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n}\n\n/* style each toDo item */\n.toDos > * {\n    display: flex;\n    column-gap: 20px;\n    align-items: center;\n}\n\n.toDos > div > .title {\n    flex: 1;\n    max-width: 600px;\n}\n\n.footer {\n    text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,SAAS;IACT,aAAa;IACb,+CAA+C;IAC/C,sCAAsC;IACtC,eAAe;IACf,8BAA8B;AAClC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;;AAGA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,gCAAgC;IAChC,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,sBAAsB;AAC1B;;AAEA,yBAAyB;AACzB;IACI,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,OAAO;IACP,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["body {\n    height: 100vh;\n    margin: 0;\n    display: grid;\n    grid-template-rows: min-content 1fr min-content;\n    grid-template-columns: max-content 1fr;\n    font-size: 12px;\n    font-family: sans-serif, serif;\n}\n\nbody > * {\n    border: 1px solid black;\n}\n\n.header, .footer {\n    grid-column: 1 / 3;\n}\n\n.hidden {\n    display: none;\n}\n\n.sidebar {\n    grid-column: 1;\n    padding-left: 2rem;\n    padding-right: 2rem;\n}\n\n.addButton {\n    margin-top: 3rem;\n}\n\n\n.content {\n    grid-column: 2;\n    padding-left: 2rem;\n}\n\n.content .addItemForm {\n    display: none;\n    width: 50%;\n    padding: 1rem;\n    background-color: white;\n    border: 2px solid black;\n}\n\n.content .addButton {\n    margin-top: 3rem;\n    padding: 1rem;\n    border: 1px solid gray;\n    width: 4rem;\n    background-color: darkolivegreen;\n    color: white;\n    font-weight: bold;\n}\n\n.content .addButton:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n}\n\n/* style each toDo item */\n.toDos > * {\n    display: flex;\n    column-gap: 20px;\n    align-items: center;\n}\n\n.toDos > div > .title {\n    flex: 1;\n    max-width: 600px;\n}\n\n.footer {\n    text-align: center;\n}"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayController": () => (/* binding */ displayController)
/* harmony export */ });
// DOM controller; adds stuff to and removes stuff from dom
const displayController = (() => {
    const projectsSection = document.querySelector('.projects');

    // function that toggles the hidden class for a given element
    const toggleDisplay = (element) => {
        element.classList.toggle("hidden");
    }

    const renderAddProjectForm = () => {
        const addProjectForm = document.querySelector("div.addProjectForm");

        const input = document.createElement("input");
        input.placeholder = "Project Name"
        input.required = true;
        addProjectForm.appendChild(input);

        const insertProjectButton = document.createElement("button");
        insertProjectButton.classList.add("addProject");
        insertProjectButton.textContent = "Add Project";

        const cancelButton = document.createElement("button");
        cancelButton.classList.add("cancelAdd");
        cancelButton.textContent = "Cancel";

        addProjectForm.appendChild(insertProjectButton);
        addProjectForm.appendChild(cancelButton);

        return addProjectForm;
    }

    // function to remove add project form child nodes
    const removeAddProjectForm = () => {
        const addProjectForm = document.querySelector(".addProjectForm");
        while(addProjectForm.firstChild) {
            addProjectForm.removeChild(addProjectForm.firstChild);
        }
    };

    // add new project to display and return the node
    const addProject = (projectName, projectId) => {
        const project = document.createElement("div");
        project.textContent = projectName;
        project.setAttribute("data-projectid", `${projectId}`);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteProjectButton");
        deleteButton.textContent = "X"
        deleteButton.setAttribute("data-projectid", `${projectId}`);

        project.appendChild(deleteButton);

        projectsSection.appendChild(project);
        return project;
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

    const deleteAllItems = () => {
        const toDoSection = document.querySelector('.toDos');
        while(toDoSection.firstChild) {
            toDoSection.removeChild(toDoSection.firstChild);
        }
    };

    // remove project as well as the to do list items
    // also remove the add item button
    const removeProject = (projectNode) => {
        deleteAllItems();

        const parent = projectNode.parentNode;
        parent.removeChild(projectNode);

        const addItemButton = document.querySelector(".content .addButton");
        console.log(addItemButton);
        const buttonParent = addItemButton.parentNode;
        buttonParent.removeChild(addItemButton);

    };

    const clearContentSection = () => {
        const contentSection = document.querySelector(".content");
        deleteAllItems();
        const addItemButton = document.querySelector(".content .addButton");
        if(addItemButton !== null){
            contentSection.removeChild(addItemButton);
        }
        const addToDoForm = document.querySelector(".content .addItemForm");
        if(addToDoForm !== null) {
            contentSection.removeChild(addToDoForm);
        }
    }

    // edit toDo item in a project
    // new data is in the item object
    const editToDo = (projectId, todoId, item) => {
        const toDoNode = document.querySelector(`[data-todoid="${todoId}"][data-projectid="${projectId}"]`);
        // toDoNode.textContent = JSON.stringify(item);
        toDoNode.querySelector(".title").textContent = item.title;
        toDoNode.querySelector(".dueDate").textContent = item.dueDate;
    };

    // adding toDos to a project
    // each toDo element has a toDo Id, project Id, and a delete and edit button with those ids
    // return the element after creation
    const addToProject = (projectId, item, itemId) => {
        const toDoSection = document.querySelector('.toDos');
        const toDo = document.createElement("div");
        toDo.setAttribute("data-todoid", `${itemId}`);
        toDo.setAttribute("data-projectid", `${projectId}`);
        // toDo.textContent = JSON.stringify(item);
        createToDoNode(item).forEach((node) => {toDo.appendChild(node)});
        // toDo.appendChild(createToDoNode(item));
        addItemActionButtons(toDo, projectId, itemId, item.status);
        toDoSection.appendChild(toDo);
        return toDo;
    };

    // ceate a horizontal toDoList item and return it
    const createToDoNode = (item) => {
        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = item.title;

        const dueDate = document.createElement("div");
        dueDate.classList.add("dueDate");
        dueDate.textContent = item.dueDate;

        return [title, dueDate];

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
                status: toDo.getStatus(),
            }   
            projectNodes.push(addToProject(projectId, item, toDo.getId()));
        });
        return projectNodes;
    };

    // function to add edit and delete buttons to the DOM toDo element
    const addItemActionButtons = (toDo, projectId, itemId, status) => {
        toDo.appendChild(createStatusToggle(status, projectId, itemId));
        toDo.appendChild(createActionItemButton(projectId, itemId, "Delete"));
        toDo.appendChild(createActionItemButton(projectId, itemId, "Edit"));
    };

    // function to create a checkbox with the given attributes, and return it
    const createStatusToggle = (status, projectId, itemId) => {
        const checkBox = document.createElement("input");
        checkBox.type = "checkBox";
        checkBox.classList.add("checkBox");
        checkBox.checked = status;
        checkBox.setAttribute("data-projectid", `${projectId}`);
        checkBox.setAttribute("data-todoid", `${itemId}`);
        // checkBox.textContent = "CBox";
        return checkBox;
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

    // function that removes the add to do item form from the DOM
    const removeAddItemForm = () => {
        const toDoForm = document.querySelector(".content .addItemForm");
        const parent = toDoForm.parentElement;
        parent.removeChild(toDoForm);
    }

    return {toggleDisplay, renderAddProjectForm, removeAddProjectForm, addProject, removeProject, clearContentSection, displayAddItemButton, renderAddItemForm, removeAddItemForm, viewProject, addToProject, editToDo, removeFromProject };

})();



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory)
/* harmony export */ });
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");


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
        if(!Boolean(toDos[itemIndex])) {
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

    const getItem = (itemId) => {
        if (!Boolean(toDos[itemId])) {
            throw new Error("Cannot find item in this project!");
        }
        return toDos[itemId];
    }

    const getToDos = () => toDos;

    const getNumToDos = () => toDos.length;

    const editToDo = (itemId, item) => {
        if(!Boolean(toDos[itemId])) {
            throw new Error("Cannot find item in this project!");
        }
        toDos[itemId].setTitle(item.title);
        toDos[itemId].setDescription(item.description);
        toDos[itemId].setPriority(item.priority);
        toDos[itemId].setDueDate(item.dueDate);

        console.log(toDos[itemId].summarize());
    };

    const toggleItemStatus = (itemId) => {
        if(!Boolean(toDos[itemId])) {
            throw new Error("Cannot find item in this project!");
        }
        
        if(toDos[itemId].getStatus() === true){
            toDos[itemId].setStatus(false);
        } else {
            toDos[itemId].setStatus(true);
        }
    };

    return { getName, add, remove, getItem, getToDos, getNumToDos, editToDo, toggleItemStatus, visualize };
};



/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoFactory": () => (/* binding */ toDoFactory)
/* harmony export */ });
// toDo item factory
const toDoFactory = (_id = null, _title, _description, _dueDate, _priority, _status = false) => {
    let id = _id;
    let title = _title;
    let description = _description;
    let dueDate = _dueDate;
    let priority = _priority;
    let status = _status;

    const getId = () => id;

    const getTitle = () => title;
    const setTitle = (newTitle) => {title = newTitle};

    const getDescription = () => description;
    const setDescription = (newDesc) => {description = newDesc};

    const getDueDate = () => dueDate;
    const setDueDate = (newDueDate) => {dueDate = newDueDate};

    const getPriority = () => priority;
    const setPriority = (newPriority) => {priority = newPriority};

    const getStatus = () => status;
    const setStatus = (newStatus) => {status = newStatus};

    const summarize = () => {
        const summary = `Id: ${id}\nTitle: ${title}\nDescription: ${description}\nDue Date: ${dueDate}\nPriority: ${priority}\nStatus: ${status}`;
        return summary;
    }

    return { getId, getTitle, getDescription, getDueDate, getPriority, getStatus, 
        setTitle, setDescription, setDueDate, setPriority, setStatus, summarize };
};



/***/ }),

/***/ "./src/toDoModule.js":
/*!***************************!*\
  !*** ./src/toDoModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoModule": () => (/* binding */ toDoModule)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");



// module stores data so it can be used in DOM
const toDoModule = (() => {
    const projects = [];
    let numProjects = 0;

    const getNumProjects = () => numProjects;

    // create a new project and add to projects list
    // returns the project's id in the internal list
    const addProject = (projectName) => {
        projects.push((0,_project__WEBPACK_IMPORTED_MODULE_0__.projectFactory)(projectName));
        numProjects += 1;
        return projects.length - 1;
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

    // given porjectId and itemId, return that toDo item from that project
    const getItemInProject = (projectId, itemId) => {
        if (!Boolean(projects[projectId])) {
            throw new Error("Project doesn't exist internally!");
        }
        return projects[projectId].getItem(itemId);
    };

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
        const toDo = (0,_toDo__WEBPACK_IMPORTED_MODULE_1__.toDoFactory)(id, title, description, dueDate, priority);
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

    const editToDoInProject = (projectId, todoId, item) => {
        if(!Boolean(projects[projectId])) {
            throw new Error("Project doesn't exist internally!")
        }
        projects[projectId].editToDo(todoId, item);
    };

    const toggleItemStatus = (projectId, todoId) => {
        if(!Boolean(projects[projectId])) {
            throw new Error("Project doesn't exist internally!")
        }
        projects[projectId].toggleItemStatus(todoId);
    };

    return { getNumProjects, addProject, removeProject, viewProject, getNumToDos, addToProject, removeFromProject, getItemInProject, editToDoInProject, toggleItemStatus };

})();

 

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
/* harmony import */ var _toDoModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoModule */ "./src/toDoModule.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");





// logic/reactivity controller; calls the functions on the displayController as well as the internal toDoList module
// creates all event listeners here
const logicController = (() => {

    // function that gets triggered by the add project button
    // renders the field for adding projects
    const renderAddProjectForm = (event) => {
        // first toggle the addProjectButton so it is hidden
        _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.toggleDisplay(event.target);

        // render the form on the DOM
        const form = _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.renderAddProjectForm();

        // add event listeners to form buttons
        // addProject button
        form.querySelector("button.addProject").addEventListener('click', () => {
            // validate form first
            if(validateAddProjectForm(form)) {
                const project = addProject(form);
                _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.toggleDisplay(event.target);
                // open this project
                openProject({target: project});
                // remove add project form upon addition of project and event listener 
                removeAddProjectForm();
            }
        });

        // cancel button
        form.querySelector("button.cancelAdd").addEventListener('click', () => {
            removeAddProjectForm();
            _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.toggleDisplay(event.target);
        });

    };

    const addProjectButton = document.querySelector(".sidebar .addButton");
    addProjectButton.addEventListener('click', renderAddProjectForm);

    // function that gets triggered by the add project button in the add project form
    // assumes form data is validated
    const addProject = (form) => {
        const projectName = form.querySelector("input").value;
        // add the project and get its internal id
        const projectId = _toDoModule__WEBPACK_IMPORTED_MODULE_1__.toDoModule.addProject(projectName);
        // add project on DOM and get the node
        const project = _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.addProject(projectName, projectId);
        // add listener to project
        project.addEventListener('click', openProject);
        // add listener to delete button in project
        project.querySelector(".deleteProjectButton").addEventListener('click', (event) => {
            _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.removeProject(project);
            _toDoModule__WEBPACK_IMPORTED_MODULE_1__.toDoModule.removeProject(projectId);
            event.stopPropagation();
        });
        return project;
    };

    // function that gets triggered by the add project button
    // returns true or false upon validation
    const validateAddProjectForm = (form) => {
        console.log("Yet to implement add project form validation");
        return true;
    };

    // function that gets triggered by the cancel button in add project form
    const removeAddProjectForm = () => {
        _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.removeAddProjectForm();
    };


    // function to run once a project has been clicked
    // clear content section
    // display the add items button for this project
    const openProject = (event) => {
        _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.clearContentSection();
        const projectNode = event.target;
        const projectId = projectNode.getAttribute("data-projectid");
        // display internal project to do items
        const project = _toDoModule__WEBPACK_IMPORTED_MODULE_1__.toDoModule.viewProject(projectId);
        // display the project to Do items in the DOM
        const toDoNodes = _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.viewProject(project, projectId);
        // call function to add event listeners to each toDo node buttons
        toDoNodes.forEach(addActionListeners);
        // show the add item button as well
        showAddToDoButton(projectId);
    };

    // reneder the add item button in the DOM
    // add event listener to the button
    const showAddToDoButton = (projectId) => {
        const button = _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.displayAddItemButton(projectId);
        button.addEventListener('click', () => {
            console.log(projectId);
            renderAddItemForm(projectId);
        });
    };

    // render the add item form in the DOM
    // add event listeners to in-form buttoms
    const renderAddItemForm = (projectId) => {
        // toggle the addItem button so it is hidden
        const addItemButton = document.querySelector(".content .addButton");
        _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.toggleDisplay(addItemButton);

        const form = _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.renderAddItemForm(projectId);
        const submitButton = form.querySelector("button[type=submit]");
        submitButton.addEventListener("click", () => {
            if(validateForm(form)){
                addItemToProject(projectId, form);
                removeAddItemForm();
                // toggle the addItem button once done
                _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.toggleDisplay(addItemButton);
            }
        });

        const cancelButton = form.querySelector("button[type=reset]");
        cancelButton.addEventListener("click", () => {
            removeAddItemForm()
            // toggle the addItem button once done
            _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.toggleDisplay(addItemButton);
        });
    };

    // function to remove the add toDo form from the DOM
    const removeAddItemForm = () => {
        _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.removeAddItemForm();
    }

    // function to validate form entries
    // returns true upon success
    // alerts the user upon failure
    const validateForm = (form) => {
        console.log("Yet to implement validation!");
        return true;
    };

    // extract data from the form, package into an item object, and return it
    const getFormData = (form) => {
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

        return item;
    };

    // called by add button in add to do form
    // extracts data from the form and adds it to the appropriate project internally,
    // and renders it on the DOM
    // assumes form data is validated
    const addItemToProject = (projectId, form) => {
        console.log(`Adding to project ${projectId}`);
    
        // extract data and add to toDoModule and DOM
        const item = getFormData(form);

        // add item to internal toDoModule and get the id
        const itemId = _toDoModule__WEBPACK_IMPORTED_MODULE_1__.toDoModule.addToProject(projectId, item);

        // add item to the DOM
        const toDo = _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.addToProject(projectId, item, itemId);

        // add listeners to each button in toDo element
        addActionListeners(toDo);
    };

    // function to event listeners to edit/delete buttons as well as the checkbox
    const addActionListeners = (toDo) => {
        const deleteButton = toDo.querySelector("button.delete");
        deleteButton.addEventListener('click', deleteItem);
        
        const editButton = toDo.querySelector("button.edit");
        editButton.addEventListener('click', (event) => {
            // before rendering the edit item form, toggle the add item button display
            // toggle the add item button
            const addItemButton = document.querySelector(".content .addButton");
            _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.toggleDisplay(addItemButton);
            renderEditItemForm(event);
        });

        const checkBox = toDo.querySelector(`input[type="checkBox"]`);
        checkBox.addEventListener('click', toggleItemStatus);
    };

    // function that gets triggered by the checkBox input
    const toggleItemStatus = (event) => {
        const projectId = event.target.getAttribute("data-projectid");
        const itemId = event.target.getAttribute("data-todoid");
        _toDoModule__WEBPACK_IMPORTED_MODULE_1__.toDoModule.toggleItemStatus(projectId, itemId);
    };

    // function that gets triggered by the delete item button
    const deleteItem = (event) => {
        const projectId = event.target.getAttribute("data-projectid");
        const todoId = event.target.getAttribute("data-todoid");

        _toDoModule__WEBPACK_IMPORTED_MODULE_1__.toDoModule.removeFromProject(projectId, todoId);
        _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.removeFromProject(projectId, todoId);
    };

    // function that gets triggered by the edit item button
    const renderEditItemForm = (event) => {
        const projectId = event.target.getAttribute("data-projectid");
        const todoId = event.target.getAttribute("data-todoid");

        // first get the data from the internal module
        const toDoItem = _toDoModule__WEBPACK_IMPORTED_MODULE_1__.toDoModule.getItemInProject(projectId, todoId);

        // pre-fill the entry areas with stored data
        const form = _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.renderAddItemForm(projectId);
        form.querySelector(`input[id="title"]`).value = toDoItem.getTitle();
        form.querySelector(`input#desc`).value = toDoItem.getDescription();
        form.querySelector(`input#date`).value = toDoItem.getDueDate();
        form.querySelector(`input#${toDoItem.getPriority()}`).checked = true;
        
        // add listener to add/edit button
        const editItemButton = document.querySelector("button[type='submit']");
        editItemButton.textContent = "Submit";
        editItemButton.addEventListener('click', () => {
            if(validateForm(form)){
                editItem(todoId, projectId, form);
                removeAddItemForm();
                // toggle the addItem button once done
                _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.toggleDisplay(document.querySelector(".content .addButton"));
            }
        });

        // add listener to cancel button
        const cancelButton = form.querySelector("button[type=reset]");
        cancelButton.addEventListener("click", () => {
            removeAddItemForm();
            // toggle the addItem button once done
            _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.toggleDisplay(document.querySelector(".content .addButton"));
        });
    };

    // function that gets triggered by the submit button in the edit form
    // extracts data from the form and edits the appropriate project's toDo item internally,
    // and renders/edits it on the DOM
    // assumes form data is validated
    const editItem = (todoId, projectId, form) => {
        // extract form data
        const item = getFormData(form);
        console.log(item);
        
        // edit item data in internal module
        _toDoModule__WEBPACK_IMPORTED_MODULE_1__.toDoModule.editToDoInProject(projectId, todoId, item);

        // edit item data in DOM
        _displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.editToDo(projectId, todoId, item);
    };


})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0VBQStCO0FBQy9DO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwrRUFBK0I7QUFDM0MsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBNEI7O0FBRXBDO0FBQ0EsUUFBUSwwRUFBMEI7QUFDbEM7OztBQUdBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b0RvTW9kdWxlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnI7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsIHNlcmlmO1xcbn1cXG5cXG5ib2R5ID4gKiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaGVhZGVyLCAuZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG4uYWRkQnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG59XFxuXFxuXFxuLmNvbnRlbnQge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG5cXG4uY29udGVudCAuYWRkSXRlbUZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jb250ZW50IC5hZGRCdXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29saXZlZ3JlZW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250ZW50IC5hZGRCdXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi8qIHN0eWxlIGVhY2ggdG9EbyBpdGVtICovXFxuLnRvRG9zID4gKiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b0RvcyA+IGRpdiA+IC50aXRsZSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLHNDQUFzQztJQUN0QyxlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnIgbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgMWZyO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmLCBzZXJpZjtcXG59XFxuXFxuYm9keSA+ICoge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmhlYWRlciwgLmZvb3RlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXG59XFxuXFxuLmFkZEJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxufVxcblxcblxcbi5jb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG59XFxuXFxuLmNvbnRlbnQgLmFkZEl0ZW1Gb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY29udGVudCAuYWRkQnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtvbGl2ZWdyZWVuO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGVudCAuYWRkQnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG4vKiBzdHlsZSBlYWNoIHRvRG8gaXRlbSAqL1xcbi50b0RvcyA+ICoge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9Eb3MgPiBkaXYgPiAudGl0bGUge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIERPTSBjb250cm9sbGVyOyBhZGRzIHN0dWZmIHRvIGFuZCByZW1vdmVzIHN0dWZmIGZyb20gZG9tXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5cbiAgICAvLyBmdW5jdGlvbiB0aGF0IHRvZ2dsZXMgdGhlIGhpZGRlbiBjbGFzcyBmb3IgYSBnaXZlbiBlbGVtZW50XG4gICAgY29uc3QgdG9nZ2xlRGlzcGxheSA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJBZGRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmFkZFByb2plY3RGb3JtXCIpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCBOYW1lXCJcbiAgICAgICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICAgICAgY29uc3QgaW5zZXJ0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGluc2VydFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFByb2plY3RcIik7XG4gICAgICAgIGluc2VydFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG5cbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWxBZGRcIik7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgICAgICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoaW5zZXJ0UHJvamVjdEJ1dHRvbik7XG4gICAgICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICAgICAgcmV0dXJuIGFkZFByb2plY3RGb3JtO1xuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIHRvIHJlbW92ZSBhZGQgcHJvamVjdCBmb3JtIGNoaWxkIG5vZGVzXG4gICAgY29uc3QgcmVtb3ZlQWRkUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0Rm9ybVwiKTtcbiAgICAgICAgd2hpbGUoYWRkUHJvamVjdEZvcm0uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgYWRkUHJvamVjdEZvcm0ucmVtb3ZlQ2hpbGQoYWRkUHJvamVjdEZvcm0uZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYWRkIG5ldyBwcm9qZWN0IHRvIGRpc3BsYXkgYW5kIHJldHVybiB0aGUgbm9kZVxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdE5hbWUsIHByb2plY3RJZCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIsIGAke3Byb2plY3RJZH1gKTtcblxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVByb2plY3RCdXR0b25cIik7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RpZFwiLCBgJHtwcm9qZWN0SWR9YCk7XG5cbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgICAgIHByb2plY3RzU2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfTtcblxuICAgIC8vIHJlbW92ZXMgdG8gZG8gaXRlbSBmcm9tIERPTVxuICAgIGNvbnN0IHJlbW92ZUZyb21Qcm9qZWN0ID0gKHByb2plY3RJZCwgdG9kb0lkKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS1wcm9qZWN0aWQ9XCIke3Byb2plY3RJZH1cIl1bZGF0YS10b2RvaWQ9XCIke3RvZG9JZH1cIl1gKTtcbiAgICAgICAgaWYoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbGVtZW50IG5vdCBmb3VuZCBpbiBET01cIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZUFsbEl0ZW1zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0RvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvcycpO1xuICAgICAgICB3aGlsZSh0b0RvU2VjdGlvbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0b0RvU2VjdGlvbi5yZW1vdmVDaGlsZCh0b0RvU2VjdGlvbi5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgcHJvamVjdCBhcyB3ZWxsIGFzIHRoZSB0byBkbyBsaXN0IGl0ZW1zXG4gICAgLy8gYWxzbyByZW1vdmUgdGhlIGFkZCBpdGVtIGJ1dHRvblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdE5vZGUpID0+IHtcbiAgICAgICAgZGVsZXRlQWxsSXRlbXMoKTtcblxuICAgICAgICBjb25zdCBwYXJlbnQgPSBwcm9qZWN0Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocHJvamVjdE5vZGUpO1xuXG4gICAgICAgIGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQgLmFkZEJ1dHRvblwiKTtcbiAgICAgICAgY29uc29sZS5sb2coYWRkSXRlbUJ1dHRvbik7XG4gICAgICAgIGNvbnN0IGJ1dHRvblBhcmVudCA9IGFkZEl0ZW1CdXR0b24ucGFyZW50Tm9kZTtcbiAgICAgICAgYnV0dG9uUGFyZW50LnJlbW92ZUNoaWxkKGFkZEl0ZW1CdXR0b24pO1xuXG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyQ29udGVudFNlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgICAgICBkZWxldGVBbGxJdGVtcygpO1xuICAgICAgICBjb25zdCBhZGRJdGVtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50IC5hZGRCdXR0b25cIik7XG4gICAgICAgIGlmKGFkZEl0ZW1CdXR0b24gIT09IG51bGwpe1xuICAgICAgICAgICAgY29udGVudFNlY3Rpb24ucmVtb3ZlQ2hpbGQoYWRkSXRlbUJ1dHRvbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWRkVG9Eb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQgLmFkZEl0ZW1Gb3JtXCIpO1xuICAgICAgICBpZihhZGRUb0RvRm9ybSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGVudFNlY3Rpb24ucmVtb3ZlQ2hpbGQoYWRkVG9Eb0Zvcm0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZWRpdCB0b0RvIGl0ZW0gaW4gYSBwcm9qZWN0XG4gICAgLy8gbmV3IGRhdGEgaXMgaW4gdGhlIGl0ZW0gb2JqZWN0XG4gICAgY29uc3QgZWRpdFRvRG8gPSAocHJvamVjdElkLCB0b2RvSWQsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgdG9Eb05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10b2RvaWQ9XCIke3RvZG9JZH1cIl1bZGF0YS1wcm9qZWN0aWQ9XCIke3Byb2plY3RJZH1cIl1gKTtcbiAgICAgICAgLy8gdG9Eb05vZGUudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShpdGVtKTtcbiAgICAgICAgdG9Eb05vZGUucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG4gICAgICAgIHRvRG9Ob2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZHVlRGF0ZVwiKS50ZXh0Q29udGVudCA9IGl0ZW0uZHVlRGF0ZTtcbiAgICB9O1xuXG4gICAgLy8gYWRkaW5nIHRvRG9zIHRvIGEgcHJvamVjdFxuICAgIC8vIGVhY2ggdG9EbyBlbGVtZW50IGhhcyBhIHRvRG8gSWQsIHByb2plY3QgSWQsIGFuZCBhIGRlbGV0ZSBhbmQgZWRpdCBidXR0b24gd2l0aCB0aG9zZSBpZHNcbiAgICAvLyByZXR1cm4gdGhlIGVsZW1lbnQgYWZ0ZXIgY3JlYXRpb25cbiAgICBjb25zdCBhZGRUb1Byb2plY3QgPSAocHJvamVjdElkLCBpdGVtLCBpdGVtSWQpID0+IHtcbiAgICAgICAgY29uc3QgdG9Eb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb3MnKTtcbiAgICAgICAgY29uc3QgdG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvRG8uc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvaWRcIiwgYCR7aXRlbUlkfWApO1xuICAgICAgICB0b0RvLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIsIGAke3Byb2plY3RJZH1gKTtcbiAgICAgICAgLy8gdG9Eby50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pO1xuICAgICAgICBjcmVhdGVUb0RvTm9kZShpdGVtKS5mb3JFYWNoKChub2RlKSA9PiB7dG9Eby5hcHBlbmRDaGlsZChub2RlKX0pO1xuICAgICAgICAvLyB0b0RvLmFwcGVuZENoaWxkKGNyZWF0ZVRvRG9Ob2RlKGl0ZW0pKTtcbiAgICAgICAgYWRkSXRlbUFjdGlvbkJ1dHRvbnModG9EbywgcHJvamVjdElkLCBpdGVtSWQsIGl0ZW0uc3RhdHVzKTtcbiAgICAgICAgdG9Eb1NlY3Rpb24uYXBwZW5kQ2hpbGQodG9Ebyk7XG4gICAgICAgIHJldHVybiB0b0RvO1xuICAgIH07XG5cbiAgICAvLyBjZWF0ZSBhIGhvcml6b250YWwgdG9Eb0xpc3QgaXRlbSBhbmQgcmV0dXJuIGl0XG4gICAgY29uc3QgY3JlYXRlVG9Eb05vZGUgPSAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWVEYXRlXCIpO1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gaXRlbS5kdWVEYXRlO1xuXG4gICAgICAgIHJldHVybiBbdGl0bGUsIGR1ZURhdGVdO1xuXG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvIGRpc3BsYXkgcHJvamVjdCBpdGVtcyBpbiB0aGUgRE9NXG4gICAgLy8gcHJvamVjdDogaW50ZXJuYWwgcHJvamVjdCBvYmplY3RcbiAgICAvLyBwcm9qZWN0SWQ6IGlkIG9mIHRoZSBwcm9qZWN0IGluIHRoZSBET01cbiAgICAvLyBnZXRzIHRvRG9zIGZyb20gdGhlIGludGVybmFsIHByb2plY3RzIG1vZHVsZSwgYWRkcyBpdCB0byB0aGUgRE9NLCBhbmQgYWRkcyBidXR0b24gdG8gZWFjaCB0byBkb1xuICAgIC8vIGFsc28gcmV0dXJucyBhbiBhcnJheSBvZiB0b0RvIGl0ZW0gRE9NIG5vZGVzXG4gICAgY29uc3Qgdmlld1Byb2plY3QgPSAocHJvamVjdCwgcHJvamVjdElkKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROb2RlcyA9IFtdXG4gICAgICAgIGNvbnN0IHRvRG9zID0gcHJvamVjdC5nZXRUb0RvcygpO1xuICAgICAgICB0b0Rvcy5mb3JFYWNoKCh0b0RvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0b0RvLmdldFRpdGxlKCksXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRvRG8uZ2V0RGVzY3JpcHRpb24oKSxcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiB0b0RvLmdldER1ZURhdGUoKSxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogdG9Eby5nZXRQcmlvcml0eSgpLFxuICAgICAgICAgICAgICAgIHN0YXR1czogdG9Eby5nZXRTdGF0dXMoKSxcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIHByb2plY3ROb2Rlcy5wdXNoKGFkZFRvUHJvamVjdChwcm9qZWN0SWQsIGl0ZW0sIHRvRG8uZ2V0SWQoKSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb2plY3ROb2RlcztcbiAgICB9O1xuXG4gICAgLy8gZnVuY3Rpb24gdG8gYWRkIGVkaXQgYW5kIGRlbGV0ZSBidXR0b25zIHRvIHRoZSBET00gdG9EbyBlbGVtZW50XG4gICAgY29uc3QgYWRkSXRlbUFjdGlvbkJ1dHRvbnMgPSAodG9EbywgcHJvamVjdElkLCBpdGVtSWQsIHN0YXR1cykgPT4ge1xuICAgICAgICB0b0RvLmFwcGVuZENoaWxkKGNyZWF0ZVN0YXR1c1RvZ2dsZShzdGF0dXMsIHByb2plY3RJZCwgaXRlbUlkKSk7XG4gICAgICAgIHRvRG8uYXBwZW5kQ2hpbGQoY3JlYXRlQWN0aW9uSXRlbUJ1dHRvbihwcm9qZWN0SWQsIGl0ZW1JZCwgXCJEZWxldGVcIikpO1xuICAgICAgICB0b0RvLmFwcGVuZENoaWxkKGNyZWF0ZUFjdGlvbkl0ZW1CdXR0b24ocHJvamVjdElkLCBpdGVtSWQsIFwiRWRpdFwiKSk7XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIGNoZWNrYm94IHdpdGggdGhlIGdpdmVuIGF0dHJpYnV0ZXMsIGFuZCByZXR1cm4gaXRcbiAgICBjb25zdCBjcmVhdGVTdGF0dXNUb2dnbGUgPSAoc3RhdHVzLCBwcm9qZWN0SWQsIGl0ZW1JZCkgPT4ge1xuICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY2hlY2tCb3gudHlwZSA9IFwiY2hlY2tCb3hcIjtcbiAgICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImNoZWNrQm94XCIpO1xuICAgICAgICBjaGVja0JveC5jaGVja2VkID0gc3RhdHVzO1xuICAgICAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RpZFwiLCBgJHtwcm9qZWN0SWR9YCk7XG4gICAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZShcImRhdGEtdG9kb2lkXCIsIGAke2l0ZW1JZH1gKTtcbiAgICAgICAgLy8gY2hlY2tCb3gudGV4dENvbnRlbnQgPSBcIkNCb3hcIjtcbiAgICAgICAgcmV0dXJuIGNoZWNrQm94O1xuICAgIH07XG5cbiAgICAvLyBjcmVhdGUgYSBidXR0b24gd2l0aCB0aGUgZ2l2ZW4gYXR0cmlidXRlcyBhbmQgcmV0dXJuIHRoZSBlbGVtZW50XG4gICAgY29uc3QgY3JlYXRlQWN0aW9uSXRlbUJ1dHRvbiA9IChwcm9qZWN0SWQsIGl0ZW1JZCwgdGV4dEMpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIsIGAke3Byb2plY3RJZH1gKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kb2lkXCIsIGAke2l0ZW1JZH1gKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dEM7XG4gICAgICAgIGlmKHRleHRDID09PSBcIkRlbGV0ZVwiKXtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfTtcbiAgICBcblxuICAgIC8vIGZ1bmN0aW9uIHRvIGRpc3BsYXkgdGhlIGFkZCB0byBkbyBidXR0b25cbiAgICAvLyByZXR1cm5zIHRoZSBidXR0b24gbm9kZSBvbmNlIGNyZWF0ZWQvZGlzcGxheWVkXG4gICAgY29uc3QgZGlzcGxheUFkZEl0ZW1CdXR0b24gPSAocHJvamVjdElkKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RJZCk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkQnV0dG9uXCIpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBJdGVtXCI7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RpZFwiLCBgJHtwcm9qZWN0SWR9YCk7XG4gICAgICAgIGNvbnRlbnRTZWN0aW9uLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvIGRpc3BsYXkgYWRkIGZvcm0gaW4gdGhlIERPTVxuICAgIC8vIHJldHVybnMgdGhlIGZvcm0gbm9kZSBvbmNlIGRpc3BsYXllZFxuICAgIGNvbnN0IHJlbmRlckFkZEl0ZW1Gb3JtID0gKHByb2plY3RJZCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGl0ZW1Gb3JtLmNsYXNzTGlzdC5hZGQoXCJhZGRJdGVtRm9ybVwiKTtcblxuICAgICAgICBjb25zdCBmaWVsZHMgPSBbe2ZvcjogXCJ0aXRsZVwiLCB0eXBlOiBcInRleHRcIiwgdGV4dEM6IFwiVGl0bGU6IFwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3I6IFwiZGVzY1wiLCB0eXBlOiBcInRleHRhcmVhXCIsIHRleHRDOiBcIkRlc2NyaXB0aW9uOiBcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9yOiBcImRhdGVcIiwgdHlwZTogXCJkYXRlXCIsIHRleHRDOiBcIkRhdGU6IFwifV07XG4gICAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgZmllbGQuZm9yKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gZmllbGQudGV4dEM7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSBmaWVsZC50eXBlO1xuICAgICAgICAgICAgaW5wdXQuaWQgPSBmaWVsZC5mb3I7XG4gICAgICAgICAgICBpbnB1dC5uYW1lID0gZmllbGQuZm9yO1xuICAgICAgICAgICAgaWYoZmllbGQuZm9yID09PSBcInRpdGxlXCIgfHwgZmllbGQuZm9yID09PSBcImRhdGVcIil7XG4gICAgICAgICAgICAgICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgICAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcmFkaW9MYWJlbC5jbGFzc0xpc3QuYWRkKFwicmFkaW9MYWJlbFwiKTtcbiAgICAgICAgcmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbCk7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFt7aWQ6IFwibG93XCIsIHRleHRDOiBcIkxvd1wifSwge2lkOiBcIm1lZGl1bVwiLCB0ZXh0QzogXCJNZWRpdW1cIn0sIHtpZDogXCJoaWdoXCIsIHRleHRDOiBcIkhpZ2hcIn1dO1xuICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICAgICAgaW5wdXQubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgICAgICAgICAgIGlucHV0LmlkID0gb3B0aW9uLmlkO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBvcHRpb24uaWQ7XG4gICAgICAgICAgICBpZihvcHRpb24uaWQgPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBvcHRpb24uaWQpO1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBvcHRpb24udGV4dEM7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZChyb3cpO1xuXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIsIGAke3Byb2plY3RJZH1gKTtcbiAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwicmVzZXRcIjtcbiAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgICAgICBpdGVtRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgICAgICBjb250ZW50U2VjdGlvbi5hcHBlbmRDaGlsZChpdGVtRm9ybSk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1Gb3JtO1xuICAgIH07XG5cbiAgICAvLyBmdW5jdGlvbiB0aGF0IHJlbW92ZXMgdGhlIGFkZCB0byBkbyBpdGVtIGZvcm0gZnJvbSB0aGUgRE9NXG4gICAgY29uc3QgcmVtb3ZlQWRkSXRlbUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvRG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50IC5hZGRJdGVtRm9ybVwiKTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdG9Eb0Zvcm0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHRvRG9Gb3JtKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3RvZ2dsZURpc3BsYXksIHJlbmRlckFkZFByb2plY3RGb3JtLCByZW1vdmVBZGRQcm9qZWN0Rm9ybSwgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgY2xlYXJDb250ZW50U2VjdGlvbiwgZGlzcGxheUFkZEl0ZW1CdXR0b24sIHJlbmRlckFkZEl0ZW1Gb3JtLCByZW1vdmVBZGRJdGVtRm9ybSwgdmlld1Byb2plY3QsIGFkZFRvUHJvamVjdCwgZWRpdFRvRG8sIHJlbW92ZUZyb21Qcm9qZWN0IH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7XG4gICAgZGlzcGxheUNvbnRyb2xsZXJcbn0iLCJpbXBvcnQgeyB0b0RvRmFjdG9yeSB9IGZyb20gXCIuL3RvRG9cIjtcblxuLy8gcHJvamVjdCBmYWN0b3J5XG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgdG9Eb3MgPSBbXTtcbiAgICBsZXQgbnVtVG9Eb3MgPSAwO1xuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgICBjb25zdCBhZGQgPSAodG9EbykgPT4ge1xuICAgICAgICB0b0Rvcy5wdXNoKHRvRG8pO1xuICAgICAgICBudW1Ub0RvcysrO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmUgPSAoaXRlbUluZGV4KSA9PiB7XG4gICAgICAgIGlmKCFCb29sZWFuKHRvRG9zW2l0ZW1JbmRleF0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBpdGVtIGluIHRoaXMgcHJvamVjdCFcIik7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHRvRG9zW2l0ZW1JbmRleF07XG4gICAgICAgIG51bVRvRG9zLS07XG4gICAgfTtcblxuICAgIGNvbnN0IHZpc3VhbGl6ZSA9ICgpID0+IHtcbiAgICAgICAgdG9Eb3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5zdW1tYXJpemUoKSk7XG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIGNvbnN0IGdldEl0ZW0gPSAoaXRlbUlkKSA9PiB7XG4gICAgICAgIGlmICghQm9vbGVhbih0b0Rvc1tpdGVtSWRdKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgaXRlbSBpbiB0aGlzIHByb2plY3QhXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b0Rvc1tpdGVtSWRdO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRvRG9zID0gKCkgPT4gdG9Eb3M7XG5cbiAgICBjb25zdCBnZXROdW1Ub0RvcyA9ICgpID0+IHRvRG9zLmxlbmd0aDtcblxuICAgIGNvbnN0IGVkaXRUb0RvID0gKGl0ZW1JZCwgaXRlbSkgPT4ge1xuICAgICAgICBpZighQm9vbGVhbih0b0Rvc1tpdGVtSWRdKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgaXRlbSBpbiB0aGlzIHByb2plY3QhXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRvRG9zW2l0ZW1JZF0uc2V0VGl0bGUoaXRlbS50aXRsZSk7XG4gICAgICAgIHRvRG9zW2l0ZW1JZF0uc2V0RGVzY3JpcHRpb24oaXRlbS5kZXNjcmlwdGlvbik7XG4gICAgICAgIHRvRG9zW2l0ZW1JZF0uc2V0UHJpb3JpdHkoaXRlbS5wcmlvcml0eSk7XG4gICAgICAgIHRvRG9zW2l0ZW1JZF0uc2V0RHVlRGF0ZShpdGVtLmR1ZURhdGUpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG9zW2l0ZW1JZF0uc3VtbWFyaXplKCkpO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVJdGVtU3RhdHVzID0gKGl0ZW1JZCkgPT4ge1xuICAgICAgICBpZighQm9vbGVhbih0b0Rvc1tpdGVtSWRdKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgaXRlbSBpbiB0aGlzIHByb2plY3QhXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZih0b0Rvc1tpdGVtSWRdLmdldFN0YXR1cygpID09PSB0cnVlKXtcbiAgICAgICAgICAgIHRvRG9zW2l0ZW1JZF0uc2V0U3RhdHVzKGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvRG9zW2l0ZW1JZF0uc2V0U3RhdHVzKHRydWUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldE5hbWUsIGFkZCwgcmVtb3ZlLCBnZXRJdGVtLCBnZXRUb0RvcywgZ2V0TnVtVG9Eb3MsIGVkaXRUb0RvLCB0b2dnbGVJdGVtU3RhdHVzLCB2aXN1YWxpemUgfTtcbn07XG5cbmV4cG9ydCB7XG4gICAgcHJvamVjdEZhY3Rvcnlcbn0iLCIvLyB0b0RvIGl0ZW0gZmFjdG9yeVxuY29uc3QgdG9Eb0ZhY3RvcnkgPSAoX2lkID0gbnVsbCwgX3RpdGxlLCBfZGVzY3JpcHRpb24sIF9kdWVEYXRlLCBfcHJpb3JpdHksIF9zdGF0dXMgPSBmYWxzZSkgPT4ge1xuICAgIGxldCBpZCA9IF9pZDtcbiAgICBsZXQgdGl0bGUgPSBfdGl0bGU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gX2Rlc2NyaXB0aW9uO1xuICAgIGxldCBkdWVEYXRlID0gX2R1ZURhdGU7XG4gICAgbGV0IHByaW9yaXR5ID0gX3ByaW9yaXR5O1xuICAgIGxldCBzdGF0dXMgPSBfc3RhdHVzO1xuXG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiBpZDtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gICAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHt0aXRsZSA9IG5ld1RpdGxlfTtcblxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzYykgPT4ge2Rlc2NyaXB0aW9uID0gbmV3RGVzY307XG5cbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gZHVlRGF0ZTtcbiAgICBjb25zdCBzZXREdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IHtkdWVEYXRlID0gbmV3RHVlRGF0ZX07XG5cbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7cHJpb3JpdHkgPSBuZXdQcmlvcml0eX07XG5cbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiBzdGF0dXM7XG4gICAgY29uc3Qgc2V0U3RhdHVzID0gKG5ld1N0YXR1cykgPT4ge3N0YXR1cyA9IG5ld1N0YXR1c307XG5cbiAgICBjb25zdCBzdW1tYXJpemUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1bW1hcnkgPSBgSWQ6ICR7aWR9XFxuVGl0bGU6ICR7dGl0bGV9XFxuRGVzY3JpcHRpb246ICR7ZGVzY3JpcHRpb259XFxuRHVlIERhdGU6ICR7ZHVlRGF0ZX1cXG5Qcmlvcml0eTogJHtwcmlvcml0eX1cXG5TdGF0dXM6ICR7c3RhdHVzfWA7XG4gICAgICAgIHJldHVybiBzdW1tYXJ5O1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldElkLCBnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIGdldER1ZURhdGUsIGdldFByaW9yaXR5LCBnZXRTdGF0dXMsIFxuICAgICAgICBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldER1ZURhdGUsIHNldFByaW9yaXR5LCBzZXRTdGF0dXMsIHN1bW1hcml6ZSB9O1xufTtcblxuZXhwb3J0IHtcbiAgICB0b0RvRmFjdG9yeVxufSIsImltcG9ydCB7IHByb2plY3RGYWN0b3J5IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgdG9Eb0ZhY3RvcnkgfSBmcm9tIFwiLi90b0RvXCI7XG5cbi8vIG1vZHVsZSBzdG9yZXMgZGF0YSBzbyBpdCBjYW4gYmUgdXNlZCBpbiBET01cbmNvbnN0IHRvRG9Nb2R1bGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzID0gW107XG4gICAgbGV0IG51bVByb2plY3RzID0gMDtcblxuICAgIGNvbnN0IGdldE51bVByb2plY3RzID0gKCkgPT4gbnVtUHJvamVjdHM7XG5cbiAgICAvLyBjcmVhdGUgYSBuZXcgcHJvamVjdCBhbmQgYWRkIHRvIHByb2plY3RzIGxpc3RcbiAgICAvLyByZXR1cm5zIHRoZSBwcm9qZWN0J3MgaWQgaW4gdGhlIGludGVybmFsIGxpc3RcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdEZhY3RvcnkocHJvamVjdE5hbWUpKTtcbiAgICAgICAgbnVtUHJvamVjdHMgKz0gMTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzLmxlbmd0aCAtIDE7XG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSBhbiBleGlzdGluZyBwcm9qZWN0IGdpdmVuIGl0cyBpZFxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdElkKSA9PiB7XG4gICAgICAgIGlmICghQm9vbGVhbihwcm9qZWN0c1twcm9qZWN0SWRdKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJlbW92ZSBhbiBhIHByb2plY3QgdGhhdCBkb2Vzbid0IGV4aXN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHByb2plY3RJZCBpcyB0aGUgaW5kZXggb2YgdGhlIHByb2plY3QgaW4gdGhlIGFycmF5IGFzIHdlbGwgYXMgdGhlIHByb2plY3RJZCBkYXRhIGF0dHJpYnV0ZSBvZiB0aGUgRE9NIG5vZGUgXG4gICAgICAgIGRlbGV0ZSBwcm9qZWN0c1twcm9qZWN0SWRdO1xuICAgICAgICBudW1Qcm9qZWN0cy0tO1xuICAgIH07XG5cbiAgICAvLyBkaXNwbGF5IGFsbCBpdGVtcyBvbiBhIHByb2plY3QgYW5kIHJldHVybiB0aGUgcHJvamVjdFxuICAgIGNvbnN0IHZpZXdQcm9qZWN0ID0gKHByb2plY3RJZCkgPT4ge1xuICAgICAgICBpZiAoIUJvb2xlYW4ocHJvamVjdHNbcHJvamVjdElkXSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB2aWV3IGEgcHJvamVjdCB0aGF0IGRvZXNuJ3QgZXhpc3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYFByb2plY3QgbmFtZTogJHtwcm9qZWN0c1twcm9qZWN0SWRdLmdldE5hbWUoKX1gKTtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdElkXS52aXN1YWxpemUoKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzW3Byb2plY3RJZF07XG4gICAgfTtcblxuICAgIC8vIGdldCBudW1iZXIgb2YgaXRlbXMvdG9Eb3MgaW4gYSBwcm9qZWN0XG4gICAgY29uc3QgZ2V0TnVtVG9Eb3MgPSAocHJvamVjdElkKSA9PiBwcm9qZWN0c1twcm9qZWN0SWRdLmdldE51bVRvRG9zKCk7XG5cbiAgICAvLyBnaXZlbiBwb3JqZWN0SWQgYW5kIGl0ZW1JZCwgcmV0dXJuIHRoYXQgdG9EbyBpdGVtIGZyb20gdGhhdCBwcm9qZWN0XG4gICAgY29uc3QgZ2V0SXRlbUluUHJvamVjdCA9IChwcm9qZWN0SWQsIGl0ZW1JZCkgPT4ge1xuICAgICAgICBpZiAoIUJvb2xlYW4ocHJvamVjdHNbcHJvamVjdElkXSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlByb2plY3QgZG9lc24ndCBleGlzdCBpbnRlcm5hbGx5IVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvamVjdHNbcHJvamVjdElkXS5nZXRJdGVtKGl0ZW1JZCk7XG4gICAgfTtcblxuICAgIC8vIGFkZCBhIHRvRG8gaXRlbSB0byBhbiBleGlzdGluZyBwcm9qZWN0IGFuZCByZXR1cm4gdGhlIGlkXG4gICAgY29uc3QgYWRkVG9Qcm9qZWN0ID0gKHByb2plY3RJZCwgaXRlbSkgPT4ge1xuICAgICAgICBpZiAoIUJvb2xlYW4ocHJvamVjdHNbcHJvamVjdElkXSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBhZGQgYW4gaXRlbSB0byBhIHByb2plY3QgdGhhdCBkb2Vzbid0IGV4aXN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGl0ZW0gaGFzIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgYW5kIHByaW9yaXR5IGF0dHJpYnV0ZXNcbiAgICAgICAgbGV0IHRpdGxlO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb247XG4gICAgICAgIGxldCBkdWVEYXRlO1xuICAgICAgICBsZXQgcHJpb3JpdHk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aXRsZSA9IGl0ZW0udGl0bGU7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBkdWVEYXRlID0gaXRlbS5kdWVEYXRlO1xuICAgICAgICAgICAgcHJpb3JpdHkgPSBpdGVtLnByaW9yaXR5O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBnZXROdW1Ub0Rvcyhwcm9qZWN0SWQpO1xuICAgICAgICBjb25zdCB0b0RvID0gdG9Eb0ZhY3RvcnkoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0SWRdLmFkZCh0b0RvKTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cbiAgICAvLyByZW1vdmUgYSB0b0RvIGl0ZW0gZnJvbSBhbiBleGlzdGluZyBwcm9qZWN0XG4gICAgY29uc3QgcmVtb3ZlRnJvbVByb2plY3QgPSAocHJvamVjdElkLCBpdGVtSWQpID0+IHtcbiAgICAgICAgaWYgKCFCb29sZWFuKHByb2plY3RzW3Byb2plY3RJZF0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmVtb3ZlIGFuIGl0ZW0gZnJvbSBhIHByb2plY3QgdGhhdCBkb2Vzbid0IGV4aXN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3RzW3Byb2plY3RJZF0ucmVtb3ZlKGl0ZW1JZCk7XG5cbiAgICB9O1xuXG4gICAgY29uc3QgZWRpdFRvRG9JblByb2plY3QgPSAocHJvamVjdElkLCB0b2RvSWQsIGl0ZW0pID0+IHtcbiAgICAgICAgaWYoIUJvb2xlYW4ocHJvamVjdHNbcHJvamVjdElkXSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlByb2plY3QgZG9lc24ndCBleGlzdCBpbnRlcm5hbGx5IVwiKVxuICAgICAgICB9XG4gICAgICAgIHByb2plY3RzW3Byb2plY3RJZF0uZWRpdFRvRG8odG9kb0lkLCBpdGVtKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdG9nZ2xlSXRlbVN0YXR1cyA9IChwcm9qZWN0SWQsIHRvZG9JZCkgPT4ge1xuICAgICAgICBpZighQm9vbGVhbihwcm9qZWN0c1twcm9qZWN0SWRdKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvamVjdCBkb2Vzbid0IGV4aXN0IGludGVybmFsbHkhXCIpXG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdHNbcHJvamVjdElkXS50b2dnbGVJdGVtU3RhdHVzKHRvZG9JZCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldE51bVByb2plY3RzLCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCB2aWV3UHJvamVjdCwgZ2V0TnVtVG9Eb3MsIGFkZFRvUHJvamVjdCwgcmVtb3ZlRnJvbVByb2plY3QsIGdldEl0ZW1JblByb2plY3QsIGVkaXRUb0RvSW5Qcm9qZWN0LCB0b2dnbGVJdGVtU3RhdHVzIH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7XG4gICAgdG9Eb01vZHVsZVxufSAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgeyB0b0RvTW9kdWxlIH0gZnJvbSAnLi90b0RvTW9kdWxlJztcbmltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSAnLi9kaXNwbGF5Q29udHJvbGxlcic7XG5cbi8vIGxvZ2ljL3JlYWN0aXZpdHkgY29udHJvbGxlcjsgY2FsbHMgdGhlIGZ1bmN0aW9ucyBvbiB0aGUgZGlzcGxheUNvbnRyb2xsZXIgYXMgd2VsbCBhcyB0aGUgaW50ZXJuYWwgdG9Eb0xpc3QgbW9kdWxlXG4vLyBjcmVhdGVzIGFsbCBldmVudCBsaXN0ZW5lcnMgaGVyZVxuY29uc3QgbG9naWNDb250cm9sbGVyID0gKCgpID0+IHtcblxuICAgIC8vIGZ1bmN0aW9uIHRoYXQgZ2V0cyB0cmlnZ2VyZWQgYnkgdGhlIGFkZCBwcm9qZWN0IGJ1dHRvblxuICAgIC8vIHJlbmRlcnMgdGhlIGZpZWxkIGZvciBhZGRpbmcgcHJvamVjdHNcbiAgICBjb25zdCByZW5kZXJBZGRQcm9qZWN0Rm9ybSA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyBmaXJzdCB0b2dnbGUgdGhlIGFkZFByb2plY3RCdXR0b24gc28gaXQgaXMgaGlkZGVuXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnRvZ2dsZURpc3BsYXkoZXZlbnQudGFyZ2V0KTtcblxuICAgICAgICAvLyByZW5kZXIgdGhlIGZvcm0gb24gdGhlIERPTVxuICAgICAgICBjb25zdCBmb3JtID0gZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyQWRkUHJvamVjdEZvcm0oKTtcblxuICAgICAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGZvcm0gYnV0dG9uc1xuICAgICAgICAvLyBhZGRQcm9qZWN0IGJ1dHRvblxuICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYWRkUHJvamVjdFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIGZvcm0gZmlyc3RcbiAgICAgICAgICAgIGlmKHZhbGlkYXRlQWRkUHJvamVjdEZvcm0oZm9ybSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gYWRkUHJvamVjdChmb3JtKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci50b2dnbGVEaXNwbGF5KGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgLy8gb3BlbiB0aGlzIHByb2plY3RcbiAgICAgICAgICAgICAgICBvcGVuUHJvamVjdCh7dGFyZ2V0OiBwcm9qZWN0fSk7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGFkZCBwcm9qZWN0IGZvcm0gdXBvbiBhZGRpdGlvbiBvZiBwcm9qZWN0IGFuZCBldmVudCBsaXN0ZW5lciBcbiAgICAgICAgICAgICAgICByZW1vdmVBZGRQcm9qZWN0Rm9ybSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjYW5jZWwgYnV0dG9uXG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5jYW5jZWxBZGRcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVBZGRQcm9qZWN0Rm9ybSgpO1xuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIudG9nZ2xlRGlzcGxheShldmVudC50YXJnZXQpO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyIC5hZGRCdXR0b25cIik7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckFkZFByb2plY3RGb3JtKTtcblxuICAgIC8vIGZ1bmN0aW9uIHRoYXQgZ2V0cyB0cmlnZ2VyZWQgYnkgdGhlIGFkZCBwcm9qZWN0IGJ1dHRvbiBpbiB0aGUgYWRkIHByb2plY3QgZm9ybVxuICAgIC8vIGFzc3VtZXMgZm9ybSBkYXRhIGlzIHZhbGlkYXRlZFxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoZm9ybSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLnZhbHVlO1xuICAgICAgICAvLyBhZGQgdGhlIHByb2plY3QgYW5kIGdldCBpdHMgaW50ZXJuYWwgaWRcbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gdG9Eb01vZHVsZS5hZGRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgLy8gYWRkIHByb2plY3Qgb24gRE9NIGFuZCBnZXQgdGhlIG5vZGVcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRpc3BsYXlDb250cm9sbGVyLmFkZFByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3RJZCk7XG4gICAgICAgIC8vIGFkZCBsaXN0ZW5lciB0byBwcm9qZWN0XG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuUHJvamVjdCk7XG4gICAgICAgIC8vIGFkZCBsaXN0ZW5lciB0byBkZWxldGUgYnV0dG9uIGluIHByb2plY3RcbiAgICAgICAgcHJvamVjdC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZVByb2plY3RCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbW92ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB0b0RvTW9kdWxlLnJlbW92ZVByb2plY3QocHJvamVjdElkKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHRoYXQgZ2V0cyB0cmlnZ2VyZWQgYnkgdGhlIGFkZCBwcm9qZWN0IGJ1dHRvblxuICAgIC8vIHJldHVybnMgdHJ1ZSBvciBmYWxzZSB1cG9uIHZhbGlkYXRpb25cbiAgICBjb25zdCB2YWxpZGF0ZUFkZFByb2plY3RGb3JtID0gKGZvcm0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJZZXQgdG8gaW1wbGVtZW50IGFkZCBwcm9qZWN0IGZvcm0gdmFsaWRhdGlvblwiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHRoYXQgZ2V0cyB0cmlnZ2VyZWQgYnkgdGhlIGNhbmNlbCBidXR0b24gaW4gYWRkIHByb2plY3QgZm9ybVxuICAgIGNvbnN0IHJlbW92ZUFkZFByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW1vdmVBZGRQcm9qZWN0Rm9ybSgpO1xuICAgIH07XG5cblxuICAgIC8vIGZ1bmN0aW9uIHRvIHJ1biBvbmNlIGEgcHJvamVjdCBoYXMgYmVlbiBjbGlja2VkXG4gICAgLy8gY2xlYXIgY29udGVudCBzZWN0aW9uXG4gICAgLy8gZGlzcGxheSB0aGUgYWRkIGl0ZW1zIGJ1dHRvbiBmb3IgdGhpcyBwcm9qZWN0XG4gICAgY29uc3Qgb3BlblByb2plY3QgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY2xlYXJDb250ZW50U2VjdGlvbigpO1xuICAgICAgICBjb25zdCBwcm9qZWN0Tm9kZSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0aWRcIik7XG4gICAgICAgIC8vIGRpc3BsYXkgaW50ZXJuYWwgcHJvamVjdCB0byBkbyBpdGVtc1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdG9Eb01vZHVsZS52aWV3UHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICAvLyBkaXNwbGF5IHRoZSBwcm9qZWN0IHRvIERvIGl0ZW1zIGluIHRoZSBET01cbiAgICAgICAgY29uc3QgdG9Eb05vZGVzID0gZGlzcGxheUNvbnRyb2xsZXIudmlld1Byb2plY3QocHJvamVjdCwgcHJvamVjdElkKTtcbiAgICAgICAgLy8gY2FsbCBmdW5jdGlvbiB0byBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGVhY2ggdG9EbyBub2RlIGJ1dHRvbnNcbiAgICAgICAgdG9Eb05vZGVzLmZvckVhY2goYWRkQWN0aW9uTGlzdGVuZXJzKTtcbiAgICAgICAgLy8gc2hvdyB0aGUgYWRkIGl0ZW0gYnV0dG9uIGFzIHdlbGxcbiAgICAgICAgc2hvd0FkZFRvRG9CdXR0b24ocHJvamVjdElkKTtcbiAgICB9O1xuXG4gICAgLy8gcmVuZWRlciB0aGUgYWRkIGl0ZW0gYnV0dG9uIGluIHRoZSBET01cbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGJ1dHRvblxuICAgIGNvbnN0IHNob3dBZGRUb0RvQnV0dG9uID0gKHByb2plY3RJZCkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWRkSXRlbUJ1dHRvbihwcm9qZWN0SWQpO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SWQpO1xuICAgICAgICAgICAgcmVuZGVyQWRkSXRlbUZvcm0ocHJvamVjdElkKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIHJlbmRlciB0aGUgYWRkIGl0ZW0gZm9ybSBpbiB0aGUgRE9NXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVycyB0byBpbi1mb3JtIGJ1dHRvbXNcbiAgICBjb25zdCByZW5kZXJBZGRJdGVtRm9ybSA9IChwcm9qZWN0SWQpID0+IHtcbiAgICAgICAgLy8gdG9nZ2xlIHRoZSBhZGRJdGVtIGJ1dHRvbiBzbyBpdCBpcyBoaWRkZW5cbiAgICAgICAgY29uc3QgYWRkSXRlbUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudCAuYWRkQnV0dG9uXCIpO1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci50b2dnbGVEaXNwbGF5KGFkZEl0ZW1CdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJBZGRJdGVtRm9ybShwcm9qZWN0SWQpO1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bdHlwZT1zdWJtaXRdXCIpO1xuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHZhbGlkYXRlRm9ybShmb3JtKSl7XG4gICAgICAgICAgICAgICAgYWRkSXRlbVRvUHJvamVjdChwcm9qZWN0SWQsIGZvcm0pO1xuICAgICAgICAgICAgICAgIHJlbW92ZUFkZEl0ZW1Gb3JtKCk7XG4gICAgICAgICAgICAgICAgLy8gdG9nZ2xlIHRoZSBhZGRJdGVtIGJ1dHRvbiBvbmNlIGRvbmVcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci50b2dnbGVEaXNwbGF5KGFkZEl0ZW1CdXR0b24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bdHlwZT1yZXNldF1cIik7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlQWRkSXRlbUZvcm0oKVxuICAgICAgICAgICAgLy8gdG9nZ2xlIHRoZSBhZGRJdGVtIGJ1dHRvbiBvbmNlIGRvbmVcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnRvZ2dsZURpc3BsYXkoYWRkSXRlbUJ1dHRvbik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBmdW5jdGlvbiB0byByZW1vdmUgdGhlIGFkZCB0b0RvIGZvcm0gZnJvbSB0aGUgRE9NXG4gICAgY29uc3QgcmVtb3ZlQWRkSXRlbUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbW92ZUFkZEl0ZW1Gb3JtKCk7XG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gdG8gdmFsaWRhdGUgZm9ybSBlbnRyaWVzXG4gICAgLy8gcmV0dXJucyB0cnVlIHVwb24gc3VjY2Vzc1xuICAgIC8vIGFsZXJ0cyB0aGUgdXNlciB1cG9uIGZhaWx1cmVcbiAgICBjb25zdCB2YWxpZGF0ZUZvcm0gPSAoZm9ybSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIllldCB0byBpbXBsZW1lbnQgdmFsaWRhdGlvbiFcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICAvLyBleHRyYWN0IGRhdGEgZnJvbSB0aGUgZm9ybSwgcGFja2FnZSBpbnRvIGFuIGl0ZW0gb2JqZWN0LCBhbmQgcmV0dXJuIGl0XG4gICAgY29uc3QgZ2V0Rm9ybURhdGEgPSAoZm9ybSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICAgICAgdGl0bGU6IGZvcm0ucXVlcnlTZWxlY3RvcihgaW5wdXRbaWQ9XCJ0aXRsZVwiXWApLnZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGZvcm0ucXVlcnlTZWxlY3RvcihgaW5wdXRbaWQ9XCJkZXNjXCJdYCkudmFsdWUsXG4gICAgICAgICAgICBkdWVEYXRlOiBmb3JtLnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3R5cGU9XCJkYXRlXCJdYCkudmFsdWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHByaW9yaXR5VmFsdWUgPSBudWxsO1xuICAgICAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9XCJyYWRpb1wiXWApO1xuICAgICAgICBwcmlvcml0eU9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZihvcHRpb24uY2hlY2tlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlWYWx1ZSA9IG9wdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbS5wcmlvcml0eSA9IHByaW9yaXR5VmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfTtcblxuICAgIC8vIGNhbGxlZCBieSBhZGQgYnV0dG9uIGluIGFkZCB0byBkbyBmb3JtXG4gICAgLy8gZXh0cmFjdHMgZGF0YSBmcm9tIHRoZSBmb3JtIGFuZCBhZGRzIGl0IHRvIHRoZSBhcHByb3ByaWF0ZSBwcm9qZWN0IGludGVybmFsbHksXG4gICAgLy8gYW5kIHJlbmRlcnMgaXQgb24gdGhlIERPTVxuICAgIC8vIGFzc3VtZXMgZm9ybSBkYXRhIGlzIHZhbGlkYXRlZFxuICAgIGNvbnN0IGFkZEl0ZW1Ub1Byb2plY3QgPSAocHJvamVjdElkLCBmb3JtKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBZGRpbmcgdG8gcHJvamVjdCAke3Byb2plY3RJZH1gKTtcbiAgICBcbiAgICAgICAgLy8gZXh0cmFjdCBkYXRhIGFuZCBhZGQgdG8gdG9Eb01vZHVsZSBhbmQgRE9NXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBnZXRGb3JtRGF0YShmb3JtKTtcblxuICAgICAgICAvLyBhZGQgaXRlbSB0byBpbnRlcm5hbCB0b0RvTW9kdWxlIGFuZCBnZXQgdGhlIGlkXG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9IHRvRG9Nb2R1bGUuYWRkVG9Qcm9qZWN0KHByb2plY3RJZCwgaXRlbSk7XG5cbiAgICAgICAgLy8gYWRkIGl0ZW0gdG8gdGhlIERPTVxuICAgICAgICBjb25zdCB0b0RvID0gZGlzcGxheUNvbnRyb2xsZXIuYWRkVG9Qcm9qZWN0KHByb2plY3RJZCwgaXRlbSwgaXRlbUlkKTtcblxuICAgICAgICAvLyBhZGQgbGlzdGVuZXJzIHRvIGVhY2ggYnV0dG9uIGluIHRvRG8gZWxlbWVudFxuICAgICAgICBhZGRBY3Rpb25MaXN0ZW5lcnModG9Ebyk7XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvIGV2ZW50IGxpc3RlbmVycyB0byBlZGl0L2RlbGV0ZSBidXR0b25zIGFzIHdlbGwgYXMgdGhlIGNoZWNrYm94XG4gICAgY29uc3QgYWRkQWN0aW9uTGlzdGVuZXJzID0gKHRvRG8pID0+IHtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdG9Eby5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmRlbGV0ZVwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlSXRlbSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gdG9Eby5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmVkaXRcIik7XG4gICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIGJlZm9yZSByZW5kZXJpbmcgdGhlIGVkaXQgaXRlbSBmb3JtLCB0b2dnbGUgdGhlIGFkZCBpdGVtIGJ1dHRvbiBkaXNwbGF5XG4gICAgICAgICAgICAvLyB0b2dnbGUgdGhlIGFkZCBpdGVtIGJ1dHRvblxuICAgICAgICAgICAgY29uc3QgYWRkSXRlbUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudCAuYWRkQnV0dG9uXCIpO1xuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIudG9nZ2xlRGlzcGxheShhZGRJdGVtQnV0dG9uKTtcbiAgICAgICAgICAgIHJlbmRlckVkaXRJdGVtRm9ybShldmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gdG9Eby5xdWVyeVNlbGVjdG9yKGBpbnB1dFt0eXBlPVwiY2hlY2tCb3hcIl1gKTtcbiAgICAgICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVJdGVtU3RhdHVzKTtcbiAgICB9O1xuXG4gICAgLy8gZnVuY3Rpb24gdGhhdCBnZXRzIHRyaWdnZXJlZCBieSB0aGUgY2hlY2tCb3ggaW5wdXRcbiAgICBjb25zdCB0b2dnbGVJdGVtU3RhdHVzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RpZFwiKTtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdG9kb2lkXCIpO1xuICAgICAgICB0b0RvTW9kdWxlLnRvZ2dsZUl0ZW1TdGF0dXMocHJvamVjdElkLCBpdGVtSWQpO1xuICAgIH07XG5cbiAgICAvLyBmdW5jdGlvbiB0aGF0IGdldHMgdHJpZ2dlcmVkIGJ5IHRoZSBkZWxldGUgaXRlbSBidXR0b25cbiAgICBjb25zdCBkZWxldGVJdGVtID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RpZFwiKTtcbiAgICAgICAgY29uc3QgdG9kb0lkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdG9kb2lkXCIpO1xuXG4gICAgICAgIHRvRG9Nb2R1bGUucmVtb3ZlRnJvbVByb2plY3QocHJvamVjdElkLCB0b2RvSWQpO1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW1vdmVGcm9tUHJvamVjdChwcm9qZWN0SWQsIHRvZG9JZCk7XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHRoYXQgZ2V0cyB0cmlnZ2VyZWQgYnkgdGhlIGVkaXQgaXRlbSBidXR0b25cbiAgICBjb25zdCByZW5kZXJFZGl0SXRlbUZvcm0gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdGlkXCIpO1xuICAgICAgICBjb25zdCB0b2RvSWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10b2RvaWRcIik7XG5cbiAgICAgICAgLy8gZmlyc3QgZ2V0IHRoZSBkYXRhIGZyb20gdGhlIGludGVybmFsIG1vZHVsZVxuICAgICAgICBjb25zdCB0b0RvSXRlbSA9IHRvRG9Nb2R1bGUuZ2V0SXRlbUluUHJvamVjdChwcm9qZWN0SWQsIHRvZG9JZCk7XG5cbiAgICAgICAgLy8gcHJlLWZpbGwgdGhlIGVudHJ5IGFyZWFzIHdpdGggc3RvcmVkIGRhdGFcbiAgICAgICAgY29uc3QgZm9ybSA9IGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckFkZEl0ZW1Gb3JtKHByb2plY3RJZCk7XG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcihgaW5wdXRbaWQ9XCJ0aXRsZVwiXWApLnZhbHVlID0gdG9Eb0l0ZW0uZ2V0VGl0bGUoKTtcbiAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKGBpbnB1dCNkZXNjYCkudmFsdWUgPSB0b0RvSXRlbS5nZXREZXNjcmlwdGlvbigpO1xuICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoYGlucHV0I2RhdGVgKS52YWx1ZSA9IHRvRG9JdGVtLmdldER1ZURhdGUoKTtcbiAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKGBpbnB1dCMke3RvRG9JdGVtLmdldFByaW9yaXR5KCl9YCkuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICAvLyBhZGQgbGlzdGVuZXIgdG8gYWRkL2VkaXQgYnV0dG9uXG4gICAgICAgIGNvbnN0IGVkaXRJdGVtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblt0eXBlPSdzdWJtaXQnXVwiKTtcbiAgICAgICAgZWRpdEl0ZW1CdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgICAgICBlZGl0SXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHZhbGlkYXRlRm9ybShmb3JtKSl7XG4gICAgICAgICAgICAgICAgZWRpdEl0ZW0odG9kb0lkLCBwcm9qZWN0SWQsIGZvcm0pO1xuICAgICAgICAgICAgICAgIHJlbW92ZUFkZEl0ZW1Gb3JtKCk7XG4gICAgICAgICAgICAgICAgLy8gdG9nZ2xlIHRoZSBhZGRJdGVtIGJ1dHRvbiBvbmNlIGRvbmVcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci50b2dnbGVEaXNwbGF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudCAuYWRkQnV0dG9uXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYWRkIGxpc3RlbmVyIHRvIGNhbmNlbCBidXR0b25cbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW3R5cGU9cmVzZXRdXCIpO1xuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZUFkZEl0ZW1Gb3JtKCk7XG4gICAgICAgICAgICAvLyB0b2dnbGUgdGhlIGFkZEl0ZW0gYnV0dG9uIG9uY2UgZG9uZVxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIudG9nZ2xlRGlzcGxheShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQgLmFkZEJ1dHRvblwiKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBmdW5jdGlvbiB0aGF0IGdldHMgdHJpZ2dlcmVkIGJ5IHRoZSBzdWJtaXQgYnV0dG9uIGluIHRoZSBlZGl0IGZvcm1cbiAgICAvLyBleHRyYWN0cyBkYXRhIGZyb20gdGhlIGZvcm0gYW5kIGVkaXRzIHRoZSBhcHByb3ByaWF0ZSBwcm9qZWN0J3MgdG9EbyBpdGVtIGludGVybmFsbHksXG4gICAgLy8gYW5kIHJlbmRlcnMvZWRpdHMgaXQgb24gdGhlIERPTVxuICAgIC8vIGFzc3VtZXMgZm9ybSBkYXRhIGlzIHZhbGlkYXRlZFxuICAgIGNvbnN0IGVkaXRJdGVtID0gKHRvZG9JZCwgcHJvamVjdElkLCBmb3JtKSA9PiB7XG4gICAgICAgIC8vIGV4dHJhY3QgZm9ybSBkYXRhXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBnZXRGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgIFxuICAgICAgICAvLyBlZGl0IGl0ZW0gZGF0YSBpbiBpbnRlcm5hbCBtb2R1bGVcbiAgICAgICAgdG9Eb01vZHVsZS5lZGl0VG9Eb0luUHJvamVjdChwcm9qZWN0SWQsIHRvZG9JZCwgaXRlbSk7XG5cbiAgICAgICAgLy8gZWRpdCBpdGVtIGRhdGEgaW4gRE9NXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmVkaXRUb0RvKHByb2plY3RJZCwgdG9kb0lkLCBpdGVtKTtcbiAgICB9O1xuXG5cbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9