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
import useFocusTrap from '../../utils/hooks/useTrapFocus';

const CookieSummaryWithToggle = ({
  isChecked,
  label,
  onClick,
  summary,
  title,
  cookies,
}: CookieSummaryWithToggleProps) => {
  if (!label) return null;
  return (
    <div className="zen-cc-up__section">
      <div className="zen-cc-up__title">{title}</div> 
      {onClick && (
        <Toggle
          id={`cp-${label.toLowerCase().replace(/ /g, '-')}`}
          isChecked={!!isChecked}
          label={label}
          onClick={onClick}
        />
      )}
      {summary && (
        <div
          className="zen-cc-up__summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      )}
      {cookies}
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
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const eventHandler = (e: any) =>
      el.current &&
      !el.current.contains(e.target) &&
      showUpdatePreferences &&
      toggleShowUpdatePreferences();

    if (showUpdatePreferences) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      document.body.style.overflow = "hidden";
      // Add timeout to prevent eventHandler auto executing
      setTimeout(
        () => document.addEventListener('click', eventHandler, false),
        100
      );
    } else {
      document.removeEventListener('click', eventHandler, false);
    }

    return () => {
      document.body.style.overflow = originalStyle;
      document.removeEventListener('click', eventHandler, false);
    };
  }, [showUpdatePreferences, toggleShowUpdatePreferences]);


  const elContainerRef = useFocusTrap(showUpdatePreferences, toggleShowUpdatePreferences);

  if (showUpdatePreferences) {
    return (
      <UpdatePreferencesStyled
      ref={elContainerRef}
      data-nosnippet
      className={`zen-cc-up ${showUpdatePreferences ? 'open' : 'closed'}`}
    >
      <h2 className='sr-only'>Cookie control banner</h2>
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
            isChecked={true}
            label="Necessary"
            summary={props.necessary?.summary}
            cookies={props.necessary?.cookies}
            title="Necessary Cookies"
          />
          <CookieSummaryWithToggle
            isChecked={functional}
            label="Functional"
            onClick={() => setFunctional(!functional)}
            summary={props.functional?.summary}
            cookies={props.functional?.cookies}
            title="Functional Cookies"
          />
          <CookieSummaryWithToggle
            isChecked={analytics}
            label="Analytics"
            onClick={() => setAnalytics(!analytics)}
            summary={props.analytics?.summary}
            cookies={props.analytics?.cookies}
            title="Analytical Cookies"
          />
          <CookieSummaryWithToggle
            isChecked={marketing}
            label="Marketing"
            onClick={() => setMarketing(!marketing)}
            summary={props.marketing?.summary}
            cookies={props.marketing?.cookies}
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
    )
  } else return null;
};

export default UpdatePreferences;
