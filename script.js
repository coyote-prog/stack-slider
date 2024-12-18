const stackItems = document.querySelectorAll('.stack-item');
const stackPrevBtn = document.querySelector('.stack-btn-prev');
const stackNextBtn = document.querySelector('.stack-btn-next');
const stackWrapper = document.querySelector('.stack-wrapper');

/* One-direction mode work better (topGap - stepWidth) or (leftGap - stepHeight) 
Use stepWidth / stepHeight if need various items width / height */

const settings = {
  borderRadius: 10,
  topGap: 30,
  leftGap: 0,
  stepWidth: 30,
  stepHeight: 0
}

let positions = [];

stackItems.forEach((item, index)=> {
  positions.push(index);
})

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

window.addEventListener('resize', ()=> {
  sizing();
});


function sizing(){
  
  let sliderBoxSize = stackWrapper.getBoundingClientRect();

  [...stackItems].forEach((item, index) => {

    item.style.width = sliderBoxSize.width - (settings.leftGap * (stackItems.length - 1)) - ((settings.stepWidth * (stackItems.length - 1) - (settings.stepWidth * positions[index]))) + 'px';

    item.style.height = sliderBoxSize.height - (settings.topGap * (stackItems.length - 1)) - ((settings.stepHeight * (stackItems.length - 1) - (settings.stepHeight * positions[index]))) + 'px';

  });

}


stackNextBtn.addEventListener('click', () => {

  let sliderBoxSize = stackWrapper.getBoundingClientRect();

  [...stackItems].forEach((item, index) => {

    item.style.zIndex = Number(item.style.zIndex) + 1;

    if ((Number(item.style.zIndex)) >= stackItems.length) {
      item.style.zIndex = 0;
    }

    item.style.width = sliderBoxSize.width - (settings.leftGap * (stackItems.length - 1)) - ((settings.stepWidth * (stackItems.length - 1) - (settings.stepWidth * (Number(item.style.zIndex))))) + 'px';

    item.style.height = sliderBoxSize.height - (settings.topGap * (stackItems.length - 1)) - ((settings.stepHeight * (stackItems.length - 1) - (settings.stepHeight * (Number(item.style.zIndex))))) + 'px';

    item.style.left = (settings.leftGap * (Number(item.style.zIndex))) + ((settings.stepWidth * (stackItems.length - 1) - (settings.stepWidth * (Number(item.style.zIndex))))) / 2 + 'px';

    item.style.top = (settings.topGap * (Number(item.style.zIndex))) + ((settings.stepHeight * (stackItems.length - 1) - (settings.stepHeight * (Number(item.style.zIndex))))) / 2 + 'px';
    
  });

});


stackPrevBtn.addEventListener('click', () => {

  let sliderBoxSize = stackWrapper.getBoundingClientRect();

  [...stackItems].forEach((item) => {

    item.style.zIndex = Number(item.style.zIndex) - 1;

    if ((Number(item.style.zIndex)) < 0) {
      item.style.zIndex = stackItems.length - 1;
    }

    item.style.width = sliderBoxSize.width - (settings.leftGap * (stackItems.length - 1)) - ((settings.stepWidth * (stackItems.length - 1) - (settings.stepWidth * (Number(item.style.zIndex))))) + 'px';

    item.style.height = sliderBoxSize.height - (settings.topGap * (stackItems.length - 1)) - ((settings.stepHeight * (stackItems.length - 1) - (settings.stepHeight * (Number(item.style.zIndex))))) + 'px';

    item.style.left = (settings.leftGap * (Number(item.style.zIndex))) + ((settings.stepWidth * (stackItems.length - 1) - (settings.stepWidth * (Number(item.style.zIndex))))) / 2 + 'px';

    item.style.top = (settings.topGap * (Number(item.style.zIndex))) + ((settings.stepHeight * (stackItems.length - 1) - (settings.stepHeight * (Number(item.style.zIndex))))) / 2 + 'px';

  });

});
