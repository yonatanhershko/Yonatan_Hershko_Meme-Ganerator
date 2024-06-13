'use strict'

function renderMeme() {
    const meme = getMeme()
    const img = getImageById(meme.selectedImgId)
    if (!img) return

    const elImg = new Image()
    elImg.src = img.url
    elImg.onload = () => {
        gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

        const line = meme.lines[meme.selectedLineIdx]
        gCtx.font = `${line.size}px Arial`
        gCtx.fillStyle = line.color
        gCtx.textAlign = 'center'
        gCtx.textBaseline = 'top'
        gCtx.fillText(line.txt, gElCanvas.width / 2, 10) // Adjust the y-coordinate to 10// 350 -> down //1 ->up

     
    }
}


//text change
function onTextType() {
    const topText = document.querySelector('.meme-text-input').value
    setLineTxt(topText)
    renderMeme()
}

//text change
function setLineTxt(text) {
    gMeme.lines[0].txt = text
}

///clr
function textColor(event) {
    const color = event.target.value
    gMeme.lines[gMeme.selectedLineIdx].color = color
    renderMeme()
}
//img select
function onImgSelect(elImg) {
    const selectedImgId = +elImg.dataset.imgId
    gMeme.selectedImgId = selectedImgId
    switchView()
    renderMeme()
}


function onIncreaseFont() {
    const line = gMeme.lines[gMeme.selectedLineIdx]
    line.size += 5
    renderMeme()
}

function onDecreaseFont() {
    const line = gMeme.lines[gMeme.selectedLineIdx]
    if (line.size > 5) {
        line.size -= 5
        renderMeme()
    }
}

function setLineTxt(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
}

function updateTextInput() {
    const inputField = document.querySelector('.meme-text-input')
    inputField.value = gMeme.lines[gMeme.selectedLineIdx].txt
}



// function drawFrameAroundText(line, y) {
//     const textWidth = gCtx.measureText(line.txt).width;
//     const textHeight = line.size;
//     gCtx.strokeStyle = 'black';
//     gCtx.lineWidth = 2;
//     gCtx.strokeRect(gElCanvas.width / 2 - textWidth / 2 - 5, y - 5, textWidth + 10, textHeight + 10);
// }


// function onAddLine(){
//     addLine()
//     renderMeme()
// }



// function switchLine() {
//     gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length
//     document.querySelector('.meme-text-input').value = gMeme.lines[gMeme.selectedLineIdx].txt
//     renderMeme()
// }

