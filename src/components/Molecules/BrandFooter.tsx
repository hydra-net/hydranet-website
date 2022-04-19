import Socials from './Socials';
import Container from '../Atoms/Container';
import { handleScrollTo } from '../../helpers/events';

const currentYear: number = new Date().getFullYear();

const BrandFooter = () => {
  return (
    <Container size={'xl'}>
      <footer
        className={
          'mx-auto flex h-full min-h-[12rem] flex-col items-center justify-center lg:min-h-[10rem] lg:flex-row lg:justify-between'
        }
      >
        <div className={'mx-auto mb-9 w-56 pt-12 lg:mb-0 lg:w-72 lg:pt-0'}>
          <button onClick={() => handleScrollTo('app-top')}>
            <img src={'/hydranet-full-logo.png'} alt={'hydranet logo'} />
          </button>
        </div>
        <div className="flex w-full  justify-center lg:flex-grow ">
          <Socials />
        </div>
      </footer>
      <p
        className={'md:text-md pb-6 pt-8 text-center text-sm text-brand-greyed'}
      >
        © {currentYear} All rights reserved. Hydranet.ai
      </p>
    </Container>
  );
};

export default BrandFooter;
