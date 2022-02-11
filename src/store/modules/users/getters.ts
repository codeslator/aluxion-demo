import { GetterTree } from 'vuex';
import { UsersState } from './state';
import { StoreInterface } from '../../index';


const getters: GetterTree<UsersState, StoreInterface> = {
    someGetter: ( /* state */ ) => {
        // return true;
    }
}



export default getters;