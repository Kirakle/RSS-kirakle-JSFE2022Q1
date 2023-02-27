import FilterController from '../controllers/filterControler';
import getCards from '../data/api';
import { ICardItem } from '../types/interfaces';
import db from '../services/dbService';
import ls from '../services/lsService';

class App {
    public start(): void {
        getCards().then((data) => {
            ls.generateLocalStorage();
            db.saveCardsArr(data as ICardItem[]);
            this.getSetting();
            FilterController.drawFilterPage();
            FilterController.drawFilterSliders();
            db.setIsNotFirstLoading();
        });
    }
    private getSetting(): void {
        db.setCart(ls.getCartLocalStorage());
        db.setSavedFilters(ls.getFiltersLocalStorage());
        db.setCurrentSort(ls.getSortLocalStorage());
    }
}

export default App;
