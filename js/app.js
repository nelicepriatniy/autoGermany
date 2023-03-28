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

//активация хедера

// let header = document.querySelector('header');
// window.onscroll = function(){
//   if (window.scrollY > 100) {
//     header.classList.add('active')
//   } else {
//     header.classList.remove('active')

//   }
// }



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