export interface UIState {
  isMenuActive: boolean;
  isModalActive: boolean;
  isListView: boolean;
  isGridview: boolean;
}

function state(): UIState {
  return {
    isMenuActive: false,
    isModalActive: false,
    isListView: false,
    isGridview: true,
  }
}

export default state;