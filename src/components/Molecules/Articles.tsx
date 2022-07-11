import ArticlePreview from '../Atoms/ArticlePreview';
import { IArticle } from '../../storyblok/models/IArticle';

export type ArticlesProps = {
  articles: Array<IArticle>;
};
const Articles = ({ articles }: ArticlesProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
        {articles.slice(0, 6).map((article) => (
          <ArticlePreview key={article._uid} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
