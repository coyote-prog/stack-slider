/*slide*/
const stackItems = document.querySelectorAll('.stack-item');

/*slider container for define sizes*/
const stackWrapper = document.querySelector('.stack-wrapper');

/* standart slider control buttons*/
const stackSliderButtons = document.querySelectorAll('.stack-control-btn');

/*buttons, placed on each slide*/
const stackItemButtons = document.querySelectorAll('.stack-item__btn');

/* One-direction mode work better (topGap - stepWidth) or (leftGap - stepHeight) 
Use stepWidth / stepHeight if need various items width / height */

const settings = {
  borderRadius: 10, /* slide border radius */
  topGap: 30, /* vertical distance of slides */
  leftGap: 0, /* horizontal distance of slides */
  stepWidth: 30, /* increase widtg of slide */
  stepHeight: 0 /* increaase height of slide */
}

/* set some styles for slider elements */
function stackSliderStyling() {

  sizing();

  [...stackItems].forEach((item, index) => {

    item.style.borderRadius = settings.borderRadius + 'px';
    item.style.position = 'absolute';
    item.style.zIndex = index;

    item.style.left = (settings.leftGap * (Number(item.style.zIndex))) + ((settings.stepWidth * (stackItems.length - 1) - (settings.stepWidth * (Number(item.style.zIndex))))) / 2 + 'px';

    item.style.top = (settings.topGap * (Number(item.style.zIndex))) + ((settings.stepHeight * (stackItems.length - 1) - (settings.stepHeight * (Number(item.style.zIndex))))) / 2 + 'px';

  })
}

stackSliderStyling();

/* updaate styles while window  resize */
window.addEventListener('resize', () => {
  sizing();
});

/* define sizes of slides and slider */
function sizing() {

  let sliderBoxSize = stackWrapper.getBoundingClientRect();

  [...stackItems].forEach((item, index) => {

    item.style.width = sliderBoxSize.width - (settings.leftGap * (stackItems.length - 1)) - ((settings.stepWidth * (stackItems.length - 1) - (settings.stepWidth * index))) + 'px';

    item.style.height = sliderBoxSize.height - (settings.topGap * (stackItems.length - 1)) - ((settings.stepHeight * (stackItems.length - 1) - (settings.stepHeight * index))) + 'px';

  });

}

/* sliding of slides by usual buttons next nd prev */
stackSliderButtons.forEach((button) => {

  button.addEventListener('click', () => {

    if (button.classList.contains('stack-btn-next')) {

      [...stackItems].forEach((item) => {
        item.style.zIndex = Number(item.style.zIndex) + 1;

        if ((Number(item.style.zIndex)) >= stackItems.length) {
          item.style.zIndex = 0;
        }
      })
    } else if (button.classList.contains('stack-btn-prev')) {
      [...stackItems].forEach((item) => {

        item.style.zIndex = Number(item.style.zIndex) - 1;

        if ((Number(item.style.zIndex)) < 0) {
          item.style.zIndex = stackItems.length - 1;
        }
      })
    }

    getDynamicItemsSizing();

  });

});

/* sliding slides by buttons placed on each slide */
stackItemButtons.forEach(button => {

  button.addEventListener('click', ()=> {

    let currentZIndex = Number(button.closest('.stack-item').style.zIndex);

    let count = (stackItems.length-1) - currentZIndex;

    

    [...stackItems].forEach((item) => {

      for (let i = 0; i < count; i++) {
        
        item.style.zIndex = Number(item.style.zIndex) + 1;

        if ((Number(item.style.zIndex)) >= stackItems.length) {
          item.style.zIndex = 0;
        }
  
        if ((Number(item.style.zIndex)) < 0) {
          item.style.zIndex = stackItems.length - 1;
        }
        
      }
      
    });

    getDynamicItemsSizing();
    
  });
});


/* define sizes of slider while sliding */
function getDynamicItemsSizing() {

  let sliderBoxSize = stackWrapper.getBoundingClientRect();

  [...stackItems].forEach((item) => {

    item.style.width = sliderBoxSize.width - (settings.leftGap * (stackItems.length - 1)) - ((settings.stepWidth * (stackItems.length - 1) - (settings.stepWidth * (Number(item.style.zIndex))))) + 'px';

    item.style.height = sliderBoxSize.height - (settings.topGap * (stackItems.length - 1)) - ((settings.stepHeight * (stackItems.length - 1) - (settings.stepHeight * (Number(item.style.zIndex))))) + 'px';

    item.style.left = (settings.leftGap * (Number(item.style.zIndex))) + ((settings.stepWidth * (stackItems.length - 1) - (settings.stepWidth * (Number(item.style.zIndex))))) / 2 + 'px';

    item.style.top = (settings.topGap * (Number(item.style.zIndex))) + ((settings.stepHeight * (stackItems.length - 1) - (settings.stepHeight * (Number(item.style.zIndex))))) / 2 + 'px';

  });
}