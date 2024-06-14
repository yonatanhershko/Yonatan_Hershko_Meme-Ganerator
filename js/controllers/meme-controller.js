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

        meme.lines.forEach((line, idx) => {
            gCtx.font = `${line.size}px Arial`
            gCtx.fillStyle = line.color
            gCtx.textAlign = 'center'
            gCtx.textBaseline = 'top'

            let y
            if (idx === 0) {
                y = 10 // Top line
            } else if (idx === 1) {
                y = gElCanvas.height - line.size - 10 // Bottom line
            } else {
                y = gElCanvas.height / 2 - (line.size * (meme.lines.length - 2)) / 2 + (idx - 2) * line.size // Middle lines
            }

            line.x = gElCanvas.width / 2
            line.y = y
            line.width = gCtx.measureText(line.txt).width
            line.height = line.size

            gCtx.fillText(line.txt, line.x, line.y)

            if (idx === meme.selectedLineIdx) {
                gCtx.strokeStyle = 'black'
                gCtx.lineWidth = 2
                gCtx.strokeRect(line.x - line.width / 2 - 5, line.y - 5, line.width + 10, line.height + 10)
            }
        })
    }
}

//text change
function onTextType() {
    const topText = document.querySelector('.meme-text-input').value
    setLineTxt(topText)
    renderMeme()
}

function setLineTxt(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
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


function onAddLine() {
    addLine()
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    updateTextInput()
    renderMeme()
}

function onSwitchLine() {
    switchLine()
    renderMeme()
    updateTextInput()
}


function onMouseClick(ev) {
    const { offsetX, offsetY } = ev
    const meme = getMeme()

    const clickedLineIdx = meme.lines.findIndex(line => {
        return (
            offsetX >= line.x - line.width / 2 &&
            offsetX <= line.x + line.width / 2 &&
            offsetY >= line.y &&
            offsetY <= line.y + line.height
        )
    })

    if (clickedLineIdx !== -1) {
        meme.selectedLineIdx = clickedLineIdx
        updateTextInput()
        renderMeme()
        console.log('Selected line index:', clickedLineIdx)
    } else {
        console.log('Clicked outside of any text line')
    }
}

function onDeleteLine(){

    deleteLine()
    updateTextInput()
    renderMeme()
}

