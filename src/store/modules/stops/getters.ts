import { GetterTree } from 'vuex';
import { StopsState } from './state';
import { StoreInterface } from '../../index';

export const StopGetters = {
  GET_STOPS: 'stops/getStops',
  GET_CURRENT_STOP: 'stops/getCurrentStop',
  GET_IS_LOADING_STOP: 'stops/getIsLoadingStop',
  GET_IS_STOP_READY: 'stops/getIsStopReady',
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
}



export default getters;