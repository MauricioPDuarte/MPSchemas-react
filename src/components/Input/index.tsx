import React, { InputHTMLAttributes, useState, useCallback } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons';
import { useField } from 'formik';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const [field, meta] = useField(rest);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    field.onBlur(event);
    setIsFocused(false);

    setIsFilled(!!event.currentTarget.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container isFocused={isFocused} isFilled={isFilled} isErrored={meta.touched && !!meta.error}>
      {Icon && <Icon size={20} />}
      <input {...field} {...rest} onBlur={(event) => handleInputBlur(event)} onFocus={() => handleInputFocus()} />
      {meta.touched && meta.error ? (
        <Error title={meta.error}>
          <FiAlertCircle size={20} />
        </Error>
      ) : null}
    </Container>
  );
};

export default Input;
