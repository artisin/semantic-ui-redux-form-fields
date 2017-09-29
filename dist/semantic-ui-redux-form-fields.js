/*!
 * The MIT License
 * 
 * Copyright (c) 2017 te schultz
 * https://github.com/artisin/semantic-ui-redux-form-fields
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */


/* eslint-disable */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("recompose/withProps"), require("recompose/setDisplayName"), require("recompose/pure"), require("recompose/compose"), require("semantic-ui-react/dist/commonjs/addons/TextArea/TextArea"), require("semantic-ui-react/dist/commonjs/addons/Radio/Radio"), require("semantic-ui-react/dist/commonjs/elements/Input/Input"), require("semantic-ui-react/dist/commonjs/collections/Form/Form"), require("semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown"), require("semantic-ui-react/dist/commonjs/modules/Checkbox/Checkbox"), require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["recompose/withProps", "recompose/setDisplayName", "recompose/pure", "recompose/compose", "semantic-ui-react/dist/commonjs/addons/TextArea/TextArea", "semantic-ui-react/dist/commonjs/addons/Radio/Radio", "semantic-ui-react/dist/commonjs/elements/Input/Input", "semantic-ui-react/dist/commonjs/collections/Form/Form", "semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown", "semantic-ui-react/dist/commonjs/modules/Checkbox/Checkbox", "react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["semantic-ui-redux-form-fields"] = factory(require("recompose/withProps"), require("recompose/setDisplayName"), require("recompose/pure"), require("recompose/compose"), require("semantic-ui-react/dist/commonjs/addons/TextArea/TextArea"), require("semantic-ui-react/dist/commonjs/addons/Radio/Radio"), require("semantic-ui-react/dist/commonjs/elements/Input/Input"), require("semantic-ui-react/dist/commonjs/collections/Form/Form"), require("semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown"), require("semantic-ui-react/dist/commonjs/modules/Checkbox/Checkbox"), require("react"), require("prop-types"));
	else
		root["semantic-ui-redux-form-fields"] = factory(root["recompose/withProps"], root["recompose/setDisplayName"], root["recompose/pure"], root["recompose/compose"], root["semantic-ui-react/dist/commonjs/addons/TextArea/TextArea"], root["semantic-ui-react/dist/commonjs/addons/Radio/Radio"], root["semantic-ui-react/dist/commonjs/elements/Input/Input"], root["semantic-ui-react/dist/commonjs/collections/Form/Form"], root["semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown"], root["semantic-ui-react/dist/commonjs/modules/Checkbox/Checkbox"], root["react"], root["prop-types"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldEnhance", function() { return fieldEnhance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return TextArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose_withProps__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose_withProps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recompose_withProps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_setDisplayName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_setDisplayName___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose_setDisplayName__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_pure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_pure___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose_pure__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose_compose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react_dist_commonjs_addons_TextArea_TextArea__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react_dist_commonjs_addons_TextArea_TextArea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react_dist_commonjs_addons_TextArea_TextArea__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react_dist_commonjs_addons_Radio_Radio__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react_dist_commonjs_addons_Radio_Radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react_dist_commonjs_addons_Radio_Radio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react_dist_commonjs_elements_Input_Input__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react_dist_commonjs_elements_Input_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react_dist_commonjs_elements_Input_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_semantic_ui_react_dist_commonjs_collections_Form_Form__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_semantic_ui_react_dist_commonjs_collections_Form_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_semantic_ui_react_dist_commonjs_collections_Form_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_semantic_ui_react_dist_commonjs_modules_Dropdown_Dropdown__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_semantic_ui_react_dist_commonjs_modules_Dropdown_Dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_semantic_ui_react_dist_commonjs_modules_Dropdown_Dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_semantic_ui_react_dist_commonjs_modules_Checkbox_Checkbox__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_semantic_ui_react_dist_commonjs_modules_Checkbox_Checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_semantic_ui_react_dist_commonjs_modules_Checkbox_Checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_prop_types__);
var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};function _objectWithoutProperties(a,b){var c={};for(var d in a)0<=b.indexOf(d)||Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]);return c}var defaultPropTypes={className:__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string,currentValue:__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.any,custom:__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.object,fieldClass:__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string,input:__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.object.isRequired,inputLabel:__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string,label:__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string,meta:__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.shape({error:__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string,touched:__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool}),required:__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,topLabel:__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string},formFieldStyles={paddingBottom:'0.75em',paddingLeft:'0',position:'relative'},merge=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return Object.assign.apply(Object,[{}].concat(b))},applyCustomFuncs=function(a,b){return['onBlur','onChange','onDragStart','onDrop','onFocus'].forEach(function(c){if(c+='Custom','function'==typeof a[c]){var d=a[c];a[c.replace('Custom','')]=function(){for(var a=arguments.length,c=Array(a),e=0;e<a;e++)c[e]=arguments[e];return d.apply(void 0,[b].concat(c))},delete a[c]}}),a},ErrorMsg=function(a){var b=a.touched,c=a.error;return b&&c?__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement('span',{className:'Semantic-redux-form-error',style:{color:'#9F3A38',position:'absolute',bottom:'-1em',left:'0.05em'}},c):null},formFieldProps=function(a){var b=a.className,c=a.error,d=a.fieldClass,e=a.required,f=a.touched;return{error:f&&c,className:(d||'')+' '+(b||'')+' Semantic-redux-form-field',required:e,style:formFieldStyles}},fieldEnhance=function(a){var b=function(b){var c=b.className,d=b.fieldClass,e=b.inputLabel,f=b.meta,g=f.touched,h=f.error,i=b.required,j=b.topLabel,k=_objectWithoutProperties(b,['className','fieldClass','inputLabel','meta','required','topLabel']);return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Field,formFieldProps({className:c,fieldClass:d,error:h,required:i,touched:g}),__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement('label',null,j?j:null),__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(a,k),__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(ErrorMsg,{touched:g,error:h}))};b.propTypes=defaultPropTypes;var c=a.displayName||a.name||'Component';return b.displayName='fieldEnhance('+c,b};var InputPure=function(a){var b=a.currentValue,c=a.input,d=_objectWithoutProperties(a,['currentValue','input']),e=merge({value:b},applyCustomFuncs(d,c));return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react_dist_commonjs_elements_Input_Input___default.a,_extends({},c,e))};InputPure.propTypes=defaultPropTypes;var Input=__WEBPACK_IMPORTED_MODULE_3_recompose_compose___default()(__WEBPACK_IMPORTED_MODULE_1_recompose_setDisplayName___default()('Input'),__WEBPACK_IMPORTED_MODULE_0_recompose_withProps___default()({fieldClass:'Input'}),fieldEnhance,__WEBPACK_IMPORTED_MODULE_2_recompose_pure___default.a)(InputPure);var TextAreaPure=function(a){var b=a.currentValue,c=a.input,d=_objectWithoutProperties(a,['currentValue','input']),e=merge({autoHeight:!0,value:b},applyCustomFuncs(d,c));return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react_dist_commonjs_addons_TextArea_TextArea___default.a,_extends({},c,e))};TextAreaPure.propTypes=defaultPropTypes;var TextArea=__WEBPACK_IMPORTED_MODULE_3_recompose_compose___default()(__WEBPACK_IMPORTED_MODULE_1_recompose_setDisplayName___default()('TextArea'),__WEBPACK_IMPORTED_MODULE_0_recompose_withProps___default()({fieldClass:'TextArea'}),fieldEnhance,__WEBPACK_IMPORTED_MODULE_2_recompose_pure___default.a)(TextAreaPure);var DropdownPure=function(a){var b=a.currentValue,c=a.input,d=_objectWithoutProperties(a,['currentValue','input']),e=merge({fluid:!0,multiple:!1,onChange:function onChange(a,b){return c.onChange(b.value)},search:!0,selection:!0,value:b},applyCustomFuncs(d,c));return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_semantic_ui_react_dist_commonjs_modules_Dropdown_Dropdown___default.a,_extends({},c,e))};DropdownPure.propTypes=merge(defaultPropTypes,{options:__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.array.isRequired});var Dropdown=__WEBPACK_IMPORTED_MODULE_3_recompose_compose___default()(__WEBPACK_IMPORTED_MODULE_1_recompose_setDisplayName___default()('Dropdown'),__WEBPACK_IMPORTED_MODULE_0_recompose_withProps___default()({fieldClass:'Dropdown'}),fieldEnhance,__WEBPACK_IMPORTED_MODULE_2_recompose_pure___default.a)(DropdownPure);var CheckBoxPure=function(a){var b=a.currentValue,c=a.input,d=_objectWithoutProperties(a,['currentValue','input']),e=merge({checked:b,onChange:function onChange(a,b){return c.onChange(b.checked)}},applyCustomFuncs(d,c));return delete c.value,__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_semantic_ui_react_dist_commonjs_modules_Checkbox_Checkbox___default.a,_extends({},c,e))};CheckBoxPure.propTypes=defaultPropTypes;var Checkbox=__WEBPACK_IMPORTED_MODULE_3_recompose_compose___default()(__WEBPACK_IMPORTED_MODULE_1_recompose_setDisplayName___default()('CheckBox'),__WEBPACK_IMPORTED_MODULE_0_recompose_withProps___default()({fieldClass:'CheckBox'}),fieldEnhance,__WEBPACK_IMPORTED_MODULE_2_recompose_pure___default.a)(CheckBoxPure);var RadioPure=function(a){var b=a.currentValue,c=a.input,d=_objectWithoutProperties(a,['currentValue','input']),e=merge({checked:b,onChange:function onChange(a,b){return c.onChange(b.checked)}},applyCustomFuncs(d,c));return delete c.value,__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react_dist_commonjs_addons_Radio_Radio___default.a,_extends({},c,e))};RadioPure.propTypes=defaultPropTypes;var Radio=__WEBPACK_IMPORTED_MODULE_3_recompose_compose___default()(__WEBPACK_IMPORTED_MODULE_1_recompose_setDisplayName___default()('Radio'),__WEBPACK_IMPORTED_MODULE_0_recompose_withProps___default()({fieldClass:'Radio'}),fieldEnhance,__WEBPACK_IMPORTED_MODULE_2_recompose_pure___default.a)(RadioPure);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("recompose/withProps");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("recompose/setDisplayName");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("recompose/pure");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("recompose/compose");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/addons/TextArea/TextArea");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/addons/Radio/Radio");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Input/Input");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/collections/Form/Form");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/modules/Checkbox/Checkbox");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ })
/******/ ]);
});
//# sourceMappingURL=semantic-ui-redux-form-fields.js.map