import {
  getUserFail,
  getUserPending,
  getUserSuccess,
} from 'app/state/userSlice';

import { getUser } from 'api/userApi';
import { UserProps } from 'types/declare';

export const getMyProfile = () => async (dispatch: any) => {
  try {
    dispatch(getUserPending());

    // call API
    const responseUser: UserProps = await getUser();

    if (responseUser && responseUser.id) {
      dispatch(getUserSuccess(responseUser));
    } else {
      dispatch(getUserFail("User doesn't exist"));
    }
  } catch (error) {
    dispatch(getUserFail(error));
  }
};
