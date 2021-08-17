'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 原理：R(红色)G(绿)B(蓝)分量值的小量变动，是肉眼无法分辨的，不影响对图片的识别。
 * @param {*} ctx
 * @param {*} newData
 * @param {*} color
 * @param {*} originalData
 */
// 加密
var mergeData = exports.mergeData = function mergeData(ctx, newData, color, originalData) {
  console.log(newData, 'newData');
  var originData = originalData.data;
  // bit 目标通道  offset的作用是找到alpha通道值
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

  /**
   * 将文字信息混入原始图片。原理利用给R、G、B任意通道的值加1,不影响用户的视觉体验。
   * 加密算法（自己选择）具体实现 以R通道为例：
   * 如果文字图片该通道无文字信息（利用a通道是否为0判断）,且原图的该通道为奇数，该通道值加1（注意最大值为255，最小值为0）
   * 如果文字图片该通道有文字信息（利用a通道是否为0判断）,原图的该通道为奇数的不做处理，将原图的该通道为偶数的加1 （注意最大值为255，最小值为0）
   * 这样绘制的整张图中文字信息的都是混入到R通道值为奇数的位置（这样解密的时候就对R通道中奇数值做处理就好了）
   */
  for (var i = 0; i < originData.length; i++) {
    if (i % 4 === bit) {
      // 带文字图片的a通道位为0(无文字信息)，且原始图片该通道为奇数
      if (newData[i + offset] === 0 && originData[i] % 2 === 1) {
        if (originData[i] === 255) {
          originData[i]--;
        } else {
          originData[i]++;
        }
      } else if (newData[i + offset] !== 0 && originData[i] % 2 === 0) {
        //  有文字信息的像素 且原始图片该通道为偶数
        if (originData[i] === 255) {
          originData[i]--;
        } else {
          originData[i]++;
        }
      }
    }
  }
  ctx.putImageData(originalData, 0, 0);
};