import { mergeClassNames } from '../../helpers/styles';
import { ISocial } from '../../storyblok/models/ISocial';

type SocialsProps = {
  socials: Array<ISocial>;
};
const Socials = ({ socials }: SocialsProps) => {
  return (
    <div
      className={
        'grid w-full max-w-xs grid-cols-5 gap-x-1 gap-y-6 text-center lg:ml-auto xl:max-w-lg xl:grid-cols-9'
      }
    >
      {socials.map((social) => (
        <a
          key={social._uid}
          href={social.href}
          target={'_blank'}
          className={
            'rounded-md focus:outline-none focus:ring focus:ring-brand-light-blue'
          }
          aria-label={social.name}
          rel="noreferrer"
        >
          <i
            className={mergeClassNames(
              'text-2xl text-white transition-colors duration-200 hover:text-brand-light-blue xl:text-3xl',
              social.icon
            )}
          />
        </a>
      ))}
    </div>
  );
};
export default Socials;
