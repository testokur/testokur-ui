import * as React from 'react';
import * as _ from 'lodash';
import { randomId, Testable } from '../../modules';
import { Input, TextArea, Container, Label } from './styled';

type Props = Testable & {
  label: string;
  value?: string | string[] | number;
  rows?: number;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const component = (props: Props): JSX.Element => {
  const { label, rows, value, onChange, disabled } = props;
  const id = randomId('input-field');
  let innerComponent;

  if (!_.isUndefined(rows) && rows > 1) {
    innerComponent = <TextArea id={id} rows={rows} value={value} onChange={onChange} placeholder={label} disabled={disabled} />;
  } else {
    innerComponent = <Input id={id} value={value} onChange={onChange} placeholder={label} />;
  }

  return (
    <Container hasRows={!_.isUndefined(rows) && rows > 1}>
      {innerComponent}
      <Label htmlFor={id} disabled={disabled}>
        {label}
      </Label>
    </Container>
  );
};

component.displayName = 'InputField';

export default component;
