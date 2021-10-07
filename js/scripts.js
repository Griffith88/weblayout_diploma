window.addEventListener('resize', function () {
  eventSwiper();
})

const swiper = new Swiper('.hero__banner', {
  loop: true,
  freeMode: true,
  spaceBetween: 0,
  autoplay: {
    delay: 2000,
  },
  effect: 'fade',
  speed: 1000,
});

const element = document.querySelector(".selector-form");
const choices = new Choices(element, {
  searchEnabled: false,
  position: "bottom",
  shouldSort: false,
});

const swiper_galery = new Swiper('.gallery-right__cards-form', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  pagination: {
    el: ".gallery-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    691: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 34,
    },
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 50,
    },
  }
});

$(function () {
  $("#accordion").accordion({
    icons: false,
    heightStyle: "content",
    collapsible: true,
    active: 0,
  });
});

$(function () {
  $("#accordion-empty").accordion({
    icons: false,
    heightStyle: "content",
    collapsible: true,
    active: 0,
  });
});

const swiper_events = document.querySelector('.events-swiper')
let swiperEvents;
function eventSwiper () {
  if (window.innerWidth <= 615 && swiper_events.dataset.mobile == 'false') {
    swiperEvents = new Swiper(swiper_events, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    });
    swiper_events.dataset.mobile = "true";
  }
  else if (window.innerWidth > 615) {
    swiper_events.dataset.mobile = 'false';
    if (swiper_events.classList.contains('swiper-initialized')) {
      swiperEvents.destroy()
    }
  }
}

const swiper_editions = new Swiper('.editions-swiper', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 50,
  pagination: {
    el: ".edition-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".editions-next",
    prevEl: ".editions-prev",
  },
  breakpoints: {
    691: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1520: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  }
});


const projects_swiper = new Swiper('.partners-swiper', {
  freeMode: false,
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  navigation: {
    nextEl: ".projects-next",
    prevEl: ".projects-prev",
  },
});
