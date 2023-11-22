const harbors = document.querySelectorAll('.harb_0, .harb_1, .harb_2, .harb_3, .harb_4, .harb_5, .harb_6, .harb_7, .harb_8, .harb_9, .harb_11');
const Harbringers = document.querySelectorAll('.Pierro, .Il_Capitano, .Dottore, .Columbina, .Arlecchino, .Pulcinella, .Scaramouche, .Sandrone, .Signora, .Pantalone, .Tartaglia');

//прокрутка экрана к тексту
function Scroll_info($targer) {
    $targer.scrollIntoView({ behavior: "smooth", block: "start" });
}

//вывод информации о персонаже
function HarbInfo($name) {
    for (let i = 0; i < Harbringers.length; i++) {
        if (Harbringers[i] == $name) {
            Harbringers[i].style.display = "block";
        } else {
            Harbringers[i].style.display = "none";
        }
    }
    Scroll_info($name);
}

for (let i = 0; i < harbors.length; i++) {
    harbors[i].addEventListener('click', function () {
        HarbInfo(Harbringers[i]);
    });
}
