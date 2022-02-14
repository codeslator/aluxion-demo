import { MutationTree } from 'vuex';
import { UIState } from './state';

export const UIMutations = {
  TOGGLE_MENU: 'toggleMenu',
  TOGGLE_MODAL: 'toggleModal',
  TOGGLE_LIST_VIEW: 'toggleListView',
  TOGGLE_GRID_VIEW: 'toggleGridView',
}

const mutation: MutationTree<UIState> = {
  // someMutation: ( /* state: UIStateInterface */) => {
  //     // a line to prevent linter errors
  // }
  toggleMenu: (state: UIState) => {
    state.isMenuActive = !state.isMenuActive;
  },
  toggleModal: (state: UIState) => {
    state.isModalActive = !state.isModalActive;
  },
  toggleListView: (state: UIState) => {
    state.isListView = true;
    state.isGridview = false;
  },
  toggleGridView: (state: UIState) => {
    state.isGridview = true;
    state.isListView = false;
  }
}


export default mutation;