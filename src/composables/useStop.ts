import { computed } from 'vue';
import { useStore } from 'vuex';
import { StoreInterface } from '../store/index';
import { StopGetters } from '../store/modules/stops/getters';
import { StopActions } from '../store/modules/stops/actions';

const useStop = () => {
  const store = useStore<StoreInterface>();

  return {
    stops: computed(() => store.getters[StopGetters.GET_STOPS]),
    currentStop: computed(() => store.getters[StopGetters.GET_CURRENT_STOP]),
    searchStopByStopId: (stopId: number) => store.dispatch(StopActions.SEARCH_STOP_BY_STOP_ID, { stopId }),
    isLoadingStop: computed<boolean>(() => store.getters[StopGetters.GET_IS_LOADING_STOP]),
  };
};

export default useStop;