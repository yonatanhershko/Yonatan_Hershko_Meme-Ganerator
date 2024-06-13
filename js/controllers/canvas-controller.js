
'use strict'

var gElCanvas
var gCtx
var gText =''
var gTextColor = '#ff0000'



function onTextChange(event) {
    console.log(event)
   gText = event.target.value
    updateCanvas(gText)
}

function updateCanvas(text) {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)

    // Draw the text
    gCtx.font = '32px Arial'
    gCtx.fillStyle = gTextColor
    gCtx.lineWidth = 1

    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'top'
    gCtx.fillText(text, gElCanvas.width / 2, 10) // Adjust the y-coordinate to 10
    gCtx.strokeText(text, gElCanvas.width / 2, 10)
}

function textColor(ev) {
    gTextColor = ev.target.value
    updateCanvas(gText)
}