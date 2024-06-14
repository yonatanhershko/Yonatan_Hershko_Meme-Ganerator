'use strict'


function addListeners() {
    addMouseListeners()
    removeMouseListeners() 

    window.addEventListener('resize', () => {
        renderMeme() 
    })
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mouseup', onUp)
}


function removeMouseListeners() {
    gElCanvas.removeEventListener('mousedown', onDown)
    gElCanvas.removeEventListener('mousemove', onMove)
    gElCanvas.removeEventListener('mouseup', onUp)
}
