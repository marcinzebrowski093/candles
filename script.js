let dynia = document.getElementById("dynia");
let cytryna = document.getElementById("cytryna");
let candle = document.getElementById("candle");

dynia.onclick = function () {
    candle.style.backgroundImage = "url(Cupcake_pumpkin.png)";
    dynia.classList.add('active');
    cytryna.classList.remove('active');
}

cytryna.onclick = function () {
    candle.style.backgroundImage = "url(Cupcake_lemon.png)";
    cytryna.classList.add('active');
    dynia.classList.remove('active');
}