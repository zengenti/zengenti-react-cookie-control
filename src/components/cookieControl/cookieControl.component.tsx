import React, { useEffect } from 'react';
import CookieControlStyled from './cookieControl.styled';
import { CookieControlProps } from './cookieControl.type';
import { useCookieControl } from '../../utils/hooks/useCookieControl';
import Toggle from '../toggle';
import Button from '../button';
import CloseButton from '../closeButton';

const CookieControl = ({ content }: CookieControlProps) => {
  const {
    acceptAll,
    analytics,
    declineAll,
    defaultCookiePreferences,
    functional,
    marketing,
    setAnalytics,
    setFunctional,
    setMarketing,
    showCookieControl,
    updatePreferences,
  } = useCookieControl();

  useEffect(() => {
    if (showCookieControl) {
      setAnalytics(defaultCookiePreferences.analytics);
      setFunctional(defaultCookiePreferences.functional);
      setMarketing(defaultCookiePreferences.marketing);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showCookieControl]);

  return showCookieControl ? (
    <CookieControlStyled className="zen-cc-cc">
      <div className="zen-cc-cc__inner">
        <div className="zen-cc-cc__close">
          <CloseButton onClick={() => updatePreferences()} />
        </div>
        <div className="zen-cc-cc__flex">
          <div>
            {content && (
              <div
                className="zen-cc-cc__content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
            <div className="zen-cc-cc__toggles">
              <Toggle
                id="cc-marketing"
                isChecked={marketing}
                label="Marketing"
                onClick={() => setMarketing(s => !s)}
              />
              <Toggle
                id="cc-functional"
                isChecked={functional}
                label="Functional"
                onClick={() => setFunctional(s => !s)}
              />
              <Toggle
                id="cc-analytics"
                isChecked={analytics}
                label="Analytics"
                onClick={() => setAnalytics(s => !s)}
              />
            </div>
          </div>
          <div className="zen-cc-cc__buttons">
            <div className="zen-cc-cc__button-wrap">
              <Button
                label="Accept all"
                onClick={() => acceptAll()}
                type="hollow"
              />
            </div>
            <div className="zen-cc-cc__button-wrap">
              <Button
                label="Decline all"
                onClick={() => declineAll()}
                type="hollow"
              />
            </div>
            <div className="zen-cc-cc__button-wrap">
              <Button
                label="Save preferences"
                onClick={() => updatePreferences()}
              />
            </div>
          </div>
        </div>
      </div>
    </CookieControlStyled>
  ) : null;
};

export default CookieControl;
