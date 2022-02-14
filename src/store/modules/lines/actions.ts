
import { ActionTree } from 'vuex';
import { LinesState } from './state';
import { StoreInterface } from '../../index';
import { LinesResponse } from '../../../interfaces/lines';
import { stopsApi } from '../../../apis';
import { LinesMutations } from './mutations';

export const LinesActions = {
  SEARCH_LINE_BY_LABEL_ID: 'lines/searchLineByLabelId',
};

const actions: ActionTree<LinesState, StoreInterface> = {
  searchLineByLabelId: async ({ commit }, { labelId }: { labelId: number }) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) return;
    const { data } = await stopsApi.get<LinesResponse>(`/lines/${labelId}/stops/${labelId}/`, {
      headers: {
        accessToken,
      },
    });
    const { stops } = data.data[0];
    commit(LinesMutations.SET_LINE_STOPS, stops);
  }
}



export default actions;