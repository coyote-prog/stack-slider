const stackBox = document.querySelector('.stack-box');


const settings = {
  width: 200,
  height: 200,
  borderRadius: 10,
  gap:30
}

function stackSliderStyling(settings) {
  const stackItems = document.querySelectorAll('.stack-item');
  let count = 0;

  [...stackItems].forEach((item, index) =>{
    count ++;
    item.style.width = settings.width + 'px';
    item.style.height = settings.height + 'px';
    item.style.borderRadius = settings.borderRadius + 'px';
    item.style.position = 'absolute';
    item.style.zIndex = index;
    item.style.left = (settings.gap * index) + 'px';
    item.style.top = (settings.gap * index) + 'px';
  })

}

stackSliderStyling(settings);

