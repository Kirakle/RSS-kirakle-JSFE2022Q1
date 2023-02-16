import { IArticles, ISources } from '../controller/interfaces';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
  private news;
  private sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IArticles | undefined) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: ISources | undefined) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
