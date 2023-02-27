import { EMPTY_FILTER_TEXT } from '../constants/constants';
import { countMax, countMin, filterCountRange, filterYearRange, yearMax, yearMin } from '../selectors/selectors';
import {setFiltersListeners,setModalListeners,templateFilterPage} from '../templates';
import { setCardItemListners, templateCardItem } from '../templates/filter-page-card';
import { TypeFilter } from '../types/enums';
import { CategoryFilterType, CategoryFilterTypes, ICardItem } from '../types/interfaces';
import { initSlider } from '../utils/slider';
import { cutDecimalsFormat } from '../utils/utils';

import Root from './rootView';

class FilterPage {
    private root: Root;

    constructor() {
        this.root = new Root();
    }

    public drawSpanValues = (values: string[], key: TypeFilter) => {
        const minCurrent: HTMLElement = key === TypeFilter.count ? countMin() : yearMin();
        const maxCurrent: HTMLElement = key === TypeFilter.count ? countMax() : yearMax();
        const [min, max]: string[] = values as string[];
        minCurrent.innerHTML = min;
        maxCurrent.innerHTML = max;
    };

    public rangeHandler = (
        value: (string | number)[],
        filterHandler: (filtertype: TypeFilter, item: CategoryFilterType) => void,
        key: TypeFilter
    ): void => {
        const val: string[] = cutDecimalsFormat(value);
        filterHandler(key, val);
        this.drawSpanValues(val, key);
    };

    public drawSliders = (
        filterHandler: (filtertype: TypeFilter, item: CategoryFilterType) => void,
        filterValues: CategoryFilterTypes
    ): void => {
        const count: HTMLElement = filterCountRange();
        const year: HTMLElement = filterYearRange();
        initSlider(
            count,
            (value: (string | number)[]) => {
                this.rangeHandler(value, filterHandler, TypeFilter.count);
            },
            filterValues.countFilter as string[],
            TypeFilter.count
        );
        initSlider(
            year,
            (value: (string | number)[]) => {
                this.rangeHandler(value, filterHandler, TypeFilter.year);
            },
            filterValues.yearFilter as string[],
            TypeFilter.year
        );
    };

    public renderModal = (): void => {
        const modal: HTMLTemplateElement = <HTMLTemplateElement>document.querySelector('.cart-modal');
        modal.classList.add('show-modal');
    };

    public renderCards = (arr: ICardItem[], getLocalCart: string[], setLocalCart: (value: string) => void): void => {
        const div: HTMLTemplateElement = <HTMLTemplateElement>document.querySelector('.filter__cards');
        div.innerHTML = '';
        arr.forEach((item, index) => {
            const card: string = templateCardItem(arr[index], getLocalCart);
            div.insertAdjacentHTML('beforeend', card);
        });
        setCardItemListners(arr, setLocalCart);
        if (arr.length === 0) {
            div.innerHTML = EMPTY_FILTER_TEXT;
        }
        const cart: HTMLTemplateElement = <HTMLTemplateElement>document.querySelector('.cart');
        cart.innerHTML = getLocalCart.length.toString();
    };

    public renderFilterPage = (
        filterHandler: (filtertype: TypeFilter, item: CategoryFilterType) => void,
        activeFilter: CategoryFilterTypes,
        reset: () => void,
        resetHand: () => void,
        isResetLocal: () => void
    ): void => {
        this.root.resetContainer();
        const html: string = templateFilterPage(activeFilter);
        this.root.changeInnerRoot(html);
        setModalListeners();
        setFiltersListeners(filterHandler);
    };
}

export default FilterPage;
