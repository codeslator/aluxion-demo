import { GetterTree } from 'vuex';
import { UsersState } from './state';
import { StoreInterface } from '../../index';

export const UserGetters = {
    USERS: 'users/users',
    ACTIVE_USER: 'users/activeUser',
    IS_LOADING_USERS: 'users/isLoadingUsers',
    IS_USERS_READY: 'users/isUsersReady',
};

const getters: GetterTree<UsersState, StoreInterface> = {
    users: ( state ) => {
        return state.users;
    },
    activeUser: ( state ) => {
        return state.activeUser;
    },
    isLoadingUsers: ( state ) => {
        return state.isLoadingUsers;
    },
    isUsersReady: ( state ) => {
        return state.isUsersReady;
    },
};

export default getters;