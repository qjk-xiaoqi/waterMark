import { createWaterMark } from './create'

const waterMark = document.createElement('div')
waterMark.className = 'watermark'
waterMark.style.backgroundImage = `url(${createWaterMark()})`
document.body.appendChild(waterMark)
