import { useQuery } from "react-query";
import { UserProps } from "types/models";
import userService from "api/userApi";

export const useGetProfile = () => {
  return useQuery<UserProps, Error>(
    ["userProfile"],
    async () => await userService.getMyProfile()
  );
};
