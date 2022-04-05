import { useEffect, useState } from 'react';

import Hero from '../Molecules/Hero';
import Caption from '../Atoms/Caption';
import Articles from '../Molecules/Articles';

import { IAppSection, IArticle } from '../../interfaces';
import { HYDRANET_MEDIUM_FETCH_URL } from '../../constants';

const ArticlesSection = ({ id }: IAppSection) => {
  const [articles, setArticles] = useState<Array<IArticle>>([]);
  const [hasErrorFetching, setHasErrorFetching] = useState<boolean>(false);

  /**
   * Fetch dynamically medium articles, won't be referenced
   */
  useEffect(() => {
    async function getArticles() {
      let hasErrorFetchingArticles = false;
      let articles: Array<IArticle> = [];

      try {
        const response = await fetch(HYDRANET_MEDIUM_FETCH_URL);
        const { items } = await response.json();
        articles = items;
      } catch (err) {
        hasErrorFetchingArticles = true;
      }

      setArticles(articles);
      setHasErrorFetching(hasErrorFetchingArticles);
    }
    getArticles();
  }, []);

  return (
    <section id={id} className="w-full">
      <Hero
        dividerClassRef={'bg-divider-articles top-0 transform rotate-180'}
        className={`bg-brand-medium-blue pb-16 ${
          hasErrorFetching && 'min-h-[10rem] lg:min-h-[20rem]'
        }`}
      >
        <div className={'pt-20 xl:pt-[100px]'} />
        <Caption hashLabel={'news'} title={'Latest articles'} />
        {hasErrorFetching ? (
          <div className={'text-center text-lg text-white lg:mt-12'}>
            Sorry ! An error occurred while retrieving the latest news.
          </div>
        ) : (
          <Articles articles={articles} />
        )}
      </Hero>
    </section>
  );
};
export default ArticlesSection;
