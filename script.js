const stackBox = document.querySelector('.stack-box');


const settings = {
  width: 200,
  height: 200,
  borderRadius: 10,
  gap:30
}

function stackSliderStyling(settings) {
  const stackItems = document.querySelectorAll('.stack-item');
    
  [...stackItems].forEach((item, index) =>{
    /*let itemsIndex = Number(item.getAttribute('data-index'));*/
    /*console.log(item.getAttribute('data-index'));*/
    /*count ++;*/
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

/*function stackSliderSliding() {*/
  const stackItems = document.querySelectorAll('.stack-item');
  const stackPrevBtn = document.querySelector('.stack-btn-prev');
const stackNextBtn = document.querySelector('.stack-btn-next');

stackNextBtn.addEventListener('click', ()=>{
  /*count++;*/
  [...stackItems].forEach((item) =>{
    /*let itemsIndex = Number(item.getAttribute('data-index'));*/
    
  /*itemsIndex++;*/
  item.style.zIndex = Number(item.style.zIndex) + 1;
  /*console.log(item.getAttribute('data-index'));*/
  
  if((Number(item.style.zIndex)) >= stackItems.length) {
    item.style.zIndex = 0;
  }
  
    item.style.left = (settings.gap * (Number(item.style.zIndex))) + 'px';
      item.style.top = (settings.gap * (Number(item.style.zIndex))) + 'px';
  
    });
/*console.log(stackItems);*/

  });
 
/*}*/

stackPrevBtn.addEventListener('click', ()=>{
  /*count++;*/
  [...stackItems].forEach((item) =>{
    /*let itemsIndex = Number(item.getAttribute('data-index'));*/
    
  /*itemsIndex++;*/
  item.style.zIndex = Number(item.style.zIndex) - 1;
  /*console.log(item.getAttribute('data-index'));*/
  
  /*if((Number(item.style.zIndex)) >= stackItems.length) {
    item.style.zIndex = 0;
  }*/
  if((Number(item.style.zIndex)) < 0) {
    item.style.zIndex = stackItems.length - 1;
  }
  
    item.style.left = (settings.gap * (Number(item.style.zIndex))) + 'px';
      item.style.top = (settings.gap * (Number(item.style.zIndex))) + 'px';
  
    });
/*console.log(stackItems);*/

  });
