import React, { JSX } from 'react';
import CookieModal, { CookieModalProps } from './CookieModal';
import CookiePopup, { CookiePopupProps } from './CookiePopup';
import { getCookieValue, setCookieValue } from '../utils/cookies';
import { CookieContext, CookieContextProps } from '../context/cookie.context';

const expiration = 90;
export type CookieProviderProps = CookieModalProps & CookiePopupProps;

const withCookieProvider =
  ({ config, popup }: CookieProviderProps) =>
  (Component: () => JSX.Element) =>
  ({ ...props }) => {

    const cName = config?.cookie?.name || '@Zengenti/Cookie/Control'

    const [analytics, setAnalytics] = React.useState(false);
    const [advertising, setAdvertising] = React.useState(false);
    const [functional, setFunctional] = React.useState(false);
    const [marketing, setMarketing] = React.useState(false);
    const [isCookieControlVisible, setCookieControlVisible] = React.useState(false);
    const [isUpdatePreferencesVisible, setUpdatePreferencesVisible] = React.useState(false);
    const [history, setHistory] = React.useState<any>([]);

    React.useEffect(() => {
      const cookie = getCookieValue(cName);

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
    React.useEffect(() => {
      if (typeof window !== 'undefined' && history.length === 2) {
        const prev = history[0];
        const next = history[1];
        if (history && Object.keys(prev).some((key) => prev[key as keyof typeof history] && !next[key as keyof typeof history])) window.location.reload();
        setHistory((s: any) => [...s.slice(1)]);
      }
    }, [history]);

    const cookieState = React.useMemo(
      (): CookieContextProps => ({
        defaultPreferences: { analytics: false, advertising: false, functional: false, marketing: false },
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
            cName,
            JSON.stringify({ analytics, advertising, functional, marketing }),
            expiration
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
          <CookiePopup popup={popup} />
          {isUpdatePreferencesVisible && <CookieModal config={config} />}
        <Component {...props} />
      </CookieContext.Provider>
    );
  };

export default withCookieProvider;
