import { MAX_LENGTH_GOODS_IN_CART } from '../constants/constants';
import db from '../services/dbService';
import ls from '../services/lsService';
import { TypeFilter, TypePage, TypeSort } from '../types/enums';
import { CategoryFilterType } from '../types/interfaces';
import FilterPage from '../views/filterPageViews';
import PageController from './pageController';

class FilterController {
    private filterPage: FilterPage;

    constructor() {
        this.filterPage = new FilterPage();
    }

    private setFilters = (filtertype: TypeFilter, item: CategoryFilterType): void => {
        db.setCurrentFilter(filtertype, item);
        ls.setFiltersLocalStorage(db.getActiveFilters());
    };

    private cartHandler = (item: string): void => {
        const cart: string[] = ls.getCartLocalStorage();
        if (cart.length < MAX_LENGTH_GOODS_IN_CART || cart.includes(item)) {
            ls.setCartLocalStorage(item);
            db.setCart(ls.getCartLocalStorage());
        } else {
            this.filterPage.renderModal();
        }
        this.filterPage.renderCards(db.getFilteredCardsArr(), ls.getCartLocalStorage(), this.cartHandler);
    };

    private filterHandler = (filtertype: TypeFilter, item: CategoryFilterType): void => {
        this.setFilters(filtertype, item);
        if (filtertype !== TypeFilter.search) {
            this.drawFilterPage();
            this.filterPage.drawSliders(this.sliderHandler, db.getActiveFilters());
        } else {
            this.filterPage.renderCards(db.getFilteredCardsArr(), ls.getCartLocalStorage(), this.cartHandler);
        }
    };
    private sortHandler = (sortType: TypeSort): void => {
        db.setCurrentSort(sortType);
        ls.setSortLocalStorage(sortType);
        this.filterPage.renderCards(db.getFilteredCardsArr(), ls.getCartLocalStorage(), this.cartHandler);
    };

    private sliderHandler = (filtertype: TypeFilter, value: CategoryFilterType): void => {
        this.setFilters(filtertype, value);
        this.filterPage.renderCards(db.getFilteredCardsArr(), ls.getCartLocalStorage(), this.cartHandler);
    };

    public drawFilterSliders = (): void => {
        this.filterPage.drawSliders(this.sliderHandler, db.getActiveFilters());
    };

    public resetHandler = (): void => {
        this.drawFilterPage();
        this.drawFilterSliders();
    };

    public drawFilterPage = (): void => {
        this.filterPage.renderFilterPage(
            this.filterHandler,
            db.getActiveFilters(),
            this.sortHandler,
            db.getActiveSort(),
            db.setStartedFilters,
            this.resetHandler,
            ls.setResetLocal
        );
        PageController.renderHeader(TypePage.filter);
        this.filterPage.setSearchListeners(this.filterHandler);
        this.filterPage.renderCards(db.getFilteredCardsArr(), ls.getCartLocalStorage(), this.cartHandler);
    };
}

export default new FilterController();
