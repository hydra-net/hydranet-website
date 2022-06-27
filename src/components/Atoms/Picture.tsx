import { ReactNode, useEffect, useState } from 'react';
import Skeleton from './Skeleton';

export interface ISrcSet {
  src: string;
  type: string;
}

export interface IPicture {
  srcSets: Array<ISrcSet>;
  isLazy?: boolean;
  alt: string;
  classes?: string;
  fallBackSrc: string;
  placeholder?: ReactNode;
}

const Picture = ({
  isLazy,
  srcSets = [],
  fallBackSrc,
  classes,
  alt,
  placeholder,
}: IPicture) => {
  const [lazySrcSets, setLazySrcSets] = useState<Array<Record<string, string>>>(
    []
  );
  const [lazyFallbackSrc, setLazyFallbackSrc] = useState<string>('');

  const lazyImport = (path: string) => import('/assets/' + path);

  useEffect(() => {
    if (isLazy) {
      importImages();
    }
  }, []);

  /**
   * Import dynamically images/svg from the asset folder
   * It will read the paths passed in the srcSets src
   * The src should be written with : images/x or svg/x nothing else in front
   */
  const importImages = async () => {
    try {
      const loaded: Array<Record<string, string>> = [];
      for (let i = 0; i < srcSets.length; i++) {
        const lazyImage = await lazyImport(srcSets[i].src);
        const lazySrcSet: Record<string, string> = {
          ...srcSets[i],
          src: lazyImage?.default?.src,
        };
        loaded.push(lazySrcSet);
      }
      setLazySrcSets(loaded);
      const lazyFallBackImg = await lazyImport(fallBackSrc);
      setLazyFallbackSrc(lazyFallBackImg?.default?.src);
    } catch {
      console.log('Error fetching lazy images');
    }
  };

  const renderLazyLoadedImages = () => (
    <picture>
      {lazySrcSets.map((item) => (
        <source
          key={item.src + item.type}
          srcSet={item.src}
          type={`image/${item.type}`}
        />
      ))}
      <img src={lazyFallbackSrc} alt={alt} className={classes} />
    </picture>
  );

  const renderStaticImages = () => (
    <picture>
      {srcSets.map((item) => (
        <source
          key={item.src + item.type}
          srcSet={item.src}
          type={`image/${item.type}`}
        />
      ))}
      <img src={fallBackSrc} alt={alt} className={classes} />
    </picture>
  );

  const renderPlaceholder = () => {
    if (lazyFallbackSrc) {
      return <img src={lazyFallbackSrc} alt={alt} className={classes} />;
    }
    if (placeholder) {
      return placeholder;
    }
    return <Skeleton.Square size={'24'} />;
  };

  return (
    <>
      {isLazy
        ? lazySrcSets.length === srcSets.length
          ? renderLazyLoadedImages()
          : renderPlaceholder()
        : renderStaticImages()}
    </>
  );
};

export default Picture;
