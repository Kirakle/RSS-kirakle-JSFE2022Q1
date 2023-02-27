export const cutDecimalsFormat = (str: (string | number)[]) => str.map((item) => (item as string).split('.')[0]);
