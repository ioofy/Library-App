import { getUserFail, getUserSuccess } from "app/slice/userSlice";
import { getUser } from "api/userApi";
import { UserProps } from "types/models";

export const getMyProfile = () => async (dispatch: any) => {
  try {
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
