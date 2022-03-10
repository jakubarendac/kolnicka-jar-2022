import React, { createContext, useContext, useState } from "react";

import {
  getAuthorizationToken,
  removeAuthorizationToken,
  setAuthorizationToken,
} from "../auth";

type AuthorizationContextType = {
  token: string | null;
  login: (token: string, callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
};

export const AuthorizationContext = createContext<AuthorizationContextType>({
  token: null,
  login: () => null,
  logout: () => null,
});

export const AuthorizationProvider: React.FC = ({ children }) => {
  const { Provider } = AuthorizationContext;

  const [token, setToken] = useState<string | null>(getAuthorizationToken());

  const login = (token: string, callback: VoidFunction) => {
    setToken(token);
    setAuthorizationToken(token);
    callback();
  };

  const logout = (callback: VoidFunction) => {
    setToken(null);
    removeAuthorizationToken();
    callback();
  };

  const value = {
    token,
    login,
    logout,
  };

  return <Provider value={value}>{children}</Provider>;
};

export const useAuthorization = () => useContext(AuthorizationContext);
