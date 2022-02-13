import { Module } from 'vuex';
import { StoreInterface } from '../../index';
import state, { MapState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const mapModule: Module<MapState, StoreInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default mapModule;