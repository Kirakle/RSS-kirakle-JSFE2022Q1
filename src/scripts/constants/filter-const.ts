import { TypeSort } from '../types/enums';
import { ICardItem } from '../types/interfaces';



export const sortMapper: Record<TypeSort, (a: ICardItem, b: ICardItem) => number> = {
    [TypeSort.yearMinMax]: (a: ICardItem, b: ICardItem) => {
        return +a.year - +b.year;
    },
    [TypeSort.yearMaxMin]: (a: ICardItem, b: ICardItem) => {
        return +b.year - +a.year;
    },
    [TypeSort.nameAZ]: (a: ICardItem, b: ICardItem) => {
        return a.name.localeCompare(b.name);
    },
    [TypeSort.nameZA]: (a: ICardItem, b: ICardItem) => {
        return b.name.localeCompare(a.name);
    },
};
