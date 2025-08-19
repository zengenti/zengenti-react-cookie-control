import { useContext, useEffect, useMemo, useState } from "react";
import { CookieContext } from "../../context/cookie.context";

export const useCookieControl = () => {
  const cookieContext = useContext(CookieContext);

  // Local state for user preferences
  const [analytics, setAnalytics] = useState(cookieContext.analytics);
  const [advertising, setAdvertising] = useState(cookieContext.advertising);
  const [functional, setFunctional] = useState(cookieContext.functional);
  const [marketing, setMarketing] = useState(cookieContext.marketing);

  // Sync local state with context whenever context values change
  useEffect(() => {
    setAnalytics(cookieContext.analytics);
    setAdvertising(cookieContext.advertising);
    setFunctional(cookieContext.functional);
    setMarketing(cookieContext.marketing);
  }, [
    cookieContext.analytics,
    cookieContext.advertising,
    cookieContext.functional,
    cookieContext.marketing,
  ]);

  // Function to update all preferences in the context
  const doUpdatePreferences = () => {
    const consent = { analytics, advertising, functional, marketing };
    cookieContext.set(consent);
    cookieContext.doToggleUpdatePreferences?.();
  };

  return useMemo(
    () => ({
      /** Accept all cookie permissions */
      doAccept: () => {
        const consent = {
          analytics: true,
          advertising: true,
          functional: true,
          marketing: true,
        };
        cookieContext.set(consent); // immediately save
        setAnalytics(true);
        setAdvertising(true);
        setFunctional(true);
        setMarketing(true);
      },
      /** Decline all cookie permissions */
      doDecline: () => {
        const consent = {
          analytics: false,
          advertising: false,
          functional: false,
          marketing: false,
        };
        cookieContext.set(consent); // immediately save
        setAnalytics(false);
        setAdvertising(false);
        setFunctional(false);
        setMarketing(false);
      },
      /** Default preferences to use if no user preferences have been set */
      defaultPreferences: cookieContext.defaultPreferences,
      /** Individual preferences */
      analytics,
      advertising,
      functional,
      marketing,
      /** Setters for individual preferences */
      setAnalytics,
      setAdvertising,
      setFunctional,
      setMarketing,
      /** Visibility flags */
      isUpdatePreferencesVisible: cookieContext.isUpdatePreferencesVisible,
      isCookieControlVisible: cookieContext.isCookieControlVisible,
      /** Toggle update preferences UI */
      doToggleUpdatePreferences: cookieContext.doToggleUpdatePreferences,
      /** Save preferences */
      doUpdatePreferences,
    }),
    [analytics, advertising, functional, marketing, cookieContext]
  );
};
