import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'default' | 'primary' | 'secondary' | 'danger';
  variant?: 'fill' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  disableShadow?: boolean;
  startIcon?: string;
  endIcon?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'default',
  variant = 'fill',
  size = 'md',
  startIcon,
  endIcon,
  ...rest
}) => {
  return (
    <Container
      color={color}
      variant={variant}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      {...rest}
    >
      {startIcon && <i className="material-icons">{startIcon}</i>}
      {children}
      {endIcon && <i className="material-icons">{endIcon}</i>}
    </Container>
  );
};

export default Button;
