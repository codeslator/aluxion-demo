
import { ActionTree } from 'vuex';
import { UsersState } from './state';
import { StoreInterface } from '../../index';


const actions: ActionTree<UsersState, StoreInterface> = {
    someAction: ( /*{ commit }, payload  */ ) => {
        // a line to prevent linter errors
    }
}



export default actions;