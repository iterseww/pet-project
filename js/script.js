const signUpForm = document.querySelector(".header__sign-up-form");
const headerSignUpButton = document.querySelector(".sign-up-button");
const modalSignUpForm = document.querySelector(".header__sign-up-form");
const signUpFormCloseButton = document.querySelector(".sign-up-form__close-button")

headerSignUpButton.addEventListener('click', () => {
    signUpForm.style.visibility = "visible";
    signUpForm.style.opacity = 1;
});

window.addEventListener('click', (event) => {
    if (event.target == modalSignUpForm || event.target == signUpFormCloseButton) {
        modalSignUpForm.style.visibility = "hidden";
        modalSignUpForm.style.opacity = 0;
    }
});
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 15,
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});