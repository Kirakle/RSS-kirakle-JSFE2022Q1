import Loader from './loader';
import { MAIN_URL, API_KEY } from '../constants/constants';

class AppLoader extends Loader {
  constructor() {
    super(MAIN_URL, {
      apiKey: API_KEY,
    });
  }
}

export default AppLoader;
