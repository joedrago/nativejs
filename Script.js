require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"SomeClass":[function(require,module,exports){
var SomeClass;

SomeClass = (function() {
  function SomeClass() {
    log('SomeClass constructor');
  }

  return SomeClass;

})();

module.exports = SomeClass;



},{}]},{},[]);
// Generated by CoffeeScript 1.9.1
var SomeClass, gGame, log, shutdown, startup, update;

SomeClass = require('SomeClass');

gGame = null;

log = function(s) {
  if (gGame !== null) {
    return gGame.log(s);
  }
};

startup = function(game) {
  var derp;
  gGame = game;
  log("startup");
  return derp = new SomeClass;
};

shutdown = function() {
  return log("shutdown");
};

update = function() {
  return log("update");
};
