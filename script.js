
const msgEl = document.getElementById('msg')

const randomNum = getRandomNumber()

console.log('Number:', randomNum)

window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// start recognitaion + game
recognition.start()

// Create a random number
function getRandomNumber(){
    number = Math.floor(Math.random() * 100) + 1
    return number
}

// Capture user speech
function onSpeak(e) {
    const msg = e.results[0][0].transcript
    writeMsg(msg)
    checkNumber(msg)
}

// Write what user speaks to the DOM
function writeMsg(msg){
    msgEl.innerHTML = `
    <div>You Said: </div>
    <span class = "box">${msg}</span>
    `
}

function checkNumber(msg) {
    const num = +msg

    // check if it is a valid number
    if(Number.isNaN(num)) {
        msgEl.innerHTML = `<div>That is not a vaild number</div>`
        return
    }

    // Check if the number is in range 1 - 100
    if(num > 100 || num < 1) {
        msgEl.innerHTML += `<div>Number must be between 1 and 100</div>`
        return
    }

    // check the number against the random number
    if(num === randomNum) {
        document.body.innerHTML = `
        <h2>You have guessed the correct number! <br><br>
        It was ${num}</h2>
        <button class="play-again" id="play-again">Play Again</button>
        `
    } else if(num > randomNum) {
        msgEl.innerHTML = `<div>Go Lower</div>`
    } else {
        msgEl.innerHTML = `<div>Go Higher</div>`
    }
}


// Event Listners
// Speek result event
recognition.addEventListener('result', onSpeak)