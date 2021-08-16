(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createWaterMark = exports.createWaterMark = function createWaterMark() {
  var angle = -20;
  var text = '小柒爱前端';
  var canvas = document.createElement('canvas');
  canvas.width = 180;
  canvas.height = 100;
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 180, 100);
  ctx.fillStyle = '#000';
  ctx.font = '16px serif';
  ctx.globalAlpha = 0.1;
  ctx.rotate(angle * Math.PI / 180);
  ctx.fillText(text, 30, 80); // 开始绘制文本的坐标
  return canvas.toDataURL(); // 转化为图片
};
},{}],2:[function(require,module,exports){
'use strict';

var _create = require('./create');

var waterMark = document.createElement('div');
waterMark.className = 'watermark';
waterMark.style.backgroundImage = 'url(' + (0, _create.createWaterMark)() + ')';
document.body.appendChild(waterMark);
},{"./create":1}]},{},[2]);
