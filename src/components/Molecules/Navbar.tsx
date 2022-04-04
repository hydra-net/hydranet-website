import _ from 'lodash';

import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { HYDRANET_APP, UNISWAP_BUY_LINK } from '../../constants';
import { INavigationLink } from '../../interfaces';
import Container from '../Atoms/Container';
import { mergeClassNames } from '../../helpers/styles';
import { useEffect, useRef, useState } from 'react';
import { handleScrollTo } from '../../helpers/events';

const baseLinkAsButtonClasses =
  'hover:opacity-90 rounded-full px-1 lg:px-5 text-white text-xs sm:text-sm tracking-widest focus:outline-none focus:ring focus:ring-brand-aqua';

const navigation: INavigationLink[] = [
  {
    name: 'Products',
    href: '#products',
    target: '_self',
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
   * - Call the toggling the sticky class function for the headerBlock if it's not ticking (prevent expensive resources usage)
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
   * - Toggling the sticky class on the headerBlock
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
            <div className="flex h-16 justify-between lg:h-24">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src="./HYDRANET_LOGO.png"
                  alt="Hydranet Logo"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="./HYDRANET_LOGO.png"
                  alt="Hydranet Logo"
                />
              </div>
              {/* LG menu */}
              <div className="my-auto hidden h-10 sm:space-x-5 lg:flex">
                {navigation.map((link) => {
                  if (link.href.startsWith('#')) {
                    return (
                      <button
                        key={link.href}
                        className={
                          'text-md inline-flex items-center px-1 pt-1 font-medium uppercase tracking-wider text-brand-aqua transition-colors duration-300 hover:text-brand-light-blue focus:rounded-md focus:outline-none focus:ring focus:ring-brand-light-blue'
                        }
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
                            : 'text-md text-brand-aqua hover:text-brand-light-blue focus:rounded-md focus:outline-none focus:ring focus:ring-brand-light-blue',
                          'inline-flex items-center px-1 pt-1 font-medium uppercase tracking-wider transition-colors duration-300'
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
                <ul className="space-y-1 pt-2 pb-3">
                  {navigation.map((link, index) => (
                    <li
                      key={link.href}
                      className={
                        link.asButtonClasses &&
                        'inline-block w-1/2 pb-2 text-center'
                      }
                    >
                      <a
                        href="#"
                        tabIndex={index}
                        target={link.target || '_self'}
                        className={mergeClassNames(
                          link.asButtonClasses
                            ? `mx-auto w-auto min-w-[6rem] justify-center py-2 sm:min-w-[8rem] ${link.asButtonClasses}`
                            : 'py-2 text-brand-aqua hover:text-brand-light-blue hover:text-brand-light-blue focus:rounded-md focus:outline-none focus:ring focus:ring-brand-light-blue',
                          'inline-flex text-base font-medium'
                        )}
                      >
                        {link.name}
                      </a>
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
