const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 4,
    centeredSlides: true,
    autoplay: {
      enabled: true,
      delay: 1000
    },
    pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
  });