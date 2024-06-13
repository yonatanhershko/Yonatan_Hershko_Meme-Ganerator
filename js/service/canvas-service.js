'use strict'

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
