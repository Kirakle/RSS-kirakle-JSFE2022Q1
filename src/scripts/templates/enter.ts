import { TypePage } from '../types/enums';
import { CategoryFilterTypes } from '../types/interfaces';

export const templateSearchFilter = (activeFilters: CategoryFilterTypes): void => {
    const isSearch = <HTMLDivElement>document.querySelector('.search-container');
    const input = <HTMLInputElement>document.createElement('input');
    input.setAttribute('type', 'search');
    input.setAttribute('placeholder', 'Поиск по названию');
    input.setAttribute('class', 'input__search');
    input.setAttribute('autofocus', 'true');
    input.setAttribute('value', activeFilters.searchFilter as string);
    input.setAttribute('autocomplete', 'off');
    isSearch.appendChild(input);
};

export const templateHeader = (page: TypePage, countCart: number) => {
    const header = <HTMLDivElement>document.querySelector('.header-container');

    if (page === TypePage.filter) {
        const search: HTMLDivElement = document.createElement('div');
        search.classList.add('search-container');
        const searchConteiner = <HTMLDivElement>document.querySelector('.search-container');
        searchConteiner.appendChild(search);
    }

    const cart: HTMLDivElement = document.createElement('div');
    cart.classList.add('cart');
    cart.innerHTML = countCart.toString();
    header.appendChild(cart);
};

export const templateLayout: (html: string) => string = (html: string) => {
    return `
        <header class="header">
          <div class="header-container">
          <div class="header__logo">
              <a class="logo" href="#">
                <img class="logo__image" src="../../assets/images/logo.png"></img>
                <h1 class="logo__text">Online Store</h1>
              </a>       
          </div>
          </div>
        </header>
      ${html}
        <footer class="footer">
          <div class="author">Created by <a href="https://github.com/kirakle" target="blank">Slava Kviat</a></div>
          <div class="course"><a href="https://app.rs.school/" target="blank"></a></div>
        </footer>
    `;
};
