const gameBtn = document.getElementById("play")
const header = document.getElementById("header")

gameBtn.addEventListener("click", () => {
    gameBtn.style.display = "none";
    header.style.display = "none";
})