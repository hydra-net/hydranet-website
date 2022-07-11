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
