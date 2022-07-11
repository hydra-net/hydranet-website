import { formatDate } from '../../helpers/format';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const RichTextResolver = require('storyblok-js-client/dist/rich-text-resolver.cjs');
import Link from 'next/link';
import { IArticle } from '../../storyblok/models/IArticle';
import NewsFallbackImage from '/public/newsFallbackImg.webp';

const AVG_READING_WORDS_PER_MINUTE = 200;

type ArticleProps = {
  article: IArticle;
};
const ArticlePreview = ({ article }: ArticleProps) => {
  console.log('article.content', article.content);
  /**
   * Will clean up the html tags and calculate the reading time based on number of words
   */
  const calculateReadingTime = () => {
    const articleContent = new RichTextResolver().render(
      article.content.rich_text
    );
    const cleanedStringFromHtmlTags = articleContent.replace(
      /(<([^>]+)>)/gi,
      ''
    );
    const numberOfWords = cleanedStringFromHtmlTags.split(' ').length;

    const readTime = numberOfWords / AVG_READING_WORDS_PER_MINUTE;
    return Math.ceil(readTime);
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-lg lg:shadow-lg">
      <div className="hidden flex-shrink-0 lg:block">
        <img
          className="h-48 w-full object-cover"
          src={article.content.miniature.filename || NewsFallbackImage.src}
          alt={article.content.miniature.alt}
        />
      </div>
      <div className="mt-4 flex flex-1 flex-col justify-between lg:bg-brand-blue lg:p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-brand-aqua">
            {article.content.category}
          </p>
          <Link href={article.full_slug}>
            <a className="mt-2 block">
              <p className="text-xl font-semibold text-white">
                {article.content.title}
              </p>
              <p className="mt-3 text-base text-brand-greyed">
                {article.content.description}
              </p>
            </a>
          </Link>
        </div>
        <div className="mt-0 flex items-center justify-start gap-1 lg:mt-2">
          {article.content.keywords.map((keyword, index) => (
            <span key={`${keyword}-${index}`} className={'text-brand-aqua'}>
              #{keyword}
              {index < article.content.keywords.length - 1 ? ',' : ''}
            </span>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex space-x-1 text-sm text-gray-500">
            <time dateTime={article.first_published_at}>
              {formatDate(article.first_published_at)}
            </time>
            <span aria-hidden="true">&middot;</span>
            <span>{calculateReadingTime()} min read</span>
          </div>
          <div className="hidden lg:block">
            <Link href={article.full_slug}>
              <a className="text-sm font-medium text-brand-light-blue hover:underline">
                Read full story
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-2 lg:hidden">
          <Link href={article.full_slug}>
            <a className="text-sm font-medium text-brand-light-blue hover:underline">
              Read full story
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
