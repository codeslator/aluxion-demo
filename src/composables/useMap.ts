import { computed } from 'vue';
import { useStore } from 'vuex';
import Mapboxgl from 'mapbox-gl';
import { StoreInterface } from '../store/index';
import { MapGetters } from '../store/modules/map/getters';
import { MapMutations } from '../store/modules/map/mutations';
import { MapNamespace } from '../store/modules/map';
import { Stop } from '../interfaces/lines';

const useMap = () => {
  const store = useStore<StoreInterface>();

  return {
    map: computed(() => store.getters[MapGetters.GET_MAP]),
    duration: computed(() => store.getters[MapGetters.GET_DURATION]),
    distance: computed(() => store.getters[MapGetters.GET_DISTANCE]),
    isMapReady: computed<boolean>(() => store.getters[MapGetters.GET_IS_MAP_READY]),
    setMap: (map: Mapboxgl.Map) => store.commit(`${MapNamespace}${MapMutations.SET_MAP}`, map),
    setMarkers: (stops: Stop[]) => store.commit(`${MapNamespace}${MapMutations.SET_MARKERS}`, stops),
  };
};

export default useMap;