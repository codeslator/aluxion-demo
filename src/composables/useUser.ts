import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { StoreInterface } from '../store/index';
import { UserGetters } from '../store/modules/users/getters';
import { UserActions } from '../store/modules/users/actions';
import { User } from '../interfaces/users';
import { UserMutations } from '../store/modules/users/mutations';
import { UserNamespace } from '../store/modules/users';

const IncludeValues = 'name,nat,gender,phone,picture,email';

const useUser = () => {
  const store = useStore<StoreInterface>();

  onMounted(() => {
    if(!store.getters[UserGetters.IS_LOADING_USERS]) {
      store.dispatch(UserActions.FETCH_USERS, { limit: 5, include: IncludeValues });
    }
  })

  return {
    users: computed(() => store.getters[UserGetters.USERS]),
    activeUser: computed(() => store.getters[UserGetters.ACTIVE_USER]),
    setActiveUser: (user: User | undefined) => store.commit(`${UserNamespace}${UserMutations.SET_ACTIVE_USER}`, user),
  };
};

export default useUser;