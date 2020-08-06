import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'default' | 'primary' | 'secondary' | 'danger';
  variant?: 'fill' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
};

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'default',
  variant = 'fill',
  size = 'md',
}) => {
  return (
    <Container color={color} variant={variant} size={size}>
      {children}
    </Container>
  );
};

export default Button;
