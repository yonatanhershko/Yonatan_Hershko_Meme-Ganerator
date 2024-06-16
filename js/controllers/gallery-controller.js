
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
        elGalleryContainer.innerHTML = '<p class="not-found">No memes found Try different keywords😶‍🌫️</p>'
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


//Saved Meme 

function onRenderSavedMemes() {
    const savedMemesContainer = document.querySelector('.saved-meme-container')
    savedMemesContainer.innerHTML = ''

    if (gSavedMemes.length === 0) {
        savedMemesContainer.innerHTML = '<p class="not-found not-saved-text"> No saved memes yet!</p>'
    } else {
        renderSavedMemes(savedMemesContainer)
    }
}

function renderSavedMemes(container) {
    gSavedMemes.forEach((memeDataUrl, index) => {
        const memeHtml = `
            <div class="saved-meme">
                <img src="${memeDataUrl}" alt="Saved Meme ${index + 1}" class="card" data-index="${index}" onclick="onSelectSavedMeme(${index})">
            </div>
        `
        container.innerHTML += memeHtml
    })
}

function onSelectSavedMeme(index) {
    gCurrentMemeIndex = index
    const memeDataUrl = gSavedMemes[index]

    const img = new Image()
    img.src = memeDataUrl
    img.onload = () => {
        gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        showEditor() 
    }
}
