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