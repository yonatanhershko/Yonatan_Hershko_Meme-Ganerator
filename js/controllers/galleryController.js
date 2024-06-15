
'use strict'

function renderGallery() {
    var elGalleryContainer = document.querySelector('.gallery-container')
    var imgs = gImgs
    const strHTMLs = imgs.map((img) => {
        return `<img src="./meme-imgs/${img.id}.jpg" alt="" onclick="onImgSelect(this)" class ="card" data-img-id="${img.id}">`
    })
    elGalleryContainer.innerHTML = strHTMLs.join('')
}


