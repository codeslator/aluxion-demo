import { MutationTree } from 'vuex';
import { AuthState } from './state';
import { Auth } from '../../../interfaces/auth';

export const AuthMutations = {
    SET_AUTH: 'setAuth',
    SET_IS_AUTHENTICATED: 'setIsAuthenticated',
}

const mutation: MutationTree<AuthState> = {
    // someMutation: ( /* state: ExampleStateInterface */) => {
    //     // a line to prevent linter errors
    // }
    setAuth: ( state: AuthState, auth: Auth) => {
        state.auth = auth;
        state.isAuthenticated = true;
    },
    setIsAuthenticated: ( state: AuthState, value: boolean) => {
        state.isAuthenticated = value;
    },
}


export default mutation;