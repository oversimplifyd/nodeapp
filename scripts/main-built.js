(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// main.js using browserify 
var ajax = require('./modules/ajax');
var router = require('./modules/router');
// modules/ajax.js
module.exports = function() {};
// modules/router.js
module.exports = function() {};
},{"./modules/ajax":2,"./modules/router":3}],2:[function(require,module,exports){
// modules/ajax.js
define(function () {
    // the Ajax request implementation
    // public API
    return {
        request: function () { }
    }
});
},{}],3:[function(require,module,exports){

},{}]},{},[1]);
