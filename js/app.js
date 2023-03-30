var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
});


//анимации при скроле
let windowHeight = window.innerHeight;
let animBlocks = document.querySelectorAll('.animate');
let windowScroll = window.scrollY + windowHeight;

function getPosition(element) {
    var yPosition = 0;

    while (element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return yPosition;
}

window.onscroll = () => {
    animBlocks.forEach(el => {
        windowScroll = window.scrollY + windowHeight;
        let topoffset = getPosition(el);
        console.log(windowScroll)
        if (topoffset < windowScroll) {
            el.classList.add('active');
        }
    })
}

animBlocks.forEach(el => {
    windowScroll = window.scrollY + windowHeight;
    let topoffset = getPosition(el);
    console.log(windowScroll)
    if (topoffset < windowScroll) {
        el.classList.add('active');
    }
})

//открытие/закрытие меню

let openHeaderMenuBtn = document.querySelector('.header__burger')
let headerMenu = document.querySelector('.headerMenu')
let headerMenuCloseBtn = document.querySelector('.burgerWraper__img')
let popupClose = document.querySelector('.popupClose')

openHeaderMenuBtn.onclick = () => {
    headerMenu.classList.add('active')
    popupClose.classList.add('active')
}
headerMenuCloseBtn.onclick = () => {
    headerMenu.classList.remove('active')
    popupClose.classList.remove('active')
}
popupClose.onclick = () => {
    headerMenu.classList.remove('active')
    popupClose.classList.remove('active')
}


//слайдер

const alSale = new Swiper('.as-slider', {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class = "' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.as-next-btn',
    },
});

const alSaleLap = new Swiper('.as-slider-lap', {
    slidesPerView: 2,
    spaceBetween: 20,
    autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class = "' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.as-next-btn',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 40
      }
    }
});


const actSale = new Swiper('.as-slider', {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class = "' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.as-next-btn',
    },
});


const lapTabs = new Swiper('.lap-slider-tabs', {
    slidesPerView: 1,
    spaceBetween: 40,
    autoHeight: true,
    navigation: {
      nextEl: '.st-next',
      prevEl: '.st-prew',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 40
      }
    }
});

//активация хедера



let header = document.querySelector('header');
header.classList.add('active')
let last_scroll = 0;
window.onscroll = function(){
  if (window.scrollY > 10) {
    if(window.scrollY > last_scroll){
      header.classList.remove('active')
    }else{
      header.classList.add('active')
    }
  } else {
    
    header.classList.add('active')
  }
  last_scroll = window.scrollY;
  if(window.scrollY > 10) {
    header.classList.add('bgTrue')
  } else {
    header.classList.remove('bgTrue')

  }
}

//активация лейбла для чекбокса

let labelCheckbox = document.querySelector('.checklabel');

labelCheckbox.onclick = ()=>{
    labelCheckbox.classList.toggle('active')
}

let labelCheckboxa = document.querySelector('.checklabela');

labelCheckboxa.onclick = ()=>{
    labelCheckbox.classList.toggle('active')
}

//открытие/закрытие виджета

let wijetBtn = document.querySelector('.widjet')
let wijetOpen = document.querySelector('.wijet-open')

wijetBtn.onclick = ()=>{
    wijetBtn.classList.toggle('active')
    wijetOpen.classList.toggle('active')
}

//изменения номера слайдера в мобилке lapTabs

let numSlide = document.querySelector('.numSlideThere');
let kolSlides = document.querySelector('.kolSlideThere');
let slides = document.querySelectorAll('.lap-slides')

lapTabs.on('slideChangeTransitionStart', ()=>{
    numSlide.innerHTML = lapTabs.activeIndex + 1;
    kolSlides.innerHTML = slides.length;
})

numSlide.innerHTML = lapTabs.activeIndex + 1;
kolSlides.innerHTML = slides.length;

//открытие всего текста в о нас в мобилке

if(window.innerWidth < 600){
    let moreBtn = document.querySelector('.mob-btn-more-text')
    let blocks = document.querySelectorAll('.not-mob-active')

    moreBtn.onclick = ()=>{
        moreBtn.classList.add('active')
        blocks.forEach(el=>{
            el.classList.add('active')
        })
    }
}