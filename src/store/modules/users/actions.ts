
import { ActionTree } from 'vuex';
import { UsersStateInterface } from './state';
import { StoreInterface } from '@/store/';


const actions: ActionTree<UsersStateInterface, StoreInterface> = {
    someAction: ( /*{ commit }, payload  */ ) => {
        // a line to prevent linter errors
    }
}



export default actions;