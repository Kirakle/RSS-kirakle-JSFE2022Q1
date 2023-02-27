import { ICardItem } from '../types/interfaces';

export const templateCardItem: (item: ICardItem, getLocal: string[]) => string = (
    item: ICardItem,
    getLocal: string[]
): string => {
    const div: HTMLElement = document.createElement('div');
    div.classList.add('card-item');
    const h2: HTMLElement = document.createElement('h2');
    h2.innerHTML = item.name;
    div.appendChild(h2);
    const content: HTMLElement = document.createElement('div');
    content.classList.add('item-content');
    div.appendChild(content);
    const description: HTMLElement = document.createElement('div');
    description.classList.add('item-description');
    content.appendChild(description);
    const count: HTMLElement = document.createElement('p');
    count.innerHTML = `Количество: ${item.count}`;
    description.appendChild(count);
    const year: HTMLElement = document.createElement('p');
    year.innerHTML = `Год выхода: ${item.year}`;
    description.appendChild(year);
    const manufacturer: HTMLElement = document.createElement('p');
    manufacturer.innerHTML = `Производитель: ${item.manufacturer}`;
    description.appendChild(manufacturer);
    const color: HTMLElement = document.createElement('p');
    color.innerHTML = `Цвет: ${item.color}`;
    description.appendChild(color);
    const camers: HTMLElement = document.createElement('p');
    camers.innerHTML = `Кол-во камер: ${item.camers}`;
    description.appendChild(camers);
    const popular: HTMLElement = document.createElement('p');
    popular.innerHTML = `Популярный: ${item.popular ? 'да' : 'нет'}`;
    description.appendChild(popular);
    const itemImg: HTMLElement = document.createElement('div');
    itemImg.classList.add('item-img');
    content.appendChild(itemImg);
    const img: HTMLElement = document.createElement('img');
    img.setAttribute('src', `assets/phones/${item.num}.png`);
    img.setAttribute('alt', item.num);
    itemImg.appendChild(img);
    content.appendChild(itemImg);
    const ribbon: HTMLElement = document.createElement('div');
    ribbon.classList.add('ribbon');
    if (getLocal.includes(item.num)) {
        ribbon.classList.add('true');
    }
    div.appendChild(ribbon);
    return div.outerHTML;
};

export const setCardItemListners: (cardItem: ICardItem[], set: (item: string) => void) => void = (
    cardItem: ICardItem[],
    set: (item: string) => void
): void => {
    const cards = document.querySelectorAll('.card-item');
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            set(cardItem[index].num);
        });
    });
};
