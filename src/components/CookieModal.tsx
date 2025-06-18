import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { useCookieControl } from '../utils/hooks/useCookieControl';
import { Switch } from './Switch';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { FocusTrap } from 'focus-trap-react';

type CookieCategoryConfig = {
  name: string;
  description: string;
  cookies: {
    name: string;
    purpose: string;
    provider: string;
    expiration: string;
  }[];
  required?: boolean;
};


export type CookieModalProps = {
  modal?: {  title: string; description: string; }
  config: Record<string, CookieCategoryConfig>;
  isUpdatePreferencesVisibleOverride?: boolean;
}

const CookieModal = ({ 
  modal,
  config, 
  isUpdatePreferencesVisibleOverride = false 
}: CookieModalProps) => {

  const { 
    title = "Customise Consent Preferences", 
    description = "We use cookies to ensure site functionality, analyse usage, and personalise content. Necessary cookies are always active; others require your consent and may affect your experience if disabled." 
  } = modal || {}

  const [categories, setOpenCategories] = React.useState<Set<string>>(new Set());

  const {
      advertising,
      analytics,
      marketing,
      functional,
      setAdvertising,
      setAnalytics,
      setMarketing,
      setFunctional,
      isUpdatePreferencesVisible,
      doUpdatePreferences,
    } = useCookieControl();

  const isVisible = isUpdatePreferencesVisibleOverride || isUpdatePreferencesVisible;
  
  if (!isVisible) return null; 

  const doToggleCategory = (key: string) => {
    setOpenCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const doTogglePreferences = (key: 'analytical' | 'advertising' | 'functional' | 'marketing') => {
    
    if (key === 'analytical') setAnalytics(!analytics);
    if (key === 'advertising') setAdvertising(!advertising);
    if (key === 'functional') setFunctional(!functional);
    if (key === 'marketing') setMarketing(!marketing);
  }

    const getPreferences = (key: 'analytical' | 'advertising' | 'functional' | 'marketing') => {
    if (key === 'analytical') return analytics;
    if (key === 'advertising') return advertising;
    if (key === 'functional') return functional;
    if (key === 'marketing') return marketing;
  }

  const elModalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!isVisible || !elModalRef.current) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        doUpdatePreferences(); 
      }
    };

    const onClickOutside = (e: MouseEvent) => {
      if (elModalRef.current && !elModalRef.current.contains(e.target as Node)) {
        doUpdatePreferences(); 
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onClickOutside);
    disableBodyScroll(elModalRef.current);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onClickOutside);
      enableBodyScroll(elModalRef.current!);
    };
  }, [isVisible]);


  return (
    <CookieModalStyled className="cookie-sidebar" data-nosnippet>
      <div className="cookie-sidebar-overlay" />
      <FocusTrap>
      <div className='cookie-sidebar-container' ref={elModalRef}>
      <div className='cookie-sidebar-header-outer'>
        <div className='cookie-sidebar-header-inner'>
          <h2 className='cookie-sidebar-title'>{title}</h2>
        </div>
        <p className='cookie-sidebar-text'>{description}</p>
      </div>
      <ul className='cookie-sidebar-categories'>
      {(Object.keys(config) as Array<keyof typeof config>).map((key) => {
          const category = config[key];
          const isOpen = categories.has(key);
          const isDefaultChecked = getPreferences(key as 'analytical' | 'advertising' | 'functional' | 'marketing');

          return (
            <li key={key} className='cookie-sidebar-category'>
              <div className='cookie-sidebar-category-header'>
                <h3 className='cookie-sidebar-category-name'>
                  <button 
                      type="button" 
                      onClick={() => doToggleCategory(key)}
                      aria-label={isOpen ? 'Hide cookies' : 'View cookies'}
                      className='cookie-sidebar-category-button'
                      aria-expanded={isOpen}
                      aria-controls={`category-cookies-${key}`}
                    >
                      {category.name}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="#333" d="M10.667 5.333 7.805 8.195 4.943 5.333 4 6.276l3.805 3.805 3.804-3.805-.942-.943Z"/></svg>
                    </button>
                </h3>
                {category.required ? (
                  <div className='cookie-sidebar-category-required'>
                    <span className='cookie-sidebar-category-pill'>Always Active</span>
                    <Switch 
                      className='cookie-sidebar-category-switch'
                      label={category.name}
                      disabled={true}
                      defaultChecked={true}
                      id={`cookie-category-${key}`}
                    />
                  </div>
                ) : (
                  <Switch 
                    className='cookie-sidebar-category-switch'
                    label={category.name}
                    defaultChecked={isDefaultChecked}
                    id={`cookie-category-${key}`}
                    action={() => doTogglePreferences(key as 'analytical' | 'advertising' | 'functional' | 'marketing')}
                  />
                )}
              </div>
              
              {isOpen && (
                category.cookies?.length >= 1 ? (
                  <>
                    <p className='cookie-sidebar-category-description'>{category.description}</p>
                    <ul
                      id={`category-cookies-${key}`}
                      className='cookie-sidebar-category-cookies'
                      aria-hidden={!isOpen}
                    >
                      {category.cookies.map((cookie) => (
                        <li key={cookie?.name} className='cookie-sidebar-category-cookie'>
                          <span className='cookie-sidebar-category-cookie-name'><b>Name:</b> {cookie.name}</span>
                          <span className='cookie-sidebar-category-cookie-provider'><b>Provider:</b> {cookie.provider}</span>
                          <span className='cookie-sidebar-category-cookie-purpose'><b>Purpose:</b> {cookie.purpose}</span>
                          <span className='cookie-sidebar-category-cookie-expiration'><b>Expiration:</b> {cookie.expiration}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <p className='cookie-sidebar-category-description'>{category.description}</p>
                    <span className='cookie-sidebar-category-pill'>No cookies to show.</span>
                  </>
                )
              )}
            </li>
          );
        })}
        
      </ul>
        <div className='cookie-sidebar-btns'> 
          <Button className='cookie-sidebar-save' text="Save preferences" action={doUpdatePreferences} />
        </div>
      </div>
      </FocusTrap>
    </CookieModalStyled>
  );
};

const CookieModalStyled = styled.div`
    font-family: 'Poppins', sans-serif;

  

    position: fixed;
    z-index: 999;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  .cookie-sidebar-overlay {
    position: fixed;
    inset: 0;
    z-index: 1;
    background: rgba(6, 21, 30, 0.80);
    backdrop-filter: blur(2px);
  }

  .cookie-sidebar-container {

    border-radius: 0.5rem;

    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;

    gap: .5rem;

    background: #fff;
    z-index: 99;

    position: relative;

    overflow-y: auto;

    padding: 1rem 0;
    margin: 2rem 0;

    max-width: 51.625rem;
    width: calc(100% - 2rem);

    max-height: 28.8125rem;
    height: auto;
    flex: 1;
    flex-grow: 1;
  }

  .cookie-sidebar-close {
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;

    background: transparent;
    border: none;

    cursor: pointer;

    &:hover {
      opacity: 0.8;
      transition: opacity 0.2s ease-in-out;
    }
  }

  .cookie-sidebar-header-outer {
    display: flex;
    align-items: center;

    flex-direction: column ;

    gap: 0.5rem;

    padding: 0 1rem;
  }

  .cookie-sidebar-header-inner {
    width: 100%;
  }

  .cookie-sidebar-title {
    margin: 0;

    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    color: #333;
  }

  .cookie-sidebar-text {
    margin: 0;

    font-size: .875rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: #333;
  }

  .cookie-sidebar-categories {
    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: column;

    width: 100%;

  }

  .cookie-sidebar-category {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;

    gap: 0.5rem;

    border-bottom: #e0e0e0 1px solid;
    padding: .5rem 1rem;
  }

  .cookie-sidebar-category-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    gap: 2.5rem;
  }

  .cookie-sidebar-category-name {
    margin: 0;
    width: 100%;
  }


  .cookie-sidebar-category-description {
    margin: 0;

    font-size: .875rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  .cookie-sidebar-category-required {
    display: flex;
    align-items: center;

    gap: 1rem;

    flex: 0 0 auto;

    .cookie-sidebar-category-pill {
      align-self: center;
    }
  }

  .cookie-sidebar-category-pill {
    padding: 0 0.5rem;
    font-size: .75rem;
    font-weight: 400;
    line-height: 1.5rem;

    border-radius: .5rem;
    border: 1px solid #757575;

    align-self: flex-start;
    display: inline-block;
  }

  .cookie-sidebar-category-button {
    align-self: flex-start;

    width: 100%;

    font-size: .875rem;
    font-weight: 600;
    line-height: 1.5rem;

    color: #333;
    background: transparent;
    border: none;
    padding: 0;

    cursor:  pointer;

    display: flex;
    align-items: center;

    gap: 0.5rem;

    &:focus {
      outline: 3px solid #4c9aff;
      outline-offset: 4px;
    }

    &:hover {
      opacity: 0.8;
      transition: opacity 0.2s ease-in-out;
    }
  }

  .cookie-sidebar-category-cookies {
    list-style: none;
    margin: 0;
    padding: 0;

    background: #F4F4F4;
  }

  .cookie-sidebar-category-cookie {
    display: flex;        
    flex-direction: column;
    padding: .5rem;

    &:not(:last-child) {
      border-bottom: #e0e0e0 1px solid;
    }

    span {
      font-size: .75rem;
      font-weight: 400;
      line-height: 1.5rem
    }
  }

  .cookie-sidebar-btns {
    padding: 0 1rem;
  }

  .cookie-sidebar-save {
    margin-top: .5rem;
  }
`;

export default CookieModal;
