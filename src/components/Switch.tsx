import React, { useState } from 'react';
import styled from 'styled-components';

interface SwitchProps {
  className?: string;
  label: string;
  id: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  action?: (v: boolean) => void;
}

export const Switch = ({
  className,
  label,
  id,
  action,
  disabled = false,
  defaultChecked = false,
}: SwitchProps) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (action) action(e.target.checked);
  };

  return (
    <SwitchStyled
      className={className}
      data-state={checked ? 'checked' : 'unchecked'}
    >
      <label className="switch-label sr-only" htmlFor={id}>{label}</label>
      <div className="switch-root">
        <input
          disabled={disabled}
          type="checkbox"
          id={id}
          checked={checked}
          onChange={handleChange}
          className="switch-input"
        />
        <span className="switch-thumb" />
      </div>
    </SwitchStyled>
  );
};

const SwitchStyled = styled.div`
  display: flex;
  align-items: center;

  .switch-label {
    color: #333;
    font-size: 15px;
    line-height: 1;
  }

  .switch-root {
    position: relative;
    width: 5rem;
    height: 2.5rem;
    border-radius: 24px;
    background: #ccc;
    transition: background 100ms ease;
    will-change: background;
  }

  .switch-input {
    opacity: 0;
    width: 5rem;
    height: 2.5rem;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    z-index: 2;
    cursor: pointer;

    &:hover + .switch-thumb {
      opacity: 0.8;
      transition: opacity 0.2s ease-in-out;
    }

    &:focus-visible + .switch-thumb {
      outline: 3px solid #4c9aff;
      outline-offset: 2px;
    }

    &:disabled {
      cursor: not-allowed;
      + .switch-thumb {
        opacity: 0.8;
      }
    }
  }

  .switch-thumb {
    pointer-events: none;
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 100ms ease, left 100ms ease;
    position: absolute;
    top: 50%;
    left: 0.5rem;
    transform: translateY(-50%);
    z-index: 1;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      height: 0.75rem;
      width: 0.75rem;
      transform: translate(-50%, -50%);
      background-position: center;
      background-size: contain;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none"  width="14" height="14" viewBox="0 0 24 24"><path fill="%23002033" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.997.997 0 0 0 5.7 7.11L10.59 12 5.7 16.89a.998.998 0 0 0 1.41 1.41L12 13.41l4.89 4.89a.997.997 0 0 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4Z"/></svg>');
    }
  }

  &[data-state='checked'] {
    .switch-root {
      background: #1d5c90;
    }

    .switch-thumb {
      left: 3rem;

      &:before {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24"><path fill="%2306151E" d="m3 12 6.627 7L21 6.988 19.131 5 9.627 15.038 4.856 10.04 3 12Z"/></svg>');
      }
    }
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
