let img_slider = document.querySelectorAll('.slider__image');
let left_button = document.getElementById('left_button');
let right_button = document.getElementById('right_button');
let name_harb = document.getElementById('slider__name');

const Harbringers_name = ['Пьеро', 'Капитано', 'Дотторе', 'Коломбина', 'Арлекино', 'Пульчинелла', 'Скарамучча', 'Сандроне', 'Синьора', 'Панталоне', 'Тарталья']

img_slider[0].classList.add('slider__image-active');
name_harb.textContent = Harbringers_name[0];

let count = 0;


left_button.addEventListener('click', () => {
    for (let i = 0; i < img_slider.length; i++) {
        img_slider[i].classList.remove('slider__image-active');
    }
    count--;
    if (count < 0) {
        count = img_slider.length - 1;
    }
    img_slider[count].classList.add('slider__image-active');
    name_harb.textContent = Harbringers_name[count];
})

right_button.addEventListener('click', () => {
    for (let i = 0; i < img_slider.length; i++) {
        img_slider[i].classList.remove('slider__image-active');
    }
    count++;
    if (count >= img_slider.length) {
        count = 0;
    }
    img_slider[count].classList.add('slider__image-active');
    name_harb.textContent = Harbringers_name[count];
})