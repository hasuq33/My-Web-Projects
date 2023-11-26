var swiper = new Swiper(".harshiv_slider", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    simulateTouch : true,
    loopFillGroupWithBlank: false,
    grabCursor: true,
    centeredSlidesBounds:false,
    pagination: {
        el: ".swiper-pagination-exp",
        clickable: true,
    },
    navigation: {
        nextEl: ".harshiv3",
        prevEl: ".harshiv4",
    },
    centeredSlides: true,
    autoplay: {
        enabled: true,
        delay: 5000
    },
    breakpoints:{
        200:{
            slidesPerView:1,
        },
        320:{
            slidesPerView:1,
        },
        480:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:3,
        },
    }

});

var swiper1 = new Swiper(".harshiv_slider_exp", {
    loop:true,
    autoplay:{
        delay:2000,
    },
    simulateTouch : true,
    loopFillGroupWithBlank: false,
    grabCursor: true,
    centeredSlidesBounds:false,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".harshiv-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".harshiv1",
        prevEl: ".harshiv2",
    },
    centeredSlides: true,

    breakpoints:{
        200:{
            slidesPerView:1,
        },
        320:{
            slidesPerView:1,
        },
        480:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:3,
        },
    }

});