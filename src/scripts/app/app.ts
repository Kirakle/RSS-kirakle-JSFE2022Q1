import FilterController from '../controllers/filterControler';
import getCards from '../data/api';
import { ICardItem } from '../types/interfaces';
import db from '../services/dbService';
import ls from '../services/lsService';

class App {
    public start(): void {
        getCards().then((data: ICardItem[]) => {
            ls.generateLocalStorage();
            db.saveCardsArr(data);
            this.getSetting();
            FilterController.drawFilterPage();
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
