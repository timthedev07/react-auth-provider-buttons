import React from "react";
import { ReactNode, useContext } from "react";

interface OAuthButtonContextType {
  isDarkTheme: boolean;
}
const OAuthButtonContext = React.createContext<OAuthButtonContextType>({
  isDarkTheme: false,
});

export const useOAuthButton = () => {
  return useContext(OAuthButtonContext);
};

export const OAuthButtonProvider: React.FC<
  { children: ReactNode } & Partial<OAuthButtonContextType>
> = ({ children, isDarkTheme = false }) => {
  const value: OAuthButtonContextType = { isDarkTheme };
  return (
    <OAuthButtonContext.Provider value={value}>
      {children}
    </OAuthButtonContext.Provider>
  );
};
