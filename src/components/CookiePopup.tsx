import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useCookieControl } from "../utils/hooks/useCookieControl";

export type CookiePopupProps = {
  popup: { text: string };
};

const CookiePopup = ({ popup }: CookiePopupProps) => {
  const {
    defaultPreferences,
    isCookieControlVisible,
    doAccept,
    doDecline,
    doToggleUpdatePreferences,
    setAdvertising,
    setAnalytics,
    setMarketing,
    setFunctional,
  } = useCookieControl();

  React.useEffect(() => {
    if (isCookieControlVisible) {
      setAnalytics(defaultPreferences.analytics);
      setAdvertising(defaultPreferences.advertising);
      setFunctional(defaultPreferences.functional);
      setMarketing(defaultPreferences.marketing);
    }
  }, [isCookieControlVisible]);

  if (!isCookieControlVisible) return null;

  return (
    <CookiePopupStyled className="cookie-popup" data-nosnippet>
      <div className="cookie-popup-content">
        <h2 className="cookie-popup-title sr-only">We value your privacy</h2>
        <div
          className="cookie-popup-text"
          dangerouslySetInnerHTML={{ __html: popup?.text }}
        />
        <Button
          className="cookie-popup-button customise-btn"
          text="Customise"
          variant="hollow"
          action={() => doToggleUpdatePreferences()}
        />
      </div>
      <div className="cookie-popup-buttons">
        <Button
          className="cookie-popup-button accept-btn"
          text="Accept all"
          variant="solid"
          action={() => {
            doAccept();
          }}
        />
        <Button
          className="cookie-popup-button decline-btn"
          text="Decline all"
          variant="solid"
          action={() => {
            doDecline();
          }}
        />
      </div>
    </CookiePopupStyled>
  );
};

const CookiePopupStyled = styled.div`
  font-family: "Poppins", sans-serif;
  box-shadow: 0 0 1.5rem 0 rgba(127, 154, 198, 0.2);
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  background: #fff;
  max-width: 20.5rem;
  width: 100%;

  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  @media screen and (min-width: 480px) {
    left: 1rem;
    bottom: 1rem;
  }

  .cookie-popup-content {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 0.125rem;
  }

  .cookie-popup-title {
    font-size: 1rem;
    font-weight: 500;
    margin: 0 0 0.5rem;

    @media screen and (min-width: 480px) {
      font-size: 1.25rem;
    }
  }

  .cookie-popup-text {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5rem;

    a {
      color: #1d5fc2;
      text-decoration: underline;
      &:hover {
        text-decoration: none;
        opacity: 0.8;
        transition: opacity 0.2s ease-in-out;
      }

      &:focus {
        outline: 3px solid #4c9aff;
        outline-offset: 4px;
      }
    }
  }

  .customise-btn {
    border: none;
    padding: 0;
    color: #1d5fc2;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  .cookie-popup-buttons {
    display: flex;
    align-items: center;

    gap: 0.5rem;

    margin-top: 0.5rem;
  }

  .accept-btn,
  .decline-btn {
    width: 100%;
  }

  .sr-only {
    display: block;
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    position: absolute;
  }
`;

export default CookiePopup;
