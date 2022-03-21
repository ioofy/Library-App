import { useAppSelector } from 'hooks/useGetData';
import TopHeader from 'layout/components/TopHeader';

const ProfilePages = () => {
  const {
    data: {
      user: { email, name, phone_number },
    },
  } = useAppSelector(
    (state) => state.persistedReducer.auth
  );

  return (
    <>
      <TopHeader />

      <h1 className='text-center text-4xl font-bold text-gray-500 mt-20'>
        Profile
      </h1>

      <div
        className='bg-gray-200 rounded-lg p-10 mt-8 mx-auto'
        style={{ width: '30%' }}
      >
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-2xl text-gray-600'>
              Nama
            </h2>
            <p className='mt-2 font-bold text-lg'>
              {name}
            </p>
          </div>
          <div>
            <div className='avatar w-20'>
              <img
                src='https://ph-files.imgix.net/2fb378d7-0035-4a85-817c-e819d8f5dbaa.png?auto=format&auto=compress&codec=mozjpeg&cs=strip'
                alt='avatar'
              />
            </div>
          </div>
        </div>
        <div className='mt-4 mb-6'>
          <h2 className='text-2xl text-gray-600'>
            Alamat
          </h2>
          <p className='mt-2 font-bold text-lg'>
            Malybu Mansion
          </p>
        </div>
        <div className='mt-4 mb-6'>
          <h2 className='text-2xl text-gray-600'>
            No.HP
          </h2>
          <p className='mt-2 font-bold text-lg'>
            {phone_number}
          </p>
        </div>
        <div className='mt-4 mb-6'>
          <h2 className='text-2xl text-gray-600'>
            Email
          </h2>
          <p className='mt-2 font-bold text-lg'>
            {email}
          </p>
        </div>
        <div className='mt-4 mb-6 w-11/12'>
          <h2 className='text-2xl text-gray-600'>
            Motto
          </h2>
          <p className='mt-2 font-bold text-lg'>
            The best thing about a boolean is even
            if you are wrong, you are only off by
            a bit
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfilePages;
