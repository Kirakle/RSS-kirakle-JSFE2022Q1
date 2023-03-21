setTimeout(function(){
   let leftLeftBtn8 = document.querySelector('#slick-slide-control00');

   leftLeftBtn8.innerHTML="&lt;&lt;"; // &lt; &gt;

   let widthBtn = document.documentElement.clientWidth;
   if(widthBtn > 1160) {
      let rightRightBtn8 = document.querySelector('#slick-slide-control05');
      rightRightBtn8.innerHTML="&gt;&gt;";
   } else if(widthBtn > 642 && widthBtn <= 1160) {
      let rightRightBtn6 = document.querySelector('#slick-slide-control07');
      rightRightBtn6.innerHTML="&gt;&gt;";
   } else if(widthBtn <= 642) {
      let rightRightBtn3 = document.querySelector('#slick-slide-control015');
      rightRightBtn3.innerHTML="&gt;&gt;";
   }
},333);

setInterval(function(){
   let leftLeftBtn8 = document.querySelector('#slick-slide-control00'); // <<
   let left8 = document.querySelector("button.slick-prev.slick-arrow"); // <
   let right8 = document.querySelector("button.slick-next.slick-arrow"); // >
   let nomberOne = document.querySelector('#slick-slide00');   //первый слайдер
   let widthBtnNow = document.documentElement.clientWidth;  // ширина монитора

   if(widthBtnNow > 1160) {
      let rightRightBtn8 = document.querySelector('#slick-slide-control05');
      let nomberSix = document.querySelector('#slick-slide05');   // 6 слайдер
      if (nomberOne.ariaHidden === 'false'){ //если первая страница
         leftLeftBtn8.disabled = true;
         leftLeftBtn8.style.pointerEvents = 'none';
         leftLeftBtn8.style.borderColor = '#CDCDCD';
         leftLeftBtn8.style.color = '#CDCDCD';

         left8.disabled = true;
         left8.style.pointerEvents = 'none';
         left8.style.borderColor = '#CDCDCD';
         left8.style.color = '#CDCDCD';
      } else if (nomberOne.ariaHidden === 'true'){ // если НЕ первая
         leftLeftBtn8.disabled = false;
         leftLeftBtn8.style.pointerEvents = 'auto';
         leftLeftBtn8.style.borderColor = '#fddcc4';
         leftLeftBtn8.style.color = '#292929';

         left8.disabled = false;
         left8.style.pointerEvents = 'auto';
         left8.style.borderColor = '#fddcc4';
         left8.style.color = '#292929';
      }
      
      if(nomberSix.ariaHidden === 'false'){ //если 6 страница
         rightRightBtn8.disabled = true;
         rightRightBtn8.style.pointerEvents = 'none';
         rightRightBtn8.style.borderColor = '#CDCDCD';
         rightRightBtn8.style.color = '#CDCDCD';

         right8.disabled = true;
         right8.style.pointerEvents = 'none';
         right8.style.borderColor = '#CDCDCD';
         right8.style.color = '#CDCDCD';
      } else if (nomberSix.ariaHidden === 'true'){ // если НЕ 6
         rightRightBtn8.disabled = false;
         rightRightBtn8.style.pointerEvents = 'auto';
         rightRightBtn8.style.borderColor = '#fddcc4';
         rightRightBtn8.style.color = '#292929';

         right8.disabled = false;
         right8.style.pointerEvents = 'auto';
         right8.style.borderColor = '#fddcc4';
         right8.style.color = '#292929';
      }
   } else if(widthBtnNow > 642 && widthBtnNow <= 1160) {
      let rightRightBtn6 = document.querySelector('#slick-slide-control07');
      let nomberEight = document.querySelector('#slick-slide07');   // 8 слайдер
      if (nomberOne.ariaHidden === 'false'){ //если первая страница
         leftLeftBtn8.disabled = true;
         leftLeftBtn8.style.pointerEvents = 'none';
         leftLeftBtn8.style.borderColor = '#CDCDCD';
         leftLeftBtn8.style.color = '#CDCDCD';

         left8.disabled = true;
         left8.style.pointerEvents = 'none';
         left8.style.borderColor = '#CDCDCD';
         left8.style.color = '#CDCDCD';
      } else if (nomberOne.ariaHidden === 'true'){ // если НЕ первая
         leftLeftBtn8.disabled = false;
         leftLeftBtn8.style.pointerEvents = 'auto';
         leftLeftBtn8.style.borderColor = '#fddcc4';
         leftLeftBtn8.style.color = '#292929';

         left8.disabled = false;
         left8.style.pointerEvents = 'auto';
         left8.style.borderColor = '#fddcc4';
         left8.style.color = '#292929';
      }
      
      if(nomberEight.ariaHidden === 'false'){ //если 8 страница
         rightRightBtn6.disabled = true;
         rightRightBtn6.style.pointerEvents = 'none';
         rightRightBtn6.style.borderColor = '#CDCDCD';
         rightRightBtn6.style.color = '#CDCDCD';

         right8.disabled = true;
         right8.style.pointerEvents = 'none';
         right8.style.borderColor = '#CDCDCD';
         right8.style.color = '#CDCDCD';
      } else if (nomberEight.ariaHidden === 'true'){ // если НЕ 8
         rightRightBtn6.disabled = false;
         rightRightBtn6.style.pointerEvents = 'auto';
         rightRightBtn6.style.borderColor = '#fddcc4';
         rightRightBtn6.style.color = '#292929';

         right8.disabled = false;
         right8.style.pointerEvents = 'auto';
         right8.style.borderColor = '#fddcc4';
         right8.style.color = '#292929';
      }
   } else if(widthBtnNow <= 642) {
      let rightRightBtn3 = document.querySelector('#slick-slide-control015');
      let nomberSixteen = document.querySelector('#slick-slide015');   // 16 слайдер
      if (nomberOne.ariaHidden === 'false'){ //если первая страница
         leftLeftBtn8.disabled = true;
         leftLeftBtn8.style.pointerEvents = 'none';
         leftLeftBtn8.style.borderColor = '#CDCDCD';
         leftLeftBtn8.style.color = '#CDCDCD';

         left8.disabled = true;
         left8.style.pointerEvents = 'none';
         left8.style.borderColor = '#CDCDCD';
         left8.style.color = '#CDCDCD';
      } else if (nomberOne.ariaHidden === 'true'){ // если НЕ первая
         leftLeftBtn8.disabled = false;
         leftLeftBtn8.style.pointerEvents = 'auto';
         leftLeftBtn8.style.borderColor = '#fddcc4';
         leftLeftBtn8.style.color = '#292929';

         left8.disabled = false;
         left8.style.pointerEvents = 'auto';
         left8.style.borderColor = '#fddcc4';
         left8.style.color = '#292929';
      }
      
      if(nomberSixteen.ariaHidden === 'false'){ //если 16 страница
         rightRightBtn3.disabled = true;
         rightRightBtn3.style.pointerEvents = 'none';
         rightRightBtn3.style.borderColor = '#CDCDCD';
         rightRightBtn3.style.color = '#CDCDCD';

         right8.disabled = true;
         right8.style.pointerEvents = 'none';
         right8.style.borderColor = '#CDCDCD';
         right8.style.color = '#CDCDCD';
      } else if (nomberSixteen.ariaHidden === 'true'){ // если НЕ 16
         rightRightBtn3.disabled = false;
         rightRightBtn3.style.pointerEvents = 'auto';
         rightRightBtn3.style.borderColor = '#fddcc4';
         rightRightBtn3.style.color = '#292929';

         right8.disabled = false;
         right8.style.pointerEvents = 'auto';
         right8.style.borderColor = '#fddcc4';
         right8.style.color = '#292929';
      }
   }
},123)
