import { GetterTree } from 'vuex';
import { StopsState } from './state';
import { StoreInterface } from '../../index';

export const StopGetters = {
  GET_STOPS: 'stops/getStops',
  GET_CURRENT_STOP: 'stops/getCurrentStop',
  GET_IS_LOADING_STOP: 'stops/getIsLoadingStop',
  GET_IS_STOP_READY: 'stops/getIsStopReady',
  GET_STOP_COORDS: 'stops/getStopCoords',
  GET_STOP_NAME: 'stops/getStopName',
  GET_CURRENT_LINES: 'stops/getCurrentLines',
  GET_SELECTED_LINE: 'stops/getSelectedLine',
};

const getters: GetterTree<StopsState, StoreInterface> = {
  getStops: (state) => {
    return state.stops;
  },
  getCurrentStop: (state) => {
    return state.currentStop;
  },
  getIsLoadingStop: (state) => {
    return state.isLoadingStop;
  },
  getIsStopReady: (state) => {
    return state.isStopReady;
  },
  getStopCoords: (state) => {
    return state.stopCoords;
  },
  getStopName: (state) => {
    return state.stopName;
  },
  getCurrentLines: (state) => {
    return state.currentLines;
  },
  getSelectedLine: (state) => {
    return state.selectedLine;
  },
}



export default getters;