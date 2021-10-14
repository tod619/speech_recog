
//<div>You Said:</div>
//<span class="box">20</span>
//<div>Go Higher</div>

const msgEl = document.getElementById('msg')

const randomNum = getRandomNumber()



function getRandomNumber(){
    number = Math.floor(Math.random() * 100) + 1
    return number
}