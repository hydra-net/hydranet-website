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

/**
 * Open a new tab on browser with the url
 * @param url
 */
export function openExternalTab(url: string): void {
  window.open(url, '_blank');
}

/**
 * Return type used for pictures/videos sources
 * @param filename
 * @param baseType
 */
export const defineSourceType = (
  filename: string,
  baseType = 'image'
): string => {
  const ext = filename.substring(filename.lastIndexOf('.') + 1);
  let type = `${baseType}/${ext}`;
  if (ext === 'svg') {
    type = `${baseType}/svg+xml`;
  }
  return type;
};
