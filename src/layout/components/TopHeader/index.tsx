import { Link } from 'react-router-dom';
import { getToken } from 'utils/getToken';

const TopHeader = () => {
  return (
    <div
      className='h-16 flex justify-center items-center top-0 bg-blue-400 sticky'
      style={{ zIndex: 9999 }}
    >
      <div className='flex h-16 w-full p-4 max-w-8xl'>
        <a href='/dashboard' className='text-2xl text-white ml-8'>
          <h1>LIBRARY ONLINE</h1>
        </a>
      </div>
      <div className='mr-10'>
        {getToken && (
          <Link to='/profile'>
            <div className='max-w-full flex items-center'>
              <div className='avatar w-10'>
                <img
                  src='https://ph-files.imgix.net/2fb378d7-0035-4a85-817c-e819d8f5dbaa.png?auto=format&auto=compress&codec=mozjpeg&cs=strip'
                  alt='avatar'
                />
              </div>

              <div className='ml-4'>
                <span className='text-xl text-white'>Profile</span>
              </div>
            </div>
          </Link>
        )}

        <div className='max-w-full flex items-center'>
          {!getToken && (
            <Link to='/auth/login'>
              <div className='ml-4'>
                <span className='text-xl text-white'>Login</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
