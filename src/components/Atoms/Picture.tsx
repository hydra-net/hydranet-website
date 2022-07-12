import { IMedia } from '../../storyblok/models/IMedia';
import { defineSourceType } from '../../helpers/common';

const Picture = ({ sources = [], fallback, cssClasses }: IMedia) => {
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
