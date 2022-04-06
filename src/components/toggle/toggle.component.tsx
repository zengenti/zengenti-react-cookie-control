import React from 'react';
import ToggleStyled from './toggle.styled';
import { ToggleProps } from './toggle.type';

const Toggle = ({ id, isChecked, label, onClick }: ToggleProps) => {
  return (
    <ToggleStyled className={`zen-cc-toggle ${isChecked ? 'checked' : ''}`}>
      <input
        checked={isChecked}
        className="zen-cc-toggle__checkbox"
        id={id}
        onChange={e => onClick()}
        type="checkbox"
      />
      <label className="zen-cc-toggle__label" htmlFor={id}>
        {label}
      </label>
    </ToggleStyled>
  );
};

export default Toggle;
