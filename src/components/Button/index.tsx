import React from 'react';

import { Container } from './styles';

interface ButtonProps {
  color?: 'default' | 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ color = 'default', children }) => {
  return <Container color={color}>{children}</Container>;
};

export default Button;
