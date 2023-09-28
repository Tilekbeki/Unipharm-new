'use strict';

const buttonsKnowMore = document.querySelectorAll('#knowMore'),
      popUpLayer = document.querySelector('.pop-up-layer'),
      mainLayer = document.querySelector('main'),
      closeButtons = document.querySelectorAll('.close-modal'),
      shortArticles = document.querySelectorAll('.helpfullArticles__card-content'),
      arrowShortArticles =document.querySelectorAll('.helpfullArticles__card-header__arrow'),
      menus = document.querySelector('.menu__wrapper').querySelectorAll('li'),
      identityBlock = document.querySelector('#identity'),
      videoCastsBlock = document.querySelector('#videoCasts'),
      articlesBlock = document.querySelector('#articles'),
      famousBlock = document.querySelector('.whatFamous'),
      goalsBlock = document.querySelector('.goalsPrescription'),
      baseDirectionsBlock = document.querySelector('.baseDirections'),
      perspectivesBlock = document.querySelector('.perspectives'),
      dailyDoseBlock = document.querySelector('.dailyDose'),
      knowMoreButtons = document.querySelectorAll('.more'),
      sliderLine = document.querySelector('.slider-line'),
      slideField = document.querySelector('.inner'),
      slidesWrapper = document.querySelector('.goalsPrescription__wrapper');
      let wrapWidth = window.getComputedStyle(slidesWrapper).width;
      slideField.style.width = 100 +'%';
    
      slideField.style.display = 'flex';
      slideField.style.transition = '0.5s all';
      slidesWrapper.style.overflow = 'hidden';
      sliderLine.addEventListener('input', ()=> {
        slideField.style.transform = `translateX(-${sliderLine.value*6.61}px)`;
        var val = sliderLine.value;
        sliderLine.style.backgroundSize = sliderLine.value + '% 100%';
      });
function openPopUp() {
    buttonsKnowMore.forEach((btn)=>{
        btn.addEventListener('click', ()=> {
            popUpLayer.style.zIndex = '999';
            // popUpLayer.style.opacity = '1';
            popUpLayer.classList.add('show-modal');
            popUpLayer.style.position = 'relative'
            mainLayer.style.display = 'none';
            window.scrollTo({top: 0});
        })
    });    
}


function closePopUp() {
    closeButtons.forEach((close)=>{
        close.addEventListener('click', ()=> {
            popUpLayer.style.zIndex = '-1';
            // popUpLayer.style.opacity = '1';
            popUpLayer.classList.remove('show-modal');
            popUpLayer.style.position = 'absolute';
            mainLayer.style.display = 'block';
            console.log('hehe')
            
        });
    });
}

function revealArticle() {
    arrowShortArticles.forEach((arrow)=>{
        arrow.addEventListener('click', ()=> {
            const shortCard =arrow.parentElement.parentElement;
            const content = shortCard.querySelector('.helpfullArticles__card-content');
            arrow.classList.toggle('rotaten');
            if (content.style.display === 'none') {
                content.style.display = 'flex';
            } else {
                content.style.display = 'none';
            }
        })
    })
}

function addActiveClass(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        menus.forEach(menu => {
          menu.classList.remove('active');
          if (menu.querySelector('a').getAttribute('href') === '#' + activeId) {
            menu.classList.add('active');
          }
        });
      } else {
        const activeId = entry.target.getAttribute('id');
        menus.forEach(menu => {
          if (menu.querySelector('a').getAttribute('href') === '#' + activeId) {
            menu.classList.remove('active');
          }
        });
      }
    });
}
 
function openMore() {
    const firstArrow = knowMoreButtons[0].querySelector('img');
    const secondArrow = knowMoreButtons[1].querySelector('img');
    firstArrow.addEventListener('click', ()=>{
        firstArrow.classList.toggle('rotaten');
        toggleDisplay(famousBlock);
        toggleDisplay(perspectivesBlock);
        toggleDisplay(goalsBlock);
        toggleDisplay(baseDirectionsBlock);
    });
    secondArrow.addEventListener('click', ()=>{
        secondArrow.classList.toggle('rotaten');
        toggleDisplay(perspectivesBlock);
        toggleDisplay(dailyDoseBlock);
    });
}

function toggleDisplay(element) {
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

const observer = new IntersectionObserver(addActiveClass, { threshold: 0.1 });
const blocks = [identityBlock, videoCastsBlock, articlesBlock];
blocks.forEach(block => observer.observe(block));



openPopUp();
closePopUp();
revealArticle();
openMore();