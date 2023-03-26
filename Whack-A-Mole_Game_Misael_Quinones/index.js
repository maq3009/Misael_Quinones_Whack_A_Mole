const holes = document.querySelectorAll(".hole")
const cursor = document.querySelector(".cursor")
const mole = document.querySelector(".mole")
const timeLeft = document.querySelector(".time-left")
const score = document.querySelector(".score span")

let result = 0
let hitPosition
let currentTime = 60
let timer = null

function randomHole() {
    holes.forEach(hole => {
        hole.classList.remove("mole")
    })

    let randomHole = holes[Math.floor(Math.random() * 9)]
    randomHole.classList.add("mole")
    hitPosition = randomHole.id

}

holes.forEach(hole => {
    hole.addEventListener("mousedown", function () {
        if (hole.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })

})


function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        alert("GAME OVER! Your final score")
    }
}


function moveMole() {
    let timer = null
    timer = setInterval(randomHole, 1000)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timer)
        alert("GAME OVER! Your final score is " + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)



window.addEventListener("mousemove", e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})