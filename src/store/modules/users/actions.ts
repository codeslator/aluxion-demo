
import { ActionTree } from 'vuex';
import { UsersState } from './state';
import { StoreInterface } from '../../index';
import usersApi from '../../../apis/usersApi';
import { UsersResponse, User } from '../../../interfaces/users';
import { UserMutations } from './mutations';

const homeToAluxionStops = [681, 3378, 2908, 1688, 59, 189];
const aluxiontoHomeStops = [288, 494, 1229, 2710, 85, 806];

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
    const users: User[] = [];
    data.results.map((user) => {
      let aluxionToHomeStop = aluxiontoHomeStops[Math.floor(Math.random() * aluxiontoHomeStops.length)];
      let homeToAluxionStop = homeToAluxionStops[Math.floor(Math.random() * aluxiontoHomeStops.length)];
      users.push({
        ...user,
        aluxionToHomeStop,
        homeToAluxionStop 
      })
    })
    commit(UserMutations.SET_USERS, users);
  },
};

export default actions;