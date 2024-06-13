'use strict'

function onInit() {
    gElCanvas = document.getElementById('myCanvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
    renderGallery()
    document.querySelector('.gallery-container').classList.remove('hidden')
    document.querySelector('.editor-container').classList.add('hidden')
}


function switchView() {
    const galleryContainer = document.querySelector('.gallery-container')
    const canvasContainer = document.querySelector('.editor-container')
    galleryContainer.classList.toggle('hidden')
    canvasContainer.classList.toggle('hidden')
}
