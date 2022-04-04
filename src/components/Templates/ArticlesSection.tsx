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
      className={`bg-brand-medium-blue pb-16 ${
        hasErrorFetchingArticles && 'min-h-[10rem] lg:min-h-[20rem]'
      }`}
    >
      <div className={'pt-20 xl:pt-[100px]'} />
      <Caption hashLabel={'news'} title={'Latest articles'} />
      {hasErrorFetchingArticles ? (
        <div className={'text-center text-lg text-white lg:mt-12'}>
          Sorry ! An error occurred while retrieving the latest news.
        </div>
      ) : (
        <Articles articles={articles} />
      )}
    </Hero>
  </section>
);
export default ArticlesSection;
