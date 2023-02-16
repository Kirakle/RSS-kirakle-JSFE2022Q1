import { IArticles, ISources } from '../../types/interfaces';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
  private news;
  private sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: IArticles | undefined): void {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data: ISources | undefined): void {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
