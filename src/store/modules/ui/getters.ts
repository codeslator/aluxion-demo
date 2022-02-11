import { GetterTree } from 'vuex';
import { UIState } from './state';
import { StoreInterface } from '../../index';

export const UIGetters = {
    IS_MENU_ACTIVE: 'ui/isMenuActive',
};

const getters: GetterTree<UIState, StoreInterface> = {
    // someGetter: ( /* state */ ) => {
    //     // return true;
    // },
    isMenuActive: ( state ) => {
        return state.isMenuActive;
    }
};

export default getters;