import { COLORS_FILTER, MANUFACTURER_FILTER, CAMERS_FILTER} from '../constants/filter-const';
import { Colors, Manufacturer, Camers, TypeFilter } from '../types/enums';
import { CategoryFilterType, CategoryFilterTypes } from '../types/interfaces';

type TemplateManufacturerFilterType = (activeFilters: CategoryFilterTypes) => string;
type TemplateColorsFilterType = (activeFilter: CategoryFilterTypes) => string;
type TemplateCamersFilterType = (activeFilter: CategoryFilterTypes) => string;
type TemplatePopularFilterType = (activeFilter: CategoryFilterTypes) => string;

const templateManufacturerFilter: TemplateManufacturerFilterType = (activeFilters: Record<TypeFilter, Manufacturer[]>) => {
    const ul: HTMLElement = document.createElement('ul');
    MANUFACTURER_FILTER.forEach((item) => {
        const li: HTMLElement = document.createElement('li');
        const img: HTMLElement = document.createElement('img');
        img.setAttribute('src', `assets/images/${item.image}`);
        if (activeFilters[TypeFilter.manufacturer].includes(item.type)) {
            li.classList.add('active');
        }
        li.classList.add('manufacturer-filter-item');
        li.appendChild(img);
        ul.appendChild(li);
    });
    return ul.outerHTML;
};

const templateColorsFilter: TemplateColorsFilterType = (activeFilters: Record<TypeFilter, Colors[]>): string => {
    const ul: HTMLElement = document.createElement('ul');
    COLORS_FILTER.forEach((item) => {
        const li: HTMLElement = document.createElement('li');
        li.style.background = item.bgColor;
        if (activeFilters[TypeFilter.colors].includes(item.type)) {
            li.classList.add('active');
        }
        li.classList.add('color-filter-item');
        ul.appendChild(li);
    });
    return ul.outerHTML;
};

const templateCamersFilter: TemplateCamersFilterType = (activeFilters: Record<TypeFilter, Camers[]>): string => {
    const ul: HTMLElement = document.createElement('ul');
    CAMERS_FILTER.forEach((item) => {
        const li: HTMLElement = document.createElement('li');
        li.id = item.class;
        if (activeFilters[TypeFilter.camers].includes(item.type)) {
            li.classList.add('active');
        }
        li.classList.add('cam-filter-item');
        ul.appendChild(li);
    });
    return ul.outerHTML;
};

const templatePopularFilter: TemplatePopularFilterType = (activeFilters: Record<TypeFilter, boolean>): string => {
    const div: HTMLElement = document.createElement('div');
    div.classList.add('popular-filter');
    const input: HTMLElement = document.createElement('input');
    input.id = 'popular-filter';
    input.setAttribute('type', 'checkbox');
    if (activeFilters[TypeFilter.popular]) {
        input.setAttribute('checked', 'checked');
    }

    div.appendChild(input);
    const label: HTMLElement = document.createElement('label');
    label.setAttribute('for', 'popular-filter');
    label.innerHTML = 'Только популярные:';
    div.appendChild(label);
    return div.outerHTML;
};

export const setFiltersListeners: (filter: (filtertype: TypeFilter, item: CategoryFilterType) => void) => void = (
    filter: (filtertype: TypeFilter, item: CategoryFilterType) => void
): void => {
    const manufacturer: NodeListOf<Element> = document.querySelectorAll('.manufacturer-filter-item');
    for (let i = 0; i < manufacturer.length; i = i + 1) {
        manufacturer[i].addEventListener('click', () => {
            filter(TypeFilter.manufacturer, MANUFACTURER_FILTER[i].type);
        });
    }
    const colors = document.querySelectorAll('.color-filter-item');
    for (let i = 0; i < colors.length; i = i + 1) {
        colors[i].addEventListener('click', () => {
            filter(TypeFilter.colors, COLORS_FILTER[i].type);
        });
    }
    const camers = document.querySelectorAll('.cam-filter-item');
    for (let i = 0; i < camers.length; i = i + 1) {
        camers[i].addEventListener('click', () => filter(TypeFilter.camers, CAMERS_FILTER[i].type));
    }
    const isPopular = document.querySelector('#popular-filter');
    isPopular.addEventListener('change', (e: Event) => {
        const target = e.target as HTMLInputElement;
        filter(TypeFilter.popular, target.checked);
    });
};

export const templateCartCount = (count: number): void => {
    const cart: HTMLTemplateElement = document.querySelector('.cart');
    cart.innerHTML = count.toString();
};

export const templateCartModal = (): string => {
    const div: HTMLElement = document.createElement('div');
    div.classList.add('cart-modal');
    const close: HTMLElement = document.createElement('div');
    close.classList.add('modal-close');
    const text: HTMLElement = document.createElement('div');
    text.innerHTML = 'Извините, все слоты заполнены!';
    div.appendChild(text);
    div.appendChild(close);
    return div.outerHTML;
};

export const setModalListeners = (): void => {
    const close: HTMLElement = document.querySelector('.modal-close');
    close.addEventListener('click', () => {
        const div: HTMLElement = document.querySelector('.cart-modal');
        div.classList.remove('show-modal');
    });
};

export const templateFilterPage: (activeFilter: CategoryFilterTypes) => string = (
    activeFilter: CategoryFilterTypes,
): string => {
    return `
        <main class="filter-page">
  
                <section class="filter__menu">
                    <div class="menu__value-filters">
                        <h2>Фильтры по значению</h2>
                        <div class="manufacturer">
                            <p>Производитель:</p>
                            ${templateManufacturerFilter(activeFilter)}
                        </div>
                        <div class="camers">
                            <p>Кол-во камер:</p>
                            ${templateCamersFilter(activeFilter)}
                        </div>
                        <div class="colors">
                            <p>Цвет:</p>
                            ${templateColorsFilter(activeFilter)}
                        </div>
                        ${templatePopularFilter(activeFilter)}
                    </div>
                    <div class="menu__range-filters">
                        <h2>Фильтры по диапазону</h2>
                        <p>Количество на складе:</p>
                        <div class="count-range__container">
                            <span class="count-min"></span>
                            <div id="slider-count"></div><span class="count-max"></span>
                        </div>
                        <p>Год выхода:</p>
                        <div class="year-range__container">
                            <span class="year-min"></span>
                            <div id="slider-year"></div><span class="year-max"></span>
                        </div>
                    </div>
                    <div class="menu__sort-type">
                        <h2>Поиск</h2>
                        <div id="searching" class ="search-container"></div>
                        <h2>Сортировка</h2>                     
                        <div class="reset-buttons">
                            <button id="reset-filter">Сбросить фильтры</button>
                            <button id="reset-storage">Сбросить настройки</button>
                        </div>
                        
                    </div>

                </section>
            <section class="filter__cards">
            </section>
            ${templateCartModal()}
        </main>
 `;
};
