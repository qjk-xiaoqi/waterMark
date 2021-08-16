export const createWaterMark = () => {
  const angle = -20
  const text = '小柒爱前端'
  const canvas = document.createElement('canvas')
  canvas.width = 180
  canvas.height = 100
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, 180, 100)
  ctx.fillStyle = '#000'
  ctx.font = `16px serif`
  ctx.globalAlpha = 0.1
  ctx.rotate((angle * Math.PI) / 180)
  ctx.fillText(text, 30, 80) // 开始绘制文本的坐标
  return canvas.toDataURL() // 转化为图片
}
