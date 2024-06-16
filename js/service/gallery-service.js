'use strict'

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

function getCurrMemes(search) {
    gFilteredMemes = [...gImgs]

    
    if (!search || search === undefined) {
       
        return gFilteredMemes 
    }
    const searchTerm = search.toLowerCase()
    gFilteredMemes = gImgs.filter(img => {
        return img.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
    })
    return gFilteredMemes
}