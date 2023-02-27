import { Colors, Manufacturer, Camers, TypeFilter, TypeSort } from './enums';

export interface ICardItem {
    num: string;
    name: string;
    count: string;
    year: string;
    manufacturer: Manufacturer;
    color: Colors;
    camers: Camers;
    popular: boolean;
}

export interface IManufacturerFilterConstants {
    id: number;
    type: Manufacturer;
    image: string;
    key: string;
}


export interface ISortFilterConstants {
    id: number;
    type: TypeSort;
    idName: string;
    innerText: string;
}

export interface ISliderFilterConstants {
    count: number;
    year: number;
}
export interface IFilters {
    manufacturerFilter: Manufacturer[];
    colorsFilter: Colors[];
    camersFilter: Camers[];
    sortFilter: TypeSort;
    popularFilter: boolean;
    countFilter: (string | number)[];
    yearFilter: (string | number)[];
    searchFilter: string;
}

export type CategoryFilterTypes = Record<TypeFilter, string | Manufacturer[] | Colors[] | Camers[] | boolean | (string | number)[]>;

export type CategoryFilterType = Manufacturer | Colors | Camers | boolean | (string | number)[] | string;
