let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let randomIndexOne = Math.floor( Math.random() * (fighters.length - 1))
    let randomIndexTwo = Math.floor( Math.random() * (fighters.length - 1))
    stageEl.textContent = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo]
})
