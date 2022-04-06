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

const cookieName = 'zen-cc';
const cookieExpiration = 90;

const withCookieProvider =
  ({
    cookieControl,
    defaultCookiePreferences,
    updatePreferences,
    theme,
  }: CookieProviderProps) =>
  (Component: () => JSX.Element) =>
  ({ ...props }) => {
    const [analytics, setAnalytics] = useState(false);
    const [functional, setFunctional] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const [showCookieControl, setShowCookieControl] = useState(false);
    const [showUpdatePreferences, setShowUpdatePreferences] = useState(false);

    const [history, setHistory] = useState<any>([]);

    useEffect(() => {
      const cookie = getCookieValue(cookieName);

      if (cookie) {
        const { analytics, functional, marketing } = JSON.parse(cookie);
        setAnalytics(!!analytics);
        setFunctional(!!functional);
        setMarketing(!!marketing);
      } else {
        setShowCookieControl(true);
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
            key =>
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
        analytics,
        defaultCookiePreferences,
        marketing,
        functional,
        set: ({ analytics, functional, marketing }) => {
          setAnalytics(analytics);
          setFunctional(functional);
          setMarketing(marketing);
          setShowCookieControl(false);
          setCookieValue(
            cookieName,
            JSON.stringify({ analytics, functional, marketing }),
            cookieExpiration
          );
          setHistory((s: any) => [...s, { analytics, functional, marketing }]);
        },
        showCookieControl,
        showUpdatePreferences,
        toggleShowUpdatePreferences: () => setShowUpdatePreferences(s => !s),
      }),
      [
        analytics,
        functional,
        marketing,
        showCookieControl,
        showUpdatePreferences,
      ]
    );

    return (
      <CookieContext.Provider value={cookieState}>
        <Component {...props} />
        <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
          <CookieControl {...cookieControl} />
          <UpdatePreferences {...updatePreferences} />
        </ThemeProvider>
      </CookieContext.Provider>
    );
  };

export default withCookieProvider;
