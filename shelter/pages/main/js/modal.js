const openModalButtons0 = document.querySelectorAll('.our-friends-pet')[0];
const closeModalButtons0 = document.querySelector('.close-button');
const overlay0 = document.getElementById('overlay');

openModalButtons0.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal0();
  }
});

closeModalButtons0.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal0();
  }
});

overlay0.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal0();
  }
});

function openModal0() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
  modal.classList.add('mmm');
  overlay0.classList.add('mmm');
  body.classList.add('lock');

  // 4 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
  ModalImg0.src = `${pets[result6[47]].img}`

  let ModalName0 = document.querySelector('.modal-name');
  ModalName0.insertAdjacentText('afterbegin', `${pets[result6[47]].name}`);

  let ModalType0 = document.querySelector('.modal-type');
  ModalType0.insertAdjacentText('afterbegin', `${pets[result6[47]].type}`);

  let ModalBreed0 = document.querySelector('.modal-breed');
  ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[47]].breed}`);

  let ModalDesc0 = document.querySelector('.modal-description');
  ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[47]].description}`);

  let ModalAge0 = document.querySelector('.modal-age');
  ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[47]].age}`);

  let ModalInocul0 = document.querySelector('.modal-inoculations');
  ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[47]].inoculations}`);

  let ModalDiseases0 = document.querySelector('.modal-diseases');
  ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[47]].diseases}`);

  let ModalParas0 = document.querySelector('.modal-parasites');
  ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[47]].parasites}`);
}

function closeModal0() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay0.classList.remove('mmm');
  body.classList.remove('lock');

  // 4 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
  ModalImg0.src = ``

  let ModalName0 = document.querySelector('.modal-name');
  ModalName0.innerHTML = '';

  let ModalType0 = document.querySelector('.modal-type');
  ModalType0.innerHTML = '';

  let ModalBreed0 = document.querySelector('.modal-breed');
  ModalBreed0.innerHTML = '';

  let ModalDesc0 = document.querySelector('.modal-description');
  ModalDesc0.innerHTML = '';

  let ModalAge0 = document.querySelector('.modal-age');
  ModalAge0.innerHTML = '';

  let ModalInocul0 = document.querySelector('.modal-inoculations');
  ModalInocul0.innerHTML = '';

  let ModalDiseases0 = document.querySelector('.modal-diseases');
  ModalDiseases0.innerHTML = '';

  let ModalParas0 = document.querySelector('.modal-parasites');
  ModalParas0.innerHTML = '';
}



const openModalButtons1 = document.querySelectorAll('.our-friends-pet')[1];
const closeModalButtons1 = document.querySelector('.close-button');
const overlay1 = document.getElementById('overlay');

openModalButtons1.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal1();
  }
});

closeModalButtons1.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal1();
  }
});

overlay1.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal1();
  }
});

function openModal1() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay1.classList.add('mmm');
  body.classList.add('lock');

  // 4 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
  ModalImg1.src = `${pets[result6[46]].img}`

  let ModalName1 = document.querySelector('.modal-name');
  ModalName1.insertAdjacentText('afterbegin', `${pets[result6[46]].name}`);

  let ModalType1 = document.querySelector('.modal-type');
  ModalType1.insertAdjacentText('afterbegin', `${pets[result6[46]].type}`);

  let ModalBreed1 = document.querySelector('.modal-breed');
  ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[46]].breed}`);

  let ModalDesc1 = document.querySelector('.modal-description');
  ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[46]].description}`);

  let ModalAge1 = document.querySelector('.modal-age');
  ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[46]].age}`);

  let ModalInocul1 = document.querySelector('.modal-inoculations');
  ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[46]].inoculations}`);

  let ModalDiseases1 = document.querySelector('.modal-diseases');
  ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[46]].diseases}`);

  let ModalParas1 = document.querySelector('.modal-parasites');
  ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[46]].parasites}`);
}

function closeModal1() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay1.classList.remove('mmm');
  body.classList.remove('lock');

  // 4 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
  ModalImg1.src = ``

  let ModalName1 = document.querySelector('.modal-name');
  ModalName1.innerHTML = '';

  let ModalType1 = document.querySelector('.modal-type');
  ModalType1.innerHTML = '';

  let ModalBreed1 = document.querySelector('.modal-breed');
  ModalBreed1.innerHTML = '';

  let ModalDesc1 = document.querySelector('.modal-description');
  ModalDesc1.innerHTML = '';

  let ModalAge1 = document.querySelector('.modal-age');
  ModalAge1.innerHTML = '';

  let ModalInocul1 = document.querySelector('.modal-inoculations');
  ModalInocul1.innerHTML = '';

  let ModalDiseases1 = document.querySelector('.modal-diseases');
  ModalDiseases1.innerHTML = '';

  let ModalParas1 = document.querySelector('.modal-parasites');
  ModalParas1.innerHTML = '';
}



const openModalButtons2 = document.querySelectorAll('.our-friends-pet')[2];
const closeModalButtons2 = document.querySelector('.close-button');
const overlay2 = document.getElementById('overlay');

openModalButtons2.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal2();
  }
});

closeModalButtons2.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal2();
  }
});

overlay2.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal2();
  }
});

function openModal2() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay2.classList.add('mmm');
  body.classList.add('lock');

  // 4 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
  ModalImg2.src = `${pets[result6[45]].img}`

  let ModalName2 = document.querySelector('.modal-name');
  ModalName2.insertAdjacentText('afterbegin', `${pets[result6[45]].name}`);

  let ModalType2 = document.querySelector('.modal-type');
  ModalType2.insertAdjacentText('afterbegin', `${pets[result6[45]].type}`);

  let ModalBreed2 = document.querySelector('.modal-breed');
  ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[45]].breed}`);

  let ModalDesc2 = document.querySelector('.modal-description');
  ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[45]].description}`);

  let ModalAge2 = document.querySelector('.modal-age');
  ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[45]].age}`);

  let ModalInocul2 = document.querySelector('.modal-inoculations');
  ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[45]].inoculations}`);

  let ModalDiseases2 = document.querySelector('.modal-diseases');
  ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[45]].diseases}`);

  let ModalParas2 = document.querySelector('.modal-parasites');
  ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[45]].parasites}`);
}

function closeModal2() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay2.classList.remove('mmm');
  body.classList.remove('lock');

  // 4 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
  ModalImg2.src = ``

  let ModalName2 = document.querySelector('.modal-name');
  ModalName2.innerHTML = '';

  let ModalType2 = document.querySelector('.modal-type');
  ModalType2.innerHTML = '';

  let ModalBreed2 = document.querySelector('.modal-breed');
  ModalBreed2.innerHTML = '';

  let ModalDesc2 = document.querySelector('.modal-description');
  ModalDesc2.innerHTML = '';

  let ModalAge2 = document.querySelector('.modal-age');
  ModalAge2.innerHTML = '';

  let ModalInocul2 = document.querySelector('.modal-inoculations');
  ModalInocul2.innerHTML = '';

  let ModalDiseases2 = document.querySelector('.modal-diseases');
  ModalDiseases2.innerHTML = '';

  let ModalParas2 = document.querySelector('.modal-parasites');
  ModalParas2.innerHTML = '';
}



const openModalButtons3 = document.querySelectorAll('.our-friends-pet')[3];
const closeModalButtons3 = document.querySelector('.close-button');
const overlay3 = document.getElementById('overlay');

openModalButtons3.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal3();
  }
});

closeModalButtons3.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal3();
  }
});

overlay3.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal3();
  }
});

function openModal3() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay3.classList.add('mmm');
  body.classList.add('lock');

  // 4 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg3 = document.querySelector("#modal > div.modal-img > img");
  ModalImg3.src = `${pets[result6[44]].img}`

  let ModalName3 = document.querySelector('.modal-name');
  ModalName3.insertAdjacentText('afterbegin', `${pets[result6[44]].name}`);

  let ModalType3 = document.querySelector('.modal-type');
  ModalType3.insertAdjacentText('afterbegin', `${pets[result6[44]].type}`);

  let ModalBreed3 = document.querySelector('.modal-breed');
  ModalBreed3.insertAdjacentText('afterbegin', `${pets[result6[44]].breed}`);

  let ModalDesc3 = document.querySelector('.modal-description');
  ModalDesc3.insertAdjacentText('afterbegin', `${pets[result6[44]].description}`);

  let ModalAge3 = document.querySelector('.modal-age');
  ModalAge3.insertAdjacentText('afterbegin', `${pets[result6[44]].age}`);

  let ModalInocul3 = document.querySelector('.modal-inoculations');
  ModalInocul3.insertAdjacentText('afterbegin', `${pets[result6[44]].inoculations}`);

  let ModalDiseases3 = document.querySelector('.modal-diseases');
  ModalDiseases3.insertAdjacentText('afterbegin', `${pets[result6[44]].diseases}`);

  let ModalParas3 = document.querySelector('.modal-parasites');
  ModalParas3.insertAdjacentText('afterbegin', `${pets[result6[44]].parasites}`);
}

function closeModal3() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay3.classList.remove('mmm');
  body.classList.remove('lock');

  // 4 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg3 = document.querySelector("#modal > div.modal-img > img");
  ModalImg3.src = ``

  let ModalName3 = document.querySelector('.modal-name');
  ModalName3.innerHTML = '';

  let ModalType3 = document.querySelector('.modal-type');
  ModalType3.innerHTML = '';

  let ModalBreed3 = document.querySelector('.modal-breed');
  ModalBreed3.innerHTML = '';

  let ModalDesc3 = document.querySelector('.modal-description');
  ModalDesc3.innerHTML = '';

  let ModalAge3 = document.querySelector('.modal-age');
  ModalAge3.innerHTML = '';

  let ModalInocul3 = document.querySelector('.modal-inoculations');
  ModalInocul3.innerHTML = '';

  let ModalDiseases3 = document.querySelector('.modal-diseases');
  ModalDiseases3.innerHTML = '';

  let ModalParas3 = document.querySelector('.modal-parasites');
  ModalParas3.innerHTML = '';
}



const openModalButtons4 = document.querySelectorAll('.our-friends-pet')[4];
const closeModalButtons4 = document.querySelector('.close-button');
const overlay4 = document.getElementById('overlay');

openModalButtons4.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal4();
  }
});

closeModalButtons4.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal4();
  }
});

overlay4.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal4();
  }
});

function openModal4() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay4.classList.add('mmm');
  body.classList.add('lock');

  // 4 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg4 = document.querySelector("#modal > div.modal-img > img");
  ModalImg4.src = `${pets[result6[43]].img}`

  let ModalName4 = document.querySelector('.modal-name');
  ModalName4.insertAdjacentText('afterbegin', `${pets[result6[43]].name}`);

  let ModalType4 = document.querySelector('.modal-type');
  ModalType4.insertAdjacentText('afterbegin', `${pets[result6[43]].type}`);

  let ModalBreed4 = document.querySelector('.modal-breed');
  ModalBreed4.insertAdjacentText('afterbegin', `${pets[result6[43]].breed}`);

  let ModalDesc4 = document.querySelector('.modal-description');
  ModalDesc4.insertAdjacentText('afterbegin', `${pets[result6[43]].description}`);

  let ModalAge4 = document.querySelector('.modal-age');
  ModalAge4.insertAdjacentText('afterbegin', `${pets[result6[43]].age}`);

  let ModalInocul4 = document.querySelector('.modal-inoculations');
  ModalInocul4.insertAdjacentText('afterbegin', `${pets[result6[43]].inoculations}`);

  let ModalDiseases4 = document.querySelector('.modal-diseases');
  ModalDiseases4.insertAdjacentText('afterbegin', `${pets[result6[43]].diseases}`);

  let ModalParas4 = document.querySelector('.modal-parasites');
  ModalParas4.insertAdjacentText('afterbegin', `${pets[result6[43]].parasites}`);
}

function closeModal4() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay4.classList.remove('mmm');
  body.classList.remove('lock');

  // 4 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg4 = document.querySelector("#modal > div.modal-img > img");
  ModalImg4.src = ``

  let ModalName4 = document.querySelector('.modal-name');
  ModalName4.innerHTML = '';

  let ModalType4 = document.querySelector('.modal-type');
  ModalType4.innerHTML = '';

  let ModalBreed4 = document.querySelector('.modal-breed');
  ModalBreed4.innerHTML = '';

  let ModalDesc4 = document.querySelector('.modal-description');
  ModalDesc4.innerHTML = '';

  let ModalAge4 = document.querySelector('.modal-age');
  ModalAge4.innerHTML = '';

  let ModalInocul4 = document.querySelector('.modal-inoculations');
  ModalInocul4.innerHTML = '';

  let ModalDiseases4 = document.querySelector('.modal-diseases');
  ModalDiseases4.innerHTML = '';

  let ModalParas4 = document.querySelector('.modal-parasites');
  ModalParas4.innerHTML = '';
}



const openModalButtons5 = document.querySelectorAll('.our-friends-pet')[5];
const closeModalButtons5 = document.querySelector('.close-button');
const overlay5 = document.getElementById('overlay');

openModalButtons5.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal5();
  }
});

closeModalButtons5.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal5();
  }
});

overlay5.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal5();
  }
});

function openModal5() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay5.classList.add('mmm');
  body.classList.add('lock');

  // 5 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg5 = document.querySelector("#modal > div.modal-img > img");
  ModalImg5.src = `${pets[result6[42]].img}`

  let ModalName5 = document.querySelector('.modal-name');
  ModalName5.insertAdjacentText('afterbegin', `${pets[result6[42]].name}`);

  let ModalType5 = document.querySelector('.modal-type');
  ModalType5.insertAdjacentText('afterbegin', `${pets[result6[42]].type}`);

  let ModalBreed5 = document.querySelector('.modal-breed');
  ModalBreed5.insertAdjacentText('afterbegin', `${pets[result6[42]].breed}`);

  let ModalDesc5 = document.querySelector('.modal-description');
  ModalDesc5.insertAdjacentText('afterbegin', `${pets[result6[42]].description}`);

  let ModalAge5 = document.querySelector('.modal-age');
  ModalAge5.insertAdjacentText('afterbegin', `${pets[result6[42]].age}`);

  let ModalInocul5 = document.querySelector('.modal-inoculations');
  ModalInocul5.insertAdjacentText('afterbegin', `${pets[result6[42]].inoculations}`);

  let ModalDiseases5 = document.querySelector('.modal-diseases');
  ModalDiseases5.insertAdjacentText('afterbegin', `${pets[result6[42]].diseases}`);

  let ModalParas5 = document.querySelector('.modal-parasites');
  ModalParas5.insertAdjacentText('afterbegin', `${pets[result6[42]].parasites}`);
}

function closeModal5() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay5.classList.remove('mmm');
  body.classList.remove('lock');

  // 5 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg5 = document.querySelector("#modal > div.modal-img > img");
  ModalImg5.src = ``

  let ModalName5 = document.querySelector('.modal-name');
  ModalName5.innerHTML = '';

  let ModalType5 = document.querySelector('.modal-type');
  ModalType5.innerHTML = '';

  let ModalBreed5 = document.querySelector('.modal-breed');
  ModalBreed5.innerHTML = '';

  let ModalDesc5 = document.querySelector('.modal-description');
  ModalDesc5.innerHTML = '';

  let ModalAge5 = document.querySelector('.modal-age');
  ModalAge5.innerHTML = '';

  let ModalInocul5 = document.querySelector('.modal-inoculations');
  ModalInocul5.innerHTML = '';

  let ModalDiseases5 = document.querySelector('.modal-diseases');
  ModalDiseases5.innerHTML = '';

  let ModalParas5 = document.querySelector('.modal-parasites');
  ModalParas5.innerHTML = '';
}



const openModalButtons6 = document.querySelectorAll('.our-friends-pet')[6];
const closeModalButtons6 = document.querySelector('.close-button');
const overlay6 = document.getElementById('overlay');

openModalButtons6.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal6();
  }
});

closeModalButtons6.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal6();
  }
});

overlay6.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal6();
  }
});

function openModal6() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay6.classList.add('mmm');
  body.classList.add('lock');

  // 6 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg6 = document.querySelector("#modal > div.modal-img > img");
  ModalImg6.src = `${pets[result6[41]].img}`

  let ModalName6 = document.querySelector('.modal-name');
  ModalName6.insertAdjacentText('afterbegin', `${pets[result6[41]].name}`);

  let ModalType6 = document.querySelector('.modal-type');
  ModalType6.insertAdjacentText('afterbegin', `${pets[result6[41]].type}`);

  let ModalBreed6 = document.querySelector('.modal-breed');
  ModalBreed6.insertAdjacentText('afterbegin', `${pets[result6[41]].breed}`);

  let ModalDesc6 = document.querySelector('.modal-description');
  ModalDesc6.insertAdjacentText('afterbegin', `${pets[result6[41]].description}`);

  let ModalAge6 = document.querySelector('.modal-age');
  ModalAge6.insertAdjacentText('afterbegin', `${pets[result6[41]].age}`);

  let ModalInocul6 = document.querySelector('.modal-inoculations');
  ModalInocul6.insertAdjacentText('afterbegin', `${pets[result6[41]].inoculations}`);

  let ModalDiseases6 = document.querySelector('.modal-diseases');
  ModalDiseases6.insertAdjacentText('afterbegin', `${pets[result6[41]].diseases}`);

  let ModalParas6 = document.querySelector('.modal-parasites');
  ModalParas6.insertAdjacentText('afterbegin', `${pets[result6[41]].parasites}`);
}

function closeModal6() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay6.classList.remove('mmm');
  body.classList.remove('lock');

  // 6 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg6 = document.querySelector("#modal > div.modal-img > img");
  ModalImg6.src = ``

  let ModalName6 = document.querySelector('.modal-name');
  ModalName6.innerHTML = '';

  let ModalType6 = document.querySelector('.modal-type');
  ModalType6.innerHTML = '';

  let ModalBreed6 = document.querySelector('.modal-breed');
  ModalBreed6.innerHTML = '';

  let ModalDesc6 = document.querySelector('.modal-description');
  ModalDesc6.innerHTML = '';

  let ModalAge6 = document.querySelector('.modal-age');
  ModalAge6.innerHTML = '';

  let ModalInocul6 = document.querySelector('.modal-inoculations');
  ModalInocul6.innerHTML = '';

  let ModalDiseases6 = document.querySelector('.modal-diseases');
  ModalDiseases6.innerHTML = '';

  let ModalParas6 = document.querySelector('.modal-parasites');
  ModalParas6.innerHTML = '';
}



const openModalButtons7 = document.querySelectorAll('.our-friends-pet')[7];
const closeModalButtons7 = document.querySelector('.close-button');
const overlay7 = document.getElementById('overlay');

openModalButtons7.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal7();
  }
});

closeModalButtons7.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal7();
  }
});

overlay7.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal7();
  }
});

function openModal7() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay7.classList.add('mmm');
  body.classList.add('lock');

  // 7 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg7 = document.querySelector("#modal > div.modal-img > img");
  ModalImg7.src = `${pets[result6[40]].img}`

  let ModalName7 = document.querySelector('.modal-name');
  ModalName7.insertAdjacentText('afterbegin', `${pets[result6[40]].name}`);

  let ModalType7 = document.querySelector('.modal-type');
  ModalType7.insertAdjacentText('afterbegin', `${pets[result6[40]].type}`);

  let ModalBreed7 = document.querySelector('.modal-breed');
  ModalBreed7.insertAdjacentText('afterbegin', `${pets[result6[40]].breed}`);

  let ModalDesc7 = document.querySelector('.modal-description');
  ModalDesc7.insertAdjacentText('afterbegin', `${pets[result6[40]].description}`);

  let ModalAge7 = document.querySelector('.modal-age');
  ModalAge7.insertAdjacentText('afterbegin', `${pets[result6[40]].age}`);

  let ModalInocul7 = document.querySelector('.modal-inoculations');
  ModalInocul7.insertAdjacentText('afterbegin', `${pets[result6[40]].inoculations}`);

  let ModalDiseases7 = document.querySelector('.modal-diseases');
  ModalDiseases7.insertAdjacentText('afterbegin', `${pets[result6[40]].diseases}`);

  let ModalParas7 = document.querySelector('.modal-parasites');
  ModalParas7.insertAdjacentText('afterbegin', `${pets[result6[40]].parasites}`);
}

function closeModal7() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay7.classList.remove('mmm');
  body.classList.remove('lock');

  // 7 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg7 = document.querySelector("#modal > div.modal-img > img");
  ModalImg7.src = ``

  let ModalName7 = document.querySelector('.modal-name');
  ModalName7.innerHTML = '';

  let ModalType7 = document.querySelector('.modal-type');
  ModalType7.innerHTML = '';

  let ModalBreed7 = document.querySelector('.modal-breed');
  ModalBreed7.innerHTML = '';

  let ModalDesc7 = document.querySelector('.modal-description');
  ModalDesc7.innerHTML = '';

  let ModalAge7 = document.querySelector('.modal-age');
  ModalAge7.innerHTML = '';

  let ModalInocul7 = document.querySelector('.modal-inoculations');
  ModalInocul7.innerHTML = '';

  let ModalDiseases7 = document.querySelector('.modal-diseases');
  ModalDiseases7.innerHTML = '';

  let ModalParas7 = document.querySelector('.modal-parasites');
  ModalParas7.innerHTML = '';
}



const openModalButtons8 = document.querySelectorAll('.our-friends-pet')[8];
const closeModalButtons8 = document.querySelector('.close-button');
const overlay8 = document.getElementById('overlay');

openModalButtons8.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal8();
  }
});

closeModalButtons8.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal8();
  }
});

overlay8.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal8();
  }
});

function openModal8() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay8.classList.add('mmm');
  body.classList.add('lock');

  // 8 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg8 = document.querySelector("#modal > div.modal-img > img");
  ModalImg8.src = `${pets[result6[39]].img}`

  let ModalName8 = document.querySelector('.modal-name');
  ModalName8.insertAdjacentText('afterbegin', `${pets[result6[39]].name}`);

  let ModalType8 = document.querySelector('.modal-type');
  ModalType8.insertAdjacentText('afterbegin', `${pets[result6[39]].type}`);

  let ModalBreed8 = document.querySelector('.modal-breed');
  ModalBreed8.insertAdjacentText('afterbegin', `${pets[result6[39]].breed}`);

  let ModalDesc8 = document.querySelector('.modal-description');
  ModalDesc8.insertAdjacentText('afterbegin', `${pets[result6[39]].description}`);

  let ModalAge8 = document.querySelector('.modal-age');
  ModalAge8.insertAdjacentText('afterbegin', `${pets[result6[39]].age}`);

  let ModalInocul8 = document.querySelector('.modal-inoculations');
  ModalInocul8.insertAdjacentText('afterbegin', `${pets[result6[39]].inoculations}`);

  let ModalDiseases8 = document.querySelector('.modal-diseases');
  ModalDiseases8.insertAdjacentText('afterbegin', `${pets[result6[39]].diseases}`);

  let ModalParas8 = document.querySelector('.modal-parasites');
  ModalParas8.insertAdjacentText('afterbegin', `${pets[result6[39]].parasites}`);
}

function closeModal8() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay8.classList.remove('mmm');
  body.classList.remove('lock');

  // 8 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg8 = document.querySelector("#modal > div.modal-img > img");
  ModalImg8.src = ``

  let ModalName8 = document.querySelector('.modal-name');
  ModalName8.innerHTML = '';

  let ModalType8 = document.querySelector('.modal-type');
  ModalType8.innerHTML = '';

  let ModalBreed8 = document.querySelector('.modal-breed');
  ModalBreed8.innerHTML = '';

  let ModalDesc8 = document.querySelector('.modal-description');
  ModalDesc8.innerHTML = '';

  let ModalAge8 = document.querySelector('.modal-age');
  ModalAge8.innerHTML = '';

  let ModalInocul8 = document.querySelector('.modal-inoculations');
  ModalInocul8.innerHTML = '';

  let ModalDiseases8 = document.querySelector('.modal-diseases');
  ModalDiseases8.innerHTML = '';

  let ModalParas8 = document.querySelector('.modal-parasites');
  ModalParas8.innerHTML = '';
}



const openModalButtons9 = document.querySelectorAll('.our-friends-pet')[9];
const closeModalButtons9 = document.querySelector('.close-button');
const overlay9 = document.getElementById('overlay');

openModalButtons9.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal9();
  }
});

closeModalButtons9.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal9();
  }
});

overlay9.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal9();
  }
});

function openModal9() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay9.classList.add('mmm');
  body.classList.add('lock');

  // 9 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg9 = document.querySelector("#modal > div.modal-img > img");
  ModalImg9.src = `${pets[result6[38]].img}`

  let ModalName9 = document.querySelector('.modal-name');
  ModalName9.insertAdjacentText('afterbegin', `${pets[result6[38]].name}`);

  let ModalType9 = document.querySelector('.modal-type');
  ModalType9.insertAdjacentText('afterbegin', `${pets[result6[38]].type}`);

  let ModalBreed9 = document.querySelector('.modal-breed');
  ModalBreed9.insertAdjacentText('afterbegin', `${pets[result6[38]].breed}`);

  let ModalDesc9 = document.querySelector('.modal-description');
  ModalDesc9.insertAdjacentText('afterbegin', `${pets[result6[38]].description}`);

  let ModalAge9 = document.querySelector('.modal-age');
  ModalAge9.insertAdjacentText('afterbegin', `${pets[result6[38]].age}`);

  let ModalInocul9 = document.querySelector('.modal-inoculations');
  ModalInocul9.insertAdjacentText('afterbegin', `${pets[result6[38]].inoculations}`);

  let ModalDiseases9 = document.querySelector('.modal-diseases');
  ModalDiseases9.insertAdjacentText('afterbegin', `${pets[result6[38]].diseases}`);

  let ModalParas9 = document.querySelector('.modal-parasites');
  ModalParas9.insertAdjacentText('afterbegin', `${pets[result6[38]].parasites}`);
}

function closeModal9() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay9.classList.remove('mmm');
  body.classList.remove('lock');

  // 9 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg9 = document.querySelector("#modal > div.modal-img > img");
  ModalImg9.src = ``

  let ModalName9 = document.querySelector('.modal-name');
  ModalName9.innerHTML = '';

  let ModalType9 = document.querySelector('.modal-type');
  ModalType9.innerHTML = '';

  let ModalBreed9 = document.querySelector('.modal-breed');
  ModalBreed9.innerHTML = '';

  let ModalDesc9 = document.querySelector('.modal-description');
  ModalDesc9.innerHTML = '';

  let ModalAge9 = document.querySelector('.modal-age');
  ModalAge9.innerHTML = '';

  let ModalInocul9 = document.querySelector('.modal-inoculations');
  ModalInocul9.innerHTML = '';

  let ModalDiseases9 = document.querySelector('.modal-diseases');
  ModalDiseases9.innerHTML = '';

  let ModalParas9 = document.querySelector('.modal-parasites');
  ModalParas9.innerHTML = '';
}



const openModalButtons10 = document.querySelectorAll('.our-friends-pet')[10];
const closeModalButtons10 = document.querySelector('.close-button');
const overlay10 = document.getElementById('overlay');

openModalButtons10.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal10();
  }
});

closeModalButtons10.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal10();
  }
});

overlay10.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal10();
  }
});

function openModal10() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay10.classList.add('mmm');
  body.classList.add('lock');

  // 10 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg10 = document.querySelector("#modal > div.modal-img > img");
  ModalImg10.src = `${pets[result6[37]].img}`

  let ModalName10 = document.querySelector('.modal-name');
  ModalName10.insertAdjacentText('afterbegin', `${pets[result6[37]].name}`);

  let ModalType10 = document.querySelector('.modal-type');
  ModalType10.insertAdjacentText('afterbegin', `${pets[result6[37]].type}`);

  let ModalBreed10 = document.querySelector('.modal-breed');
  ModalBreed10.insertAdjacentText('afterbegin', `${pets[result6[37]].breed}`);

  let ModalDesc10 = document.querySelector('.modal-description');
  ModalDesc10.insertAdjacentText('afterbegin', `${pets[result6[37]].description}`);

  let ModalAge10 = document.querySelector('.modal-age');
  ModalAge10.insertAdjacentText('afterbegin', `${pets[result6[37]].age}`);

  let ModalInocul10 = document.querySelector('.modal-inoculations');
  ModalInocul10.insertAdjacentText('afterbegin', `${pets[result6[37]].inoculations}`);

  let ModalDiseases10 = document.querySelector('.modal-diseases');
  ModalDiseases10.insertAdjacentText('afterbegin', `${pets[result6[37]].diseases}`);

  let ModalParas10 = document.querySelector('.modal-parasites');
  ModalParas10.insertAdjacentText('afterbegin', `${pets[result6[37]].parasites}`);
}

function closeModal10() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay10.classList.remove('mmm');
  body.classList.remove('lock');

  // 10 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg10 = document.querySelector("#modal > div.modal-img > img");
  ModalImg10.src = ``

  let ModalName10 = document.querySelector('.modal-name');
  ModalName10.innerHTML = '';

  let ModalType10 = document.querySelector('.modal-type');
  ModalType10.innerHTML = '';

  let ModalBreed10 = document.querySelector('.modal-breed');
  ModalBreed10.innerHTML = '';

  let ModalDesc10 = document.querySelector('.modal-description');
  ModalDesc10.innerHTML = '';

  let ModalAge10 = document.querySelector('.modal-age');
  ModalAge10.innerHTML = '';

  let ModalInocul10 = document.querySelector('.modal-inoculations');
  ModalInocul10.innerHTML = '';

  let ModalDiseases10 = document.querySelector('.modal-diseases');
  ModalDiseases10.innerHTML = '';

  let ModalParas10 = document.querySelector('.modal-parasites');
  ModalParas10.innerHTML = '';
}


//11 11 11
const openModalButtons11 = document.querySelectorAll('.our-friends-pet')[11];
const closeModalButtons11 = document.querySelector('.close-button');
const overlay11 = document.getElementById('overlay');

openModalButtons11.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal11();
  }
});

closeModalButtons11.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal11();
  }
});

overlay11.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal11();
  }
});

function openModal11() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay11.classList.add('mmm');
  body.classList.add('lock');

  // 11 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg11 = document.querySelector("#modal > div.modal-img > img");
  ModalImg11.src = `${pets[result6[36]].img}`

  let ModalName11 = document.querySelector('.modal-name');
  ModalName11.insertAdjacentText('afterbegin', `${pets[result6[36]].name}`);

  let ModalType11 = document.querySelector('.modal-type');
  ModalType11.insertAdjacentText('afterbegin', `${pets[result6[36]].type}`);

  let ModalBreed11 = document.querySelector('.modal-breed');
  ModalBreed11.insertAdjacentText('afterbegin', `${pets[result6[36]].breed}`);

  let ModalDesc11 = document.querySelector('.modal-description');
  ModalDesc11.insertAdjacentText('afterbegin', `${pets[result6[36]].description}`);

  let ModalAge11 = document.querySelector('.modal-age');
  ModalAge11.insertAdjacentText('afterbegin', `${pets[result6[36]].age}`);

  let ModalInocul11 = document.querySelector('.modal-inoculations');
  ModalInocul11.insertAdjacentText('afterbegin', `${pets[result6[36]].inoculations}`);

  let ModalDiseases11 = document.querySelector('.modal-diseases');
  ModalDiseases11.insertAdjacentText('afterbegin', `${pets[result6[36]].diseases}`);

  let ModalParas11 = document.querySelector('.modal-parasites');
  ModalParas11.insertAdjacentText('afterbegin', `${pets[result6[36]].parasites}`);
}

function closeModal11() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay11.classList.remove('mmm');
  body.classList.remove('lock');

  // 11 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg11 = document.querySelector("#modal > div.modal-img > img");
  ModalImg11.src = ``

  let ModalName11 = document.querySelector('.modal-name');
  ModalName11.innerHTML = '';

  let ModalType11 = document.querySelector('.modal-type');
  ModalType11.innerHTML = '';

  let ModalBreed11 = document.querySelector('.modal-breed');
  ModalBreed11.innerHTML = '';

  let ModalDesc11 = document.querySelector('.modal-description');
  ModalDesc11.innerHTML = '';

  let ModalAge11 = document.querySelector('.modal-age');
  ModalAge11.innerHTML = '';

  let ModalInocul11 = document.querySelector('.modal-inoculations');
  ModalInocul11.innerHTML = '';

  let ModalDiseases11 = document.querySelector('.modal-diseases');
  ModalDiseases11.innerHTML = '';

  let ModalParas11 = document.querySelector('.modal-parasites');
  ModalParas11.innerHTML = '';
}



//11 11 11
const openModalButtons12 = document.querySelectorAll('.our-friends-pet')[12];
const closeModalButtons12 = document.querySelector('.close-button');
const overlay12 = document.getElementById('overlay');

openModalButtons12.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal12();
  }
});

closeModalButtons12.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal12();
  }
});

overlay12.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal12();
  }
});

function openModal12() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay12.classList.add('mmm');
  body.classList.add('lock');

  // 12 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg12 = document.querySelector("#modal > div.modal-img > img");
  ModalImg12.src = `${pets[result6[35]].img}`

  let ModalName12 = document.querySelector('.modal-name');
  ModalName12.insertAdjacentText('afterbegin', `${pets[result6[35]].name}`);

  let ModalType12 = document.querySelector('.modal-type');
  ModalType12.insertAdjacentText('afterbegin', `${pets[result6[35]].type}`);

  let ModalBreed12 = document.querySelector('.modal-breed');
  ModalBreed12.insertAdjacentText('afterbegin', `${pets[result6[35]].breed}`);

  let ModalDesc12 = document.querySelector('.modal-description');
  ModalDesc12.insertAdjacentText('afterbegin', `${pets[result6[35]].description}`);

  let ModalAge12 = document.querySelector('.modal-age');
  ModalAge12.insertAdjacentText('afterbegin', `${pets[result6[35]].age}`);

  let ModalInocul12 = document.querySelector('.modal-inoculations');
  ModalInocul12.insertAdjacentText('afterbegin', `${pets[result6[35]].inoculations}`);

  let ModalDiseases12 = document.querySelector('.modal-diseases');
  ModalDiseases12.insertAdjacentText('afterbegin', `${pets[result6[35]].diseases}`);

  let ModalParas12 = document.querySelector('.modal-parasites');
  ModalParas12.insertAdjacentText('afterbegin', `${pets[result6[35]].parasites}`);
}

function closeModal12() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay12.classList.remove('mmm');
  body.classList.remove('lock');

  // 12 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg12 = document.querySelector("#modal > div.modal-img > img");
  ModalImg12.src = ``

  let ModalName12 = document.querySelector('.modal-name');
  ModalName12.innerHTML = '';

  let ModalType12 = document.querySelector('.modal-type');
  ModalType12.innerHTML = '';

  let ModalBreed12 = document.querySelector('.modal-breed');
  ModalBreed12.innerHTML = '';

  let ModalDesc12 = document.querySelector('.modal-description');
  ModalDesc12.innerHTML = '';

  let ModalAge12 = document.querySelector('.modal-age');
  ModalAge12.innerHTML = '';

  let ModalInocul12 = document.querySelector('.modal-inoculations');
  ModalInocul12.innerHTML = '';

  let ModalDiseases12 = document.querySelector('.modal-diseases');
  ModalDiseases12.innerHTML = '';

  let ModalParas12 = document.querySelector('.modal-parasites');
  ModalParas12.innerHTML = '';
}



//11 11 11
const openModalButtons13 = document.querySelectorAll('.our-friends-pet')[13];
const closeModalButtons13 = document.querySelector('.close-button');
const overlay13 = document.getElementById('overlay');

openModalButtons13.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal13();
  }
});

closeModalButtons13.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal13();
  }
});

overlay13.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal13();
  }
});

function openModal13() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay13.classList.add('mmm');
  body.classList.add('lock');

  // 13 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg13 = document.querySelector("#modal > div.modal-img > img");
  ModalImg13.src = `${pets[result6[34]].img}`

  let ModalName13 = document.querySelector('.modal-name');
  ModalName13.insertAdjacentText('afterbegin', `${pets[result6[34]].name}`);

  let ModalType13 = document.querySelector('.modal-type');
  ModalType13.insertAdjacentText('afterbegin', `${pets[result6[34]].type}`);

  let ModalBreed13 = document.querySelector('.modal-breed');
  ModalBreed13.insertAdjacentText('afterbegin', `${pets[result6[34]].breed}`);

  let ModalDesc13 = document.querySelector('.modal-description');
  ModalDesc13.insertAdjacentText('afterbegin', `${pets[result6[34]].description}`);

  let ModalAge13 = document.querySelector('.modal-age');
  ModalAge13.insertAdjacentText('afterbegin', `${pets[result6[34]].age}`);

  let ModalInocul13 = document.querySelector('.modal-inoculations');
  ModalInocul13.insertAdjacentText('afterbegin', `${pets[result6[34]].inoculations}`);

  let ModalDiseases13 = document.querySelector('.modal-diseases');
  ModalDiseases13.insertAdjacentText('afterbegin', `${pets[result6[34]].diseases}`);

  let ModalParas13 = document.querySelector('.modal-parasites');
  ModalParas13.insertAdjacentText('afterbegin', `${pets[result6[34]].parasites}`);
}

function closeModal13() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay13.classList.remove('mmm');
  body.classList.remove('lock');

  // 13 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg13 = document.querySelector("#modal > div.modal-img > img");
  ModalImg13.src = ``

  let ModalName13 = document.querySelector('.modal-name');
  ModalName13.innerHTML = '';

  let ModalType13 = document.querySelector('.modal-type');
  ModalType13.innerHTML = '';

  let ModalBreed13 = document.querySelector('.modal-breed');
  ModalBreed13.innerHTML = '';

  let ModalDesc13 = document.querySelector('.modal-description');
  ModalDesc13.innerHTML = '';

  let ModalAge13 = document.querySelector('.modal-age');
  ModalAge13.innerHTML = '';

  let ModalInocul13 = document.querySelector('.modal-inoculations');
  ModalInocul13.innerHTML = '';

  let ModalDiseases13 = document.querySelector('.modal-diseases');
  ModalDiseases13.innerHTML = '';

  let ModalParas13 = document.querySelector('.modal-parasites');
  ModalParas13.innerHTML = '';
}



//11 11 11
const openModalButtons14 = document.querySelectorAll('.our-friends-pet')[14];
const closeModalButtons14 = document.querySelector('.close-button');
const overlay14 = document.getElementById('overlay');

openModalButtons14.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal14();
  }
});

closeModalButtons14.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal14();
  }
});

overlay14.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal14();
  }
});

function openModal14() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay14.classList.add('mmm');
  body.classList.add('lock');

  // 14 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg14 = document.querySelector("#modal > div.modal-img > img");
  ModalImg14.src = `${pets[result6[33]].img}`

  let ModalName14 = document.querySelector('.modal-name');
  ModalName14.insertAdjacentText('afterbegin', `${pets[result6[33]].name}`);

  let ModalType14 = document.querySelector('.modal-type');
  ModalType14.insertAdjacentText('afterbegin', `${pets[result6[33]].type}`);

  let ModalBreed14 = document.querySelector('.modal-breed');
  ModalBreed14.insertAdjacentText('afterbegin', `${pets[result6[33]].breed}`);

  let ModalDesc14 = document.querySelector('.modal-description');
  ModalDesc14.insertAdjacentText('afterbegin', `${pets[result6[33]].description}`);

  let ModalAge14 = document.querySelector('.modal-age');
  ModalAge14.insertAdjacentText('afterbegin', `${pets[result6[33]].age}`);

  let ModalInocul14 = document.querySelector('.modal-inoculations');
  ModalInocul14.insertAdjacentText('afterbegin', `${pets[result6[33]].inoculations}`);

  let ModalDiseases14 = document.querySelector('.modal-diseases');
  ModalDiseases14.insertAdjacentText('afterbegin', `${pets[result6[33]].diseases}`);

  let ModalParas14 = document.querySelector('.modal-parasites');
  ModalParas14.insertAdjacentText('afterbegin', `${pets[result6[33]].parasites}`);
}

function closeModal14() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay14.classList.remove('mmm');
  body.classList.remove('lock');

  // 14 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg14 = document.querySelector("#modal > div.modal-img > img");
  ModalImg14.src = ``

  let ModalName14 = document.querySelector('.modal-name');
  ModalName14.innerHTML = '';

  let ModalType14 = document.querySelector('.modal-type');
  ModalType14.innerHTML = '';

  let ModalBreed14 = document.querySelector('.modal-breed');
  ModalBreed14.innerHTML = '';

  let ModalDesc14 = document.querySelector('.modal-description');
  ModalDesc14.innerHTML = '';

  let ModalAge14 = document.querySelector('.modal-age');
  ModalAge14.innerHTML = '';

  let ModalInocul14 = document.querySelector('.modal-inoculations');
  ModalInocul14.innerHTML = '';

  let ModalDiseases14 = document.querySelector('.modal-diseases');
  ModalDiseases14.innerHTML = '';

  let ModalParas14 = document.querySelector('.modal-parasites');
  ModalParas14.innerHTML = '';
}



//11 11 11
const openModalButtons15 = document.querySelectorAll('.our-friends-pet')[15];
const closeModalButtons15 = document.querySelector('.close-button');
const overlay15 = document.getElementById('overlay');

openModalButtons15.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal15();
  }
});

closeModalButtons15.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal15();
  }
});

overlay15.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal15();
  }
});

function openModal15() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay15.classList.add('mmm');
  body.classList.add('lock');

  // 15 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg15 = document.querySelector("#modal > div.modal-img > img");
  ModalImg15.src = `${pets[result6[32]].img}`

  let ModalName15 = document.querySelector('.modal-name');
  ModalName15.insertAdjacentText('afterbegin', `${pets[result6[32]].name}`);

  let ModalType15 = document.querySelector('.modal-type');
  ModalType15.insertAdjacentText('afterbegin', `${pets[result6[32]].type}`);

  let ModalBreed15 = document.querySelector('.modal-breed');
  ModalBreed15.insertAdjacentText('afterbegin', `${pets[result6[32]].breed}`);

  let ModalDesc15 = document.querySelector('.modal-description');
  ModalDesc15.insertAdjacentText('afterbegin', `${pets[result6[32]].description}`);

  let ModalAge15 = document.querySelector('.modal-age');
  ModalAge15.insertAdjacentText('afterbegin', `${pets[result6[32]].age}`);

  let ModalInocul15 = document.querySelector('.modal-inoculations');
  ModalInocul15.insertAdjacentText('afterbegin', `${pets[result6[32]].inoculations}`);

  let ModalDiseases15 = document.querySelector('.modal-diseases');
  ModalDiseases15.insertAdjacentText('afterbegin', `${pets[result6[32]].diseases}`);

  let ModalParas15 = document.querySelector('.modal-parasites');
  ModalParas15.insertAdjacentText('afterbegin', `${pets[result6[32]].parasites}`);
}

function closeModal15() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay15.classList.remove('mmm');
  body.classList.remove('lock');

  // 15 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg15 = document.querySelector("#modal > div.modal-img > img");
  ModalImg15.src = ``

  let ModalName15 = document.querySelector('.modal-name');
  ModalName15.innerHTML = '';

  let ModalType15 = document.querySelector('.modal-type');
  ModalType15.innerHTML = '';

  let ModalBreed15 = document.querySelector('.modal-breed');
  ModalBreed15.innerHTML = '';

  let ModalDesc15 = document.querySelector('.modal-description');
  ModalDesc15.innerHTML = '';

  let ModalAge15 = document.querySelector('.modal-age');
  ModalAge15.innerHTML = '';

  let ModalInocul15 = document.querySelector('.modal-inoculations');
  ModalInocul15.innerHTML = '';

  let ModalDiseases15 = document.querySelector('.modal-diseases');
  ModalDiseases15.innerHTML = '';

  let ModalParas15 = document.querySelector('.modal-parasites');
  ModalParas15.innerHTML = '';
}



//11 11 11
const openModalButtons16 = document.querySelectorAll('.our-friends-pet')[16];
const closeModalButtons16 = document.querySelector('.close-button');
const overlay16 = document.getElementById('overlay');

openModalButtons16.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal16();
  }
});

closeModalButtons16.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal16();
  }
});

overlay16.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal16();
  }
});

function openModal16() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay16.classList.add('mmm');
  body.classList.add('lock');

  // 16 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg16 = document.querySelector("#modal > div.modal-img > img");
  ModalImg16.src = `${pets[result6[31]].img}`

  let ModalName16 = document.querySelector('.modal-name');
  ModalName16.insertAdjacentText('afterbegin', `${pets[result6[31]].name}`);

  let ModalType16 = document.querySelector('.modal-type');
  ModalType16.insertAdjacentText('afterbegin', `${pets[result6[31]].type}`);

  let ModalBreed16 = document.querySelector('.modal-breed');
  ModalBreed16.insertAdjacentText('afterbegin', `${pets[result6[31]].breed}`);

  let ModalDesc16 = document.querySelector('.modal-description');
  ModalDesc16.insertAdjacentText('afterbegin', `${pets[result6[31]].description}`);

  let ModalAge16 = document.querySelector('.modal-age');
  ModalAge16.insertAdjacentText('afterbegin', `${pets[result6[31]].age}`);

  let ModalInocul16 = document.querySelector('.modal-inoculations');
  ModalInocul16.insertAdjacentText('afterbegin', `${pets[result6[31]].inoculations}`);

  let ModalDiseases16 = document.querySelector('.modal-diseases');
  ModalDiseases16.insertAdjacentText('afterbegin', `${pets[result6[31]].diseases}`);

  let ModalParas16 = document.querySelector('.modal-parasites');
  ModalParas16.insertAdjacentText('afterbegin', `${pets[result6[31]].parasites}`);
}

function closeModal16() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay16.classList.remove('mmm');
  body.classList.remove('lock');

  // 16 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg16 = document.querySelector("#modal > div.modal-img > img");
  ModalImg16.src = ``

  let ModalName16 = document.querySelector('.modal-name');
  ModalName16.innerHTML = '';

  let ModalType16 = document.querySelector('.modal-type');
  ModalType16.innerHTML = '';

  let ModalBreed16 = document.querySelector('.modal-breed');
  ModalBreed16.innerHTML = '';

  let ModalDesc16 = document.querySelector('.modal-description');
  ModalDesc16.innerHTML = '';

  let ModalAge16 = document.querySelector('.modal-age');
  ModalAge16.innerHTML = '';

  let ModalInocul16 = document.querySelector('.modal-inoculations');
  ModalInocul16.innerHTML = '';

  let ModalDiseases16 = document.querySelector('.modal-diseases');
  ModalDiseases16.innerHTML = '';

  let ModalParas16 = document.querySelector('.modal-parasites');
  ModalParas16.innerHTML = '';
}



//11 11 11
const openModalButtons17 = document.querySelectorAll('.our-friends-pet')[17];
const closeModalButtons17 = document.querySelector('.close-button');
const overlay17 = document.getElementById('overlay');

openModalButtons17.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal17();
  }
});

closeModalButtons17.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal17();
  }
});

overlay17.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal17();
  }
});

function openModal17() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay17.classList.add('mmm');
  body.classList.add('lock');

  // 17 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg17 = document.querySelector("#modal > div.modal-img > img");
  ModalImg17.src = `${pets[result6[30]].img}`

  let ModalName17 = document.querySelector('.modal-name');
  ModalName17.insertAdjacentText('afterbegin', `${pets[result6[30]].name}`);

  let ModalType17 = document.querySelector('.modal-type');
  ModalType17.insertAdjacentText('afterbegin', `${pets[result6[30]].type}`);

  let ModalBreed17 = document.querySelector('.modal-breed');
  ModalBreed17.insertAdjacentText('afterbegin', `${pets[result6[30]].breed}`);

  let ModalDesc17 = document.querySelector('.modal-description');
  ModalDesc17.insertAdjacentText('afterbegin', `${pets[result6[30]].description}`);

  let ModalAge17 = document.querySelector('.modal-age');
  ModalAge17.insertAdjacentText('afterbegin', `${pets[result6[30]].age}`);

  let ModalInocul17 = document.querySelector('.modal-inoculations');
  ModalInocul17.insertAdjacentText('afterbegin', `${pets[result6[30]].inoculations}`);

  let ModalDiseases17 = document.querySelector('.modal-diseases');
  ModalDiseases17.insertAdjacentText('afterbegin', `${pets[result6[30]].diseases}`);

  let ModalParas17 = document.querySelector('.modal-parasites');
  ModalParas17.insertAdjacentText('afterbegin', `${pets[result6[30]].parasites}`);
}

function closeModal17() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay17.classList.remove('mmm');
  body.classList.remove('lock');

  // 17 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg17 = document.querySelector("#modal > div.modal-img > img");
  ModalImg17.src = ``

  let ModalName17 = document.querySelector('.modal-name');
  ModalName17.innerHTML = '';

  let ModalType17 = document.querySelector('.modal-type');
  ModalType17.innerHTML = '';

  let ModalBreed17 = document.querySelector('.modal-breed');
  ModalBreed17.innerHTML = '';

  let ModalDesc17 = document.querySelector('.modal-description');
  ModalDesc17.innerHTML = '';

  let ModalAge17 = document.querySelector('.modal-age');
  ModalAge17.innerHTML = '';

  let ModalInocul17 = document.querySelector('.modal-inoculations');
  ModalInocul17.innerHTML = '';

  let ModalDiseases17 = document.querySelector('.modal-diseases');
  ModalDiseases17.innerHTML = '';

  let ModalParas17 = document.querySelector('.modal-parasites');
  ModalParas17.innerHTML = '';
}



//11 11 11
const openModalButtons18 = document.querySelectorAll('.our-friends-pet')[18];
const closeModalButtons18 = document.querySelector('.close-button');
const overlay18 = document.getElementById('overlay');

openModalButtons18.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal18();
  }
});

closeModalButtons18.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal18();
  }
});

overlay18.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal18();
  }
});

function openModal18() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay18.classList.add('mmm');
  body.classList.add('lock');

  // 18 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg18 = document.querySelector("#modal > div.modal-img > img");
  ModalImg18.src = `${pets[result6[29]].img}`

  let ModalName18 = document.querySelector('.modal-name');
  ModalName18.insertAdjacentText('afterbegin', `${pets[result6[29]].name}`);

  let ModalType18 = document.querySelector('.modal-type');
  ModalType18.insertAdjacentText('afterbegin', `${pets[result6[29]].type}`);

  let ModalBreed18 = document.querySelector('.modal-breed');
  ModalBreed18.insertAdjacentText('afterbegin', `${pets[result6[29]].breed}`);

  let ModalDesc18 = document.querySelector('.modal-description');
  ModalDesc18.insertAdjacentText('afterbegin', `${pets[result6[29]].description}`);

  let ModalAge18 = document.querySelector('.modal-age');
  ModalAge18.insertAdjacentText('afterbegin', `${pets[result6[29]].age}`);

  let ModalInocul18 = document.querySelector('.modal-inoculations');
  ModalInocul18.insertAdjacentText('afterbegin', `${pets[result6[29]].inoculations}`);

  let ModalDiseases18 = document.querySelector('.modal-diseases');
  ModalDiseases18.insertAdjacentText('afterbegin', `${pets[result6[29]].diseases}`);

  let ModalParas18 = document.querySelector('.modal-parasites');
  ModalParas18.insertAdjacentText('afterbegin', `${pets[result6[29]].parasites}`);
}

function closeModal18() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay18.classList.remove('mmm');
  body.classList.remove('lock');

  // 18 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg18 = document.querySelector("#modal > div.modal-img > img");
  ModalImg18.src = ``

  let ModalName18 = document.querySelector('.modal-name');
  ModalName18.innerHTML = '';

  let ModalType18 = document.querySelector('.modal-type');
  ModalType18.innerHTML = '';

  let ModalBreed18 = document.querySelector('.modal-breed');
  ModalBreed18.innerHTML = '';

  let ModalDesc18 = document.querySelector('.modal-description');
  ModalDesc18.innerHTML = '';

  let ModalAge18 = document.querySelector('.modal-age');
  ModalAge18.innerHTML = '';

  let ModalInocul18 = document.querySelector('.modal-inoculations');
  ModalInocul18.innerHTML = '';

  let ModalDiseases18 = document.querySelector('.modal-diseases');
  ModalDiseases18.innerHTML = '';

  let ModalParas18 = document.querySelector('.modal-parasites');
  ModalParas18.innerHTML = '';
}



//11 11 11
const openModalButtons19 = document.querySelectorAll('.our-friends-pet')[19];
const closeModalButtons19 = document.querySelector('.close-button');
const overlay19 = document.getElementById('overlay');

openModalButtons19.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal19();
  }
});

closeModalButtons19.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal19();
  }
});

overlay19.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal19();
  }
});

function openModal19() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay19.classList.add('mmm');
  body.classList.add('lock');

  // 19 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg19 = document.querySelector("#modal > div.modal-img > img");
  ModalImg19.src = `${pets[result6[28]].img}`

  let ModalName19 = document.querySelector('.modal-name');
  ModalName19.insertAdjacentText('afterbegin', `${pets[result6[28]].name}`);

  let ModalType19 = document.querySelector('.modal-type');
  ModalType19.insertAdjacentText('afterbegin', `${pets[result6[28]].type}`);

  let ModalBreed19 = document.querySelector('.modal-breed');
  ModalBreed19.insertAdjacentText('afterbegin', `${pets[result6[28]].breed}`);

  let ModalDesc19 = document.querySelector('.modal-description');
  ModalDesc19.insertAdjacentText('afterbegin', `${pets[result6[28]].description}`);

  let ModalAge19 = document.querySelector('.modal-age');
  ModalAge19.insertAdjacentText('afterbegin', `${pets[result6[28]].age}`);

  let ModalInocul19 = document.querySelector('.modal-inoculations');
  ModalInocul19.insertAdjacentText('afterbegin', `${pets[result6[28]].inoculations}`);

  let ModalDiseases19 = document.querySelector('.modal-diseases');
  ModalDiseases19.insertAdjacentText('afterbegin', `${pets[result6[28]].diseases}`);

  let ModalParas19 = document.querySelector('.modal-parasites');
  ModalParas19.insertAdjacentText('afterbegin', `${pets[result6[28]].parasites}`);
}

function closeModal19() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay19.classList.remove('mmm');
  body.classList.remove('lock');

  // 19 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg19 = document.querySelector("#modal > div.modal-img > img");
  ModalImg19.src = ``

  let ModalName19 = document.querySelector('.modal-name');
  ModalName19.innerHTML = '';

  let ModalType19 = document.querySelector('.modal-type');
  ModalType19.innerHTML = '';

  let ModalBreed19 = document.querySelector('.modal-breed');
  ModalBreed19.innerHTML = '';

  let ModalDesc19 = document.querySelector('.modal-description');
  ModalDesc19.innerHTML = '';

  let ModalAge19 = document.querySelector('.modal-age');
  ModalAge19.innerHTML = '';

  let ModalInocul19 = document.querySelector('.modal-inoculations');
  ModalInocul19.innerHTML = '';

  let ModalDiseases19 = document.querySelector('.modal-diseases');
  ModalDiseases19.innerHTML = '';

  let ModalParas19 = document.querySelector('.modal-parasites');
  ModalParas19.innerHTML = '';
}



//11 11 11
const openModalButtons20 = document.querySelectorAll('.our-friends-pet')[20];
const closeModalButtons20 = document.querySelector('.close-button');
const overlay20 = document.getElementById('overlay');

openModalButtons20.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal20();
  }
});

closeModalButtons20.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal20();
  }
});

overlay20.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal20();
  }
});

function openModal20() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay20.classList.add('mmm');
  body.classList.add('lock');

  // 20 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg20 = document.querySelector("#modal > div.modal-img > img");
  ModalImg20.src = `${pets[result6[27]].img}`

  let ModalName20 = document.querySelector('.modal-name');
  ModalName20.insertAdjacentText('afterbegin', `${pets[result6[27]].name}`);

  let ModalType20 = document.querySelector('.modal-type');
  ModalType20.insertAdjacentText('afterbegin', `${pets[result6[27]].type}`);

  let ModalBreed20 = document.querySelector('.modal-breed');
  ModalBreed20.insertAdjacentText('afterbegin', `${pets[result6[27]].breed}`);

  let ModalDesc20 = document.querySelector('.modal-description');
  ModalDesc20.insertAdjacentText('afterbegin', `${pets[result6[27]].description}`);

  let ModalAge20 = document.querySelector('.modal-age');
  ModalAge20.insertAdjacentText('afterbegin', `${pets[result6[27]].age}`);

  let ModalInocul20 = document.querySelector('.modal-inoculations');
  ModalInocul20.insertAdjacentText('afterbegin', `${pets[result6[27]].inoculations}`);

  let ModalDiseases20 = document.querySelector('.modal-diseases');
  ModalDiseases20.insertAdjacentText('afterbegin', `${pets[result6[27]].diseases}`);

  let ModalParas20 = document.querySelector('.modal-parasites');
  ModalParas20.insertAdjacentText('afterbegin', `${pets[result6[27]].parasites}`);
}

function closeModal20() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay20.classList.remove('mmm');
  body.classList.remove('lock');

  // 20 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg20 = document.querySelector("#modal > div.modal-img > img");
  ModalImg20.src = ``

  let ModalName20 = document.querySelector('.modal-name');
  ModalName20.innerHTML = '';

  let ModalType20 = document.querySelector('.modal-type');
  ModalType20.innerHTML = '';

  let ModalBreed20 = document.querySelector('.modal-breed');
  ModalBreed20.innerHTML = '';

  let ModalDesc20 = document.querySelector('.modal-description');
  ModalDesc20.innerHTML = '';

  let ModalAge20 = document.querySelector('.modal-age');
  ModalAge20.innerHTML = '';

  let ModalInocul20 = document.querySelector('.modal-inoculations');
  ModalInocul20.innerHTML = '';

  let ModalDiseases20 = document.querySelector('.modal-diseases');
  ModalDiseases20.innerHTML = '';

  let ModalParas20 = document.querySelector('.modal-parasites');
  ModalParas20.innerHTML = '';
}



//------
//11 11 11
const openModalButtons21 = document.querySelectorAll('.our-friends-pet')[21];
const closeModalButtons21 = document.querySelector('.close-button');
const overlay21 = document.getElementById('overlay');

openModalButtons21.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal21();
  }
});

closeModalButtons21.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal21();
  }
});

overlay21.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal21();
  }
});

function openModal21() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay21.classList.add('mmm');
  body.classList.add('lock');

  // 21 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg21 = document.querySelector("#modal > div.modal-img > img");
  ModalImg21.src = `${pets[result6[26]].img}`

  let ModalName21 = document.querySelector('.modal-name');
  ModalName21.insertAdjacentText('afterbegin', `${pets[result6[26]].name}`);

  let ModalType21 = document.querySelector('.modal-type');
  ModalType21.insertAdjacentText('afterbegin', `${pets[result6[26]].type}`);

  let ModalBreed21 = document.querySelector('.modal-breed');
  ModalBreed21.insertAdjacentText('afterbegin', `${pets[result6[26]].breed}`);

  let ModalDesc21 = document.querySelector('.modal-description');
  ModalDesc21.insertAdjacentText('afterbegin', `${pets[result6[26]].description}`);

  let ModalAge21 = document.querySelector('.modal-age');
  ModalAge21.insertAdjacentText('afterbegin', `${pets[result6[26]].age}`);

  let ModalInocul21 = document.querySelector('.modal-inoculations');
  ModalInocul21.insertAdjacentText('afterbegin', `${pets[result6[26]].inoculations}`);

  let ModalDiseases21 = document.querySelector('.modal-diseases');
  ModalDiseases21.insertAdjacentText('afterbegin', `${pets[result6[26]].diseases}`);

  let ModalParas21 = document.querySelector('.modal-parasites');
  ModalParas21.insertAdjacentText('afterbegin', `${pets[result6[26]].parasites}`);
}

function closeModal21() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay21.classList.remove('mmm');
  body.classList.remove('lock');

  // 21 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg21 = document.querySelector("#modal > div.modal-img > img");
  ModalImg21.src = ``

  let ModalName21 = document.querySelector('.modal-name');
  ModalName21.innerHTML = '';

  let ModalType21 = document.querySelector('.modal-type');
  ModalType21.innerHTML = '';

  let ModalBreed21 = document.querySelector('.modal-breed');
  ModalBreed21.innerHTML = '';

  let ModalDesc21 = document.querySelector('.modal-description');
  ModalDesc21.innerHTML = '';

  let ModalAge21 = document.querySelector('.modal-age');
  ModalAge21.innerHTML = '';

  let ModalInocul21 = document.querySelector('.modal-inoculations');
  ModalInocul21.innerHTML = '';

  let ModalDiseases21 = document.querySelector('.modal-diseases');
  ModalDiseases21.innerHTML = '';

  let ModalParas21 = document.querySelector('.modal-parasites');
  ModalParas21.innerHTML = '';
}



//11 11 11
const openModalButtons22 = document.querySelectorAll('.our-friends-pet')[22];
const closeModalButtons22 = document.querySelector('.close-button');
const overlay22 = document.getElementById('overlay');

openModalButtons22.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal22();
  }
});

closeModalButtons22.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal22();
  }
});

overlay22.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal22();
  }
});

function openModal22() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay22.classList.add('mmm');
  body.classList.add('lock');

  // 22 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg22 = document.querySelector("#modal > div.modal-img > img");
  ModalImg22.src = `${pets[result6[25]].img}`

  let ModalName22 = document.querySelector('.modal-name');
  ModalName22.insertAdjacentText('afterbegin', `${pets[result6[25]].name}`);

  let ModalType22 = document.querySelector('.modal-type');
  ModalType22.insertAdjacentText('afterbegin', `${pets[result6[25]].type}`);

  let ModalBreed22 = document.querySelector('.modal-breed');
  ModalBreed22.insertAdjacentText('afterbegin', `${pets[result6[25]].breed}`);

  let ModalDesc22 = document.querySelector('.modal-description');
  ModalDesc22.insertAdjacentText('afterbegin', `${pets[result6[25]].description}`);

  let ModalAge22 = document.querySelector('.modal-age');
  ModalAge22.insertAdjacentText('afterbegin', `${pets[result6[25]].age}`);

  let ModalInocul22 = document.querySelector('.modal-inoculations');
  ModalInocul22.insertAdjacentText('afterbegin', `${pets[result6[25]].inoculations}`);

  let ModalDiseases22 = document.querySelector('.modal-diseases');
  ModalDiseases22.insertAdjacentText('afterbegin', `${pets[result6[25]].diseases}`);

  let ModalParas22 = document.querySelector('.modal-parasites');
  ModalParas22.insertAdjacentText('afterbegin', `${pets[result6[25]].parasites}`);
}

function closeModal22() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay22.classList.remove('mmm');
  body.classList.remove('lock');

  // 22 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg22 = document.querySelector("#modal > div.modal-img > img");
  ModalImg22.src = ``

  let ModalName22 = document.querySelector('.modal-name');
  ModalName22.innerHTML = '';

  let ModalType22 = document.querySelector('.modal-type');
  ModalType22.innerHTML = '';

  let ModalBreed22 = document.querySelector('.modal-breed');
  ModalBreed22.innerHTML = '';

  let ModalDesc22 = document.querySelector('.modal-description');
  ModalDesc22.innerHTML = '';

  let ModalAge22 = document.querySelector('.modal-age');
  ModalAge22.innerHTML = '';

  let ModalInocul22 = document.querySelector('.modal-inoculations');
  ModalInocul22.innerHTML = '';

  let ModalDiseases22 = document.querySelector('.modal-diseases');
  ModalDiseases22.innerHTML = '';

  let ModalParas22 = document.querySelector('.modal-parasites');
  ModalParas22.innerHTML = '';
}



//11 11 11
const openModalButtons23 = document.querySelectorAll('.our-friends-pet')[23];
const closeModalButtons23 = document.querySelector('.close-button');
const overlay23 = document.getElementById('overlay');

openModalButtons23.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal23();
  }
});

closeModalButtons23.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal23();
  }
});

overlay23.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal23();
  }
});

function openModal23() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay23.classList.add('mmm');
  body.classList.add('lock');

  // 23 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg23 = document.querySelector("#modal > div.modal-img > img");
  ModalImg23.src = `${pets[result6[24]].img}`

  let ModalName23 = document.querySelector('.modal-name');
  ModalName23.insertAdjacentText('afterbegin', `${pets[result6[24]].name}`);

  let ModalType23 = document.querySelector('.modal-type');
  ModalType23.insertAdjacentText('afterbegin', `${pets[result6[24]].type}`);

  let ModalBreed23 = document.querySelector('.modal-breed');
  ModalBreed23.insertAdjacentText('afterbegin', `${pets[result6[24]].breed}`);

  let ModalDesc23 = document.querySelector('.modal-description');
  ModalDesc23.insertAdjacentText('afterbegin', `${pets[result6[24]].description}`);

  let ModalAge23 = document.querySelector('.modal-age');
  ModalAge23.insertAdjacentText('afterbegin', `${pets[result6[24]].age}`);

  let ModalInocul23 = document.querySelector('.modal-inoculations');
  ModalInocul23.insertAdjacentText('afterbegin', `${pets[result6[24]].inoculations}`);

  let ModalDiseases23 = document.querySelector('.modal-diseases');
  ModalDiseases23.insertAdjacentText('afterbegin', `${pets[result6[24]].diseases}`);

  let ModalParas23 = document.querySelector('.modal-parasites');
  ModalParas23.insertAdjacentText('afterbegin', `${pets[result6[24]].parasites}`);
}

function closeModal23() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay23.classList.remove('mmm');
  body.classList.remove('lock');

  // 23 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg23 = document.querySelector("#modal > div.modal-img > img");
  ModalImg23.src = ``

  let ModalName23 = document.querySelector('.modal-name');
  ModalName23.innerHTML = '';

  let ModalType23 = document.querySelector('.modal-type');
  ModalType23.innerHTML = '';

  let ModalBreed23 = document.querySelector('.modal-breed');
  ModalBreed23.innerHTML = '';

  let ModalDesc23 = document.querySelector('.modal-description');
  ModalDesc23.innerHTML = '';

  let ModalAge23 = document.querySelector('.modal-age');
  ModalAge23.innerHTML = '';

  let ModalInocul23 = document.querySelector('.modal-inoculations');
  ModalInocul23.innerHTML = '';

  let ModalDiseases23 = document.querySelector('.modal-diseases');
  ModalDiseases23.innerHTML = '';

  let ModalParas23 = document.querySelector('.modal-parasites');
  ModalParas23.innerHTML = '';
}



//11 11 11
const openModalButtons24 = document.querySelectorAll('.our-friends-pet')[24];
const closeModalButtons24 = document.querySelector('.close-button');
const overlay24 = document.getElementById('overlay');

openModalButtons24.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal24();
  }
});

closeModalButtons24.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal24();
  }
});

overlay24.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal24();
  }
});

function openModal24() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay24.classList.add('mmm');
  body.classList.add('lock');

  // 24 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg24 = document.querySelector("#modal > div.modal-img > img");
  ModalImg24.src = `${pets[result6[23]].img}`

  let ModalName24 = document.querySelector('.modal-name');
  ModalName24.insertAdjacentText('afterbegin', `${pets[result6[23]].name}`);

  let ModalType24 = document.querySelector('.modal-type');
  ModalType24.insertAdjacentText('afterbegin', `${pets[result6[23]].type}`);

  let ModalBreed24 = document.querySelector('.modal-breed');
  ModalBreed24.insertAdjacentText('afterbegin', `${pets[result6[23]].breed}`);

  let ModalDesc24 = document.querySelector('.modal-description');
  ModalDesc24.insertAdjacentText('afterbegin', `${pets[result6[23]].description}`);

  let ModalAge24 = document.querySelector('.modal-age');
  ModalAge24.insertAdjacentText('afterbegin', `${pets[result6[23]].age}`);

  let ModalInocul24 = document.querySelector('.modal-inoculations');
  ModalInocul24.insertAdjacentText('afterbegin', `${pets[result6[23]].inoculations}`);

  let ModalDiseases24 = document.querySelector('.modal-diseases');
  ModalDiseases24.insertAdjacentText('afterbegin', `${pets[result6[23]].diseases}`);

  let ModalParas24 = document.querySelector('.modal-parasites');
  ModalParas24.insertAdjacentText('afterbegin', `${pets[result6[23]].parasites}`);
}

function closeModal24() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay24.classList.remove('mmm');
  body.classList.remove('lock');

  // 24 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg24 = document.querySelector("#modal > div.modal-img > img");
  ModalImg24.src = ``

  let ModalName24 = document.querySelector('.modal-name');
  ModalName24.innerHTML = '';

  let ModalType24 = document.querySelector('.modal-type');
  ModalType24.innerHTML = '';

  let ModalBreed24 = document.querySelector('.modal-breed');
  ModalBreed24.innerHTML = '';

  let ModalDesc24 = document.querySelector('.modal-description');
  ModalDesc24.innerHTML = '';

  let ModalAge24 = document.querySelector('.modal-age');
  ModalAge24.innerHTML = '';

  let ModalInocul24 = document.querySelector('.modal-inoculations');
  ModalInocul24.innerHTML = '';

  let ModalDiseases24 = document.querySelector('.modal-diseases');
  ModalDiseases24.innerHTML = '';

  let ModalParas24 = document.querySelector('.modal-parasites');
  ModalParas24.innerHTML = '';
}



//11 11 11
const openModalButtons25 = document.querySelectorAll('.our-friends-pet')[25];
const closeModalButtons25 = document.querySelector('.close-button');
const overlay25 = document.getElementById('overlay');

openModalButtons25.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal25();
  }
});

closeModalButtons25.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal25();
  }
});

overlay25.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal25();
  }
});

function openModal25() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay25.classList.add('mmm');
  body.classList.add('lock');

  // 25 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg25 = document.querySelector("#modal > div.modal-img > img");
  ModalImg25.src = `${pets[result6[22]].img}`

  let ModalName25 = document.querySelector('.modal-name');
  ModalName25.insertAdjacentText('afterbegin', `${pets[result6[22]].name}`);

  let ModalType25 = document.querySelector('.modal-type');
  ModalType25.insertAdjacentText('afterbegin', `${pets[result6[22]].type}`);

  let ModalBreed25 = document.querySelector('.modal-breed');
  ModalBreed25.insertAdjacentText('afterbegin', `${pets[result6[22]].breed}`);

  let ModalDesc25 = document.querySelector('.modal-description');
  ModalDesc25.insertAdjacentText('afterbegin', `${pets[result6[22]].description}`);

  let ModalAge25 = document.querySelector('.modal-age');
  ModalAge25.insertAdjacentText('afterbegin', `${pets[result6[22]].age}`);

  let ModalInocul25 = document.querySelector('.modal-inoculations');
  ModalInocul25.insertAdjacentText('afterbegin', `${pets[result6[22]].inoculations}`);

  let ModalDiseases25 = document.querySelector('.modal-diseases');
  ModalDiseases25.insertAdjacentText('afterbegin', `${pets[result6[22]].diseases}`);

  let ModalParas25 = document.querySelector('.modal-parasites');
  ModalParas25.insertAdjacentText('afterbegin', `${pets[result6[22]].parasites}`);
}

function closeModal25() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay25.classList.remove('mmm');
  body.classList.remove('lock');

  // 25 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg25 = document.querySelector("#modal > div.modal-img > img");
  ModalImg25.src = ``

  let ModalName25 = document.querySelector('.modal-name');
  ModalName25.innerHTML = '';

  let ModalType25 = document.querySelector('.modal-type');
  ModalType25.innerHTML = '';

  let ModalBreed25 = document.querySelector('.modal-breed');
  ModalBreed25.innerHTML = '';

  let ModalDesc25 = document.querySelector('.modal-description');
  ModalDesc25.innerHTML = '';

  let ModalAge25 = document.querySelector('.modal-age');
  ModalAge25.innerHTML = '';

  let ModalInocul25 = document.querySelector('.modal-inoculations');
  ModalInocul25.innerHTML = '';

  let ModalDiseases25 = document.querySelector('.modal-diseases');
  ModalDiseases25.innerHTML = '';

  let ModalParas25 = document.querySelector('.modal-parasites');
  ModalParas25.innerHTML = '';
}



//11 11 11
const openModalButtons26 = document.querySelectorAll('.our-friends-pet')[26];
const closeModalButtons26 = document.querySelector('.close-button');
const overlay26 = document.getElementById('overlay');

openModalButtons26.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal26();
  }
});

closeModalButtons26.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal26();
  }
});

overlay26.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal26();
  }
});

function openModal26() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay26.classList.add('mmm');
  body.classList.add('lock');

  // 26 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg26 = document.querySelector("#modal > div.modal-img > img");
  ModalImg26.src = `${pets[result6[21]].img}`

  let ModalName26 = document.querySelector('.modal-name');
  ModalName26.insertAdjacentText('afterbegin', `${pets[result6[21]].name}`);

  let ModalType26 = document.querySelector('.modal-type');
  ModalType26.insertAdjacentText('afterbegin', `${pets[result6[21]].type}`);

  let ModalBreed26 = document.querySelector('.modal-breed');
  ModalBreed26.insertAdjacentText('afterbegin', `${pets[result6[21]].breed}`);

  let ModalDesc26 = document.querySelector('.modal-description');
  ModalDesc26.insertAdjacentText('afterbegin', `${pets[result6[21]].description}`);

  let ModalAge26 = document.querySelector('.modal-age');
  ModalAge26.insertAdjacentText('afterbegin', `${pets[result6[21]].age}`);

  let ModalInocul26 = document.querySelector('.modal-inoculations');
  ModalInocul26.insertAdjacentText('afterbegin', `${pets[result6[21]].inoculations}`);

  let ModalDiseases26 = document.querySelector('.modal-diseases');
  ModalDiseases26.insertAdjacentText('afterbegin', `${pets[result6[21]].diseases}`);

  let ModalParas26 = document.querySelector('.modal-parasites');
  ModalParas26.insertAdjacentText('afterbegin', `${pets[result6[21]].parasites}`);
}

function closeModal26() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay26.classList.remove('mmm');
  body.classList.remove('lock');

  // 26 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg26 = document.querySelector("#modal > div.modal-img > img");
  ModalImg26.src = ``

  let ModalName26 = document.querySelector('.modal-name');
  ModalName26.innerHTML = '';

  let ModalType26 = document.querySelector('.modal-type');
  ModalType26.innerHTML = '';

  let ModalBreed26 = document.querySelector('.modal-breed');
  ModalBreed26.innerHTML = '';

  let ModalDesc26 = document.querySelector('.modal-description');
  ModalDesc26.innerHTML = '';

  let ModalAge26 = document.querySelector('.modal-age');
  ModalAge26.innerHTML = '';

  let ModalInocul26 = document.querySelector('.modal-inoculations');
  ModalInocul26.innerHTML = '';

  let ModalDiseases26 = document.querySelector('.modal-diseases');
  ModalDiseases26.innerHTML = '';

  let ModalParas26 = document.querySelector('.modal-parasites');
  ModalParas26.innerHTML = '';
}



//11 11 11
const openModalButtons27 = document.querySelectorAll('.our-friends-pet')[27];
const closeModalButtons27 = document.querySelector('.close-button');
const overlay27 = document.getElementById('overlay');

openModalButtons27.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal27();
  }
});

closeModalButtons27.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal27();
  }
});

overlay27.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal27();
  }
});

function openModal27() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay27.classList.add('mmm');
  body.classList.add('lock');

  // 27 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg27 = document.querySelector("#modal > div.modal-img > img");
  ModalImg27.src = `${pets[result6[20]].img}`

  let ModalName27 = document.querySelector('.modal-name');
  ModalName27.insertAdjacentText('afterbegin', `${pets[result6[20]].name}`);

  let ModalType27 = document.querySelector('.modal-type');
  ModalType27.insertAdjacentText('afterbegin', `${pets[result6[20]].type}`);

  let ModalBreed27 = document.querySelector('.modal-breed');
  ModalBreed27.insertAdjacentText('afterbegin', `${pets[result6[20]].breed}`);

  let ModalDesc27 = document.querySelector('.modal-description');
  ModalDesc27.insertAdjacentText('afterbegin', `${pets[result6[20]].description}`);

  let ModalAge27 = document.querySelector('.modal-age');
  ModalAge27.insertAdjacentText('afterbegin', `${pets[result6[20]].age}`);

  let ModalInocul27 = document.querySelector('.modal-inoculations');
  ModalInocul27.insertAdjacentText('afterbegin', `${pets[result6[20]].inoculations}`);

  let ModalDiseases27 = document.querySelector('.modal-diseases');
  ModalDiseases27.insertAdjacentText('afterbegin', `${pets[result6[20]].diseases}`);

  let ModalParas27 = document.querySelector('.modal-parasites');
  ModalParas27.insertAdjacentText('afterbegin', `${pets[result6[20]].parasites}`);
}

function closeModal27() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay27.classList.remove('mmm');
  body.classList.remove('lock');

  // 27 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg27 = document.querySelector("#modal > div.modal-img > img");
  ModalImg27.src = ``

  let ModalName27 = document.querySelector('.modal-name');
  ModalName27.innerHTML = '';

  let ModalType27 = document.querySelector('.modal-type');
  ModalType27.innerHTML = '';

  let ModalBreed27 = document.querySelector('.modal-breed');
  ModalBreed27.innerHTML = '';

  let ModalDesc27 = document.querySelector('.modal-description');
  ModalDesc27.innerHTML = '';

  let ModalAge27 = document.querySelector('.modal-age');
  ModalAge27.innerHTML = '';

  let ModalInocul27 = document.querySelector('.modal-inoculations');
  ModalInocul27.innerHTML = '';

  let ModalDiseases27 = document.querySelector('.modal-diseases');
  ModalDiseases27.innerHTML = '';

  let ModalParas27 = document.querySelector('.modal-parasites');
  ModalParas27.innerHTML = '';
}



//11 11 11
const openModalButtons28 = document.querySelectorAll('.our-friends-pet')[28];
const closeModalButtons28 = document.querySelector('.close-button');
const overlay28 = document.getElementById('overlay');

openModalButtons28.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal28();
  }
});

closeModalButtons28.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal28();
  }
});

overlay28.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal28();
  }
});

function openModal28() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay28.classList.add('mmm');
  body.classList.add('lock');

  // 28 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg28 = document.querySelector("#modal > div.modal-img > img");
  ModalImg28.src = `${pets[result6[19]].img}`

  let ModalName28 = document.querySelector('.modal-name');
  ModalName28.insertAdjacentText('afterbegin', `${pets[result6[19]].name}`);

  let ModalType28 = document.querySelector('.modal-type');
  ModalType28.insertAdjacentText('afterbegin', `${pets[result6[19]].type}`);

  let ModalBreed28 = document.querySelector('.modal-breed');
  ModalBreed28.insertAdjacentText('afterbegin', `${pets[result6[19]].breed}`);

  let ModalDesc28 = document.querySelector('.modal-description');
  ModalDesc28.insertAdjacentText('afterbegin', `${pets[result6[19]].description}`);

  let ModalAge28 = document.querySelector('.modal-age');
  ModalAge28.insertAdjacentText('afterbegin', `${pets[result6[19]].age}`);

  let ModalInocul28 = document.querySelector('.modal-inoculations');
  ModalInocul28.insertAdjacentText('afterbegin', `${pets[result6[19]].inoculations}`);

  let ModalDiseases28 = document.querySelector('.modal-diseases');
  ModalDiseases28.insertAdjacentText('afterbegin', `${pets[result6[19]].diseases}`);

  let ModalParas28 = document.querySelector('.modal-parasites');
  ModalParas28.insertAdjacentText('afterbegin', `${pets[result6[19]].parasites}`);
}

function closeModal28() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay28.classList.remove('mmm');
  body.classList.remove('lock');

  // 28 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg28 = document.querySelector("#modal > div.modal-img > img");
  ModalImg28.src = ``

  let ModalName28 = document.querySelector('.modal-name');
  ModalName28.innerHTML = '';

  let ModalType28 = document.querySelector('.modal-type');
  ModalType28.innerHTML = '';

  let ModalBreed28 = document.querySelector('.modal-breed');
  ModalBreed28.innerHTML = '';

  let ModalDesc28 = document.querySelector('.modal-description');
  ModalDesc28.innerHTML = '';

  let ModalAge28 = document.querySelector('.modal-age');
  ModalAge28.innerHTML = '';

  let ModalInocul28 = document.querySelector('.modal-inoculations');
  ModalInocul28.innerHTML = '';

  let ModalDiseases28 = document.querySelector('.modal-diseases');
  ModalDiseases28.innerHTML = '';

  let ModalParas28 = document.querySelector('.modal-parasites');
  ModalParas28.innerHTML = '';
}



//11 11 11
const openModalButtons29 = document.querySelectorAll('.our-friends-pet')[29];
const closeModalButtons29 = document.querySelector('.close-button');
const overlay29 = document.getElementById('overlay');

openModalButtons29.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal29();
  }
});

closeModalButtons29.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal29();
  }
});

overlay29.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal29();
  }
});

function openModal29() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay29.classList.add('mmm');
  body.classList.add('lock');

  // 29 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg29 = document.querySelector("#modal > div.modal-img > img");
  ModalImg29.src = `${pets[result6[18]].img}`

  let ModalName29 = document.querySelector('.modal-name');
  ModalName29.insertAdjacentText('afterbegin', `${pets[result6[18]].name}`);

  let ModalType29 = document.querySelector('.modal-type');
  ModalType29.insertAdjacentText('afterbegin', `${pets[result6[18]].type}`);

  let ModalBreed29 = document.querySelector('.modal-breed');
  ModalBreed29.insertAdjacentText('afterbegin', `${pets[result6[18]].breed}`);

  let ModalDesc29 = document.querySelector('.modal-description');
  ModalDesc29.insertAdjacentText('afterbegin', `${pets[result6[18]].description}`);

  let ModalAge29 = document.querySelector('.modal-age');
  ModalAge29.insertAdjacentText('afterbegin', `${pets[result6[18]].age}`);

  let ModalInocul29 = document.querySelector('.modal-inoculations');
  ModalInocul29.insertAdjacentText('afterbegin', `${pets[result6[18]].inoculations}`);

  let ModalDiseases29 = document.querySelector('.modal-diseases');
  ModalDiseases29.insertAdjacentText('afterbegin', `${pets[result6[18]].diseases}`);

  let ModalParas29 = document.querySelector('.modal-parasites');
  ModalParas29.insertAdjacentText('afterbegin', `${pets[result6[18]].parasites}`);
}

function closeModal29() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay29.classList.remove('mmm');
  body.classList.remove('lock');

  // 29 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg29 = document.querySelector("#modal > div.modal-img > img");
  ModalImg29.src = ``

  let ModalName29 = document.querySelector('.modal-name');
  ModalName29.innerHTML = '';

  let ModalType29 = document.querySelector('.modal-type');
  ModalType29.innerHTML = '';

  let ModalBreed29 = document.querySelector('.modal-breed');
  ModalBreed29.innerHTML = '';

  let ModalDesc29 = document.querySelector('.modal-description');
  ModalDesc29.innerHTML = '';

  let ModalAge29 = document.querySelector('.modal-age');
  ModalAge29.innerHTML = '';

  let ModalInocul29 = document.querySelector('.modal-inoculations');
  ModalInocul29.innerHTML = '';

  let ModalDiseases29 = document.querySelector('.modal-diseases');
  ModalDiseases29.innerHTML = '';

  let ModalParas29 = document.querySelector('.modal-parasites');
  ModalParas29.innerHTML = '';
}



//11 11 11
const openModalButtons30 = document.querySelectorAll('.our-friends-pet')[30];
const closeModalButtons30 = document.querySelector('.close-button');
const overlay30 = document.getElementById('overlay');

openModalButtons30.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal30();
  }
});

closeModalButtons30.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal30();
  }
});

overlay30.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal30();
  }
});

function openModal30() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay30.classList.add('mmm');
  body.classList.add('lock');

  // 30 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg30 = document.querySelector("#modal > div.modal-img > img");
  ModalImg30.src = `${pets[result6[17]].img}`

  let ModalName30 = document.querySelector('.modal-name');
  ModalName30.insertAdjacentText('afterbegin', `${pets[result6[17]].name}`);

  let ModalType30 = document.querySelector('.modal-type');
  ModalType30.insertAdjacentText('afterbegin', `${pets[result6[17]].type}`);

  let ModalBreed30 = document.querySelector('.modal-breed');
  ModalBreed30.insertAdjacentText('afterbegin', `${pets[result6[17]].breed}`);

  let ModalDesc30 = document.querySelector('.modal-description');
  ModalDesc30.insertAdjacentText('afterbegin', `${pets[result6[17]].description}`);

  let ModalAge30 = document.querySelector('.modal-age');
  ModalAge30.insertAdjacentText('afterbegin', `${pets[result6[17]].age}`);

  let ModalInocul30 = document.querySelector('.modal-inoculations');
  ModalInocul30.insertAdjacentText('afterbegin', `${pets[result6[17]].inoculations}`);

  let ModalDiseases30 = document.querySelector('.modal-diseases');
  ModalDiseases30.insertAdjacentText('afterbegin', `${pets[result6[17]].diseases}`);

  let ModalParas30 = document.querySelector('.modal-parasites');
  ModalParas30.insertAdjacentText('afterbegin', `${pets[result6[17]].parasites}`);
}

function closeModal30() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay30.classList.remove('mmm');
  body.classList.remove('lock');

  // 30 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg30 = document.querySelector("#modal > div.modal-img > img");
  ModalImg30.src = ``

  let ModalName30 = document.querySelector('.modal-name');
  ModalName30.innerHTML = '';

  let ModalType30 = document.querySelector('.modal-type');
  ModalType30.innerHTML = '';

  let ModalBreed30 = document.querySelector('.modal-breed');
  ModalBreed30.innerHTML = '';

  let ModalDesc30 = document.querySelector('.modal-description');
  ModalDesc30.innerHTML = '';

  let ModalAge30 = document.querySelector('.modal-age');
  ModalAge30.innerHTML = '';

  let ModalInocul30 = document.querySelector('.modal-inoculations');
  ModalInocul30.innerHTML = '';

  let ModalDiseases30 = document.querySelector('.modal-diseases');
  ModalDiseases30.innerHTML = '';

  let ModalParas30 = document.querySelector('.modal-parasites');
  ModalParas30.innerHTML = '';
}



//11 11 11
const openModalButtons31 = document.querySelectorAll('.our-friends-pet')[31];
const closeModalButtons31 = document.querySelector('.close-button');
const overlay31 = document.getElementById('overlay');

openModalButtons31.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal31();
  }
});

closeModalButtons31.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal31();
  }
});

overlay31.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal31();
  }
});

function openModal31() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay31.classList.add('mmm');
  body.classList.add('lock');

  // 31 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg31 = document.querySelector("#modal > div.modal-img > img");
  ModalImg31.src = `${pets[result6[16]].img}`

  let ModalName31 = document.querySelector('.modal-name');
  ModalName31.insertAdjacentText('afterbegin', `${pets[result6[16]].name}`);

  let ModalType31 = document.querySelector('.modal-type');
  ModalType31.insertAdjacentText('afterbegin', `${pets[result6[16]].type}`);

  let ModalBreed31 = document.querySelector('.modal-breed');
  ModalBreed31.insertAdjacentText('afterbegin', `${pets[result6[16]].breed}`);

  let ModalDesc31 = document.querySelector('.modal-description');
  ModalDesc31.insertAdjacentText('afterbegin', `${pets[result6[16]].description}`);

  let ModalAge31 = document.querySelector('.modal-age');
  ModalAge31.insertAdjacentText('afterbegin', `${pets[result6[16]].age}`);

  let ModalInocul31 = document.querySelector('.modal-inoculations');
  ModalInocul31.insertAdjacentText('afterbegin', `${pets[result6[16]].inoculations}`);

  let ModalDiseases31 = document.querySelector('.modal-diseases');
  ModalDiseases31.insertAdjacentText('afterbegin', `${pets[result6[16]].diseases}`);

  let ModalParas31 = document.querySelector('.modal-parasites');
  ModalParas31.insertAdjacentText('afterbegin', `${pets[result6[16]].parasites}`);
}

function closeModal31() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay31.classList.remove('mmm');
  body.classList.remove('lock');

  // 31 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg31 = document.querySelector("#modal > div.modal-img > img");
  ModalImg31.src = ``

  let ModalName31 = document.querySelector('.modal-name');
  ModalName31.innerHTML = '';

  let ModalType31 = document.querySelector('.modal-type');
  ModalType31.innerHTML = '';

  let ModalBreed31 = document.querySelector('.modal-breed');
  ModalBreed31.innerHTML = '';

  let ModalDesc31 = document.querySelector('.modal-description');
  ModalDesc31.innerHTML = '';

  let ModalAge31 = document.querySelector('.modal-age');
  ModalAge31.innerHTML = '';

  let ModalInocul31 = document.querySelector('.modal-inoculations');
  ModalInocul31.innerHTML = '';

  let ModalDiseases31 = document.querySelector('.modal-diseases');
  ModalDiseases31.innerHTML = '';

  let ModalParas31 = document.querySelector('.modal-parasites');
  ModalParas31.innerHTML = '';
}



//11 11 11
const openModalButtons32 = document.querySelectorAll('.our-friends-pet')[32];
const closeModalButtons32 = document.querySelector('.close-button');
const overlay32 = document.getElementById('overlay');

openModalButtons32.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal32();
  }
});

closeModalButtons32.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal32();
  }
});

overlay32.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal32();
  }
});

function openModal32() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay32.classList.add('mmm');
  body.classList.add('lock');

  // 32 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg32 = document.querySelector("#modal > div.modal-img > img");
  ModalImg32.src = `${pets[result6[15]].img}`

  let ModalName32 = document.querySelector('.modal-name');
  ModalName32.insertAdjacentText('afterbegin', `${pets[result6[15]].name}`);

  let ModalType32 = document.querySelector('.modal-type');
  ModalType32.insertAdjacentText('afterbegin', `${pets[result6[15]].type}`);

  let ModalBreed32 = document.querySelector('.modal-breed');
  ModalBreed32.insertAdjacentText('afterbegin', `${pets[result6[15]].breed}`);

  let ModalDesc32 = document.querySelector('.modal-description');
  ModalDesc32.insertAdjacentText('afterbegin', `${pets[result6[15]].description}`);

  let ModalAge32 = document.querySelector('.modal-age');
  ModalAge32.insertAdjacentText('afterbegin', `${pets[result6[15]].age}`);

  let ModalInocul32 = document.querySelector('.modal-inoculations');
  ModalInocul32.insertAdjacentText('afterbegin', `${pets[result6[15]].inoculations}`);

  let ModalDiseases32 = document.querySelector('.modal-diseases');
  ModalDiseases32.insertAdjacentText('afterbegin', `${pets[result6[15]].diseases}`);

  let ModalParas32 = document.querySelector('.modal-parasites');
  ModalParas32.insertAdjacentText('afterbegin', `${pets[result6[15]].parasites}`);
}

function closeModal32() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay32.classList.remove('mmm');
  body.classList.remove('lock');

  // 32 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg32 = document.querySelector("#modal > div.modal-img > img");
  ModalImg32.src = ``

  let ModalName32 = document.querySelector('.modal-name');
  ModalName32.innerHTML = '';

  let ModalType32 = document.querySelector('.modal-type');
  ModalType32.innerHTML = '';

  let ModalBreed32 = document.querySelector('.modal-breed');
  ModalBreed32.innerHTML = '';

  let ModalDesc32 = document.querySelector('.modal-description');
  ModalDesc32.innerHTML = '';

  let ModalAge32 = document.querySelector('.modal-age');
  ModalAge32.innerHTML = '';

  let ModalInocul32 = document.querySelector('.modal-inoculations');
  ModalInocul32.innerHTML = '';

  let ModalDiseases32 = document.querySelector('.modal-diseases');
  ModalDiseases32.innerHTML = '';

  let ModalParas32 = document.querySelector('.modal-parasites');
  ModalParas32.innerHTML = '';
}



//11 11 11
const openModalButtons33 = document.querySelectorAll('.our-friends-pet')[33];
const closeModalButtons33 = document.querySelector('.close-button');
const overlay33 = document.getElementById('overlay');

openModalButtons33.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal33();
  }
});

closeModalButtons33.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal33();
  }
});

overlay33.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal33();
  }
});

function openModal33() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay33.classList.add('mmm');
  body.classList.add('lock');

  // 33 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg33 = document.querySelector("#modal > div.modal-img > img");
  ModalImg33.src = `${pets[result6[14]].img}`

  let ModalName33 = document.querySelector('.modal-name');
  ModalName33.insertAdjacentText('afterbegin', `${pets[result6[14]].name}`);

  let ModalType33 = document.querySelector('.modal-type');
  ModalType33.insertAdjacentText('afterbegin', `${pets[result6[14]].type}`);

  let ModalBreed33 = document.querySelector('.modal-breed');
  ModalBreed33.insertAdjacentText('afterbegin', `${pets[result6[14]].breed}`);

  let ModalDesc33 = document.querySelector('.modal-description');
  ModalDesc33.insertAdjacentText('afterbegin', `${pets[result6[14]].description}`);

  let ModalAge33 = document.querySelector('.modal-age');
  ModalAge33.insertAdjacentText('afterbegin', `${pets[result6[14]].age}`);

  let ModalInocul33 = document.querySelector('.modal-inoculations');
  ModalInocul33.insertAdjacentText('afterbegin', `${pets[result6[14]].inoculations}`);

  let ModalDiseases33 = document.querySelector('.modal-diseases');
  ModalDiseases33.insertAdjacentText('afterbegin', `${pets[result6[14]].diseases}`);

  let ModalParas33 = document.querySelector('.modal-parasites');
  ModalParas33.insertAdjacentText('afterbegin', `${pets[result6[14]].parasites}`);
}

function closeModal33() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay33.classList.remove('mmm');
  body.classList.remove('lock');

  // 33 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg33 = document.querySelector("#modal > div.modal-img > img");
  ModalImg33.src = ``

  let ModalName33 = document.querySelector('.modal-name');
  ModalName33.innerHTML = '';

  let ModalType33 = document.querySelector('.modal-type');
  ModalType33.innerHTML = '';

  let ModalBreed33 = document.querySelector('.modal-breed');
  ModalBreed33.innerHTML = '';

  let ModalDesc33 = document.querySelector('.modal-description');
  ModalDesc33.innerHTML = '';

  let ModalAge33 = document.querySelector('.modal-age');
  ModalAge33.innerHTML = '';

  let ModalInocul33 = document.querySelector('.modal-inoculations');
  ModalInocul33.innerHTML = '';

  let ModalDiseases33 = document.querySelector('.modal-diseases');
  ModalDiseases33.innerHTML = '';

  let ModalParas33 = document.querySelector('.modal-parasites');
  ModalParas33.innerHTML = '';
}



//11 11 11
const openModalButtons34 = document.querySelectorAll('.our-friends-pet')[34];
const closeModalButtons34 = document.querySelector('.close-button');
const overlay34 = document.getElementById('overlay');

openModalButtons34.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal34();
  }
});

closeModalButtons34.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal34();
  }
});

overlay34.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal34();
  }
});

function openModal34() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay34.classList.add('mmm');
  body.classList.add('lock');

  // 34 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg34 = document.querySelector("#modal > div.modal-img > img");
  ModalImg34.src = `${pets[result6[13]].img}`

  let ModalName34 = document.querySelector('.modal-name');
  ModalName34.insertAdjacentText('afterbegin', `${pets[result6[13]].name}`);

  let ModalType34 = document.querySelector('.modal-type');
  ModalType34.insertAdjacentText('afterbegin', `${pets[result6[13]].type}`);

  let ModalBreed34 = document.querySelector('.modal-breed');
  ModalBreed34.insertAdjacentText('afterbegin', `${pets[result6[13]].breed}`);

  let ModalDesc34 = document.querySelector('.modal-description');
  ModalDesc34.insertAdjacentText('afterbegin', `${pets[result6[13]].description}`);

  let ModalAge34 = document.querySelector('.modal-age');
  ModalAge34.insertAdjacentText('afterbegin', `${pets[result6[13]].age}`);

  let ModalInocul34 = document.querySelector('.modal-inoculations');
  ModalInocul34.insertAdjacentText('afterbegin', `${pets[result6[13]].inoculations}`);

  let ModalDiseases34 = document.querySelector('.modal-diseases');
  ModalDiseases34.insertAdjacentText('afterbegin', `${pets[result6[13]].diseases}`);

  let ModalParas34 = document.querySelector('.modal-parasites');
  ModalParas34.insertAdjacentText('afterbegin', `${pets[result6[13]].parasites}`);
}

function closeModal34() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay34.classList.remove('mmm');
  body.classList.remove('lock');

  // 34 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg34 = document.querySelector("#modal > div.modal-img > img");
  ModalImg34.src = ``

  let ModalName34 = document.querySelector('.modal-name');
  ModalName34.innerHTML = '';

  let ModalType34 = document.querySelector('.modal-type');
  ModalType34.innerHTML = '';

  let ModalBreed34 = document.querySelector('.modal-breed');
  ModalBreed34.innerHTML = '';

  let ModalDesc34 = document.querySelector('.modal-description');
  ModalDesc34.innerHTML = '';

  let ModalAge34 = document.querySelector('.modal-age');
  ModalAge34.innerHTML = '';

  let ModalInocul34 = document.querySelector('.modal-inoculations');
  ModalInocul34.innerHTML = '';

  let ModalDiseases34 = document.querySelector('.modal-diseases');
  ModalDiseases34.innerHTML = '';

  let ModalParas34 = document.querySelector('.modal-parasites');
  ModalParas34.innerHTML = '';
}



//11 11 11
const openModalButtons35 = document.querySelectorAll('.our-friends-pet')[35];
const closeModalButtons35 = document.querySelector('.close-button');
const overlay35 = document.getElementById('overlay');

openModalButtons35.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal35();
  }
});

closeModalButtons35.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal35();
  }
});

overlay35.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal35();
  }
});

function openModal35() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay35.classList.add('mmm');
  body.classList.add('lock');

  // 35 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg35 = document.querySelector("#modal > div.modal-img > img");
  ModalImg35.src = `${pets[result6[12]].img}`

  let ModalName35 = document.querySelector('.modal-name');
  ModalName35.insertAdjacentText('afterbegin', `${pets[result6[12]].name}`);

  let ModalType35 = document.querySelector('.modal-type');
  ModalType35.insertAdjacentText('afterbegin', `${pets[result6[12]].type}`);

  let ModalBreed35 = document.querySelector('.modal-breed');
  ModalBreed35.insertAdjacentText('afterbegin', `${pets[result6[12]].breed}`);

  let ModalDesc35 = document.querySelector('.modal-description');
  ModalDesc35.insertAdjacentText('afterbegin', `${pets[result6[12]].description}`);

  let ModalAge35 = document.querySelector('.modal-age');
  ModalAge35.insertAdjacentText('afterbegin', `${pets[result6[12]].age}`);

  let ModalInocul35 = document.querySelector('.modal-inoculations');
  ModalInocul35.insertAdjacentText('afterbegin', `${pets[result6[12]].inoculations}`);

  let ModalDiseases35 = document.querySelector('.modal-diseases');
  ModalDiseases35.insertAdjacentText('afterbegin', `${pets[result6[12]].diseases}`);

  let ModalParas35 = document.querySelector('.modal-parasites');
  ModalParas35.insertAdjacentText('afterbegin', `${pets[result6[12]].parasites}`);
}

function closeModal35() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay35.classList.remove('mmm');
  body.classList.remove('lock');

  // 35 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg35 = document.querySelector("#modal > div.modal-img > img");
  ModalImg35.src = ``

  let ModalName35 = document.querySelector('.modal-name');
  ModalName35.innerHTML = '';

  let ModalType35 = document.querySelector('.modal-type');
  ModalType35.innerHTML = '';

  let ModalBreed35 = document.querySelector('.modal-breed');
  ModalBreed35.innerHTML = '';

  let ModalDesc35 = document.querySelector('.modal-description');
  ModalDesc35.innerHTML = '';

  let ModalAge35 = document.querySelector('.modal-age');
  ModalAge35.innerHTML = '';

  let ModalInocul35 = document.querySelector('.modal-inoculations');
  ModalInocul35.innerHTML = '';

  let ModalDiseases35 = document.querySelector('.modal-diseases');
  ModalDiseases35.innerHTML = '';

  let ModalParas35 = document.querySelector('.modal-parasites');
  ModalParas35.innerHTML = '';
}



//11 11 11
const openModalButtons36 = document.querySelectorAll('.our-friends-pet')[36];
const closeModalButtons36 = document.querySelector('.close-button');
const overlay36 = document.getElementById('overlay');

openModalButtons36.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal36();
  }
});

closeModalButtons36.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal36();
  }
});

overlay36.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal36();
  }
});

function openModal36() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay36.classList.add('mmm');
  body.classList.add('lock');

  // 36 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg36 = document.querySelector("#modal > div.modal-img > img");
  ModalImg36.src = `${pets[result6[11]].img}`

  let ModalName36 = document.querySelector('.modal-name');
  ModalName36.insertAdjacentText('afterbegin', `${pets[result6[11]].name}`);

  let ModalType36 = document.querySelector('.modal-type');
  ModalType36.insertAdjacentText('afterbegin', `${pets[result6[11]].type}`);

  let ModalBreed36 = document.querySelector('.modal-breed');
  ModalBreed36.insertAdjacentText('afterbegin', `${pets[result6[11]].breed}`);

  let ModalDesc36 = document.querySelector('.modal-description');
  ModalDesc36.insertAdjacentText('afterbegin', `${pets[result6[11]].description}`);

  let ModalAge36 = document.querySelector('.modal-age');
  ModalAge36.insertAdjacentText('afterbegin', `${pets[result6[11]].age}`);

  let ModalInocul36 = document.querySelector('.modal-inoculations');
  ModalInocul36.insertAdjacentText('afterbegin', `${pets[result6[11]].inoculations}`);

  let ModalDiseases36 = document.querySelector('.modal-diseases');
  ModalDiseases36.insertAdjacentText('afterbegin', `${pets[result6[11]].diseases}`);

  let ModalParas36 = document.querySelector('.modal-parasites');
  ModalParas36.insertAdjacentText('afterbegin', `${pets[result6[11]].parasites}`);
}

function closeModal36() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay36.classList.remove('mmm');
  body.classList.remove('lock');

  // 36 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg36 = document.querySelector("#modal > div.modal-img > img");
  ModalImg36.src = ``

  let ModalName36 = document.querySelector('.modal-name');
  ModalName36.innerHTML = '';

  let ModalType36 = document.querySelector('.modal-type');
  ModalType36.innerHTML = '';

  let ModalBreed36 = document.querySelector('.modal-breed');
  ModalBreed36.innerHTML = '';

  let ModalDesc36 = document.querySelector('.modal-description');
  ModalDesc36.innerHTML = '';

  let ModalAge36 = document.querySelector('.modal-age');
  ModalAge36.innerHTML = '';

  let ModalInocul36 = document.querySelector('.modal-inoculations');
  ModalInocul36.innerHTML = '';

  let ModalDiseases36 = document.querySelector('.modal-diseases');
  ModalDiseases36.innerHTML = '';

  let ModalParas36 = document.querySelector('.modal-parasites');
  ModalParas36.innerHTML = '';
}



//11 11 11
const openModalButtons37 = document.querySelectorAll('.our-friends-pet')[37];
const closeModalButtons37 = document.querySelector('.close-button');
const overlay37 = document.getElementById('overlay');

openModalButtons37.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal37();
  }
});

closeModalButtons37.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal37();
  }
});

overlay37.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal37();
  }
});

function openModal37() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay37.classList.add('mmm');
  body.classList.add('lock');

  // 37 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg37 = document.querySelector("#modal > div.modal-img > img");
  ModalImg37.src = `${pets[result6[10]].img}`

  let ModalName37 = document.querySelector('.modal-name');
  ModalName37.insertAdjacentText('afterbegin', `${pets[result6[10]].name}`);

  let ModalType37 = document.querySelector('.modal-type');
  ModalType37.insertAdjacentText('afterbegin', `${pets[result6[10]].type}`);

  let ModalBreed37 = document.querySelector('.modal-breed');
  ModalBreed37.insertAdjacentText('afterbegin', `${pets[result6[10]].breed}`);

  let ModalDesc37 = document.querySelector('.modal-description');
  ModalDesc37.insertAdjacentText('afterbegin', `${pets[result6[10]].description}`);

  let ModalAge37 = document.querySelector('.modal-age');
  ModalAge37.insertAdjacentText('afterbegin', `${pets[result6[10]].age}`);

  let ModalInocul37 = document.querySelector('.modal-inoculations');
  ModalInocul37.insertAdjacentText('afterbegin', `${pets[result6[10]].inoculations}`);

  let ModalDiseases37 = document.querySelector('.modal-diseases');
  ModalDiseases37.insertAdjacentText('afterbegin', `${pets[result6[10]].diseases}`);

  let ModalParas37 = document.querySelector('.modal-parasites');
  ModalParas37.insertAdjacentText('afterbegin', `${pets[result6[10]].parasites}`);
}

function closeModal37() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay37.classList.remove('mmm');
  body.classList.remove('lock');

  // 37 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg37 = document.querySelector("#modal > div.modal-img > img");
  ModalImg37.src = ``

  let ModalName37 = document.querySelector('.modal-name');
  ModalName37.innerHTML = '';

  let ModalType37 = document.querySelector('.modal-type');
  ModalType37.innerHTML = '';

  let ModalBreed37 = document.querySelector('.modal-breed');
  ModalBreed37.innerHTML = '';

  let ModalDesc37 = document.querySelector('.modal-description');
  ModalDesc37.innerHTML = '';

  let ModalAge37 = document.querySelector('.modal-age');
  ModalAge37.innerHTML = '';

  let ModalInocul37 = document.querySelector('.modal-inoculations');
  ModalInocul37.innerHTML = '';

  let ModalDiseases37 = document.querySelector('.modal-diseases');
  ModalDiseases37.innerHTML = '';

  let ModalParas37 = document.querySelector('.modal-parasites');
  ModalParas37.innerHTML = '';
}



//11 11 11
const openModalButtons38 = document.querySelectorAll('.our-friends-pet')[38];
const closeModalButtons38 = document.querySelector('.close-button');
const overlay38 = document.getElementById('overlay');

openModalButtons38.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal38();
  }
});

closeModalButtons38.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal38();
  }
});

overlay38.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal38();
  }
});

function openModal38() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay38.classList.add('mmm');
  body.classList.add('lock');

  // 38 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg38 = document.querySelector("#modal > div.modal-img > img");
  ModalImg38.src = `${pets[result6[9]].img}`

  let ModalName38 = document.querySelector('.modal-name');
  ModalName38.insertAdjacentText('afterbegin', `${pets[result6[9]].name}`);

  let ModalType38 = document.querySelector('.modal-type');
  ModalType38.insertAdjacentText('afterbegin', `${pets[result6[9]].type}`);

  let ModalBreed38 = document.querySelector('.modal-breed');
  ModalBreed38.insertAdjacentText('afterbegin', `${pets[result6[9]].breed}`);

  let ModalDesc38 = document.querySelector('.modal-description');
  ModalDesc38.insertAdjacentText('afterbegin', `${pets[result6[9]].description}`);

  let ModalAge38 = document.querySelector('.modal-age');
  ModalAge38.insertAdjacentText('afterbegin', `${pets[result6[9]].age}`);

  let ModalInocul38 = document.querySelector('.modal-inoculations');
  ModalInocul38.insertAdjacentText('afterbegin', `${pets[result6[9]].inoculations}`);

  let ModalDiseases38 = document.querySelector('.modal-diseases');
  ModalDiseases38.insertAdjacentText('afterbegin', `${pets[result6[9]].diseases}`);

  let ModalParas38 = document.querySelector('.modal-parasites');
  ModalParas38.insertAdjacentText('afterbegin', `${pets[result6[9]].parasites}`);
}

function closeModal38() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay38.classList.remove('mmm');
  body.classList.remove('lock');

  // 38 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg38 = document.querySelector("#modal > div.modal-img > img");
  ModalImg38.src = ``

  let ModalName38 = document.querySelector('.modal-name');
  ModalName38.innerHTML = '';

  let ModalType38 = document.querySelector('.modal-type');
  ModalType38.innerHTML = '';

  let ModalBreed38 = document.querySelector('.modal-breed');
  ModalBreed38.innerHTML = '';

  let ModalDesc38 = document.querySelector('.modal-description');
  ModalDesc38.innerHTML = '';

  let ModalAge38 = document.querySelector('.modal-age');
  ModalAge38.innerHTML = '';

  let ModalInocul38 = document.querySelector('.modal-inoculations');
  ModalInocul38.innerHTML = '';

  let ModalDiseases38 = document.querySelector('.modal-diseases');
  ModalDiseases38.innerHTML = '';

  let ModalParas38 = document.querySelector('.modal-parasites');
  ModalParas38.innerHTML = '';
}



//11 11 11
const openModalButtons39 = document.querySelectorAll('.our-friends-pet')[39];
const closeModalButtons39 = document.querySelector('.close-button');
const overlay39 = document.getElementById('overlay');

openModalButtons39.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal39();
  }
});

closeModalButtons39.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal39();
  }
});

overlay39.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal39();
  }
});

function openModal39() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay39.classList.add('mmm');
  body.classList.add('lock');

  // 39 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg39 = document.querySelector("#modal > div.modal-img > img");
  ModalImg39.src = `${pets[result6[8]].img}`

  let ModalName39 = document.querySelector('.modal-name');
  ModalName39.insertAdjacentText('afterbegin', `${pets[result6[8]].name}`);

  let ModalType39 = document.querySelector('.modal-type');
  ModalType39.insertAdjacentText('afterbegin', `${pets[result6[8]].type}`);

  let ModalBreed39 = document.querySelector('.modal-breed');
  ModalBreed39.insertAdjacentText('afterbegin', `${pets[result6[8]].breed}`);

  let ModalDesc39 = document.querySelector('.modal-description');
  ModalDesc39.insertAdjacentText('afterbegin', `${pets[result6[8]].description}`);

  let ModalAge39 = document.querySelector('.modal-age');
  ModalAge39.insertAdjacentText('afterbegin', `${pets[result6[8]].age}`);

  let ModalInocul39 = document.querySelector('.modal-inoculations');
  ModalInocul39.insertAdjacentText('afterbegin', `${pets[result6[8]].inoculations}`);

  let ModalDiseases39 = document.querySelector('.modal-diseases');
  ModalDiseases39.insertAdjacentText('afterbegin', `${pets[result6[8]].diseases}`);

  let ModalParas39 = document.querySelector('.modal-parasites');
  ModalParas39.insertAdjacentText('afterbegin', `${pets[result6[8]].parasites}`);
}

function closeModal39() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay39.classList.remove('mmm');
  body.classList.remove('lock');

  // 39 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg39 = document.querySelector("#modal > div.modal-img > img");
  ModalImg39.src = ``

  let ModalName39 = document.querySelector('.modal-name');
  ModalName39.innerHTML = '';

  let ModalType39 = document.querySelector('.modal-type');
  ModalType39.innerHTML = '';

  let ModalBreed39 = document.querySelector('.modal-breed');
  ModalBreed39.innerHTML = '';

  let ModalDesc39 = document.querySelector('.modal-description');
  ModalDesc39.innerHTML = '';

  let ModalAge39 = document.querySelector('.modal-age');
  ModalAge39.innerHTML = '';

  let ModalInocul39 = document.querySelector('.modal-inoculations');
  ModalInocul39.innerHTML = '';

  let ModalDiseases39 = document.querySelector('.modal-diseases');
  ModalDiseases39.innerHTML = '';

  let ModalParas39 = document.querySelector('.modal-parasites');
  ModalParas39.innerHTML = '';
}



//11 11 11
const openModalButtons40 = document.querySelectorAll('.our-friends-pet')[40];
const closeModalButtons40 = document.querySelector('.close-button');
const overlay40 = document.getElementById('overlay');

openModalButtons40.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal40();
  }
});

closeModalButtons40.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal40();
  }
});

overlay40.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal40();
  }
});

function openModal40() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay40.classList.add('mmm');
  body.classList.add('lock');

  // 40 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg40 = document.querySelector("#modal > div.modal-img > img");
  ModalImg40.src = `${pets[result6[7]].img}`

  let ModalName40 = document.querySelector('.modal-name');
  ModalName40.insertAdjacentText('afterbegin', `${pets[result6[7]].name}`);

  let ModalType40 = document.querySelector('.modal-type');
  ModalType40.insertAdjacentText('afterbegin', `${pets[result6[7]].type}`);

  let ModalBreed40 = document.querySelector('.modal-breed');
  ModalBreed40.insertAdjacentText('afterbegin', `${pets[result6[7]].breed}`);

  let ModalDesc40 = document.querySelector('.modal-description');
  ModalDesc40.insertAdjacentText('afterbegin', `${pets[result6[7]].description}`);

  let ModalAge40 = document.querySelector('.modal-age');
  ModalAge40.insertAdjacentText('afterbegin', `${pets[result6[7]].age}`);

  let ModalInocul40 = document.querySelector('.modal-inoculations');
  ModalInocul40.insertAdjacentText('afterbegin', `${pets[result6[7]].inoculations}`);

  let ModalDiseases40 = document.querySelector('.modal-diseases');
  ModalDiseases40.insertAdjacentText('afterbegin', `${pets[result6[7]].diseases}`);

  let ModalParas40 = document.querySelector('.modal-parasites');
  ModalParas40.insertAdjacentText('afterbegin', `${pets[result6[7]].parasites}`);
}

function closeModal40() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay40.classList.remove('mmm');
  body.classList.remove('lock');

  // 40 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg40 = document.querySelector("#modal > div.modal-img > img");
  ModalImg40.src = ``

  let ModalName40 = document.querySelector('.modal-name');
  ModalName40.innerHTML = '';

  let ModalType40 = document.querySelector('.modal-type');
  ModalType40.innerHTML = '';

  let ModalBreed40 = document.querySelector('.modal-breed');
  ModalBreed40.innerHTML = '';

  let ModalDesc40 = document.querySelector('.modal-description');
  ModalDesc40.innerHTML = '';

  let ModalAge40 = document.querySelector('.modal-age');
  ModalAge40.innerHTML = '';

  let ModalInocul40 = document.querySelector('.modal-inoculations');
  ModalInocul40.innerHTML = '';

  let ModalDiseases40 = document.querySelector('.modal-diseases');
  ModalDiseases40.innerHTML = '';

  let ModalParas40 = document.querySelector('.modal-parasites');
  ModalParas40.innerHTML = '';
}



//11 11 11
const openModalButtons41 = document.querySelectorAll('.our-friends-pet')[41];
const closeModalButtons41 = document.querySelector('.close-button');
const overlay41 = document.getElementById('overlay');

openModalButtons41.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal41();
  }
});

closeModalButtons41.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal41();
  }
});

overlay41.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal41();
  }
});

function openModal41() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay41.classList.add('mmm');
  body.classList.add('lock');

  // 41 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg41 = document.querySelector("#modal > div.modal-img > img");
  ModalImg41.src = `${pets[result6[6]].img}`

  let ModalName41 = document.querySelector('.modal-name');
  ModalName41.insertAdjacentText('afterbegin', `${pets[result6[6]].name}`);

  let ModalType41 = document.querySelector('.modal-type');
  ModalType41.insertAdjacentText('afterbegin', `${pets[result6[6]].type}`);

  let ModalBreed41 = document.querySelector('.modal-breed');
  ModalBreed41.insertAdjacentText('afterbegin', `${pets[result6[6]].breed}`);

  let ModalDesc41 = document.querySelector('.modal-description');
  ModalDesc41.insertAdjacentText('afterbegin', `${pets[result6[6]].description}`);

  let ModalAge41 = document.querySelector('.modal-age');
  ModalAge41.insertAdjacentText('afterbegin', `${pets[result6[6]].age}`);

  let ModalInocul41 = document.querySelector('.modal-inoculations');
  ModalInocul41.insertAdjacentText('afterbegin', `${pets[result6[6]].inoculations}`);

  let ModalDiseases41 = document.querySelector('.modal-diseases');
  ModalDiseases41.insertAdjacentText('afterbegin', `${pets[result6[6]].diseases}`);

  let ModalParas41 = document.querySelector('.modal-parasites');
  ModalParas41.insertAdjacentText('afterbegin', `${pets[result6[6]].parasites}`);
}

function closeModal41() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay41.classList.remove('mmm');
  body.classList.remove('lock');

  // 41 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg41 = document.querySelector("#modal > div.modal-img > img");
  ModalImg41.src = ``

  let ModalName41 = document.querySelector('.modal-name');
  ModalName41.innerHTML = '';

  let ModalType41 = document.querySelector('.modal-type');
  ModalType41.innerHTML = '';

  let ModalBreed41 = document.querySelector('.modal-breed');
  ModalBreed41.innerHTML = '';

  let ModalDesc41 = document.querySelector('.modal-description');
  ModalDesc41.innerHTML = '';

  let ModalAge41 = document.querySelector('.modal-age');
  ModalAge41.innerHTML = '';

  let ModalInocul41 = document.querySelector('.modal-inoculations');
  ModalInocul41.innerHTML = '';

  let ModalDiseases41 = document.querySelector('.modal-diseases');
  ModalDiseases41.innerHTML = '';

  let ModalParas41 = document.querySelector('.modal-parasites');
  ModalParas41.innerHTML = '';
}



//11 11 11
const openModalButtons42 = document.querySelectorAll('.our-friends-pet')[42];
const closeModalButtons42 = document.querySelector('.close-button');
const overlay42 = document.getElementById('overlay');

openModalButtons42.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal42();
  }
});

closeModalButtons42.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal42();
  }
});

overlay42.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal42();
  }
});

function openModal42() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay42.classList.add('mmm');
  body.classList.add('lock');

  // 42 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg42 = document.querySelector("#modal > div.modal-img > img");
  ModalImg42.src = `${pets[result6[5]].img}`

  let ModalName42 = document.querySelector('.modal-name');
  ModalName42.insertAdjacentText('afterbegin', `${pets[result6[5]].name}`);

  let ModalType42 = document.querySelector('.modal-type');
  ModalType42.insertAdjacentText('afterbegin', `${pets[result6[5]].type}`);

  let ModalBreed42 = document.querySelector('.modal-breed');
  ModalBreed42.insertAdjacentText('afterbegin', `${pets[result6[5]].breed}`);

  let ModalDesc42 = document.querySelector('.modal-description');
  ModalDesc42.insertAdjacentText('afterbegin', `${pets[result6[5]].description}`);

  let ModalAge42 = document.querySelector('.modal-age');
  ModalAge42.insertAdjacentText('afterbegin', `${pets[result6[5]].age}`);

  let ModalInocul42 = document.querySelector('.modal-inoculations');
  ModalInocul42.insertAdjacentText('afterbegin', `${pets[result6[5]].inoculations}`);

  let ModalDiseases42 = document.querySelector('.modal-diseases');
  ModalDiseases42.insertAdjacentText('afterbegin', `${pets[result6[5]].diseases}`);

  let ModalParas42 = document.querySelector('.modal-parasites');
  ModalParas42.insertAdjacentText('afterbegin', `${pets[result6[5]].parasites}`);
}

function closeModal42() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay42.classList.remove('mmm');
  body.classList.remove('lock');

  // 42 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg42 = document.querySelector("#modal > div.modal-img > img");
  ModalImg42.src = ``

  let ModalName42 = document.querySelector('.modal-name');
  ModalName42.innerHTML = '';

  let ModalType42 = document.querySelector('.modal-type');
  ModalType42.innerHTML = '';

  let ModalBreed42 = document.querySelector('.modal-breed');
  ModalBreed42.innerHTML = '';

  let ModalDesc42 = document.querySelector('.modal-description');
  ModalDesc42.innerHTML = '';

  let ModalAge42 = document.querySelector('.modal-age');
  ModalAge42.innerHTML = '';

  let ModalInocul42 = document.querySelector('.modal-inoculations');
  ModalInocul42.innerHTML = '';

  let ModalDiseases42 = document.querySelector('.modal-diseases');
  ModalDiseases42.innerHTML = '';

  let ModalParas42 = document.querySelector('.modal-parasites');
  ModalParas42.innerHTML = '';
}



//11 11 11
const openModalButtons43 = document.querySelectorAll('.our-friends-pet')[43];
const closeModalButtons43 = document.querySelector('.close-button');
const overlay43 = document.getElementById('overlay');

openModalButtons43.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal43();
  }
});

closeModalButtons43.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal43();
  }
});

overlay43.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal43();
  }
});

function openModal43() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay43.classList.add('mmm');
  body.classList.add('lock');

  // 43 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg43 = document.querySelector("#modal > div.modal-img > img");
  ModalImg43.src = `${pets[result6[4]].img}`

  let ModalName43 = document.querySelector('.modal-name');
  ModalName43.insertAdjacentText('afterbegin', `${pets[result6[4]].name}`);

  let ModalType43 = document.querySelector('.modal-type');
  ModalType43.insertAdjacentText('afterbegin', `${pets[result6[4]].type}`);

  let ModalBreed43 = document.querySelector('.modal-breed');
  ModalBreed43.insertAdjacentText('afterbegin', `${pets[result6[4]].breed}`);

  let ModalDesc43 = document.querySelector('.modal-description');
  ModalDesc43.insertAdjacentText('afterbegin', `${pets[result6[4]].description}`);

  let ModalAge43 = document.querySelector('.modal-age');
  ModalAge43.insertAdjacentText('afterbegin', `${pets[result6[4]].age}`);

  let ModalInocul43 = document.querySelector('.modal-inoculations');
  ModalInocul43.insertAdjacentText('afterbegin', `${pets[result6[4]].inoculations}`);

  let ModalDiseases43 = document.querySelector('.modal-diseases');
  ModalDiseases43.insertAdjacentText('afterbegin', `${pets[result6[4]].diseases}`);

  let ModalParas43 = document.querySelector('.modal-parasites');
  ModalParas43.insertAdjacentText('afterbegin', `${pets[result6[4]].parasites}`);
}

function closeModal43() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay43.classList.remove('mmm');
  body.classList.remove('lock');

  // 43 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg43 = document.querySelector("#modal > div.modal-img > img");
  ModalImg43.src = ``

  let ModalName43 = document.querySelector('.modal-name');
  ModalName43.innerHTML = '';

  let ModalType43 = document.querySelector('.modal-type');
  ModalType43.innerHTML = '';

  let ModalBreed43 = document.querySelector('.modal-breed');
  ModalBreed43.innerHTML = '';

  let ModalDesc43 = document.querySelector('.modal-description');
  ModalDesc43.innerHTML = '';

  let ModalAge43 = document.querySelector('.modal-age');
  ModalAge43.innerHTML = '';

  let ModalInocul43 = document.querySelector('.modal-inoculations');
  ModalInocul43.innerHTML = '';

  let ModalDiseases43 = document.querySelector('.modal-diseases');
  ModalDiseases43.innerHTML = '';

  let ModalParas43 = document.querySelector('.modal-parasites');
  ModalParas43.innerHTML = '';
}



//11 11 11
const openModalButtons44 = document.querySelectorAll('.our-friends-pet')[44];
const closeModalButtons44 = document.querySelector('.close-button');
const overlay44 = document.getElementById('overlay');

openModalButtons44.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal44();
  }
});

closeModalButtons44.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal44();
  }
});

overlay44.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal44();
  }
});

function openModal44() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay44.classList.add('mmm');
  body.classList.add('lock');

  // 44 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg44 = document.querySelector("#modal > div.modal-img > img");
  ModalImg44.src = `${pets[result6[3]].img}`

  let ModalName44 = document.querySelector('.modal-name');
  ModalName44.insertAdjacentText('afterbegin', `${pets[result6[3]].name}`);

  let ModalType44 = document.querySelector('.modal-type');
  ModalType44.insertAdjacentText('afterbegin', `${pets[result6[3]].type}`);

  let ModalBreed44 = document.querySelector('.modal-breed');
  ModalBreed44.insertAdjacentText('afterbegin', `${pets[result6[3]].breed}`);

  let ModalDesc44 = document.querySelector('.modal-description');
  ModalDesc44.insertAdjacentText('afterbegin', `${pets[result6[3]].description}`);

  let ModalAge44 = document.querySelector('.modal-age');
  ModalAge44.insertAdjacentText('afterbegin', `${pets[result6[3]].age}`);

  let ModalInocul44 = document.querySelector('.modal-inoculations');
  ModalInocul44.insertAdjacentText('afterbegin', `${pets[result6[3]].inoculations}`);

  let ModalDiseases44 = document.querySelector('.modal-diseases');
  ModalDiseases44.insertAdjacentText('afterbegin', `${pets[result6[3]].diseases}`);

  let ModalParas44 = document.querySelector('.modal-parasites');
  ModalParas44.insertAdjacentText('afterbegin', `${pets[result6[3]].parasites}`);
}

function closeModal44() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay44.classList.remove('mmm');
  body.classList.remove('lock');

  // 44 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg44 = document.querySelector("#modal > div.modal-img > img");
  ModalImg44.src = ``

  let ModalName44 = document.querySelector('.modal-name');
  ModalName44.innerHTML = '';

  let ModalType44 = document.querySelector('.modal-type');
  ModalType44.innerHTML = '';

  let ModalBreed44 = document.querySelector('.modal-breed');
  ModalBreed44.innerHTML = '';

  let ModalDesc44 = document.querySelector('.modal-description');
  ModalDesc44.innerHTML = '';

  let ModalAge44 = document.querySelector('.modal-age');
  ModalAge44.innerHTML = '';

  let ModalInocul44 = document.querySelector('.modal-inoculations');
  ModalInocul44.innerHTML = '';

  let ModalDiseases44 = document.querySelector('.modal-diseases');
  ModalDiseases44.innerHTML = '';

  let ModalParas44 = document.querySelector('.modal-parasites');
  ModalParas44.innerHTML = '';
}



//11 11 11
const openModalButtons45 = document.querySelectorAll('.our-friends-pet')[45];
const closeModalButtons45 = document.querySelector('.close-button');
const overlay45 = document.getElementById('overlay');

openModalButtons45.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal45();
  }
});

closeModalButtons45.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal45();
  }
});

overlay45.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal45();
  }
});

function openModal45() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay45.classList.add('mmm');
  body.classList.add('lock');

  // 45 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg45 = document.querySelector("#modal > div.modal-img > img");
  ModalImg45.src = `${pets[result6[2]].img}`

  let ModalName45 = document.querySelector('.modal-name');
  ModalName45.insertAdjacentText('afterbegin', `${pets[result6[2]].name}`);

  let ModalType45 = document.querySelector('.modal-type');
  ModalType45.insertAdjacentText('afterbegin', `${pets[result6[2]].type}`);

  let ModalBreed45 = document.querySelector('.modal-breed');
  ModalBreed45.insertAdjacentText('afterbegin', `${pets[result6[2]].breed}`);

  let ModalDesc45 = document.querySelector('.modal-description');
  ModalDesc45.insertAdjacentText('afterbegin', `${pets[result6[2]].description}`);

  let ModalAge45 = document.querySelector('.modal-age');
  ModalAge45.insertAdjacentText('afterbegin', `${pets[result6[2]].age}`);

  let ModalInocul45 = document.querySelector('.modal-inoculations');
  ModalInocul45.insertAdjacentText('afterbegin', `${pets[result6[2]].inoculations}`);

  let ModalDiseases45 = document.querySelector('.modal-diseases');
  ModalDiseases45.insertAdjacentText('afterbegin', `${pets[result6[2]].diseases}`);

  let ModalParas45 = document.querySelector('.modal-parasites');
  ModalParas45.insertAdjacentText('afterbegin', `${pets[result6[2]].parasites}`);
}

function closeModal45() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay45.classList.remove('mmm');
  body.classList.remove('lock');

  // 45 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg45 = document.querySelector("#modal > div.modal-img > img");
  ModalImg45.src = ``

  let ModalName45 = document.querySelector('.modal-name');
  ModalName45.innerHTML = '';

  let ModalType45 = document.querySelector('.modal-type');
  ModalType45.innerHTML = '';

  let ModalBreed45 = document.querySelector('.modal-breed');
  ModalBreed45.innerHTML = '';

  let ModalDesc45 = document.querySelector('.modal-description');
  ModalDesc45.innerHTML = '';

  let ModalAge45 = document.querySelector('.modal-age');
  ModalAge45.innerHTML = '';

  let ModalInocul45 = document.querySelector('.modal-inoculations');
  ModalInocul45.innerHTML = '';

  let ModalDiseases45 = document.querySelector('.modal-diseases');
  ModalDiseases45.innerHTML = '';

  let ModalParas45 = document.querySelector('.modal-parasites');
  ModalParas45.innerHTML = '';
}



//11 11 11
const openModalButtons46 = document.querySelectorAll('.our-friends-pet')[46];
const closeModalButtons46 = document.querySelector('.close-button');
const overlay46 = document.getElementById('overlay');

openModalButtons46.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal46();
  }
});

closeModalButtons46.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal46();
  }
});

overlay46.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal46();
  }
});

function openModal46() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay46.classList.add('mmm');
  body.classList.add('lock');

  // 46 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg46 = document.querySelector("#modal > div.modal-img > img");
  ModalImg46.src = `${pets[result6[1]].img}`

  let ModalName46 = document.querySelector('.modal-name');
  ModalName46.insertAdjacentText('afterbegin', `${pets[result6[1]].name}`);

  let ModalType46 = document.querySelector('.modal-type');
  ModalType46.insertAdjacentText('afterbegin', `${pets[result6[1]].type}`);

  let ModalBreed46 = document.querySelector('.modal-breed');
  ModalBreed46.insertAdjacentText('afterbegin', `${pets[result6[1]].breed}`);

  let ModalDesc46 = document.querySelector('.modal-description');
  ModalDesc46.insertAdjacentText('afterbegin', `${pets[result6[1]].description}`);

  let ModalAge46 = document.querySelector('.modal-age');
  ModalAge46.insertAdjacentText('afterbegin', `${pets[result6[1]].age}`);

  let ModalInocul46 = document.querySelector('.modal-inoculations');
  ModalInocul46.insertAdjacentText('afterbegin', `${pets[result6[1]].inoculations}`);

  let ModalDiseases46 = document.querySelector('.modal-diseases');
  ModalDiseases46.insertAdjacentText('afterbegin', `${pets[result6[1]].diseases}`);

  let ModalParas46 = document.querySelector('.modal-parasites');
  ModalParas46.insertAdjacentText('afterbegin', `${pets[result6[1]].parasites}`);
}

function closeModal46() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay46.classList.remove('mmm');
  body.classList.remove('lock');

  // 46 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg46 = document.querySelector("#modal > div.modal-img > img");
  ModalImg46.src = ``

  let ModalName46 = document.querySelector('.modal-name');
  ModalName46.innerHTML = '';

  let ModalType46 = document.querySelector('.modal-type');
  ModalType46.innerHTML = '';

  let ModalBreed46 = document.querySelector('.modal-breed');
  ModalBreed46.innerHTML = '';

  let ModalDesc46 = document.querySelector('.modal-description');
  ModalDesc46.innerHTML = '';

  let ModalAge46 = document.querySelector('.modal-age');
  ModalAge46.innerHTML = '';

  let ModalInocul46 = document.querySelector('.modal-inoculations');
  ModalInocul46.innerHTML = '';

  let ModalDiseases46 = document.querySelector('.modal-diseases');
  ModalDiseases46.innerHTML = '';

  let ModalParas46 = document.querySelector('.modal-parasites');
  ModalParas46.innerHTML = '';
}



//11 11 11
const openModalButtons47 = document.querySelectorAll('.our-friends-pet')[47];
const closeModalButtons47 = document.querySelector('.close-button');
const overlay47 = document.getElementById('overlay');

openModalButtons47.addEventListener('click', () => {
  if (!modal.classList.contains('mmm')) {
    openModal47();
  }
});

closeModalButtons47.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal47();
  }
});

overlay47.addEventListener('click', () => {
  if (modal.classList.contains('mmm')) {
    closeModal47();
  }
});

function openModal47() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.add('mmm');
  overlay47.classList.add('mmm');
  body.classList.add('lock');

  // 47 команды делают неактивные кнопки слайдера
  arrowPrev.setAttribute("disabled", "disabled");
  arrowNext.setAttribute("disabled", "disabled");
  arrowPrev.style.pointerEvents = "none";
  arrowNext.style.pointerEvents = "none";
  
  let ModalImg47 = document.querySelector("#modal > div.modal-img > img");
  ModalImg47.src = `${pets[result6[0]].img}`

  let ModalName47 = document.querySelector('.modal-name');
  ModalName47.insertAdjacentText('afterbegin', `${pets[result6[0]].name}`);

  let ModalType47 = document.querySelector('.modal-type');
  ModalType47.insertAdjacentText('afterbegin', `${pets[result6[0]].type}`);

  let ModalBreed47 = document.querySelector('.modal-breed');
  ModalBreed47.insertAdjacentText('afterbegin', `${pets[result6[0]].breed}`);

  let ModalDesc47 = document.querySelector('.modal-description');
  ModalDesc47.insertAdjacentText('afterbegin', `${pets[result6[0]].description}`);

  let ModalAge47 = document.querySelector('.modal-age');
  ModalAge47.insertAdjacentText('afterbegin', `${pets[result6[0]].age}`);

  let ModalInocul47 = document.querySelector('.modal-inoculations');
  ModalInocul47.insertAdjacentText('afterbegin', `${pets[result6[0]].inoculations}`);

  let ModalDiseases47 = document.querySelector('.modal-diseases');
  ModalDiseases47.insertAdjacentText('afterbegin', `${pets[result6[0]].diseases}`);

  let ModalParas47 = document.querySelector('.modal-parasites');
  ModalParas47.insertAdjacentText('afterbegin', `${pets[result6[0]].parasites}`);
}

function closeModal47() {
  const arrowPrev = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-prev.slick-arrow");
  const arrowNext = document.querySelector("body > div.background-main > main > section > div.our-friends-main.swiper-container > div > button.slick-next.slick-arrow");
  modal.classList.remove('mmm');
  overlay47.classList.remove('mmm');
  body.classList.remove('lock');

  // 47 команды делают активные кнопки слайдера
  arrowPrev.removeAttribute("disabled");
  arrowNext.removeAttribute("disabled");
  arrowPrev.style.pointerEvents = "auto";
  arrowNext.style.pointerEvents = "auto";

  let ModalImg47 = document.querySelector("#modal > div.modal-img > img");
  ModalImg47.src = ``

  let ModalName47 = document.querySelector('.modal-name');
  ModalName47.innerHTML = '';

  let ModalType47 = document.querySelector('.modal-type');
  ModalType47.innerHTML = '';

  let ModalBreed47 = document.querySelector('.modal-breed');
  ModalBreed47.innerHTML = '';

  let ModalDesc47 = document.querySelector('.modal-description');
  ModalDesc47.innerHTML = '';

  let ModalAge47 = document.querySelector('.modal-age');
  ModalAge47.innerHTML = '';

  let ModalInocul47 = document.querySelector('.modal-inoculations');
  ModalInocul47.innerHTML = '';

  let ModalDiseases47 = document.querySelector('.modal-diseases');
  ModalDiseases47.innerHTML = '';

  let ModalParas47 = document.querySelector('.modal-parasites');
  ModalParas47.innerHTML = '';
}



