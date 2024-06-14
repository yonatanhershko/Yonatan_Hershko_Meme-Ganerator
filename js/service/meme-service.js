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
            color: '#252525',
            x: null,
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
    var newLine = {
        txt: 'But never pickles',
        size: 30,
        color: '#252525',
        x: null,
        y: 500,
    }
    gMeme.lines.push(newLine)
}

function switchLine() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length
    document.querySelector('.meme-text-input').value = gMeme.lines[gMeme.selectedLineIdx].txt
}

function updateTextInput() {
    const inputField = document.querySelector('.meme-text-input')
    const inputColor = document.getElementById('text-color')
    inputField.value = gMeme.lines[gMeme.selectedLineIdx].txt
    inputColor.value = gMeme.lines[gMeme.selectedLineIdx].color
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
  