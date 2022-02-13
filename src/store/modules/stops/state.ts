import { Stop } from '../../../interfaces/stops';
export interface StopsState {
  stops: Stop[];
  currentStop?: Stop;
  isLoadingStop: boolean;
  isStopReady: boolean;
}

function state(): StopsState {
  return {
    stops: [],
    currentStop: undefined,
    isLoadingStop: false,
    isStopReady: false,
  }
}

export default state;