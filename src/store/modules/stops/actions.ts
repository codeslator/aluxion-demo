
import { ActionTree } from 'vuex';
import { StopsState } from './state';
import { StoreInterface } from '../../index';
import stopsApi from '../../../apis/stopsApi';
import { StopsResponse } from '../../../interfaces/stops';

export const StopActions = {
  SEARCH_STOP_BY_STOP_ID: 'stops/searchStopByStopId',
};

const actions: ActionTree<StopsState, StoreInterface> = {
  searchStopByStopId: async ({ commit }, { stopId }: { stopId: number }) => {
    // a line to prevent linter errors
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) return;
    const { data } = await stopsApi.get<StopsResponse>(`/${stopId}/detail/`, {
      headers: {
        accessToken,
      },
    });
    const { stops } = data.data[0];
    console.log(stops)
  }
};

export default actions;