var link = document.querySelector(".button-feedback-1");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".close-button");
var name = popup.querySelector("[name=feedback-name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=feedback-email]");
var message = popup.querySelector("[name=feedback-message]");
var storage = localStorage.getItem("name");
var body = document.querySelector("body");
var blur = document.querySelector(".blur");

link.addEventListener("click", function (evt) {
  evt.preventDefault();

  popup.classList.add("modal-show");
  popup.classList.add("modal-window-fade");
  body.classList.add("fixed");
  blur.style.display = 'block';

      
  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  popup.classList.remove("modal-window-fade");
  body.classList.remove("fixed");
  blur.style.display = 'none';
  name.focus();
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.remove("modal-window-fade");
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("name", name.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-window-fade");
      popup.classList.remove("modal-error");
      body.classList.remove("fixed");
      blur.style.display = 'none';
    }
  }
});