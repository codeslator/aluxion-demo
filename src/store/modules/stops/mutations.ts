import { MutationTree } from 'vuex';
import { StopsState } from './state';
import { Stop, DataLine } from '../../../interfaces/stops';

export const StopMutations = {
  SET_STOPS: 'setStops',
  SET_CURRENT_STOP: 'setCurrentStop',
  SET_IS_LOADING_STOP: 'setIsLoadingStop',
  SET_IS_STOP_READY: 'setIsStopReady',
  SET_STOP_COORDS: 'setStopCoords',
  SET_STOP_NAME: 'setStopName',
  SET_CURRENT_LINES: 'setCurrentLines',
  SET_SELECTED_LINE: 'setSelectedLine',
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
  setStopCoords: (state: StopsState, { lat, lng }: { lat: number, lng: number }) => {
    state.stopCoords = [lat, lng];
    state.isLoadingStop = false;
  },
  setStopName: (state: StopsState, name: string) => {
    state.stopName = name;
  },
  setCurrentLines: (state: StopsState, lines: DataLine[]) => {
    state.currentLines = lines;
  },
  setSelectedLine: (state: StopsState, line: DataLine) => {
    state.selectedLine = line;
  },
};


export default mutation;