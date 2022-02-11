export interface UIState {
  isMenuActive: boolean;
}

function state(): UIState {
  return {
    isMenuActive: true,
  }
}

export default state;