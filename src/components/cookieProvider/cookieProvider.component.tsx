import React, { useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  CookieContext,
  CookieContextProps,
} from '../../context/cookie.context';
import { defaultTheme } from '../../theme/defaultTheme';
import { getCookieValue, setCookieValue } from '../../utils/cookies';
import CookieControl from '../cookieControl';
import UpdatePreferences from '../updatePreferences';
import { CookieProviderProps } from './cookieProvider.type';

const cookieExpiration = 90;

const withCookieProvider =
  ({
    cookieControl,
    defaultCookiePreferences,
    updatePreferences,
    theme,
    cookieName = '@Zengenti/Cookie/Control',
  }: CookieProviderProps) =>
  (Component: () => JSX.Element) =>
  ({ ...props }) => {
    const [analytics, setAnalytics] = useState(false);
    const [advertising, setAdvertising] = useState(false);
    const [functional, setFunctional] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const [isCookieControlVisible, setCookieControlVisible] = useState(false);
    const [isUpdatePreferencesVisible, setUpdatePreferencesVisible] = useState(false);

    const [history, setHistory] = useState<any>([]);

    useEffect(() => {
      const cookie = getCookieValue(cookieName);

      if (cookie) {
        const { analytics, advertising, functional, marketing } = JSON.parse(cookie);
        setAnalytics(!!analytics);
        setAdvertising(!!advertising);
        setFunctional(!!functional);
        setMarketing(!!marketing);
      } else {
        setCookieControlVisible(true);
      }
    }, []);

    // If a user updates their preferences for a cookie type from accepted to declined
    // we need to reload the app to clear any scripts that may have previously been loaded
    useEffect(() => {
      if (typeof window !== 'undefined' && history.length === 2) {
        const prev = history[0];
        const next = history[1];

        if (
          history &&
          Object.keys(prev).some(
            (key) =>
              prev[key as keyof typeof history] &&
              !next[key as keyof typeof history]
          )
        ) {
          window.location.reload();
        }

        setHistory((s: any) => [...s.slice(1)]);
      }
    }, [history]);

    const cookieState = useMemo(
      (): CookieContextProps => ({
        defaultCookiePreferences,
        analytics,
        advertising,
        marketing,
        functional,
        set: ({ analytics, advertising, functional, marketing }) => {
          setAnalytics(analytics);
          setAdvertising(advertising);
          setFunctional(functional);
          setMarketing(marketing);
          setCookieControlVisible(false);
          setCookieValue(
            cookieName,
            JSON.stringify({ analytics, advertising, functional, marketing }),
            cookieExpiration
          );
          setHistory((s: any) => [...s, { analytics, advertising, functional, marketing }]);
        },
        isCookieControlVisible,
        isUpdatePreferencesVisible,
        doToggleUpdatePreferences: () => setUpdatePreferencesVisible((s) => !s),
      }),
      [
        analytics,
        advertising,
        functional,
        marketing,
        isCookieControlVisible,
        isUpdatePreferencesVisible,
      ]
    );

    return (
      <CookieContext.Provider value={cookieState}>
        <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
          <CookieControl {...cookieControl} />
          <UpdatePreferences {...updatePreferences} />
        </ThemeProvider>
        <Component {...props} />
      </CookieContext.Provider>
    );
  };

export default withCookieProvider;
