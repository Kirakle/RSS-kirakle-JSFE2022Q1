import { COLORS_FILTER, MANUFACTURER_FILTER, CAMERS_FILTER, SORTS } from '../constants/filter-const';
import { Colors, Manufacturer, Camers, TypeFilter, TypeSort } from '../types/enums';
import { CategoryFilterType, CategoryFilterTypes } from '../types/interfaces';

type TemplateManufacturerFilterType = (
    activeFilters: Record<TypeFilter, Manufacturer[]> | CategoryFilterTypes
) => string;
type TemplateColorsFilterType = (activeFilter: Record<TypeFilter, Colors[]> | CategoryFilterTypes) => string;
type TemplateCamersFilterType = (activeFilter: Record<TypeFilter, Camers[]> | CategoryFilterTypes) => string;
type TemplatePopularFilterType = (activeFilter: Record<TypeFilter, boolean> | CategoryFilterTypes) => string;

const templateManufacturerFilter: TemplateManufacturerFilterType = (activeFilters) => {
    const ul: HTMLUListElement = document.createElement('ul');
    MANUFACTURER_FILTER.forEach((item) => {
        const li: HTMLLIElement = document.createElement('li');
        const img: HTMLImageElement = document.createElement('img');
        img.setAttribute('src', `assets/images/${item.image}`);
        if ((activeFilters[TypeFilter.manufacturer] as Manufacturer[]).includes(item.type)) {
            li.classList.add('active');
        }
        li.classList.add('manufacturer-filter-item');
        li.appendChild(img);
        ul.appendChild(li);
    });
    return ul.outerHTML;
};

const templateSortRadio: (typeS: TypeSort) => string = (typeS: TypeSort): string => {
    const div: HTMLDivElement = document.createElement('div');
    SORTS.forEach((item, index) => {
        const input: HTMLInputElement = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'type-sort');
        input.classList.add('sort-input');
        input.id = SORTS[index].type;
        div.appendChild(input);
        if (SORTS[index].type === typeS) {
            input.setAttribute('checked', 'checked');
        }
    });
    SORTS.forEach((item, index) => {
        const label: HTMLLabelElement = document.createElement('label');
        label.setAttribute('for', SORTS[index].type);
        label.classList.add('sort-type_select');
        label.innerHTML = SORTS[index].innerText;
        div.appendChild(label);
    });
    return div.outerHTML;
};

const templateColorsFilter: TemplateColorsFilterType = (activeFilters) => {
    const ul: HTMLUListElement = document.createElement('ul');
    COLORS_FILTER.forEach((item) => {
        const li: HTMLLIElement = document.createElement('li');
        li.style.background = item.bgColor;
        if ((activeFilters[TypeFilter.colors] as Colors[]).includes(item.type)) {
            li.classList.add('active');
        }
        li.classList.add('color-filter-item');
        ul.appendChild(li);
    });
    return ul.outerHTML;
};

const templateCamersFilter: TemplateCamersFilterType = (activeFilters) => {
    const ul: HTMLUListElement = document.createElement('ul');
    CAMERS_FILTER.forEach((item) => {
        const li: HTMLLIElement = document.createElement('li');
        li.id = item.class;
        if ((activeFilters[TypeFilter.camers] as Camers[]).includes(item.type)) {
            li.classList.add('active');
        }
        li.classList.add('cam-filter-item');
        ul.appendChild(li);
    });
    return ul.outerHTML;
};

const templatePopularFilter: TemplatePopularFilterType = (activeFilters) => {
    const div: HTMLDivElement = document.createElement('div');
    div.classList.add('popular-filter');
    const input: HTMLInputElement = document.createElement('input');
    input.id = 'popular-filter';
    input.setAttribute('type', 'checkbox');
    if (activeFilters[TypeFilter.popular]) {
        input.setAttribute('checked', 'checked');
    }

    div.appendChild(input);
    const label: HTMLLabelElement = document.createElement('label');
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
    const isPopular: HTMLInputElement = <HTMLInputElement>document.querySelector('#popular-filter');
    isPopular.addEventListener('change', (e: Event) => {
        const target = e.target as HTMLInputElement;
        filter(TypeFilter.popular, target.checked);
    });
};

export const templateCartCount = (count: number): void => {
    const cart: HTMLTemplateElement = <HTMLTemplateElement>document.querySelector('.cart');
    cart.innerHTML = count.toString();
};

export const templateCartModal = (): string => {
    const div: HTMLDivElement = document.createElement('div');
    div.classList.add('cart-modal');
    const close: HTMLDivElement = document.createElement('div');
    close.classList.add('modal-close');
    const text: HTMLDivElement = document.createElement('div');
    text.innerHTML = 'Извините, все слоты заполнены!';
    div.appendChild(text);
    div.appendChild(close);
    return div.outerHTML;
};

export const setModalListeners = (): void => {
    const close: HTMLDivElement = <HTMLDivElement>document.querySelector('.modal-close');
    close.addEventListener('click', () => {
        const div: HTMLDivElement = <HTMLDivElement>document.querySelector('.cart-modal');
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
                        <div id="searching" class ="search-container">
                          <h2>Поиск</h2>
                        </div>
                        <h2>Сортировка</h2>                    
                        <div class="reset-buttons">
                            <button id="reset-filter">Сброс фильтров</button>
                            <button id="reset-storage">Сброс настроек</button>
                        </div>     
                    </div>

                </section>
            <section class="filter__cards">
            </section>
            ${templateCartModal()}
        </main>
 `;
};
