'use strict'

function onInit() {
    gElCanvas = document.getElementById('myCanvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
    renderGallery()
}
