import { TypePage } from '../types/enums';

export const templateHeader = (
    page: TypePage,
    countCart: number,
) => {
    const div: HTMLElement = document.querySelector('.header');
    const header: HTMLElement = document.createElement('div');
    header.classList.add('header-container');
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
        <footer class="footer">
          <div class="author">Created by <a href="https://github.com/kirakle" target="blank">Slava Kviat</a></div>
          <div class="course"><a href="https://app.rs.school/" target="blank"></a></div>
        </footer>
    `;
};
