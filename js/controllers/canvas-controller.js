
'use strict'
var gIsDrawing
var gElCanvas
var gCtx
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']


function downloadCanvas(elLink) {
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'my-img'
}


