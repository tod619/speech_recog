
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
    //checkNumber(msg)
}

// Write what user speaks to the DOM
function writeMsg(msg){
    msgEl.innerHTML = `
    <div>You Said: </div>
    <span class = "box">${msg}</span>
    `
}

//function checkNumber() {}


// Event Listners
// Speek result event
recognition.addEventListener('result', onSpeak)