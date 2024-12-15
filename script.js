const stackBox = document.querySelector('.stack-box');
const stackItems = document.querySelectorAll('.stack-item');
const stackPrevBtn = document.querySelector('.stack-btn-prev');
const stackNextBtn = document.querySelector('.stack-btn-next');
const stackWrapper = document.querySelector('.stack-wrapper');

const settings = {
  width: 200,
  height: 200,
  wrapperHeight: 500,
  borderRadius: 10,
  topGap: 30,
  leftGap: 50
}

function stackSliderStyling() {

  [...stackItems].forEach((item, index) => {

    item.style.width = settings.width + 'px';
    item.style.height = settings.height + 'px';
    item.style.borderRadius = settings.borderRadius + 'px';
    item.style.position = 'absolute';
    item.style.zIndex = index;

    item.style.left = (settings.leftGap * index) + 'px';
    item.style.top = (settings.topGap * index) + 'px';

    stackWrapper.style.width = ((settings.width) + (settings.leftGap * (Number(stackItems.length) - 1)) ) + 'px';
    
    stackWrapper.style.height = (settings.height + settings.topGap*(Number(stackItems.length) - 1) ) + 'px';
  })
}

stackSliderStyling();


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
