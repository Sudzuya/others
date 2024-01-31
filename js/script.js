import swiper from './libs/index.js'
import addPopup from './files/popup.js';

document.addEventListener('DOMContentLoaded', ()=> {

  const initSwiper = swiper.default

  const eventSlider = new initSwiper('.slider-event.swiper', {
  
    loop: true,
    wrapperClass: 'swiper__wrapper',
    slideClass: 'swiper__slide',
  
    navigation: {
      nextEl: '.swiper__button--next',
      prevEl: '.swiper__button--prev',
    },

    breakpoints: {

      360: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 'auto',
        spaceBetween: 32,
      }
    }
  
  });
  
  const burger = document.querySelector('.burger-menu__burger')

  burger.addEventListener('click', ()=> {
    document.documentElement.classList.toggle('open-menu')
  })

  
  const linkMenu = document.querySelectorAll('.burger-menu a[href]')
  const linkMenuWithHref = Array.from(linkMenu).filter((link)=> link.hash ? link : '')


  linkMenuWithHref.forEach((link)=> {
    link.addEventListener('click', ()=> {
      closeMenu ()
    })
  })

  const closeMenu = () => {
    let html = document.documentElement

    if (html.classList.contains('open-menu')) html.classList.remove('open-menu')
  }


addPopup('test', 'какой то текст')


const accordionItems = document.querySelectorAll('.accordion__item')

accordionItems.forEach((item)=> {
  
    const itemTitle = item.querySelector('.accordion__title')
    const itemContent = item.querySelector('.accordion__content')


    itemTitle.addEventListener('click', ()=> {
      item.classList.toggle('show')
    })

  })

})

