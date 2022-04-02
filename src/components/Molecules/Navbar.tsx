import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { INavigationLink, IStyleable } from '../Interface';

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
    href: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xF4fe727C855c2D395852ca43F645caB4b504Af23&chain=arbitrum',
    target: '_blank',
  },
];

const Navbar = () => {
  return (
    <Disclosure
      as="nav"
      className={'bg-brand-darkest-blue shadow fixed inset-x-0 top-0'}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="./HYDRANET_LOGO.png"
                  alt="Hydranet Logo"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
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
                    className="text-brand-aqua inline-flex items-center px-1 pt-1 text-sm font-medium uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-brand-light-blue hover:text-brand-aqua focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-light-blue">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((link) => (
                <a
                  key={link.href}
                  href="#"
                  target={link.target || '_self'}
                  className=" text-brand-aqua block pl-3 pr-4 py-2 text-base font-medium hover:text-brand-light-blue"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
