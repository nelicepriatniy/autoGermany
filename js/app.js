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
// window.onscroll = function(){
// }

//анимация при скролле


if(window.innerWidth > 1100) {
    let windowHeight = window.innerHeight;
    let animBlocks = document.querySelectorAll('.animate');
    let windowScroll = window.scrollY + windowHeight;
    
    function getPosition(element) {
        var yPosition = 0;
    
        while(element) {
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }
    
        return yPosition;
    }
    
    window.onscroll = ()=>{
        animBlocks.forEach(el=>{
            windowScroll = window.scrollY + windowHeight;
            let topoffset = getPosition(el);
            if(topoffset < windowScroll) {
                el.classList.add('active');
            }
        })
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

    animBlocks.forEach(el=>{
        windowScroll = window.scrollY + windowHeight;
        let topoffset = getPosition(el);
        if(topoffset < windowScroll) {
            el.classList.add('active');
        }
    })
    
} else {
    let windowHeight = window.innerHeight;
    let animBlocks = document.querySelectorAll('.animate');
    let windowScroll = window.scrollY + windowHeight;

    animBlocks.forEach(el=>{
        el.classList.add('active')
    })
    
    function getPosition(element) {
        var yPosition = 0;
    
        while(element) {
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }
    
        return yPosition;
    }
    
    window.onscroll = ()=>{
        animBlocks.forEach(el=>{
            windowScroll = window.scrollY + windowHeight;
            let topoffset = getPosition(el);
            if(topoffset < windowScroll) {
                el.classList.add('active');
            }
        })
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

    animBlocks.forEach(el=>{
        windowScroll = window.scrollY + windowHeight;
        let topoffset = getPosition(el);
        if(topoffset < windowScroll) {
            el.classList.add('active');
        }
    })

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

//работоспособность калькулятора

let buttoncalc = document.querySelector('.calc-btn');
let priceCalcInp  = document.querySelector('#cena-calc');
let yearCalcInp  = document.querySelector('#year-calc');
let obemCalcInp  = document.querySelector('#obem-calc');
let variantCalcInp  = document.querySelector('#variant-calc');
let pricewcalcIn = document.querySelector('.calc-price');

buttoncalc.onclick = ()=>{
    let priceCalcInpValue = priceCalcInp.value;
    let yearCalcInpValue = yearCalcInp.value;
    let obemCalcInpValue = obemCalcInp.value;
    let variantCalcInpValue = variantCalcInp.value;
    let yearNum = Number(yearCalcInpValue);
    let obemNum = Number(obemCalcInpValue);
    let priceNum = Number(priceCalcInp.value);
    let tamNum = Number(variantCalcInpValue.value);
    console.log("цена = " + priceCalcInpValue)
    console.log("год = " + yearNum)
    console.log("объем = " + obemCalcInpValue)
    console.log("вариант = " + variantCalcInpValue)

    let var1 = (priceNum) - ((priceNum)/100*16);

    let var2;

    if (yearNum > 20){
        if(priceNum < 8500) {
            var2 = priceNum/100*54;
        } else if(priceNum >= 8500 && priceNum <= 169000) {
            var2 = priceNum/100*48;

        } else (
            var2 = priceNum/100*35
        )
    } else if (yearNum <= 20 && yearNum >= 15) {
        if(obemNum <= 1) {
            var2 = obemNum*1000000*1.5
        } else if(obemNum >= 1 && obemNum <= 1.5) {
            var2 = obemNum*1000000*1.7
        } else if(obemNum >= 1.5 && obemNum <= 1.8) {
            var2 = obemNum*1000000*2.5
        } else if(obemNum >= 1.8 && obemNum <= 2.3) {
            var2 = obemNum*1000000*2.7
        } else if(obemNum >= 2.3 && obemNum <= 3) {
            var2 = obemNum*1000000*3
        } else if(obemNum > 3) {
            var2 = obemNum*1000000*3.6
        }
    } else if (yearNum < 15) {
        if(obemNum <= 1) {
            var2 = obemNum*1000000*3
        } else if(obemNum >= 1 && obemNum <= 1.5) {
            var2 = obemNum*1000000*3.2
        } else if(obemNum >= 1.5 && obemNum <= 1.8) {
            var2 = obemNum*1000000*3.5
        } else if(obemNum >= 1.8 && obemNum <= 2.3) {
            var2 = obemNum*1000000*4.8
        } else if(obemNum >= 2.3 && obemNum <= 3) {
            var2 = obemNum*1000000*5
        } else if(obemNum > 3) {
            var2 = obemNum*1000000*5.7
        }
    }
    let var3 = var1 +var2;

    
    console.log("var1 = " + var1)
    console.log("var2 = " + var2)
    console.log("var3 = " + var3)


    pricewcalcIn.innerHTML = var1 + var2 + var3;

}