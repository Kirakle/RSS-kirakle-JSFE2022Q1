import * as data from '../../data/data.json';

export default () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) {
                resolve(data);
            } else {
                reject(new Error('Loading question error!'));
            }
        }, 500);
    });
