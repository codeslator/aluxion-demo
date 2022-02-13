import { MutationTree } from 'vuex';
import { User } from '../../../interfaces/users';
import { UsersState } from './state';

export const UserMutations = {
    SET_USERS: 'setUsers',
    SET_ACTIVE_USER: 'setActiveUser',
    SET_IS_LOADING_USERS: 'setIsLoadingUsers',
    SET_IS_USERS_READY: 'setIsUsersReady',
};

const mutation: MutationTree<UsersState> = {
    // someMutation: ( /* state: ExampleStateInterface */) => {
    //     // a line to prevent linter errors
    // }
    setUsers: (state: UsersState, users: User[]) => {
        state.users = users;
        state.isUsersReady = true;
        state.isLoadingUsers = false;
    },
    setActiveUser: (state: UsersState, user: User) => {
        state.activeUser = user;
    },
    setIsLoadingUsers: (state: UsersState, value: boolean) => {
        state.isLoadingUsers = value;
    },
    setIsUsersReady: (state: UsersState, value: boolean) => {
        state.isUsersReady = value;
    },
}

export default mutation;