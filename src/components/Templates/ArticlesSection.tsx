import Hero from '../Molecules/Hero';
import Caption from '../Atoms/Caption';
import Articles, { ArticlesProps } from '../Molecules/Articles';

import { IAppSection } from '../../interfaces';

const ArticlesSection = ({
  id,
  articles,
  hasErrorFetchingArticles,
}: ArticlesProps & IAppSection) => (
  <section id={id} className="w-full">
    <Hero
      dividerClassRef={'bg-divider-articles top-0 transform rotate-180'}
      className={'bg-brand-medium-blue pb-16'}
    >
      <div className={'pt-20 xl:pt-[100px]'} />
      <Caption hashLabel={'news'} title={'Latest articles'} />
      <Articles
        articles={articles}
        hasErrorFetchingArticles={hasErrorFetchingArticles}
      />
    </Hero>
  </section>
);
export default ArticlesSection;
