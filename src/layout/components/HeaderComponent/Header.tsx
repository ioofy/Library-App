import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { defaultState } from 'app/state/authSlice';
import { useAppSelector } from 'hooks/hook';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    data: {
      user: { email, name },
    },
  } = useAppSelector((state) => state.auth);

  console.log(email, name);

  const getToken = localStorage.getItem('token');

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/auth/login');
    dispatch(defaultState());
  };

  return (
    <div>
      <p>Header</p>
      {getToken && (
        <button
          onClick={signOut}
          className='bg-transparent hover:bg-blue-500 text-blue-700 
          font-semibold hover:text-white py-2 px-4 border 
          border-blue-500 hover:border-transparent rounded'
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
