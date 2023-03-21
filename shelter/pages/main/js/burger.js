const burder = document.querySelector('.header-menu-burder'),
  headerMenu = document.querySelector('.header-menu'),
  body = document.querySelector('body'),
  buederMenu = document.querySelector('.header-menu-burder-burger-menu'),
  logo = document.querySelector('.header-logo'),
  headerWrapper = document.querySelector('.header-wrapper'),
  back = document.querySelector('.back');

burder.addEventListener('click', () => {
  if (!burder.classList.contains('xxx')) {
    burder.classList.add('xxx');
    headerMenu.classList.add('xxx');
    body.classList.add('lock');
    buederMenu.classList.add('xxx');
    logo.style.display = 'none';
    headerWrapper.style.marginTop = '37px';
    back.style.display = 'block';
  }
});

buederMenu.addEventListener('click', () => {
   if(buederMenu.classList.contains('xxx')) {
      burder.classList.remove('xxx');
      headerMenu.classList.remove('xxx');
      body.classList.remove('lock');
      buederMenu.classList.remove('xxx');
      logo.style.display = 'block';
      headerWrapper.style.marginTop = '0px';
      back.style.display = 'none';
   }
});

back.addEventListener('click', () => {
   if(buederMenu.classList.contains('xxx')) {
      burder.classList.remove('xxx');
      headerMenu.classList.remove('xxx');
      body.classList.remove('lock');
      buederMenu.classList.remove('xxx');
      logo.style.display = 'block';
      headerWrapper.style.marginTop = '0px';
      back.style.display = 'none';
   }
});