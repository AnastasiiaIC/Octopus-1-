// Функция, для открытия попапа
function openPopup() {
  var popup = document.querySelector('.popup'); //для попап окна с соглашением
  popup.style.display = 'block';
  /*var popup_form = document.querySelector('.popup-form'); // для попап-формы
  popup_form.style.display = 'block';*/
}

// Функция, для закрытия попап окна с соглашением
function closePopup() {
  var popup = document.querySelector('.popup'); //для попап окна с соглашением
  popup.style.display = 'none';
  /*var popup_form = document.querySelector('.popup-form'); // для попап-формы
  popup_form.style.display = 'none';*/
}

// Функция, для открытия попапа
function openPopupForm() {
  var popup_form = document.querySelector('.popup-form'); // для попап-формы
  popup_form.style.display = 'block';
}

// Функция, для закрытия попап окна с соглашением
function closePopupForm() {
  var popup_form = document.querySelector('.popup-form'); // для попап-формы
  popup_form.style.display = 'none';
}