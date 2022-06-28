import { IPicture } from '../../storyblok/models/IPicture';

const Picture = ({ sources = [], fallback, cssClasses }: IPicture) => {
  const defineSourceType = (filename: string): string => {
    const ext = filename.substring(filename.lastIndexOf('.') + 1);
    let type = `image/${ext}`;
    if (ext === 'svg') {
      type = `image/svg+xml`;
    }
    return type;
  };
  return (
    <>
      <picture>
        {sources.map((item) => (
          <source
            key={item.id}
            srcSet={item.filename}
            type={defineSourceType(item.filename)}
          />
        ))}
        <img
          src={fallback?.filename}
          className={cssClasses}
          alt={fallback?.alt}
        />
      </picture>
    </>
  );
};

export default Picture;
