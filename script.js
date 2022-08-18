const gameBtn = document.getElementById("play")
const header = document.getElementById("header")
const field = document.getElementById("field")

gameBtn.addEventListener("click", () => {
    gameBtn.style.display = "none"
    header.style.display = "none"
    field.style.display = "grid"
})