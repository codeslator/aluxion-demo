export interface UsersStateInterface {
  prop: boolean;
}

function state(): UsersStateInterface {
  return {
      prop: true,
  }
}

export default state;