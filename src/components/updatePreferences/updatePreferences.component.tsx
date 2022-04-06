import React, { useEffect, useRef } from 'react';
import UpdatePreferencesStyled from './updatePreferences.styled';
import {
  CookieSummaryWithToggleProps,
  UpdatePreferencesProps,
} from './updatePreferences.type';
import { useCookieControl } from '../../utils/hooks/useCookieControl';
import Toggle from '../toggle';
import Button from '../button';
import CloseButton from '../closeButton';

const CookieSummaryWithToggle = ({
  isChecked,
  label,
  onClick,
  summary,
  title,
}: CookieSummaryWithToggleProps) => {
  if (!summary && !label) return null;
  return (
    <div className="zen-cc-up__section">
      <div className="zen-cc-up__title">{title}</div>
      {summary && (
        <div
          className="zen-cc-up__summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      )}
      {label && onClick && (
        <Toggle
          id={`cp-${label.toLowerCase().replace(/ /g, '-')}`}
          isChecked={!!isChecked}
          label={label}
          onClick={onClick}
        />
      )}
    </div>
  );
};

const UpdatePreferences = (props: UpdatePreferencesProps) => {
  const {
    analytics,
    marketing,
    functional,
    setAnalytics,
    setMarketing,
    setFunctional,
    showUpdatePreferences,
    toggleShowUpdatePreferences,
    updatePreferences,
  } = useCookieControl();

  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const eventHandler = (e: any) =>
      el.current &&
      !el.current.contains(e.target) &&
      showUpdatePreferences &&
      toggleShowUpdatePreferences();

    if (showUpdatePreferences) {
      // Add timeout to prevent eventHandler auto executing
      setTimeout(
        () => document.addEventListener('click', eventHandler, false),
        100
      );
    } else {
      document.removeEventListener('click', eventHandler, false);
    }

    return () => {
      document.removeEventListener('click', eventHandler, false);
    };
  }, [showUpdatePreferences, toggleShowUpdatePreferences]);

  return (
    <UpdatePreferencesStyled
      className={`zen-cc-up ${showUpdatePreferences ? 'open' : 'closed'}`}
    >
      <div className="zen-cc-up__modal" ref={el}>
        <div className="zen-cc-up__inner">
          <div className="zen-cc-up__close">
            <CloseButton onClick={() => toggleShowUpdatePreferences()} />
          </div>
          {props.content && (
            <div
              className="zen-cc-up__section"
              dangerouslySetInnerHTML={{ __html: props.content }}
            />
          )}
          <CookieSummaryWithToggle
            summary={props.necessary}
            title="Necessary Cookies"
          />
          <CookieSummaryWithToggle
            isChecked={functional}
            label="Functional"
            onClick={() => setFunctional(!functional)}
            summary={props.functional}
            title="Functional Cookies"
          />
          <CookieSummaryWithToggle
            isChecked={analytics}
            label="Analytics"
            onClick={() => setAnalytics(!analytics)}
            summary={props.analytics}
            title="Analytical Cookies"
          />
          <CookieSummaryWithToggle
            isChecked={marketing}
            label="Marketing"
            onClick={() => setMarketing(!marketing)}
            summary={props.marketing}
            title="Marketing Cookies"
          />
          <div className="zen-cc-up__save">
            <Button
              label="Save Preferences"
              onClick={() => {
                updatePreferences();
                toggleShowUpdatePreferences();
              }}
            />
          </div>
        </div>
      </div>
    </UpdatePreferencesStyled>
  );
};

export default UpdatePreferences;
