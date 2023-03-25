const carouselImages = document.getElementsByClassName("header__carousel__image");
const buttonRight = document.getElementById("carousel-right-button");
const buttonLeft = document.getElementById("carousel-left-button");

let carouselIndex = 0;

carouselImages.item(0).classList.toggle("hidden");

buttonRight.addEventListener("click", e => {
    carouselRight();
})

buttonLeft.addEventListener("click", e => {
    carouselLeft();
})

function carouselRight() {
    carouselImages.item(carouselIndex).classList.toggle("hidden");


    carouselIndex++;
    if (carouselIndex + 1 > carouselImages.length)
        carouselIndex = 0;


    carouselImages.item(carouselIndex).classList.toggle("hidden");
}

function carouselLeft() {
    carouselImages.item(carouselIndex).classList.toggle("hidden");

    carouselIndex--;
    if (carouselIndex <= 0)
        carouselIndex = carouselImages.length - 1;


    carouselImages.item(carouselIndex).classList.toggle("hidden");
}