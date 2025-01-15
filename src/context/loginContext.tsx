import React, { createContext, useContext, useState, ReactNode } from 'react';
 
interface IUser {
  id: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role: string;
  socials: {
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}
 
interface LoginContextProps {
  userLogged: IUser | null;
  login: (userData: IUser) => void;
  logout: () => void
  isAuthenticated: boolean;
}
 
const LoginContext = createContext<LoginContextProps | undefined>(undefined);
 
interface LoginProviderProps {
  children: ReactNode;
}
 
export const LoginContextProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const [userLogged, setUser] = useState<IUser | null>(null);
 
  const login = (userData: IUser) => {
    setUser(userData);
  };
 
  const logout = () => {
    setUser(null)
  }
 
  const isAuthenticated = !!userLogged;
 
  return (
    <LoginContext.Provider value={{ userLogged, logout, login, isAuthenticated }}>
      {children}
    </LoginContext.Provider>
  );
};
 
// eslint-disable-next-line react-refresh/only-export-components
export const useLoginContext = (): LoginContextProps => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};