const holes = document.querySelectorAll(".hole")
const cursor = document.querySelector(".cursor")
const mole = document.querySelector(".mole")
const timeLeft = document.querySelector(".time-left span")
const score = document.querySelector(".score span")

let result = 0
let hitPosition
let currentTime = 60
let timer = null

function randomHole() {
    holes.forEach(hole => {
        hole.classList.remove("mole")  //removes all the moles from all the holes
    })

    let randomHole = holes[Math.floor(Math.random() * 9)]
    randomHole.classList.add("mole")  // adds a mole at random to a random hole
    hitPosition = randomHole.id  //sets the hit position to wherever the mole is at that moment

}

holes.forEach(hole => {
    hole.addEventListener("mousedown", function () {
        if (hole.id == hitPosition) {  
            result++  //Adds 1 to the score if you click on the mole
            score.textContent = result //add how many points you have to the HTML span
            hitPosition = null
        }
    })

})

//Starts the 60 second countdown of the game,
function countDown() {  
    currentTime--   //Decreases time left by one second
    timeLeft.textContent = currentTime  //Replaces the time left content with the time left

    if (currentTime == 0) {  //If Time runs out alert that the Game is Over
        clearInterval(countDownTimerId)
        alert("GAME OVER! Your final score")
    }
}


function moveMole() {  //Moves mole from hole to hole 
    let timer = null
    timer = setInterval(randomHole, 1000)
}

moveMole()


let countDownTimerId = setInterval(countDown, 1000)



window.addEventListener("mousemove", e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})

