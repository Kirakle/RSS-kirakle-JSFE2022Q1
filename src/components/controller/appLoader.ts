import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '32331036c43e446c82473aef808bb69f',
    });
  }
}

export default AppLoader;
