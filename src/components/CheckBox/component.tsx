import React, { useCallback } from 'react';
import { Label, Input, TextContainer, LabelText, Info, IconContainer } from './styled';
import { Testable } from '../../modules';
import { Check } from '../Icon';

type Props = Testable &
  React.InputHTMLAttributes<HTMLInputElement> & {
    checked?: boolean;
    disabled?: boolean;
    label?: React.ReactNode;
    value?: string;
    info?: string;
  };

const component = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { checked, disabled, onChange, dataTestId, value, name, tabIndex, readOnly, info, label } = props;
  const preventOnClick = useCallback(ev => {
    ev.preventDefault();
  }, []);

  /* TODO: Add ToolTip when it is ready*/
  return (
    <Label checked={checked} disabled={disabled}>
      <Input
        data-testid={dataTestId}
        checked={checked}
        value={value}
        type="checkbox"
        disabled={disabled}
        name={name}
        tabIndex={tabIndex}
        onChange={onChange}
        readOnly={readOnly}
        ref={ref}
      />
      <IconContainer checked={checked} onClick={readOnly ? preventOnClick : undefined}>
        <Check customColor="white" />
      </IconContainer>
      {(label || info) && (
        <TextContainer>
          {label && <LabelText>{label}</LabelText>}
          {info && <Info>{info}</Info>}
        </TextContainer>
      )}
    </Label>
  );
});

export default component;
