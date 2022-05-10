let czekolada = document.getElementById("czekolada");
let wisnia = document.getElementById("wisnia");
let candle = document.getElementById("candle");

czekolada.onclick = function () {
    candle.style.backgroundImage = "url(babka1.png)";
}

wisnia.onclick = function () {
    candle.style.backgroundImage = "url(babka2.png)";
}