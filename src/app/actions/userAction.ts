import userService from 'api/userApi';
import {
  getUserFail,
  getUserPending,
  getUserSuccess,
} from 'app/state/userSlice';

import { fetchUser } from 'api/userApi';

export const getMyProfile = () => async (dispatch: any) => {
  try {
    dispatch(getUserPending());

    // call API
    const user = await fetchUser();

    console.log(user);
  } catch (error) {
    dispatch(getUserFail(error));
  }
};
