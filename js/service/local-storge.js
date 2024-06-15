'use strict'

function getFromStorage(selector) {
    return JSON.parse(localStorage.getItem(selector))
  }
  
  function saveToStorage(selector, val) {
    localStorage.setItem(selector, JSON.stringify(val))
  }
  