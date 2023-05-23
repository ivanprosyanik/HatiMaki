document.addEventListener("DOMContentLoaded", () => {

  const questionBtn = document.querySelectorAll('#question');
  const modal = document.querySelector('.modal');
  const modalClose = document.querySelector('.modal__close-btn');
  const body = document.querySelector('body');

  questionBtn.forEach(el => {
    el.addEventListener('click', () => {
      modal.classList.add('active');
      body.classList.add('lock');
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
      body.classList.remove('lock');
    });
  };

  const banners = new Swiper('.banners__slider', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    speed: 500,
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

    breakpoints: {
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 6,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 12,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 12,
      },

    }
  });

  const product1 = new Swiper('.product-slider--1, .product-slider--2', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 12,
  });


  const btnPlus = document.querySelector('.product-categories__btn');
  const alcoDrink = document.querySelector('.product-categories__item--alcohol');
  if (btnPlus) {
    btnPlus.addEventListener('click', () => {
      btnPlus.classList.toggle('active');
      alcoDrink.classList.toggle('active');
    });
  }


  const globalNav = document.querySelector('.global-nav');
  if (globalNav && window.innerWidth >= 992) {
    window.onscroll = () => {
      if (window.pageYOffset > 899) {
        globalNav.classList.add("sticky");
      } else {
        globalNav.classList.remove("sticky");
      }
    };
  }

  const burger = document.querySelector('.burger');
  const headerBotMenu = document.querySelector('.header-bottom__mobile-menu');

  burger.addEventListener('click', () => {
    headerBotMenu.classList.toggle('show');
    burger.classList.toggle('active');
  });

  const headerBottom = document.querySelector('.header-bottom__mobile');


  if (headerBottom) {
    window.onscroll = () => {
      if (window.pageYOffset > 273) {
        headerBottom.classList.add("sticky");
      } else {
        headerBottom.classList.remove("sticky");
      }
    };
  }

  const footerItem = document.querySelectorAll('.footer__item');


  footerItem.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.footer__item-name');
      const content = self.querySelector('.footer__item-list');

      self.classList.toggle('open');

      if (self.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = null;
      }
    });
  });

  const headerSelect = document.querySelector('.header-top__item--select');
  const selectDropdown = document.querySelector('.dropdown__list');

  if (headerSelect) {
    headerSelect.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('active');
      selectDropdown.classList.toggle('active');
    });
  };



  const wokLink = document.querySelectorAll('.wok__link');
  const fullPrice = document.querySelector('.wok__cart-price');


  const mainDishItem = document.getElementById('main-dish-item');
  const garnishItem = document.getElementById('garnish-item');
  const sauceItem = document.getElementById('sauce-item');


  let price = 0;

  const randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const priceWithoutSpaces = (str) => {
    return str.replace(/\s/g, '');
  };

  const normalPrice = (num) => {
    const str = String(num.toFixed(2));
    return str.replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');
  };

  const plusFullPrice = (currentPrice) => {
    return price += currentPrice;
  };

  const printFullPrice = () => {
    fullPrice.textContent = `${normalPrice(price)} €`;
  };

  const minusFullPrice = (currentPrice) => {
    return price -= currentPrice;
  };

  const generateCartProduct = (img, title, price, id) => {
    return `
    
    <article class="wok-card" data-name="${id}">
      <img class="wok-card__img" src="${img}" alt="Основное блюдо для">
      <span class="wok-card__name">${title}</span>
      <span class="wok-card__price">${price + '0'} €</span>
    </article>
    `;
  }

  wokLink.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      let self = e.currentTarget;
      let parent = self.closest('.wok__item');
      let id = el.getAttribute('data-name');
      let img = parent.querySelector('.wok-card__img').getAttribute('src');
      let title = parent.querySelector('.wok-card__name').textContent;
      let priceNumber = parseFloat(priceWithoutSpaces(parent.querySelector('.wok-card__price').textContent));
      plusFullPrice(priceNumber);
      console.log(price);
      printFullPrice();


      if (self.classList.contains('active')) {
        self.classList.remove('active');
      } else {
        self.classList.add('active');
      }


      mainDishIdItem = mainDishItem.getAttribute('data-name');
      garnishIdItem = garnishItem.getAttribute('data-name');
      sauceIdItem = sauceItem.getAttribute('data-name');


      if (id === mainDishIdItem) {
        mainDishItem.insertAdjacentHTML('beforeend', generateCartProduct(img, title, priceNumber, id));
      } else if (id === garnishIdItem) {
        garnishItem.insertAdjacentHTML('beforeend', generateCartProduct(img, title, priceNumber, id));
      } else if (id === sauceIdItem) {
        sauceItem.insertAdjacentHTML('beforeend', generateCartProduct(img, title, priceNumber, id));
      };
      const nestedMainElements = mainDishItem.querySelectorAll('.wok-card');
      const nestedGarnishElements = garnishItem.querySelectorAll('.wok-card');
      const nestedSauceElements = sauceItem.querySelectorAll('.wok-card');
      console.log(nestedMainElements);
      nestedMainElements.forEach(el => {
        el.addEventListener('click', () => {
          self.classList.remove('active');
          el.remove();
          minusFullPrice(priceNumber);
          printFullPrice();
        });
      });
      nestedGarnishElements.forEach(el => {
        el.addEventListener('click', () => {
          el.remove();
          self.classList.remove('active');
          minusFullPrice(priceNumber);
          printFullPrice();

        });
      });
      nestedSauceElements.forEach(el => {
        el.addEventListener('click', () => {
          el.remove();
          self.classList.remove('active');
          minusFullPrice(priceNumber);
          printFullPrice();
        });
      });
    });
  });
});