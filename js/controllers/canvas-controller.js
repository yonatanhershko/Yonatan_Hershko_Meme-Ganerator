
'use strict'

var gElCanvas
var gCtx
var gText =''
var gTextColor = '#ff0000'



function onTextChange(event) {
    console.log(event)
   gText = event.target.value
    updateCanvas(gText)
    renderMeme()
}

function textColor(ev) {
    gTextColor = ev.target.value
    updateCanvas(gText)
    renderMeme()
}

function downloadCanvas(elLink) {
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'my-img'
}