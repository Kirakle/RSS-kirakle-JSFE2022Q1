import { MAX_LENGTH_GOODS_IN_CART } from '../constants/constants';
import { sortMapper } from '../constants/filter-const';
import { Colors, Manufacturer, Camers, TypeFilter, TypeSort } from '../types/enums';
import { CategoryFilterType, CategoryFilterTypes, ICardItem, IFilters } from '../types/interfaces';

class Db {
    cardsArr: ICardItem[];
    initialCardArray: ICardItem[];
    manufacturerFilter: Manufacturer[];
    colorsFilter: Colors[];
    camersFilter: Camers[];
    cart: ICardItem[];
    sortFilter: TypeSort;
    popularFilter: boolean;
    countFilter: (string | number)[];
    yearFilter: (string | number)[];
    searchFilter: string;
    isFirstLoading: boolean;
    constructor() {
        this.initialCardArray = [];
        this.cardsArr = [];
        this.manufacturerFilter = [];
        this.colorsFilter = [];
        this.camersFilter = [];
        this.sortFilter = TypeSort.yearMinMax;
        this.popularFilter = false;
        this.cart = [];
        this.countFilter = ['1', '12'];
        this.yearFilter = ['2010', '2022'];
        this.searchFilter = '';
        this.isFirstLoading = true;
    }
    public saveCardsArr(data: ICardItem[]) {
        const tranformedData = data.map((item) => ({
            ...item,
            coord: Array.from({ length: +item.count }, () => {
                return { x: 0, y: 0 };
            }),
        }));
        this.cardsArr = tranformedData;
        this.initialCardArray = JSON.parse(JSON.stringify(tranformedData));
    }

    public getCardsArr() {
        return this.cardsArr;
    }
    public setCart(data: string[]) {
        let selected: ICardItem[] = [...this.cardsArr];

        selected =
            data.length > 0
                ? selected.filter((item) => data.includes(item.num))
                : selected.slice(0, MAX_LENGTH_GOODS_IN_CART);
        this.cart = selected;
    }
    public getCart() {
        return this.cart;
    }
    public getFilteredCardsArr() {
        let result = [...this.cardsArr];
        result =
            this.manufacturerFilter.length > 0
                ? result.filter((item) => this.manufacturerFilter.includes(item.manufacturer))
                : result;
        result =
            this.colorsFilter.length > 0 ? result.filter((item) => this.colorsFilter.includes(item.color)) : result;
        result =
            this.camersFilter.length > 0 ? result.filter((item) => this.camersFilter.includes(item.camers)) : result;
        result = this.popularFilter ? result.filter((item) => item.popular) : result;
        result = result.filter((item) => +item.count >= +this.countFilter[0] && +item.count <= +this.countFilter[1]);
        result = result.filter((item) => +item.year >= +this.yearFilter[0] && +item.year <= +this.yearFilter[1]);

        result = this.searchFilter
            ? result.filter((item) => item.name.toLowerCase().includes(this.searchFilter.toLowerCase()))
            : result;
        result = result.sort(sortMapper[this.sortFilter]);
        return result;
    }
    public setStartedFilters = () => {
        this.manufacturerFilter = [];
        this.colorsFilter = [];
        this.camersFilter = [];
        this.popularFilter = false;
        this.countFilter = ['1', '12'];
        this.yearFilter = ['2010', '2022'];
        this.searchFilter = '';
        this.cart = this.cardsArr.splice(0, MAX_LENGTH_GOODS_IN_CART);
        this.cardsArr = JSON.parse(JSON.stringify(this.initialCardArray));
        this.setCart([]);
    };
    public getActiveFilters(): CategoryFilterTypes {
        return {
            [TypeFilter.manufacturer]: this.manufacturerFilter as Manufacturer[],
            [TypeFilter.colors]: this.colorsFilter as Colors[],
            [TypeFilter.camers]: this.camersFilter as Camers[],
            [TypeFilter.popular]: this.popularFilter,
            [TypeFilter.count]: this.countFilter as string[],
            [TypeFilter.year]: this.yearFilter as string[],
            [TypeFilter.search]: this.searchFilter as string,
        };
    }

    public getActiveSort(): TypeSort {
        return this.sortFilter;
    }

    public setCurrentSort = (sorttype: TypeSort) => {
        this.sortFilter = sorttype as TypeSort;
    };

    public setSavedFilters = (savesFilters: IFilters) => {
        this.manufacturerFilter = savesFilters.manufacturerFilter;
        this.colorsFilter = savesFilters.colorsFilter;
        this.camersFilter = savesFilters.camersFilter;
        this.sortFilter = savesFilters.sortFilter;
        this.popularFilter = savesFilters.popularFilter;
        this.countFilter = savesFilters.countFilter;
        this.yearFilter = savesFilters.yearFilter;
    };

    public setCurrentFilter = (filtertype: TypeFilter, value: CategoryFilterType) => {
        if (filtertype === TypeFilter.manufacturer) {
            if (this[filtertype].includes(value as Manufacturer)) {
                this[filtertype] = this[filtertype].filter((item: Manufacturer) => item !== value);
            } else {
                this[filtertype] = [...this[filtertype], value as Manufacturer];
            }
        }
        if (filtertype === TypeFilter.colors) {
            if (this[filtertype].includes(value as Colors)) {
                this[filtertype] = this[filtertype].filter((item: Colors) => item !== value);
            } else {
                this[filtertype] = [...this[filtertype], value as Colors];
            }
        }
        if (filtertype === TypeFilter.camers) {
            if (this[filtertype].includes(value as Camers)) {
                this[filtertype] = this[filtertype].filter((item: Camers) => item !== value);
            } else {
                this[filtertype] = [...this[filtertype], value as Camers];
            }
        }
        if (filtertype === TypeFilter.popular) {
            this[filtertype] = value as boolean;
        }
        if (filtertype === TypeFilter.count) {
            this[filtertype] = value as string[];
        }
        if (filtertype === TypeFilter.year) {
            this[filtertype] = value as string[];
        }
        if (filtertype === TypeFilter.search) {
            this[filtertype] = value as string;
        }
    };

    public getISFirstLoading = () => this.isFirstLoading;
    public setIsNotFirstLoading = () => (this.isFirstLoading = false);
}
export default new Db();
