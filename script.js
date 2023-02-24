let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let vhod = document.getElementById("vhod").value;
let words = vhod.split(" ");
let text = document.getElementById("text");
let calorii = 0;
let obekt = {
    ime: "Izkren",
    familiq: "Pencheff",
    vazrast: 18,
    kila : 100
}
console.log(obekt);
let nx = 12;
let ny = 12;
let sqside = 50;
let herox = 2;
let heroy = 1;
let b1x = 1;
let b1y = 1;
let heroimg = new Image();
heroimg.src = "iskren.png";
canvas.width = nx * sqside;
canvas.height = ny * sqside;

function drawMap() {

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(heroimg, herox * sqside, heroy * sqside, sqside, sqside);
    for (let i = 0; i < nx; i++) {
        for (let j = 0; j < ny; j++) {
            context.strokeRect(i * sqside, j * sqside, sqside, sqside)
        }
    }
    text.textContent = calorii + " izgoreni calorii";
}

drawMap();

canvas.onclick = function(e) {

    calorii += 5;
    let x = e.x - canvas.offsetLeft;
    let y = e.y - canvas.offsetTop;
    herox = Math.floor(x / sqside);
    heroy = Math.floor(y / sqside);
    drawMap();
}

function moveDown() {
    console.log("надолу");
    heroy++;
    if (heroy > 11) {
        heroy = 0;
    }
    drawMap();
}

function moveRight() {
    console.log("надясно");
    herox++;
    if (herox > 11) {
        herox = 0
    }
    drawMap();
}

function moveUp() {
    console.log("нагоре");
    heroy--;
    if (heroy < 0) {
        heroy = 11;
    }
    drawMap();
}

function moveLeft() {
    console.log("Наляво");
    herox--;
    if (herox < 0) {
        herox = 11;
    }
    drawMap();
}

document.onkeypress = function(e) {
    let key = e.key;
    calorii += 5;
    switch (key) {
        case "a":
            moveLeft();
            break;
        case "s":
            moveDown();
            break;
        case "d":
            moveRight();
            break;
        case "w":
            moveUp();
            break;

    }
}