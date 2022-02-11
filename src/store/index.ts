import { createStore } from 'vuex';
import { UsersStateInterface } from './modules/users/state';
import { MapStateInterface } from './modules/map/state';
import usersModule from './modules/users';
import mapModule from './modules/map/index';

export interface StoreInterface {
  users: UsersStateInterface,
  map: MapStateInterface,
}


export default createStore<StoreInterface>({
  modules: {
    users: usersModule,
    map: mapModule,
  }
})
