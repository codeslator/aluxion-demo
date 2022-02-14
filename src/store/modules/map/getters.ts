import { GetterTree } from 'vuex';
import { MapState } from './state';
import { StoreInterface } from '../../index';

export const MapGetters = {
  GET_IS_MAP_READY: 'map/getIsMapReady',
  GET_MAP: 'map/getMap',
  GET_DISTANCE: 'map/getDistance',
  GET_DURATION: 'map/getDuration'
}

const getters: GetterTree<MapState, StoreInterface> = {
  getIsMapReady: (state) => {
    return !!state.map;
  },
  getMap: (state) => {
    return state.map;
  },
  getDistance: (state) => {
    return state.distance;
  },
  getDuration: (state) => {
    return state.duration;
  }
}

export default getters;