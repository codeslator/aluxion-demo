import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { StoreInterface } from '../store';
import { AuthGetters } from '../store/modules/auth/getters';
import { AuthActions } from '../store/modules/auth/actions';


const useAuth = () => {
  const store = useStore<StoreInterface>();

  onMounted(() => {
    if(!store.getters[AuthGetters.GET_IS_AUTHENTICATED]) {
      store.dispatch(AuthActions.FETCH_AUTH);
    }
  })

  return {
    auth: computed(() => store.getters[AuthGetters.GET_AUTH]),
    isAuthenticated: computed(() => store.getters[AuthGetters.GET_IS_AUTHENTICATED]),
  };
};

export default useAuth;