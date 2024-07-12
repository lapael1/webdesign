window.onload = function () {
  // swiper ================
  // 프로모션 스와퍼기능
  const swPromotion = new Swiper(".sw-promotion", {
    slidesPerView: 1,
    spaceBetween: 12,
    // nextEl/prevEl 안에 "".~~ .~~"" 으로 입력해주어야함
    navigation: {
      nextEl: ".promotion .sw-next",
      prevEl: ".promotion .sw-prev",
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
    },
  });
};

window.onload = function () {
  const bannerswiper = new Swiper(".bannerswiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    },
  });
};
// 배너 스와이퍼 기능
