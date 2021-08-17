'use strict';

var _processData = require('./processData');

var _mergeData = require('./mergeData');

// 编码
var encodeImg = function encodeImg(src) {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.crossOrigin = '';
  ctx.font = '30px Microsoft Yahei';
  ctx.fillText('小柒爱前端', 60, 130);
  var textData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height).data;
  console.log(textData, 'textData');
  img.onload = function () {
    // 获取指定区域的canvas像素信息
    ctx.drawImage(img, 0, 0);
    var originalData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    // mergeData(ctx, textData, 'R', originalData)
  };
  img.src = src;
};

// 解码
var decodeImg = function decodeImg(src) {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.crossOrigin = '';
  img.onload = function () {
    // 获取指定区域的canvas像素信息
    ctx.drawImage(img, 0, 0);
    var originalData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    console.log(originalData);
    (0, _processData.processData)(ctx, originalData);
  };
  img.src = src;
};

/**
 * 1、对于跨域的图片，只要能够在网页中正常显示出来，就可以使用canvas的drawImage() API绘制出来。
 *   但是如果你想更进一步，通过getImageData()方法获取图片的完整的像素信息，则多半会出错。
 * 2、 crossOrigin属性解决canvas getImageData 跨域问题。
 *  crossOrigin 值有两个anonymous，use-credentials,只要不设置为use-credentials全部都会解析为anonymous，
 *  包括空字符串，包括类似'abc'这样的字符。
 * 3、crossOrigin属性为什么可以解决资源跨域问题？
 *   crossOrigin=anonymous相对于告诉对方服务器，你不需要带任何非匿名信息过来。例如cookie。
 * */
encodeImg('https://images.unsplash.com/photo-1629021132271-201c5076f9b0?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=600');

// decodeImg('./a.png')