import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { MIN_SLIDER_RANGE, MAX_SLIDER_RANGE, STEP_SLIDER_RANGE } from '../constants/filter-const';
import { TypeFilter } from '../types/enums';

export const initSlider = (
    slider: HTMLElement,
    set: (value: (string | number)[]) => void,
    values: (string | number)[],
    key: TypeFilter
) => {
    noUiSlider
        .create(slider, {
            start: values,
            connect: true,
            step: key === TypeFilter.count ? STEP_SLIDER_RANGE.count : STEP_SLIDER_RANGE.year,
            range: {
                min: key === TypeFilter.count ? MIN_SLIDER_RANGE.count : MIN_SLIDER_RANGE.year,
                max: key === TypeFilter.count ? MAX_SLIDER_RANGE.count : MAX_SLIDER_RANGE.year,
            },
        })
        .on('update', set);
};
