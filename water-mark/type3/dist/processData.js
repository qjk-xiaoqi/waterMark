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