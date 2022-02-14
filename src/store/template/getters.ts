import { GetterTree } from 'vuex';
import { ExampleStateInterface } from './state';
import { StoreInterface } from '../index';


const getters: GetterTree<ExampleStateInterface, StoreInterface> = {
    someGetter: ( /* state */ ) => {
        // return true;
    }
}



export default getters;