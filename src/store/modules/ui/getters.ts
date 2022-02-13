import { GetterTree } from 'vuex';
import { UIState } from './state';
import { StoreInterface } from '../../index';

export const UIGetters = {
    GET_IS_MENU_ACTIVE: 'ui/getIsMenuActive',
    GET_IS_MODAL_ACTIVE: 'ui/getIsModalActive',
};

const getters: GetterTree<UIState, StoreInterface> = {
    // someGetter: ( /* state */ ) => {
    //     // return true;
    // },
    getIsMenuActive: ( state ) => {
        return state.isMenuActive;
    },
    getIsModalActive: ( state ) => {
        return state.isModalActive;
    }
};

export default getters;