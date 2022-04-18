/**
 * Handler to retrieve the image source url used in the <figure> rss feed from Medium
 * Medium removed the thumbnail property in the RSS feed, the only way to get it now is from the content:encoded property where all the article is present
 * @param htmlString
 * @return the image src url
 */
export function extractThumbnailsFromHtmlString(htmlString: string) {
  const regexToExtractImgTag = /img.*?src=(["'])(.*?)\1/i;
  const fallbackImg = '/newsFallbackImg.webp';
  try {
    // the srcUrl is at the last item of the array of the match
    // @ts-ignore nullable
    const imageSrcUrl = htmlString.match(regexToExtractImgTag)[2];
    if (imageSrcUrl && imageSrcUrl.startsWith('https://')) {
      return imageSrcUrl;
    }
    return fallbackImg;
  } catch (err) {
    console.error("Couldn't parse the thumbnail from medium post", htmlString);
    return fallbackImg;
  }
}
