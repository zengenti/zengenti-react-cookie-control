import React from 'react';
import { useCookieControl } from '../../utils/hooks/useCookieControl';
import ToggleUpdatePreferencesStyled from './toggleUpdatePreferences.styled';
import { ToggleUpdatePreferencesProps } from './toggleUpdatePreferences.type';

const ToggleUpdatePreferences = ({
  className,
  label = 'Cookie Preferences',
}: ToggleUpdatePreferencesProps) => {
  // We need to component-ise this "toggle" as we need to access CookieContext
  // Doing this higher up the tree would cause unnecessary rerenders
  const { isCookieControlVisible, doToggleUpdatePreferences } = useCookieControl();

  if (isCookieControlVisible) return null;

  return (
    <ToggleUpdatePreferencesStyled
      className={className}
      onClick={() => doToggleUpdatePreferences()}
    >
      {label}
    </ToggleUpdatePreferencesStyled>
  );
};

export default ToggleUpdatePreferences;
