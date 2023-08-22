'use client';

import { createContext, useState, useMemo, SetStateAction, Dispatch } from 'react';

interface User {
  email: string;
}

 interface State {
  loading: boolean;
  error: string | null;
  data: User | null;
 }

 interface AuthState extends State {
  authState?: State;
  setAuthState: Dispatch<SetStateAction<State>>;
 }

export const AuthContext = createContext<AuthState>({
  loading: false,
  error: null,
  data: null,
  setAuthState: () => {},
});

const AuthProvider = ({ children } : {children: React.ReactNode}) => {
  const [authState, setAuthState] = useState<State>({
    loading: true,
    error: null,
    data: null,
  });

  const AuthContextValue = useMemo(() => ({
    ...authState,
    setAuthState,
  }), [authState, setAuthState]);

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
