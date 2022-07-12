import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';

import Container from '../Atoms/Container';
import Picture from '../Atoms/Picture';
import { INavbar } from '../../storyblok/models/ILayout';

import { handleScrollTo } from '../../helpers/events';
import { useRouter } from 'next/router';

const Navbar = ({ navigation, logo, logoMobile }: INavbar) => {
  const router = useRouter();
  /**
   * Handler to close the mobile menu when a link is clicked
   * @param href
   * @param closeCallback
   */
  const handleMobileClick = (href: string, closeCallback: () => void) => {
    if (typeof closeCallback === 'function') {
      closeCallback();
    }
    handleScrollTo(href);
  };

  const handleClickLogo = (scrollTo?: string) => {
    if (router.route !== '/') {
      if (router.route !== `/${router.locale}`) {
        return router.push(
          router.locale !== router.defaultLocale ? `/${router.locale}` : '/'
        );
      }
    }
    if (scrollTo) {
      return handleScrollTo(scrollTo);
    }
  };
  const renderNavLinks = (closeMobileCallback?: () => void) => {
    return navigation.map((link) => {
      if (link.href?.startsWith('#')) {
        return (
          <button
            tabIndex={0}
            key={link.href}
            className={`nav-link nav-link--${link.cssClasses}`}
            onClick={
              closeMobileCallback
                ? () => handleMobileClick(link.href, closeMobileCallback)
                : () => handleScrollTo(link.href)
            }
          >
            {link.name}
          </button>
        );
      } else {
        return (
          <Link href={link.href} key={link.href}>
            <a
              tabIndex={0}
              target={link.target || '_self'}
              className={`nav-link nav-link--${link.cssClasses}`}
            >
              {link.name}
            </a>
          </Link>
        );
      }
    });
  };

  return (
    <Disclosure
      as="nav"
      className={
        'fixed top-0 z-[999] w-full bg-brand-darker-blue transition-all'
      }
    >
      {({ open, close }) => (
        <>
          <Container size={'xl'}>
            <div className="flex h-16 justify-between lg:h-20">
              <div className="flex flex-shrink-0 items-center">
                <button
                  onClick={() => handleClickLogo('app-top')}
                  className={'focus:outline-none'}
                >
                  <span className="w-full xl:hidden">
                    <Picture
                      sources={logoMobile[0].sources}
                      fallback={logoMobile[0].fallback}
                      cssClasses={
                        logoMobile[0].cssClasses || 'mx-auto h-8 sm:h-10'
                      }
                    />
                  </span>
                  <Picture
                    sources={logo[0].sources}
                    fallback={logo[0].fallback}
                    cssClasses={
                      logo[0].cssClasses ||
                      'hidden h-10 w-auto cursor-pointer xl:block'
                    }
                  />
                </button>
              </div>
              {/* LG menu */}
              <div className="my-auto hidden h-10 sm:space-x-3 lg:flex">
                {renderNavLinks()}
              </div>

              {/* Mobile menu button */}
              <div className="-mr-2 flex items-center lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-brand-light-blue hover:text-brand-aqua focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-light-blue">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden={open} />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden={!open} />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </Container>
          {/* Mobile menu content*/}
          <span className="w-full bg-brand-darker-blue lg:hidden">
            <Container>
              <Disclosure.Panel>
                <ul className="grid space-y-3 pt-2 pb-3">
                  {renderNavLinks(close)}
                </ul>
              </Disclosure.Panel>
            </Container>
          </span>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
