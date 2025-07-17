const swiper = new Swiper('.swiper', {
    // Optional parameters
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    loop: true,
    centeredSlides: true, 
    breakpoints: { 
      768: {
        slidesPerView: 1,
        spaceBetween: 0
      }, 
      1024: {
        slidesPerView: 2,
        spaceBetween: 20
      }, 
      1280: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
  });