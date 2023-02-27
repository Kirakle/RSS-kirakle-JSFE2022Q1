import { TypeSort } from '../types/enums';
import { CategoryFilterTypes } from '../types/interfaces';


export const templateFilterPage: (activeFilter: CategoryFilterTypes, activeSort: TypeSort) => string = (
    activeFilter: CategoryFilterTypes,
    activeSort: TypeSort
): string => {
    return `
        <main class="filter-page">
            <div>   
                <section class="filter__menu">
                    <div class="menu__value-filters">
                        <h2>Фильтры по значению</h2>
                        <div class="manufacturer">
                            <p>Производитель:</p>
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
                        <p>Год выпуска:</p>
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
