import { useEffect, useState } from 'react';

import Hero from '../Molecules/Hero';
import Caption from '../Atoms/Caption';
import Articles from '../Molecules/Articles';
import CardSkeleton from '../Atoms/CardSkeleton';

import { IAppSection, IArticle, IMediumRssResponseDto } from '../../interfaces';
import { HYDRANET_MEDIUM_FETCH_URL } from '../../constants';
import { extractThumbnailsFromHtmlString } from '../../helpers/common';

const ArticlesSection = ({ id }: IAppSection) => {
  const [articles, setArticles] = useState<Array<IArticle>>([]);
  const [hasErrorFetching, setHasErrorFetching] = useState<boolean>(false);

  /**
   * Fetch dynamically medium articles from our AWS lambda that get the feed, parse it and send it as json
   * Won't be referenced as it is fetch client side
   */
  useEffect(() => {
    async function getArticles() {
      let hasErrorFetchingArticles = false;
      let articles: Array<IArticle> = [];

      try {
        const response = await fetch(HYDRANET_MEDIUM_FETCH_URL);
        if (response.ok) {
          let {
            rss: {
              channel: { item },
            },
          }: IMediumRssResponseDto = await response.json();
          // if only 1 article it will be given as object, so we wrap it in an array
          if (!Array.isArray(item)) {
            item = [item];
          }
          articles = item.map((article: IArticle) => {
            return {
              ...article,
              thumbnail: extractThumbnailsFromHtmlString(
                article['content:encoded']
              ),
            };
          });
        } else {
          hasErrorFetchingArticles = true;
        }
      } catch (err) {
        hasErrorFetchingArticles = true;
      }

      setArticles(articles);
      setHasErrorFetching(hasErrorFetchingArticles);
    }
    // instead of implementing a fuck load of code to lazy load background images css,
    // we relief the first load without the medium articles before 2secs
    // medium thumbnails are a cluster fuck in term of perfs, they are heavy for what they are.
    setTimeout(() => {
      getArticles();
    }, 2000);
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
        ) : articles.length < 1 ? (
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
            {[...Array(6)].map((x, i) => (
              <CardSkeleton key={i} />
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
