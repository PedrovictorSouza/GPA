'use strict'
//ul do menu mobile que esta em nav.
const x = document.getElementById('mobile-menu')
const stage = document.getElementById('stage')
const myBackground = document.getElementById('bg')
let myBgs = [
        'https://loremflickr.com/320/240/dog',
        'https://loremflickr.com/320/240/dog',
        'https://loremflickr.com/320/240/dog',
        'https://loremflickr.com/320/240/dog',
        'https://loremflickr.com/320/240/dog',
      ]





function openMenu() {  
  x.style.display = "block"
}

function closeMenu() {  
  x.style.display = "none"
}

function changeWorld(myBackground,myBgs) { 
  setInterval(function() {
    let myRandomNum = Math.floor(Math.random() * myBgs.length)
    console.log(myRandomNum)
    myBackground.src = myBgs[myRandomNum]
  }, 1000)
}

