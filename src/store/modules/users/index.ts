import { Module } from 'vuex';
import { StoreInterface } from '@/store/';
import state, { UsersStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const usersModule: Module<UsersStateInterface, StoreInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default usersModule;