import { computed } from 'vue';
import { useStore } from 'vuex';
import { StoreInterface } from '../store/index';
import { LinesNamespace } from '../store/modules/lines';
import { LinesActions } from '../store/modules/lines/actions';
import { LinesGetters } from '../store/modules/lines/getters';
import { LinesMutations } from '../store/modules/lines/mutations';

const useLine = () => {
  const store = useStore<StoreInterface>();

  return {
    lineStops: computed(() => store.getters[LinesGetters.GET_LINE_STOPS]),
    isIsLineStopsReady: computed(() => store.getters[LinesGetters.GET_IS_LINE_STOPS_READY]),
    searchLineByLabelId: (labelId: number) => store.dispatch(LinesActions.SEARCH_LINE_BY_LABEL_ID, { labelId }),
    setIsLineStopsReady: (value: boolean) => store.commit(`${LinesNamespace}${LinesMutations.SET_IS_LINE_STOPS_READY}`, value),
  };
};

export default useLine;