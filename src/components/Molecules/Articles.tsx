import { IArticle } from '../../interfaces';
import { formatDate } from '../../helpers/format';

export type ArticlesProps = {
  articles: Array<IArticle>;
  hasErrorFetchingArticles?: boolean;
};
const Articles = ({ articles }: ArticlesProps) => {
  const handleOpenArticle = (url: string) => window.open(url, '_blank');
  return (
    <div>
      <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
        {articles.slice(0, 6).map((article, index) => (
          <div data-aos={'fade-up'} key={article.link} data-delay={index * 200}>
            <div
              tabIndex={0}
              onClick={() => handleOpenArticle(article.link)}
              className={
                'transform cursor-pointer rounded-md bg-brand-blue shadow-lg transition-all duration-300 hover:scale-[1.08] hover:shadow-2xl focus:outline-none focus:ring focus:ring-brand-light-blue'
              }
            >
              <div
                style={{ backgroundImage: `url(${article.thumbnail})` }}
                className={
                  'h-32 w-full rounded-t-md bg-cover bg-center md:h-40'
                }
              />
              <div className={'px-6 py-4'}>
                <div className="mb-1 text-sm text-brand-greyed">
                  {formatDate(article.pubDate)}
                </div>
                <div className={'text-lg text-white'}>{article.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
