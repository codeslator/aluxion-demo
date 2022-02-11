
import { ActionTree } from 'vuex';
import { MapState } from './state';
import { StoreInterface } from '../../index';


const actions: ActionTree<MapState, StoreInterface> = {
    someAction: ( /*{ commit }, payload  */ ) => {
        // a line to prevent linter errors
    }
}



export default actions;