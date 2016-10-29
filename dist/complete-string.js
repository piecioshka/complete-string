(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CompleteString"] = factory();
	else
		root["CompleteString"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * @author Piotr Kowalski <piecioshka@gmail.com> (piecioshka.pl)
	 * @name complete-string
	 * @description CompleteString string by any char. This repo is some kind of polyfill for ES7 padLeft.
	 * @version 2.1.2
	 * @license MIT
	 * @example
	 * CompleteString.withChar(' batman', 10, 'a') // => 'aaa batman'
	 * @example
	 * var date = new Date();
	 * CompleteString.withZero(date.getMonth(), 2) // => '05'
	 */
	
	'use strict';
	
	/**
	 * Check truly value. Otherwise throws error.
	 *
	 * @param {boolean} cond
	 * @param {string} message
	 */
	function assert(cond, message) {
	    if (!cond) {
	        throw new Error(message);
	    }
	}
	
	/**
	 * Main module.
	 *
	 * @type {{withChar: Function, withZero: Function}}
	 */
	var CompleteString = {
	
	    /**
	     * Method which add `appender` sign to `chars` that, result length of returns string is length passed by `length`.
	     *
	     * @param {string|number} string
	     * @param {number} length
	     * @param {string|number} char
	     * @returns {string}
	     *
	     * @throw When `appender` is not a single char.
	     */
	    withChar: function (string, length, char) {
	        // Cast to strings.
	        string = String(string);
	        length = Number(length);
	        char = String(char);
	
	        if (string.length > length) {
	            return string;
	        }
	
	        assert(char.length === 1, 'CompleteString: char is not a single char.');
	
	        var diff = (length - string.length);
	        var complement = (new Array(diff + 1)).join(char);
	
	        return complement + string;
	    },
	
	    /**
	     * Append chars passed in first param with `0` char.
	     *
	     * @param {string|number} string
	     * @param {number} length
	     * @returns {string}
	     */
	    withZero: function (string, length) {
	        return this.withChar(string, length, '0');
	    }
	
	};
	
	module.exports = CompleteString;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=complete-string.js.map