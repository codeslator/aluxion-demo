import { Module } from 'vuex';
import { StoreInterface } from '../../index';
import state, { UsersState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export const UserNamespace = 'users/';

const usersModule: Module<UsersState, StoreInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default usersModule;