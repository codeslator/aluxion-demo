import { createStore } from 'vuex';
import { UsersState } from './modules/users/state';
import usersModule from './modules/users';

import { MapState } from './modules/map/state';
import mapModule from './modules/map/index';

import { UIState } from './modules/ui/state';
import uiModule from './modules/ui/index';

export interface StoreInterface {
  map: MapState,
  ui: UIState,
  users: UsersState,
};

export default createStore<StoreInterface>({
  modules: {
    map: mapModule,
    ui: uiModule,
    users: usersModule,
  }
})
