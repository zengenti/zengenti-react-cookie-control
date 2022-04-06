import { createContext } from 'react';

export type CookieContextProps = {
  analytics: boolean;
  defaultCookiePreferences: {
    analytics: boolean;
    functional: boolean;
    marketing: boolean;
  };
  functional: boolean;
  marketing: boolean;
  set: (props: {
    analytics: boolean;
    functional: boolean;
    marketing: boolean;
  }) => void;
  showCookieControl: boolean;
  showUpdatePreferences: boolean;
  toggleShowUpdatePreferences: () => void;
};

const initialContext: CookieContextProps = {
  analytics: false,
  defaultCookiePreferences: {
    analytics: false,
    functional: false,
    marketing: false,
  },
  functional: false,
  marketing: false,
  set: () => {},
  showCookieControl: false,
  showUpdatePreferences: false,
  toggleShowUpdatePreferences: () => {},
};

export const CookieContext = createContext<CookieContextProps>(initialContext);
