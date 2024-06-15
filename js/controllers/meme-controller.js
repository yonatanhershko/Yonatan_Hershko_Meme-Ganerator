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
            gCtx.font = `${line.size}px ${line.font}`
            gCtx.fillStyle = line.color
            gCtx.strokeStyle = line.strokeColor
            gCtx.lineWidth = line.strokeWidth
            gCtx.textAlign = 'center'
            gCtx.textBaseline = 'top'

            if (line.y === undefined) {
                if (idx === 0) {
                    line.y = 10 // Top line
                } else if (idx === 1) {
                    line.y = gElCanvas.height - line.size - 10 // Bottom line
                } else {
                    line.y = gElCanvas.height / 2 - ((line.size * (meme.lines.length - 2)) / 2) + ((idx - 2) * line.size) // Middle lines
                }
            }

            line.width = gCtx.measureText(line.txt).width
            line.height = line.size

            if (line.strokeWidth > 0) {
                gCtx.strokeText(line.txt, line.x, line.y)
            }
            gCtx.fillText(line.txt, line.x, line.y)

            if (idx === meme.selectedLineIdx) {
                drawSelectedLineFrame(line)
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

///Text Color
function textColor(event) {
    const newColor = event.target.value
    const meme = getMeme()
    const selectedLineIdx = meme.selectedLineIdx
    if (selectedLineIdx !== -1 && meme.lines[selectedLineIdx]) {
        meme.lines[selectedLineIdx].color = newColor
        updatePaletteIconColor(newColor)
        renderMeme()
    }
}

//Img Select
function onImgSelect(elImg) {
    const selectedImgId = +elImg.dataset.imgId
    gMeme.selectedImgId = selectedImgId
    showEditor()
    renderMeme()
}

//Change Funt Size
function onIncreaseFont() {
    const line = gMeme.lines[gMeme.selectedLineIdx]
    if (!line)return 
    line.size += 5
    renderMeme()
}

function onDecreaseFont() {
    const line = gMeme.lines[gMeme.selectedLineIdx]
    if (!line)return 
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
    const line = gMeme.lines[gMeme.selectedLineIdx]
    if (!line)return 
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
        addMouseListeners()
        // addTouchListeners()
        console.log('you got it')
    } else {
        meme.selectedLineIdx = -1

        renderMeme()
        removeMouseListeners()
        // removeTouchListeners()

    }
}


function onDeleteLine() {
    deleteLine()
    updateTextInput()
    renderMeme()
}


function onSetFont(font) {
    const meme = getMeme()
    if (meme.selectedLineIdx !== -1 && meme.lines[meme.selectedLineIdx]) {
        meme.lines[meme.selectedLineIdx].font = font
        renderMeme()
    }
}



//Align Text
function onAlignLeftText() {
    const line = gMeme.lines[gMeme.selectedLineIdx]
    if (!line)return 
    alignLeftText()
}

function onAlignCenterText() {
    const line = gMeme.lines[gMeme.selectedLineIdx]
    if (!line)return 
    alignCenterText()
}

function onAlignRightText(){
    const line = gMeme.lines[gMeme.selectedLineIdx]
    if (!line)return 
    alignRightText()
}

function onAddStroke() {
    const line = gMeme.lines[gMeme.selectedLineIdx]
    if (!line)return 
    addStroke()
}


function onUpLine(){
    const line = gMeme.lines[gMeme.selectedLineIdx]
    if (!line)return 
    upLine()
}

function onDownLine(){
    const line = gMeme.lines[gMeme.selectedLineIdx]
    if (!line)return 
    downLine()
}

function onGetRandomMeme() {
    const randomImg = gImgs[Math.floor(Math.random() * gImgs.length)]
    const randomTextLine = textLines[Math.floor(Math.random() * textLines.length)]

    gMeme.selectedImgId = randomImg.id
    gMeme.img = randomImg.url
    gMeme.lines[0].txt = randomTextLine

    renderMeme()
}

function onSaveMeme(){
    
}