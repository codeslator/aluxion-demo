import { GetterTree } from 'vuex';
import { LinesState } from './state';
import { StoreInterface } from '../../index';

export const LinesGetters = {
  GET_LINE_STOPS: 'lines/getLineStops',
  GET_IS_LINE_STOPS_READY: 'lines/getIsLineStopsReady',
};

const getters: GetterTree<LinesState, StoreInterface> = {
  getLineStops: (state) => {
    return state.lineStops;
  },
  getIsLineStopsReady: (state) => {
    return state.isLineStopsReady;
  },
};

export default getters;