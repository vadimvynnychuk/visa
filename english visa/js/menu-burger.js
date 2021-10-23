let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.header-menu');
let container = document.querySelector('.container');
let headerLink = document.querySelector('.header-menu__link');

menuBtn.addEventListener('click',function(){
    menuBtn.classList.toggle('active-burger');
    menu.classList.toggle('active-menu');
    container.classList.toggle('active-container');
});





//????..закриває коли нажимати на "головну",на всі решту силок чомусь не працює


headerLink.addEventListener('click',function(){
    menu.classList.remove('active-menu');
    container.classList.remove('active-container');
    menuBtn.classList.remove('active-burger');
})








