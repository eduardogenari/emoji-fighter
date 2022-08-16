let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let emoji1 = randomEmoji()
    let emoji2 = randomEmoji()
    stageEl.textContent = emoji1 + " vs " + emoji2
})

function randomEmoji() {
    return fighters[Math.floor(Math.random()*17)]
}
