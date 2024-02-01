var hamburger = document.querySelector('.hamburger');
var menuview = document.querySelector('.menu-view');
var width=screen.width;

hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    menuview.classList.toggle('is-open');
    
});

