import { MutationTree } from 'vuex';
import { StopsState } from './state';
import { Stop } from '../../../interfaces/stops';

export const StopMutations = {
  SET_STOPS: 'setStops',
  SET_CURRENT_STOP: 'setCurrentStop',
  SET_IS_LOADING_STOP: 'setIsLoadingStop',
  SET_IS_STOP_READY: 'setIsStopReady',
};

const mutation: MutationTree<StopsState> = {
  setStops: (state: StopsState, stops: Stop[]) => {
    state.stops = stops;
    state.isStopReady = true;
  },
  setCurrentStop: (state: StopsState, stop: Stop) => {
    state.currentStop = stop;
  },
  setIsLoadingStop: (state: StopsState, value: boolean) => {
    state.isLoadingStop = value;
  },
  setIsStopReady: (state: StopsState, value: boolean) => {
    state.isStopReady = value;
  },
};


export default mutation;