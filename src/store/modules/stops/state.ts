import { Stop, DataLine } from '../../../interfaces/stops';
export interface StopsState {
  stops: Stop[];
  currentStop?: Stop;
  stopCoords?: [number, number];
  isLoadingStop: boolean;
  isStopReady: boolean;
  stopName: string;
  currentLines?: DataLine[];
  selectedLine?: DataLine; 
}

function state(): StopsState {
  return {
    stops: [],
    currentStop: undefined,
    stopCoords: undefined,
    isLoadingStop: false,
    isStopReady: false,
    stopName: '',
    currentLines: undefined,
    selectedLine: undefined,
  }
}

export default state;