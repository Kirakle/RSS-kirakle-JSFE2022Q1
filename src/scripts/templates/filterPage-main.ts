import { MANUFACTURER_FILTER} from '../constants/filter-const';
import { Manufacturer, TypeFilter } from '../types/enums';
import { CategoryFilterType, CategoryFilterTypes } from '../types/interfaces';

type TemplateManufacturerFilterType = (activeFilters: CategoryFilterTypes) => string;

const templateManufacturerFilter: TemplateManufacturerFilterType = (activeFilters: Record<TypeFilter, Manufacturer[]>) => {
    const ul: HTMLElement = document.createElement('ul');
    MANUFACTURER_FILTER.forEach((item) => {
        const li: HTMLElement = document.createElement('li');
        const img: HTMLElement = document.createElement('img');
        img.setAttribute('src', `assets/svg/${item.image}`);
        if (activeFilters[TypeFilter.manufacturer].includes(item.type)) {
            li.classList.add('active');
        }
        li.classList.add('manufacturer-filter-item');
        li.appendChild(img);
        ul.appendChild(li);
    });
    return ul.outerHTML;
};

export const setFiltersListeners: (filter: (filtertype: TypeFilter, item: CategoryFilterType) => void) => void = (
    filter: (filtertype: TypeFilter, item: CategoryFilterType) => void
): void => {
    const manufacturer: NodeListOf<Element> = document.querySelectorAll('.camer-filter-item');
    for (let i = 0; i < manufacturer.length; i = i + 1) {
        manufacturer[i].addEventListener('click', () => {
            filter(TypeFilter.manufacturer, MANUFACTURER_FILTER[i].type);
        });
    }

};

export const templateFilterPage: (activeFilter: CategoryFilterTypes) => string = (
    activeFilter: CategoryFilterTypes,
): string => {
    return `
        <main class="filter-page">
            <div>   
                <section class="filter__menu">
                    <div class="menu__value-filters">
                        <h2>Фильтры по значению</h2>
                        <div class="manufacturer">
                            <p>Производитель:</p>
                            ${templateManufacturerFilter(activeFilter)}
                        </div>
                        <div class="camers">
                            <p>Количество камер:</p>
                        </div>
                        <div class="colors">
                            <p>Цвет:</p>
                        </div>
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
            </div>
            <section class="filter__cards">
            </section>
        </main>
 `;
};
