
import { ActionTree } from 'vuex';
import { MapState } from './state';
import { StoreInterface } from '../../index';
import { directionsApi } from '../../../apis';
import { DirectionsResponse } from '../../../interfaces/directions';
import { MapMutations } from './mutations';

export type LngLat = [number, number];

export const MapActions = {
  FETCH_ROUTE_BETWEEN_POINTS: 'map/fetchRouteBetweenPoints',
};

const actions: ActionTree<MapState, StoreInterface> = {
  fetchRouteBetweenPoints: async ({ commit }, { start, end }: { start: LngLat, end: LngLat }) => {
    const response = await directionsApi.get<DirectionsResponse>(`${start.join(',')};${end.join(',')}`);
    // console.log(response.data.routes[0].geometry.coordinates)
    commit(MapMutations.SET_DISTANCE_AND_DURATION, {
      distance: response.data.routes[0].distance,
      duration: response.data.routes[0].duration,
    })
    commit(MapMutations.SET_ROUTE_POLYLINES, response.data.routes[0].geometry.coordinates);
  }
}



export default actions;