export const root = <HTMLDivElement>document.querySelector('#root');
export const filterCountRange: () => HTMLSpanElement = () => <HTMLSpanElement>document.getElementById('slider-count');
export const filterYearRange: () => HTMLSpanElement = () => <HTMLSpanElement>document.getElementById('slider-year');
export const countMin: () => HTMLSpanElement = () => <HTMLSpanElement>document.querySelector('.count-min');
export const countMax: () => HTMLSpanElement = () => <HTMLSpanElement>document.querySelector('.count-max');
export const yearMin: () => HTMLSpanElement = () => <HTMLSpanElement>document.querySelector('.year-min');
export const yearMax: () => HTMLSpanElement = () => <HTMLSpanElement>document.querySelector('.year-max');
