// 加密
export const mergeData = (ctx, newData, color, originalData) => {
  const originData = originalData.data
  // bit 目标通道
  let bit, offset

  switch (color) {
    case 'R':
      bit = 0
      offset = 3
      break
    case 'G':
      bit = 1
      offset = 2
      break
    case 'B':
      bit = 2
      offset = 1
      break
    default:
      break
  }

  // 修改图片该通道分量的最低位，如果有文字信息，则最低位置为 1，否则为 0。
  for (let i = 0; i < originData.length; i++) {
    if (i % 4 === bit) {
      // 带文字图片的a通道位为0，且原始图片R通道为奇数
      if (newData[i + offset] === 0 && originData[i] % 2 === 1) {
        if (originData[i] === 255) {
          originData[i]--
        } else {
          originData[i]++
        }
      } else if (newData[i + offset] !== 0 && originData[i] % 2 === 0) {
        //  有信息的像素，该通道最低位置1，可以想想上面的斑点效果是怎么实现的
        originData[i]++
      }
    }
  }
  ctx.putImageData(originalData, 0, 0)
}
