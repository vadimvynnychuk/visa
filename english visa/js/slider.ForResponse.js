let slid = document.querySelectorAll('.response-slider');
let currents = 0;

function slidergo() {
    for (let i = 0; i< slid.length; i++) { 
        slid[i].classList.add('response-opacity');
    }
    slid[currents].classList.remove('response-opacity');
}

slidergo();

document.querySelector('.response-slider-left').onclick = function () {
    if (currents -1 == -1) {
        currents = slid.length -1;
    }
    else {
        currents--;
    }
    slidergo();
};

document.querySelector('.response-slider-right').onclick = function () {
    if (currents + 1 == slid.length) {
        currents = 0;
    }
    else {
        currents++;
    }
    slidergo();
};

