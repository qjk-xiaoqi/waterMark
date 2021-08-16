(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 加密
var mergeData = exports.mergeData = function mergeData(ctx, newData, color, originalData) {
  var originData = originalData.data;
  // bit 目标通道
  var bit = void 0,
      offset = void 0;

  switch (color) {
    case 'R':
      bit = 0;
      offset = 3;
      break;
    case 'G':
      bit = 1;
      offset = 2;
      break;
    case 'B':
      bit = 2;
      offset = 1;
      break;
    default:
      break;
  }

  // 修改图片该通道分量的最低位，如果有文字信息，则最低位置为 1，否则为 0。
  for (var i = 0; i < originData.length; i++) {
    if (i % 4 === bit) {
      // 带文字图片的a通道位为0，且原始图片R通道为奇数
      if (newData[i + offset] === 0 && originData[i] % 2 === 1) {
        if (originData[i] === 255) {
          originData[i]--;
        } else {
          originData[i]++;
        }
      } else if (newData[i + offset] !== 0 && originData[i] % 2 === 0) {
        //  有信息的像素，该通道最低位置1，可以想想上面的斑点效果是怎么实现的
        originData[i]++;
      }
    }
  }
  ctx.putImageData(originalData, 0, 0);
};
},{}],2:[function(require,module,exports){
'use strict';

var _processData = require('./processData');

var _encryption = require('./encryption');

// 编码
var encodeImg = function encodeImg(src) {
  ctx.font = '30px Microsoft Yahei';
  ctx.fillText('小柒爱前端', 60, 130);
  var textData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height).data;
  /**
   * 1、对于跨域的图片，只要能够在网页中正常显示出来，就可以使用canvas的drawImage() API绘制出来。
   *   但是如果你想更进一步，通过getImageData()方法获取图片的完整的像素信息，则多半会出错。
   * 2、 crossOrigin属性解决canvas getImageData 跨域问题。
   *  crossOrigin 值有两个anonymous，use-credentials,只要不设置为use-credentials全部都会解析为anonymous，
   *  包括空字符串，包括类似'abc'这样的字符。
   * 3、crossOrigin属性为什么可以解决资源跨域问题？
   *   crossOrigin=anonymous相对于告诉对方服务器，你不需要带任何非匿名信息过来。例如cookie。
   * */
  img.onload = function () {
    // 获取指定区域的canvas像素信息
    ctx.drawImage(img, 0, 0);
    var originalData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    (0, _encryption.mergeData)(ctx, textData, 'R', originalData);
  };
  img.src = src;
};

// 解码
var decodeImg = function decodeImg(src) {
  img.onload = function () {
    // 获取指定区域的canvas像素信息
    ctx.drawImage(img, 0, 0);
    var originalData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    console.log(originalData);
    (0, _processData.processData)(ctx, originalData);
  };
  img.src = src;
};

var ctx = document.getElementById('canvas').getContext('2d');
var img = new Image();
img.crossOrigin = '';
// encodeImg(
//   'https://images.unsplash.com/photo-1629021132271-201c5076f9b0?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=600'
// )

decodeImg('./a.png');
// img.src = './canvas.png'
},{"./encryption":1,"./processData":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 解密
var processData = exports.processData = function processData(ctx, originData) {
  var data = originData.data;
  for (var i = 0; i < data.length; i++) {
    if (i % 4 === 0) {
      // 处理 R 通道
      if (data[i] % 2 === 0) {
        data[i] = 0;
      } else {
        data[i] = 255;
      }
    } else if (i % 4 === 3) {
      // a 通道不做处理
      continue;
    } else {
      // 关闭其他通道
      data[i] = 0;
    }
  }
  ctx.putImageData(originData, 0, 0);
};
},{}]},{},[2]);
