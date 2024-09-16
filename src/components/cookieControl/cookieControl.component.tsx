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
    declineAll,
    defaultCookiePreferences,
    analytics,
    advertising,
    functional,
    marketing,
    setAnalytics,
    setAdvertising,
    setFunctional,
    setMarketing,
    isCookieControlVisible,
    doUpdatePreferences,
  } = useCookieControl();

  useEffect(() => {
    if (isCookieControlVisible) {
      setAnalytics(defaultCookiePreferences.analytics);
      setAdvertising(defaultCookiePreferences.advertising);
      setFunctional(defaultCookiePreferences.functional);
      setMarketing(defaultCookiePreferences.marketing);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCookieControlVisible]);

  if (!isCookieControlVisible) return null;

  return  (
    <CookieControlStyled className="zen-cc-cc" data-nosnippet>
      <h2 className="sr-only">Cookie control banner</h2>
      <div className="zen-cc-cc__inner">
        <div className="zen-cc-cc__close">
          <CloseButton onClick={() => doUpdatePreferences()} />
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
                id="cc-advertising"
                isChecked={advertising}
                label="Advertising"
                onClick={() => setAdvertising((s) => !s)}
              />
            <Toggle
                id="cc-analytics"
                isChecked={analytics}
                label="Analytics"
                onClick={() => setAnalytics((s) => !s)}
              />
              <Toggle
                id="cc-functional"
                isChecked={functional}
                label="Functional"
                onClick={() => setFunctional((s) => !s)}
              />
              <Toggle
                id="cc-marketing"
                isChecked={marketing}
                label="Marketing"
                onClick={() => setMarketing((s) => !s)}
              />
            </div>
          </div>
          <div className="zen-cc-cc__buttons">
            <div className="zen-cc-cc__button-wrap">
              <Button
                id="zen-cc-accept-all"
                label="Accept all"
                onClick={() => acceptAll()}
                type="hollow"
              />
            </div>
            <div className="zen-cc-cc__button-wrap">
              <Button
                id="zen-cc-decline-all"
                label="Decline all"
                onClick={() => declineAll()}
                type="hollow"
              />
            </div>
            <div className="zen-cc-cc__button-wrap">
              <Button
                id="zen-cc-save"
                label="Save preferences"
                onClick={() => doUpdatePreferences()}
              />
            </div>
          </div>
        </div>
      </div>
    </CookieControlStyled>
  );
};

export default CookieControl;
