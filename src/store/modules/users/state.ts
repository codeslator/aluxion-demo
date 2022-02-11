export interface UsersState {
  prop: boolean;
}

function state(): UsersState {
  return {
      prop: true,
  }
}

export default state;