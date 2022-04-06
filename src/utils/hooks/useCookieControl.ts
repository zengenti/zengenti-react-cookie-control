import { useContext, useEffect, useMemo, useState } from 'react';
import { CookieContext } from '../../context/cookie.context';

export const useCookieControl = () => {
  // Load our CookieContext state
  const cookieContext = useContext(CookieContext);

  // Store each preference as local state here to allow for "toggling"
  // Once the user has "saved" their preferences, these values are
  // passed to the CookieContext to update.
  const [analytics, setAnalytics] = useState(cookieContext.analytics);
  const [functional, setFunctional] = useState(cookieContext.functional);
  const [marketing, setMarketing] = useState(cookieContext.marketing);

  // Control when we want to trigger an update of CookieContext
  const [triggerUpdate, setTriggerUpdate] = useState(false);

  const updatePreferences = () => {
    setTriggerUpdate(true);
  };

  // When CookieContext is updated (eg reading in initial cookies)
  // We need to update our local state values
  // The use of useMemo on the return will prevent re-renders if
  // no values have changed
  useEffect(() => {
    setAnalytics(cookieContext.analytics);
    setFunctional(cookieContext.functional);
    setMarketing(cookieContext.marketing);
  }, [cookieContext]);

  // When we trigger an update call "set" function on CookieContext
  // to update state values
  useEffect(() => {
    if (triggerUpdate) {
      cookieContext.set({ analytics, functional, marketing });
      setTriggerUpdate(false);
    }
  }, [analytics, cookieContext, functional, marketing, triggerUpdate]);

  return useMemo(
    () => ({
      /** Accept all cookie permissions */
      acceptAll: () => {
        setAnalytics(true);
        setFunctional(true);
        setMarketing(true);
        updatePreferences();
      },
      /** Analytics cookies accepted/declined */
      analytics,
      /** Decline all cookie permissions */
      declineAll: () => {
        setAnalytics(false);
        setFunctional(false);
        setMarketing(false);
        updatePreferences();
      },
      /** Default preferences to use as toggle values if no user preferences have been set */
      defaultCookiePreferences: cookieContext.defaultCookiePreferences,
      /** Functional cookies accepted/declined */
      functional,
      /** Marketing cookies accepted/declined */
      marketing,
      /** Update analytics cookie preference */
      setAnalytics,
      /** Update functional cookie preference */
      setFunctional,
      /** Update marketing cookie preference */
      setMarketing,
      /** Should the update preferences component be displayed */
      showUpdatePreferences: cookieContext.showUpdatePreferences,
      /** Should the cookie control be displayed */
      showCookieControl: cookieContext.showCookieControl,
      /** Toggle visibility of update preferences component */
      toggleShowUpdatePreferences: cookieContext.toggleShowUpdatePreferences,
      /** Save cookie preferences */
      updatePreferences,
    }),
    [analytics, cookieContext, functional, marketing]
  );
};
