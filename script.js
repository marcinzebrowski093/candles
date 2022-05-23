let dynia = document.getElementById("dynia");
let cytryna = document.getElementById("cytryna");
let candle = document.getElementById("candle");
let x = window.matchMedia("(min-width:1024px)");

if (x.matches) {
    dynia.onclick = function () {
        candle.style.backgroundImage = "url(Cupcake_pumpkin.png)";
        dynia.classList.add('active');
        cytryna.classList.remove('active');
    }
}

if (x.matches) {

    cytryna.onclick = function () {
        candle.style.backgroundImage = "url(Cupcake_lemon.png)";
        cytryna.classList.add('active');
        dynia.classList.remove('active');
    }
}

if (!x.matches) {
    dynia.onclick = function () {
        candle.style.backgroundImage = "url(mobile_pumpkin.png)";
        dynia.classList.add('active');
        cytryna.classList.remove('active');
    }
}

if (!x.matches) {
    cytryna.onclick = function () {
        candle.style.backgroundImage = "url(mobile_lemon.png)";
        cytryna.classList.add('active');
        dynia.classList.remove('active');
    }
}