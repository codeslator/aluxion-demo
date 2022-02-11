import { GetterTree } from 'vuex';
import { MapStateInterface } from './state';
import { StoreInterface } from '@/store/';


const getters: GetterTree<MapStateInterface, StoreInterface> = {
    someGetter: ( /* state */ ) => {
        // return true;
    }
}



export default getters;