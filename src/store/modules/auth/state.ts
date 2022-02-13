import { Auth } from "../../../interfaces/auth";

export interface AuthState {
  auth?: Auth;
  isAuthenticated: boolean;
}

function state(): AuthState {
  return {
    auth: undefined,
    isAuthenticated: false,
  }
}

export default state;