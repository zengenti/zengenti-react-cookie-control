import { useContext, useEffect, useMemo, useState } from 'react';
import { CookieContext } from '../../context/cookie.context';

export const useCookieControl = () => {
  // Load our CookieContext state
  const cookieContext = useContext(CookieContext);

  // Store each preference as local state here to allow for "toggling"
  // Once the user has "saved" their preferences, these values are
  // passed to the CookieContext to update.
  const [analytics, setAnalytics] = useState(cookieContext.analytics);
  const [advertising, setAdvertising] = useState(cookieContext.advertising);
  const [functional, setFunctional] = useState(cookieContext.functional);
  const [marketing, setMarketing] = useState(cookieContext.marketing);

  // Control when we want to trigger an update of CookieContext
  const [triggerUpdate, setTriggerUpdate] = useState(false);

  const doUpdatePreferences = () => {
    setTriggerUpdate(true);
  };

  // When CookieContext is updated (eg reading in initial cookies)
  // We need to update our local state values
  // The use of useMemo on the return will prevent re-renders if
  // no values have changed
  useEffect(() => {
    setAnalytics(cookieContext.analytics);
    setAdvertising(cookieContext.advertising);
    setFunctional(cookieContext.functional);
    setMarketing(cookieContext.marketing);
  }, [cookieContext]);

  // When we trigger an update call "set" function on CookieContext
  // to update state values
  useEffect(() => {
    if (triggerUpdate) {
      const consent = { analytics, advertising, functional, marketing };
      cookieContext.set(consent);

      setTriggerUpdate(false);
    }
  }, [cookieContext, analytics, advertising, functional, marketing, triggerUpdate]);

  return useMemo(
    () => ({
      /** Accept all cookie permissions */
      acceptAll: () => {
        setAnalytics(true);
        setAdvertising(true);
        setFunctional(true);
        setMarketing(true);
        doUpdatePreferences();
      },
      /** Decline all cookie permissions */
      declineAll: () => {
        setAnalytics(false);
        setAdvertising(false);
        setFunctional(false);
        setMarketing(false);
        doUpdatePreferences();
      },
      /** Default preferences to use as toggle values if no user preferences have been set */
      defaultCookiePreferences: cookieContext.defaultCookiePreferences,
      /** Analytics cookies accepted/declined */
      analytics,
      /** Advertising cookies accepted/declined */
      advertising,
      /** Functional cookies accepted/declined */
      functional,
      /** Marketing cookies accepted/declined */
      marketing,
      /** Update analytics cookie preference */
      setAnalytics,
      /** Update advertising cookie preference */
      setAdvertising,
      /** Update functional cookie preference */
      setFunctional,
      /** Update marketing cookie preference */
      setMarketing,
      /** Should the update preferences component be displayed */
      isUpdatePreferencesVisible: cookieContext.isUpdatePreferencesVisible,
      /** Should the cookie control be displayed */
      isCookieControlVisible: cookieContext.isCookieControlVisible,
      /** Toggle visibility of update preferences component */
      doToggleUpdatePreferences: cookieContext.doToggleUpdatePreferences,
      /** Save cookie preferences */
      doUpdatePreferences,
    }),
    [analytics, advertising, functional, marketing, cookieContext]
  );
};
