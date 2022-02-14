import { MutationTree } from 'vuex';
import { Stop } from '../../../interfaces/lines';
import { LinesState } from './state';

export const LinesMutations = {
  SET_LINE_STOPS: 'setLineStops',
  SET_IS_LINE_STOPS_READY: 'setIsLineStopsReady',
}

const mutation: MutationTree<LinesState> = {
  setLineStops: (state: LinesState, stops: Stop[]) => {
    state.lineStops = stops;
    state.isLineStopsReady = true;
  },
  setIsLineStopsReady: (state: LinesState, value: boolean) => {
    state.isLineStopsReady = value;
  },
}


export default mutation;