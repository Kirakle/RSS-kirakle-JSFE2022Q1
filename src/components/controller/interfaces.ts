export type Source = {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
};

export interface ISources {
  status: string;
  sources?: Source[];
}

export type Article = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
};

export interface IArticles {
  articles: Article[];
  status: string;
  totalResults: number;
}

export type CallbackType<T> = (data?: T) => void;

export type Options = {
  apiKey?: string;
  sources?: string;
};
