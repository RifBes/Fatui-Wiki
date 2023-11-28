const harbors = document.querySelectorAll('.harb_0, .harb_1, .harb_2, .harb_3, .harb_4, .harb_5, .harb_6, .harb_7, .harb_8, .harb_9, .harb_11');
const Harbringers = document.querySelectorAll('.Pierro, .Il_Capitano, .Dottore, .Columbina, .Arlecchino, .Pulcinella, .Scaramouche, .Sandrone, .Signora, .Pantalone, .Tartaglia');
const harbors_slider = document.querySelectorAll('.slider_harb_0, .slider_harb_1, .slider_harb_2, .slider_harb_3, .slider_harb_4, .slider_harb_5, .slider_harb_6, .slider_harb_7, .slider_harb_8, .slider_harb_9, .slider_harb_11');


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

// Для сетки
for (let i = 0; i < harbors.length; i++) {
    harbors[i].addEventListener('click', function () {
        HarbInfo(Harbringers[i]);
    });
}

//для слайдера
for (let i = 0; i < harbors_slider.length; i++) {
    harbors_slider[i].addEventListener('click', function () {
        HarbInfo(Harbringers[i]);
    });
}