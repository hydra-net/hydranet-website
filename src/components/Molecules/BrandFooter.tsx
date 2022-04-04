import Socials from './Socials';
import Container from '../Atoms/Container';

const BrandFooter = () => {
  return (
    <Container size={'xl'}>
      <footer
        className={
          'mx-auto flex h-full min-h-[12rem] flex-col items-center justify-center lg:min-h-[10rem] lg:flex-row lg:justify-between'
        }
      >
        <div className={'mx-auto mb-9 w-56 lg:mb-0 lg:w-80'}>
          <img src={'/HYDRANET_LOGO.png'} />
        </div>
        <div className="flex w-full justify-center lg:flex-grow ">
          <Socials />
        </div>
      </footer>
    </Container>
  );
};

export default BrandFooter;
