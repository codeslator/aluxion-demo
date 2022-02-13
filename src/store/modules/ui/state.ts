export interface UIState {
  isMenuActive: boolean;
  isModalActive: boolean;
}

function state(): UIState {
  return {
    isMenuActive: false,
    isModalActive: false,
  }
}

export default state;