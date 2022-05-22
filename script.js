let dynia = document.getElementById("dynia");
let cytryna = document.getElementById("cytryna");
let candle = document.getElementById("candle");

dynia.onclick = function () {
    candle.style.backgroundImage = "url(babka1.png)";
    dynia.classList.add('active');
    cytryna.classList.remove('active');
}

cytryna.onclick = function () {
    candle.style.backgroundImage = "url(babka2.png)";
    cytryna.classList.add('active');
    dynia.classList.remove('active');
}

$(document).ready(function () {
    $('.your-class').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
    });
});