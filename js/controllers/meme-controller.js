'use strict'


function renderMeme() {

    const meme = getMeme()
    const imgId = meme.selectedImgId

    const currRenderImg = gImgs.find(img => img.id = imgId)
    if (!currRenderImg) return

    const imgUrl = currRenderImg.url
    var img = new Image()
    img.src = imgUrl

    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)

       //all text stuff
        gCtx.font = '32px Arial'
        gCtx.fillStyle = gTextColor
        gCtx.lineWidth = 1
        gCtx.textAlign = 'center'
        gCtx.textBaseline = 'top'
        gCtx.fillText(gText, gElCanvas.width / 2, 10)
        gCtx.strokeText(gText, gElCanvas.width / 2, 10)
    }

  
}

function updateMemeText(text) {

    gMeme.lines[gMeme.selectedLineIdx].txt = text
}
