let sliders = document.querySelectorAll('.gallery-slider');
let current = 0;

function slider() {
    for (let i = 0; i< sliders.length; i++) { 
        sliders[i].classList.add('gallery-opacity');
    }
    sliders[current].classList.remove('gallery-opacity');
}

slider();

document.querySelector('.gallery-slider-left').onclick = function () {
    if (current -1 == -1) {
        current = sliders.length -1;
    }
    else {
        current--;
    }
    slider();
};

document.querySelector('.gallery-slider-right').onclick = function () {
    if (current + 1 == sliders.length) {
        current = 0;
    }
    else {
        current++;
    }
    slider();
};





