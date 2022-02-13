import { GetterTree } from 'vuex';
import { AuthState } from './state';
import { StoreInterface } from '../../index';

export const AuthGetters = {
    GET_AUTH: 'auth/getAuth',
    GET_IS_AUTHENTICATED: 'auth/getIsAuthenticated',
}

const getters: GetterTree<AuthState, StoreInterface> = {
    getAuth: ( state ) => {
        return state.auth;
    },
    getIsAuthenticated: ( state ) => {
        return state.isAuthenticated;
    },
}



export default getters;