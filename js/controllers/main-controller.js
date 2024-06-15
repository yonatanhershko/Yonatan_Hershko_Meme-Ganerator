'use strict'

let galleryContainerDis = document.querySelector('.gallery-container')
let canvasContainerDis = document.querySelector('.editor-container')
let topGallerySearchDis = document.querySelector('.top-gallery-search')
let footerDis = document.querySelector('.footer-container')
let aboutMeDis = document.querySelector('.aboutme-container')
let saveMemeDis =  document.querySelector('.saved-meme-container')


function onInit() {
    gElCanvas = document.getElementById('myCanvas')
    gCtx = gElCanvas.getContext('2d')
    gElCanvas.addEventListener('click', onMouseClick)
    renderMeme()
    renderGallery()
    addListeners()
    // onRenderSavedGallery()

    document.querySelector('.gallery-container').classList.remove('hidden')
    document.querySelector('.editor-container').classList.add('hidden')
    document.querySelector('.aboutme-container').classList.add('hidden')
    document.querySelector('.saved-meme-container').classList.add('hidden')
    updateTextInput()
}


function showEditor() {
    canvasContainerDis.classList.remove('hidden')

    galleryContainerDis.classList.add('hidden')
    topGallerySearchDis.classList.add('hidden')
    footerDis.classList.add('hidden')
    aboutMeDis.classList.add('hidden')
    saveMemeDis.classList.add('hidden')
   

}


function onShowGallery() {
    galleryContainerDis.classList.remove('hidden')
    topGallerySearchDis.classList.remove('hidden')
    footerDis.classList.remove('hidden')

    canvasContainerDis.classList.add('hidden')
    aboutMeDis.classList.add('hidden')
    saveMemeDis.classList.add('hidden')
}

function onShowAbout() {
    galleryContainerDis.classList.add('hidden')
    canvasContainerDis.classList.add('hidden')
    topGallerySearchDis.classList.add('hidden')
    saveMemeDis.classList.add('hidden')

    footerDis.classList.remove('hidden')
    aboutMeDis.classList.remove('hidden')
}

function onShowSavedMemes() {
    saveMemeDis.classList.remove('hidden')
    footerDis.classList.remove('hidden')

    aboutMeDis.classList.add('hidden')
    galleryContainerDis.classList.add('hidden')
    canvasContainerDis.classList.add('hidden')
    topGallerySearchDis.classList.add('hidden')
    saveMemeDis.classList.add('hidden')
}

function toggleMenu() {
    document.body.classList.toggle("menu-open")

}