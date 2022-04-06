import React from 'react';
import { useCookieControl } from '../../utils/hooks/useCookieControl';
import ToggleUpdatePreferencesStyled from './toggleUpdatePreferences.styled';
import { ToggleUpdatePreferencesProps } from './toggleUpdatePreferences.type';

const ToggleUpdatePreferences = ({
  className,
  label = 'Cookie Preferences',
}: ToggleUpdatePreferencesProps) => {
  // We need to componentise this "toggle" as we need to access CookieContext
  // Doing this higher up the tree would cause unnecessary rerenders
  const { showCookieControl, toggleShowUpdatePreferences } = useCookieControl();

  return !showCookieControl ? (
    <ToggleUpdatePreferencesStyled
      className={className}
      onClick={() => toggleShowUpdatePreferences()}
    >
      {label}
    </ToggleUpdatePreferencesStyled>
  ) : null;
};

export default ToggleUpdatePreferences;
