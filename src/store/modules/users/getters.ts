import { GetterTree } from 'vuex';
import { UsersStateInterface } from './state';
import { StoreInterface } from '@/store/';


const getters: GetterTree<UsersStateInterface, StoreInterface> = {
    someGetter: ( /* state */ ) => {
        // return true;
    }
}



export default getters;