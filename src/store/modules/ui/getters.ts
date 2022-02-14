import { GetterTree } from 'vuex';
import { UIState } from './state';
import { StoreInterface } from '../../index';

export const UIGetters = {
    GET_IS_MENU_ACTIVE: 'ui/getIsMenuActive',
    GET_IS_MODAL_ACTIVE: 'ui/getIsModalActive',
    GET_IS_LIST_VIEW_ACTIVE: 'ui/getIsListViewActive',
    GET_IS_GRID_VIEw_ACTIVE: 'ui/getIsGridViewActive',
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
    },
    getIsListViewActive: ( state ) => {
        return state.isListView;
    },
    getIsGridViewActive: ( state ) => {
        return state.isGridview;
    },
};

export default getters;