import { computed } from 'vue';
import { useStore } from 'vuex';
import { StoreInterface } from '../store/index';
import { UIGetters } from '../store/modules/ui/getters';
import { UIMutations } from '../store/modules/ui/mutations';

const useUI = () => {
  const store = useStore<StoreInterface>();

  return {
    isMenuActive: computed<boolean>(() => store.getters[UIGetters.IS_MENU_ACTIVE]),
    toggleMenu: () => store.commit(UIMutations.TOGGLE_MENU),
  };
};

export default useUI;