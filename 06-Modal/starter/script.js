'use strict';

let buttonAll = document.querySelectorAll(".show-modal");
let cancleButton = document.querySelector(".close-modal");
let overLay = document.querySelector(".overlay");
let model = document.querySelector(".modal");

for (let i = 0; i < buttonAll.length; i++) {
    const element = buttonAll[i].addEventListener('click', modelControllerOpen)
}

function modelControllerOpen() {
    model.classList.remove('hidden');
    overLay.classList.remove('hidden')
}

cancleButton.addEventListener('click', modelControllerClose)

function modelControllerClose() {
    model.classList.add('hidden');
    overLay.classList.add('hidden')
}

overLay.addEventListener('click', modelControllerClose)

document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
       modelControllerClose();
    }
})

