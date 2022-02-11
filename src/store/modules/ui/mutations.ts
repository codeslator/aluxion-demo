import { MutationTree } from 'vuex';
import { UIState } from './state';

export const UIMutations = {
  TOGGLE_MENU: 'ui/toggleMenu',
}

const mutation: MutationTree<UIState> = {
  // someMutation: ( /* state: UIStateInterface */) => {
  //     // a line to prevent linter errors
  // }
  toggleMenu: (state: UIState) => {
    state.isMenuActive = !state.isMenuActive;
  }
}


export default mutation;