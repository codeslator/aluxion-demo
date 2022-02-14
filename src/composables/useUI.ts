import { computed } from 'vue';
import { useStore } from 'vuex';
import { StoreInterface } from '../store/index';
import { UINamespace } from '../store/modules/ui';
import { UIGetters } from '../store/modules/ui/getters';
import { UIMutations } from '../store/modules/ui/mutations';

const useUI = () => {
  const store = useStore<StoreInterface>();

  return {
    isMenuActive: computed<boolean>(() => store.getters[UIGetters.GET_IS_MENU_ACTIVE]),
    isModalActive: computed<boolean>(() => store.getters[UIGetters.GET_IS_MODAL_ACTIVE]),
    isGridViewActive: computed<boolean>(() => store.getters[UIGetters.GET_IS_GRID_VIEw_ACTIVE]),
    isListViewActive: computed<boolean>(() => store.getters[UIGetters.GET_IS_LIST_VIEW_ACTIVE]),
    toggleMenu: () => store.commit(`${UINamespace}${UIMutations.TOGGLE_MENU}`),
    toggleModal: () => store.commit(`${UINamespace}${UIMutations.TOGGLE_MODAL}`),
    toggleListView: () => store.commit(`${UINamespace}${UIMutations.TOGGLE_LIST_VIEW}`),
    toggleGridView: () => store.commit(`${UINamespace}${UIMutations.TOGGLE_GRID_VIEW}`),
  };
};

export default useUI;