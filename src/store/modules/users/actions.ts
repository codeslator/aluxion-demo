
import { ActionTree } from 'vuex';
import { UsersState } from './state';
import { StoreInterface } from '../../index';
import usersApi from '../../../apis/usersApi';
import { UsersResponse } from '../../../interfaces/users';
import { UserMutations } from './mutations';

export const UserActions = {
  FETCH_USERS: 'users/fetchUsers',
}

const actions: ActionTree<UsersState, StoreInterface> = {
  fetchUsers: async ({ commit }, { limit, include }: { limit: number, include: string }) => {
    commit(UserMutations.SET_IS_LOADING_USERS, true);
    const { data } = await usersApi.get<UsersResponse>('/', {
      params: {
        results: limit,
        inc: include,
      }
    });
    commit(UserMutations.SET_USERS, data.results);
  },
}



export default actions;