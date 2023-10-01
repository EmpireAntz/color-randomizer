var btn = document.getElementById("btn")
var color = document.querySelector(".color")
var hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]



function randomColor() {
    var hexValue = "#"
    for (i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * hexArr.length)
        hexValue += hexArr[randomIndex]
    }
    
    color.textContent = hexValue
    document.body.style.backgroundColor = hexValue
}

btn.addEventListener("click", randomColor)


