setTimeout(function(){
function monitoringWidthModal(){
  let widthModal = document.documentElement.clientWidth;
  if(widthModal > 1160) {
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
    const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
    modal.classList.add('mmm');
    overlay0.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
    ModalImg0.src = `${pets[result[7]].img}`

    let ModalName0 = document.querySelector('.modal-name');
    ModalName0.insertAdjacentText('afterbegin', `${pets[result[7]].name}`);

    let ModalType0 = document.querySelector('.modal-type');
    ModalType0.insertAdjacentText('afterbegin', `${pets[result[7]].type}`);

    let ModalBreed0 = document.querySelector('.modal-breed');
    ModalBreed0.insertAdjacentText('afterbegin', `${pets[result[7]].breed}`);

    let ModalDesc0 = document.querySelector('.modal-description');
    ModalDesc0.insertAdjacentText('afterbegin', `${pets[result[7]].description}`);

    let ModalAge0 = document.querySelector('.modal-age');
    ModalAge0.insertAdjacentText('afterbegin', `${pets[result[7]].age}`);

    let ModalInocul0 = document.querySelector('.modal-inoculations');
    ModalInocul0.insertAdjacentText('afterbegin', `${pets[result[7]].inoculations}`);

    let ModalDiseases0 = document.querySelector('.modal-diseases');
    ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result[7]].diseases}`);

    let ModalParas0 = document.querySelector('.modal-parasites');
    ModalParas0.insertAdjacentText('afterbegin', `${pets[result[7]].parasites}`);
  }

  function closeModal0() {
    modal.classList.remove('mmm');
    overlay0.classList.remove('mmm');
    body.classList.remove('lock');


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
    modal.classList.add('mmm');
    overlay1.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
    ModalImg1.src = `${pets[result[6]].img}`

    let ModalName1 = document.querySelector('.modal-name');
    ModalName1.insertAdjacentText('afterbegin', `${pets[result[6]].name}`);

    let ModalType1 = document.querySelector('.modal-type');
    ModalType1.insertAdjacentText('afterbegin', `${pets[result[6]].type}`);

    let ModalBreed1 = document.querySelector('.modal-breed');
    ModalBreed1.insertAdjacentText('afterbegin', `${pets[result[6]].breed}`);

    let ModalDesc1 = document.querySelector('.modal-description');
    ModalDesc1.insertAdjacentText('afterbegin', `${pets[result[6]].description}`);

    let ModalAge1 = document.querySelector('.modal-age');
    ModalAge1.insertAdjacentText('afterbegin', `${pets[result[6]].age}`);

    let ModalInocul1 = document.querySelector('.modal-inoculations');
    ModalInocul1.insertAdjacentText('afterbegin', `${pets[result[6]].inoculations}`);

    let ModalDiseases1 = document.querySelector('.modal-diseases');
    ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result[6]].diseases}`);

    let ModalParas1 = document.querySelector('.modal-parasites');
    ModalParas1.insertAdjacentText('afterbegin', `${pets[result[6]].parasites}`);
  }

  function closeModal1() {
    modal.classList.remove('mmm');
    overlay1.classList.remove('mmm');
    body.classList.remove('lock');


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
    modal.classList.add('mmm');
    overlay2.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
    ModalImg2.src = `${pets[result[5]].img}`

    let ModalName2 = document.querySelector('.modal-name');
    ModalName2.insertAdjacentText('afterbegin', `${pets[result[5]].name}`);

    let ModalType2 = document.querySelector('.modal-type');
    ModalType2.insertAdjacentText('afterbegin', `${pets[result[5]].type}`);

    let ModalBreed2 = document.querySelector('.modal-breed');
    ModalBreed2.insertAdjacentText('afterbegin', `${pets[result[5]].breed}`);

    let ModalDesc2 = document.querySelector('.modal-description');
    ModalDesc2.insertAdjacentText('afterbegin', `${pets[result[5]].description}`);

    let ModalAge2 = document.querySelector('.modal-age');
    ModalAge2.insertAdjacentText('afterbegin', `${pets[result[5]].age}`);

    let ModalInocul2 = document.querySelector('.modal-inoculations');
    ModalInocul2.insertAdjacentText('afterbegin', `${pets[result[5]].inoculations}`);

    let ModalDiseases2 = document.querySelector('.modal-diseases');
    ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result[5]].diseases}`);

    let ModalParas2 = document.querySelector('.modal-parasites');
    ModalParas2.insertAdjacentText('afterbegin', `${pets[result[5]].parasites}`);
  }

  function closeModal2() {
    modal.classList.remove('mmm');
    overlay2.classList.remove('mmm');
    body.classList.remove('lock');


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
    modal.classList.add('mmm');
    overlay3.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg3 = document.querySelector("#modal > div.modal-img > img");
    ModalImg3.src = `${pets[result[4]].img}`

    let ModalName3 = document.querySelector('.modal-name');
    ModalName3.insertAdjacentText('afterbegin', `${pets[result[4]].name}`);

    let ModalType3 = document.querySelector('.modal-type');
    ModalType3.insertAdjacentText('afterbegin', `${pets[result[4]].type}`);

    let ModalBreed3 = document.querySelector('.modal-breed');
    ModalBreed3.insertAdjacentText('afterbegin', `${pets[result[4]].breed}`);

    let ModalDesc3 = document.querySelector('.modal-description');
    ModalDesc3.insertAdjacentText('afterbegin', `${pets[result[4]].description}`);

    let ModalAge3 = document.querySelector('.modal-age');
    ModalAge3.insertAdjacentText('afterbegin', `${pets[result[4]].age}`);

    let ModalInocul3 = document.querySelector('.modal-inoculations');
    ModalInocul3.insertAdjacentText('afterbegin', `${pets[result[4]].inoculations}`);

    let ModalDiseases3 = document.querySelector('.modal-diseases');
    ModalDiseases3.insertAdjacentText('afterbegin', `${pets[result[4]].diseases}`);

    let ModalParas3 = document.querySelector('.modal-parasites');
    ModalParas3.insertAdjacentText('afterbegin', `${pets[result[4]].parasites}`);
  }

  function closeModal3() {
    modal.classList.remove('mmm');
    overlay3.classList.remove('mmm');
    body.classList.remove('lock');


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
    modal.classList.add('mmm');
    overlay4.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg4 = document.querySelector("#modal > div.modal-img > img");
    ModalImg4.src = `${pets[result[3]].img}`

    let ModalName4 = document.querySelector('.modal-name');
    ModalName4.insertAdjacentText('afterbegin', `${pets[result[3]].name}`);

    let ModalType4 = document.querySelector('.modal-type');
    ModalType4.insertAdjacentText('afterbegin', `${pets[result[3]].type}`);

    let ModalBreed4 = document.querySelector('.modal-breed');
    ModalBreed4.insertAdjacentText('afterbegin', `${pets[result[3]].breed}`);

    let ModalDesc4 = document.querySelector('.modal-description');
    ModalDesc4.insertAdjacentText('afterbegin', `${pets[result[3]].description}`);

    let ModalAge4 = document.querySelector('.modal-age');
    ModalAge4.insertAdjacentText('afterbegin', `${pets[result[3]].age}`);

    let ModalInocul4 = document.querySelector('.modal-inoculations');
    ModalInocul4.insertAdjacentText('afterbegin', `${pets[result[3]].inoculations}`);

    let ModalDiseases4 = document.querySelector('.modal-diseases');
    ModalDiseases4.insertAdjacentText('afterbegin', `${pets[result[3]].diseases}`);

    let ModalParas4 = document.querySelector('.modal-parasites');
    ModalParas4.insertAdjacentText('afterbegin', `${pets[result[3]].parasites}`);
  }

  function closeModal4() {
    modal.classList.remove('mmm');
    overlay4.classList.remove('mmm');
    body.classList.remove('lock');


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
    modal.classList.add('mmm');
    overlay5.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg5 = document.querySelector("#modal > div.modal-img > img");
    ModalImg5.src = `${pets[result[2]].img}`

    let ModalName5 = document.querySelector('.modal-name');
    ModalName5.insertAdjacentText('afterbegin', `${pets[result[2]].name}`);

    let ModalType5 = document.querySelector('.modal-type');
    ModalType5.insertAdjacentText('afterbegin', `${pets[result[2]].type}`);

    let ModalBreed5 = document.querySelector('.modal-breed');
    ModalBreed5.insertAdjacentText('afterbegin', `${pets[result[2]].breed}`);

    let ModalDesc5 = document.querySelector('.modal-description');
    ModalDesc5.insertAdjacentText('afterbegin', `${pets[result[2]].description}`);

    let ModalAge5 = document.querySelector('.modal-age');
    ModalAge5.insertAdjacentText('afterbegin', `${pets[result[2]].age}`);

    let ModalInocul5 = document.querySelector('.modal-inoculations');
    ModalInocul5.insertAdjacentText('afterbegin', `${pets[result[2]].inoculations}`);

    let ModalDiseases5 = document.querySelector('.modal-diseases');
    ModalDiseases5.insertAdjacentText('afterbegin', `${pets[result[2]].diseases}`);

    let ModalParas5 = document.querySelector('.modal-parasites');
    ModalParas5.insertAdjacentText('afterbegin', `${pets[result[2]].parasites}`);
  }

  function closeModal5() {
    modal.classList.remove('mmm');
    overlay5.classList.remove('mmm');
    body.classList.remove('lock');


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
    modal.classList.add('mmm');
    overlay6.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg6 = document.querySelector("#modal > div.modal-img > img");
    ModalImg6.src = `${pets[result[1]].img}`

    let ModalName6 = document.querySelector('.modal-name');
    ModalName6.insertAdjacentText('afterbegin', `${pets[result[1]].name}`);

    let ModalType6 = document.querySelector('.modal-type');
    ModalType6.insertAdjacentText('afterbegin', `${pets[result[1]].type}`);

    let ModalBreed6 = document.querySelector('.modal-breed');
    ModalBreed6.insertAdjacentText('afterbegin', `${pets[result[1]].breed}`);

    let ModalDesc6 = document.querySelector('.modal-description');
    ModalDesc6.insertAdjacentText('afterbegin', `${pets[result[1]].description}`);

    let ModalAge6 = document.querySelector('.modal-age');
    ModalAge6.insertAdjacentText('afterbegin', `${pets[result[1]].age}`);

    let ModalInocul6 = document.querySelector('.modal-inoculations');
    ModalInocul6.insertAdjacentText('afterbegin', `${pets[result[1]].inoculations}`);

    let ModalDiseases6 = document.querySelector('.modal-diseases');
    ModalDiseases6.insertAdjacentText('afterbegin', `${pets[result[1]].diseases}`);

    let ModalParas6 = document.querySelector('.modal-parasites');
    ModalParas6.insertAdjacentText('afterbegin', `${pets[result[1]].parasites}`);
  }

  function closeModal6() {
    modal.classList.remove('mmm');
    overlay6.classList.remove('mmm');
    body.classList.remove('lock');


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
    modal.classList.add('mmm');
    overlay7.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg7 = document.querySelector("#modal > div.modal-img > img");
    ModalImg7.src = `${pets[result[0]].img}`

    let ModalName7 = document.querySelector('.modal-name');
    ModalName7.insertAdjacentText('afterbegin', `${pets[result[0]].name}`);

    let ModalType7 = document.querySelector('.modal-type');
    ModalType7.insertAdjacentText('afterbegin', `${pets[result[0]].type}`);

    let ModalBreed7 = document.querySelector('.modal-breed');
    ModalBreed7.insertAdjacentText('afterbegin', `${pets[result[0]].breed}`);

    let ModalDesc7 = document.querySelector('.modal-description');
    ModalDesc7.insertAdjacentText('afterbegin', `${pets[result[0]].description}`);

    let ModalAge7 = document.querySelector('.modal-age');
    ModalAge7.insertAdjacentText('afterbegin', `${pets[result[0]].age}`);

    let ModalInocul7 = document.querySelector('.modal-inoculations');
    ModalInocul7.insertAdjacentText('afterbegin', `${pets[result[0]].inoculations}`);

    let ModalDiseases7 = document.querySelector('.modal-diseases');
    ModalDiseases7.insertAdjacentText('afterbegin', `${pets[result[0]].diseases}`);

    let ModalParas7 = document.querySelector('.modal-parasites');
    ModalParas7.insertAdjacentText('afterbegin', `${pets[result[0]].parasites}`);
  }

  function closeModal7() {
    modal.classList.remove('mmm');
    overlay7.classList.remove('mmm');
    body.classList.remove('lock');


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

  // 222222222222222222
  const openModalButtons01 = document.querySelector("#slick-slide01 > div:nth-child(1)");
  const closeModalButtons01 = document.querySelector('.close-button');
  const overlay01 = document.getElementById('overlay');

  openModalButtons01.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal01();
    }
  });

  closeModalButtons01.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal01();
    }
  });

  overlay01.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal01();
    }
  });

  function openModal01() {
    const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
    modal.classList.add('mmm');
    overlay01.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
    ModalImg0.src = `${pets[result[15]].img}`

    let ModalName0 = document.querySelector('.modal-name');
    ModalName0.insertAdjacentText('afterbegin', `${pets[result[15]].name}`);

    let ModalType0 = document.querySelector('.modal-type');
    ModalType0.insertAdjacentText('afterbegin', `${pets[result[15]].type}`);

    let ModalBreed0 = document.querySelector('.modal-breed');
    ModalBreed0.insertAdjacentText('afterbegin', `${pets[result[15]].breed}`);

    let ModalDesc0 = document.querySelector('.modal-description');
    ModalDesc0.insertAdjacentText('afterbegin', `${pets[result[15]].description}`);

    let ModalAge0 = document.querySelector('.modal-age');
    ModalAge0.insertAdjacentText('afterbegin', `${pets[result[15]].age}`);

    let ModalInocul0 = document.querySelector('.modal-inoculations');
    ModalInocul0.insertAdjacentText('afterbegin', `${pets[result[15]].inoculations}`);

    let ModalDiseases0 = document.querySelector('.modal-diseases');
    ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result[15]].diseases}`);

    let ModalParas0 = document.querySelector('.modal-parasites');
    ModalParas0.insertAdjacentText('afterbegin', `${pets[result[15]].parasites}`);
  }

  function closeModal01() {
    modal.classList.remove('mmm');
    overlay01.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons11 =document.querySelector("#slick-slide01 > div:nth-child(2)");
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
    modal.classList.add('mmm');
    overlay11.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
    ModalImg1.src = `${pets[result[14]].img}`

    let ModalName1 = document.querySelector('.modal-name');
    ModalName1.insertAdjacentText('afterbegin', `${pets[result[14]].name}`);

    let ModalType1 = document.querySelector('.modal-type');
    ModalType1.insertAdjacentText('afterbegin', `${pets[result[14]].type}`);

    let ModalBreed1 = document.querySelector('.modal-breed');
    ModalBreed1.insertAdjacentText('afterbegin', `${pets[result[14]].breed}`);

    let ModalDesc1 = document.querySelector('.modal-description');
    ModalDesc1.insertAdjacentText('afterbegin', `${pets[result[14]].description}`);

    let ModalAge1 = document.querySelector('.modal-age');
    ModalAge1.insertAdjacentText('afterbegin', `${pets[result[14]].age}`);

    let ModalInocul1 = document.querySelector('.modal-inoculations');
    ModalInocul1.insertAdjacentText('afterbegin', `${pets[result[14]].inoculations}`);

    let ModalDiseases1 = document.querySelector('.modal-diseases');
    ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result[14]].diseases}`);

    let ModalParas1 = document.querySelector('.modal-parasites');
    ModalParas1.insertAdjacentText('afterbegin', `${pets[result[14]].parasites}`);
  }

  function closeModal11() {
    modal.classList.remove('mmm');
    overlay11.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons21 = document.querySelector("#slick-slide01 > div:nth-child(3)");
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
    modal.classList.add('mmm');
    overlay21.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
    ModalImg2.src = `${pets[result[13]].img}`

    let ModalName2 = document.querySelector('.modal-name');
    ModalName2.insertAdjacentText('afterbegin', `${pets[result[13]].name}`);

    let ModalType2 = document.querySelector('.modal-type');
    ModalType2.insertAdjacentText('afterbegin', `${pets[result[13]].type}`);

    let ModalBreed2 = document.querySelector('.modal-breed');
    ModalBreed2.insertAdjacentText('afterbegin', `${pets[result[13]].breed}`);

    let ModalDesc2 = document.querySelector('.modal-description');
    ModalDesc2.insertAdjacentText('afterbegin', `${pets[result[13]].description}`);

    let ModalAge2 = document.querySelector('.modal-age');
    ModalAge2.insertAdjacentText('afterbegin', `${pets[result[13]].age}`);

    let ModalInocul2 = document.querySelector('.modal-inoculations');
    ModalInocul2.insertAdjacentText('afterbegin', `${pets[result[13]].inoculations}`);

    let ModalDiseases2 = document.querySelector('.modal-diseases');
    ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result[13]].diseases}`);

    let ModalParas2 = document.querySelector('.modal-parasites');
    ModalParas2.insertAdjacentText('afterbegin', `${pets[result[13]].parasites}`);
  }

  function closeModal21() {
    modal.classList.remove('mmm');
    overlay21.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons31 = document.querySelector("#slick-slide01 > div:nth-child(4)");
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
    modal.classList.add('mmm');
    overlay31.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg3 = document.querySelector("#modal > div.modal-img > img");
    ModalImg3.src = `${pets[result[12]].img}`

    let ModalName3 = document.querySelector('.modal-name');
    ModalName3.insertAdjacentText('afterbegin', `${pets[result[12]].name}`);

    let ModalType3 = document.querySelector('.modal-type');
    ModalType3.insertAdjacentText('afterbegin', `${pets[result[12]].type}`);

    let ModalBreed3 = document.querySelector('.modal-breed');
    ModalBreed3.insertAdjacentText('afterbegin', `${pets[result[12]].breed}`);

    let ModalDesc3 = document.querySelector('.modal-description');
    ModalDesc3.insertAdjacentText('afterbegin', `${pets[result[12]].description}`);

    let ModalAge3 = document.querySelector('.modal-age');
    ModalAge3.insertAdjacentText('afterbegin', `${pets[result[12]].age}`);

    let ModalInocul3 = document.querySelector('.modal-inoculations');
    ModalInocul3.insertAdjacentText('afterbegin', `${pets[result[12]].inoculations}`);

    let ModalDiseases3 = document.querySelector('.modal-diseases');
    ModalDiseases3.insertAdjacentText('afterbegin', `${pets[result[12]].diseases}`);

    let ModalParas3 = document.querySelector('.modal-parasites');
    ModalParas3.insertAdjacentText('afterbegin', `${pets[result[12]].parasites}`);
  }

  function closeModal31() {
    modal.classList.remove('mmm');
    overlay31.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons41 = document.querySelector("#slick-slide01 > div:nth-child(5)");
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
    modal.classList.add('mmm');
    overlay41.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg4 = document.querySelector("#modal > div.modal-img > img");
    ModalImg4.src = `${pets[result[11]].img}`

    let ModalName4 = document.querySelector('.modal-name');
    ModalName4.insertAdjacentText('afterbegin', `${pets[result[11]].name}`);

    let ModalType4 = document.querySelector('.modal-type');
    ModalType4.insertAdjacentText('afterbegin', `${pets[result[11]].type}`);

    let ModalBreed4 = document.querySelector('.modal-breed');
    ModalBreed4.insertAdjacentText('afterbegin', `${pets[result[11]].breed}`);

    let ModalDesc4 = document.querySelector('.modal-description');
    ModalDesc4.insertAdjacentText('afterbegin', `${pets[result[11]].description}`);

    let ModalAge4 = document.querySelector('.modal-age');
    ModalAge4.insertAdjacentText('afterbegin', `${pets[result[11]].age}`);

    let ModalInocul4 = document.querySelector('.modal-inoculations');
    ModalInocul4.insertAdjacentText('afterbegin', `${pets[result[11]].inoculations}`);

    let ModalDiseases4 = document.querySelector('.modal-diseases');
    ModalDiseases4.insertAdjacentText('afterbegin', `${pets[result[11]].diseases}`);

    let ModalParas4 = document.querySelector('.modal-parasites');
    ModalParas4.insertAdjacentText('afterbegin', `${pets[result[11]].parasites}`);
  }

  function closeModal41() {
    modal.classList.remove('mmm');
    overlay41.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons51 = document.querySelector("#slick-slide01 > div:nth-child(6)");
  const closeModalButtons51 = document.querySelector('.close-button');
  const overlay51 = document.getElementById('overlay');

  openModalButtons51.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal51();
    }
  });

  closeModalButtons51.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal51();
    }
  });

  overlay51.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal51();
    }
  });

  function openModal51() {
    modal.classList.add('mmm');
    overlay51.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg5 = document.querySelector("#modal > div.modal-img > img");
    ModalImg5.src = `${pets[result[10]].img}`

    let ModalName5 = document.querySelector('.modal-name');
    ModalName5.insertAdjacentText('afterbegin', `${pets[result[10]].name}`);

    let ModalType5 = document.querySelector('.modal-type');
    ModalType5.insertAdjacentText('afterbegin', `${pets[result[10]].type}`);

    let ModalBreed5 = document.querySelector('.modal-breed');
    ModalBreed5.insertAdjacentText('afterbegin', `${pets[result[10]].breed}`);

    let ModalDesc5 = document.querySelector('.modal-description');
    ModalDesc5.insertAdjacentText('afterbegin', `${pets[result[10]].description}`);

    let ModalAge5 = document.querySelector('.modal-age');
    ModalAge5.insertAdjacentText('afterbegin', `${pets[result[10]].age}`);

    let ModalInocul5 = document.querySelector('.modal-inoculations');
    ModalInocul5.insertAdjacentText('afterbegin', `${pets[result[10]].inoculations}`);

    let ModalDiseases5 = document.querySelector('.modal-diseases');
    ModalDiseases5.insertAdjacentText('afterbegin', `${pets[result[10]].diseases}`);

    let ModalParas5 = document.querySelector('.modal-parasites');
    ModalParas5.insertAdjacentText('afterbegin', `${pets[result[10]].parasites}`);
  }

  function closeModal51() {
    modal.classList.remove('mmm');
    overlay51.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons61 = document.querySelector("#slick-slide01 > div:nth-child(7)");
  const closeModalButtons61 = document.querySelector('.close-button');
  const overlay61 = document.getElementById('overlay');

  openModalButtons61.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal61();
    }
  });

  closeModalButtons61.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal61();
    }
  });

  overlay61.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal61();
    }
  });

  function openModal61() {
    modal.classList.add('mmm');
    overlay61.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg6 = document.querySelector("#modal > div.modal-img > img");
    ModalImg6.src = `${pets[result[9]].img}`

    let ModalName6 = document.querySelector('.modal-name');
    ModalName6.insertAdjacentText('afterbegin', `${pets[result[9]].name}`);

    let ModalType6 = document.querySelector('.modal-type');
    ModalType6.insertAdjacentText('afterbegin', `${pets[result[9]].type}`);

    let ModalBreed6 = document.querySelector('.modal-breed');
    ModalBreed6.insertAdjacentText('afterbegin', `${pets[result[9]].breed}`);

    let ModalDesc6 = document.querySelector('.modal-description');
    ModalDesc6.insertAdjacentText('afterbegin', `${pets[result[9]].description}`);

    let ModalAge6 = document.querySelector('.modal-age');
    ModalAge6.insertAdjacentText('afterbegin', `${pets[result[9]].age}`);

    let ModalInocul6 = document.querySelector('.modal-inoculations');
    ModalInocul6.insertAdjacentText('afterbegin', `${pets[result[9]].inoculations}`);

    let ModalDiseases6 = document.querySelector('.modal-diseases');
    ModalDiseases6.insertAdjacentText('afterbegin', `${pets[result[9]].diseases}`);

    let ModalParas6 = document.querySelector('.modal-parasites');
    ModalParas6.insertAdjacentText('afterbegin', `${pets[result[9]].parasites}`);
  }

  function closeModal61() {
    modal.classList.remove('mmm');
    overlay61.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons71 = document.querySelector("#slick-slide01 > div:nth-child(8)");
  const closeModalButtons71 = document.querySelector('.close-button');
  const overlay71 = document.getElementById('overlay');

  openModalButtons71.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal71();
    }
  });

  closeModalButtons71.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal71();
    }
  });

  overlay71.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal71();
    }
  });

  function openModal71() {
    modal.classList.add('mmm');
    overlay71.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg7 = document.querySelector("#modal > div.modal-img > img");
    ModalImg7.src = `${pets[result[8]].img}`

    let ModalName7 = document.querySelector('.modal-name');
    ModalName7.insertAdjacentText('afterbegin', `${pets[result[8]].name}`);

    let ModalType7 = document.querySelector('.modal-type');
    ModalType7.insertAdjacentText('afterbegin', `${pets[result[8]].type}`);

    let ModalBreed7 = document.querySelector('.modal-breed');
    ModalBreed7.insertAdjacentText('afterbegin', `${pets[result[8]].breed}`);

    let ModalDesc7 = document.querySelector('.modal-description');
    ModalDesc7.insertAdjacentText('afterbegin', `${pets[result[8]].description}`);

    let ModalAge7 = document.querySelector('.modal-age');
    ModalAge7.insertAdjacentText('afterbegin', `${pets[result[8]].age}`);

    let ModalInocul7 = document.querySelector('.modal-inoculations');
    ModalInocul7.insertAdjacentText('afterbegin', `${pets[result[8]].inoculations}`);

    let ModalDiseases7 = document.querySelector('.modal-diseases');
    ModalDiseases7.insertAdjacentText('afterbegin', `${pets[result[8]].diseases}`);

    let ModalParas7 = document.querySelector('.modal-parasites');
    ModalParas7.insertAdjacentText('afterbegin', `${pets[result[8]].parasites}`);
  }

  function closeModal71() {
    modal.classList.remove('mmm');
    overlay71.classList.remove('mmm');
    body.classList.remove('lock');


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


  // 333333333333333
  const openModalButtons02 = document.querySelector("#slick-slide02 > div:nth-child(1)");
  const closeModalButtons02 = document.querySelector('.close-button');
  const overlay02 = document.getElementById('overlay');

  openModalButtons02.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal02();
    }
  });

  closeModalButtons02.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal02();
    }
  });

  overlay02.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal02();
    }
  });

  function openModal02() {
    const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
    modal.classList.add('mmm');
    overlay02.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
    ModalImg0.src = `${pets[result[23]].img}`

    let ModalName0 = document.querySelector('.modal-name');
    ModalName0.insertAdjacentText('afterbegin', `${pets[result[23]].name}`);

    let ModalType0 = document.querySelector('.modal-type');
    ModalType0.insertAdjacentText('afterbegin', `${pets[result[23]].type}`);

    let ModalBreed0 = document.querySelector('.modal-breed');
    ModalBreed0.insertAdjacentText('afterbegin', `${pets[result[23]].breed}`);

    let ModalDesc0 = document.querySelector('.modal-description');
    ModalDesc0.insertAdjacentText('afterbegin', `${pets[result[23]].description}`);

    let ModalAge0 = document.querySelector('.modal-age');
    ModalAge0.insertAdjacentText('afterbegin', `${pets[result[23]].age}`);

    let ModalInocul0 = document.querySelector('.modal-inoculations');
    ModalInocul0.insertAdjacentText('afterbegin', `${pets[result[23]].inoculations}`);

    let ModalDiseases0 = document.querySelector('.modal-diseases');
    ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result[23]].diseases}`);

    let ModalParas0 = document.querySelector('.modal-parasites');
    ModalParas0.insertAdjacentText('afterbegin', `${pets[result[23]].parasites}`);
  }

  function closeModal02() {
    modal.classList.remove('mmm');
    overlay02.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons12 =document.querySelector("#slick-slide02 > div:nth-child(2)");
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
    modal.classList.add('mmm');
    overlay12.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
    ModalImg1.src = `${pets[result[22]].img}`

    let ModalName1 = document.querySelector('.modal-name');
    ModalName1.insertAdjacentText('afterbegin', `${pets[result[22]].name}`);

    let ModalType1 = document.querySelector('.modal-type');
    ModalType1.insertAdjacentText('afterbegin', `${pets[result[22]].type}`);

    let ModalBreed1 = document.querySelector('.modal-breed');
    ModalBreed1.insertAdjacentText('afterbegin', `${pets[result[22]].breed}`);

    let ModalDesc1 = document.querySelector('.modal-description');
    ModalDesc1.insertAdjacentText('afterbegin', `${pets[result[22]].description}`);

    let ModalAge1 = document.querySelector('.modal-age');
    ModalAge1.insertAdjacentText('afterbegin', `${pets[result[22]].age}`);

    let ModalInocul1 = document.querySelector('.modal-inoculations');
    ModalInocul1.insertAdjacentText('afterbegin', `${pets[result[22]].inoculations}`);

    let ModalDiseases1 = document.querySelector('.modal-diseases');
    ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result[22]].diseases}`);

    let ModalParas1 = document.querySelector('.modal-parasites');
    ModalParas1.insertAdjacentText('afterbegin', `${pets[result[22]].parasites}`);
  }

  function closeModal12() {
    modal.classList.remove('mmm');
    overlay12.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons22 = document.querySelector("#slick-slide02 > div:nth-child(3)");
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
    modal.classList.add('mmm');
    overlay22.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
    ModalImg2.src = `${pets[result[21]].img}`

    let ModalName2 = document.querySelector('.modal-name');
    ModalName2.insertAdjacentText('afterbegin', `${pets[result[21]].name}`);

    let ModalType2 = document.querySelector('.modal-type');
    ModalType2.insertAdjacentText('afterbegin', `${pets[result[21]].type}`);

    let ModalBreed2 = document.querySelector('.modal-breed');
    ModalBreed2.insertAdjacentText('afterbegin', `${pets[result[21]].breed}`);

    let ModalDesc2 = document.querySelector('.modal-description');
    ModalDesc2.insertAdjacentText('afterbegin', `${pets[result[21]].description}`);

    let ModalAge2 = document.querySelector('.modal-age');
    ModalAge2.insertAdjacentText('afterbegin', `${pets[result[21]].age}`);

    let ModalInocul2 = document.querySelector('.modal-inoculations');
    ModalInocul2.insertAdjacentText('afterbegin', `${pets[result[21]].inoculations}`);

    let ModalDiseases2 = document.querySelector('.modal-diseases');
    ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result[21]].diseases}`);

    let ModalParas2 = document.querySelector('.modal-parasites');
    ModalParas2.insertAdjacentText('afterbegin', `${pets[result[21]].parasites}`);
  }

  function closeModal22() {
    modal.classList.remove('mmm');
    overlay22.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons32 = document.querySelector("#slick-slide02 > div:nth-child(4)");
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
    modal.classList.add('mmm');
    overlay32.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg3 = document.querySelector("#modal > div.modal-img > img");
    ModalImg3.src = `${pets[result[20]].img}`

    let ModalName3 = document.querySelector('.modal-name');
    ModalName3.insertAdjacentText('afterbegin', `${pets[result[20]].name}`);

    let ModalType3 = document.querySelector('.modal-type');
    ModalType3.insertAdjacentText('afterbegin', `${pets[result[20]].type}`);

    let ModalBreed3 = document.querySelector('.modal-breed');
    ModalBreed3.insertAdjacentText('afterbegin', `${pets[result[20]].breed}`);

    let ModalDesc3 = document.querySelector('.modal-description');
    ModalDesc3.insertAdjacentText('afterbegin', `${pets[result[20]].description}`);

    let ModalAge3 = document.querySelector('.modal-age');
    ModalAge3.insertAdjacentText('afterbegin', `${pets[result[20]].age}`);

    let ModalInocul3 = document.querySelector('.modal-inoculations');
    ModalInocul3.insertAdjacentText('afterbegin', `${pets[result[20]].inoculations}`);

    let ModalDiseases3 = document.querySelector('.modal-diseases');
    ModalDiseases3.insertAdjacentText('afterbegin', `${pets[result[20]].diseases}`);

    let ModalParas3 = document.querySelector('.modal-parasites');
    ModalParas3.insertAdjacentText('afterbegin', `${pets[result[20]].parasites}`);
  }

  function closeModal32() {
    modal.classList.remove('mmm');
    overlay32.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons42 = document.querySelector("#slick-slide02 > div:nth-child(5)");
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
    modal.classList.add('mmm');
    overlay42.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg4 = document.querySelector("#modal > div.modal-img > img");
    ModalImg4.src = `${pets[result[19]].img}`

    let ModalName4 = document.querySelector('.modal-name');
    ModalName4.insertAdjacentText('afterbegin', `${pets[result[19]].name}`);

    let ModalType4 = document.querySelector('.modal-type');
    ModalType4.insertAdjacentText('afterbegin', `${pets[result[19]].type}`);

    let ModalBreed4 = document.querySelector('.modal-breed');
    ModalBreed4.insertAdjacentText('afterbegin', `${pets[result[19]].breed}`);

    let ModalDesc4 = document.querySelector('.modal-description');
    ModalDesc4.insertAdjacentText('afterbegin', `${pets[result[19]].description}`);

    let ModalAge4 = document.querySelector('.modal-age');
    ModalAge4.insertAdjacentText('afterbegin', `${pets[result[19]].age}`);

    let ModalInocul4 = document.querySelector('.modal-inoculations');
    ModalInocul4.insertAdjacentText('afterbegin', `${pets[result[19]].inoculations}`);

    let ModalDiseases4 = document.querySelector('.modal-diseases');
    ModalDiseases4.insertAdjacentText('afterbegin', `${pets[result[19]].diseases}`);

    let ModalParas4 = document.querySelector('.modal-parasites');
    ModalParas4.insertAdjacentText('afterbegin', `${pets[result[19]].parasites}`);
  }

  function closeModal42() {
    modal.classList.remove('mmm');
    overlay42.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons52 = document.querySelector("#slick-slide02 > div:nth-child(6)");
  const closeModalButtons52 = document.querySelector('.close-button');
  const overlay52 = document.getElementById('overlay');

  openModalButtons52.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal52();
    }
  });

  closeModalButtons52.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal52();
    }
  });

  overlay52.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal52();
    }
  });

  function openModal52() {
    modal.classList.add('mmm');
    overlay52.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg5 = document.querySelector("#modal > div.modal-img > img");
    ModalImg5.src = `${pets[result[18]].img}`

    let ModalName5 = document.querySelector('.modal-name');
    ModalName5.insertAdjacentText('afterbegin', `${pets[result[18]].name}`);

    let ModalType5 = document.querySelector('.modal-type');
    ModalType5.insertAdjacentText('afterbegin', `${pets[result[18]].type}`);

    let ModalBreed5 = document.querySelector('.modal-breed');
    ModalBreed5.insertAdjacentText('afterbegin', `${pets[result[18]].breed}`);

    let ModalDesc5 = document.querySelector('.modal-description');
    ModalDesc5.insertAdjacentText('afterbegin', `${pets[result[18]].description}`);

    let ModalAge5 = document.querySelector('.modal-age');
    ModalAge5.insertAdjacentText('afterbegin', `${pets[result[18]].age}`);

    let ModalInocul5 = document.querySelector('.modal-inoculations');
    ModalInocul5.insertAdjacentText('afterbegin', `${pets[result[18]].inoculations}`);

    let ModalDiseases5 = document.querySelector('.modal-diseases');
    ModalDiseases5.insertAdjacentText('afterbegin', `${pets[result[18]].diseases}`);

    let ModalParas5 = document.querySelector('.modal-parasites');
    ModalParas5.insertAdjacentText('afterbegin', `${pets[result[18]].parasites}`);
  }

  function closeModal52() {
    modal.classList.remove('mmm');
    overlay52.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons62 = document.querySelector("#slick-slide02 > div:nth-child(7)");
  const closeModalButtons62 = document.querySelector('.close-button');
  const overlay62 = document.getElementById('overlay');

  openModalButtons62.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal62();
    }
  });

  closeModalButtons62.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal62();
    }
  });

  overlay62.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal62();
    }
  });

  function openModal62() {
    modal.classList.add('mmm');
    overlay62.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg6 = document.querySelector("#modal > div.modal-img > img");
    ModalImg6.src = `${pets[result[17]].img}`

    let ModalName6 = document.querySelector('.modal-name');
    ModalName6.insertAdjacentText('afterbegin', `${pets[result[17]].name}`);

    let ModalType6 = document.querySelector('.modal-type');
    ModalType6.insertAdjacentText('afterbegin', `${pets[result[17]].type}`);

    let ModalBreed6 = document.querySelector('.modal-breed');
    ModalBreed6.insertAdjacentText('afterbegin', `${pets[result[17]].breed}`);

    let ModalDesc6 = document.querySelector('.modal-description');
    ModalDesc6.insertAdjacentText('afterbegin', `${pets[result[17]].description}`);

    let ModalAge6 = document.querySelector('.modal-age');
    ModalAge6.insertAdjacentText('afterbegin', `${pets[result[17]].age}`);

    let ModalInocul6 = document.querySelector('.modal-inoculations');
    ModalInocul6.insertAdjacentText('afterbegin', `${pets[result[17]].inoculations}`);

    let ModalDiseases6 = document.querySelector('.modal-diseases');
    ModalDiseases6.insertAdjacentText('afterbegin', `${pets[result[17]].diseases}`);

    let ModalParas6 = document.querySelector('.modal-parasites');
    ModalParas6.insertAdjacentText('afterbegin', `${pets[result[17]].parasites}`);
  }

  function closeModal62() {
    modal.classList.remove('mmm');
    overlay62.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons72 = document.querySelector("#slick-slide02 > div:nth-child(8)");
  const closeModalButtons72 = document.querySelector('.close-button');
  const overlay72 = document.getElementById('overlay');

  openModalButtons72.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal72();
    }
  });

  closeModalButtons72.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal72();
    }
  });

  overlay72.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal72();
    }
  });

  function openModal72() {
    modal.classList.add('mmm');
    overlay72.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg7 = document.querySelector("#modal > div.modal-img > img");
    ModalImg7.src = `${pets[result[16]].img}`

    let ModalName7 = document.querySelector('.modal-name');
    ModalName7.insertAdjacentText('afterbegin', `${pets[result[16]].name}`);

    let ModalType7 = document.querySelector('.modal-type');
    ModalType7.insertAdjacentText('afterbegin', `${pets[result[16]].type}`);

    let ModalBreed7 = document.querySelector('.modal-breed');
    ModalBreed7.insertAdjacentText('afterbegin', `${pets[result[16]].breed}`);

    let ModalDesc7 = document.querySelector('.modal-description');
    ModalDesc7.insertAdjacentText('afterbegin', `${pets[result[16]].description}`);

    let ModalAge7 = document.querySelector('.modal-age');
    ModalAge7.insertAdjacentText('afterbegin', `${pets[result[16]].age}`);

    let ModalInocul7 = document.querySelector('.modal-inoculations');
    ModalInocul7.insertAdjacentText('afterbegin', `${pets[result[16]].inoculations}`);

    let ModalDiseases7 = document.querySelector('.modal-diseases');
    ModalDiseases7.insertAdjacentText('afterbegin', `${pets[result[16]].diseases}`);

    let ModalParas7 = document.querySelector('.modal-parasites');
    ModalParas7.insertAdjacentText('afterbegin', `${pets[result[16]].parasites}`);
  }

  function closeModal72() {
    modal.classList.remove('mmm');
    overlay72.classList.remove('mmm');
    body.classList.remove('lock');


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


  // 44444444444444444444
  const openModalButtons03 = document.querySelector("#slick-slide03 > div:nth-child(1)");
  const closeModalButtons03 = document.querySelector('.close-button');
  const overlay03 = document.getElementById('overlay');

  openModalButtons03.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal03();
    }
  });

  closeModalButtons03.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal03();
    }
  });

  overlay03.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal03();
    }
  });

  function openModal03() {
    const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
    modal.classList.add('mmm');
    overlay03.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
    ModalImg0.src = `${pets[result[31]].img}`

    let ModalName0 = document.querySelector('.modal-name');
    ModalName0.insertAdjacentText('afterbegin', `${pets[result[31]].name}`);

    let ModalType0 = document.querySelector('.modal-type');
    ModalType0.insertAdjacentText('afterbegin', `${pets[result[31]].type}`);

    let ModalBreed0 = document.querySelector('.modal-breed');
    ModalBreed0.insertAdjacentText('afterbegin', `${pets[result[31]].breed}`);

    let ModalDesc0 = document.querySelector('.modal-description');
    ModalDesc0.insertAdjacentText('afterbegin', `${pets[result[31]].description}`);

    let ModalAge0 = document.querySelector('.modal-age');
    ModalAge0.insertAdjacentText('afterbegin', `${pets[result[31]].age}`);

    let ModalInocul0 = document.querySelector('.modal-inoculations');
    ModalInocul0.insertAdjacentText('afterbegin', `${pets[result[31]].inoculations}`);

    let ModalDiseases0 = document.querySelector('.modal-diseases');
    ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result[31]].diseases}`);

    let ModalParas0 = document.querySelector('.modal-parasites');
    ModalParas0.insertAdjacentText('afterbegin', `${pets[result[31]].parasites}`);
  }

  function closeModal03() {
    modal.classList.remove('mmm');
    overlay03.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons13 =document.querySelector("#slick-slide03 > div:nth-child(2)");
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
    modal.classList.add('mmm');
    overlay13.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
    ModalImg1.src = `${pets[result[30]].img}`

    let ModalName1 = document.querySelector('.modal-name');
    ModalName1.insertAdjacentText('afterbegin', `${pets[result[30]].name}`);

    let ModalType1 = document.querySelector('.modal-type');
    ModalType1.insertAdjacentText('afterbegin', `${pets[result[30]].type}`);

    let ModalBreed1 = document.querySelector('.modal-breed');
    ModalBreed1.insertAdjacentText('afterbegin', `${pets[result[30]].breed}`);

    let ModalDesc1 = document.querySelector('.modal-description');
    ModalDesc1.insertAdjacentText('afterbegin', `${pets[result[30]].description}`);

    let ModalAge1 = document.querySelector('.modal-age');
    ModalAge1.insertAdjacentText('afterbegin', `${pets[result[30]].age}`);

    let ModalInocul1 = document.querySelector('.modal-inoculations');
    ModalInocul1.insertAdjacentText('afterbegin', `${pets[result[30]].inoculations}`);

    let ModalDiseases1 = document.querySelector('.modal-diseases');
    ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result[30]].diseases}`);

    let ModalParas1 = document.querySelector('.modal-parasites');
    ModalParas1.insertAdjacentText('afterbegin', `${pets[result[30]].parasites}`);
  }

  function closeModal13() {
    modal.classList.remove('mmm');
    overlay13.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons23 = document.querySelector("#slick-slide03 > div:nth-child(3)");
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
    modal.classList.add('mmm');
    overlay23.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
    ModalImg2.src = `${pets[result[29]].img}`

    let ModalName2 = document.querySelector('.modal-name');
    ModalName2.insertAdjacentText('afterbegin', `${pets[result[29]].name}`);

    let ModalType2 = document.querySelector('.modal-type');
    ModalType2.insertAdjacentText('afterbegin', `${pets[result[29]].type}`);

    let ModalBreed2 = document.querySelector('.modal-breed');
    ModalBreed2.insertAdjacentText('afterbegin', `${pets[result[29]].breed}`);

    let ModalDesc2 = document.querySelector('.modal-description');
    ModalDesc2.insertAdjacentText('afterbegin', `${pets[result[29]].description}`);

    let ModalAge2 = document.querySelector('.modal-age');
    ModalAge2.insertAdjacentText('afterbegin', `${pets[result[29]].age}`);

    let ModalInocul2 = document.querySelector('.modal-inoculations');
    ModalInocul2.insertAdjacentText('afterbegin', `${pets[result[29]].inoculations}`);

    let ModalDiseases2 = document.querySelector('.modal-diseases');
    ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result[29]].diseases}`);

    let ModalParas2 = document.querySelector('.modal-parasites');
    ModalParas2.insertAdjacentText('afterbegin', `${pets[result[29]].parasites}`);
  }

  function closeModal23() {
    modal.classList.remove('mmm');
    overlay23.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons33 = document.querySelector("#slick-slide03 > div:nth-child(4)");
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
    modal.classList.add('mmm');
    overlay33.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg3 = document.querySelector("#modal > div.modal-img > img");
    ModalImg3.src = `${pets[result[28]].img}`

    let ModalName3 = document.querySelector('.modal-name');
    ModalName3.insertAdjacentText('afterbegin', `${pets[result[28]].name}`);

    let ModalType3 = document.querySelector('.modal-type');
    ModalType3.insertAdjacentText('afterbegin', `${pets[result[28]].type}`);

    let ModalBreed3 = document.querySelector('.modal-breed');
    ModalBreed3.insertAdjacentText('afterbegin', `${pets[result[28]].breed}`);

    let ModalDesc3 = document.querySelector('.modal-description');
    ModalDesc3.insertAdjacentText('afterbegin', `${pets[result[28]].description}`);

    let ModalAge3 = document.querySelector('.modal-age');
    ModalAge3.insertAdjacentText('afterbegin', `${pets[result[28]].age}`);

    let ModalInocul3 = document.querySelector('.modal-inoculations');
    ModalInocul3.insertAdjacentText('afterbegin', `${pets[result[28]].inoculations}`);

    let ModalDiseases3 = document.querySelector('.modal-diseases');
    ModalDiseases3.insertAdjacentText('afterbegin', `${pets[result[28]].diseases}`);

    let ModalParas3 = document.querySelector('.modal-parasites');
    ModalParas3.insertAdjacentText('afterbegin', `${pets[result[28]].parasites}`);
  }

  function closeModal33() {
    modal.classList.remove('mmm');
    overlay33.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons43 = document.querySelector("#slick-slide03 > div:nth-child(5)");
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
    modal.classList.add('mmm');
    overlay43.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg4 = document.querySelector("#modal > div.modal-img > img");
    ModalImg4.src = `${pets[result[27]].img}`

    let ModalName4 = document.querySelector('.modal-name');
    ModalName4.insertAdjacentText('afterbegin', `${pets[result[27]].name}`);

    let ModalType4 = document.querySelector('.modal-type');
    ModalType4.insertAdjacentText('afterbegin', `${pets[result[27]].type}`);

    let ModalBreed4 = document.querySelector('.modal-breed');
    ModalBreed4.insertAdjacentText('afterbegin', `${pets[result[27]].breed}`);

    let ModalDesc4 = document.querySelector('.modal-description');
    ModalDesc4.insertAdjacentText('afterbegin', `${pets[result[27]].description}`);

    let ModalAge4 = document.querySelector('.modal-age');
    ModalAge4.insertAdjacentText('afterbegin', `${pets[result[27]].age}`);

    let ModalInocul4 = document.querySelector('.modal-inoculations');
    ModalInocul4.insertAdjacentText('afterbegin', `${pets[result[27]].inoculations}`);

    let ModalDiseases4 = document.querySelector('.modal-diseases');
    ModalDiseases4.insertAdjacentText('afterbegin', `${pets[result[27]].diseases}`);

    let ModalParas4 = document.querySelector('.modal-parasites');
    ModalParas4.insertAdjacentText('afterbegin', `${pets[result[27]].parasites}`);
  }

  function closeModal43() {
    modal.classList.remove('mmm');
    overlay43.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons53 = document.querySelector("#slick-slide03 > div:nth-child(6)");
  const closeModalButtons53 = document.querySelector('.close-button');
  const overlay53 = document.getElementById('overlay');

  openModalButtons53.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal53();
    }
  });

  closeModalButtons53.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal53();
    }
  });

  overlay53.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal53();
    }
  });

  function openModal53() {
    modal.classList.add('mmm');
    overlay53.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg5 = document.querySelector("#modal > div.modal-img > img");
    ModalImg5.src = `${pets[result[26]].img}`

    let ModalName5 = document.querySelector('.modal-name');
    ModalName5.insertAdjacentText('afterbegin', `${pets[result[26]].name}`);

    let ModalType5 = document.querySelector('.modal-type');
    ModalType5.insertAdjacentText('afterbegin', `${pets[result[26]].type}`);

    let ModalBreed5 = document.querySelector('.modal-breed');
    ModalBreed5.insertAdjacentText('afterbegin', `${pets[result[26]].breed}`);

    let ModalDesc5 = document.querySelector('.modal-description');
    ModalDesc5.insertAdjacentText('afterbegin', `${pets[result[26]].description}`);

    let ModalAge5 = document.querySelector('.modal-age');
    ModalAge5.insertAdjacentText('afterbegin', `${pets[result[26]].age}`);

    let ModalInocul5 = document.querySelector('.modal-inoculations');
    ModalInocul5.insertAdjacentText('afterbegin', `${pets[result[26]].inoculations}`);

    let ModalDiseases5 = document.querySelector('.modal-diseases');
    ModalDiseases5.insertAdjacentText('afterbegin', `${pets[result[26]].diseases}`);

    let ModalParas5 = document.querySelector('.modal-parasites');
    ModalParas5.insertAdjacentText('afterbegin', `${pets[result[26]].parasites}`);
  }

  function closeModal53() {
    modal.classList.remove('mmm');
    overlay53.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons63 = document.querySelector("#slick-slide03 > div:nth-child(7)");
  const closeModalButtons63 = document.querySelector('.close-button');
  const overlay63 = document.getElementById('overlay');

  openModalButtons63.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal63();
    }
  });

  closeModalButtons63.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal63();
    }
  });

  overlay63.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal63();
    }
  });

  function openModal63() {
    modal.classList.add('mmm');
    overlay63.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg6 = document.querySelector("#modal > div.modal-img > img");
    ModalImg6.src = `${pets[result[25]].img}`

    let ModalName6 = document.querySelector('.modal-name');
    ModalName6.insertAdjacentText('afterbegin', `${pets[result[25]].name}`);

    let ModalType6 = document.querySelector('.modal-type');
    ModalType6.insertAdjacentText('afterbegin', `${pets[result[25]].type}`);

    let ModalBreed6 = document.querySelector('.modal-breed');
    ModalBreed6.insertAdjacentText('afterbegin', `${pets[result[25]].breed}`);

    let ModalDesc6 = document.querySelector('.modal-description');
    ModalDesc6.insertAdjacentText('afterbegin', `${pets[result[25]].description}`);

    let ModalAge6 = document.querySelector('.modal-age');
    ModalAge6.insertAdjacentText('afterbegin', `${pets[result[25]].age}`);

    let ModalInocul6 = document.querySelector('.modal-inoculations');
    ModalInocul6.insertAdjacentText('afterbegin', `${pets[result[25]].inoculations}`);

    let ModalDiseases6 = document.querySelector('.modal-diseases');
    ModalDiseases6.insertAdjacentText('afterbegin', `${pets[result[25]].diseases}`);

    let ModalParas6 = document.querySelector('.modal-parasites');
    ModalParas6.insertAdjacentText('afterbegin', `${pets[result[25]].parasites}`);
  }

  function closeModal63() {
    modal.classList.remove('mmm');
    overlay63.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons73 = document.querySelector("#slick-slide03 > div:nth-child(8)");
  const closeModalButtons73 = document.querySelector('.close-button');
  const overlay73 = document.getElementById('overlay');

  openModalButtons73.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal73();
    }
  });

  closeModalButtons73.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal73();
    }
  });

  overlay73.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal73();
    }
  });

  function openModal73() {
    modal.classList.add('mmm');
    overlay73.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg7 = document.querySelector("#modal > div.modal-img > img");
    ModalImg7.src = `${pets[result[24]].img}`

    let ModalName7 = document.querySelector('.modal-name');
    ModalName7.insertAdjacentText('afterbegin', `${pets[result[24]].name}`);

    let ModalType7 = document.querySelector('.modal-type');
    ModalType7.insertAdjacentText('afterbegin', `${pets[result[24]].type}`);

    let ModalBreed7 = document.querySelector('.modal-breed');
    ModalBreed7.insertAdjacentText('afterbegin', `${pets[result[24]].breed}`);

    let ModalDesc7 = document.querySelector('.modal-description');
    ModalDesc7.insertAdjacentText('afterbegin', `${pets[result[24]].description}`);

    let ModalAge7 = document.querySelector('.modal-age');
    ModalAge7.insertAdjacentText('afterbegin', `${pets[result[24]].age}`);

    let ModalInocul7 = document.querySelector('.modal-inoculations');
    ModalInocul7.insertAdjacentText('afterbegin', `${pets[result[24]].inoculations}`);

    let ModalDiseases7 = document.querySelector('.modal-diseases');
    ModalDiseases7.insertAdjacentText('afterbegin', `${pets[result[24]].diseases}`);

    let ModalParas7 = document.querySelector('.modal-parasites');
    ModalParas7.insertAdjacentText('afterbegin', `${pets[result[24]].parasites}`);
  }

  function closeModal73() {
    modal.classList.remove('mmm');
    overlay73.classList.remove('mmm');
    body.classList.remove('lock');


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


  // 555555555555555
  const openModalButtons04 = document.querySelector("#slick-slide04 > div:nth-child(1)");
  const closeModalButtons04 = document.querySelector('.close-button');
  const overlay04 = document.getElementById('overlay');

  openModalButtons04.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal04();
    }
  });

  closeModalButtons04.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal04();
    }
  });

  overlay04.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal04();
    }
  });

  function openModal04() {
    const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
    modal.classList.add('mmm');
    overlay04.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
    ModalImg0.src = `${pets[result[39]].img}`

    let ModalName0 = document.querySelector('.modal-name');
    ModalName0.insertAdjacentText('afterbegin', `${pets[result[39]].name}`);

    let ModalType0 = document.querySelector('.modal-type');
    ModalType0.insertAdjacentText('afterbegin', `${pets[result[39]].type}`);

    let ModalBreed0 = document.querySelector('.modal-breed');
    ModalBreed0.insertAdjacentText('afterbegin', `${pets[result[39]].breed}`);

    let ModalDesc0 = document.querySelector('.modal-description');
    ModalDesc0.insertAdjacentText('afterbegin', `${pets[result[39]].description}`);

    let ModalAge0 = document.querySelector('.modal-age');
    ModalAge0.insertAdjacentText('afterbegin', `${pets[result[39]].age}`);

    let ModalInocul0 = document.querySelector('.modal-inoculations');
    ModalInocul0.insertAdjacentText('afterbegin', `${pets[result[39]].inoculations}`);

    let ModalDiseases0 = document.querySelector('.modal-diseases');
    ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result[39]].diseases}`);

    let ModalParas0 = document.querySelector('.modal-parasites');
    ModalParas0.insertAdjacentText('afterbegin', `${pets[result[39]].parasites}`);
  }

  function closeModal04() {
    modal.classList.remove('mmm');
    overlay04.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons14 =document.querySelector("#slick-slide04 > div:nth-child(2)");
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
    modal.classList.add('mmm');
    overlay14.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
    ModalImg1.src = `${pets[result[38]].img}`

    let ModalName1 = document.querySelector('.modal-name');
    ModalName1.insertAdjacentText('afterbegin', `${pets[result[38]].name}`);

    let ModalType1 = document.querySelector('.modal-type');
    ModalType1.insertAdjacentText('afterbegin', `${pets[result[38]].type}`);

    let ModalBreed1 = document.querySelector('.modal-breed');
    ModalBreed1.insertAdjacentText('afterbegin', `${pets[result[38]].breed}`);

    let ModalDesc1 = document.querySelector('.modal-description');
    ModalDesc1.insertAdjacentText('afterbegin', `${pets[result[38]].description}`);

    let ModalAge1 = document.querySelector('.modal-age');
    ModalAge1.insertAdjacentText('afterbegin', `${pets[result[38]].age}`);

    let ModalInocul1 = document.querySelector('.modal-inoculations');
    ModalInocul1.insertAdjacentText('afterbegin', `${pets[result[38]].inoculations}`);

    let ModalDiseases1 = document.querySelector('.modal-diseases');
    ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result[38]].diseases}`);

    let ModalParas1 = document.querySelector('.modal-parasites');
    ModalParas1.insertAdjacentText('afterbegin', `${pets[result[38]].parasites}`);
  }

  function closeModal14() {
    modal.classList.remove('mmm');
    overlay14.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons24 = document.querySelector("#slick-slide04 > div:nth-child(3)");
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
    modal.classList.add('mmm');
    overlay24.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
    ModalImg2.src = `${pets[result[37]].img}`

    let ModalName2 = document.querySelector('.modal-name');
    ModalName2.insertAdjacentText('afterbegin', `${pets[result[37]].name}`);

    let ModalType2 = document.querySelector('.modal-type');
    ModalType2.insertAdjacentText('afterbegin', `${pets[result[37]].type}`);

    let ModalBreed2 = document.querySelector('.modal-breed');
    ModalBreed2.insertAdjacentText('afterbegin', `${pets[result[37]].breed}`);

    let ModalDesc2 = document.querySelector('.modal-description');
    ModalDesc2.insertAdjacentText('afterbegin', `${pets[result[37]].description}`);

    let ModalAge2 = document.querySelector('.modal-age');
    ModalAge2.insertAdjacentText('afterbegin', `${pets[result[37]].age}`);

    let ModalInocul2 = document.querySelector('.modal-inoculations');
    ModalInocul2.insertAdjacentText('afterbegin', `${pets[result[37]].inoculations}`);

    let ModalDiseases2 = document.querySelector('.modal-diseases');
    ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result[37]].diseases}`);

    let ModalParas2 = document.querySelector('.modal-parasites');
    ModalParas2.insertAdjacentText('afterbegin', `${pets[result[37]].parasites}`);
  }

  function closeModal24() {
    modal.classList.remove('mmm');
    overlay24.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons34 = document.querySelector("#slick-slide04 > div:nth-child(4)");
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
    modal.classList.add('mmm');
    overlay34.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg3 = document.querySelector("#modal > div.modal-img > img");
    ModalImg3.src = `${pets[result[36]].img}`

    let ModalName3 = document.querySelector('.modal-name');
    ModalName3.insertAdjacentText('afterbegin', `${pets[result[36]].name}`);

    let ModalType3 = document.querySelector('.modal-type');
    ModalType3.insertAdjacentText('afterbegin', `${pets[result[36]].type}`);

    let ModalBreed3 = document.querySelector('.modal-breed');
    ModalBreed3.insertAdjacentText('afterbegin', `${pets[result[36]].breed}`);

    let ModalDesc3 = document.querySelector('.modal-description');
    ModalDesc3.insertAdjacentText('afterbegin', `${pets[result[36]].description}`);

    let ModalAge3 = document.querySelector('.modal-age');
    ModalAge3.insertAdjacentText('afterbegin', `${pets[result[36]].age}`);

    let ModalInocul3 = document.querySelector('.modal-inoculations');
    ModalInocul3.insertAdjacentText('afterbegin', `${pets[result[36]].inoculations}`);

    let ModalDiseases3 = document.querySelector('.modal-diseases');
    ModalDiseases3.insertAdjacentText('afterbegin', `${pets[result[36]].diseases}`);

    let ModalParas3 = document.querySelector('.modal-parasites');
    ModalParas3.insertAdjacentText('afterbegin', `${pets[result[36]].parasites}`);
  }

  function closeModal34() {
    modal.classList.remove('mmm');
    overlay34.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons44 = document.querySelector("#slick-slide04 > div:nth-child(5)");
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
    modal.classList.add('mmm');
    overlay44.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg4 = document.querySelector("#modal > div.modal-img > img");
    ModalImg4.src = `${pets[result[35]].img}`

    let ModalName4 = document.querySelector('.modal-name');
    ModalName4.insertAdjacentText('afterbegin', `${pets[result[35]].name}`);

    let ModalType4 = document.querySelector('.modal-type');
    ModalType4.insertAdjacentText('afterbegin', `${pets[result[35]].type}`);

    let ModalBreed4 = document.querySelector('.modal-breed');
    ModalBreed4.insertAdjacentText('afterbegin', `${pets[result[35]].breed}`);

    let ModalDesc4 = document.querySelector('.modal-description');
    ModalDesc4.insertAdjacentText('afterbegin', `${pets[result[35]].description}`);

    let ModalAge4 = document.querySelector('.modal-age');
    ModalAge4.insertAdjacentText('afterbegin', `${pets[result[35]].age}`);

    let ModalInocul4 = document.querySelector('.modal-inoculations');
    ModalInocul4.insertAdjacentText('afterbegin', `${pets[result[35]].inoculations}`);

    let ModalDiseases4 = document.querySelector('.modal-diseases');
    ModalDiseases4.insertAdjacentText('afterbegin', `${pets[result[35]].diseases}`);

    let ModalParas4 = document.querySelector('.modal-parasites');
    ModalParas4.insertAdjacentText('afterbegin', `${pets[result[35]].parasites}`);
  }

  function closeModal44() {
    modal.classList.remove('mmm');
    overlay44.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons54 = document.querySelector("#slick-slide04 > div:nth-child(6)");
  const closeModalButtons54 = document.querySelector('.close-button');
  const overlay54 = document.getElementById('overlay');

  openModalButtons54.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal54();
    }
  });

  closeModalButtons54.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal54();
    }
  });

  overlay54.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal54();
    }
  });

  function openModal54() {
    modal.classList.add('mmm');
    overlay54.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg5 = document.querySelector("#modal > div.modal-img > img");
    ModalImg5.src = `${pets[result[34]].img}`

    let ModalName5 = document.querySelector('.modal-name');
    ModalName5.insertAdjacentText('afterbegin', `${pets[result[34]].name}`);

    let ModalType5 = document.querySelector('.modal-type');
    ModalType5.insertAdjacentText('afterbegin', `${pets[result[34]].type}`);

    let ModalBreed5 = document.querySelector('.modal-breed');
    ModalBreed5.insertAdjacentText('afterbegin', `${pets[result[34]].breed}`);

    let ModalDesc5 = document.querySelector('.modal-description');
    ModalDesc5.insertAdjacentText('afterbegin', `${pets[result[34]].description}`);

    let ModalAge5 = document.querySelector('.modal-age');
    ModalAge5.insertAdjacentText('afterbegin', `${pets[result[34]].age}`);

    let ModalInocul5 = document.querySelector('.modal-inoculations');
    ModalInocul5.insertAdjacentText('afterbegin', `${pets[result[34]].inoculations}`);

    let ModalDiseases5 = document.querySelector('.modal-diseases');
    ModalDiseases5.insertAdjacentText('afterbegin', `${pets[result[34]].diseases}`);

    let ModalParas5 = document.querySelector('.modal-parasites');
    ModalParas5.insertAdjacentText('afterbegin', `${pets[result[34]].parasites}`);
  }

  function closeModal54() {
    modal.classList.remove('mmm');
    overlay54.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons64 = document.querySelector("#slick-slide04 > div:nth-child(7)");
  const closeModalButtons64 = document.querySelector('.close-button');
  const overlay64 = document.getElementById('overlay');

  openModalButtons64.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal64();
    }
  });

  closeModalButtons64.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal64();
    }
  });

  overlay64.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal64();
    }
  });

  function openModal64() {
    modal.classList.add('mmm');
    overlay64.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg6 = document.querySelector("#modal > div.modal-img > img");
    ModalImg6.src = `${pets[result[33]].img}`

    let ModalName6 = document.querySelector('.modal-name');
    ModalName6.insertAdjacentText('afterbegin', `${pets[result[33]].name}`);

    let ModalType6 = document.querySelector('.modal-type');
    ModalType6.insertAdjacentText('afterbegin', `${pets[result[33]].type}`);

    let ModalBreed6 = document.querySelector('.modal-breed');
    ModalBreed6.insertAdjacentText('afterbegin', `${pets[result[33]].breed}`);

    let ModalDesc6 = document.querySelector('.modal-description');
    ModalDesc6.insertAdjacentText('afterbegin', `${pets[result[33]].description}`);

    let ModalAge6 = document.querySelector('.modal-age');
    ModalAge6.insertAdjacentText('afterbegin', `${pets[result[33]].age}`);

    let ModalInocul6 = document.querySelector('.modal-inoculations');
    ModalInocul6.insertAdjacentText('afterbegin', `${pets[result[33]].inoculations}`);

    let ModalDiseases6 = document.querySelector('.modal-diseases');
    ModalDiseases6.insertAdjacentText('afterbegin', `${pets[result[33]].diseases}`);

    let ModalParas6 = document.querySelector('.modal-parasites');
    ModalParas6.insertAdjacentText('afterbegin', `${pets[result[33]].parasites}`);
  }

  function closeModal64() {
    modal.classList.remove('mmm');
    overlay64.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons74 = document.querySelector("#slick-slide04 > div:nth-child(8)");
  const closeModalButtons74 = document.querySelector('.close-button');
  const overlay74 = document.getElementById('overlay');

  openModalButtons74.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal74();
    }
  });

  closeModalButtons74.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal74();
    }
  });

  overlay74.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal74();
    }
  });

  function openModal74() {
    modal.classList.add('mmm');
    overlay74.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg7 = document.querySelector("#modal > div.modal-img > img");
    ModalImg7.src = `${pets[result[32]].img}`

    let ModalName7 = document.querySelector('.modal-name');
    ModalName7.insertAdjacentText('afterbegin', `${pets[result[32]].name}`);

    let ModalType7 = document.querySelector('.modal-type');
    ModalType7.insertAdjacentText('afterbegin', `${pets[result[32]].type}`);

    let ModalBreed7 = document.querySelector('.modal-breed');
    ModalBreed7.insertAdjacentText('afterbegin', `${pets[result[32]].breed}`);

    let ModalDesc7 = document.querySelector('.modal-description');
    ModalDesc7.insertAdjacentText('afterbegin', `${pets[result[32]].description}`);

    let ModalAge7 = document.querySelector('.modal-age');
    ModalAge7.insertAdjacentText('afterbegin', `${pets[result[32]].age}`);

    let ModalInocul7 = document.querySelector('.modal-inoculations');
    ModalInocul7.insertAdjacentText('afterbegin', `${pets[result[32]].inoculations}`);

    let ModalDiseases7 = document.querySelector('.modal-diseases');
    ModalDiseases7.insertAdjacentText('afterbegin', `${pets[result[32]].diseases}`);

    let ModalParas7 = document.querySelector('.modal-parasites');
    ModalParas7.insertAdjacentText('afterbegin', `${pets[result[32]].parasites}`);
  }

  function closeModal74() {
    modal.classList.remove('mmm');
    overlay74.classList.remove('mmm');
    body.classList.remove('lock');


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


  // 66666666666666666
  const openModalButtons05 = document.querySelector("#slick-slide05 > div:nth-child(1)");
  const closeModalButtons05 = document.querySelector('.close-button');
  const overlay05 = document.getElementById('overlay');

  openModalButtons05.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal05();
    }
  });

  closeModalButtons05.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal05();
    }
  });

  overlay05.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal05();
    }
  });

  function openModal05() {
    const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
    modal.classList.add('mmm');
    overlay05.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
    ModalImg0.src = `${pets[result[47]].img}`

    let ModalName0 = document.querySelector('.modal-name');
    ModalName0.insertAdjacentText('afterbegin', `${pets[result[47]].name}`);

    let ModalType0 = document.querySelector('.modal-type');
    ModalType0.insertAdjacentText('afterbegin', `${pets[result[47]].type}`);

    let ModalBreed0 = document.querySelector('.modal-breed');
    ModalBreed0.insertAdjacentText('afterbegin', `${pets[result[47]].breed}`);

    let ModalDesc0 = document.querySelector('.modal-description');
    ModalDesc0.insertAdjacentText('afterbegin', `${pets[result[47]].description}`);

    let ModalAge0 = document.querySelector('.modal-age');
    ModalAge0.insertAdjacentText('afterbegin', `${pets[result[47]].age}`);

    let ModalInocul0 = document.querySelector('.modal-inoculations');
    ModalInocul0.insertAdjacentText('afterbegin', `${pets[result[47]].inoculations}`);

    let ModalDiseases0 = document.querySelector('.modal-diseases');
    ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result[47]].diseases}`);

    let ModalParas0 = document.querySelector('.modal-parasites');
    ModalParas0.insertAdjacentText('afterbegin', `${pets[result[47]].parasites}`);
  }

  function closeModal05() {
    modal.classList.remove('mmm');
    overlay05.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons15 =document.querySelector("#slick-slide05 > div:nth-child(2)");
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
    modal.classList.add('mmm');
    overlay15.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
    ModalImg1.src = `${pets[result[46]].img}`

    let ModalName1 = document.querySelector('.modal-name');
    ModalName1.insertAdjacentText('afterbegin', `${pets[result[46]].name}`);

    let ModalType1 = document.querySelector('.modal-type');
    ModalType1.insertAdjacentText('afterbegin', `${pets[result[46]].type}`);

    let ModalBreed1 = document.querySelector('.modal-breed');
    ModalBreed1.insertAdjacentText('afterbegin', `${pets[result[46]].breed}`);

    let ModalDesc1 = document.querySelector('.modal-description');
    ModalDesc1.insertAdjacentText('afterbegin', `${pets[result[46]].description}`);

    let ModalAge1 = document.querySelector('.modal-age');
    ModalAge1.insertAdjacentText('afterbegin', `${pets[result[46]].age}`);

    let ModalInocul1 = document.querySelector('.modal-inoculations');
    ModalInocul1.insertAdjacentText('afterbegin', `${pets[result[46]].inoculations}`);

    let ModalDiseases1 = document.querySelector('.modal-diseases');
    ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result[46]].diseases}`);

    let ModalParas1 = document.querySelector('.modal-parasites');
    ModalParas1.insertAdjacentText('afterbegin', `${pets[result[46]].parasites}`);
  }

  function closeModal15() {
    modal.classList.remove('mmm');
    overlay15.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons25 = document.querySelector("#slick-slide05 > div:nth-child(3)");
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
    modal.classList.add('mmm');
    overlay25.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
    ModalImg2.src = `${pets[result[45]].img}`

    let ModalName2 = document.querySelector('.modal-name');
    ModalName2.insertAdjacentText('afterbegin', `${pets[result[45]].name}`);

    let ModalType2 = document.querySelector('.modal-type');
    ModalType2.insertAdjacentText('afterbegin', `${pets[result[45]].type}`);

    let ModalBreed2 = document.querySelector('.modal-breed');
    ModalBreed2.insertAdjacentText('afterbegin', `${pets[result[45]].breed}`);

    let ModalDesc2 = document.querySelector('.modal-description');
    ModalDesc2.insertAdjacentText('afterbegin', `${pets[result[45]].description}`);

    let ModalAge2 = document.querySelector('.modal-age');
    ModalAge2.insertAdjacentText('afterbegin', `${pets[result[45]].age}`);

    let ModalInocul2 = document.querySelector('.modal-inoculations');
    ModalInocul2.insertAdjacentText('afterbegin', `${pets[result[45]].inoculations}`);

    let ModalDiseases2 = document.querySelector('.modal-diseases');
    ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result[45]].diseases}`);

    let ModalParas2 = document.querySelector('.modal-parasites');
    ModalParas2.insertAdjacentText('afterbegin', `${pets[result[45]].parasites}`);
  }

  function closeModal25() {
    modal.classList.remove('mmm');
    overlay25.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons35 = document.querySelector("#slick-slide05 > div:nth-child(4)");
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
    modal.classList.add('mmm');
    overlay35.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg3 = document.querySelector("#modal > div.modal-img > img");
    ModalImg3.src = `${pets[result[44]].img}`

    let ModalName3 = document.querySelector('.modal-name');
    ModalName3.insertAdjacentText('afterbegin', `${pets[result[44]].name}`);

    let ModalType3 = document.querySelector('.modal-type');
    ModalType3.insertAdjacentText('afterbegin', `${pets[result[44]].type}`);

    let ModalBreed3 = document.querySelector('.modal-breed');
    ModalBreed3.insertAdjacentText('afterbegin', `${pets[result[44]].breed}`);

    let ModalDesc3 = document.querySelector('.modal-description');
    ModalDesc3.insertAdjacentText('afterbegin', `${pets[result[44]].description}`);

    let ModalAge3 = document.querySelector('.modal-age');
    ModalAge3.insertAdjacentText('afterbegin', `${pets[result[44]].age}`);

    let ModalInocul3 = document.querySelector('.modal-inoculations');
    ModalInocul3.insertAdjacentText('afterbegin', `${pets[result[44]].inoculations}`);

    let ModalDiseases3 = document.querySelector('.modal-diseases');
    ModalDiseases3.insertAdjacentText('afterbegin', `${pets[result[44]].diseases}`);

    let ModalParas3 = document.querySelector('.modal-parasites');
    ModalParas3.insertAdjacentText('afterbegin', `${pets[result[44]].parasites}`);
  }

  function closeModal35() {
    modal.classList.remove('mmm');
    overlay35.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons45 = document.querySelector("#slick-slide05 > div:nth-child(5)");
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
    modal.classList.add('mmm');
    overlay45.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg4 = document.querySelector("#modal > div.modal-img > img");
    ModalImg4.src = `${pets[result[43]].img}`

    let ModalName4 = document.querySelector('.modal-name');
    ModalName4.insertAdjacentText('afterbegin', `${pets[result[43]].name}`);

    let ModalType4 = document.querySelector('.modal-type');
    ModalType4.insertAdjacentText('afterbegin', `${pets[result[43]].type}`);

    let ModalBreed4 = document.querySelector('.modal-breed');
    ModalBreed4.insertAdjacentText('afterbegin', `${pets[result[43]].breed}`);

    let ModalDesc4 = document.querySelector('.modal-description');
    ModalDesc4.insertAdjacentText('afterbegin', `${pets[result[43]].description}`);

    let ModalAge4 = document.querySelector('.modal-age');
    ModalAge4.insertAdjacentText('afterbegin', `${pets[result[43]].age}`);

    let ModalInocul4 = document.querySelector('.modal-inoculations');
    ModalInocul4.insertAdjacentText('afterbegin', `${pets[result[43]].inoculations}`);

    let ModalDiseases4 = document.querySelector('.modal-diseases');
    ModalDiseases4.insertAdjacentText('afterbegin', `${pets[result[43]].diseases}`);

    let ModalParas4 = document.querySelector('.modal-parasites');
    ModalParas4.insertAdjacentText('afterbegin', `${pets[result[43]].parasites}`);
  }

  function closeModal45() {
    modal.classList.remove('mmm');
    overlay45.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons55 = document.querySelector("#slick-slide05 > div:nth-child(6)");
  const closeModalButtons55 = document.querySelector('.close-button');
  const overlay55 = document.getElementById('overlay');

  openModalButtons55.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal55();
    }
  });

  closeModalButtons55.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal55();
    }
  });

  overlay55.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal55();
    }
  });

  function openModal55() {
    modal.classList.add('mmm');
    overlay55.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg5 = document.querySelector("#modal > div.modal-img > img");
    ModalImg5.src = `${pets[result[42]].img}`

    let ModalName5 = document.querySelector('.modal-name');
    ModalName5.insertAdjacentText('afterbegin', `${pets[result[42]].name}`);

    let ModalType5 = document.querySelector('.modal-type');
    ModalType5.insertAdjacentText('afterbegin', `${pets[result[42]].type}`);

    let ModalBreed5 = document.querySelector('.modal-breed');
    ModalBreed5.insertAdjacentText('afterbegin', `${pets[result[42]].breed}`);

    let ModalDesc5 = document.querySelector('.modal-description');
    ModalDesc5.insertAdjacentText('afterbegin', `${pets[result[42]].description}`);

    let ModalAge5 = document.querySelector('.modal-age');
    ModalAge5.insertAdjacentText('afterbegin', `${pets[result[42]].age}`);

    let ModalInocul5 = document.querySelector('.modal-inoculations');
    ModalInocul5.insertAdjacentText('afterbegin', `${pets[result[42]].inoculations}`);

    let ModalDiseases5 = document.querySelector('.modal-diseases');
    ModalDiseases5.insertAdjacentText('afterbegin', `${pets[result[42]].diseases}`);

    let ModalParas5 = document.querySelector('.modal-parasites');
    ModalParas5.insertAdjacentText('afterbegin', `${pets[result[42]].parasites}`);
  }

  function closeModal55() {
    modal.classList.remove('mmm');
    overlay55.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons65 = document.querySelector("#slick-slide05 > div:nth-child(7)");
  const closeModalButtons65 = document.querySelector('.close-button');
  const overlay65 = document.getElementById('overlay');

  openModalButtons65.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal65();
    }
  });

  closeModalButtons65.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal65();
    }
  });

  overlay65.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal65();
    }
  });

  function openModal65() {
    modal.classList.add('mmm');
    overlay65.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg6 = document.querySelector("#modal > div.modal-img > img");
    ModalImg6.src = `${pets[result[41]].img}`

    let ModalName6 = document.querySelector('.modal-name');
    ModalName6.insertAdjacentText('afterbegin', `${pets[result[41]].name}`);

    let ModalType6 = document.querySelector('.modal-type');
    ModalType6.insertAdjacentText('afterbegin', `${pets[result[41]].type}`);

    let ModalBreed6 = document.querySelector('.modal-breed');
    ModalBreed6.insertAdjacentText('afterbegin', `${pets[result[41]].breed}`);

    let ModalDesc6 = document.querySelector('.modal-description');
    ModalDesc6.insertAdjacentText('afterbegin', `${pets[result[41]].description}`);

    let ModalAge6 = document.querySelector('.modal-age');
    ModalAge6.insertAdjacentText('afterbegin', `${pets[result[41]].age}`);

    let ModalInocul6 = document.querySelector('.modal-inoculations');
    ModalInocul6.insertAdjacentText('afterbegin', `${pets[result[41]].inoculations}`);

    let ModalDiseases6 = document.querySelector('.modal-diseases');
    ModalDiseases6.insertAdjacentText('afterbegin', `${pets[result[41]].diseases}`);

    let ModalParas6 = document.querySelector('.modal-parasites');
    ModalParas6.insertAdjacentText('afterbegin', `${pets[result[41]].parasites}`);
  }

  function closeModal65() {
    modal.classList.remove('mmm');
    overlay65.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons75 = document.querySelector("#slick-slide05 > div:nth-child(8)");
  const closeModalButtons75 = document.querySelector('.close-button');
  const overlay75 = document.getElementById('overlay');

  openModalButtons75.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal75();
    }
  });

  closeModalButtons75.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal75();
    }
  });

  overlay75.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal75();
    }
  });

  function openModal75() {
    modal.classList.add('mmm');
    overlay75.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg7 = document.querySelector("#modal > div.modal-img > img");
    ModalImg7.src = `${pets[result[40]].img}`

    let ModalName7 = document.querySelector('.modal-name');
    ModalName7.insertAdjacentText('afterbegin', `${pets[result[40]].name}`);

    let ModalType7 = document.querySelector('.modal-type');
    ModalType7.insertAdjacentText('afterbegin', `${pets[result[40]].type}`);

    let ModalBreed7 = document.querySelector('.modal-breed');
    ModalBreed7.insertAdjacentText('afterbegin', `${pets[result[40]].breed}`);

    let ModalDesc7 = document.querySelector('.modal-description');
    ModalDesc7.insertAdjacentText('afterbegin', `${pets[result[40]].description}`);

    let ModalAge7 = document.querySelector('.modal-age');
    ModalAge7.insertAdjacentText('afterbegin', `${pets[result[40]].age}`);

    let ModalInocul7 = document.querySelector('.modal-inoculations');
    ModalInocul7.insertAdjacentText('afterbegin', `${pets[result[40]].inoculations}`);

    let ModalDiseases7 = document.querySelector('.modal-diseases');
    ModalDiseases7.insertAdjacentText('afterbegin', `${pets[result[40]].diseases}`);

    let ModalParas7 = document.querySelector('.modal-parasites');
    ModalParas7.insertAdjacentText('afterbegin', `${pets[result[40]].parasites}`);
  }

  function closeModal75() {
    modal.classList.remove('mmm');
    overlay75.classList.remove('mmm');
    body.classList.remove('lock');


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

  } else if(widthModal > 642 && widthModal <= 1160){
    // 111111111111111
  const openModalButtons01 = document.querySelector("#slick-slide00 > div:nth-child(1)");
  const closeModalButtons01 = document.querySelector('.close-button');
  const overlay01 = document.getElementById('overlay');

  openModalButtons01.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal01();
    }
  });

  closeModalButtons01.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal01();
    }
  });

  overlay01.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal01();
    }
  });

  function openModal01() {
    const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
    modal.classList.add('mmm');
    overlay01.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
    ModalImg0.src = `${pets[result6[5]].img}`

    let ModalName0 = document.querySelector('.modal-name');
    ModalName0.insertAdjacentText('afterbegin', `${pets[result6[5]].name}`);

    let ModalType0 = document.querySelector('.modal-type');
    ModalType0.insertAdjacentText('afterbegin', `${pets[result6[5]].type}`);

    let ModalBreed0 = document.querySelector('.modal-breed');
    ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[5]].breed}`);

    let ModalDesc0 = document.querySelector('.modal-description');
    ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[5]].description}`);

    let ModalAge0 = document.querySelector('.modal-age');
    ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[5]].age}`);

    let ModalInocul0 = document.querySelector('.modal-inoculations');
    ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[5]].inoculations}`);

    let ModalDiseases0 = document.querySelector('.modal-diseases');
    ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[5]].diseases}`);

    let ModalParas0 = document.querySelector('.modal-parasites');
    ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[5]].parasites}`);
  }

  function closeModal01() {
    modal.classList.remove('mmm');
    overlay01.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons02 =document.querySelector("#slick-slide00 > div:nth-child(2)");
  const closeModalButtons02 = document.querySelector('.close-button');
  const overlay02 = document.getElementById('overlay');

  openModalButtons02.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal02();
    }
  });

  closeModalButtons02.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal02();
    }
  });

  overlay02.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal02();
    }
  });

  function openModal02() {
    modal.classList.add('mmm');
    overlay02.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
    ModalImg1.src = `${pets[result6[4]].img}`

    let ModalName1 = document.querySelector('.modal-name');
    ModalName1.insertAdjacentText('afterbegin', `${pets[result6[4]].name}`);

    let ModalType1 = document.querySelector('.modal-type');
    ModalType1.insertAdjacentText('afterbegin', `${pets[result6[4]].type}`);

    let ModalBreed1 = document.querySelector('.modal-breed');
    ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[4]].breed}`);

    let ModalDesc1 = document.querySelector('.modal-description');
    ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[4]].description}`);

    let ModalAge1 = document.querySelector('.modal-age');
    ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[4]].age}`);

    let ModalInocul1 = document.querySelector('.modal-inoculations');
    ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[4]].inoculations}`);

    let ModalDiseases1 = document.querySelector('.modal-diseases');
    ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[4]].diseases}`);

    let ModalParas1 = document.querySelector('.modal-parasites');
    ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[4]].parasites}`);
  }

  function closeModal02() {
    modal.classList.remove('mmm');
    overlay02.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons03 = document.querySelector("#slick-slide00 > div:nth-child(3)");
  const closeModalButtons03 = document.querySelector('.close-button');
  const overlay03 = document.getElementById('overlay');

  openModalButtons03.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal03();
    }
  });

  closeModalButtons03.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal03();
    }
  });

  overlay03.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal03();
    }
  });

  function openModal03() {
    modal.classList.add('mmm');
    overlay03.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
    ModalImg2.src = `${pets[result6[3]].img}`

    let ModalName2 = document.querySelector('.modal-name');
    ModalName2.insertAdjacentText('afterbegin', `${pets[result6[3]].name}`);

    let ModalType2 = document.querySelector('.modal-type');
    ModalType2.insertAdjacentText('afterbegin', `${pets[result6[3]].type}`);

    let ModalBreed2 = document.querySelector('.modal-breed');
    ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[3]].breed}`);

    let ModalDesc2 = document.querySelector('.modal-description');
    ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[3]].description}`);

    let ModalAge2 = document.querySelector('.modal-age');
    ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[3]].age}`);

    let ModalInocul2 = document.querySelector('.modal-inoculations');
    ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[3]].inoculations}`);

    let ModalDiseases2 = document.querySelector('.modal-diseases');
    ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[3]].diseases}`);

    let ModalParas2 = document.querySelector('.modal-parasites');
    ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[3]].parasites}`);
  }

  function closeModal03() {
    modal.classList.remove('mmm');
    overlay03.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons04 = document.querySelector("#slick-slide00 > div:nth-child(4)");
  const closeModalButtons04 = document.querySelector('.close-button');
  const overlay04 = document.getElementById('overlay');

  openModalButtons04.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal04();
    }
  });

  closeModalButtons04.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal04();
    }
  });

  overlay04.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal04();
    }
  });

  function openModal04() {
    modal.classList.add('mmm');
    overlay04.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg3 = document.querySelector("#modal > div.modal-img > img");
    ModalImg3.src = `${pets[result6[2]].img}`

    let ModalName3 = document.querySelector('.modal-name');
    ModalName3.insertAdjacentText('afterbegin', `${pets[result6[2]].name}`);

    let ModalType3 = document.querySelector('.modal-type');
    ModalType3.insertAdjacentText('afterbegin', `${pets[result6[2]].type}`);

    let ModalBreed3 = document.querySelector('.modal-breed');
    ModalBreed3.insertAdjacentText('afterbegin', `${pets[result6[2]].breed}`);

    let ModalDesc3 = document.querySelector('.modal-description');
    ModalDesc3.insertAdjacentText('afterbegin', `${pets[result6[2]].description}`);

    let ModalAge3 = document.querySelector('.modal-age');
    ModalAge3.insertAdjacentText('afterbegin', `${pets[result6[2]].age}`);

    let ModalInocul3 = document.querySelector('.modal-inoculations');
    ModalInocul3.insertAdjacentText('afterbegin', `${pets[result6[2]].inoculations}`);

    let ModalDiseases3 = document.querySelector('.modal-diseases');
    ModalDiseases3.insertAdjacentText('afterbegin', `${pets[result6[2]].diseases}`);

    let ModalParas3 = document.querySelector('.modal-parasites');
    ModalParas3.insertAdjacentText('afterbegin', `${pets[result6[2]].parasites}`);
  }

  function closeModal04() {
    modal.classList.remove('mmm');
    overlay04.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons05 = document.querySelector("#slick-slide00 > div:nth-child(5)");
  const closeModalButtons05 = document.querySelector('.close-button');
  const overlay05 = document.getElementById('overlay');

  openModalButtons05.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal05();
    }
  });

  closeModalButtons05.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal05();
    }
  });

  overlay05.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal05();
    }
  });

  function openModal05() {
    modal.classList.add('mmm');
    overlay05.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg4 = document.querySelector("#modal > div.modal-img > img");
    ModalImg4.src = `${pets[result6[1]].img}`

    let ModalName4 = document.querySelector('.modal-name');
    ModalName4.insertAdjacentText('afterbegin', `${pets[result6[1]].name}`);

    let ModalType4 = document.querySelector('.modal-type');
    ModalType4.insertAdjacentText('afterbegin', `${pets[result6[1]].type}`);

    let ModalBreed4 = document.querySelector('.modal-breed');
    ModalBreed4.insertAdjacentText('afterbegin', `${pets[result6[1]].breed}`);

    let ModalDesc4 = document.querySelector('.modal-description');
    ModalDesc4.insertAdjacentText('afterbegin', `${pets[result6[1]].description}`);

    let ModalAge4 = document.querySelector('.modal-age');
    ModalAge4.insertAdjacentText('afterbegin', `${pets[result6[1]].age}`);

    let ModalInocul4 = document.querySelector('.modal-inoculations');
    ModalInocul4.insertAdjacentText('afterbegin', `${pets[result6[1]].inoculations}`);

    let ModalDiseases4 = document.querySelector('.modal-diseases');
    ModalDiseases4.insertAdjacentText('afterbegin', `${pets[result6[1]].diseases}`);

    let ModalParas4 = document.querySelector('.modal-parasites');
    ModalParas4.insertAdjacentText('afterbegin', `${pets[result6[1]].parasites}`);
  }

  function closeModal05() {
    modal.classList.remove('mmm');
    overlay05.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons06 = document.querySelector("#slick-slide00 > div:nth-child(6)");
  const closeModalButtons06 = document.querySelector('.close-button');
  const overlay06 = document.getElementById('overlay');

  openModalButtons06.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal06();
    }
  });

  closeModalButtons06.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal06();
    }
  });

  overlay06.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal06();
    }
  });

  function openModal06() {
    modal.classList.add('mmm');
    overlay06.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg5 = document.querySelector("#modal > div.modal-img > img");
    ModalImg5.src = `${pets[result6[0]].img}`

    let ModalName5 = document.querySelector('.modal-name');
    ModalName5.insertAdjacentText('afterbegin', `${pets[result6[0]].name}`);

    let ModalType5 = document.querySelector('.modal-type');
    ModalType5.insertAdjacentText('afterbegin', `${pets[result6[0]].type}`);

    let ModalBreed5 = document.querySelector('.modal-breed');
    ModalBreed5.insertAdjacentText('afterbegin', `${pets[result6[0]].breed}`);

    let ModalDesc5 = document.querySelector('.modal-description');
    ModalDesc5.insertAdjacentText('afterbegin', `${pets[result6[0]].description}`);

    let ModalAge5 = document.querySelector('.modal-age');
    ModalAge5.insertAdjacentText('afterbegin', `${pets[result6[0]].age}`);

    let ModalInocul5 = document.querySelector('.modal-inoculations');
    ModalInocul5.insertAdjacentText('afterbegin', `${pets[result6[0]].inoculations}`);

    let ModalDiseases5 = document.querySelector('.modal-diseases');
    ModalDiseases5.insertAdjacentText('afterbegin', `${pets[result6[0]].diseases}`);

    let ModalParas5 = document.querySelector('.modal-parasites');
    ModalParas5.insertAdjacentText('afterbegin', `${pets[result6[0]].parasites}`);
  }

  function closeModal06() {
    modal.classList.remove('mmm');
    overlay06.classList.remove('mmm');
    body.classList.remove('lock');


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


  // 2222222222222222
  const openModalButtons11 = document.querySelector("#slick-slide01 > div:nth-child(1)");
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
    const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
    modal.classList.add('mmm');
    overlay11.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
    ModalImg0.src = `${pets[result6[11]].img}`

    let ModalName0 = document.querySelector('.modal-name');
    ModalName0.insertAdjacentText('afterbegin', `${pets[result6[11]].name}`);

    let ModalType0 = document.querySelector('.modal-type');
    ModalType0.insertAdjacentText('afterbegin', `${pets[result6[11]].type}`);

    let ModalBreed0 = document.querySelector('.modal-breed');
    ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[11]].breed}`);

    let ModalDesc0 = document.querySelector('.modal-description');
    ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[11]].description}`);

    let ModalAge0 = document.querySelector('.modal-age');
    ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[11]].age}`);

    let ModalInocul0 = document.querySelector('.modal-inoculations');
    ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[11]].inoculations}`);

    let ModalDiseases0 = document.querySelector('.modal-diseases');
    ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[11]].diseases}`);

    let ModalParas0 = document.querySelector('.modal-parasites');
    ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[11]].parasites}`);
  }

  function closeModal11() {
    modal.classList.remove('mmm');
    overlay11.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons12 =document.querySelector("#slick-slide01 > div:nth-child(2)");
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
    modal.classList.add('mmm');
    overlay12.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
    ModalImg1.src = `${pets[result6[10]].img}`

    let ModalName1 = document.querySelector('.modal-name');
    ModalName1.insertAdjacentText('afterbegin', `${pets[result6[10]].name}`);

    let ModalType1 = document.querySelector('.modal-type');
    ModalType1.insertAdjacentText('afterbegin', `${pets[result6[10]].type}`);

    let ModalBreed1 = document.querySelector('.modal-breed');
    ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[10]].breed}`);

    let ModalDesc1 = document.querySelector('.modal-description');
    ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[10]].description}`);

    let ModalAge1 = document.querySelector('.modal-age');
    ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[10]].age}`);

    let ModalInocul1 = document.querySelector('.modal-inoculations');
    ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[10]].inoculations}`);

    let ModalDiseases1 = document.querySelector('.modal-diseases');
    ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[10]].diseases}`);

    let ModalParas1 = document.querySelector('.modal-parasites');
    ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[10]].parasites}`);
  }

  function closeModal12() {
    modal.classList.remove('mmm');
    overlay12.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons13 = document.querySelector("#slick-slide01 > div:nth-child(3)");
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
    modal.classList.add('mmm');
    overlay13.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
    ModalImg2.src = `${pets[result6[9]].img}`

    let ModalName2 = document.querySelector('.modal-name');
    ModalName2.insertAdjacentText('afterbegin', `${pets[result6[9]].name}`);

    let ModalType2 = document.querySelector('.modal-type');
    ModalType2.insertAdjacentText('afterbegin', `${pets[result6[9]].type}`);

    let ModalBreed2 = document.querySelector('.modal-breed');
    ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[9]].breed}`);

    let ModalDesc2 = document.querySelector('.modal-description');
    ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[9]].description}`);

    let ModalAge2 = document.querySelector('.modal-age');
    ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[9]].age}`);

    let ModalInocul2 = document.querySelector('.modal-inoculations');
    ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[9]].inoculations}`);

    let ModalDiseases2 = document.querySelector('.modal-diseases');
    ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[9]].diseases}`);

    let ModalParas2 = document.querySelector('.modal-parasites');
    ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[9]].parasites}`);
  }

  function closeModal13() {
    modal.classList.remove('mmm');
    overlay13.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons14 = document.querySelector("#slick-slide01 > div:nth-child(4)");
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
    modal.classList.add('mmm');
    overlay14.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg3 = document.querySelector("#modal > div.modal-img > img");
    ModalImg3.src = `${pets[result6[8]].img}`

    let ModalName3 = document.querySelector('.modal-name');
    ModalName3.insertAdjacentText('afterbegin', `${pets[result6[8]].name}`);

    let ModalType3 = document.querySelector('.modal-type');
    ModalType3.insertAdjacentText('afterbegin', `${pets[result6[8]].type}`);

    let ModalBreed3 = document.querySelector('.modal-breed');
    ModalBreed3.insertAdjacentText('afterbegin', `${pets[result6[8]].breed}`);

    let ModalDesc3 = document.querySelector('.modal-description');
    ModalDesc3.insertAdjacentText('afterbegin', `${pets[result6[8]].description}`);

    let ModalAge3 = document.querySelector('.modal-age');
    ModalAge3.insertAdjacentText('afterbegin', `${pets[result6[8]].age}`);

    let ModalInocul3 = document.querySelector('.modal-inoculations');
    ModalInocul3.insertAdjacentText('afterbegin', `${pets[result6[8]].inoculations}`);

    let ModalDiseases3 = document.querySelector('.modal-diseases');
    ModalDiseases3.insertAdjacentText('afterbegin', `${pets[result6[8]].diseases}`);

    let ModalParas3 = document.querySelector('.modal-parasites');
    ModalParas3.insertAdjacentText('afterbegin', `${pets[result6[8]].parasites}`);
  }

  function closeModal14() {
    modal.classList.remove('mmm');
    overlay14.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons15 = document.querySelector("#slick-slide01 > div:nth-child(5)");
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
    modal.classList.add('mmm');
    overlay15.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg4 = document.querySelector("#modal > div.modal-img > img");
    ModalImg4.src = `${pets[result6[7]].img}`

    let ModalName4 = document.querySelector('.modal-name');
    ModalName4.insertAdjacentText('afterbegin', `${pets[result6[7]].name}`);

    let ModalType4 = document.querySelector('.modal-type');
    ModalType4.insertAdjacentText('afterbegin', `${pets[result6[7]].type}`);

    let ModalBreed4 = document.querySelector('.modal-breed');
    ModalBreed4.insertAdjacentText('afterbegin', `${pets[result6[7]].breed}`);

    let ModalDesc4 = document.querySelector('.modal-description');
    ModalDesc4.insertAdjacentText('afterbegin', `${pets[result6[7]].description}`);

    let ModalAge4 = document.querySelector('.modal-age');
    ModalAge4.insertAdjacentText('afterbegin', `${pets[result6[7]].age}`);

    let ModalInocul4 = document.querySelector('.modal-inoculations');
    ModalInocul4.insertAdjacentText('afterbegin', `${pets[result6[7]].inoculations}`);

    let ModalDiseases4 = document.querySelector('.modal-diseases');
    ModalDiseases4.insertAdjacentText('afterbegin', `${pets[result6[7]].diseases}`);

    let ModalParas4 = document.querySelector('.modal-parasites');
    ModalParas4.insertAdjacentText('afterbegin', `${pets[result6[7]].parasites}`);
  }

  function closeModal15() {
    modal.classList.remove('mmm');
    overlay15.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons16 = document.querySelector("#slick-slide01 > div:nth-child(6)");
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
    modal.classList.add('mmm');
    overlay16.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg5 = document.querySelector("#modal > div.modal-img > img");
    ModalImg5.src = `${pets[result6[6]].img}`

    let ModalName5 = document.querySelector('.modal-name');
    ModalName5.insertAdjacentText('afterbegin', `${pets[result6[6]].name}`);

    let ModalType5 = document.querySelector('.modal-type');
    ModalType5.insertAdjacentText('afterbegin', `${pets[result6[6]].type}`);

    let ModalBreed5 = document.querySelector('.modal-breed');
    ModalBreed5.insertAdjacentText('afterbegin', `${pets[result6[6]].breed}`);

    let ModalDesc5 = document.querySelector('.modal-description');
    ModalDesc5.insertAdjacentText('afterbegin', `${pets[result6[6]].description}`);

    let ModalAge5 = document.querySelector('.modal-age');
    ModalAge5.insertAdjacentText('afterbegin', `${pets[result6[6]].age}`);

    let ModalInocul5 = document.querySelector('.modal-inoculations');
    ModalInocul5.insertAdjacentText('afterbegin', `${pets[result6[6]].inoculations}`);

    let ModalDiseases5 = document.querySelector('.modal-diseases');
    ModalDiseases5.insertAdjacentText('afterbegin', `${pets[result6[6]].diseases}`);

    let ModalParas5 = document.querySelector('.modal-parasites');
    ModalParas5.insertAdjacentText('afterbegin', `${pets[result6[6]].parasites}`);
  }

  function closeModal16() {
    modal.classList.remove('mmm');
    overlay16.classList.remove('mmm');
    body.classList.remove('lock');


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


   // 33333333333333
   const openModalButtons21 = document.querySelector("#slick-slide02 > div:nth-child(1)");
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
     const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
     modal.classList.add('mmm');
     overlay21.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
     ModalImg0.src = `${pets[result6[17]].img}`
 
     let ModalName0 = document.querySelector('.modal-name');
     ModalName0.insertAdjacentText('afterbegin', `${pets[result6[17]].name}`);
 
     let ModalType0 = document.querySelector('.modal-type');
     ModalType0.insertAdjacentText('afterbegin', `${pets[result6[17]].type}`);
 
     let ModalBreed0 = document.querySelector('.modal-breed');
     ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[17]].breed}`);
 
     let ModalDesc0 = document.querySelector('.modal-description');
     ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[17]].description}`);
 
     let ModalAge0 = document.querySelector('.modal-age');
     ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[17]].age}`);
 
     let ModalInocul0 = document.querySelector('.modal-inoculations');
     ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[17]].inoculations}`);
 
     let ModalDiseases0 = document.querySelector('.modal-diseases');
     ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[17]].diseases}`);
 
     let ModalParas0 = document.querySelector('.modal-parasites');
     ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[17]].parasites}`);
   }
 
   function closeModal21() {
     modal.classList.remove('mmm');
     overlay21.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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
 
 
 
   const openModalButtons22 =document.querySelector("#slick-slide02 > div:nth-child(2)");
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
     modal.classList.add('mmm');
     overlay22.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
     ModalImg1.src = `${pets[result6[16]].img}`
 
     let ModalName1 = document.querySelector('.modal-name');
     ModalName1.insertAdjacentText('afterbegin', `${pets[result6[16]].name}`);
 
     let ModalType1 = document.querySelector('.modal-type');
     ModalType1.insertAdjacentText('afterbegin', `${pets[result6[16]].type}`);
 
     let ModalBreed1 = document.querySelector('.modal-breed');
     ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[16]].breed}`);
 
     let ModalDesc1 = document.querySelector('.modal-description');
     ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[16]].description}`);
 
     let ModalAge1 = document.querySelector('.modal-age');
     ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[16]].age}`);
 
     let ModalInocul1 = document.querySelector('.modal-inoculations');
     ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[16]].inoculations}`);
 
     let ModalDiseases1 = document.querySelector('.modal-diseases');
     ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[16]].diseases}`);
 
     let ModalParas1 = document.querySelector('.modal-parasites');
     ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[16]].parasites}`);
   }
 
   function closeModal22() {
     modal.classList.remove('mmm');
     overlay22.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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
 
 
 
   const openModalButtons23 = document.querySelector("#slick-slide02 > div:nth-child(3)");
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
     modal.classList.add('mmm');
     overlay23.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
     ModalImg2.src = `${pets[result6[15]].img}`
 
     let ModalName2 = document.querySelector('.modal-name');
     ModalName2.insertAdjacentText('afterbegin', `${pets[result6[15]].name}`);
 
     let ModalType2 = document.querySelector('.modal-type');
     ModalType2.insertAdjacentText('afterbegin', `${pets[result6[15]].type}`);
 
     let ModalBreed2 = document.querySelector('.modal-breed');
     ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[15]].breed}`);
 
     let ModalDesc2 = document.querySelector('.modal-description');
     ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[15]].description}`);
 
     let ModalAge2 = document.querySelector('.modal-age');
     ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[15]].age}`);
 
     let ModalInocul2 = document.querySelector('.modal-inoculations');
     ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[15]].inoculations}`);
 
     let ModalDiseases2 = document.querySelector('.modal-diseases');
     ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[15]].diseases}`);
 
     let ModalParas2 = document.querySelector('.modal-parasites');
     ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[15]].parasites}`);
   }
 
   function closeModal23() {
     modal.classList.remove('mmm');
     overlay23.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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
 
 
 
   const openModalButtons24 = document.querySelector("#slick-slide02 > div:nth-child(4)");
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
     modal.classList.add('mmm');
     overlay24.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg3 = document.querySelector("#modal > div.modal-img > img");
     ModalImg3.src = `${pets[result6[14]].img}`
 
     let ModalName3 = document.querySelector('.modal-name');
     ModalName3.insertAdjacentText('afterbegin', `${pets[result6[14]].name}`);
 
     let ModalType3 = document.querySelector('.modal-type');
     ModalType3.insertAdjacentText('afterbegin', `${pets[result6[14]].type}`);
 
     let ModalBreed3 = document.querySelector('.modal-breed');
     ModalBreed3.insertAdjacentText('afterbegin', `${pets[result6[14]].breed}`);
 
     let ModalDesc3 = document.querySelector('.modal-description');
     ModalDesc3.insertAdjacentText('afterbegin', `${pets[result6[14]].description}`);
 
     let ModalAge3 = document.querySelector('.modal-age');
     ModalAge3.insertAdjacentText('afterbegin', `${pets[result6[14]].age}`);
 
     let ModalInocul3 = document.querySelector('.modal-inoculations');
     ModalInocul3.insertAdjacentText('afterbegin', `${pets[result6[14]].inoculations}`);
 
     let ModalDiseases3 = document.querySelector('.modal-diseases');
     ModalDiseases3.insertAdjacentText('afterbegin', `${pets[result6[14]].diseases}`);
 
     let ModalParas3 = document.querySelector('.modal-parasites');
     ModalParas3.insertAdjacentText('afterbegin', `${pets[result6[14]].parasites}`);
   }
 
   function closeModal24() {
     modal.classList.remove('mmm');
     overlay24.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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
 
 
 
   const openModalButtons25 = document.querySelector("#slick-slide02 > div:nth-child(5)");
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
     modal.classList.add('mmm');
     overlay25.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg4 = document.querySelector("#modal > div.modal-img > img");
     ModalImg4.src = `${pets[result6[13]].img}`
 
     let ModalName4 = document.querySelector('.modal-name');
     ModalName4.insertAdjacentText('afterbegin', `${pets[result6[13]].name}`);
 
     let ModalType4 = document.querySelector('.modal-type');
     ModalType4.insertAdjacentText('afterbegin', `${pets[result6[13]].type}`);
 
     let ModalBreed4 = document.querySelector('.modal-breed');
     ModalBreed4.insertAdjacentText('afterbegin', `${pets[result6[13]].breed}`);
 
     let ModalDesc4 = document.querySelector('.modal-description');
     ModalDesc4.insertAdjacentText('afterbegin', `${pets[result6[13]].description}`);
 
     let ModalAge4 = document.querySelector('.modal-age');
     ModalAge4.insertAdjacentText('afterbegin', `${pets[result6[13]].age}`);
 
     let ModalInocul4 = document.querySelector('.modal-inoculations');
     ModalInocul4.insertAdjacentText('afterbegin', `${pets[result6[13]].inoculations}`);
 
     let ModalDiseases4 = document.querySelector('.modal-diseases');
     ModalDiseases4.insertAdjacentText('afterbegin', `${pets[result6[13]].diseases}`);
 
     let ModalParas4 = document.querySelector('.modal-parasites');
     ModalParas4.insertAdjacentText('afterbegin', `${pets[result6[13]].parasites}`);
   }
 
   function closeModal25() {
     modal.classList.remove('mmm');
     overlay25.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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
 
 
 
   const openModalButtons26 = document.querySelector("#slick-slide02 > div:nth-child(6)");
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
     modal.classList.add('mmm');
     overlay26.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg5 = document.querySelector("#modal > div.modal-img > img");
     ModalImg5.src = `${pets[result6[12]].img}`
 
     let ModalName5 = document.querySelector('.modal-name');
     ModalName5.insertAdjacentText('afterbegin', `${pets[result6[12]].name}`);
 
     let ModalType5 = document.querySelector('.modal-type');
     ModalType5.insertAdjacentText('afterbegin', `${pets[result6[12]].type}`);
 
     let ModalBreed5 = document.querySelector('.modal-breed');
     ModalBreed5.insertAdjacentText('afterbegin', `${pets[result6[12]].breed}`);
 
     let ModalDesc5 = document.querySelector('.modal-description');
     ModalDesc5.insertAdjacentText('afterbegin', `${pets[result6[12]].description}`);
 
     let ModalAge5 = document.querySelector('.modal-age');
     ModalAge5.insertAdjacentText('afterbegin', `${pets[result6[12]].age}`);
 
     let ModalInocul5 = document.querySelector('.modal-inoculations');
     ModalInocul5.insertAdjacentText('afterbegin', `${pets[result6[12]].inoculations}`);
 
     let ModalDiseases5 = document.querySelector('.modal-diseases');
     ModalDiseases5.insertAdjacentText('afterbegin', `${pets[result6[12]].diseases}`);
 
     let ModalParas5 = document.querySelector('.modal-parasites');
     ModalParas5.insertAdjacentText('afterbegin', `${pets[result6[12]].parasites}`);
   }
 
   function closeModal26() {
     modal.classList.remove('mmm');
     overlay26.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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


   // 44444444444444
   const openModalButtons31 = document.querySelector("#slick-slide03 > div:nth-child(1)");
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
     const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
     modal.classList.add('mmm');
     overlay31.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
     ModalImg0.src = `${pets[result6[23]].img}`
 
     let ModalName0 = document.querySelector('.modal-name');
     ModalName0.insertAdjacentText('afterbegin', `${pets[result6[23]].name}`);
 
     let ModalType0 = document.querySelector('.modal-type');
     ModalType0.insertAdjacentText('afterbegin', `${pets[result6[23]].type}`);
 
     let ModalBreed0 = document.querySelector('.modal-breed');
     ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[23]].breed}`);
 
     let ModalDesc0 = document.querySelector('.modal-description');
     ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[23]].description}`);
 
     let ModalAge0 = document.querySelector('.modal-age');
     ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[23]].age}`);
 
     let ModalInocul0 = document.querySelector('.modal-inoculations');
     ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[23]].inoculations}`);
 
     let ModalDiseases0 = document.querySelector('.modal-diseases');
     ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[23]].diseases}`);
 
     let ModalParas0 = document.querySelector('.modal-parasites');
     ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[23]].parasites}`);
   }
 
   function closeModal31() {
     modal.classList.remove('mmm');
     overlay31.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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
 
 
 
   const openModalButtons32 =document.querySelector("#slick-slide03 > div:nth-child(2)");
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
     modal.classList.add('mmm');
     overlay32.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
     ModalImg1.src = `${pets[result6[22]].img}`
 
     let ModalName1 = document.querySelector('.modal-name');
     ModalName1.insertAdjacentText('afterbegin', `${pets[result6[22]].name}`);
 
     let ModalType1 = document.querySelector('.modal-type');
     ModalType1.insertAdjacentText('afterbegin', `${pets[result6[22]].type}`);
 
     let ModalBreed1 = document.querySelector('.modal-breed');
     ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[22]].breed}`);
 
     let ModalDesc1 = document.querySelector('.modal-description');
     ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[22]].description}`);
 
     let ModalAge1 = document.querySelector('.modal-age');
     ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[22]].age}`);
 
     let ModalInocul1 = document.querySelector('.modal-inoculations');
     ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[22]].inoculations}`);
 
     let ModalDiseases1 = document.querySelector('.modal-diseases');
     ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[22]].diseases}`);
 
     let ModalParas1 = document.querySelector('.modal-parasites');
     ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[22]].parasites}`);
   }
 
   function closeModal32() {
     modal.classList.remove('mmm');
     overlay32.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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
 
 
 
   const openModalButtons33 = document.querySelector("#slick-slide03 > div:nth-child(3)");
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
     modal.classList.add('mmm');
     overlay33.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
     ModalImg2.src = `${pets[result6[21]].img}`
 
     let ModalName2 = document.querySelector('.modal-name');
     ModalName2.insertAdjacentText('afterbegin', `${pets[result6[21]].name}`);
 
     let ModalType2 = document.querySelector('.modal-type');
     ModalType2.insertAdjacentText('afterbegin', `${pets[result6[21]].type}`);
 
     let ModalBreed2 = document.querySelector('.modal-breed');
     ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[21]].breed}`);
 
     let ModalDesc2 = document.querySelector('.modal-description');
     ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[21]].description}`);
 
     let ModalAge2 = document.querySelector('.modal-age');
     ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[21]].age}`);
 
     let ModalInocul2 = document.querySelector('.modal-inoculations');
     ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[21]].inoculations}`);
 
     let ModalDiseases2 = document.querySelector('.modal-diseases');
     ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[21]].diseases}`);
 
     let ModalParas2 = document.querySelector('.modal-parasites');
     ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[21]].parasites}`);
   }
 
   function closeModal33() {
     modal.classList.remove('mmm');
     overlay33.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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
 
 
 
   const openModalButtons34 = document.querySelector("#slick-slide03 > div:nth-child(4)");
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
     modal.classList.add('mmm');
     overlay34.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg3 = document.querySelector("#modal > div.modal-img > img");
     ModalImg3.src = `${pets[result6[20]].img}`
 
     let ModalName3 = document.querySelector('.modal-name');
     ModalName3.insertAdjacentText('afterbegin', `${pets[result6[20]].name}`);
 
     let ModalType3 = document.querySelector('.modal-type');
     ModalType3.insertAdjacentText('afterbegin', `${pets[result6[20]].type}`);
 
     let ModalBreed3 = document.querySelector('.modal-breed');
     ModalBreed3.insertAdjacentText('afterbegin', `${pets[result6[20]].breed}`);
 
     let ModalDesc3 = document.querySelector('.modal-description');
     ModalDesc3.insertAdjacentText('afterbegin', `${pets[result6[20]].description}`);
 
     let ModalAge3 = document.querySelector('.modal-age');
     ModalAge3.insertAdjacentText('afterbegin', `${pets[result6[20]].age}`);
 
     let ModalInocul3 = document.querySelector('.modal-inoculations');
     ModalInocul3.insertAdjacentText('afterbegin', `${pets[result6[20]].inoculations}`);
 
     let ModalDiseases3 = document.querySelector('.modal-diseases');
     ModalDiseases3.insertAdjacentText('afterbegin', `${pets[result6[20]].diseases}`);
 
     let ModalParas3 = document.querySelector('.modal-parasites');
     ModalParas3.insertAdjacentText('afterbegin', `${pets[result6[20]].parasites}`);
   }
 
   function closeModal34() {
     modal.classList.remove('mmm');
     overlay34.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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
 
 
 
   const openModalButtons35 = document.querySelector("#slick-slide03 > div:nth-child(5)");
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
     modal.classList.add('mmm');
     overlay35.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg4 = document.querySelector("#modal > div.modal-img > img");
     ModalImg4.src = `${pets[result6[19]].img}`
 
     let ModalName4 = document.querySelector('.modal-name');
     ModalName4.insertAdjacentText('afterbegin', `${pets[result6[19]].name}`);
 
     let ModalType4 = document.querySelector('.modal-type');
     ModalType4.insertAdjacentText('afterbegin', `${pets[result6[19]].type}`);
 
     let ModalBreed4 = document.querySelector('.modal-breed');
     ModalBreed4.insertAdjacentText('afterbegin', `${pets[result6[19]].breed}`);
 
     let ModalDesc4 = document.querySelector('.modal-description');
     ModalDesc4.insertAdjacentText('afterbegin', `${pets[result6[19]].description}`);
 
     let ModalAge4 = document.querySelector('.modal-age');
     ModalAge4.insertAdjacentText('afterbegin', `${pets[result6[19]].age}`);
 
     let ModalInocul4 = document.querySelector('.modal-inoculations');
     ModalInocul4.insertAdjacentText('afterbegin', `${pets[result6[19]].inoculations}`);
 
     let ModalDiseases4 = document.querySelector('.modal-diseases');
     ModalDiseases4.insertAdjacentText('afterbegin', `${pets[result6[19]].diseases}`);
 
     let ModalParas4 = document.querySelector('.modal-parasites');
     ModalParas4.insertAdjacentText('afterbegin', `${pets[result6[19]].parasites}`);
   }
 
   function closeModal35() {
     modal.classList.remove('mmm');
     overlay35.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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
 
 
 
   const openModalButtons36 = document.querySelector("#slick-slide03 > div:nth-child(6)");
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
     modal.classList.add('mmm');
     overlay36.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg5 = document.querySelector("#modal > div.modal-img > img");
     ModalImg5.src = `${pets[result6[18]].img}`
 
     let ModalName5 = document.querySelector('.modal-name');
     ModalName5.insertAdjacentText('afterbegin', `${pets[result6[18]].name}`);
 
     let ModalType5 = document.querySelector('.modal-type');
     ModalType5.insertAdjacentText('afterbegin', `${pets[result6[18]].type}`);
 
     let ModalBreed5 = document.querySelector('.modal-breed');
     ModalBreed5.insertAdjacentText('afterbegin', `${pets[result6[18]].breed}`);
 
     let ModalDesc5 = document.querySelector('.modal-description');
     ModalDesc5.insertAdjacentText('afterbegin', `${pets[result6[18]].description}`);
 
     let ModalAge5 = document.querySelector('.modal-age');
     ModalAge5.insertAdjacentText('afterbegin', `${pets[result6[18]].age}`);
 
     let ModalInocul5 = document.querySelector('.modal-inoculations');
     ModalInocul5.insertAdjacentText('afterbegin', `${pets[result6[18]].inoculations}`);
 
     let ModalDiseases5 = document.querySelector('.modal-diseases');
     ModalDiseases5.insertAdjacentText('afterbegin', `${pets[result6[18]].diseases}`);
 
     let ModalParas5 = document.querySelector('.modal-parasites');
     ModalParas5.insertAdjacentText('afterbegin', `${pets[result6[18]].parasites}`);
   }
 
   function closeModal36() {
     modal.classList.remove('mmm');
     overlay36.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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


   // 5555555555555
   const openModalButtons41 = document.querySelector("#slick-slide04 > div:nth-child(1)");
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
     const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
     modal.classList.add('mmm');
     overlay41.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
     ModalImg0.src = `${pets[result6[29]].img}`
 
     let ModalName0 = document.querySelector('.modal-name');
     ModalName0.insertAdjacentText('afterbegin', `${pets[result6[29]].name}`);
 
     let ModalType0 = document.querySelector('.modal-type');
     ModalType0.insertAdjacentText('afterbegin', `${pets[result6[29]].type}`);
 
     let ModalBreed0 = document.querySelector('.modal-breed');
     ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[29]].breed}`);
 
     let ModalDesc0 = document.querySelector('.modal-description');
     ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[29]].description}`);
 
     let ModalAge0 = document.querySelector('.modal-age');
     ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[29]].age}`);
 
     let ModalInocul0 = document.querySelector('.modal-inoculations');
     ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[29]].inoculations}`);
 
     let ModalDiseases0 = document.querySelector('.modal-diseases');
     ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[29]].diseases}`);
 
     let ModalParas0 = document.querySelector('.modal-parasites');
     ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[29]].parasites}`);
   }
 
   function closeModal41() {
     modal.classList.remove('mmm');
     overlay41.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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
 
 
 
   const openModalButtons42 =document.querySelector("#slick-slide04 > div:nth-child(2)");
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
     modal.classList.add('mmm');
     overlay42.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
     ModalImg1.src = `${pets[result6[28]].img}`
 
     let ModalName1 = document.querySelector('.modal-name');
     ModalName1.insertAdjacentText('afterbegin', `${pets[result6[28]].name}`);
 
     let ModalType1 = document.querySelector('.modal-type');
     ModalType1.insertAdjacentText('afterbegin', `${pets[result6[28]].type}`);
 
     let ModalBreed1 = document.querySelector('.modal-breed');
     ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[28]].breed}`);
 
     let ModalDesc1 = document.querySelector('.modal-description');
     ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[28]].description}`);
 
     let ModalAge1 = document.querySelector('.modal-age');
     ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[28]].age}`);
 
     let ModalInocul1 = document.querySelector('.modal-inoculations');
     ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[28]].inoculations}`);
 
     let ModalDiseases1 = document.querySelector('.modal-diseases');
     ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[28]].diseases}`);
 
     let ModalParas1 = document.querySelector('.modal-parasites');
     ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[28]].parasites}`);
   }
 
   function closeModal42() {
     modal.classList.remove('mmm');
     overlay42.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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
 
 
 
   const openModalButtons43 = document.querySelector("#slick-slide04 > div:nth-child(3)");
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
     modal.classList.add('mmm');
     overlay43.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
     ModalImg2.src = `${pets[result6[27]].img}`
 
     let ModalName2 = document.querySelector('.modal-name');
     ModalName2.insertAdjacentText('afterbegin', `${pets[result6[27]].name}`);
 
     let ModalType2 = document.querySelector('.modal-type');
     ModalType2.insertAdjacentText('afterbegin', `${pets[result6[27]].type}`);
 
     let ModalBreed2 = document.querySelector('.modal-breed');
     ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[27]].breed}`);
 
     let ModalDesc2 = document.querySelector('.modal-description');
     ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[27]].description}`);
 
     let ModalAge2 = document.querySelector('.modal-age');
     ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[27]].age}`);
 
     let ModalInocul2 = document.querySelector('.modal-inoculations');
     ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[27]].inoculations}`);
 
     let ModalDiseases2 = document.querySelector('.modal-diseases');
     ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[27]].diseases}`);
 
     let ModalParas2 = document.querySelector('.modal-parasites');
     ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[27]].parasites}`);
   }
 
   function closeModal43() {
     modal.classList.remove('mmm');
     overlay43.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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
 
 
 
   const openModalButtons44 = document.querySelector("#slick-slide04 > div:nth-child(4)");
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
     modal.classList.add('mmm');
     overlay44.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg3 = document.querySelector("#modal > div.modal-img > img");
     ModalImg3.src = `${pets[result6[26]].img}`
 
     let ModalName3 = document.querySelector('.modal-name');
     ModalName3.insertAdjacentText('afterbegin', `${pets[result6[26]].name}`);
 
     let ModalType3 = document.querySelector('.modal-type');
     ModalType3.insertAdjacentText('afterbegin', `${pets[result6[26]].type}`);
 
     let ModalBreed3 = document.querySelector('.modal-breed');
     ModalBreed3.insertAdjacentText('afterbegin', `${pets[result6[26]].breed}`);
 
     let ModalDesc3 = document.querySelector('.modal-description');
     ModalDesc3.insertAdjacentText('afterbegin', `${pets[result6[26]].description}`);
 
     let ModalAge3 = document.querySelector('.modal-age');
     ModalAge3.insertAdjacentText('afterbegin', `${pets[result6[26]].age}`);
 
     let ModalInocul3 = document.querySelector('.modal-inoculations');
     ModalInocul3.insertAdjacentText('afterbegin', `${pets[result6[26]].inoculations}`);
 
     let ModalDiseases3 = document.querySelector('.modal-diseases');
     ModalDiseases3.insertAdjacentText('afterbegin', `${pets[result6[26]].diseases}`);
 
     let ModalParas3 = document.querySelector('.modal-parasites');
     ModalParas3.insertAdjacentText('afterbegin', `${pets[result6[26]].parasites}`);
   }
 
   function closeModal44() {
     modal.classList.remove('mmm');
     overlay44.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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
 
 
 
   const openModalButtons45 = document.querySelector("#slick-slide04 > div:nth-child(5)");
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
     modal.classList.add('mmm');
     overlay45.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg4 = document.querySelector("#modal > div.modal-img > img");
     ModalImg4.src = `${pets[result6[25]].img}`
 
     let ModalName4 = document.querySelector('.modal-name');
     ModalName4.insertAdjacentText('afterbegin', `${pets[result6[25]].name}`);
 
     let ModalType4 = document.querySelector('.modal-type');
     ModalType4.insertAdjacentText('afterbegin', `${pets[result6[25]].type}`);
 
     let ModalBreed4 = document.querySelector('.modal-breed');
     ModalBreed4.insertAdjacentText('afterbegin', `${pets[result6[25]].breed}`);
 
     let ModalDesc4 = document.querySelector('.modal-description');
     ModalDesc4.insertAdjacentText('afterbegin', `${pets[result6[25]].description}`);
 
     let ModalAge4 = document.querySelector('.modal-age');
     ModalAge4.insertAdjacentText('afterbegin', `${pets[result6[25]].age}`);
 
     let ModalInocul4 = document.querySelector('.modal-inoculations');
     ModalInocul4.insertAdjacentText('afterbegin', `${pets[result6[25]].inoculations}`);
 
     let ModalDiseases4 = document.querySelector('.modal-diseases');
     ModalDiseases4.insertAdjacentText('afterbegin', `${pets[result6[25]].diseases}`);
 
     let ModalParas4 = document.querySelector('.modal-parasites');
     ModalParas4.insertAdjacentText('afterbegin', `${pets[result6[25]].parasites}`);
   }
 
   function closeModal45() {
     modal.classList.remove('mmm');
     overlay45.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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
 
 
 
   const openModalButtons46 = document.querySelector("#slick-slide04 > div:nth-child(6)");
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
     modal.classList.add('mmm');
     overlay46.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg5 = document.querySelector("#modal > div.modal-img > img");
     ModalImg5.src = `${pets[result6[24]].img}`
 
     let ModalName5 = document.querySelector('.modal-name');
     ModalName5.insertAdjacentText('afterbegin', `${pets[result6[24]].name}`);
 
     let ModalType5 = document.querySelector('.modal-type');
     ModalType5.insertAdjacentText('afterbegin', `${pets[result6[24]].type}`);
 
     let ModalBreed5 = document.querySelector('.modal-breed');
     ModalBreed5.insertAdjacentText('afterbegin', `${pets[result6[24]].breed}`);
 
     let ModalDesc5 = document.querySelector('.modal-description');
     ModalDesc5.insertAdjacentText('afterbegin', `${pets[result6[24]].description}`);
 
     let ModalAge5 = document.querySelector('.modal-age');
     ModalAge5.insertAdjacentText('afterbegin', `${pets[result6[24]].age}`);
 
     let ModalInocul5 = document.querySelector('.modal-inoculations');
     ModalInocul5.insertAdjacentText('afterbegin', `${pets[result6[24]].inoculations}`);
 
     let ModalDiseases5 = document.querySelector('.modal-diseases');
     ModalDiseases5.insertAdjacentText('afterbegin', `${pets[result6[24]].diseases}`);
 
     let ModalParas5 = document.querySelector('.modal-parasites');
     ModalParas5.insertAdjacentText('afterbegin', `${pets[result6[24]].parasites}`);
   }
 
   function closeModal46() {
     modal.classList.remove('mmm');
     overlay46.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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


    // 6666666666666666
    const openModalButtons51 = document.querySelector("#slick-slide05 > div:nth-child(1)");
    const closeModalButtons51 = document.querySelector('.close-button');
    const overlay51 = document.getElementById('overlay');
  
    openModalButtons51.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal51();
      }
    });
  
    closeModalButtons51.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal51();
      }
    });
  
    overlay51.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal51();
      }
    });
  
    function openModal51() {
      const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
      modal.classList.add('mmm');
      overlay51.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
      ModalImg0.src = `${pets[result6[35]].img}`
  
      let ModalName0 = document.querySelector('.modal-name');
      ModalName0.insertAdjacentText('afterbegin', `${pets[result6[35]].name}`);
  
      let ModalType0 = document.querySelector('.modal-type');
      ModalType0.insertAdjacentText('afterbegin', `${pets[result6[35]].type}`);
  
      let ModalBreed0 = document.querySelector('.modal-breed');
      ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[35]].breed}`);
  
      let ModalDesc0 = document.querySelector('.modal-description');
      ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[35]].description}`);
  
      let ModalAge0 = document.querySelector('.modal-age');
      ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[35]].age}`);
  
      let ModalInocul0 = document.querySelector('.modal-inoculations');
      ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[35]].inoculations}`);
  
      let ModalDiseases0 = document.querySelector('.modal-diseases');
      ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[35]].diseases}`);
  
      let ModalParas0 = document.querySelector('.modal-parasites');
      ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[35]].parasites}`);
    }
  
    function closeModal51() {
      modal.classList.remove('mmm');
      overlay51.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons52 =document.querySelector("#slick-slide05 > div:nth-child(2)");
    const closeModalButtons52 = document.querySelector('.close-button');
    const overlay52 = document.getElementById('overlay');
  
    openModalButtons52.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal52();
      }
    });
  
    closeModalButtons52.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal52();
      }
    });
  
    overlay52.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal52();
      }
    });
  
    function openModal52() {
      modal.classList.add('mmm');
      overlay52.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
      ModalImg1.src = `${pets[result6[34]].img}`
  
      let ModalName1 = document.querySelector('.modal-name');
      ModalName1.insertAdjacentText('afterbegin', `${pets[result6[34]].name}`);
  
      let ModalType1 = document.querySelector('.modal-type');
      ModalType1.insertAdjacentText('afterbegin', `${pets[result6[34]].type}`);
  
      let ModalBreed1 = document.querySelector('.modal-breed');
      ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[34]].breed}`);
  
      let ModalDesc1 = document.querySelector('.modal-description');
      ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[34]].description}`);
  
      let ModalAge1 = document.querySelector('.modal-age');
      ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[34]].age}`);
  
      let ModalInocul1 = document.querySelector('.modal-inoculations');
      ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[34]].inoculations}`);
  
      let ModalDiseases1 = document.querySelector('.modal-diseases');
      ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[34]].diseases}`);
  
      let ModalParas1 = document.querySelector('.modal-parasites');
      ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[34]].parasites}`);
    }
  
    function closeModal52() {
      modal.classList.remove('mmm');
      overlay52.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons53 = document.querySelector("#slick-slide05 > div:nth-child(3)");
    const closeModalButtons53 = document.querySelector('.close-button');
    const overlay53 = document.getElementById('overlay');
  
    openModalButtons53.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal53();
      }
    });
  
    closeModalButtons53.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal53();
      }
    });
  
    overlay53.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal53();
      }
    });
  
    function openModal53() {
      modal.classList.add('mmm');
      overlay53.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
      ModalImg2.src = `${pets[result6[33]].img}`
  
      let ModalName2 = document.querySelector('.modal-name');
      ModalName2.insertAdjacentText('afterbegin', `${pets[result6[33]].name}`);
  
      let ModalType2 = document.querySelector('.modal-type');
      ModalType2.insertAdjacentText('afterbegin', `${pets[result6[33]].type}`);
  
      let ModalBreed2 = document.querySelector('.modal-breed');
      ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[33]].breed}`);
  
      let ModalDesc2 = document.querySelector('.modal-description');
      ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[33]].description}`);
  
      let ModalAge2 = document.querySelector('.modal-age');
      ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[33]].age}`);
  
      let ModalInocul2 = document.querySelector('.modal-inoculations');
      ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[33]].inoculations}`);
  
      let ModalDiseases2 = document.querySelector('.modal-diseases');
      ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[33]].diseases}`);
  
      let ModalParas2 = document.querySelector('.modal-parasites');
      ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[33]].parasites}`);
    }
  
    function closeModal53() {
      modal.classList.remove('mmm');
      overlay53.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons54 = document.querySelector("#slick-slide05 > div:nth-child(4)");
    const closeModalButtons54 = document.querySelector('.close-button');
    const overlay54 = document.getElementById('overlay');
  
    openModalButtons54.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal54();
      }
    });
  
    closeModalButtons54.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal54();
      }
    });
  
    overlay54.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal54();
      }
    });
  
    function openModal54() {
      modal.classList.add('mmm');
      overlay54.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg3 = document.querySelector("#modal > div.modal-img > img");
      ModalImg3.src = `${pets[result6[32]].img}`
  
      let ModalName3 = document.querySelector('.modal-name');
      ModalName3.insertAdjacentText('afterbegin', `${pets[result6[32]].name}`);
  
      let ModalType3 = document.querySelector('.modal-type');
      ModalType3.insertAdjacentText('afterbegin', `${pets[result6[32]].type}`);
  
      let ModalBreed3 = document.querySelector('.modal-breed');
      ModalBreed3.insertAdjacentText('afterbegin', `${pets[result6[32]].breed}`);
  
      let ModalDesc3 = document.querySelector('.modal-description');
      ModalDesc3.insertAdjacentText('afterbegin', `${pets[result6[32]].description}`);
  
      let ModalAge3 = document.querySelector('.modal-age');
      ModalAge3.insertAdjacentText('afterbegin', `${pets[result6[32]].age}`);
  
      let ModalInocul3 = document.querySelector('.modal-inoculations');
      ModalInocul3.insertAdjacentText('afterbegin', `${pets[result6[32]].inoculations}`);
  
      let ModalDiseases3 = document.querySelector('.modal-diseases');
      ModalDiseases3.insertAdjacentText('afterbegin', `${pets[result6[32]].diseases}`);
  
      let ModalParas3 = document.querySelector('.modal-parasites');
      ModalParas3.insertAdjacentText('afterbegin', `${pets[result6[32]].parasites}`);
    }
  
    function closeModal54() {
      modal.classList.remove('mmm');
      overlay54.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons55 = document.querySelector("#slick-slide05 > div:nth-child(5)");
    const closeModalButtons55 = document.querySelector('.close-button');
    const overlay55 = document.getElementById('overlay');
  
    openModalButtons55.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal55();
      }
    });
  
    closeModalButtons55.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal55();
      }
    });
  
    overlay55.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal55();
      }
    });
  
    function openModal55() {
      modal.classList.add('mmm');
      overlay55.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg4 = document.querySelector("#modal > div.modal-img > img");
      ModalImg4.src = `${pets[result6[31]].img}`
  
      let ModalName4 = document.querySelector('.modal-name');
      ModalName4.insertAdjacentText('afterbegin', `${pets[result6[31]].name}`);
  
      let ModalType4 = document.querySelector('.modal-type');
      ModalType4.insertAdjacentText('afterbegin', `${pets[result6[31]].type}`);
  
      let ModalBreed4 = document.querySelector('.modal-breed');
      ModalBreed4.insertAdjacentText('afterbegin', `${pets[result6[31]].breed}`);
  
      let ModalDesc4 = document.querySelector('.modal-description');
      ModalDesc4.insertAdjacentText('afterbegin', `${pets[result6[31]].description}`);
  
      let ModalAge4 = document.querySelector('.modal-age');
      ModalAge4.insertAdjacentText('afterbegin', `${pets[result6[31]].age}`);
  
      let ModalInocul4 = document.querySelector('.modal-inoculations');
      ModalInocul4.insertAdjacentText('afterbegin', `${pets[result6[31]].inoculations}`);
  
      let ModalDiseases4 = document.querySelector('.modal-diseases');
      ModalDiseases4.insertAdjacentText('afterbegin', `${pets[result6[31]].diseases}`);
  
      let ModalParas4 = document.querySelector('.modal-parasites');
      ModalParas4.insertAdjacentText('afterbegin', `${pets[result6[31]].parasites}`);
    }
  
    function closeModal55() {
      modal.classList.remove('mmm');
      overlay55.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons56 = document.querySelector("#slick-slide05 > div:nth-child(6)");
    const closeModalButtons56 = document.querySelector('.close-button');
    const overlay56 = document.getElementById('overlay');
  
    openModalButtons56.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal56();
      }
    });
  
    closeModalButtons56.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal56();
      }
    });
  
    overlay56.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal56();
      }
    });
  
    function openModal56() {
      modal.classList.add('mmm');
      overlay56.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg5 = document.querySelector("#modal > div.modal-img > img");
      ModalImg5.src = `${pets[result6[30]].img}`
  
      let ModalName5 = document.querySelector('.modal-name');
      ModalName5.insertAdjacentText('afterbegin', `${pets[result6[30]].name}`);
  
      let ModalType5 = document.querySelector('.modal-type');
      ModalType5.insertAdjacentText('afterbegin', `${pets[result6[30]].type}`);
  
      let ModalBreed5 = document.querySelector('.modal-breed');
      ModalBreed5.insertAdjacentText('afterbegin', `${pets[result6[30]].breed}`);
  
      let ModalDesc5 = document.querySelector('.modal-description');
      ModalDesc5.insertAdjacentText('afterbegin', `${pets[result6[30]].description}`);
  
      let ModalAge5 = document.querySelector('.modal-age');
      ModalAge5.insertAdjacentText('afterbegin', `${pets[result6[30]].age}`);
  
      let ModalInocul5 = document.querySelector('.modal-inoculations');
      ModalInocul5.insertAdjacentText('afterbegin', `${pets[result6[30]].inoculations}`);
  
      let ModalDiseases5 = document.querySelector('.modal-diseases');
      ModalDiseases5.insertAdjacentText('afterbegin', `${pets[result6[30]].diseases}`);
  
      let ModalParas5 = document.querySelector('.modal-parasites');
      ModalParas5.insertAdjacentText('afterbegin', `${pets[result6[30]].parasites}`);
    }
  
    function closeModal56() {
      modal.classList.remove('mmm');
      overlay56.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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


    // 777777777777777777
    const openModalButtons61 = document.querySelector("#slick-slide06 > div:nth-child(1)");
    const closeModalButtons61 = document.querySelector('.close-button');
    const overlay61 = document.getElementById('overlay');
  
    openModalButtons61.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal61();
      }
    });
  
    closeModalButtons61.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal61();
      }
    });
  
    overlay61.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal61();
      }
    });
  
    function openModal61() {
      const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
      modal.classList.add('mmm');
      overlay61.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
      ModalImg0.src = `${pets[result6[41]].img}`
  
      let ModalName0 = document.querySelector('.modal-name');
      ModalName0.insertAdjacentText('afterbegin', `${pets[result6[41]].name}`);
  
      let ModalType0 = document.querySelector('.modal-type');
      ModalType0.insertAdjacentText('afterbegin', `${pets[result6[41]].type}`);
  
      let ModalBreed0 = document.querySelector('.modal-breed');
      ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[41]].breed}`);
  
      let ModalDesc0 = document.querySelector('.modal-description');
      ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[41]].description}`);
  
      let ModalAge0 = document.querySelector('.modal-age');
      ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[41]].age}`);
  
      let ModalInocul0 = document.querySelector('.modal-inoculations');
      ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[41]].inoculations}`);
  
      let ModalDiseases0 = document.querySelector('.modal-diseases');
      ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[41]].diseases}`);
  
      let ModalParas0 = document.querySelector('.modal-parasites');
      ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[41]].parasites}`);
    }
  
    function closeModal61() {
      modal.classList.remove('mmm');
      overlay61.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons62 =document.querySelector("#slick-slide06 > div:nth-child(2)");
    const closeModalButtons62 = document.querySelector('.close-button');
    const overlay62 = document.getElementById('overlay');
  
    openModalButtons62.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal62();
      }
    });
  
    closeModalButtons62.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal62();
      }
    });
  
    overlay62.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal62();
      }
    });
  
    function openModal62() {
      modal.classList.add('mmm');
      overlay62.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
      ModalImg1.src = `${pets[result6[40]].img}`
  
      let ModalName1 = document.querySelector('.modal-name');
      ModalName1.insertAdjacentText('afterbegin', `${pets[result6[40]].name}`);
  
      let ModalType1 = document.querySelector('.modal-type');
      ModalType1.insertAdjacentText('afterbegin', `${pets[result6[40]].type}`);
  
      let ModalBreed1 = document.querySelector('.modal-breed');
      ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[40]].breed}`);
  
      let ModalDesc1 = document.querySelector('.modal-description');
      ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[40]].description}`);
  
      let ModalAge1 = document.querySelector('.modal-age');
      ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[40]].age}`);
  
      let ModalInocul1 = document.querySelector('.modal-inoculations');
      ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[40]].inoculations}`);
  
      let ModalDiseases1 = document.querySelector('.modal-diseases');
      ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[40]].diseases}`);
  
      let ModalParas1 = document.querySelector('.modal-parasites');
      ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[40]].parasites}`);
    }
  
    function closeModal62() {
      modal.classList.remove('mmm');
      overlay62.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons63 = document.querySelector("#slick-slide06 > div:nth-child(3)");
    const closeModalButtons63 = document.querySelector('.close-button');
    const overlay63 = document.getElementById('overlay');
  
    openModalButtons63.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal63();
      }
    });
  
    closeModalButtons63.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal63();
      }
    });
  
    overlay63.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal63();
      }
    });
  
    function openModal63() {
      modal.classList.add('mmm');
      overlay63.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
      ModalImg2.src = `${pets[result6[39]].img}`
  
      let ModalName2 = document.querySelector('.modal-name');
      ModalName2.insertAdjacentText('afterbegin', `${pets[result6[39]].name}`);
  
      let ModalType2 = document.querySelector('.modal-type');
      ModalType2.insertAdjacentText('afterbegin', `${pets[result6[39]].type}`);
  
      let ModalBreed2 = document.querySelector('.modal-breed');
      ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[39]].breed}`);
  
      let ModalDesc2 = document.querySelector('.modal-description');
      ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[39]].description}`);
  
      let ModalAge2 = document.querySelector('.modal-age');
      ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[39]].age}`);
  
      let ModalInocul2 = document.querySelector('.modal-inoculations');
      ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[39]].inoculations}`);
  
      let ModalDiseases2 = document.querySelector('.modal-diseases');
      ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[39]].diseases}`);
  
      let ModalParas2 = document.querySelector('.modal-parasites');
      ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[39]].parasites}`);
    }
  
    function closeModal63() {
      modal.classList.remove('mmm');
      overlay63.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons64 = document.querySelector("#slick-slide06 > div:nth-child(4)");
    const closeModalButtons64 = document.querySelector('.close-button');
    const overlay64 = document.getElementById('overlay');
  
    openModalButtons64.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal64();
      }
    });
  
    closeModalButtons64.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal64();
      }
    });
  
    overlay64.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal64();
      }
    });
  
    function openModal64() {
      modal.classList.add('mmm');
      overlay64.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg3 = document.querySelector("#modal > div.modal-img > img");
      ModalImg3.src = `${pets[result6[38]].img}`
  
      let ModalName3 = document.querySelector('.modal-name');
      ModalName3.insertAdjacentText('afterbegin', `${pets[result6[38]].name}`);
  
      let ModalType3 = document.querySelector('.modal-type');
      ModalType3.insertAdjacentText('afterbegin', `${pets[result6[38]].type}`);
  
      let ModalBreed3 = document.querySelector('.modal-breed');
      ModalBreed3.insertAdjacentText('afterbegin', `${pets[result6[38]].breed}`);
  
      let ModalDesc3 = document.querySelector('.modal-description');
      ModalDesc3.insertAdjacentText('afterbegin', `${pets[result6[38]].description}`);
  
      let ModalAge3 = document.querySelector('.modal-age');
      ModalAge3.insertAdjacentText('afterbegin', `${pets[result6[38]].age}`);
  
      let ModalInocul3 = document.querySelector('.modal-inoculations');
      ModalInocul3.insertAdjacentText('afterbegin', `${pets[result6[38]].inoculations}`);
  
      let ModalDiseases3 = document.querySelector('.modal-diseases');
      ModalDiseases3.insertAdjacentText('afterbegin', `${pets[result6[38]].diseases}`);
  
      let ModalParas3 = document.querySelector('.modal-parasites');
      ModalParas3.insertAdjacentText('afterbegin', `${pets[result6[38]].parasites}`);
    }
  
    function closeModal64() {
      modal.classList.remove('mmm');
      overlay64.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons65 = document.querySelector("#slick-slide06 > div:nth-child(5)");
    const closeModalButtons65 = document.querySelector('.close-button');
    const overlay65 = document.getElementById('overlay');
  
    openModalButtons65.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal65();
      }
    });
  
    closeModalButtons65.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal65();
      }
    });
  
    overlay65.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal65();
      }
    });
  
    function openModal65() {
      modal.classList.add('mmm');
      overlay65.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg4 = document.querySelector("#modal > div.modal-img > img");
      ModalImg4.src = `${pets[result6[37]].img}`
  
      let ModalName4 = document.querySelector('.modal-name');
      ModalName4.insertAdjacentText('afterbegin', `${pets[result6[37]].name}`);
  
      let ModalType4 = document.querySelector('.modal-type');
      ModalType4.insertAdjacentText('afterbegin', `${pets[result6[37]].type}`);
  
      let ModalBreed4 = document.querySelector('.modal-breed');
      ModalBreed4.insertAdjacentText('afterbegin', `${pets[result6[37]].breed}`);
  
      let ModalDesc4 = document.querySelector('.modal-description');
      ModalDesc4.insertAdjacentText('afterbegin', `${pets[result6[37]].description}`);
  
      let ModalAge4 = document.querySelector('.modal-age');
      ModalAge4.insertAdjacentText('afterbegin', `${pets[result6[37]].age}`);
  
      let ModalInocul4 = document.querySelector('.modal-inoculations');
      ModalInocul4.insertAdjacentText('afterbegin', `${pets[result6[37]].inoculations}`);
  
      let ModalDiseases4 = document.querySelector('.modal-diseases');
      ModalDiseases4.insertAdjacentText('afterbegin', `${pets[result6[37]].diseases}`);
  
      let ModalParas4 = document.querySelector('.modal-parasites');
      ModalParas4.insertAdjacentText('afterbegin', `${pets[result6[37]].parasites}`);
    }
  
    function closeModal65() {
      modal.classList.remove('mmm');
      overlay65.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons66 = document.querySelector("#slick-slide06 > div:nth-child(6)");
    const closeModalButtons66 = document.querySelector('.close-button');
    const overlay66 = document.getElementById('overlay');
  
    openModalButtons66.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal66();
      }
    });
  
    closeModalButtons66.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal66();
      }
    });
  
    overlay66.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal66();
      }
    });
  
    function openModal66() {
      modal.classList.add('mmm');
      overlay66.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg5 = document.querySelector("#modal > div.modal-img > img");
      ModalImg5.src = `${pets[result6[36]].img}`
  
      let ModalName5 = document.querySelector('.modal-name');
      ModalName5.insertAdjacentText('afterbegin', `${pets[result6[36]].name}`);
  
      let ModalType5 = document.querySelector('.modal-type');
      ModalType5.insertAdjacentText('afterbegin', `${pets[result6[36]].type}`);
  
      let ModalBreed5 = document.querySelector('.modal-breed');
      ModalBreed5.insertAdjacentText('afterbegin', `${pets[result6[36]].breed}`);
  
      let ModalDesc5 = document.querySelector('.modal-description');
      ModalDesc5.insertAdjacentText('afterbegin', `${pets[result6[36]].description}`);
  
      let ModalAge5 = document.querySelector('.modal-age');
      ModalAge5.insertAdjacentText('afterbegin', `${pets[result6[36]].age}`);
  
      let ModalInocul5 = document.querySelector('.modal-inoculations');
      ModalInocul5.insertAdjacentText('afterbegin', `${pets[result6[36]].inoculations}`);
  
      let ModalDiseases5 = document.querySelector('.modal-diseases');
      ModalDiseases5.insertAdjacentText('afterbegin', `${pets[result6[36]].diseases}`);
  
      let ModalParas5 = document.querySelector('.modal-parasites');
      ModalParas5.insertAdjacentText('afterbegin', `${pets[result6[36]].parasites}`);
    }
  
    function closeModal66() {
      modal.classList.remove('mmm');
      overlay66.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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


    // 8888888888888888
    const openModalButtons71 = document.querySelector("#slick-slide07 > div:nth-child(1)");
    const closeModalButtons71 = document.querySelector('.close-button');
    const overlay71 = document.getElementById('overlay');
  
    openModalButtons71.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal71();
      }
    });
  
    closeModalButtons71.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal71();
      }
    });
  
    overlay71.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal71();
      }
    });
  
    function openModal71() {
      const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
      modal.classList.add('mmm');
      overlay71.classList.add('mmm');
      body.classList.add('lock');
  
      
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
  
    function closeModal71() {
      modal.classList.remove('mmm');
      overlay71.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons72 =document.querySelector("#slick-slide07 > div:nth-child(2)");
    const closeModalButtons72 = document.querySelector('.close-button');
    const overlay72 = document.getElementById('overlay');
  
    openModalButtons72.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal72();
      }
    });
  
    closeModalButtons72.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal72();
      }
    });
  
    overlay72.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal72();
      }
    });
  
    function openModal72() {
      modal.classList.add('mmm');
      overlay72.classList.add('mmm');
      body.classList.add('lock');
  
      
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
  
    function closeModal72() {
      modal.classList.remove('mmm');
      overlay72.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons73 = document.querySelector("#slick-slide07 > div:nth-child(3)");
    const closeModalButtons73 = document.querySelector('.close-button');
    const overlay73 = document.getElementById('overlay');
  
    openModalButtons73.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal73();
      }
    });
  
    closeModalButtons73.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal73();
      }
    });
  
    overlay73.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal73();
      }
    });
  
    function openModal73() {
      modal.classList.add('mmm');
      overlay73.classList.add('mmm');
      body.classList.add('lock');
  
      
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
  
    function closeModal73() {
      modal.classList.remove('mmm');
      overlay73.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons74 = document.querySelector("#slick-slide07 > div:nth-child(4)");
    const closeModalButtons74 = document.querySelector('.close-button');
    const overlay74 = document.getElementById('overlay');
  
    openModalButtons74.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal74();
      }
    });
  
    closeModalButtons74.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal74();
      }
    });
  
    overlay74.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal74();
      }
    });
  
    function openModal74() {
      modal.classList.add('mmm');
      overlay74.classList.add('mmm');
      body.classList.add('lock');
  
      
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
  
    function closeModal74() {
      modal.classList.remove('mmm');
      overlay74.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons75 = document.querySelector("#slick-slide07 > div:nth-child(5)");
    const closeModalButtons75 = document.querySelector('.close-button');
    const overlay75 = document.getElementById('overlay');
  
    openModalButtons75.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal75();
      }
    });
  
    closeModalButtons75.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal75();
      }
    });
  
    overlay75.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal75();
      }
    });
  
    function openModal75() {
      modal.classList.add('mmm');
      overlay75.classList.add('mmm');
      body.classList.add('lock');
  
      
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
  
    function closeModal75() {
      modal.classList.remove('mmm');
      overlay75.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons76 = document.querySelector("#slick-slide07 > div:nth-child(6)");
    const closeModalButtons76 = document.querySelector('.close-button');
    const overlay76 = document.getElementById('overlay');
  
    openModalButtons76.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal76();
      }
    });
  
    closeModalButtons76.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal76();
      }
    });
  
    overlay76.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal76();
      }
    });
  
    function openModal76() {
      modal.classList.add('mmm');
      overlay76.classList.add('mmm');
      body.classList.add('lock');
  
      
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
  
    function closeModal76() {
      modal.classList.remove('mmm');
      overlay76.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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

  } else if(widthModal <= 642){
    // 111111111111111
  const openModalButtons01 = document.querySelector("#slick-slide00 > div:nth-child(1)");
  const closeModalButtons01 = document.querySelector('.close-button');
  const overlay01 = document.getElementById('overlay');

  openModalButtons01.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal01();
    }
  });

  closeModalButtons01.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal01();
    }
  });

  overlay01.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal01();
    }
  });

  function openModal01() {
    const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
    modal.classList.add('mmm');
    overlay01.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
    ModalImg0.src = `${pets[result6[2]].img}`

    let ModalName0 = document.querySelector('.modal-name');
    ModalName0.insertAdjacentText('afterbegin', `${pets[result6[2]].name}`);

    let ModalType0 = document.querySelector('.modal-type');
    ModalType0.insertAdjacentText('afterbegin', `${pets[result6[2]].type}`);

    let ModalBreed0 = document.querySelector('.modal-breed');
    ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[2]].breed}`);

    let ModalDesc0 = document.querySelector('.modal-description');
    ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[2]].description}`);

    let ModalAge0 = document.querySelector('.modal-age');
    ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[2]].age}`);

    let ModalInocul0 = document.querySelector('.modal-inoculations');
    ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[2]].inoculations}`);

    let ModalDiseases0 = document.querySelector('.modal-diseases');
    ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[2]].diseases}`);

    let ModalParas0 = document.querySelector('.modal-parasites');
    ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[2]].parasites}`);
  }

  function closeModal01() {
    modal.classList.remove('mmm');
    overlay01.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons02 =document.querySelector("#slick-slide00 > div:nth-child(2)");
  const closeModalButtons02 = document.querySelector('.close-button');
  const overlay02 = document.getElementById('overlay');

  openModalButtons02.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal02();
    }
  });

  closeModalButtons02.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal02();
    }
  });

  overlay02.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal02();
    }
  });

  function openModal02() {
    modal.classList.add('mmm');
    overlay02.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
    ModalImg1.src = `${pets[result6[1]].img}`

    let ModalName1 = document.querySelector('.modal-name');
    ModalName1.insertAdjacentText('afterbegin', `${pets[result6[1]].name}`);

    let ModalType1 = document.querySelector('.modal-type');
    ModalType1.insertAdjacentText('afterbegin', `${pets[result6[1]].type}`);

    let ModalBreed1 = document.querySelector('.modal-breed');
    ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[1]].breed}`);

    let ModalDesc1 = document.querySelector('.modal-description');
    ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[1]].description}`);

    let ModalAge1 = document.querySelector('.modal-age');
    ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[1]].age}`);

    let ModalInocul1 = document.querySelector('.modal-inoculations');
    ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[1]].inoculations}`);

    let ModalDiseases1 = document.querySelector('.modal-diseases');
    ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[1]].diseases}`);

    let ModalParas1 = document.querySelector('.modal-parasites');
    ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[1]].parasites}`);
  }

  function closeModal02() {
    modal.classList.remove('mmm');
    overlay02.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons03 = document.querySelector("#slick-slide00 > div:nth-child(3)");
  const closeModalButtons03 = document.querySelector('.close-button');
  const overlay03 = document.getElementById('overlay');

  openModalButtons03.addEventListener('click', () => {
    if (!modal.classList.contains('mmm')) {
      openModal03();
    }
  });

  closeModalButtons03.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal03();
    }
  });

  overlay03.addEventListener('click', () => {
    if (modal.classList.contains('mmm')) {
      closeModal03();
    }
  });

  function openModal03() {
    modal.classList.add('mmm');
    overlay03.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
    ModalImg2.src = `${pets[result6[0]].img}`

    let ModalName2 = document.querySelector('.modal-name');
    ModalName2.insertAdjacentText('afterbegin', `${pets[result6[0]].name}`);

    let ModalType2 = document.querySelector('.modal-type');
    ModalType2.insertAdjacentText('afterbegin', `${pets[result6[0]].type}`);

    let ModalBreed2 = document.querySelector('.modal-breed');
    ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[0]].breed}`);

    let ModalDesc2 = document.querySelector('.modal-description');
    ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[0]].description}`);

    let ModalAge2 = document.querySelector('.modal-age');
    ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[0]].age}`);

    let ModalInocul2 = document.querySelector('.modal-inoculations');
    ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[0]].inoculations}`);

    let ModalDiseases2 = document.querySelector('.modal-diseases');
    ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[0]].diseases}`);

    let ModalParas2 = document.querySelector('.modal-parasites');
    ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[0]].parasites}`);
  }

  function closeModal03() {
    modal.classList.remove('mmm');
    overlay03.classList.remove('mmm');
    body.classList.remove('lock');


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


  // 222222222222
  const openModalButtons11 = document.querySelector("#slick-slide01 > div:nth-child(1)");
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
    const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
    modal.classList.add('mmm');
    overlay11.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
    ModalImg0.src = `${pets[result6[5]].img}`

    let ModalName0 = document.querySelector('.modal-name');
    ModalName0.insertAdjacentText('afterbegin', `${pets[result6[5]].name}`);

    let ModalType0 = document.querySelector('.modal-type');
    ModalType0.insertAdjacentText('afterbegin', `${pets[result6[5]].type}`);

    let ModalBreed0 = document.querySelector('.modal-breed');
    ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[5]].breed}`);

    let ModalDesc0 = document.querySelector('.modal-description');
    ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[5]].description}`);

    let ModalAge0 = document.querySelector('.modal-age');
    ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[5]].age}`);

    let ModalInocul0 = document.querySelector('.modal-inoculations');
    ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[5]].inoculations}`);

    let ModalDiseases0 = document.querySelector('.modal-diseases');
    ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[5]].diseases}`);

    let ModalParas0 = document.querySelector('.modal-parasites');
    ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[5]].parasites}`);
  }

  function closeModal11() {
    modal.classList.remove('mmm');
    overlay11.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons12 =document.querySelector("#slick-slide01 > div:nth-child(2)");
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
    modal.classList.add('mmm');
    overlay12.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
    ModalImg1.src = `${pets[result6[4]].img}`

    let ModalName1 = document.querySelector('.modal-name');
    ModalName1.insertAdjacentText('afterbegin', `${pets[result6[4]].name}`);

    let ModalType1 = document.querySelector('.modal-type');
    ModalType1.insertAdjacentText('afterbegin', `${pets[result6[4]].type}`);

    let ModalBreed1 = document.querySelector('.modal-breed');
    ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[4]].breed}`);

    let ModalDesc1 = document.querySelector('.modal-description');
    ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[4]].description}`);

    let ModalAge1 = document.querySelector('.modal-age');
    ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[4]].age}`);

    let ModalInocul1 = document.querySelector('.modal-inoculations');
    ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[4]].inoculations}`);

    let ModalDiseases1 = document.querySelector('.modal-diseases');
    ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[4]].diseases}`);

    let ModalParas1 = document.querySelector('.modal-parasites');
    ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[4]].parasites}`);
  }

  function closeModal12() {
    modal.classList.remove('mmm');
    overlay12.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons13 = document.querySelector("#slick-slide01 > div:nth-child(3)");
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
    modal.classList.add('mmm');
    overlay13.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
    ModalImg2.src = `${pets[result6[3]].img}`

    let ModalName2 = document.querySelector('.modal-name');
    ModalName2.insertAdjacentText('afterbegin', `${pets[result6[3]].name}`);

    let ModalType2 = document.querySelector('.modal-type');
    ModalType2.insertAdjacentText('afterbegin', `${pets[result6[3]].type}`);

    let ModalBreed2 = document.querySelector('.modal-breed');
    ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[3]].breed}`);

    let ModalDesc2 = document.querySelector('.modal-description');
    ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[3]].description}`);

    let ModalAge2 = document.querySelector('.modal-age');
    ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[3]].age}`);

    let ModalInocul2 = document.querySelector('.modal-inoculations');
    ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[3]].inoculations}`);

    let ModalDiseases2 = document.querySelector('.modal-diseases');
    ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[3]].diseases}`);

    let ModalParas2 = document.querySelector('.modal-parasites');
    ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[3]].parasites}`);
  }

  function closeModal13() {
    modal.classList.remove('mmm');
    overlay13.classList.remove('mmm');
    body.classList.remove('lock');


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


  // 33333333333333
  const openModalButtons21 = document.querySelector("#slick-slide02 > div:nth-child(1)");
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
    const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
    modal.classList.add('mmm');
    overlay21.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
    ModalImg0.src = `${pets[result6[8]].img}`

    let ModalName0 = document.querySelector('.modal-name');
    ModalName0.insertAdjacentText('afterbegin', `${pets[result6[8]].name}`);

    let ModalType0 = document.querySelector('.modal-type');
    ModalType0.insertAdjacentText('afterbegin', `${pets[result6[8]].type}`);

    let ModalBreed0 = document.querySelector('.modal-breed');
    ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[8]].breed}`);

    let ModalDesc0 = document.querySelector('.modal-description');
    ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[8]].description}`);

    let ModalAge0 = document.querySelector('.modal-age');
    ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[8]].age}`);

    let ModalInocul0 = document.querySelector('.modal-inoculations');
    ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[8]].inoculations}`);

    let ModalDiseases0 = document.querySelector('.modal-diseases');
    ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[8]].diseases}`);

    let ModalParas0 = document.querySelector('.modal-parasites');
    ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[8]].parasites}`);
  }

  function closeModal21() {
    modal.classList.remove('mmm');
    overlay21.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons22 =document.querySelector("#slick-slide02 > div:nth-child(2)");
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
    modal.classList.add('mmm');
    overlay22.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
    ModalImg1.src = `${pets[result6[7]].img}`

    let ModalName1 = document.querySelector('.modal-name');
    ModalName1.insertAdjacentText('afterbegin', `${pets[result6[7]].name}`);

    let ModalType1 = document.querySelector('.modal-type');
    ModalType1.insertAdjacentText('afterbegin', `${pets[result6[7]].type}`);

    let ModalBreed1 = document.querySelector('.modal-breed');
    ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[7]].breed}`);

    let ModalDesc1 = document.querySelector('.modal-description');
    ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[7]].description}`);

    let ModalAge1 = document.querySelector('.modal-age');
    ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[7]].age}`);

    let ModalInocul1 = document.querySelector('.modal-inoculations');
    ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[7]].inoculations}`);

    let ModalDiseases1 = document.querySelector('.modal-diseases');
    ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[7]].diseases}`);

    let ModalParas1 = document.querySelector('.modal-parasites');
    ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[7]].parasites}`);
  }

  function closeModal22() {
    modal.classList.remove('mmm');
    overlay22.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons23 = document.querySelector("#slick-slide02 > div:nth-child(3)");
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
    modal.classList.add('mmm');
    overlay23.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
    ModalImg2.src = `${pets[result6[6]].img}`

    let ModalName2 = document.querySelector('.modal-name');
    ModalName2.insertAdjacentText('afterbegin', `${pets[result6[6]].name}`);

    let ModalType2 = document.querySelector('.modal-type');
    ModalType2.insertAdjacentText('afterbegin', `${pets[result6[6]].type}`);

    let ModalBreed2 = document.querySelector('.modal-breed');
    ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[6]].breed}`);

    let ModalDesc2 = document.querySelector('.modal-description');
    ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[6]].description}`);

    let ModalAge2 = document.querySelector('.modal-age');
    ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[6]].age}`);

    let ModalInocul2 = document.querySelector('.modal-inoculations');
    ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[6]].inoculations}`);

    let ModalDiseases2 = document.querySelector('.modal-diseases');
    ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[6]].diseases}`);

    let ModalParas2 = document.querySelector('.modal-parasites');
    ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[6]].parasites}`);
  }

  function closeModal23() {
    modal.classList.remove('mmm');
    overlay23.classList.remove('mmm');
    body.classList.remove('lock');


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


  // 44444444444444
  const openModalButtons31 = document.querySelector("#slick-slide03 > div:nth-child(1)");
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
    const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
    modal.classList.add('mmm');
    overlay31.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
    ModalImg0.src = `${pets[result6[11]].img}`

    let ModalName0 = document.querySelector('.modal-name');
    ModalName0.insertAdjacentText('afterbegin', `${pets[result6[11]].name}`);

    let ModalType0 = document.querySelector('.modal-type');
    ModalType0.insertAdjacentText('afterbegin', `${pets[result6[11]].type}`);

    let ModalBreed0 = document.querySelector('.modal-breed');
    ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[11]].breed}`);

    let ModalDesc0 = document.querySelector('.modal-description');
    ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[11]].description}`);

    let ModalAge0 = document.querySelector('.modal-age');
    ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[11]].age}`);

    let ModalInocul0 = document.querySelector('.modal-inoculations');
    ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[11]].inoculations}`);

    let ModalDiseases0 = document.querySelector('.modal-diseases');
    ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[11]].diseases}`);

    let ModalParas0 = document.querySelector('.modal-parasites');
    ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[11]].parasites}`);
  }

  function closeModal31() {
    modal.classList.remove('mmm');
    overlay31.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons32 =document.querySelector("#slick-slide03 > div:nth-child(2)");
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
    modal.classList.add('mmm');
    overlay32.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
    ModalImg1.src = `${pets[result6[10]].img}`

    let ModalName1 = document.querySelector('.modal-name');
    ModalName1.insertAdjacentText('afterbegin', `${pets[result6[10]].name}`);

    let ModalType1 = document.querySelector('.modal-type');
    ModalType1.insertAdjacentText('afterbegin', `${pets[result6[10]].type}`);

    let ModalBreed1 = document.querySelector('.modal-breed');
    ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[10]].breed}`);

    let ModalDesc1 = document.querySelector('.modal-description');
    ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[10]].description}`);

    let ModalAge1 = document.querySelector('.modal-age');
    ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[10]].age}`);

    let ModalInocul1 = document.querySelector('.modal-inoculations');
    ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[10]].inoculations}`);

    let ModalDiseases1 = document.querySelector('.modal-diseases');
    ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[10]].diseases}`);

    let ModalParas1 = document.querySelector('.modal-parasites');
    ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[10]].parasites}`);
  }

  function closeModal32() {
    modal.classList.remove('mmm');
    overla32.classList.remove('mmm');
    body.classList.remove('lock');


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



  const openModalButtons33 = document.querySelector("#slick-slide03 > div:nth-child(3)");
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
    modal.classList.add('mmm');
    overlay33.classList.add('mmm');
    body.classList.add('lock');

    
    let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
    ModalImg2.src = `${pets[result6[9]].img}`

    let ModalName2 = document.querySelector('.modal-name');
    ModalName2.insertAdjacentText('afterbegin', `${pets[result6[9]].name}`);

    let ModalType2 = document.querySelector('.modal-type');
    ModalType2.insertAdjacentText('afterbegin', `${pets[result6[9]].type}`);

    let ModalBreed2 = document.querySelector('.modal-breed');
    ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[9]].breed}`);

    let ModalDesc2 = document.querySelector('.modal-description');
    ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[9]].description}`);

    let ModalAge2 = document.querySelector('.modal-age');
    ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[9]].age}`);

    let ModalInocul2 = document.querySelector('.modal-inoculations');
    ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[9]].inoculations}`);

    let ModalDiseases2 = document.querySelector('.modal-diseases');
    ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[9]].diseases}`);

    let ModalParas2 = document.querySelector('.modal-parasites');
    ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[9]].parasites}`);
  }

  function closeModal33() {
    modal.classList.remove('mmm');
    overlay33.classList.remove('mmm');
    body.classList.remove('lock');


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


   // 555555555555555
   const openModalButtons41 = document.querySelector("#slick-slide04 > div:nth-child(1)");
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
     const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
     modal.classList.add('mmm');
     overlay41.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
     ModalImg0.src = `${pets[result6[14]].img}`
 
     let ModalName0 = document.querySelector('.modal-name');
     ModalName0.insertAdjacentText('afterbegin', `${pets[result6[14]].name}`);
 
     let ModalType0 = document.querySelector('.modal-type');
     ModalType0.insertAdjacentText('afterbegin', `${pets[result6[14]].type}`);
 
     let ModalBreed0 = document.querySelector('.modal-breed');
     ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[14]].breed}`);
 
     let ModalDesc0 = document.querySelector('.modal-description');
     ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[14]].description}`);
 
     let ModalAge0 = document.querySelector('.modal-age');
     ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[14]].age}`);
 
     let ModalInocul0 = document.querySelector('.modal-inoculations');
     ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[14]].inoculations}`);
 
     let ModalDiseases0 = document.querySelector('.modal-diseases');
     ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[14]].diseases}`);
 
     let ModalParas0 = document.querySelector('.modal-parasites');
     ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[14]].parasites}`);
   }
 
   function closeModal41() {
     modal.classList.remove('mmm');
     overlay41.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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
 
 
 
   const openModalButtons42 =document.querySelector("#slick-slide04 > div:nth-child(2)");
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
     modal.classList.add('mmm');
     overlay42.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
     ModalImg1.src = `${pets[result6[13]].img}`
 
     let ModalName1 = document.querySelector('.modal-name');
     ModalName1.insertAdjacentText('afterbegin', `${pets[result6[13]].name}`);
 
     let ModalType1 = document.querySelector('.modal-type');
     ModalType1.insertAdjacentText('afterbegin', `${pets[result6[13]].type}`);
 
     let ModalBreed1 = document.querySelector('.modal-breed');
     ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[13]].breed}`);
 
     let ModalDesc1 = document.querySelector('.modal-description');
     ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[13]].description}`);
 
     let ModalAge1 = document.querySelector('.modal-age');
     ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[13]].age}`);
 
     let ModalInocul1 = document.querySelector('.modal-inoculations');
     ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[13]].inoculations}`);
 
     let ModalDiseases1 = document.querySelector('.modal-diseases');
     ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[13]].diseases}`);
 
     let ModalParas1 = document.querySelector('.modal-parasites');
     ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[13]].parasites}`);
   }
 
   function closeModal42() {
     modal.classList.remove('mmm');
     overla42.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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
 
 
 
   const openModalButtons43 = document.querySelector("#slick-slide04 > div:nth-child(3)");
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
     modal.classList.add('mmm');
     overlay43.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
     ModalImg2.src = `${pets[result6[12]].img}`
 
     let ModalName2 = document.querySelector('.modal-name');
     ModalName2.insertAdjacentText('afterbegin', `${pets[result6[12]].name}`);
 
     let ModalType2 = document.querySelector('.modal-type');
     ModalType2.insertAdjacentText('afterbegin', `${pets[result6[12]].type}`);
 
     let ModalBreed2 = document.querySelector('.modal-breed');
     ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[12]].breed}`);
 
     let ModalDesc2 = document.querySelector('.modal-description');
     ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[12]].description}`);
 
     let ModalAge2 = document.querySelector('.modal-age');
     ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[12]].age}`);
 
     let ModalInocul2 = document.querySelector('.modal-inoculations');
     ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[12]].inoculations}`);
 
     let ModalDiseases2 = document.querySelector('.modal-diseases');
     ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[12]].diseases}`);
 
     let ModalParas2 = document.querySelector('.modal-parasites');
     ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[12]].parasites}`);
   }
 
   function closeModal43() {
     modal.classList.remove('mmm');
     overlay43.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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


   // 666666666666
   const openModalButtons51 = document.querySelector("#slick-slide05 > div:nth-child(1)");
   const closeModalButtons51 = document.querySelector('.close-button');
   const overlay51 = document.getElementById('overlay');
 
   openModalButtons51.addEventListener('click', () => {
     if (!modal.classList.contains('mmm')) {
       openModal51();
     }
   });
 
   closeModalButtons51.addEventListener('click', () => {
     if (modal.classList.contains('mmm')) {
       closeModal51();
     }
   });
 
   overlay51.addEventListener('click', () => {
     if (modal.classList.contains('mmm')) {
       closeModal51();
     }
   });
 
   function openModal51() {
     const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
     modal.classList.add('mmm');
     overlay51.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
     ModalImg0.src = `${pets[result6[17]].img}`
 
     let ModalName0 = document.querySelector('.modal-name');
     ModalName0.insertAdjacentText('afterbegin', `${pets[result6[17]].name}`);
 
     let ModalType0 = document.querySelector('.modal-type');
     ModalType0.insertAdjacentText('afterbegin', `${pets[result6[17]].type}`);
 
     let ModalBreed0 = document.querySelector('.modal-breed');
     ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[17]].breed}`);
 
     let ModalDesc0 = document.querySelector('.modal-description');
     ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[17]].description}`);
 
     let ModalAge0 = document.querySelector('.modal-age');
     ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[17]].age}`);
 
     let ModalInocul0 = document.querySelector('.modal-inoculations');
     ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[17]].inoculations}`);
 
     let ModalDiseases0 = document.querySelector('.modal-diseases');
     ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[17]].diseases}`);
 
     let ModalParas0 = document.querySelector('.modal-parasites');
     ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[17]].parasites}`);
   }
 
   function closeModal51() {
     modal.classList.remove('mmm');
     overlay51.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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
 
 
 
   const openModalButtons52 =document.querySelector("#slick-slide05 > div:nth-child(2)");
   const closeModalButtons52 = document.querySelector('.close-button');
   const overlay52 = document.getElementById('overlay');
 
   openModalButtons52.addEventListener('click', () => {
     if (!modal.classList.contains('mmm')) {
       openModal52();
     }
   });
 
   closeModalButtons52.addEventListener('click', () => {
     if (modal.classList.contains('mmm')) {
       closeModal52();
     }
   });
 
   overlay52.addEventListener('click', () => {
     if (modal.classList.contains('mmm')) {
       closeModal52();
     }
   });
 
   function openModal52() {
     modal.classList.add('mmm');
     overlay52.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
     ModalImg1.src = `${pets[result6[16]].img}`
 
     let ModalName1 = document.querySelector('.modal-name');
     ModalName1.insertAdjacentText('afterbegin', `${pets[result6[16]].name}`);
 
     let ModalType1 = document.querySelector('.modal-type');
     ModalType1.insertAdjacentText('afterbegin', `${pets[result6[16]].type}`);
 
     let ModalBreed1 = document.querySelector('.modal-breed');
     ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[16]].breed}`);
 
     let ModalDesc1 = document.querySelector('.modal-description');
     ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[16]].description}`);
 
     let ModalAge1 = document.querySelector('.modal-age');
     ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[16]].age}`);
 
     let ModalInocul1 = document.querySelector('.modal-inoculations');
     ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[16]].inoculations}`);
 
     let ModalDiseases1 = document.querySelector('.modal-diseases');
     ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[16]].diseases}`);
 
     let ModalParas1 = document.querySelector('.modal-parasites');
     ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[16]].parasites}`);
   }
 
   function closeModal52() {
     modal.classList.remove('mmm');
     overla52.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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
 
 
 
   const openModalButtons53 = document.querySelector("#slick-slide05 > div:nth-child(3)");
   const closeModalButtons53 = document.querySelector('.close-button');
   const overlay53 = document.getElementById('overlay');
 
   openModalButtons53.addEventListener('click', () => {
     if (!modal.classList.contains('mmm')) {
       openModal53();
     }
   });
 
   closeModalButtons53.addEventListener('click', () => {
     if (modal.classList.contains('mmm')) {
       closeModal53();
     }
   });
 
   overlay53.addEventListener('click', () => {
     if (modal.classList.contains('mmm')) {
       closeModal53();
     }
   });
 
   function openModal53() {
     modal.classList.add('mmm');
     overlay53.classList.add('mmm');
     body.classList.add('lock');
 
     
     let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
     ModalImg2.src = `${pets[result6[15]].img}`
 
     let ModalName2 = document.querySelector('.modal-name');
     ModalName2.insertAdjacentText('afterbegin', `${pets[result6[15]].name}`);
 
     let ModalType2 = document.querySelector('.modal-type');
     ModalType2.insertAdjacentText('afterbegin', `${pets[result6[15]].type}`);
 
     let ModalBreed2 = document.querySelector('.modal-breed');
     ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[15]].breed}`);
 
     let ModalDesc2 = document.querySelector('.modal-description');
     ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[15]].description}`);
 
     let ModalAge2 = document.querySelector('.modal-age');
     ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[15]].age}`);
 
     let ModalInocul2 = document.querySelector('.modal-inoculations');
     ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[15]].inoculations}`);
 
     let ModalDiseases2 = document.querySelector('.modal-diseases');
     ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[15]].diseases}`);
 
     let ModalParas2 = document.querySelector('.modal-parasites');
     ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[15]].parasites}`);
   }
 
   function closeModal53() {
     modal.classList.remove('mmm');
     overlay53.classList.remove('mmm');
     body.classList.remove('lock');
 
 
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


    // 777777777777777777
    const openModalButtons61 = document.querySelector("#slick-slide06 > div:nth-child(1)");
    const closeModalButtons61 = document.querySelector('.close-button');
    const overlay61 = document.getElementById('overlay');
  
    openModalButtons61.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal61();
      }
    });
  
    closeModalButtons61.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal61();
      }
    });
  
    overlay61.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal61();
      }
    });
  
    function openModal61() {
      const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
      modal.classList.add('mmm');
      overlay61.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
      ModalImg0.src = `${pets[result6[20]].img}`
  
      let ModalName0 = document.querySelector('.modal-name');
      ModalName0.insertAdjacentText('afterbegin', `${pets[result6[20]].name}`);
  
      let ModalType0 = document.querySelector('.modal-type');
      ModalType0.insertAdjacentText('afterbegin', `${pets[result6[20]].type}`);
  
      let ModalBreed0 = document.querySelector('.modal-breed');
      ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[20]].breed}`);
  
      let ModalDesc0 = document.querySelector('.modal-description');
      ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[20]].description}`);
  
      let ModalAge0 = document.querySelector('.modal-age');
      ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[20]].age}`);
  
      let ModalInocul0 = document.querySelector('.modal-inoculations');
      ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[20]].inoculations}`);
  
      let ModalDiseases0 = document.querySelector('.modal-diseases');
      ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[20]].diseases}`);
  
      let ModalParas0 = document.querySelector('.modal-parasites');
      ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[20]].parasites}`);
    }
  
    function closeModal61() {
      modal.classList.remove('mmm');
      overlay61.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons62 =document.querySelector("#slick-slide06 > div:nth-child(2)");
    const closeModalButtons62 = document.querySelector('.close-button');
    const overlay62 = document.getElementById('overlay');
  
    openModalButtons62.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal62();
      }
    });
  
    closeModalButtons62.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal62();
      }
    });
  
    overlay62.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal62();
      }
    });
  
    function openModal62() {
      modal.classList.add('mmm');
      overlay62.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
      ModalImg1.src = `${pets[result6[19]].img}`
  
      let ModalName1 = document.querySelector('.modal-name');
      ModalName1.insertAdjacentText('afterbegin', `${pets[result6[19]].name}`);
  
      let ModalType1 = document.querySelector('.modal-type');
      ModalType1.insertAdjacentText('afterbegin', `${pets[result6[19]].type}`);
  
      let ModalBreed1 = document.querySelector('.modal-breed');
      ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[19]].breed}`);
  
      let ModalDesc1 = document.querySelector('.modal-description');
      ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[19]].description}`);
  
      let ModalAge1 = document.querySelector('.modal-age');
      ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[19]].age}`);
  
      let ModalInocul1 = document.querySelector('.modal-inoculations');
      ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[19]].inoculations}`);
  
      let ModalDiseases1 = document.querySelector('.modal-diseases');
      ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[19]].diseases}`);
  
      let ModalParas1 = document.querySelector('.modal-parasites');
      ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[19]].parasites}`);
    }
  
    function closeModal62() {
      modal.classList.remove('mmm');
      overla62.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons63 = document.querySelector("#slick-slide06 > div:nth-child(3)");
    const closeModalButtons63 = document.querySelector('.close-button');
    const overlay63 = document.getElementById('overlay');
  
    openModalButtons63.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal63();
      }
    });
  
    closeModalButtons63.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal63();
      }
    });
  
    overlay63.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal63();
      }
    });
  
    function openModal63() {
      modal.classList.add('mmm');
      overlay63.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
      ModalImg2.src = `${pets[result6[18]].img}`
  
      let ModalName2 = document.querySelector('.modal-name');
      ModalName2.insertAdjacentText('afterbegin', `${pets[result6[18]].name}`);
  
      let ModalType2 = document.querySelector('.modal-type');
      ModalType2.insertAdjacentText('afterbegin', `${pets[result6[18]].type}`);
  
      let ModalBreed2 = document.querySelector('.modal-breed');
      ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[18]].breed}`);
  
      let ModalDesc2 = document.querySelector('.modal-description');
      ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[18]].description}`);
  
      let ModalAge2 = document.querySelector('.modal-age');
      ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[18]].age}`);
  
      let ModalInocul2 = document.querySelector('.modal-inoculations');
      ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[18]].inoculations}`);
  
      let ModalDiseases2 = document.querySelector('.modal-diseases');
      ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[18]].diseases}`);
  
      let ModalParas2 = document.querySelector('.modal-parasites');
      ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[18]].parasites}`);
    }
  
    function closeModal63() {
      modal.classList.remove('mmm');
      overlay63.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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


    // 8888888888
    const openModalButtons71 = document.querySelector("#slick-slide07 > div:nth-child(1)");
    const closeModalButtons71 = document.querySelector('.close-button');
    const overlay71 = document.getElementById('overlay');
  
    openModalButtons71.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal71();
      }
    });
  
    closeModalButtons71.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal71();
      }
    });
  
    overlay71.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal71();
      }
    });
  
    function openModal71() {
      const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
      modal.classList.add('mmm');
      overlay71.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
      ModalImg0.src = `${pets[result6[23]].img}`
  
      let ModalName0 = document.querySelector('.modal-name');
      ModalName0.insertAdjacentText('afterbegin', `${pets[result6[23]].name}`);
  
      let ModalType0 = document.querySelector('.modal-type');
      ModalType0.insertAdjacentText('afterbegin', `${pets[result6[23]].type}`);
  
      let ModalBreed0 = document.querySelector('.modal-breed');
      ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[23]].breed}`);
  
      let ModalDesc0 = document.querySelector('.modal-description');
      ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[23]].description}`);
  
      let ModalAge0 = document.querySelector('.modal-age');
      ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[23]].age}`);
  
      let ModalInocul0 = document.querySelector('.modal-inoculations');
      ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[23]].inoculations}`);
  
      let ModalDiseases0 = document.querySelector('.modal-diseases');
      ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[23]].diseases}`);
  
      let ModalParas0 = document.querySelector('.modal-parasites');
      ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[23]].parasites}`);
    }
  
    function closeModal71() {
      modal.classList.remove('mmm');
      overlay71.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons72 =document.querySelector("#slick-slide07 > div:nth-child(2)");
    const closeModalButtons72 = document.querySelector('.close-button');
    const overlay72 = document.getElementById('overlay');
  
    openModalButtons72.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal72();
      }
    });
  
    closeModalButtons72.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal72();
      }
    });
  
    overlay72.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal72();
      }
    });
  
    function openModal72() {
      modal.classList.add('mmm');
      overlay72.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
      ModalImg1.src = `${pets[result6[22]].img}`
  
      let ModalName1 = document.querySelector('.modal-name');
      ModalName1.insertAdjacentText('afterbegin', `${pets[result6[22]].name}`);
  
      let ModalType1 = document.querySelector('.modal-type');
      ModalType1.insertAdjacentText('afterbegin', `${pets[result6[22]].type}`);
  
      let ModalBreed1 = document.querySelector('.modal-breed');
      ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[22]].breed}`);
  
      let ModalDesc1 = document.querySelector('.modal-description');
      ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[22]].description}`);
  
      let ModalAge1 = document.querySelector('.modal-age');
      ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[22]].age}`);
  
      let ModalInocul1 = document.querySelector('.modal-inoculations');
      ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[22]].inoculations}`);
  
      let ModalDiseases1 = document.querySelector('.modal-diseases');
      ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[22]].diseases}`);
  
      let ModalParas1 = document.querySelector('.modal-parasites');
      ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[22]].parasites}`);
    }
  
    function closeModal72() {
      modal.classList.remove('mmm');
      overla72.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons73 = document.querySelector("#slick-slide07 > div:nth-child(3)");
    const closeModalButtons73 = document.querySelector('.close-button');
    const overlay73 = document.getElementById('overlay');
  
    openModalButtons73.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal73();
      }
    });
  
    closeModalButtons73.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal73();
      }
    });
  
    overlay73.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal73();
      }
    });
  
    function openModal73() {
      modal.classList.add('mmm');
      overlay73.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
      ModalImg2.src = `${pets[result6[21]].img}`
  
      let ModalName2 = document.querySelector('.modal-name');
      ModalName2.insertAdjacentText('afterbegin', `${pets[result6[21]].name}`);
  
      let ModalType2 = document.querySelector('.modal-type');
      ModalType2.insertAdjacentText('afterbegin', `${pets[result6[21]].type}`);
  
      let ModalBreed2 = document.querySelector('.modal-breed');
      ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[21]].breed}`);
  
      let ModalDesc2 = document.querySelector('.modal-description');
      ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[21]].description}`);
  
      let ModalAge2 = document.querySelector('.modal-age');
      ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[21]].age}`);
  
      let ModalInocul2 = document.querySelector('.modal-inoculations');
      ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[21]].inoculations}`);
  
      let ModalDiseases2 = document.querySelector('.modal-diseases');
      ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[21]].diseases}`);
  
      let ModalParas2 = document.querySelector('.modal-parasites');
      ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[21]].parasites}`);
    }
  
    function closeModal73() {
      modal.classList.remove('mmm');
      overlay73.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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


    // 99999999999
    const openModalButtons81 = document.querySelector("#slick-slide08 > div:nth-child(1)");
    const closeModalButtons81 = document.querySelector('.close-button');
    const overlay81 = document.getElementById('overlay');
  
    openModalButtons81.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal81();
      }
    });
  
    closeModalButtons81.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal81();
      }
    });
  
    overlay81.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal81();
      }
    });
  
    function openModal81() {
      const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
      modal.classList.add('mmm');
      overlay81.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
      ModalImg0.src = `${pets[result6[26]].img}`
  
      let ModalName0 = document.querySelector('.modal-name');
      ModalName0.insertAdjacentText('afterbegin', `${pets[result6[26]].name}`);
  
      let ModalType0 = document.querySelector('.modal-type');
      ModalType0.insertAdjacentText('afterbegin', `${pets[result6[26]].type}`);
  
      let ModalBreed0 = document.querySelector('.modal-breed');
      ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[26]].breed}`);
  
      let ModalDesc0 = document.querySelector('.modal-description');
      ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[26]].description}`);
  
      let ModalAge0 = document.querySelector('.modal-age');
      ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[26]].age}`);
  
      let ModalInocul0 = document.querySelector('.modal-inoculations');
      ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[26]].inoculations}`);
  
      let ModalDiseases0 = document.querySelector('.modal-diseases');
      ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[26]].diseases}`);
  
      let ModalParas0 = document.querySelector('.modal-parasites');
      ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[26]].parasites}`);
    }
  
    function closeModal81() {
      modal.classList.remove('mmm');
      overlay81.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons82 =document.querySelector("#slick-slide08 > div:nth-child(2)");
    const closeModalButtons82 = document.querySelector('.close-button');
    const overlay82 = document.getElementById('overlay');
  
    openModalButtons82.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal82();
      }
    });
  
    closeModalButtons82.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal82();
      }
    });
  
    overlay82.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal82();
      }
    });
  
    function openModal82() {
      modal.classList.add('mmm');
      overlay82.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
      ModalImg1.src = `${pets[result6[25]].img}`
  
      let ModalName1 = document.querySelector('.modal-name');
      ModalName1.insertAdjacentText('afterbegin', `${pets[result6[25]].name}`);
  
      let ModalType1 = document.querySelector('.modal-type');
      ModalType1.insertAdjacentText('afterbegin', `${pets[result6[25]].type}`);
  
      let ModalBreed1 = document.querySelector('.modal-breed');
      ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[25]].breed}`);
  
      let ModalDesc1 = document.querySelector('.modal-description');
      ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[25]].description}`);
  
      let ModalAge1 = document.querySelector('.modal-age');
      ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[25]].age}`);
  
      let ModalInocul1 = document.querySelector('.modal-inoculations');
      ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[25]].inoculations}`);
  
      let ModalDiseases1 = document.querySelector('.modal-diseases');
      ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[25]].diseases}`);
  
      let ModalParas1 = document.querySelector('.modal-parasites');
      ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[25]].parasites}`);
    }
  
    function closeModal82() {
      modal.classList.remove('mmm');
      overla82.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons83 = document.querySelector("#slick-slide08 > div:nth-child(3)");
    const closeModalButtons83 = document.querySelector('.close-button');
    const overlay83 = document.getElementById('overlay');
  
    openModalButtons83.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal83();
      }
    });
  
    closeModalButtons83.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal83();
      }
    });
  
    overlay83.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal83();
      }
    });
  
    function openModal83() {
      modal.classList.add('mmm');
      overlay83.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
      ModalImg2.src = `${pets[result6[24]].img}`
  
      let ModalName2 = document.querySelector('.modal-name');
      ModalName2.insertAdjacentText('afterbegin', `${pets[result6[24]].name}`);
  
      let ModalType2 = document.querySelector('.modal-type');
      ModalType2.insertAdjacentText('afterbegin', `${pets[result6[24]].type}`);
  
      let ModalBreed2 = document.querySelector('.modal-breed');
      ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[24]].breed}`);
  
      let ModalDesc2 = document.querySelector('.modal-description');
      ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[24]].description}`);
  
      let ModalAge2 = document.querySelector('.modal-age');
      ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[24]].age}`);
  
      let ModalInocul2 = document.querySelector('.modal-inoculations');
      ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[24]].inoculations}`);
  
      let ModalDiseases2 = document.querySelector('.modal-diseases');
      ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[24]].diseases}`);
  
      let ModalParas2 = document.querySelector('.modal-parasites');
      ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[24]].parasites}`);
    }
  
    function closeModal83() {
      modal.classList.remove('mmm');
      overlay83.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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



    // 10 10 10 10 10 10 10
    const openModalButtons91 = document.querySelector("#slick-slide09 > div:nth-child(1)");
    const closeModalButtons91 = document.querySelector('.close-button');
    const overlay91 = document.getElementById('overlay');
  
    openModalButtons91.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal91();
      }
    });
  
    closeModalButtons91.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal91();
      }
    });
  
    overlay91.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal91();
      }
    });
  
    function openModal91() {
      const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
      modal.classList.add('mmm');
      overlay91.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
      ModalImg0.src = `${pets[result6[29]].img}`
  
      let ModalName0 = document.querySelector('.modal-name');
      ModalName0.insertAdjacentText('afterbegin', `${pets[result6[29]].name}`);
  
      let ModalType0 = document.querySelector('.modal-type');
      ModalType0.insertAdjacentText('afterbegin', `${pets[result6[29]].type}`);
  
      let ModalBreed0 = document.querySelector('.modal-breed');
      ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[29]].breed}`);
  
      let ModalDesc0 = document.querySelector('.modal-description');
      ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[29]].description}`);
  
      let ModalAge0 = document.querySelector('.modal-age');
      ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[29]].age}`);
  
      let ModalInocul0 = document.querySelector('.modal-inoculations');
      ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[29]].inoculations}`);
  
      let ModalDiseases0 = document.querySelector('.modal-diseases');
      ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[29]].diseases}`);
  
      let ModalParas0 = document.querySelector('.modal-parasites');
      ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[29]].parasites}`);
    }
  
    function closeModal91() {
      modal.classList.remove('mmm');
      overlay91.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons92 =document.querySelector("#slick-slide09 > div:nth-child(2)");
    const closeModalButtons92 = document.querySelector('.close-button');
    const overlay92 = document.getElementById('overlay');
  
    openModalButtons92.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal92();
      }
    });
  
    closeModalButtons92.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal92();
      }
    });
  
    overlay92.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal92();
      }
    });
  
    function openModal92() {
      modal.classList.add('mmm');
      overlay92.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
      ModalImg1.src = `${pets[result6[28]].img}`
  
      let ModalName1 = document.querySelector('.modal-name');
      ModalName1.insertAdjacentText('afterbegin', `${pets[result6[28]].name}`);
  
      let ModalType1 = document.querySelector('.modal-type');
      ModalType1.insertAdjacentText('afterbegin', `${pets[result6[28]].type}`);
  
      let ModalBreed1 = document.querySelector('.modal-breed');
      ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[28]].breed}`);
  
      let ModalDesc1 = document.querySelector('.modal-description');
      ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[28]].description}`);
  
      let ModalAge1 = document.querySelector('.modal-age');
      ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[28]].age}`);
  
      let ModalInocul1 = document.querySelector('.modal-inoculations');
      ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[28]].inoculations}`);
  
      let ModalDiseases1 = document.querySelector('.modal-diseases');
      ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[28]].diseases}`);
  
      let ModalParas1 = document.querySelector('.modal-parasites');
      ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[28]].parasites}`);
    }
  
    function closeModal92() {
      modal.classList.remove('mmm');
      overla92.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons93 = document.querySelector("#slick-slide09 > div:nth-child(3)");
    const closeModalButtons93 = document.querySelector('.close-button');
    const overlay93 = document.getElementById('overlay');
  
    openModalButtons93.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal93();
      }
    });
  
    closeModalButtons93.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal93();
      }
    });
  
    overlay93.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal93();
      }
    });
  
    function openModal93() {
      modal.classList.add('mmm');
      overlay93.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
      ModalImg2.src = `${pets[result6[27]].img}`
  
      let ModalName2 = document.querySelector('.modal-name');
      ModalName2.insertAdjacentText('afterbegin', `${pets[result6[27]].name}`);
  
      let ModalType2 = document.querySelector('.modal-type');
      ModalType2.insertAdjacentText('afterbegin', `${pets[result6[27]].type}`);
  
      let ModalBreed2 = document.querySelector('.modal-breed');
      ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[27]].breed}`);
  
      let ModalDesc2 = document.querySelector('.modal-description');
      ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[27]].description}`);
  
      let ModalAge2 = document.querySelector('.modal-age');
      ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[27]].age}`);
  
      let ModalInocul2 = document.querySelector('.modal-inoculations');
      ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[27]].inoculations}`);
  
      let ModalDiseases2 = document.querySelector('.modal-diseases');
      ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[27]].diseases}`);
  
      let ModalParas2 = document.querySelector('.modal-parasites');
      ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[27]].parasites}`);
    }
  
    function closeModal93() {
      modal.classList.remove('mmm');
      overlay93.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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


    // 11 11 11 11 11 11
    const openModalButtons101 = document.querySelector("#slick-slide010 > div:nth-child(1)");
    const closeModalButtons101 = document.querySelector('.close-button');
    const overlay101 = document.getElementById('overlay');
  
    openModalButtons101.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal101();
      }
    });
  
    closeModalButtons101.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal101();
      }
    });
  
    overlay101.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal101();
      }
    });
  
    function openModal101() {
      const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
      modal.classList.add('mmm');
      overlay101.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
      ModalImg0.src = `${pets[result6[32]].img}`
  
      let ModalName0 = document.querySelector('.modal-name');
      ModalName0.insertAdjacentText('afterbegin', `${pets[result6[32]].name}`);
  
      let ModalType0 = document.querySelector('.modal-type');
      ModalType0.insertAdjacentText('afterbegin', `${pets[result6[32]].type}`);
  
      let ModalBreed0 = document.querySelector('.modal-breed');
      ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[32]].breed}`);
  
      let ModalDesc0 = document.querySelector('.modal-description');
      ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[32]].description}`);
  
      let ModalAge0 = document.querySelector('.modal-age');
      ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[32]].age}`);
  
      let ModalInocul0 = document.querySelector('.modal-inoculations');
      ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[32]].inoculations}`);
  
      let ModalDiseases0 = document.querySelector('.modal-diseases');
      ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[32]].diseases}`);
  
      let ModalParas0 = document.querySelector('.modal-parasites');
      ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[32]].parasites}`);
    }
  
    function closeModal101() {
      modal.classList.remove('mmm');
      overlay101.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons102 =document.querySelector("#slick-slide010 > div:nth-child(2)");
    const closeModalButtons102 = document.querySelector('.close-button');
    const overlay102 = document.getElementById('overlay');
  
    openModalButtons102.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal102();
      }
    });
  
    closeModalButtons102.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal102();
      }
    });
  
    overlay102.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal102();
      }
    });
  
    function openModal102() {
      modal.classList.add('mmm');
      overlay102.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
      ModalImg1.src = `${pets[result6[31]].img}`
  
      let ModalName1 = document.querySelector('.modal-name');
      ModalName1.insertAdjacentText('afterbegin', `${pets[result6[31]].name}`);
  
      let ModalType1 = document.querySelector('.modal-type');
      ModalType1.insertAdjacentText('afterbegin', `${pets[result6[31]].type}`);
  
      let ModalBreed1 = document.querySelector('.modal-breed');
      ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[31]].breed}`);
  
      let ModalDesc1 = document.querySelector('.modal-description');
      ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[31]].description}`);
  
      let ModalAge1 = document.querySelector('.modal-age');
      ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[31]].age}`);
  
      let ModalInocul1 = document.querySelector('.modal-inoculations');
      ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[31]].inoculations}`);
  
      let ModalDiseases1 = document.querySelector('.modal-diseases');
      ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[31]].diseases}`);
  
      let ModalParas1 = document.querySelector('.modal-parasites');
      ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[31]].parasites}`);
    }
  
    function closeModal102() {
      modal.classList.remove('mmm');
      overla102.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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
  
  
  
    const openModalButtons103 = document.querySelector("#slick-slide010 > div:nth-child(3)");
    const closeModalButtons103 = document.querySelector('.close-button');
    const overlay103 = document.getElementById('overlay');
  
    openModalButtons103.addEventListener('click', () => {
      if (!modal.classList.contains('mmm')) {
        openModal103();
      }
    });
  
    closeModalButtons103.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal103();
      }
    });
  
    overlay103.addEventListener('click', () => {
      if (modal.classList.contains('mmm')) {
        closeModal103();
      }
    });
  
    function openModal103() {
      modal.classList.add('mmm');
      overlay103.classList.add('mmm');
      body.classList.add('lock');
  
      
      let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
      ModalImg2.src = `${pets[result6[30]].img}`
  
      let ModalName2 = document.querySelector('.modal-name');
      ModalName2.insertAdjacentText('afterbegin', `${pets[result6[30]].name}`);
  
      let ModalType2 = document.querySelector('.modal-type');
      ModalType2.insertAdjacentText('afterbegin', `${pets[result6[30]].type}`);
  
      let ModalBreed2 = document.querySelector('.modal-breed');
      ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[30]].breed}`);
  
      let ModalDesc2 = document.querySelector('.modal-description');
      ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[30]].description}`);
  
      let ModalAge2 = document.querySelector('.modal-age');
      ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[30]].age}`);
  
      let ModalInocul2 = document.querySelector('.modal-inoculations');
      ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[30]].inoculations}`);
  
      let ModalDiseases2 = document.querySelector('.modal-diseases');
      ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[30]].diseases}`);
  
      let ModalParas2 = document.querySelector('.modal-parasites');
      ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[30]].parasites}`);
    }
  
    function closeModal103() {
      modal.classList.remove('mmm');
      overlay103.classList.remove('mmm');
      body.classList.remove('lock');
  
  
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


     // 12 12 12 12 12 12
     const openModalButtons111 = document.querySelector("#slick-slide011 > div:nth-child(1)");
     const closeModalButtons111 = document.querySelector('.close-button');
     const overlay111 = document.getElementById('overlay');
   
     openModalButtons111.addEventListener('click', () => {
       if (!modal.classList.contains('mmm')) {
         openModal111();
       }
     });
   
     closeModalButtons111.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal111();
       }
     });
   
     overlay111.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal111();
       }
     });
   
     function openModal111() {
       const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
       modal.classList.add('mmm');
       overlay111.classList.add('mmm');
       body.classList.add('lock');
   
       
       let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
       ModalImg0.src = `${pets[result6[35]].img}`
   
       let ModalName0 = document.querySelector('.modal-name');
       ModalName0.insertAdjacentText('afterbegin', `${pets[result6[35]].name}`);
   
       let ModalType0 = document.querySelector('.modal-type');
       ModalType0.insertAdjacentText('afterbegin', `${pets[result6[35]].type}`);
   
       let ModalBreed0 = document.querySelector('.modal-breed');
       ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[35]].breed}`);
   
       let ModalDesc0 = document.querySelector('.modal-description');
       ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[35]].description}`);
   
       let ModalAge0 = document.querySelector('.modal-age');
       ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[35]].age}`);
   
       let ModalInocul0 = document.querySelector('.modal-inoculations');
       ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[35]].inoculations}`);
   
       let ModalDiseases0 = document.querySelector('.modal-diseases');
       ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[35]].diseases}`);
   
       let ModalParas0 = document.querySelector('.modal-parasites');
       ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[35]].parasites}`);
     }
   
     function closeModal111() {
       modal.classList.remove('mmm');
       overlay111.classList.remove('mmm');
       body.classList.remove('lock');
   
   
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
   
   
   
     const openModalButtons112 =document.querySelector("#slick-slide011 > div:nth-child(2)");
     const closeModalButtons112 = document.querySelector('.close-button');
     const overlay112 = document.getElementById('overlay');
   
     openModalButtons112.addEventListener('click', () => {
       if (!modal.classList.contains('mmm')) {
         openModal112();
       }
     });
   
     closeModalButtons112.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal112();
       }
     });
   
     overlay112.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal112();
       }
     });
   
     function openModal112() {
       modal.classList.add('mmm');
       overlay112.classList.add('mmm');
       body.classList.add('lock');
   
       
       let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
       ModalImg1.src = `${pets[result6[34]].img}`
   
       let ModalName1 = document.querySelector('.modal-name');
       ModalName1.insertAdjacentText('afterbegin', `${pets[result6[34]].name}`);
   
       let ModalType1 = document.querySelector('.modal-type');
       ModalType1.insertAdjacentText('afterbegin', `${pets[result6[34]].type}`);
   
       let ModalBreed1 = document.querySelector('.modal-breed');
       ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[34]].breed}`);
   
       let ModalDesc1 = document.querySelector('.modal-description');
       ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[34]].description}`);
   
       let ModalAge1 = document.querySelector('.modal-age');
       ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[34]].age}`);
   
       let ModalInocul1 = document.querySelector('.modal-inoculations');
       ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[34]].inoculations}`);
   
       let ModalDiseases1 = document.querySelector('.modal-diseases');
       ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[34]].diseases}`);
   
       let ModalParas1 = document.querySelector('.modal-parasites');
       ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[34]].parasites}`);
     }
   
     function closeModal112() {
       modal.classList.remove('mmm');
       overla112.classList.remove('mmm');
       body.classList.remove('lock');
   
   
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
   
   
   
     const openModalButtons113 = document.querySelector("#slick-slide011 > div:nth-child(3)");
     const closeModalButtons113 = document.querySelector('.close-button');
     const overlay113 = document.getElementById('overlay');
   
     openModalButtons113.addEventListener('click', () => {
       if (!modal.classList.contains('mmm')) {
         openModal113();
       }
     });
   
     closeModalButtons113.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal113();
       }
     });
   
     overlay113.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal113();
       }
     });
   
     function openModal113() {
       modal.classList.add('mmm');
       overlay113.classList.add('mmm');
       body.classList.add('lock');
   
       
       let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
       ModalImg2.src = `${pets[result6[33]].img}`
   
       let ModalName2 = document.querySelector('.modal-name');
       ModalName2.insertAdjacentText('afterbegin', `${pets[result6[33]].name}`);
   
       let ModalType2 = document.querySelector('.modal-type');
       ModalType2.insertAdjacentText('afterbegin', `${pets[result6[33]].type}`);
   
       let ModalBreed2 = document.querySelector('.modal-breed');
       ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[33]].breed}`);
   
       let ModalDesc2 = document.querySelector('.modal-description');
       ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[33]].description}`);
   
       let ModalAge2 = document.querySelector('.modal-age');
       ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[33]].age}`);
   
       let ModalInocul2 = document.querySelector('.modal-inoculations');
       ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[33]].inoculations}`);
   
       let ModalDiseases2 = document.querySelector('.modal-diseases');
       ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[33]].diseases}`);
   
       let ModalParas2 = document.querySelector('.modal-parasites');
       ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[33]].parasites}`);
     }
   
     function closeModal113() {
       modal.classList.remove('mmm');
       overlay113.classList.remove('mmm');
       body.classList.remove('lock');
   
   
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


     // 13 13 13 13 13
     const openModalButtons121 = document.querySelector("#slick-slide012 > div:nth-child(1)");
     const closeModalButtons121 = document.querySelector('.close-button');
     const overlay121 = document.getElementById('overlay');
   
     openModalButtons121.addEventListener('click', () => {
       if (!modal.classList.contains('mmm')) {
         openModal121();
       }
     });
   
     closeModalButtons121.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal121();
       }
     });
   
     overlay121.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal121();
       }
     });
   
     function openModal121() {
       const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
       modal.classList.add('mmm');
       overlay121.classList.add('mmm');
       body.classList.add('lock');
   
       
       let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
       ModalImg0.src = `${pets[result6[38]].img}`
   
       let ModalName0 = document.querySelector('.modal-name');
       ModalName0.insertAdjacentText('afterbegin', `${pets[result6[38]].name}`);
   
       let ModalType0 = document.querySelector('.modal-type');
       ModalType0.insertAdjacentText('afterbegin', `${pets[result6[38]].type}`);
   
       let ModalBreed0 = document.querySelector('.modal-breed');
       ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[38]].breed}`);
   
       let ModalDesc0 = document.querySelector('.modal-description');
       ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[38]].description}`);
   
       let ModalAge0 = document.querySelector('.modal-age');
       ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[38]].age}`);
   
       let ModalInocul0 = document.querySelector('.modal-inoculations');
       ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[38]].inoculations}`);
   
       let ModalDiseases0 = document.querySelector('.modal-diseases');
       ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[38]].diseases}`);
   
       let ModalParas0 = document.querySelector('.modal-parasites');
       ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[38]].parasites}`);
     }
   
     function closeModal121() {
       modal.classList.remove('mmm');
       overlay121.classList.remove('mmm');
       body.classList.remove('lock');
   
   
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
   
   
   
     const openModalButtons122 =document.querySelector("#slick-slide012 > div:nth-child(2)");
     const closeModalButtons122 = document.querySelector('.close-button');
     const overlay122 = document.getElementById('overlay');
   
     openModalButtons122.addEventListener('click', () => {
       if (!modal.classList.contains('mmm')) {
         openModal122();
       }
     });
   
     closeModalButtons122.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal122();
       }
     });
   
     overlay122.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal122();
       }
     });
   
     function openModal122() {
       modal.classList.add('mmm');
       overlay122.classList.add('mmm');
       body.classList.add('lock');
   
       
       let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
       ModalImg1.src = `${pets[result6[37]].img}`
   
       let ModalName1 = document.querySelector('.modal-name');
       ModalName1.insertAdjacentText('afterbegin', `${pets[result6[37]].name}`);
   
       let ModalType1 = document.querySelector('.modal-type');
       ModalType1.insertAdjacentText('afterbegin', `${pets[result6[37]].type}`);
   
       let ModalBreed1 = document.querySelector('.modal-breed');
       ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[37]].breed}`);
   
       let ModalDesc1 = document.querySelector('.modal-description');
       ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[37]].description}`);
   
       let ModalAge1 = document.querySelector('.modal-age');
       ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[37]].age}`);
   
       let ModalInocul1 = document.querySelector('.modal-inoculations');
       ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[37]].inoculations}`);
   
       let ModalDiseases1 = document.querySelector('.modal-diseases');
       ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[37]].diseases}`);
   
       let ModalParas1 = document.querySelector('.modal-parasites');
       ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[37]].parasites}`);
     }
   
     function closeModal122() {
       modal.classList.remove('mmm');
       overla122.classList.remove('mmm');
       body.classList.remove('lock');
   
   
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
   
   
   
     const openModalButtons123 = document.querySelector("#slick-slide012 > div:nth-child(3)");
     const closeModalButtons123 = document.querySelector('.close-button');
     const overlay123 = document.getElementById('overlay');
   
     openModalButtons123.addEventListener('click', () => {
       if (!modal.classList.contains('mmm')) {
         openModal123();
       }
     });
   
     closeModalButtons123.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal123();
       }
     });
   
     overlay123.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal123();
       }
     });
   
     function openModal123() {
       modal.classList.add('mmm');
       overlay123.classList.add('mmm');
       body.classList.add('lock');
   
       
       let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
       ModalImg2.src = `${pets[result6[36]].img}`
   
       let ModalName2 = document.querySelector('.modal-name');
       ModalName2.insertAdjacentText('afterbegin', `${pets[result6[36]].name}`);
   
       let ModalType2 = document.querySelector('.modal-type');
       ModalType2.insertAdjacentText('afterbegin', `${pets[result6[36]].type}`);
   
       let ModalBreed2 = document.querySelector('.modal-breed');
       ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[36]].breed}`);
   
       let ModalDesc2 = document.querySelector('.modal-description');
       ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[36]].description}`);
   
       let ModalAge2 = document.querySelector('.modal-age');
       ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[36]].age}`);
   
       let ModalInocul2 = document.querySelector('.modal-inoculations');
       ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[36]].inoculations}`);
   
       let ModalDiseases2 = document.querySelector('.modal-diseases');
       ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[36]].diseases}`);
   
       let ModalParas2 = document.querySelector('.modal-parasites');
       ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[36]].parasites}`);
     }
   
     function closeModal123() {
       modal.classList.remove('mmm');
       overlay123.classList.remove('mmm');
       body.classList.remove('lock');
   
   
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


     // 14 14 14 14 14
     const openModalButtons131 = document.querySelector("#slick-slide013 > div:nth-child(1)");
     const closeModalButtons131 = document.querySelector('.close-button');
     const overlay131 = document.getElementById('overlay');
   
     openModalButtons131.addEventListener('click', () => {
       if (!modal.classList.contains('mmm')) {
         openModal131();
       }
     });
   
     closeModalButtons131.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal131();
       }
     });
   
     overlay131.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal131();
       }
     });
   
     function openModal131() {
       const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
       modal.classList.add('mmm');
       overlay131.classList.add('mmm');
       body.classList.add('lock');
   
       
       let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
       ModalImg0.src = `${pets[result6[41]].img}`
   
       let ModalName0 = document.querySelector('.modal-name');
       ModalName0.insertAdjacentText('afterbegin', `${pets[result6[41]].name}`);
   
       let ModalType0 = document.querySelector('.modal-type');
       ModalType0.insertAdjacentText('afterbegin', `${pets[result6[41]].type}`);
   
       let ModalBreed0 = document.querySelector('.modal-breed');
       ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[41]].breed}`);
   
       let ModalDesc0 = document.querySelector('.modal-description');
       ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[41]].description}`);
   
       let ModalAge0 = document.querySelector('.modal-age');
       ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[41]].age}`);
   
       let ModalInocul0 = document.querySelector('.modal-inoculations');
       ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[41]].inoculations}`);
   
       let ModalDiseases0 = document.querySelector('.modal-diseases');
       ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[41]].diseases}`);
   
       let ModalParas0 = document.querySelector('.modal-parasites');
       ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[41]].parasites}`);
     }
   
     function closeModal131() {
       modal.classList.remove('mmm');
       overlay131.classList.remove('mmm');
       body.classList.remove('lock');
   
   
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
   
   
   
     const openModalButtons132 =document.querySelector("#slick-slide013 > div:nth-child(2)");
     const closeModalButtons132 = document.querySelector('.close-button');
     const overlay132 = document.getElementById('overlay');
   
     openModalButtons132.addEventListener('click', () => {
       if (!modal.classList.contains('mmm')) {
         openModal132();
       }
     });
   
     closeModalButtons132.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal132();
       }
     });
   
     overlay132.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal132();
       }
     });
   
     function openModal132() {
       modal.classList.add('mmm');
       overlay132.classList.add('mmm');
       body.classList.add('lock');
   
       
       let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
       ModalImg1.src = `${pets[result6[40]].img}`
   
       let ModalName1 = document.querySelector('.modal-name');
       ModalName1.insertAdjacentText('afterbegin', `${pets[result6[40]].name}`);
   
       let ModalType1 = document.querySelector('.modal-type');
       ModalType1.insertAdjacentText('afterbegin', `${pets[result6[40]].type}`);
   
       let ModalBreed1 = document.querySelector('.modal-breed');
       ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[40]].breed}`);
   
       let ModalDesc1 = document.querySelector('.modal-description');
       ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[40]].description}`);
   
       let ModalAge1 = document.querySelector('.modal-age');
       ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[40]].age}`);
   
       let ModalInocul1 = document.querySelector('.modal-inoculations');
       ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[40]].inoculations}`);
   
       let ModalDiseases1 = document.querySelector('.modal-diseases');
       ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[40]].diseases}`);
   
       let ModalParas1 = document.querySelector('.modal-parasites');
       ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[40]].parasites}`);
     }
   
     function closeModal132() {
       modal.classList.remove('mmm');
       overla132.classList.remove('mmm');
       body.classList.remove('lock');
   
   
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
   
   
   
     const openModalButtons133 = document.querySelector("#slick-slide013 > div:nth-child(3)");
     const closeModalButtons133 = document.querySelector('.close-button');
     const overlay133 = document.getElementById('overlay');
   
     openModalButtons133.addEventListener('click', () => {
       if (!modal.classList.contains('mmm')) {
         openModal133();
       }
     });
   
     closeModalButtons133.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal133();
       }
     });
   
     overlay133.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal133();
       }
     });
   
     function openModal133() {
       modal.classList.add('mmm');
       overlay133.classList.add('mmm');
       body.classList.add('lock');
   
       
       let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
       ModalImg2.src = `${pets[result6[39]].img}`
   
       let ModalName2 = document.querySelector('.modal-name');
       ModalName2.insertAdjacentText('afterbegin', `${pets[result6[39]].name}`);
   
       let ModalType2 = document.querySelector('.modal-type');
       ModalType2.insertAdjacentText('afterbegin', `${pets[result6[39]].type}`);
   
       let ModalBreed2 = document.querySelector('.modal-breed');
       ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[39]].breed}`);
   
       let ModalDesc2 = document.querySelector('.modal-description');
       ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[39]].description}`);
   
       let ModalAge2 = document.querySelector('.modal-age');
       ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[39]].age}`);
   
       let ModalInocul2 = document.querySelector('.modal-inoculations');
       ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[39]].inoculations}`);
   
       let ModalDiseases2 = document.querySelector('.modal-diseases');
       ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[39]].diseases}`);
   
       let ModalParas2 = document.querySelector('.modal-parasites');
       ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[39]].parasites}`);
     }
   
     function closeModal133() {
       modal.classList.remove('mmm');
       overlay133.classList.remove('mmm');
       body.classList.remove('lock');
   
   
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


     // 15 15 15 15
     const openModalButtons141 = document.querySelector("#slick-slide014 > div:nth-child(1)");
     const closeModalButtons141 = document.querySelector('.close-button');
     const overlay141 = document.getElementById('overlay');
   
     openModalButtons141.addEventListener('click', () => {
       if (!modal.classList.contains('mmm')) {
         openModal141();
       }
     });
   
     closeModalButtons141.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal141();
       }
     });
   
     overlay141.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal141();
       }
     });
   
     function openModal141() {
       const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
       modal.classList.add('mmm');
       overlay141.classList.add('mmm');
       body.classList.add('lock');
   
       
       let ModalImg0 = document.querySelector("#modal > div.modal-img > img");
       ModalImg0.src = `${pets[result6[44]].img}`
   
       let ModalName0 = document.querySelector('.modal-name');
       ModalName0.insertAdjacentText('afterbegin', `${pets[result6[44]].name}`);
   
       let ModalType0 = document.querySelector('.modal-type');
       ModalType0.insertAdjacentText('afterbegin', `${pets[result6[44]].type}`);
   
       let ModalBreed0 = document.querySelector('.modal-breed');
       ModalBreed0.insertAdjacentText('afterbegin', `${pets[result6[44]].breed}`);
   
       let ModalDesc0 = document.querySelector('.modal-description');
       ModalDesc0.insertAdjacentText('afterbegin', `${pets[result6[44]].description}`);
   
       let ModalAge0 = document.querySelector('.modal-age');
       ModalAge0.insertAdjacentText('afterbegin', `${pets[result6[44]].age}`);
   
       let ModalInocul0 = document.querySelector('.modal-inoculations');
       ModalInocul0.insertAdjacentText('afterbegin', `${pets[result6[44]].inoculations}`);
   
       let ModalDiseases0 = document.querySelector('.modal-diseases');
       ModalDiseases0.insertAdjacentText('afterbegin', `${pets[result6[44]].diseases}`);
   
       let ModalParas0 = document.querySelector('.modal-parasites');
       ModalParas0.insertAdjacentText('afterbegin', `${pets[result6[44]].parasites}`);
     }
   
     function closeModal141() {
       modal.classList.remove('mmm');
       overlay141.classList.remove('mmm');
       body.classList.remove('lock');
   
   
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
   
   
   
     const openModalButtons142 =document.querySelector("#slick-slide014 > div:nth-child(2)");
     const closeModalButtons142 = document.querySelector('.close-button');
     const overlay142 = document.getElementById('overlay');
   
     openModalButtons142.addEventListener('click', () => {
       if (!modal.classList.contains('mmm')) {
         openModal142();
       }
     });
   
     closeModalButtons142.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal142();
       }
     });
   
     overlay142.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal142();
       }
     });
   
     function openModal142() {
       modal.classList.add('mmm');
       overlay142.classList.add('mmm');
       body.classList.add('lock');
   
       
       let ModalImg1 = document.querySelector("#modal > div.modal-img > img");
       ModalImg1.src = `${pets[result6[43]].img}`
   
       let ModalName1 = document.querySelector('.modal-name');
       ModalName1.insertAdjacentText('afterbegin', `${pets[result6[43]].name}`);
   
       let ModalType1 = document.querySelector('.modal-type');
       ModalType1.insertAdjacentText('afterbegin', `${pets[result6[43]].type}`);
   
       let ModalBreed1 = document.querySelector('.modal-breed');
       ModalBreed1.insertAdjacentText('afterbegin', `${pets[result6[43]].breed}`);
   
       let ModalDesc1 = document.querySelector('.modal-description');
       ModalDesc1.insertAdjacentText('afterbegin', `${pets[result6[43]].description}`);
   
       let ModalAge1 = document.querySelector('.modal-age');
       ModalAge1.insertAdjacentText('afterbegin', `${pets[result6[43]].age}`);
   
       let ModalInocul1 = document.querySelector('.modal-inoculations');
       ModalInocul1.insertAdjacentText('afterbegin', `${pets[result6[43]].inoculations}`);
   
       let ModalDiseases1 = document.querySelector('.modal-diseases');
       ModalDiseases1.insertAdjacentText('afterbegin', `${pets[result6[43]].diseases}`);
   
       let ModalParas1 = document.querySelector('.modal-parasites');
       ModalParas1.insertAdjacentText('afterbegin', `${pets[result6[43]].parasites}`);
     }
   
     function closeModal142() {
       modal.classList.remove('mmm');
       overla142.classList.remove('mmm');
       body.classList.remove('lock');
   
   
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
   
   
   
     const openModalButtons143 = document.querySelector("#slick-slide014 > div:nth-child(3)");
     const closeModalButtons143 = document.querySelector('.close-button');
     const overlay143 = document.getElementById('overlay');
   
     openModalButtons143.addEventListener('click', () => {
       if (!modal.classList.contains('mmm')) {
         openModal143();
       }
     });
   
     closeModalButtons143.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal143();
       }
     });
   
     overlay143.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal143();
       }
     });
   
     function openModal143() {
       modal.classList.add('mmm');
       overlay143.classList.add('mmm');
       body.classList.add('lock');
   
       
       let ModalImg2 = document.querySelector("#modal > div.modal-img > img");
       ModalImg2.src = `${pets[result6[42]].img}`
   
       let ModalName2 = document.querySelector('.modal-name');
       ModalName2.insertAdjacentText('afterbegin', `${pets[result6[42]].name}`);
   
       let ModalType2 = document.querySelector('.modal-type');
       ModalType2.insertAdjacentText('afterbegin', `${pets[result6[42]].type}`);
   
       let ModalBreed2 = document.querySelector('.modal-breed');
       ModalBreed2.insertAdjacentText('afterbegin', `${pets[result6[42]].breed}`);
   
       let ModalDesc2 = document.querySelector('.modal-description');
       ModalDesc2.insertAdjacentText('afterbegin', `${pets[result6[42]].description}`);
   
       let ModalAge2 = document.querySelector('.modal-age');
       ModalAge2.insertAdjacentText('afterbegin', `${pets[result6[42]].age}`);
   
       let ModalInocul2 = document.querySelector('.modal-inoculations');
       ModalInocul2.insertAdjacentText('afterbegin', `${pets[result6[42]].inoculations}`);
   
       let ModalDiseases2 = document.querySelector('.modal-diseases');
       ModalDiseases2.insertAdjacentText('afterbegin', `${pets[result6[42]].diseases}`);
   
       let ModalParas2 = document.querySelector('.modal-parasites');
       ModalParas2.insertAdjacentText('afterbegin', `${pets[result6[42]].parasites}`);
     }
   
     function closeModal143() {
       modal.classList.remove('mmm');
       overlay143.classList.remove('mmm');
       body.classList.remove('lock');
   
   
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


     // 16 16 1 6
     const openModalButtons151 = document.querySelector("#slick-slide015 > div:nth-child(1)");
     const closeModalButtons151 = document.querySelector('.close-button');
     const overlay151 = document.getElementById('overlay');
   
     openModalButtons151.addEventListener('click', () => {
       if (!modal.classList.contains('mmm')) {
         openModal151();
       }
     });
   
     closeModalButtons151.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal151();
       }
     });
   
     overlay151.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal151();
       }
     });
   
     function openModal151() {
       const closeBtnModal = document.querySelector("#modal > div.modal-content > button");
       modal.classList.add('mmm');
       overlay151.classList.add('mmm');
       body.classList.add('lock');
   
       
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
   
     function closeModal151() {
       modal.classList.remove('mmm');
       overlay151.classList.remove('mmm');
       body.classList.remove('lock');
   
   
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
   
   
   
     const openModalButtons152 =document.querySelector("#slick-slide015 > div:nth-child(2)");
     const closeModalButtons152 = document.querySelector('.close-button');
     const overlay152 = document.getElementById('overlay');
   
     openModalButtons152.addEventListener('click', () => {
       if (!modal.classList.contains('mmm')) {
         openModal152();
       }
     });
   
     closeModalButtons152.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal152();
       }
     });
   
     overlay152.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal152();
       }
     });
   
     function openModal152() {
       modal.classList.add('mmm');
       overlay152.classList.add('mmm');
       body.classList.add('lock');
   
       
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
   
     function closeModal152() {
       modal.classList.remove('mmm');
       overla152.classList.remove('mmm');
       body.classList.remove('lock');
   
   
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
   
   
   
     const openModalButtons153 = document.querySelector("#slick-slide015 > div:nth-child(3)");
     const closeModalButtons153 = document.querySelector('.close-button');
     const overlay153 = document.getElementById('overlay');
   
     openModalButtons153.addEventListener('click', () => {
       if (!modal.classList.contains('mmm')) {
         openModal153();
       }
     });
   
     closeModalButtons153.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal153();
       }
     });
   
     overlay153.addEventListener('click', () => {
       if (modal.classList.contains('mmm')) {
         closeModal153();
       }
     });
   
     function openModal153() {
       modal.classList.add('mmm');
       overlay153.classList.add('mmm');
       body.classList.add('lock');
   
       
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
   
     function closeModal153() {
       modal.classList.remove('mmm');
       overlay153.classList.remove('mmm');
       body.classList.remove('lock');
   
   
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


     



  }
}
monitoringWidthModal();
},330);