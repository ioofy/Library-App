import React, { Dispatch } from 'react';
import { useHistory } from 'react-router-dom';

interface Props {
  setIsAuth: Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<Props> = ({ setIsAuth }) => {
  const history = useHistory();

  const handleLogin = () => {
    setIsAuth(true);
    history.push('/dashboard');
  };

  return (
    <div>
      <h1>Login Pages</h1>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => handleLogin()}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
