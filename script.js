const stackItems = document.querySelectorAll('.stack-item');
const stackPrevBtn = document.querySelector('.stack-btn-prev');
const stackNextBtn = document.querySelector('.stack-btn-next');
const stackWrapper = document.querySelector('.stack-wrapper');

const settings = {
  borderRadius: 10,
  topGap: 25,
  leftGap: 25
}

function stackSliderStyling() {
  
  sizing();

  [...stackItems].forEach((item, index) => {

    item.style.borderRadius = settings.borderRadius + 'px';
    item.style.position = 'absolute';
    item.style.zIndex = index;

    item.style.left = (settings.leftGap * index) + 'px';
    item.style.top = (settings.topGap * index) + 'px';

  })
}

stackSliderStyling();

window.addEventListener('resize', ()=> {
  sizing();
})

function sizing(){
  
  let sliderBoxSize = stackWrapper.getBoundingClientRect();

  [...stackItems].forEach((item, index) => {


    item.style.width = sliderBoxSize.width - (settings.leftGap * (stackItems.length - 1)) + 'px';

    item.style.height = sliderBoxSize.height - (settings.topGap * (stackItems.length - 1)) + 'px';

  })

}


stackNextBtn.addEventListener('click', () => {

  [...stackItems].forEach((item) => {

    item.style.zIndex = Number(item.style.zIndex) + 1;

    if ((Number(item.style.zIndex)) >= stackItems.length) {
      item.style.zIndex = 0;
    }

    item.style.left = (settings.leftGap * (Number(item.style.zIndex))) + 'px';
    item.style.top = (settings.topGap * (Number(item.style.zIndex))) + 'px';

  });

});


stackPrevBtn.addEventListener('click', () => {

  [...stackItems].forEach((item) => {

    item.style.zIndex = Number(item.style.zIndex) - 1;

    if ((Number(item.style.zIndex)) < 0) {
      item.style.zIndex = stackItems.length - 1;
    }

    item.style.left = (settings.leftGap * (Number(item.style.zIndex))) + 'px';
    item.style.top = (settings.topGap * (Number(item.style.zIndex))) + 'px';

  });

});
