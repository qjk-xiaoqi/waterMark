import { cssHelper, createItem } from './wart-mark'
// 设置水印的宽高
const warkMarkWidth = 180
const warkMarkHeight = 100
// 计算屏幕宽高
const { clientWidth, clientHeight } = document.documentElement || document.body
const clown = Math.ceil(clientWidth / warkMarkWidth)
const rows = Math.ceil(clientHeight / warkMarkHeight)
const waterWrapper = document.createElement('div')
waterWrapper.setAttribute('class', 'water-wrapper')
cssHelper(waterWrapper, {
  display: 'flex',
  flexWrap: 'wrap',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
})
// 生成水印的个数
for (let i = 0; i < clown * rows; i++) {
  const warkMarkBox = document.createElement('div')
  warkMarkBox.setAttribute('class', 'wark-mark-box')
  cssHelper(
    warkMarkBox,
    Object.create({
      position: 'relative',
      width: `${warkMarkWidth}px`,
      height: `${warkMarkHeight}px`,
      flex: `0 0 ${warkMarkWidth}px`,
      overflow: 'hidden',
    })
  )
  warkMarkBox.appendChild(createItem())
  waterWrapper.appendChild(warkMarkBox)
}
document.body.appendChild(waterWrapper)
