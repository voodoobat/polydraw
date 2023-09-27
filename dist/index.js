/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.configDefault = void 0;\nexports.configDefault = {\n    elements: {\n        point: {\n            size: 8,\n            color: '#087E8B',\n            opacity: 0.25,\n        },\n        guide: {\n            size: 1,\n            color: '#FF5A5F',\n            opacity: 0.25,\n        },\n        circuit: {\n            size: 1,\n            color: '#087E8B',\n            opacity: 0.25,\n        },\n        polygon: {\n            color: '#C1839F',\n            opacity: 0.5,\n            point: {\n                size: 8,\n                color: '#C1839F',\n                opacity: 0.5,\n            },\n        },\n        menu: {\n            style: {\n                fontSize: '0.8em',\n                padding: '0.5em 1em',\n                lineHeight: '1',\n                cursor: 'pointer',\n                backgroundColor: '#E56B6F',\n                color: '#FFFFFF',\n                userSelect: 'none',\n            },\n        },\n    },\n    events: {\n        onPolygonChange: null,\n        onPolygonCreate: null,\n        onSceneChange: null,\n    },\n};\n\n\n//# sourceURL=webpack://polydraw/./src/constants/index.ts?");

/***/ }),

/***/ "./src/elements/circuit.ts":
/*!*********************************!*\
  !*** ./src/elements/circuit.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.circuit = void 0;\nvar circuit = function (svg, points, config) {\n    var polyline = svg\n        .polyline(points)\n        .stroke({\n        width: config.size,\n        color: config.color,\n        opacity: config.opacity,\n    })\n        .fill('transparent');\n    var update = function (points) {\n        polyline.plot(points);\n    };\n    var remove = function () {\n        polyline.remove();\n    };\n    return {\n        update: update,\n        remove: remove,\n    };\n};\nexports.circuit = circuit;\n\n\n//# sourceURL=webpack://polydraw/./src/elements/circuit.ts?");

/***/ }),

/***/ "./src/elements/guide.ts":
/*!*******************************!*\
  !*** ./src/elements/guide.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.guide = void 0;\nvar E = __importStar(__webpack_require__(/*! ../elements */ \"./src/elements/index.ts\"));\nvar guide = function (svg, start, end, config) {\n    var point = E.point(svg, end, config.elements.point);\n    var line = svg.line([start.toArray(), end.toArray()]).stroke({\n        width: config.elements.guide.size,\n        color: config.elements.guide.color,\n        opacity: config.elements.guide.opacity,\n    });\n    var update = function (start, end) {\n        point.update(end);\n        line.plot([start.toArray(), end.toArray()]);\n    };\n    var remove = function () {\n        point.remove();\n        line.remove();\n    };\n    return {\n        update: update,\n        remove: remove,\n    };\n};\nexports.guide = guide;\n\n\n//# sourceURL=webpack://polydraw/./src/elements/guide.ts?");

/***/ }),

/***/ "./src/elements/index.ts":
/*!*******************************!*\
  !*** ./src/elements/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.polygon = exports.point = exports.menu = exports.guide = exports.circuit = void 0;\nvar circuit_1 = __webpack_require__(/*! ./circuit */ \"./src/elements/circuit.ts\");\nObject.defineProperty(exports, \"circuit\", ({ enumerable: true, get: function () { return circuit_1.circuit; } }));\nvar guide_1 = __webpack_require__(/*! ./guide */ \"./src/elements/guide.ts\");\nObject.defineProperty(exports, \"guide\", ({ enumerable: true, get: function () { return guide_1.guide; } }));\nvar menu_1 = __webpack_require__(/*! ./menu */ \"./src/elements/menu.ts\");\nObject.defineProperty(exports, \"menu\", ({ enumerable: true, get: function () { return menu_1.menu; } }));\nvar point_1 = __webpack_require__(/*! ./point */ \"./src/elements/point.ts\");\nObject.defineProperty(exports, \"point\", ({ enumerable: true, get: function () { return point_1.point; } }));\nvar polygon_1 = __webpack_require__(/*! ./polygon */ \"./src/elements/polygon.ts\");\nObject.defineProperty(exports, \"polygon\", ({ enumerable: true, get: function () { return polygon_1.polygon; } }));\n\n\n//# sourceURL=webpack://polydraw/./src/elements/index.ts?");

/***/ }),

/***/ "./src/elements/menu.ts":
/*!******************************!*\
  !*** ./src/elements/menu.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.menu = void 0;\nvar menu = function (root, cords, config, onClick) {\n    var element = document.createElement('div');\n    element.innerText = 'Удалить';\n    Object.keys(config.style).forEach(function (key) {\n        // @ts-ignore\n        element.style[key] = config.style[key];\n    });\n    root.appendChild(element);\n    element.style.position = 'absolute';\n    element.style.top = \"\".concat(cords.y, \"px\");\n    element.style.left = \"\".concat(cords.x, \"px\");\n    element.addEventListener('click', onClick);\n    var remove = function () {\n        element.remove();\n    };\n    return {\n        remove: remove,\n    };\n};\nexports.menu = menu;\n\n\n//# sourceURL=webpack://polydraw/./src/elements/menu.ts?");

/***/ }),

/***/ "./src/elements/point.ts":
/*!*******************************!*\
  !*** ./src/elements/point.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.point = void 0;\nvar svg_js_1 = __webpack_require__(/*! @svgdotjs/svg.js */ \"@svgdotjs/svg.js\");\nvar utilities_1 = __webpack_require__(/*! ../utilities */ \"./src/utilities/index.ts\");\nvar H = __importStar(__webpack_require__(/*! ../helpers */ \"./src/helpers/index.ts\"));\nvar point = function (svg, cords, config, events) {\n    if (events === void 0) { events = {}; }\n    var uid = (0, utilities_1.getRandomId)();\n    var size = config.size;\n    var _a = (0, utilities_1.getCenteredCords)(cords, size, size), x = _a.x, y = _a.y;\n    var el = svg.circle(size).move(x, y).fill(config.color);\n    var state = {\n        cords: cords,\n    };\n    if (events.onDrag) {\n        H.setPreventDrawing(el);\n        el.draggable();\n        el.on('dragmove', function (ev) {\n            // @ts-ignore\n            var _a = ev.detail.event, clientX = _a.clientX, clientY = _a.clientY;\n            state.cords = (0, utilities_1.getRelativeCords)(new svg_js_1.Point(clientX, clientY), svg.node);\n            // @ts-ignore\n            events.onDrag(uid, state.cords);\n        });\n    }\n    if (events.onDragComplete) {\n        el.on('dragend', function () {\n            if (typeof events.onDragComplete === 'function') {\n                events.onDragComplete();\n            }\n        });\n    }\n    var update = function (cords) {\n        el.move.apply(el, (0, utilities_1.getCenteredCords)(cords, size, size).toArray());\n        state.cords = cords;\n    };\n    var remove = function () {\n        el.remove();\n    };\n    return {\n        uid: uid,\n        cords: state.cords,\n        el: el,\n        update: update,\n        remove: remove,\n    };\n};\nexports.point = point;\n\n\n//# sourceURL=webpack://polydraw/./src/elements/point.ts?");

/***/ }),

/***/ "./src/elements/polygon.ts":
/*!*********************************!*\
  !*** ./src/elements/polygon.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.polygon = void 0;\nvar svg_js_1 = __webpack_require__(/*! @svgdotjs/svg.js */ \"@svgdotjs/svg.js\");\nvar U = __importStar(__webpack_require__(/*! ../utilities */ \"./src/utilities/index.ts\"));\nvar E = __importStar(__webpack_require__(/*! . */ \"./src/elements/index.ts\"));\nvar H = __importStar(__webpack_require__(/*! ../helpers */ \"./src/helpers/index.ts\"));\nvar polygon = function (svg, path, rootState, config) {\n    var uid = U.getRandomId();\n    var state = {\n        points: [],\n        get path() {\n            return this.points.map(function (_a) {\n                var cords = _a.cords;\n                return cords.toArray();\n            });\n        },\n    };\n    var group = svg.group();\n    var poly = svg.polygon(path).fill(config.color).opacity(config.opacity);\n    group.add(poly);\n    H.setPreventDrawing(poly);\n    setTimeout(function () {\n        svg.fire('polygonCreate', { uid: uid });\n    }, 0);\n    group.draggable();\n    poly.on('click', function () {\n        H.removeMenu(rootState);\n    });\n    group.on('dragend', function () {\n        poly.array().forEach(function (xy, key) {\n            state.points[key].update(new (svg_js_1.Point.bind.apply(svg_js_1.Point, __spreadArray([void 0], xy, false)))());\n            state.points[key].cords = new (svg_js_1.Point.bind.apply(svg_js_1.Point, __spreadArray([void 0], xy, false)))();\n        });\n        svg.fire('polygonDragEnd', { uid: uid });\n    });\n    poly.node.addEventListener('contextmenu', function (ev) {\n        ev.preventDefault();\n        var cords = U.getRelativeCords(U.getMouseCords(ev), svg.node);\n        svg.fire('menu', { uid: uid, cords: cords });\n    });\n    state.points = path.map(function (xy) {\n        var point = E.point(svg, new svg_js_1.Point(xy), config.point, {\n            onDrag: function (uid, cords) {\n                var found = state.points.find(function (point) {\n                    return point.uid === uid;\n                });\n                if (found) {\n                    found.cords = cords;\n                    poly.plot(state.path);\n                }\n            },\n            onDragComplete: function () {\n                svg.fire('polygonDragEnd', { uid: uid });\n            },\n        });\n        group.add(point.el);\n        return point;\n    });\n    var remove = function () {\n        poly.remove();\n        state.points.forEach(function (point) { return point.remove(); });\n    };\n    return {\n        uid: uid,\n        points: state.points,\n        remove: remove,\n    };\n};\nexports.polygon = polygon;\n\n\n//# sourceURL=webpack://polydraw/./src/elements/polygon.ts?");

/***/ }),

/***/ "./src/helpers/clearScene.ts":
/*!***********************************!*\
  !*** ./src/helpers/clearScene.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.clearScene = void 0;\nvar clearScene = function (state) {\n    state.isDrawGuide = false;\n    state.points.forEach(function (point) { return point.remove(); });\n    state.points = [];\n    if (state.guide) {\n        state.guide.remove();\n        state.guide = null;\n    }\n    if (state.circuit) {\n        state.circuit.remove();\n        state.circuit = null;\n    }\n};\nexports.clearScene = clearScene;\n\n\n//# sourceURL=webpack://polydraw/./src/helpers/clearScene.ts?");

/***/ }),

/***/ "./src/helpers/continueDrawing.ts":
/*!****************************************!*\
  !*** ./src/helpers/continueDrawing.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.continueDrawing = void 0;\nvar E = __importStar(__webpack_require__(/*! ../elements */ \"./src/elements/index.ts\"));\nvar continueDrawing = function (svg, state, cords) {\n    var point = E.point(svg, cords, state.config.elements.point);\n    state.points.push(point);\n    if (!state.circuit) {\n        state.circuit = E.circuit(svg, state.pointsArray, state.config.elements.circuit);\n    }\n    else {\n        state.circuit.update(state.pointsArray);\n    }\n};\nexports.continueDrawing = continueDrawing;\n\n\n//# sourceURL=webpack://polydraw/./src/helpers/continueDrawing.ts?");

/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.startDrawing = exports.setPreventDrawing = exports.removeMenu = exports.placePolygon = exports.continueDrawing = exports.clearScene = void 0;\nvar clearScene_1 = __webpack_require__(/*! ./clearScene */ \"./src/helpers/clearScene.ts\");\nObject.defineProperty(exports, \"clearScene\", ({ enumerable: true, get: function () { return clearScene_1.clearScene; } }));\nvar continueDrawing_1 = __webpack_require__(/*! ./continueDrawing */ \"./src/helpers/continueDrawing.ts\");\nObject.defineProperty(exports, \"continueDrawing\", ({ enumerable: true, get: function () { return continueDrawing_1.continueDrawing; } }));\nvar placePolygon_1 = __webpack_require__(/*! ./placePolygon */ \"./src/helpers/placePolygon.ts\");\nObject.defineProperty(exports, \"placePolygon\", ({ enumerable: true, get: function () { return placePolygon_1.placePolygon; } }));\nvar removeMenu_1 = __webpack_require__(/*! ./removeMenu */ \"./src/helpers/removeMenu.ts\");\nObject.defineProperty(exports, \"removeMenu\", ({ enumerable: true, get: function () { return removeMenu_1.removeMenu; } }));\nvar setPreventDrawing_1 = __webpack_require__(/*! ./setPreventDrawing */ \"./src/helpers/setPreventDrawing.ts\");\nObject.defineProperty(exports, \"setPreventDrawing\", ({ enumerable: true, get: function () { return setPreventDrawing_1.setPreventDrawing; } }));\nvar startDrawing_1 = __webpack_require__(/*! ./startDrawing */ \"./src/helpers/startDrawing.ts\");\nObject.defineProperty(exports, \"startDrawing\", ({ enumerable: true, get: function () { return startDrawing_1.startDrawing; } }));\n\n\n//# sourceURL=webpack://polydraw/./src/helpers/index.ts?");

/***/ }),

/***/ "./src/helpers/placePolygon.ts":
/*!*************************************!*\
  !*** ./src/helpers/placePolygon.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.placePolygon = void 0;\nvar E = __importStar(__webpack_require__(/*! ../elements */ \"./src/elements/index.ts\"));\nvar placePolygon = function (svg, state, points, config) {\n    state.polygons.push(E.polygon(svg, points, state, config));\n};\nexports.placePolygon = placePolygon;\n\n\n//# sourceURL=webpack://polydraw/./src/helpers/placePolygon.ts?");

/***/ }),

/***/ "./src/helpers/removeMenu.ts":
/*!***********************************!*\
  !*** ./src/helpers/removeMenu.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.removeMenu = void 0;\nvar removeMenu = function (state) {\n    var _a;\n    (_a = state.menu) === null || _a === void 0 ? void 0 : _a.remove();\n    state.menu = null;\n};\nexports.removeMenu = removeMenu;\n\n\n//# sourceURL=webpack://polydraw/./src/helpers/removeMenu.ts?");

/***/ }),

/***/ "./src/helpers/setPreventDrawing.ts":
/*!******************************************!*\
  !*** ./src/helpers/setPreventDrawing.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.setPreventDrawing = void 0;\nvar setPreventDrawing = function (el) {\n    el.attr('data-prevent-drawing', true);\n};\nexports.setPreventDrawing = setPreventDrawing;\n\n\n//# sourceURL=webpack://polydraw/./src/helpers/setPreventDrawing.ts?");

/***/ }),

/***/ "./src/helpers/startDrawing.ts":
/*!*************************************!*\
  !*** ./src/helpers/startDrawing.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.startDrawing = void 0;\nvar E = __importStar(__webpack_require__(/*! ../elements */ \"./src/elements/index.ts\"));\nvar startDrawing = function (svg, state, cords) {\n    var point = E.point(svg, cords, state.config.elements.point);\n    state.isDrawGuide = true;\n    state.points.push(point);\n};\nexports.startDrawing = startDrawing;\n\n\n//# sourceURL=webpack://polydraw/./src/helpers/startDrawing.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.polydraw = void 0;\nvar svg_js_1 = __webpack_require__(/*! @svgdotjs/svg.js */ \"@svgdotjs/svg.js\");\n__webpack_require__(/*! @svgdotjs/svg.draggable.js */ \"@svgdotjs/svg.draggable.js\");\nvar ts_deepmerge_1 = __importDefault(__webpack_require__(/*! ts-deepmerge */ \"ts-deepmerge\"));\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./src/constants/index.ts\");\nvar U = __importStar(__webpack_require__(/*! ./utilities */ \"./src/utilities/index.ts\"));\nvar E = __importStar(__webpack_require__(/*! ./elements */ \"./src/elements/index.ts\"));\nvar H = __importStar(__webpack_require__(/*! ./helpers */ \"./src/helpers/index.ts\"));\nvar polydraw = function (target, img, config) {\n    if (config === void 0) { config = {}; }\n    return __awaiter(void 0, void 0, void 0, function () {\n        var svg, root, image, state;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    svg = (0, svg_js_1.SVG)();\n                    root = document.querySelector(target);\n                    return [4 /*yield*/, U.getImage(img)];\n                case 1:\n                    image = (_a.sent());\n                    state = {\n                        config: (0, ts_deepmerge_1.default)(constants_1.configDefault, config),\n                        scale: U.getImageScale(image, root),\n                        isDrawGuide: false,\n                        points: [],\n                        polygons: [],\n                        guide: null,\n                        circuit: null,\n                        menu: null,\n                        get pointsArray() {\n                            return this.points.map(function (_a) {\n                                var cords = _a.cords;\n                                return cords.toArray();\n                            });\n                        },\n                        get data() {\n                            var polygons = this.polygons.map(function (obj) {\n                                return U.polygon2object(obj, state.scale);\n                            });\n                            return {\n                                polygons: polygons,\n                            };\n                        },\n                    };\n                    if (!root)\n                        return [2 /*return*/];\n                    root.style.position = 'relative';\n                    root.style.width = \"\".concat(root.getBoundingClientRect().width, \"px\");\n                    console.log('debug root width', root.getBoundingClientRect().width);\n                    root.appendChild(image);\n                    // todo: move me into helpers\n                    image.style.maxWidth = '100%';\n                    image.style.minWidth = \"\".concat(image.width, \"px\");\n                    image.style.height = \"\".concat(image.height, \"px\");\n                    image.style.minHeight = \"\".concat(image.height, \"px\");\n                    console.log('debug image width', image.width);\n                    svg.addTo(target);\n                    svg.size(image.width, image.height);\n                    svg.node.style.position = 'absolute';\n                    svg.node.style.left = '0';\n                    svg.node.style.top = '0';\n                    svg.on('mousedown', function (ev) {\n                        var _a;\n                        var cords = U.getRelativeCords(U.getMouseCords(ev), svg.node);\n                        H.removeMenu(state);\n                        var isStart = !state.points.length;\n                        var target = ev.target;\n                        (_a = state.guide) === null || _a === void 0 ? void 0 : _a.remove();\n                        if (target.dataset.preventDrawing) {\n                            return;\n                        }\n                        if (isStart) {\n                            H.startDrawing(svg, state, cords);\n                        }\n                        else {\n                            var isComplete = U.isCordsInside(cords, state.points[0].cords, state.config.elements.point.size);\n                            if (isComplete) {\n                                if (state.points.length > 2) {\n                                    H.placePolygon(svg, state, state.pointsArray, state.config.elements.polygon);\n                                    H.clearScene(state);\n                                }\n                            }\n                            else {\n                                var isDouble = state.points.find(function (point) {\n                                    return U.isCordsInside(cords, point.cords, state.config.elements.point.size);\n                                });\n                                if (!isDouble) {\n                                    H.continueDrawing(svg, state, cords);\n                                }\n                            }\n                        }\n                    });\n                    svg.on('mousemove', function (ev) {\n                        var _a;\n                        if (!state.isDrawGuide)\n                            return;\n                        var start = state.points[state.points.length - 1].cords;\n                        var end = U.getRelativeCords(U.getMouseCords(ev), svg.node);\n                        (_a = state.guide) === null || _a === void 0 ? void 0 : _a.remove();\n                        state.guide = E.guide(svg, start, end, state.config);\n                    });\n                    svg.on('menu', function (ev) {\n                        // todo: избавиться от ts-ignore\n                        // @ts-ignore\n                        var _a = ev.detail, cords = _a.cords, uid = _a.uid;\n                        var menuConfig = state.config.elements.menu;\n                        state.menu = E.menu(root, cords, menuConfig, function () {\n                            var key = state.polygons.findIndex(function (polygon) {\n                                return polygon.uid === uid;\n                            });\n                            if (state.polygons[key]) {\n                                state.polygons[key].remove();\n                                state.polygons = state.polygons.filter(function (polygon) {\n                                    return polygon.uid !== uid;\n                                });\n                                H.removeMenu(state);\n                            }\n                        });\n                    });\n                    svg.on('polygonDragEnd', function (ev) {\n                        // todo: избавиться от ts-ignore\n                        // @ts-ignore\n                        var uid = ev.detail.uid;\n                        var changed = state.polygons.find(function (obj) {\n                            return obj.uid === uid;\n                        });\n                        if (changed && state.config.events.onPolygonChange) {\n                            state.config.events.onPolygonChange(U.polygon2object(changed, state.scale));\n                        }\n                        if (state.config.events.onSceneChange) {\n                            state.config.events.onSceneChange(state.data);\n                        }\n                    });\n                    svg.on('polygonCreate', function (ev) {\n                        // todo: избавиться от ts-ignore\n                        // @ts-ignore\n                        var uid = ev.detail.uid;\n                        var created = state.polygons.find(function (obj) {\n                            return obj.uid === uid;\n                        });\n                        if (created && state.config.events.onPolygonCreate) {\n                            state.config.events.onPolygonCreate(U.polygon2object(created, state.scale));\n                        }\n                        if (state.config.events.onSceneChange) {\n                            state.config.events.onSceneChange(state.data);\n                        }\n                    });\n                    window.addEventListener('keyup', function (ev) {\n                        if (ev.key === 'Escape') {\n                            H.clearScene(state);\n                        }\n                    });\n                    return [2 /*return*/, {\n                            placePolygon: function (polygon) {\n                                var points = polygon.points.map(function (_a) {\n                                    var x = _a.x, y = _a.y;\n                                    var point = new svg_js_1.Point(x, y);\n                                    return point.toArray();\n                                });\n                                H.placePolygon(svg, state, U.getScaledCords(points, state.scale), state.config.elements.polygon);\n                            },\n                            get data() {\n                                return state.data;\n                            },\n                        }];\n            }\n        });\n    });\n};\nexports.polydraw = polydraw;\n\n\n//# sourceURL=webpack://polydraw/./src/index.ts?");

/***/ }),

/***/ "./src/utilities/getCenteredCords.ts":
/*!*******************************************!*\
  !*** ./src/utilities/getCenteredCords.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getCenteredCords = void 0;\nvar svg_js_1 = __webpack_require__(/*! @svgdotjs/svg.js */ \"@svgdotjs/svg.js\");\nvar getCenteredCords = function (_a, szX, szY) {\n    var x = _a.x, y = _a.y;\n    return new svg_js_1.Point(x - szX / 2, y - szY / 2);\n};\nexports.getCenteredCords = getCenteredCords;\n\n\n//# sourceURL=webpack://polydraw/./src/utilities/getCenteredCords.ts?");

/***/ }),

/***/ "./src/utilities/getImage.ts":
/*!***********************************!*\
  !*** ./src/utilities/getImage.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getImage = void 0;\nvar getImage = function (url) {\n    return new Promise(function (resolve) {\n        var image = new Image();\n        image.src = url;\n        image.style.display = 'block';\n        image.addEventListener('load', function () {\n            resolve(image);\n        });\n    });\n};\nexports.getImage = getImage;\n\n\n//# sourceURL=webpack://polydraw/./src/utilities/getImage.ts?");

/***/ }),

/***/ "./src/utilities/getImageScale.ts":
/*!****************************************!*\
  !*** ./src/utilities/getImageScale.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getImageScale = void 0;\nvar getImageScale = function (image, root) {\n    return image.naturalWidth / root.clientWidth;\n};\nexports.getImageScale = getImageScale;\n\n\n//# sourceURL=webpack://polydraw/./src/utilities/getImageScale.ts?");

/***/ }),

/***/ "./src/utilities/getMouseCords.ts":
/*!****************************************!*\
  !*** ./src/utilities/getMouseCords.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getMouseCords = void 0;\nvar svg_js_1 = __webpack_require__(/*! @svgdotjs/svg.js */ \"@svgdotjs/svg.js\");\nvar getMouseCords = function (_a) {\n    var clientX = _a.clientX, clientY = _a.clientY;\n    return new svg_js_1.Point(clientX, clientY);\n};\nexports.getMouseCords = getMouseCords;\n\n\n//# sourceURL=webpack://polydraw/./src/utilities/getMouseCords.ts?");

/***/ }),

/***/ "./src/utilities/getRandomId.ts":
/*!**************************************!*\
  !*** ./src/utilities/getRandomId.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getRandomId = void 0;\nvar getRandomId = function (size) {\n    if (size === void 0) { size = 6; }\n    return \"_\".concat(Math.random()\n        .toString(36)\n        .substring(2, size + 2));\n};\nexports.getRandomId = getRandomId;\n\n\n//# sourceURL=webpack://polydraw/./src/utilities/getRandomId.ts?");

/***/ }),

/***/ "./src/utilities/getRelativeCords.ts":
/*!*******************************************!*\
  !*** ./src/utilities/getRelativeCords.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getRelativeCords = void 0;\nvar svg_js_1 = __webpack_require__(/*! @svgdotjs/svg.js */ \"@svgdotjs/svg.js\");\nvar getRelativeCords = function (point, el) {\n    var _a = el.getBoundingClientRect(), x = _a.x, y = _a.y;\n    return new svg_js_1.Point(point.x - x, point.y - y);\n};\nexports.getRelativeCords = getRelativeCords;\n\n\n//# sourceURL=webpack://polydraw/./src/utilities/getRelativeCords.ts?");

/***/ }),

/***/ "./src/utilities/getScaledCords.ts":
/*!*****************************************!*\
  !*** ./src/utilities/getScaledCords.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getScaledCords = void 0;\nvar getScaledCords = function (points, scale) {\n    if (scale === void 0) { scale = 1; }\n    return points.map(function (point) {\n        return [point[0] / scale, point[1] / scale];\n    });\n};\nexports.getScaledCords = getScaledCords;\n\n\n//# sourceURL=webpack://polydraw/./src/utilities/getScaledCords.ts?");

/***/ }),

/***/ "./src/utilities/getShapeCenter.ts":
/*!*****************************************!*\
  !*** ./src/utilities/getShapeCenter.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getShapeCenter = void 0;\nvar svg_js_1 = __webpack_require__(/*! @svgdotjs/svg.js */ \"@svgdotjs/svg.js\");\nvar getShapeCenter = function (path) {\n    var xArray = path.map(function (e) { return e[0]; });\n    var yArray = path.map(function (e) { return e[1]; });\n    var xMax = Math.max.apply(Math, xArray);\n    var xMin = Math.min.apply(Math, xArray);\n    var yMax = Math.max.apply(Math, yArray);\n    var yMin = Math.min.apply(Math, yArray);\n    var x = xMin + (xMax - xMin) / 2;\n    var y = yMin + (yMax - yMin) / 2;\n    return new svg_js_1.Point(x, y);\n};\nexports.getShapeCenter = getShapeCenter;\n\n\n//# sourceURL=webpack://polydraw/./src/utilities/getShapeCenter.ts?");

/***/ }),

/***/ "./src/utilities/index.ts":
/*!********************************!*\
  !*** ./src/utilities/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.polygon2object = exports.isCordsInside = exports.getShapeCenter = exports.getScaledCords = exports.getRelativeCords = exports.getRandomId = exports.getMouseCords = exports.getImageScale = exports.getImage = exports.getCenteredCords = void 0;\nvar getCenteredCords_1 = __webpack_require__(/*! ./getCenteredCords */ \"./src/utilities/getCenteredCords.ts\");\nObject.defineProperty(exports, \"getCenteredCords\", ({ enumerable: true, get: function () { return getCenteredCords_1.getCenteredCords; } }));\nvar getImage_1 = __webpack_require__(/*! ./getImage */ \"./src/utilities/getImage.ts\");\nObject.defineProperty(exports, \"getImage\", ({ enumerable: true, get: function () { return getImage_1.getImage; } }));\nvar getImageScale_1 = __webpack_require__(/*! ./getImageScale */ \"./src/utilities/getImageScale.ts\");\nObject.defineProperty(exports, \"getImageScale\", ({ enumerable: true, get: function () { return getImageScale_1.getImageScale; } }));\nvar getMouseCords_1 = __webpack_require__(/*! ./getMouseCords */ \"./src/utilities/getMouseCords.ts\");\nObject.defineProperty(exports, \"getMouseCords\", ({ enumerable: true, get: function () { return getMouseCords_1.getMouseCords; } }));\nvar getRelativeCords_1 = __webpack_require__(/*! ./getRelativeCords */ \"./src/utilities/getRelativeCords.ts\");\nObject.defineProperty(exports, \"getRelativeCords\", ({ enumerable: true, get: function () { return getRelativeCords_1.getRelativeCords; } }));\nvar getShapeCenter_1 = __webpack_require__(/*! ./getShapeCenter */ \"./src/utilities/getShapeCenter.ts\");\nObject.defineProperty(exports, \"getShapeCenter\", ({ enumerable: true, get: function () { return getShapeCenter_1.getShapeCenter; } }));\nvar getScaledCords_1 = __webpack_require__(/*! ./getScaledCords */ \"./src/utilities/getScaledCords.ts\");\nObject.defineProperty(exports, \"getScaledCords\", ({ enumerable: true, get: function () { return getScaledCords_1.getScaledCords; } }));\nvar getRandomId_1 = __webpack_require__(/*! ./getRandomId */ \"./src/utilities/getRandomId.ts\");\nObject.defineProperty(exports, \"getRandomId\", ({ enumerable: true, get: function () { return getRandomId_1.getRandomId; } }));\nvar isCordsInside_1 = __webpack_require__(/*! ./isCordsInside */ \"./src/utilities/isCordsInside.ts\");\nObject.defineProperty(exports, \"isCordsInside\", ({ enumerable: true, get: function () { return isCordsInside_1.isCordsInside; } }));\nvar polygon2object_1 = __webpack_require__(/*! ./polygon2object */ \"./src/utilities/polygon2object.ts\");\nObject.defineProperty(exports, \"polygon2object\", ({ enumerable: true, get: function () { return polygon2object_1.polygon2object; } }));\n\n\n//# sourceURL=webpack://polydraw/./src/utilities/index.ts?");

/***/ }),

/***/ "./src/utilities/isCordsInside.ts":
/*!****************************************!*\
  !*** ./src/utilities/isCordsInside.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isCordsInside = void 0;\nvar isCordsInside = function (src, dest, round) {\n    if (round === void 0) { round = 2; }\n    return (dest.x + round > src.x &&\n        dest.x - round < src.x &&\n        dest.y + round > src.y &&\n        dest.y - round < src.y);\n};\nexports.isCordsInside = isCordsInside;\n\n\n//# sourceURL=webpack://polydraw/./src/utilities/isCordsInside.ts?");

/***/ }),

/***/ "./src/utilities/polygon2object.ts":
/*!*****************************************!*\
  !*** ./src/utilities/polygon2object.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.polygon2object = void 0;\nvar svg_js_1 = __webpack_require__(/*! @svgdotjs/svg.js */ \"@svgdotjs/svg.js\");\nvar polygon2object = function (polygon, scale) {\n    if (scale === void 0) { scale = 1; }\n    return {\n        points: polygon.points.map(function (_a) {\n            var cords = _a.cords;\n            return new svg_js_1.Point(cords.x * scale, cords.y * scale);\n        }),\n    };\n};\nexports.polygon2object = polygon2object;\n\n\n//# sourceURL=webpack://polydraw/./src/utilities/polygon2object.ts?");

/***/ }),

/***/ "@svgdotjs/svg.draggable.js":
/*!*********************************************!*\
  !*** external "@svgdotjs/svg.draggable.js" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@svgdotjs/svg.draggable.js");

/***/ }),

/***/ "@svgdotjs/svg.js":
/*!***********************************!*\
  !*** external "@svgdotjs/svg.js" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@svgdotjs/svg.js");

/***/ }),

/***/ "ts-deepmerge":
/*!*******************************!*\
  !*** external "ts-deepmerge" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("ts-deepmerge");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;