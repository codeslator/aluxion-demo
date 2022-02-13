import { User } from "../../../interfaces/users";

export interface UsersState {
  users: User[];
  activeUser?: User;
  isLoadingUsers: boolean;
  isUsersReady: boolean;
}

function state(): UsersState {
  return {
    users: [],
    activeUser: undefined,
    isLoadingUsers: false,
    isUsersReady: false,
  }
}

export default state;