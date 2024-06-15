'use strict'

let galleryContainer = document.querySelector('.gallery-container')
let canvasContainer = document.querySelector('.editor-container')
let topGallerySearch = document.querySelector('.top-gallery-search')
let footer = document.querySelector('.footer-container')
let aboutMe = document.querySelector('.aboutme-container')



function onInit() {
    gElCanvas = document.getElementById('myCanvas')
    gCtx = gElCanvas.getContext('2d')
    gElCanvas.addEventListener('click', onMouseClick)
    renderMeme()
    renderGallery()
    addListeners()

    document.querySelector('.gallery-container').classList.remove('hidden')
    document.querySelector('.editor-container').classList.add('hidden')
    document.querySelector('.aboutme-container').classList.add('hidden')

    updateTextInput()
}


function showEditor() {
    canvasContainer.classList.remove('hidden')

    galleryContainer.classList.add('hidden')
    topGallerySearch.classList.add('hidden')
    footer.classList.add('hidden')
    aboutMe.classList.add('hidden')
   

}


function onShowGallery() {
    galleryContainer.classList.remove('hidden')
    topGallerySearch.classList.remove('hidden')
    footer.classList.remove('hidden')

    canvasContainer.classList.add('hidden')
    aboutMe.classList.add('hidden')
}

function onShowAbout() {
    galleryContainer.classList.add('hidden')
    canvasContainer.classList.add('hidden')
    topGallerySearch.classList.add('hidden')

    footer.classList.remove('hidden')
    aboutMe.classList.remove('hidden')
}

function toggleMenu() {
    document.body.classList.toggle("menu-open")

}