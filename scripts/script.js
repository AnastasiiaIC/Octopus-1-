// Получаем элементы 1, 2, 3 слайдера по id этих элементов в html
//const octopus_slider = document.querySelector('.octopus_slider'); (просто запомнить)

//const first_slide_cont = document.querySelector('.first'); (просто запомнить)
const first_slide_cont = document.getElementById("first");
const second_slide_cont = document.getElementById("second");
const third_slide_cont = document.getElementById("third");

const slides_1 = Array.from(first_slide_cont.querySelectorAll('img')); //находим общее количество слайдов
const slides_2 = Array.from(second_slide_cont.querySelectorAll('img')); //находим общее количество слайдов
const slides_3 = Array.from(third_slide_cont.querySelectorAll('img')); //находим общее количество слайдов

const prevButton_one = document.querySelector('.prev-button-one');
const nextButton_one = document.querySelector('.next-button-one');

const prevButton_two = document.querySelector('.prev-button-two');
const nextButton_two = document.querySelector('.next-button-two');

const prevButton_third = document.querySelector('.prev-button-third');
const nextButton_third = document.querySelector('.next-button-third');

const slideCount = slides_1.length;
const slCount_2 = slides_2.length;
const slideCount_3 = slides_3.length;

let slideIndex = 0; //индекс активного слайда
let slideIndex_2 = 0; //индекс активного слайда
let slideIndex_3 = 0; //индекс активного слайда

// Обработка и установка счетчика слайдов
const num_of_slides_1 = document.getElementById("num_of_slides_1");
const num_of_slides_2 = document.getElementById("num_of_slides_2");
const num_of_slides_3 = document.getElementById("num_of_slides_3");
let cur_slide_num_1 = document.getElementById("cur_slide_num_1");
let cur_slide_num_2 = document.getElementById("cur_slide_num_2");
let cur_slide_num_3 = document.getElementById("cur_slide_num_3");

num_of_slides_1.innerHTML = slideCount.toString();
num_of_slides_2.innerHTML = slCount_2.toString();
num_of_slides_3.innerHTML = slideCount_3.toString();

// Устанавливаем обработчики событий для кнопок, чтобы реагировать на клики для 1 слайдера
prevButton_one.addEventListener('click', showPreviousSlide.bind(null, 1));
nextButton_one.addEventListener('click', showNextSlide.bind(null, 1));

// Устанавливаем обработчики событий для кнопок, чтобы реагировать на клики для 2 слайдера
prevButton_two.addEventListener('click', showPreviousSlide.bind(null, 2));
nextButton_two.addEventListener('click', showNextSlide.bind(null, 2));

// Устанавливаем обработчики событий для кнопок, чтобы реагировать на клики для 3 слайдера
prevButton_third.addEventListener('click', showPreviousSlide.bind(null, 3));
nextButton_third.addEventListener('click', showNextSlide.bind(null, 3));

// Функция для показа предыдущего слайда для всех слайдеров
function showPreviousSlide(slNum) {
    if (slNum === 1) {
        slideIndex = (slideCount - 1 + slideIndex) % slideCount;
        cur_slide_num_1.innerHTML = (slideIndex + 1).toString();
    }
    else if (slNum === 2) {
        slideIndex_2 = (slCount_2 - 1 + slideIndex_2) % slCount_2;
        cur_slide_num_2.innerHTML = (slideIndex_2 + 1).toString();
    }
    else {
        slideIndex_3 = (slideCount_3 - 1 + slideIndex_3) % slideCount_3;
        cur_slide_num_3.innerHTML = (slideIndex_3 + 1).toString();
    }
  updateSlider(slNum);
}

// Функция для показа следующего слайда для всех слайдов
function showNextSlide(slNum) {
    if (slNum === 1) {
        slideIndex = (slideIndex + 1) % slideCount;
        cur_slide_num_1.innerHTML = (slideIndex + 1).toString();
    }
    else if (slNum === 2) {
        slideIndex_2 = (slideIndex_2 + 1) % slCount_2;
        cur_slide_num_2.innerHTML = (slideIndex_2 + 1).toString();
    }
    else {
        slideIndex_3 = (slideIndex_3 + 1) % slideCount_3;
        cur_slide_num_3.innerHTML = (slideIndex_3 + 1).toString();
    }

    updateSlider(slNum);
  }

// Функция для обновления отображения слайдера, показывая только текущий слайд и скрывая остальные.
function updateSlider(slNum) {
    if (slNum === 1) {
        slides_1.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }
    else if (slNum === 2) {
        slides_2.forEach((slide, index) => {
            if (index === slideIndex_2) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }
    else {
        slides_3.forEach((slide, index) => {
            if (index === slideIndex_3) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }
  }
