import { Module } from 'vuex';
import { StoreInterface } from '../../index';
import state, { StopsState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export const StopsNamespace = 'stops/';

const stopsModule: Module<StopsState, StoreInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default stopsModule;