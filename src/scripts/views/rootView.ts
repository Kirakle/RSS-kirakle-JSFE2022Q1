import { root } from '../selectors/selectors';
import { templateHeader, templateLayout} from '../templates/enter';
import { TypePage } from '../types/enums';
import { CategoryFilterTypes } from '../types/interfaces';

class Root {
    resetContainer(): void {
        root.innerHTML = '';
    }

    changeInnerRoot(htmlBlock: string): void {
        root.insertAdjacentHTML('afterbegin', templateLayout(htmlBlock));
    }

    drawHeader(
        page: TypePage,
        countFavorite: number,
        activeFilters: CategoryFilterTypes,
    ): void {
        templateHeader(
            page,
            countFavorite,
        );
        page === TypePage.filter;
    }
}

export default Root;
