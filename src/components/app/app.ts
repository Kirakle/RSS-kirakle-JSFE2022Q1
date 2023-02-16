import { IArticles, ISources } from '../../types/interfaces';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  private controller;
  private view;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    (<HTMLElement>document.querySelector('.sources')).addEventListener('click', (e) =>
      this.controller.getNews(e, (data: IArticles | undefined): void => this.view.drawNews(data))
    );
    this.controller.getSources((data: ISources | undefined): void => this.view.drawSources(data));
  }
}

export default App;
