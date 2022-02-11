import { GetterTree } from 'vuex';
import { MapState } from './state';
import { StoreInterface } from '../../index';


const getters: GetterTree<MapState, StoreInterface> = {
    someGetter: ( /* state */ ) => {
        // return true;
    }
}



export default getters;