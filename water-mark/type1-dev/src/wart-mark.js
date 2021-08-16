// 水印样式
export const cssHelper = (warkMarkBox, attributes) => {
  for (let i in attributes) {
    warkMarkBox.style[i] = attributes[i]
  }
}

export const createItem = () => {
  const wartMark = document.createElement('div')
  wartMark.innerHTML = '小柒爱前端'
  cssHelper(wartMark, {
    position: 'absolute',
    top: `50px`,
    left: `50px`,
    fontSize: `16px`,
    color: '#000',
    lineHeight: 1.5,
    opacity: 0.1,
    transform: `rotate(-15deg)`,
    transformOrigin: '0 0',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  })
  return wartMark
}
