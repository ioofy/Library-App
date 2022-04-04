import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { patterns } from 'utils/pattern';
import { DataFromResponse, FormLoginProps } from 'types/declare';
import { authPending, authSuccess, authFail } from 'app/state/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store/store';
import { authApi } from 'api/authApi';
import TopHeader from 'layout/components/TopHeader';

const LoginPages = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginProps>();

  const onSubmitForm = async (values: FormLoginProps) => {
    dispatch(authPending());

    try {
      const isAuth: DataFromResponse = await authApi({
        ...values,
      });

      // 500 unknown
      // 401 unauthorized
      // 200 success

      if (isAuth.data.status === 'error') {
        return dispatch(authFail(isAuth.data.status));
      } else {
        sessionStorage.setItem('jwt', isAuth.data.access_token);
        dispatch(authSuccess());
        toast.success('Login success');
      }

      const awaitNavigate = setTimeout(function () {
        window.location.href = '/dashboard';
      }, 800);

      return awaitNavigate;
    } catch (error) {
      dispatch(authFail(error));
    }
  };

  return (
    <>
      <TopHeader />
      <div className='flex items-center justify-center min-h-screen'>
        <div className='px-10 py-8 mt-4 text-left bg-gray-100 shadow-lg rounded-lg'>
          <h3 className='text-2xl font-bold text-center block -mt-20 mb-20'>
            Login
          </h3>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <div className='mt-4'>
              <div>
                <label className='block opacity-60' htmlFor='email'>
                  Email
                </label>
                {errors.email && (
                  <p className='text-red-400'>*Email dibutuhkan</p>
                )}
                <input
                  type='text'
                  autoComplete='off'
                  placeholder='Example@yourmail.com'
                  {...register('email', {
                    required: true,
                    pattern: patterns,
                  })}
                  className='px-12 py-2 mt-2 border rounded-md 
                focus:outline-none focus:ring-1 focus:ring-blue-600'
                />
              </div>
              <div className='mt-4'>
                <label className='block opacity-60'>Password</label>
                {errors.password && (
                  <p className='text-red-400'>*Password dibutuhkan</p>
                )}
                <input
                  type='password'
                  placeholder='7+ strong password'
                  {...register('password', {
                    required: true,
                    minLength: 5,
                  })}
                  className='px-12 py-2 mt-2 border rounded-md 
                focus:outline-none focus:ring-1 focus:ring-blue-600'
                />
              </div>
              <div>
                <button
                  className='px-6 py-2 mt-8 text-white bg-blue-600 
                rounded-full hover:bg-blue-900 w-full'
                >
                  {isLoading ? 'Loading...' : 'Login'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPages;
