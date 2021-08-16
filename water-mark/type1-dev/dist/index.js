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