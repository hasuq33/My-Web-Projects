var testiomnialData = [
    {
        link:"https://www.youtube.com/watch?v=H5pYyh5p4vk",
    },
    {
        link:"https://www.youtube.com/watch?v=dQd3BXToHbI",
    },
    {
        link:"https://www.youtube.com/watch?v=YHwhZNUusKA",
    },
    {
        link:"https://www.youtube.com/watch?v=lhHaJENpbqo",
    },
    {
        link:"https://www.youtube.com/watch?v=SkURRbREjbg&t=930s",
    },
    {
        link:"https://www.youtube.com/watch?v=gKvlfn0YzLc",
    }
]
var slideHolder = document.querySelector("#slideHolder")
for (let i of testiomnialData) slideHolder.innerHTML += `<div class="swiper-slide"><iframe width="560" height="315" src="https://www.youtube.com/embed/${embedSrc(i.link)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div>`

const swiper = new Swiper('#craouselContainer', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    // effect: "coverflow",
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: { delay: 5000 }
});
window.onresize = queryResizer
function queryResizer() {
    if (window.innerWidth < 724) swiper.params.slidesPerView = 2
    if (window.innerWidth > 501) swiper.params.slidesPerView = 2
    if (window.innerWidth > 724) swiper.params.slidesPerView = 3
    if (window.innerWidth < 501) swiper.params.slidesPerView = 1
    swiper.update()
}
function embedSrc(ytUrl) {
    var regex = /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w-]+)/;
    var match = ytUrl.match(regex);
    return match ? match[1] : null;
}

