
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

function loadImage(event) {
    var file = event.target.files[0]
    var reader = new FileReader()
    reader.onload = function (e) {
        var imgElement = new Image()
        imgElement.src = e.target.result
        imgElement.onload = function () {
            createMeme(imgElement)
            renderGallery()
        }
    }
    reader.readAsDataURL(file)
}


function onFilterBy(searchTerm) {
    const filteredMemes = getCurrMemes(searchTerm)
    // console.log('Filtered Memes:', filteredMemes)
    renderGallery(filteredMemes)
}

