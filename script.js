const myslide = document.querySelectorAll('.myslider'),
    dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 6000);
function autoslide() {
    counter += 1;
    slidefun(counter);
    resetTimer();
}
function plusSlides(n) {
    counter += 1;
    slidefun(counter);
}
function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide, 6000);
}
function slidefun(n) {
    let i;
    for(i = 0;i<myslide.length;i++){
        myslide[i].style.display = "none";
    }
    for(i = 0;i<dot.length;i++){
        dot[i].classList.remove('active');
    }
    if(n > myslide.length){
        counter = 1;
    }
    if(n < 1){
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active');
}