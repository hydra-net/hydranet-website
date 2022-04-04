import { IArticle } from '../../interfaces';
import Card from '../Atoms/Card';

type ArticlesProps = {
  articles: Array<IArticle>;
  hasErrorFetchingArticles: boolean;
};
const Articles = ({ articles, hasErrorFetchingArticles }: ArticlesProps) => {
  const handleOpenArticle = (url: string) => window.open(url, '_blank');
  return (
    <div>
      <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3">
        {articles.slice(0, 6).map((article) => (
          <div
            key={article.link}
            tabIndex={0}
            onClick={() => handleOpenArticle(article.link)}
            className={
              'hover:drop-shadow-3xl transform cursor-pointer rounded-md bg-brand-blue drop-shadow-2xl transition-all duration-300 hover:scale-[1.08] focus:outline-none focus:ring focus:ring-brand-light-blue'
            }
          >
            <div
              style={{ backgroundImage: `url(${article.thumbnail})` }}
              className={'h-40 w-full rounded-t-md bg-cover bg-center'}
            />
            <div className={'px-6 py-4'}>
              <div className="text-sm text-brand-greyed">{article.pubDate}</div>
              <div className={'text-lg text-white'}>{article.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
