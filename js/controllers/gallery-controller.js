
'use strict'



function renderGallery(imgs = gImgs) {
    var elGalleryContainer = document.querySelector('.gallery-container')
    const strHTMLs = imgs.map((img) => {
        return `<img src="${img.url}" alt="" onclick="onImgSelect(this)" class="card" data-img-id="${img.id}">`
    })
    elGalleryContainer.innerHTML = strHTMLs.join('')
}

function onNewImg() {
    document.querySelector('.imgUpload').click()
}


function onFilterBy(searchTerm) {
    const filteredMemes = getCurrMemes(searchTerm)
    const elGalleryContainer = document.querySelector('.gallery-container')

    if (filteredMemes.length === 0) {
        elGalleryContainer.innerHTML = '<pclass="not-found">No memes found Try different keywords😶‍🌫️</p>'
    } else {
        renderGallery(filteredMemes)
    }
}

function onKeywordClick(keyword) {
    const searchInput = document.querySelector('.meme-search')
    searchInput.value = keyword
    const filteredMemes = getCurrMemes(keyword)
    renderGallery(filteredMemes)
}

function onGetBigger(element) {
    let currentFontSize = parseFloat(element.style.fontSize) || 22
    element.style.fontSize = `${currentFontSize + 5}px`
    if (currentFontSize > 46) {
        element.style.fontSize = `${currentFontSize}px`
    }
}

function onClearSearch(keyword) {
    const elInput = document.querySelector(".meme-search")
    elInput.value = ''
    const elClearInput = getCurrMemes(keyword)
    renderGallery(elClearInput)
}