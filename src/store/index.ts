import { createStore } from 'vuex';
import { UsersState } from './modules/users/state';
import usersModule from './modules/users';

import { MapState } from './modules/map/state';
import mapModule from './modules/map/index';

import { UIState } from './modules/ui/state';
import uiModule from './modules/ui/index';

import { AuthState } from './modules/auth/state';
import authModule from './modules/auth/index';

import { StopsState } from './modules/stops/state';
import stopsModule from './modules/stops/index';

export interface StoreInterface {
  auth: AuthState;
  map: MapState;
  ui: UIState;
  users: UsersState;
  stops: StopsState;
};

export default createStore<StoreInterface>({
  modules: {
    auth: authModule,
    map: mapModule,
    ui: uiModule,
    users: usersModule,
    stops: stopsModule,
  }
})
