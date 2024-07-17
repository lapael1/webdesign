window.onload = function () {
  // swiper ================
  // 시그니처 스와이퍼기능
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
// top버튼 스크롤 기능=======================
const topBtn = document.getElementById("top-btn");
topBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(window.scrollY);
  if (window.scrollY == 0) {
    window.scrollTo({
      top: 2777,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const topBtn = document.querySelector(".top-btn");
  topBtn.addEventListener("click", function () {
    //  scrollToSection()함수는 특정 섹션으로 부드럽게 스크롤하는 기능
    scrollToSection("#header");
  });
  //   scrollToSection()함수 작성
  function scrollToSection(sectionId) {
    // console.log(sectionId);
    // sectionId로 지정된 요소를 찾아서 section변수에 저장
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
});
//화살표 이미지 회전
const topBtnImg = document.getElementById("top-btn-img");
window.addEventListener("scroll", function (scTop) {
  scTop = window.document.documentElement.scrollTop;
  if (scTop > 0) {
    topBtnImg.classList.add("up");
  } else {
    topBtnImg.classList.remove("up");
  }
});

