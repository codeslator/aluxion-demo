
import { ActionTree } from 'vuex';
import { MapStateInterface } from './state';
import { StoreInterface } from '@/store/';


const actions: ActionTree<MapStateInterface, StoreInterface> = {
    someAction: ( /*{ commit }, payload  */ ) => {
        // a line to prevent linter errors
    }
}



export default actions;