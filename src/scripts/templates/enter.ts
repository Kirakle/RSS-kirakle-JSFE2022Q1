import { TypePage } from '../types/enums';
import { CategoryFilterTypes } from '../types/interfaces';

export const templateSearchFilter = (activeFilters: CategoryFilterTypes): void => {
    const isSearch: HTMLElement = document.querySelector('.search-container');
    const input: HTMLElement = document.createElement('input');
    input.setAttribute('type', 'search');
    input.setAttribute('placeholder', 'Поиск по названию');
    input.setAttribute('class', 'input__search');
    input.setAttribute('autofocus', 'true');
    input.setAttribute('value', activeFilters.searchFilter as string);
    input.setAttribute('autocomplete', 'off');
    isSearch.appendChild(input);
};

export const templateHeader = (
    page: TypePage,
    countCart: number,
) => {
    const div: HTMLElement = document.querySelector('.header');
    const header: HTMLElement = document.createElement('div');
    header.classList.add('header-container');
    
    if (page === TypePage.filter) {
        const search: HTMLElement = document.createElement('div');
        search.classList.add('search-container');
        const searchConteiner: HTMLElement = document.querySelector('.search-container');
        searchConteiner.appendChild(search)
        
    }
    
    const cart: HTMLElement = document.createElement('div');
    cart.classList.add('cart');
    cart.innerHTML = countCart.toString();
    header.appendChild(cart);
    div.appendChild(header);
};

export const templateLayout: (html: string) => string = (html: string) => {
    return `
        <header class="header">
        </header>
      ${html}
        <footer class="footer__menu">
          <div class="author">Created by <a href="https://github.com/kirakle" target="blank">Slava Kviat</a></div>
          <div class="course"><a href="https://app.rs.school/" target="blank"></a></div>
        </footer>
    `;
};
