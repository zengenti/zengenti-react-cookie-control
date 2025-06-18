import React from 'react';
import { useCookieControl } from '../utils/hooks/useCookieControl';

type ToggleCookieModalProps = {
  className?: string;
  text?: string;
}

export const ToggleCookieModal = ({
  className,
  text = 'Cookie preferences',
}: ToggleCookieModalProps) => {
  // We need to component-ise this "toggle" as we need to access CookieContext
  // Doing this higher up the tree would cause unnecessary rerenders
  const { isCookieControlVisible, doToggleUpdatePreferences } = useCookieControl();

  if (isCookieControlVisible) return null;

  return (
    <button type="button" className={className}   aria-label="Open cookie preferences" onClick={() => doToggleUpdatePreferences()}>
      {text}
    </button>
  );
};
