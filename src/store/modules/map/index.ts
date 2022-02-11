import { Module } from 'vuex';
import { StoreInterface } from '@/store/';
import state, { MapStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const mapModule: Module<MapStateInterface, StoreInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default mapModule;