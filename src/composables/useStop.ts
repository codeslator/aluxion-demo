import { computed } from 'vue';
import { useStore } from 'vuex';
import { StoreInterface } from '../store/index';
import { StopGetters } from '../store/modules/stops/getters';
import { StopActions } from '../store/modules/stops/actions';
// import { StopsNamespace } from '../store/modules/stops';
import { DataLine } from '../interfaces/stops';
import { StopsNamespace } from '../store/modules/stops';
import { StopMutations } from '../store/modules/stops/mutations';

const useStop = () => {
  const store = useStore<StoreInterface>();

  return {
    stops: computed(() => store.getters[StopGetters.GET_STOPS]),
    currentStop: computed(() => store.getters[StopGetters.GET_CURRENT_STOP]),
    stopCoords: computed(() => store.getters[StopGetters.GET_STOP_COORDS]),
    searchStopByStopId: (stopId: number) => store.dispatch(StopActions.SEARCH_STOP_BY_STOP_ID, { stopId }),
    isLoadingStop: computed<boolean>(() => store.getters[StopGetters.GET_IS_LOADING_STOP]),
    isStopReady: computed<boolean>(() => store.getters[StopGetters.GET_IS_STOP_READY]),
    stopName: computed<string>(() => store.getters[StopGetters.GET_STOP_NAME]),
    currentLines: computed<DataLine[]>(() => store.getters[StopGetters.GET_CURRENT_LINES]),
    selectedLine: computed<DataLine>(() => store.getters[StopGetters.GET_SELECTED_LINE]),
    selectLine: (line: DataLine) => store.commit(`${StopsNamespace}${StopMutations.SET_SELECTED_LINE}`, line),
    
  };
};

export default useStop;