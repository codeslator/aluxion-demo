export interface MapStateInterface {
  prop: boolean;
}

function state(): MapStateInterface {
  return {
      prop: true,
  }
}

export default state;