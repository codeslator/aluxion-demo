import { Module } from 'vuex';
import { StoreInterface } from '../../index';
import state, { UIState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const uiModule: Module<UIState, StoreInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default uiModule;