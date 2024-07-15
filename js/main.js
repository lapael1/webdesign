window.onload = function () {
  // swiper ================
  // 프로모션 스와퍼기능
  const swSignature = new Swiper(".sw-signature", {
    slidesPerView: 1,
    spaceBetween: 12,
    // nextEl/prevEl 안에 "".~~ .~~"" 으로 입력해주어야함
    navigation: {
      nextEl: ".signature .sw-next",
      prevEl: ".signature .sw-prev",
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
        slidesPerView: 3,
      },
    },
  });


const swFood = new Swiper(".sw-food", {
  slidesPerView: 1,
  spaceBetween: 12,
  // nextEl/prevEl 안에 "".~~ .~~"" 으로 입력해주어야함
  navigation: {
    nextEl: ".food .sw-next",
    prevEl: ".food .sw-prev",
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
      slidesPerView: 3,
    },
  },
});

// 배너 스와이퍼 기능
const swBanner = new Swiper(".bannerSwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
});
};

