import { COUNT_NEWS } from './../../constants/constants';
import { Article } from '../../../types/interfaces';
import './news.css';

class News {
  public draw(data: Article[]): void {
    const news = data.length >= COUNT_NEWS ? data.filter((_item, idx) => idx < COUNT_NEWS) : data;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

    news.forEach((item, idx) => {
      const newsClone = <Element>newsItemTemp.content.cloneNode(true);

      if (idx % 2) (newsClone.querySelector('.news__item') as Element).classList.add('alt');

      (<HTMLDivElement>newsClone.querySelector('.news__meta-photo')).style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      (<HTMLLIElement>newsClone.querySelector('.news__meta-author')).textContent =
        item.author || item.source.name;
      (<HTMLLIElement>(
        newsClone.querySelector('.news__meta-date')
      )).textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

      (<HTMLElement>newsClone.querySelector('.news__description-title')).textContent = item.title;
      (<HTMLElement>newsClone.querySelector('.news__description-source')).textContent =
        item.source.name;
      (<HTMLParagraphElement>newsClone.querySelector('.news__description-content')).textContent =
        item.description;
      (<HTMLLinkElement>newsClone.querySelector('.news__read-more a')).setAttribute(
        'href',
        item.url
      );

      fragment.append(newsClone);
    });

    (<HTMLDivElement>document.querySelector('.news')).innerHTML = '';
    (<HTMLDivElement>document.querySelector('.news')).appendChild(fragment);
  }
}

export default News;
