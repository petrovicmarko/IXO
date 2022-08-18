const gameBtn = document.getElementById("play")
const header = document.getElementById("header")
const field = document.getElementById("field")

gameBtn.addEventListener("click", () => {
    gameBtn.style.display = "none"
    header.style.display = "none"
    field.style.display = "grid"
})

let state = 0;

const slotsColl = document.getElementsByClassName("slot");
const slotsArr = Array.from(slotsColl);

slotsArr.forEach(slot => {
    const slotsText = Array.from(slot.children)
    slot.addEventListener("click", () => {

        if (state % 2 == 0) {
            slotsText[0].textContent = "X"
        } else {
            slotsText[0].textContent = "O"
        }

        slotsText[0].style.opacity = "0"

        state++
    })
});