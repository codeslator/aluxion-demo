import { MutationTree } from 'vuex';
import { UIState } from './state';

export const UIMutations = {
  TOGGLE_MENU: 'toggleMenu',
  TOGGLE_MODAL: 'toggleModal',
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
  }
}


export default mutation;