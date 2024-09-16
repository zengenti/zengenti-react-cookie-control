import { createContext } from 'react';

export type CookieContextProps = {
  defaultCookiePreferences: {
    analytics: boolean;
    advertising: boolean;
    functional: boolean;
    marketing: boolean;
  };
  analytics: boolean;
  advertising: boolean;
  functional: boolean;
  marketing: boolean;
  isCookieControlVisible: boolean;
  isUpdatePreferencesVisible: boolean;
  doToggleUpdatePreferences: () => void;
  set: (props: {
    analytics: boolean;
    advertising: boolean;
    functional: boolean;
    marketing: boolean;
  }) => void;
};

const initialContext: CookieContextProps = {
  defaultCookiePreferences: {
    analytics: false,
    advertising: false,
    functional: false,
    marketing: false,
  },
  analytics: false,
  advertising: false,
  functional: false,
  marketing: false,
  isCookieControlVisible: false,
  isUpdatePreferencesVisible: false,
  doToggleUpdatePreferences: () => {},
  set: () => {},
};

export const CookieContext = createContext<CookieContextProps>(initialContext);
