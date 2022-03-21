import { useSigninMutation } from 'api/authApi';
import { setUser } from 'app/state/authSlice';
import { useAppDispatch } from 'hooks/useGetData';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { patterns } from 'utils/pattern';
import { FormLoginProps } from 'types/shippingComps';
import TopHeader from 'layout/components/TopHeader';

type DataFromResponse = {
  success: boolean;
  data: {
    data: {
      access_token: string;
    };
    user: {
      id: number;
      name: string;
      email: string;
      phone_number: number | string;
    };
  };
};

const LoginPages = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [
    signin,
    {
      data,
      isLoading,
      error,
      isError,
      isSuccess,
    },
  ] = useSigninMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginProps>();

  const onSubmitForm = (
    values: FormLoginProps
  ) => {
    signin({
      ...values,
    });
  };

  useEffect(() => {
    const response = data as DataFromResponse;

    if (isError) {
      toast.error((error as any).data.message);
    }

    if (isSuccess) {
      toast.success('Login Success');
      localStorage.setItem(
        'token',
        response.data.data.access_token
      );
      dispatch(
        setUser({
          data: {
            data: {
              access_token:
                response.data.data.access_token,
            },
            user: {
              id: response.data.user.id,
              name: response.data.user.name,
              email: response.data.user.email,
              phone_number:
                response.data.user.phone_number,
            },
          },
        })
      );
      navigate('/dashboard');
    }
  }, [
    data,
    dispatch,
    error,
    isError,
    isSuccess,
    navigate,
  ]);

  return (
    <>
      <TopHeader />
      <div className='flex items-center justify-center min-h-screen'>
        <div className='px-10 py-8 mt-4 text-left bg-gray-100 shadow-lg rounded-lg'>
          <h3 className='text-2xl font-bold text-center block -mt-20 mb-20'>
            Login
          </h3>
          <form
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div className='mt-4'>
              <div>
                <label
                  className='block opacity-60'
                  htmlFor='email'
                >
                  Email
                </label>
                {errors.email && (
                  <p className='text-red-400'>
                    *Email dibutuhkan
                  </p>
                )}
                <input
                  type='text'
                  autoComplete='off'
                  placeholder='Example@yourmail.com'
                  {...register('email', {
                    required: true,
                    pattern: patterns,
                  })}
                  className='w-full px-10 py-2 mt-2 border rounded-md 
                focus:outline-none focus:ring-1 focus:ring-blue-600'
                />
              </div>
              <div className='mt-4'>
                <label className='block opacity-60'>
                  Password
                </label>
                {errors.password && (
                  <p className='text-red-400'>
                    *Password dibutuhkan
                  </p>
                )}
                <input
                  type='password'
                  placeholder='7+ strong password'
                  {...register('password', {
                    required: true,
                    minLength: 7,
                  })}
                  className='w-full px-10 py-2 mt-2 border rounded-md 
                focus:outline-none focus:ring-1 focus:ring-blue-600'
                />
              </div>
              <div>
                <button
                  className='px-6 py-2 mt-8 text-white bg-blue-600 
                rounded-full hover:bg-blue-900 w-full'
                >
                  {isLoading
                    ? 'Loading...'
                    : 'Login'}
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
