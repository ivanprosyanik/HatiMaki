document.addEventListener("DOMContentLoaded", () => {

  const questionBtn = document.getElementById('question');
  const modal = document.querySelector('.modal');
  const modalClose = document.querySelector('.modal__close-btn');
  const body = document.querySelector('body');

  questionBtn.addEventListener('click', () => {
    modal.classList.add('active');
    body.classList.add('lock');
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    body.classList.remove('lock');

  });

  const banners = new Swiper('.banners__slider', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".banners__dots",
      bulletClass: "banners__dot",
      bulletActiveClass: "banners__dot--active",
      clickable: true,
    },

    navigation: {
      nextEl: '.banners__btn--next',
      prevEl: '.banners__btn--prev',
    },
  });

  const tabsNav = document.querySelectorAll('.product-nav__name');
  const tabsContent = document.querySelectorAll('.product-content__item');

  tabsNav.forEach((navLink, index) => {
    navLink.addEventListener('click', () => {

      tabsNav.forEach(link => {
        link.classList.remove('active')
      })

      navLink.classList.add('active');

      let navIndex = index;

      tabsContent.forEach((item, index) => {
        item.classList.remove('active');

        if (index === navIndex) {
          item.classList.add('active')
        }
      })
    })
  });


  const products = new Swiper('.product-slider--0, .product-slider--3, .product-slider--4, .product-slider--5', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 12,
    pagination: {
      el: ".product-slider__dots",
      bulletClass: "product-slider__dot",
      bulletActiveClass: "product-slider__dot--active",
      clickable: true,
    },
    navigation: {
      nextEl: '.product-slider__btn--next',
      prevEl: '.product-slider__btn--prev',
    },
  });

  const product1 = new Swiper('.product-slider--1, .product-slider--2', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 12,
  });


  const btnPlus = document.querySelector('.product-categories__btn');
  const alcoDrink = document.querySelector('.product-categories__item--alcohol');

  btnPlus.addEventListener('click', () => {
    btnPlus.classList.toggle('active');
    alcoDrink.classList.toggle('active');
  });


  const globalNav = document.querySelector('.global-nav');
  if (globalNav) {
    window.onscroll = () => {
      if (window.pageYOffset > 899) {
        globalNav.classList.add("sticky");
      } else {
        globalNav.classList.remove("sticky");
      }
    };
  }
});