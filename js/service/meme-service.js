'use strict'

var gImgs = [
    { id: 1, url: './meme-imgs/1.jpg', keywords: ['funny', 'man', 'mad'] },
    { id: 2, url: './meme-imgs/2.jpg', keywords: ['cute', 'dogs'] },
    { id: 3, url: './meme-imgs/3.jpg', keywords: ['cute', 'animal', 'baby'] },
    { id: 4, url: './meme-imgs/4.jpg', keywords: ['funny', 'cute', 'cat'] },
    { id: 5, url: './meme-imgs/5.jpg', keywords: ['cute', 'baby', 'mad'] },
    { id: 6, url: './meme-imgs/6.jpg', keywords: ['funny', 'man', 'smile'] },
    { id: 7, url: './meme-imgs/7.jpg', keywords: ['funny', 'cute', 'baby'] },
    { id: 8, url: './meme-imgs/8.jpg', keywords: ['funny', 'weird', 'man'] },
    { id: 9, url: './meme-imgs/9.jpg', keywords: ['baby', 'cute', 'weird'] },
    { id: 10, url: './meme-imgs/10.jpg', keywords: ['men', 'smile'] },
    { id: 11, url: './meme-imgs/11.jpg', keywords: ['funny', 'men', 'fight'] },
    { id: 12, url: './meme-imgs/12.jpg', keywords: ['men'] },
    { id: 13, url: './meme-imgs/13.jpg', keywords: ['man', 'smile'] },
    { id: 14, url: './meme-imgs/14.jpg', keywords: ['men', 'mad'] },
    { id: 15, url: './meme-imgs/15.jpg', keywords: ['men'] },
    { id: 16, url: './meme-imgs/16.jpg', keywords: ['men', 'smile', 'weird'] },
    { id: 17, url: './meme-imgs/17.jpg', keywords: ['men', 'mad'] },
    { id: 18, url: './meme-imgs/18.jpg', keywords: ['funny', 'cartoon'] },
]

var gMeme = {
    selectedImgId: 1,/// change img num
    selectedLineIdx: 0,/// change lineidx
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 30,
            font: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif',
            color: '#252525',
            x: 200,
            y: 50
        },
    ],
}
var gKeywordSearchCountMap = { funny: 12, animal: 16, baby: 2 }

function getMeme() {
    return gMeme
}

function getImageById(id) {
    return gImgs.find(img => img.id === id)
}

function addLine() {
    const newLine = {
        txt: 'But never pickles',
        size: 30,
        font: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif',
        color: '#252525',
        x: 200,
        y: calculateNewLineY(), 
    };
    gMeme.lines.push(newLine);
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    renderMeme();
}

function calculateNewLineY() {
    const linesCount = gMeme.lines.length;
    if (linesCount === 0) return 10// first line 
    if (linesCount === 1) return gElCanvas.height - gMeme.lines[0].size - 10// Sec 
    return gElCanvas.height / 2 - ((linesCount - 2) * 30) / 2 + (linesCount - 2) * 30
}

function switchLine() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length
    document.querySelector('.meme-text-input').value = gMeme.lines[gMeme.selectedLineIdx].txt
}

function updateTextInput() {
    const inputField = document.querySelector('.meme-text-input')
    const inputColor = document.getElementById('text-color')
    const selectedLineIdx = gMeme.selectedLineIdx

    if (selectedLineIdx !== -1 && gMeme.lines[selectedLineIdx]) {
        const selectedLine = gMeme.lines[selectedLineIdx]
        inputField.value = selectedLine.txt
        inputColor.value = selectedLine.color
        updatePaletteIconColor(selectedLine.color) // Update palette icon color when updating the input
    } else {
        inputField.value = ''
        inputColor.value = '#000000' // default color or any other color you prefer
        updatePaletteIconColor('#000000') // Update palette icon color to default
    }
}

function getSelectedLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}
function getLineIdx(line) {
    return gMeme.lines.findIndex((currLine) => currLine === line)
}

function deleteLine() {
    const lineIdx = getLineIdx(getSelectedLine())
    gMeme.lines.splice(lineIdx, 1)
    gMeme.selectedLineIdx = 0
}

function drawSelectedLineFrame(line) {
    if (line) {
        gCtx.strokeStyle = 'white'
        gCtx.lineWidth = 2
        gCtx.strokeRect(line.x - line.width / 2 - 5, line.y - 5, line.width + 10, line.height + 10)
    }
}





///icone stuff

function openColorPicker() {
    const colorPicker = document.getElementById('text-color')
    colorPicker.click() // Simulate a click on the color input
}


function updatePaletteIconColor(color) {
    const paletteIcon = document.querySelector('.fa-palette')
    paletteIcon.style.color = color
}

function alignLeftText() {
    const selectedLineIdx = gMeme.selectedLineIdx
    // console.log('great ')
    if (selectedLineIdx === -1) return
    console.log('hhh')
    const selectedLine = gMeme.lines[selectedLineIdx]

    selectedLine.x = gElCanvas.width * 0.25

    renderMeme()
}