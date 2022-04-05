import { useEffect, useState } from 'react';
import Link from 'next/link';

import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Container from '../Atoms/Container';

import { HYDRANET_APP, UNISWAP_BUY_LINK } from '../../constants';
import { INavigationLink } from '../../interfaces';
import { handleScrollTo } from '../../helpers/events';
import { mergeClassNames } from '../../helpers/styles';

const baseLinkClasses =
  'inline-flex items-center lg:px-1 lg:pt-1 font-medium uppercase tracking-wider transition-colors duration-300';
const baseLinkAsAnchorClasses =
  'text-md text-brand-aqua hover:text-brand-light-blue focus:rounded-md focus:outline-none focus:text-brand-light-blue';
const baseLinkAsButtonClasses =
  'hover:opacity-90 rounded-full lg:px-4 text-white text-xs sm:text-sm tracking-widest focus:outline-none focus:ring-2 focus:ring-brand-aqua';

const navigation: INavigationLink[] = [
  {
    name: 'Products',
    href: '#products',
  },
  {
    name: 'Roadmap',
    href: '#roadmap',
  },
  {
    name: 'News',
    href: '#articles',
  },
  {
    name: 'Gitbook',
    href: 'https://hydra-net.gitbook.io/hydra/',
    target: '_blank',
  },
  {
    name: 'Voting',
    href: 'https://snapshot.org/#/hydranet.eth/',
    target: '_blank',
  },
  {
    name: 'Buy $HDX',
    href: UNISWAP_BUY_LINK,
    target: '_blank',
    asButtonClasses: `bg-brand-light-blue ${baseLinkAsButtonClasses}`,
  },
  {
    name: 'Launch APP',
    href: HYDRANET_APP,
    target: '_blank',
    asButtonClasses: `bg-primary-gradient ${baseLinkAsButtonClasses}`,
  },
];

const Navbar = () => {
  const [isTicking, setIsTicking] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  /**
   * The behavior to run on a scroll
   * - Call the toggling sticky function for the header if it's not ticking (prevent expensive resources usage)
   */
  function onScroll(): void {
    if (!isTicking) {
      window.requestAnimationFrame((): void => {
        toggleNavStickyClassNav(window.scrollY);
        setIsTicking(false);
      });
    }
    setIsTicking(true);
  }

  /**
   * The behavior to run on a scroll
   * - Toggling the sticky on the state
   * @param lastKnownScrollPosition - Last known scroll position of onScroll event
   */
  function toggleNavStickyClassNav(lastKnownScrollPosition: number): void {
    setIsSticky(lastKnownScrollPosition > 100);
  }

  return (
    <Disclosure
      as="nav"
      className={mergeClassNames(
        isSticky ? 'shadow-2xl sm:bg-brand-darker-blue' : 'sm:bg-transparent',
        'fixed top-0 z-[999] w-full bg-brand-darker-blue transition-all'
      )}
    >
      {({ open }) => (
        <>
          <Container size={'xl'}>
            <div className="flex h-16 justify-between lg:h-20">
              <div className="flex flex-shrink-0 items-center">
                <button
                  onClick={() => handleScrollTo('app-top')}
                  className={'focus:outline-none'}
                >
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="./HYDRANET_LOGO.png"
                    alt="Hydranet Logo"
                  />
                  <img
                    className="hidden h-10 w-auto cursor-pointer lg:block"
                    src="./HYDRANET_LOGO.png"
                    alt="Hydranet Logo"
                  />
                </button>
              </div>
              {/* LG menu */}
              <div className="my-auto hidden h-10 sm:space-x-3 lg:flex">
                {navigation.map((link) => {
                  if (link.href.startsWith('#')) {
                    return (
                      <button
                        key={link.href}
                        className={mergeClassNames(
                          baseLinkClasses,
                          baseLinkAsAnchorClasses
                        )}
                        onClick={() => handleScrollTo(link.href)}
                      >
                        {link.name}
                      </button>
                    );
                  } else {
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target={link.target || '_self'}
                        className={mergeClassNames(
                          link.asButtonClasses
                            ? link.asButtonClasses
                            : baseLinkAsAnchorClasses,
                          baseLinkClasses
                        )}
                      >
                        {link.name}
                      </a>
                    );
                  }
                })}
              </div>

              {/* Mobile menu button */}
              <div className="-mr-2 flex items-center lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-brand-light-blue hover:text-brand-aqua focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-light-blue">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </Container>
          {/* Mobile menu content*/}
          <span className="w-full bg-brand-darker-blue lg:hidden">
            <Container>
              <Disclosure.Panel>
                <ul className="space-y-3 pt-2 pb-3">
                  {navigation.map((link, index) => (
                    <li
                      key={link.href}
                      className={
                        link.asButtonClasses &&
                        'inline-block w-1/2 pt-1.5 pb-2 text-center'
                      }
                    >
                      {link.href.startsWith('#') ? (
                        <button
                          className={mergeClassNames(
                            baseLinkClasses,
                            baseLinkAsAnchorClasses
                          )}
                          onClick={() => handleScrollTo(link.href)}
                        >
                          {link.name}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          tabIndex={0}
                          target={link.target || '_self'}
                          className={mergeClassNames(
                            link.asButtonClasses
                              ? `mx-auto w-auto justify-center sm:min-w-[8rem] ${link.asButtonClasses} px-3 py-2`
                              : 'text-base text-brand-aqua hover:text-brand-light-blue hover:text-brand-light-blue focus:text-brand-light-blue focus:outline-none',
                            'inline-flex font-medium uppercase'
                          )}
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
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
