import Root from '../views/rootView';
import db from '../services/dbService';
import { TypePage } from '../types/enums';

class PageController {
    private root: Root;
    
    constructor() {
        this.root = new Root();
    }

    public renderHeader = (page: TypePage) => {
        this.root.drawHeader(page, db.getCart.length, db.getActiveFilters());
    };
}

export default new PageController();
