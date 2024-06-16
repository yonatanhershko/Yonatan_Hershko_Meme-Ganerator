'use strict'

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

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


/* Touch */
function addTouchListeners() {
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchend', onUp)
}

function removeTouchListeners() {
    gElCanvas.removeEventListener('touchstart', onDown)
    gElCanvas.removeEventListener('touchmove', onMove)
    gElCanvas.removeEventListener('touchend', onUp)
}

function getEvPos(ev) {

    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }

    if (TOUCH_EVS.includes(ev.type)) {

        ev.preventDefault()
        ev = ev.changedTouches[0]
       
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
       
    }
    return pos
}