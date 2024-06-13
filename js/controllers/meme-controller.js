'use strict'

function renderMeme() {
    const meme = getMeme()
    const img = getImageById(meme.selectedImgId)
    if (!img) {
        console.error('Image not found!')
        return
    }

    const elImg = new Image()
    elImg.src = img.url
    elImg.onload = () => {
        gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

        const line = meme.lines[meme.selectedLineIdx]
        gCtx.font = `${line.size}px Arial`
        gCtx.fillStyle = line.color
        gCtx.fillText(line.txt, 50, 50)
    }
}


function onTextType() {
 const topText = document.querySelector('.meme-text-input').value
 setLineTxt(topText)
    renderMeme()
}

function setLineTxt(text) {
    gMeme.lines[0].txt = text
}

function textColor(event) {
    const color = event.target.value
    gMeme.lines[gMeme.selectedLineIdx].color = color
    renderMeme()
}

function onImgSelect(elImg) {
    const selectedImgId = +elImg.dataset.imgId
    gMeme.selectedImgId = selectedImgId
    renderMeme()
}

