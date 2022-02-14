
import { ActionTree } from 'vuex';
import { ExampleStateInterface } from './state';
import { StoreInterface } from '../index';


const actions: ActionTree<ExampleStateInterface, StoreInterface> = {
    someAction: ( /*{ commit }, payload  */ ) => {
        // a line to prevent linter errors
    }
}



export default actions;