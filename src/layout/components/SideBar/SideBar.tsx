import { useDispatch } from 'react-redux';

import { defaultState } from 'app/state/authSlice';
import { useAppSelector } from 'hooks/useGetData';
import * as BoxIcons from 'react-icons/bi';
import Content from 'components/ContentInside/ContentInside';
import TopHeader from '../TopHeader';

type ContentProps = {
  children: React.ReactNode;
};

const SideBar: React.FC<ContentProps> = (
  props
) => {
  const dispatch = useDispatch();

  const signOut = () => {
    // remove auth token
    localStorage.removeItem('token');
    // remove persist redux root into null
    localStorage.removeItem('persist:root');
    // with refresh
    window.location.href = '/auth/login';
    // dispatch to default state from redux
    dispatch(defaultState());
  };

  const {
    data: {
      data: { access_token },
    },
  } = useAppSelector(
    (state) => state.persistedReducer.auth
  );

  return (
    <>
      <TopHeader />
      <div className='flex flex-row'>
        <nav
          className='bg-gray-100 w-80 z-20
        justify-between flex flex-col'
        >
          {access_token ? (
            <div>
              <div className='mt-4 flex items-center justify-center'>
                <ul>
                  <li className='mb-8'>
                    <a
                      href='/dashboard'
                      className='flex'
                    >
                      <span>
                        <BoxIcons.BiHomeAlt
                          size={29}
                        />
                      </span>
                      <span
                        className='ml-4 text-lg'
                        style={{ marginTop: 3 }}
                      >
                        Dashboard
                      </span>
                    </a>
                  </li>
                  <li className='mb-8'>
                    <a
                      href='/shipping-comps'
                      className='flex'
                    >
                      <span>
                        <BoxIcons.BiPackage
                          size={29}
                        />
                      </span>
                      <span
                        className='ml-4 text-lg'
                        style={{ marginTop: 3 }}
                      >
                        Shipping Comps
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <button className='flex items-center justify-center mt-20 border-b-2 border-gray-600'>
              <a href='/auth/login'>
                Login to see content
              </a>
            </button>
          )}
          {access_token && (
            <div
              className='cursor-pointer bg-blue-600 h-12'
              onClick={signOut}
            >
              <div className='flex items-center justify-center mt-2 text-white'>
                <span>
                  <BoxIcons.BiLogOut size={29} />
                </span>
                <span
                  className='ml-4 text-lg font-semibold'
                  style={{ marginTop: 3 }}
                >
                  Log Out
                </span>
              </div>
            </div>
          )}
        </nav>
        <div className='px-16 py-4 text-gray-700 bg-gray-200 h-screen w-screen'>
          <Content>{props.children}</Content>
        </div>
      </div>
    </>
  );
};

export default SideBar;
