import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'default' | 'primary' | 'secondary' | 'danger';
  variant?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'default',
  ...rest
}) => {
  return (
    <Container color={color} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
