// 解密
export const processData = (ctx, originData) => {
  const data = originData.data
  for (let i = 0; i < data.length; i++) {
    if (i % 4 === 0) {
      // 处理 R 通道
      if (data[i] % 2 === 0) {
        data[i] = 0
      } else {
        data[i] = 255
      }
    } else if (i % 4 === 3) {
      // a 通道不做处理
      continue
    } else {
      // 关闭其他通道 这样处理更美观
      data[i] = 0
    }
  }
  ctx.putImageData(originData, 0, 0)
}
