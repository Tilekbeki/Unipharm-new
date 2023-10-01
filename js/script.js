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
      closeArticlesButtons = document.querySelectorAll('#articles-close'),
      btnDrozdov = document.querySelector('#btnFirstArticle'),
      btnShulpekova = document.querySelector('#btnSecondArticle'),
      btnHlynov = document.querySelector('#btnThirdArticle'),
      popArticleShulpekova = document.querySelector('#Shylpekova'),
      popArticleDrozdov = document.querySelector('#ModernTrends'),
      popArticleHlynov = document.querySelector('#ModernWays'),
      burgerIcon = document.querySelector('.mobile-open'),
      buregCloseIcon = document.querySelector('.mobile-close'),
      burgerMenu = document.querySelector('.menu-mobile'),
      manFirst = document.querySelector('.trends__text-block__person-img');
     

      
function openPopUp() {
    buttonsKnowMore.forEach((btn)=>{
        btn.addEventListener('click', ()=> {
            popUpLayer.style.zIndex = '999';
            // popUpLayer.style.opacity = '1';
            popUpLayer.classList.add('show-modal');
            popUpLayer.style.position = 'relative'
            mainLayer.style.display = 'none';
            document.querySelector('body').style.overflow ='';
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
            console.log('hehe');
            
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

function openArticles() {
    let btns = [btnDrozdov,btnHlynov,btnShulpekova];
    btns.forEach((btn)=>{
        btn.addEventListener('click', function() {
          console.log('это тут');
            if (btn === btnDrozdov) {
                popArticleDrozdov.style.display = 'flex';
                document.querySelector('body').style.overflow ='hidden';
                console.log('это тут');
            }
            if (btn === btnHlynov) {
                popArticleHlynov.style.display = 'flex';
                document.querySelector('body').style.overflow ='hidden';
                console.log('это тут');
            }
            if (btn === btnShulpekova){
                popArticleShulpekova.style.display = 'flex';
                document.querySelector('body').style.overflow ='hidden';
                console.log('это тут');
            }
        });
    })
}

function closeArticles() {
    let popups = [popArticleDrozdov,popArticleHlynov,popArticleShulpekova];
    closeArticlesButtons.forEach((btn)=>{
        btn.addEventListener('click', ()=> {
            popups.forEach((pop)=>{
                pop.style.display = 'none';
                document.querySelector('body').style.overflow = '';
            });
        });
    });
    popups.forEach((popup) => {
        popup.addEventListener('click', (event) => {
          if (event.target === popup) {
            popup.style.display = 'none';
            document.querySelector('body').style.overflow = '';
          }
        });
      });
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          popups.forEach((popup) => {
            popup.style.display = 'none';
            document.querySelector('body').style.overflow = '';
          });
        }
      });
}

function swipeByButton(sliderLinee,slideFieldd,slidesWrapperr, object) {
  let n;
  if(object=='scale'){
    if (window.innerWidth < 1200) {
      n=0.3;
    }
    if (window.innerWidth < 767) {
      n=0.8;
    }
    if (window.innerWidth < 575) {
      n=0.3;
    }
  }
  if(object=='scheme'){
    console.log('scheme');
    n=1.1
  }

    const sliderLine = document.querySelector(sliderLinee),
      slideField = document.querySelector(slideFieldd),
      slidesWrapper = document.querySelector(slidesWrapperr);
      let wrapWidth = slidesWrapper.getBoundingClientRect();
      let innerWidth =  slideField.getBoundingClientRect();
    

      let startX, endX;
      slideField.addEventListener('touchmove', function(event) {
        let diffX = event.touches[0].pageX - startX;
        slideField.style.transform = `translateX(-${diffX}px)`;
      }); 

      

      slideField.addEventListener('touchstart', function(event) {
        startX = event.touches[0].pageX;
      });
      
      slideField.addEventListener('touchend', function(event) {
        endX = event.changedTouches[0].pageX;
        let diffX = endX - startX;
        console.log(diffX)
        let contentShift = (1145-wrapWidth.width)/100*n*100;
        
        if (diffX <0) {
          slideField.style.transform = `translateX(-${contentShift}px)`;
          console.log('transleted');
          sliderLine.value = 100;
          sliderLine.style.backgroundSize = sliderLine.value + '% 100%';
        }
        if (diffX>=0) {
          slideField.style.transform = ``;
          sliderLine.value = 0;
          sliderLine.style.backgroundSize = sliderLine.value + '% 100%';
        }
      });
      console.log((1145-wrapWidth.width)/100*n*100);
      console.log('сверху разница')
    // sliderLine.style.backgroundSize = sliderLine.value + '5% 100%';
      slideField.style.display = 'flex';
      slideField.style.transition = '0.5s all';
      slidesWrapper.style.overflow = 'hidden';
      sliderLine.addEventListener('input', ()=> {
        let contentShift = (1145-wrapWidth.width)/100*(+sliderLine.value)*n;
        slideField.style.transform = `translateX(-${contentShift}px)`;
        console.log(slideField.style.transform);
        console.log(n)
        sliderLine.style.backgroundSize = +sliderLine.value + '% 100%';
      });

    
}

function openBurgerMenu() {
  burgerIcon.addEventListener('click', ()=>{
    burgerMenu.style.left = '0px';
    document.querySelector('.mobile-close').style.display = 'block';
    document.querySelector('.mobile-open').style.display = 'none';
  });
  

  

  
}

function closeBurgerMenu() {
  buregCloseIcon.addEventListener('click', ()=>{
    burgerMenu.style.left = '-320px';
    document.querySelector('.mobile-open').style.display = 'block';

    document.querySelector('.mobile-close').style.display = 'none';

  });
}

function showPerson(entries){
  entries.forEach((entry)=>{
    if (entry.isIntersecting) {
      document.querySelector('.newDownload').style.display = 'none';
    } else {
      document.querySelector('.newDownload').style.display = 'block';
    }
  })
}

//наблюдатель для меню подсвечивания
const observer = new IntersectionObserver(addActiveClass, { threshold: 0.1 });
const blocks = [identityBlock, videoCastsBlock, articlesBlock];
blocks.forEach(block => observer.observe(block));


//наблюдатель за мужчиной
const observerTwo = new IntersectionObserver(showPerson, {threshold: 0.1});

observerTwo.observe(manFirst);


//закрытие по нажатию на одно из пунктов
const menusBurger = burgerMenu.querySelectorAll('li');
menusBurger.forEach((item)=>{
  item.addEventListener('click',()=>{
    console.log(menusBurger);
    document.querySelector('.mobile-open').style.display = 'block';

    document.querySelector('.mobile-close').style.display = 'none';
    burgerMenu.style.left = '-320px';
  });
});


openPopUp();
closePopUp();
revealArticle();
openMore();
openArticles();
closeArticles();
swipeByButton('.slider-line', '.inner','.goalsPrescription__wrapper', 'scale');
swipeByButton('.slider-line-second', '.inner-2','.methabolismRole__wrapper', 'scheme');
openBurgerMenu();
closeBurgerMenu();