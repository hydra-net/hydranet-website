import { useEffect, useState } from 'react';

import Hero from '../Molecules/Hero';
import Caption from '../Atoms/Caption';
import Articles from '../Molecules/Articles';
import Skeleton from '../Atoms/Skeleton';

import { IAppSection } from '../../interfaces';
import { ICaption } from '../../storyblok/models/ICaption';
import { IArticle } from '../../storyblok/models/IArticle';

export type ArticlesSectionProps = {
  caption: Array<ICaption>;
  articles?: Array<IArticle>;
};
const ArticlesSection = ({
  id,
  caption,
  articles = [],
}: IAppSection & ArticlesSectionProps) => {
  const [hasError, setHasErrors] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (articles.length < 1) {
        setHasErrors(true);
      }
    }, 3000);
  }, []);

  return (
    <section id={id} className="w-full">
      <Hero
        dividerClassRef={'bg-divider-dex top-0 transform'}
        className={`bg-brand-darkest-blue pb-16 ${
          articles.length < 1 && 'min-h-[10rem] lg:min-h-[20rem]'
        }`}
      >
        <div className={'pt-20 xl:pt-[100px]'} />
        <Caption hashLabel={caption[0].hashLabel} title={caption[0].title} />
        {hasError ? (
          <div className={'text-center text-lg text-white lg:mt-12'}>
            Sorry ! An error occurred while retrieving the latest news.
          </div>
        ) : articles.length < 1 && !hasError ? (
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
            {[...Array(6)].map((x, i) => (
              <Skeleton.Card key={i} />
            ))}
          </div>
        ) : (
          <Articles articles={articles} />
        )}
      </Hero>
    </section>
  );
};
export default ArticlesSection;
