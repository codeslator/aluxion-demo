import { Module } from 'vuex';
import { StoreInterface } from '../../index';
import state, { AuthState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export const AuthNamespace = 'auth/';

const authModule: Module<AuthState, StoreInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default authModule;