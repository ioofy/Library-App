import loadable from '@loadable/component';

const HelmetEntity = loadable(() => import('components/Helmet/Helmet'));
const TopHeader = loadable(() => import('layout/components/TopHeader'));

const HomePages = () => {
  return (
    <div>
      <HelmetEntity title='HomePage' description='Home' />
      <TopHeader />
      <h1 className='text-4xl text-center mt-24'>
        👋 Hello, Please Login To See The Dashboard
      </h1>
    </div>
  );
};

export default HomePages;

