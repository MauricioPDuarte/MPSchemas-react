import React, { InputHTMLAttributes } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons';
import { useField } from 'formik';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const [field, meta] = useField(rest);

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...field} {...rest} type="text" />
      {meta.touched && meta.error ? <FiAlertCircle size={20} /> : null}
    </Container>
  );
};

export default Input;
