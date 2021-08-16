(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _wartMark = require('./wart-mark');

// 设置水印的宽高
var warkMarkWidth = 180;
var warkMarkHeight = 100;
// 计算屏幕宽高

var _ref = document.documentElement || document.body,
    clientWidth = _ref.clientWidth,
    clientHeight = _ref.clientHeight;

var clown = Math.ceil(clientWidth / warkMarkWidth);
var rows = Math.ceil(clientHeight / warkMarkHeight);
var waterWrapper = document.createElement('div');
waterWrapper.setAttribute('class', 'water-wrapper');
(0, _wartMark.cssHelper)(waterWrapper, {
  display: 'flex',
  flexWrap: 'wrap',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
});
// 生成水印的个数
for (var i = 0; i < clown * rows; i++) {
  var warkMarkBox = document.createElement('div');
  warkMarkBox.setAttribute('class', 'wark-mark-box');
  (0, _wartMark.cssHelper)(warkMarkBox, Object.create({
    position: 'relative',
    width: warkMarkWidth + 'px',
    height: warkMarkHeight + 'px',
    flex: '0 0 ' + warkMarkWidth + 'px',
    overflow: 'hidden'
  }));
  warkMarkBox.appendChild((0, _wartMark.createItem)());
  waterWrapper.appendChild(warkMarkBox);
}
document.body.appendChild(waterWrapper);
},{"./wart-mark":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 水印样式
var cssHelper = exports.cssHelper = function cssHelper(warkMarkBox, attributes) {
  for (var i in attributes) {
    warkMarkBox.style[i] = attributes[i];
  }
};

var createItem = exports.createItem = function createItem() {
  var wartMark = document.createElement('div');
  wartMark.innerHTML = '小柒爱前端';
  cssHelper(wartMark, {
    position: 'absolute',
    top: '50px',
    left: '50px',
    fontSize: '16px',
    color: '#000',
    lineHeight: 1.5,
    opacity: 0.1,
    transform: 'rotate(-15deg)',
    transformOrigin: '0 0',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  });
  return wartMark;
};
},{}]},{},[1]);
