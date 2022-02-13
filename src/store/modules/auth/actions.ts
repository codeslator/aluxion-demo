
import { ActionTree } from 'vuex';
import { AuthState } from './state';
import { StoreInterface } from '../../index';
import { emtApi } from '../../../apis';
import { AuthMutations } from './mutations';

export const AuthActions = {
    FETCH_AUTH: 'auth/fetchAuth',
}

const actions: ActionTree<AuthState, StoreInterface> = {
    // someAction: ( /*{ commit }, payload  */ ) => {
    //     // a line to prevent linter errors
    // }
    fetchAuth: async ({ commit }) => {
        const { data } = await emtApi.get('/');
        // console.log(data)
        commit(AuthMutations.SET_AUTH, data.data[0])
        localStorage.setItem('accessToken', data.data[0].accessToken)
    }
}



export default actions;