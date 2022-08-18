const gameBtn = document.getElementById("play")
const header = document.getElementById("header")
const field = document.getElementById("field")

gameBtn.addEventListener("click", () => {
    gameBtn.style.display = "none"
    header.style.display = "none"
    field.style.display = "grid"
})

let X = 0;
let O = 0;
let tie = 0;
let state = 0;

const slotsColl = document.getElementsByClassName("slot");
const slotsArr = Array.from(slotsColl);

const s1 = document.getElementById("s1")
const s2 = document.getElementById("s2")
const s3 = document.getElementById("s3")
const s4 = document.getElementById("s4")
const s5 = document.getElementById("s5")
const s6 = document.getElementById("s6")
const s7 = document.getElementById("s7")
const s8 = document.getElementById("s8")
const s9 = document.getElementById("s9")

const s1t = document.getElementById("s1t")
const s2t = document.getElementById("s2t")
const s3t = document.getElementById("s3t")
const s4t = document.getElementById("s4t")
const s5t = document.getElementById("s5t")
const s6t = document.getElementById("s6t")
const s7t = document.getElementById("s7t")
const s8t = document.getElementById("s8t")
const s9t = document.getElementById("s9t")

slotsArr.forEach(slot => {
    slot.addEventListener("click", () => {

        const slotsText = Array.from(slot.children)
        
        if (state % 2 == 0) {
            slotsText[0].textContent = "X"
        } else {
            slotsText[0].textContent = "O"
        }

        
        slotsText[0].style.opacity = "0"
        slot.style.backgroundColor = "#5a5291"

        state++

        if (s1.id == "s1" && s1t.textContent == "X" &&
        s2.id == "s2" && s2t.textContent == "X" &&
        s3.id == "s3" && s3t.textContent == "X") {
            X++

            s1t.style.color = "#1cd3e0"
            s2t.style.color = "#1cd3e0"
            s3t.style.color = "#1cd3e0"
        }

        if (s4.id == "s4" && s4t.textContent == "X" &&
        s5.id == "s5" && s5t.textContent == "X" &&
        s6.id == "s6" && s6t.textContent == "X") {
            X++

            s4t.style.color = "#1cd3e0"
            s5t.style.color = "#1cd3e0"
            s6t.style.color = "#1cd3e0"
        }

        if (s7.id == "s7" && s7t.textContent == "X" &&
        s8.id == "s8" && s8t.textContent == "X" &&
        s9.id == "s9" && s9t.textContent == "X") {
            X++

            s7t.style.color = "#1cd3e0"
            s8t.style.color = "#1cd3e0"
            s9t.style.color = "#1cd3e0"
        }

        if (s1.id == "s1" && s1t.textContent == "X" &&
        s4.id == "s4" && s4t.textContent == "X" &&
        s7.id == "s7" && s7t.textContent == "X") {
            X++

            s1t.style.color = "#1cd3e0"
            s4t.style.color = "#1cd3e0"
            s7t.style.color = "#1cd3e0"
        }

        if (s2.id == "s2" && s2t.textContent == "X" &&
        s5.id == "s5" && s5t.textContent == "X" &&
        s8.id == "s8" && s8t.textContent == "X") {
            X++

            s2t.style.color = "#1cd3e0"
            s5t.style.color = "#1cd3e0"
            s8t.style.color = "#1cd3e0"
        }

        if (s3.id == "s3" && s3t.textContent == "X" &&
        s6.id == "s6" && s6t.textContent == "X" &&
        s9.id == "s9" && s9t.textContent == "X") {
            X++

            s3t.style.color = "#1cd3e0"
            s6t.style.color = "#1cd3e0"
            s9t.style.color = "#1cd3e0"
        }

        if (s1.id == "s1" && s1t.textContent == "X" &&
        s5.id == "s5" && s5t.textContent == "X" &&
        s9.id == "s9" && s9t.textContent == "X") {
            X++

            s1t.style.color = "#1cd3e0"
            s5t.style.color = "#1cd3e0"
            s9t.style.color = "#1cd3e0"
        }

        if (s3.id == "s3" && s3t.textContent == "X" &&
        s5.id == "s5" && s5t.textContent == "X" &&
        s7.id == "s7" && s7t.textContent == "X") {
            X++

            s3t.style.color = "#1cd3e0"
            s5t.style.color = "#1cd3e0"
            s7t.style.color = "#1cd3e0"
        }

        ////////////////////////////////////////////////

        if (s1.id == "s1" && s1t.textContent == "O" &&
        s2.id == "s2" && s2t.textContent == "O" &&
        s3.id == "s3" && s3t.textContent == "O") {
            O++

            s1t.style.color = "#1cd3e0"
            s2t.style.color = "#1cd3e0"
            s3t.style.color = "#1cd3e0"
        }

        if (s4.id == "s4" && s4t.textContent == "O" &&
        s5.id == "s5" && s5t.textContent == "O" &&
        s6.id == "s6" && s6t.textContent == "O") {
            O++

            s4t.style.color = "#1cd3e0"
            s5t.style.color = "#1cd3e0"
            s6t.style.color = "#1cd3e0"
        }

        if (s7.id == "s7" && s7t.textContent == "O" &&
        s8.id == "s8" && s8t.textContent == "O" &&
        s9.id == "s9" && s9t.textContent == "O") {
            O++

            s7t.style.color = "#1cd3e0"
            s8t.style.color = "#1cd3e0"
            s9t.style.color = "#1cd3e0"
        }

        if (s1.id == "s1" && s1t.textContent == "O" &&
        s4.id == "s4" && s4t.textContent == "O" &&
        s7.id == "s7" && s7t.textContent == "O") {
            O++

            s1t.style.color = "#1cd3e0"
            s4t.style.color = "#1cd3e0"
            s7t.style.color = "#1cd3e0"
        }

        if (s2.id == "s2" && s2t.textContent == "O" &&
        s5.id == "s5" && s5t.textContent == "O" &&
        s8.id == "s8" && s8t.textContent == "O") {
            O++

            s2t.style.color = "#1cd3e0"
            s5t.style.color = "#1cd3e0"
            s8t.style.color = "#1cd3e0"
        }

        if (s3.id == "s3" && s3t.textContent == "O" &&
        s6.id == "s6" && s6t.textContent == "O" &&
        s9.id == "s9" && s9t.textContent == "O") {
            O++

            s3t.style.color = "#1cd3e0"
            s6t.style.color = "#1cd3e0"
            s9t.style.color = "#1cd3e0"
        }

        if (s1.id == "s1" && s1t.textContent == "O" &&
        s5.id == "s5" && s5t.textContent == "O" &&
        s9.id == "s9" && s9t.textContent == "O") {
            O++

            s1t.style.color = "#1cd3e0"
            s5t.style.color = "#1cd3e0"
            s9t.style.color = "#1cd3e0"
        }

        if (s3.id == "s3" && s3t.textContent == "O" &&
        s5.id == "s5" && s5t.textContent == "O" &&
        s7.id == "s7" && s7t.textContent == "O") {
            O++

            s3t.style.color = "#1cd3e0"
            s5t.style.color = "#1cd3e0"
            s7t.style.color = "#1cd3e0"
        }

        if (s1t.textContent != "" &&
            s2t.textContent != "" &&
            s3t.textContent != "" &&
            s4t.textContent != "" &&
            s5t.textContent != "" &&
            s6t.textContent != "" &&
            s7t.textContent != "" &&
            s8t.textContent != "" &&
            s9t.textContent != "") {
                tie++
            }

        if (X || O || tie) {
            s1t.style.opacity = "1"
            s2t.style.opacity = "1"
            s3t.style.opacity = "1"
            s4t.style.opacity = "1"
            s5t.style.opacity = "1"
            s6t.style.opacity = "1"
            s7t.style.opacity = "1"
            s8t.style.opacity = "1"
            s9t.style.opacity = "1"

        }
    })

    
});