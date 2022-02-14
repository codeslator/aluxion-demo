
import { ActionTree } from 'vuex';
import { StopsState } from './state';
import { StoreInterface } from '../../index';
import stopsApi from '../../../apis/stopsApi';
import { StopsResponse } from '../../../interfaces/stops';
import { StopMutations } from './mutations';

export const StopActions = {
  SEARCH_STOP_BY_STOP_ID: 'stops/searchStopByStopId',
};

const actions: ActionTree<StopsState, StoreInterface> = {
  searchStopByStopId: async ({ commit }, { stopId }: { stopId: number }) => {
    commit(StopMutations.SET_IS_STOP_READY, false);
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) return;
    const { data } = await stopsApi.get<StopsResponse>(`/stops/${stopId}/detail/`, {
      headers: {
        accessToken,
      },
    });
    const { stops } = data.data[0];
    const { coordinates } = stops[0].geometry;
    commit(StopMutations.SET_STOPS, stops)
    commit(StopMutations.SET_STOP_COORDS, { lat: coordinates[0], lng: coordinates[1] });
    commit(StopMutations.SET_STOP_NAME, `${stops[0].stop}, ${stops[0].name}`);
    commit(StopMutations.SET_CURRENT_LINES, stops[0].dataLine);
  },
  
};

export default actions;