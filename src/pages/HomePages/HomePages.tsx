import { useAppSelector } from 'hooks/useGetData';
import TopHeader from 'layout/components/TopHeader';

const HomePages = () => {
  const {
    data: {
      data: { access_token },
    },
  } = useAppSelector(
    (state) => state.persistedReducer.auth
  );
  return (
    <div>
      <TopHeader />
      <h1 className='text-4xl text-center mt-24'>
        {access_token
          ? '👋 Hi, You are logged in'
          : '👋 Hello, Please Login To See The Dashboard'}
      </h1>
    </div>
  );
};

export default HomePages;
