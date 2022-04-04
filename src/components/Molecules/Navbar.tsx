import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { UNISWAP_BUY_LINK } from '../../constants';
import { INavigationLink } from '../../interfaces';
import Container from '../Atoms/Container';

const navigation: INavigationLink[] = [
  {
    name: 'Tokenomics',
    href: 'https://hydra-net.gitbook.io/hydra/tokenomics',
    target: '_blank',
  },
  {
    name: 'Voting',
    href: 'https://snapshot.org/#/hydranet.eth/',
    target: '_blank',
  },
  {
    name: 'Buy',
    href: UNISWAP_BUY_LINK,
    target: '_blank',
  },
];

const Navbar = () => {
  return (
    <Disclosure
      as="nav"
      className={'sticky top-0 z-[999] w-full bg-brand-darkest-blue shadow'}
    >
      {({ open }) => (
        <>
          <Container size={'xl'}>
            <div className="flex h-16 justify-between">
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
              <div className="hidden sm:flex sm:space-x-5">
                {navigation.map((link) => (
                  <a
                    key={link.href}
                    href="#"
                    target={link.target || '_self'}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium uppercase tracking-wider text-brand-aqua focus:rounded-md focus:outline-none focus:ring focus:ring-brand-light-blue"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
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

          <Container className={'sm:hidden'}>
            <Disclosure.Panel>
              <div className="space-y-1 pt-2 pb-3">
                {navigation.map((link, index) => (
                  <a
                    key={link.href}
                    href="#"
                    tabIndex={index}
                    target={link.target || '_self'}
                    className="block py-2 text-base font-medium text-brand-aqua hover:text-brand-light-blue focus:rounded-md focus:outline-none focus:ring focus:ring-brand-light-blue"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </Container>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
