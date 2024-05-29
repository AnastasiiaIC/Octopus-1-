// Получаем элементы 1 слайдера
const octopus_slaider = document.querySelector('.octopus_slaider');
const prevButton_one = document.querySelector('.prev-button-one');
const nextButton_one = document.querySelector('.next-button-one');
const slides = Array.from(octopus_slaider.querySelectorAll('img')); //находим общее количество слайдов
const slideCount = slides.length;
let slideIndex = 0; //индекс активного слайда

// Устанавливаем обработчики событий для кнопок? чтобы реагировать на клики
prevButton_one.addEventListener('click', showPreviousSlide);
nextButton_one.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
  }

// Функция для обновления отображения слайдера, показывая только текущий слайд и скрывая остальные.
function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

// При загрузке страницы мы вызываем updateSlider(), чтобы отобразить первый слайд и настроить слайдер для начала работы.
updateSlider(); 

// Функция, для открытия попап окна
function openPopup() {
  var popup = document.querySelector('.popup');
  popup.style.display = 'block';
}


// Функция, для закрытия попап окна
function closePopup() {
  var popup = document.querySelector('.popup');
  popup.style.display = 'none';
}