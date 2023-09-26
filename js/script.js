'use strict';

const buttonsKnowMore = document.querySelectorAll('#knowMore'),
      popUpLayer = document.querySelector('.pop-up-layer'),
      mainLayer = document.querySelector('main'),
      closeButtons = document.querySelectorAll('.close-modal');
console.log(buttonsKnowMore)
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

// document.querySelector('.mechanism-button').addEventListener('click', ()=> {
//     popUpLayer.style.zIndex = '-1';
//     // popUpLayer.style.opacity = '1';
//     popUpLayer.classList.remove('show-modal');
//     popUpLayer.style.position = 'absolute';
//     mainLayer.style.display = 'block';
//     console.log('hehe')
    
// });
// closeButtons.forEach((btn)=>{
//     btn.addEventListener('click', ()=> {
//         popUpLayer.style.zIndex = '-1';
//         // popUpLayer.style.opacity = '1';
//         popUpLayer.classList.remove('show-modal');
//         popUpLayer.style.position = 'absolute';
//         mainLayer.style.display = 'block';
//         console.log('hehe')
        
//     });
// }); 
window.onload = function() {
    openPopUp();
  };