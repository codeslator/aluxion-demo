import { Module } from 'vuex';
import { StoreInterface } from '../../index';
import state, { LinesState as LinesState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export const LinesNamespace = 'lines/';

const linesModule: Module<LinesState, StoreInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default linesModule;