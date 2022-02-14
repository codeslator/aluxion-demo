import { Stop } from "../../../interfaces/lines";

export interface LinesState {
  lineStops: Stop[];
  isLineStopsReady: boolean;
}

function state(): LinesState {
  return {
    lineStops: [],
    isLineStopsReady: false,
  }
}

export default state;