
import { ActionTree } from 'vuex';
import { UIState } from './state';
import { StoreInterface } from '../../index';


const actions: ActionTree<UIState, StoreInterface> = {
    someAction: ( /*{ commit }, payload  */ ) => {
        // a line to prevent linter errors
    }
}



export default actions;