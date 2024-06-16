
'use strict'
var gElCanvas
var gCtx
let gIsDragging = false
let gDragStartX, gDragStartY

function downloadCanvas(elLink) {
    renderMeme()
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'my-img'
  }


function onDown(ev) {
    ev.preventDefault() 

    const { offsetX, offsetY } = ev
    const meme = getMeme()
    const selectedLine = meme.lines[meme.selectedLineIdx]

    if (
        offsetX >= selectedLine.x - selectedLine.width / 2 &&
        offsetX <= selectedLine.x + selectedLine.width / 2 &&
        offsetY >= selectedLine.y &&
        offsetY <= selectedLine.y + selectedLine.height
    ) {
        gIsDragging = true
        gDragStartX = offsetX - selectedLine.x
        gDragStartY = offsetY - selectedLine.y
    }
}

function onMove(ev) {
    ev.preventDefault()
    if (gIsDragging) {
        const { offsetX, offsetY } = ev
        const meme = getMeme()
        const selectedLine = meme.lines[meme.selectedLineIdx]

        selectedLine.x = offsetX - gDragStartX
        selectedLine.y = offsetY - gDragStartY
        renderMeme() 
    }
}

function onUp() {
    gIsDragging = false
}


///Img resize
// function resizeCanvas() {
//     const elContainer = document.querySelector('.canvas-container')
//     gElCanvas.width = elContainer.clientWidth
//     renderMeme()
//   }