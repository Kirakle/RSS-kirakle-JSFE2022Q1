import { EMPTY_FILTER_TEXT } from '../constants/constants';
import {
    templateFilterPage,
} from '../templates';
import { setCardItemListners, templateCardItem } from '../templates/filter-page-card';
import { TypeSort } from '../types/enums';
import { CategoryFilterTypes, ICardItem } from '../types/interfaces';
import Root from './rootView';

class FilterPage {
    private root: Root;

    constructor() {
        this.root = new Root();
    }

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
        activeFilter: CategoryFilterTypes,
        sortHandler: (sortType: TypeSort) => void,
        activeSort: TypeSort,
        reset: () => void,
        resetHand: () => void,
        isResetLocal: () => void
    ): void => {
        this.root.resetContainer();
        const html: string = templateFilterPage(activeFilter, activeSort);

        this.root.changeInnerRoot(html);
    };
}

export default FilterPage;
