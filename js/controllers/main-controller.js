'use strict'

function onInit() {
    gElCanvas = document.getElementById('myCanvas')
    gCtx = gElCanvas.getContext('2d')
    gElCanvas.addEventListener('click', onMouseClick)
    renderMeme()
    renderGallery()
    // addListeners()
    document.querySelector('.gallery-container').classList.remove('hidden')
    document.querySelector('.editor-container').classList.add('hidden')
    updateTextInput()
}


function switchView() {
    const galleryContainer = document.querySelector('.gallery-container')
    const canvasContainer = document.querySelector('.editor-container')
    const topGallerySearch = document.querySelector('.top-gallery-search')
    topGallerySearch.classList.toggle('hidden')
    galleryContainer.classList.toggle('hidden')
    canvasContainer.classList.toggle('hidden')
}
