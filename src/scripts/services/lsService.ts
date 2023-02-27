import { MAX_LENGTH_GOODS_IN_CART } from '../constants/constants';
import { TypeSort } from '../types/enums';
import { CategoryFilterTypes, IFilters } from '../types/interfaces';

class Local {
    public generateLocalStorage = (isNew?: boolean): void => {
        if (!localStorage.getItem('filters') || isNew) {
            localStorage.setItem(
                'filters',
                JSON.stringify({
                    manufacturerFilter: [],
                    colorsFilter: [],
                    camersFilter: [],
                    popularFilter: false,
                    countFilter: ['1', '12'],
                    yearFilter: ['2010', '2022'],
                })
            );
        }
        if (!localStorage.getItem('sort')) {
            localStorage.setItem('sort', JSON.stringify(TypeSort.yearMinMax));
        }
    };
    public setResetLocal = (): void => {
        localStorage.removeItem('filters');
        localStorage.removeItem('cart');
        localStorage.removeItem('sort');
    };

    public getCartLocalStorage = (): string[] => {
        return JSON.parse(<string>localStorage.getItem('cart')) || [];
    };

    public setCartLocalStorage = (value: string): void => {
        let localArr = this.getCartLocalStorage();
        if (localArr.length <= MAX_LENGTH_GOODS_IN_CART) {
            if (localArr.includes(value)) {
                localArr = localArr.filter((item: string) => item !== value);
            } else {
                localArr = [...localArr, value];
            }
        } else {
            if (localArr.includes(value)) {
                localArr = localArr.filter((item: string) => item !== value);
            }
        }
        localStorage.setItem('cart', JSON.stringify(localArr));
    };

    public getFiltersLocalStorage = (): IFilters => {
        const filters = localStorage.getItem('filters');
        return filters ? JSON.parse(filters) : {};
    };

    public setFiltersLocalStorage = (filters: CategoryFilterTypes): void => {
        localStorage.setItem('filters', JSON.stringify(filters));
    };

    public setSortLocalStorage = (sort: TypeSort): void => {
        localStorage.setItem('sort', JSON.stringify(sort));
    };

    public getSortLocalStorage = (): TypeSort => {
        const sort = localStorage.getItem('sort');
        return sort ? JSON.parse(sort) : TypeSort.yearMinMax;
    };
}
export default new Local();
