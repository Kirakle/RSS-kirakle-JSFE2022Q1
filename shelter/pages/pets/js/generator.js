let array = [0, 1, 2, 3, 4, 5, 6, 7],
    result = [];
  function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
for(let i=0;i<6;i++){
  result = [...result, ...shuffleArray(array)];
}

let array6 = [0, 1, 2, 3, 4, 5, 6, 7],
    result6 = [];
  function shuffleArray(array6) {
  for (let i = array6.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array6[i], array6[j]] = [array6[j], array6[i]];
  }
  return array6;
}
for(let i=0;i<6;i++){
  result6 = [...result6, ...shuffleArray(array6)]
}
// console.log(result6, result6.length)
const sort863 = (list) => { 
  let len = list.length;
  for(let i = 0; i < (len / 6); i++) {
    const stepList = list.slice(i * 6, (i * 6) + 6)

    for (let j = 0; j < 6; j++) {
      const dublicatedItem = stepList.find((item, ind) => {
        return item === stepList[j] && (ind !== j);
      });

      if(dublicatedItem !== undefined) {
        const ind = (i * 6) + j;
        const which8OfList = Math.trunc(ind / 8);

        list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);

        i-=2;
        break;
      }
    }
  }
  return list
}
sort863(result6);

function monitoringWidth(){
  let width6 = document.documentElement.clientWidth;
if(width6 > 1160) {
  // меняю только id
for(i = 0; i <= 7; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets = document.querySelector(`#id1`);
  divOurFPets.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage = document.querySelector(`#id1 > div:nth-child(1)`);
  divOurFImage.insertAdjacentHTML('afterbegin', `<img src="${pets[result[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName = document.querySelector(`#id1 > div > p`);
  pOurFName.insertAdjacentText('afterbegin', `${pets[result[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox = document.querySelector(`#id1 > div:nth-child(1) > div.our-friends-button-box`);
  divOurFBtnBox.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 8; i <= 15; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id2');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id2 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id2 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id2 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 16; i <= 23; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id3');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id3 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id3 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id3 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 24; i <= 31; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id4');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id4 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id4 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id4 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 32; i <= 39; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id5');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id5 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id5 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id5 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 40; i <= 47; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id6');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id6 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id6 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id6 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}
} else if(width6 > 642 && width6 <= 1160){
  let divGeneral = document.querySelector(`.our-friends-main`);
  divGeneral.insertAdjacentHTML('beforeend', '<div id="id7" class="our-friends-pets swiper-wrapper"></div>');
  divGeneral.insertAdjacentHTML('beforeend', '<div id="id8" class="our-friends-pets swiper-wrapper"></div>');
   // меняю только id
for(i = 0; i <= 5; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets = document.querySelector(`#id1`);
  divOurFPets.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage = document.querySelector(`#id1 > div:nth-child(1)`);
  divOurFImage.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName = document.querySelector(`#id1 > div > p`);
  pOurFName.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox = document.querySelector(`#id1 > div:nth-child(1) > div.our-friends-button-box`);
  divOurFBtnBox.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 6; i <= 11; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id2');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id2 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id2 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id2 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 12; i <= 17; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id3');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id3 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id3 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id3 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 18; i <= 23; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id4');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id4 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id4 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id4 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 24; i <= 29; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id5');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id5 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id5 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id5 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 30; i <= 35; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id6');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id6 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id6 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id6 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 36; i <= 41; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id7');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id7 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id7 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id7 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 42; i <= 47; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id8');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id8 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id8 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id8 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}
} else if(width6 <= 642){
  let divGeneral = document.querySelector(`.our-friends-main`);
  divGeneral.insertAdjacentHTML('beforeend', '<div id="id7" class="our-friends-pets swiper-wrapper"></div>');
  divGeneral.insertAdjacentHTML('beforeend', '<div id="id8" class="our-friends-pets swiper-wrapper"></div>');
  divGeneral.insertAdjacentHTML('beforeend', '<div id="id9" class="our-friends-pets swiper-wrapper"></div>');
  divGeneral.insertAdjacentHTML('beforeend', '<div id="id10" class="our-friends-pets swiper-wrapper"></div>');
  divGeneral.insertAdjacentHTML('beforeend', '<div id="id11" class="our-friends-pets swiper-wrapper"></div>');
  divGeneral.insertAdjacentHTML('beforeend', '<div id="id12" class="our-friends-pets swiper-wrapper"></div>');
  divGeneral.insertAdjacentHTML('beforeend', '<div id="id13" class="our-friends-pets swiper-wrapper"></div>');
  divGeneral.insertAdjacentHTML('beforeend', '<div id="id14" class="our-friends-pets swiper-wrapper"></div>');
  divGeneral.insertAdjacentHTML('beforeend', '<div id="id15" class="our-friends-pets swiper-wrapper"></div>');
  divGeneral.insertAdjacentHTML('beforeend', '<div id="id16" class="our-friends-pets swiper-wrapper"></div>');
   // меняю только id
for(i = 0; i <= 2; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets = document.querySelector(`#id1`);
  divOurFPets.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage = document.querySelector(`#id1 > div:nth-child(1)`);
  divOurFImage.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName = document.querySelector(`#id1 > div > p`);
  pOurFName.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox = document.querySelector(`#id1 > div:nth-child(1) > div.our-friends-button-box`);
  divOurFBtnBox.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 3; i <= 5; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id2');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id2 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id2 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id2 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 6; i <= 8; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id3');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id3 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id3 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id3 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 9; i <= 11; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id4');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id4 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id4 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id4 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 12; i <= 14; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id5');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id5 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id5 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id5 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 15; i <= 17; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id6');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id6 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id6 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id6 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 18; i <= 20; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id7');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id7 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id7 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id7 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 21; i <= 23; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id8');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id8 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id8 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id8 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}
// ---------------------------------------------------------------------------------------------
for(i = 24; i <= 26; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id9');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id9 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id9 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id9 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 27; i <= 29; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id10');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id10 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id10 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id10 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 30; i <= 32; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id11');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id11 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id11 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id11 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 33; i <= 35; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id12');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id12 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id12 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id12 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 36; i <= 38; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id13');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id13 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id13 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id13 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 39; i <= 41; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id14');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id14 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id14 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id14 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 42; i <= 44; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id15');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id15 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id15 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id15 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}

for(i = 45; i <= 47; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets1 = document.querySelector('#id16');
  divOurFPets1.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage1 = document.querySelector(`#id16 > div:nth-child(1)`);
  divOurFImage1.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName1 = document.querySelector("#id16 > div > p");
  pOurFName1.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox1 = document.querySelector("#id16 > div:nth-child(1) > div.our-friends-button-box");
  divOurFBtnBox1.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');
}
}
}
monitoringWidth();