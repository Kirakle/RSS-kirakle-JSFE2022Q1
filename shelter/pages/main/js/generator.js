var n = 0;
// let b = []; // for wohtt
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


for(i = 0; i <= 47; i++){
  // добавление главного блока и в нем 3 блока
  let divOurFPets = document.querySelector('.our-friends-pets');
  divOurFPets.insertAdjacentHTML('afterbegin', '<div class="our-friends-pet swiper-slide"><div class="our-friends-image"></div><p class="our-friends-name"></p><div class="our-friends-button-box"></div></div>');

  //добавление картинки в первый блок
  let divOurFImage = document.querySelectorAll('.our-friends-image')[0];
  divOurFImage.insertAdjacentHTML('afterbegin', `<img src="${pets[result6[i]].img}" alt="Image"/>`);

  //добавление текста в тег p
  let pOurFName = document.querySelectorAll('.our-friends-name')[0];
  pOurFName.insertAdjacentText('afterbegin', `${pets[result6[i]].name}`)

  //добавление кнопки
  let divOurFBtnBox = document.querySelectorAll('.our-friends-button-box')[0];
  divOurFBtnBox.insertAdjacentHTML('afterbegin', '<a href="javascript:void(0);" class="our-friends-button-learn-more">Learn more</a>');


}


