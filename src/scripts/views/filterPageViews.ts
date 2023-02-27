import { EMPTY_FILTER_TEXT } from '../constants/constants';
import {setFiltersListeners,templateFilterPage} from '../templates';
import { setCardItemListners, templateCardItem } from '../templates/filter-page-card';
import { TypeFilter } from '../types/enums';
import { CategoryFilterType, CategoryFilterTypes, ICardItem } from '../types/interfaces';
import { cutDecimalsFormat } from '../utils/utils';

import Root from './rootView';

class FilterPage {
    private root: Root;

    constructor() {
        this.root = new Root();
    }

    public rangeHandler = (
        value: string[],
        filterHandler: (filtertype: TypeFilter, item: CategoryFilterType) => void,
        key: TypeFilter
    ): void => {
        const val: string[] = cutDecimalsFormat(value);
        filterHandler(key, val);
    };

    public renderCards = (
        arr: ICardItem[],
        getLocalFavorite: string[],
        setLocalFavorite: (value: string) => void
    ): void => {
        const div: HTMLTemplateElement = document.querySelector('.filter__cards');
        div.innerHTML = '';
        arr.forEach((item, index) => {
            const card: string = templateCardItem(arr[index], getLocalFavorite);
            div.insertAdjacentHTML('beforeend', card);
        });
        setCardItemListners(arr, setLocalFavorite);
        if (arr.length === 0) {
            div.innerHTML = EMPTY_FILTER_TEXT;
        }
        const cart: HTMLTemplateElement = document.querySelector('.cart');
        cart.innerHTML = getLocalFavorite.length.toString();
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
        setFiltersListeners(filterHandler);
    };
}

export default FilterPage;
