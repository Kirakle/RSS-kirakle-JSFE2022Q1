import { Manufacturer, TypeSort } from '../types/enums';
import {
    ICardItem,
    IManufacturerFilterConstants,
    ISortFilterConstants,
} from '../types/interfaces';

export const MANUFACTURER_FILTER: IManufacturerFilterConstants[] = [
    { id: 1, type: Manufacturer.apple, image: 'apple.svg', key: 'apple' },
    { id: 2, type: Manufacturer.samsung, image: 'samsung.svg', key: 'samsung' },
    { id: 3, type: Manufacturer.xiaomi, image: 'xiaomi.svg', key: 'xiaomi' },
];

export const SORTS: ISortFilterConstants[] = [
    {
        id: 1,
        type: TypeSort.yearMinMax,
        idName: 'sort__count-min-max',
        innerText: 'По году, по возрастанию',
    },
    { id: 2, type: TypeSort.yearMaxMin, idName: 'sort__count-max-min', innerText: 'По году, по убыванию' },
    { id: 3, type: TypeSort.nameAZ, idName: 'sort__name-min-max', innerText: 'По названию, от "А" до "Я"' },
    { id: 4, type: TypeSort.nameZA, idName: 'sort__name-max-min', innerText: 'По названию, от "Я" до "А"' },
];

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
