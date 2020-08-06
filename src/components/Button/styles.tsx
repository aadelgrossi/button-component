import styled, { css } from 'styled-components';

export const buttonDisabledTextColor = '#9E9E9E';

interface ButtonProps {
  color: string;
  variant?: string;
}

interface ButtonColorProperty {
  [type: string]: string;
}

interface HoverProperty {
  regular: {
    [type: string]: any;
  };
  variant: {
    [type: string]: any;
  };
}

const buttonColors: ButtonColorProperty = {
  default: '#E0E0E0',
  primary: '#3D5AFE',
  secondary: '#455A64',
  danger: '#D32F2F',
};

const buttonHoverBackgrounds: HoverProperty = {
  regular: {
    default: '#AEAEAE',
    primary: '#0039CB',
    secondary: '#1C313A',
    danger: '#9A0007',
  },
  variant: {
    default: 'rgba(174, 174, 174, 0.1)',
    primary: 'rgba(61, 90, 254, 0.1)',
    secondary: 'rgba(28, 49, 58, 0.1)',
    danger: 'rgba(154, 0, 7, 0.1)',
  },
};

export const Container = styled.button<ButtonProps>`
  width: fit-content;
  height: 36px;
  border-radius: 6px;
  padding: 8px 16px;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  transition: background-color 150ms ease-in-out;
  color: ${props => (props.color === 'default' ? '#3f3f3f' : '#fff')};

  ${props =>
    props.color &&
    css`
      background: ${buttonColors[props.color]};
    `}

  &:hover {
    ${props =>
      props.color &&
      css`
        background: ${buttonHoverBackgrounds.regular[props.color]}};
      `}
  }

  ${props =>
    props.variant &&
    css`
      color: ${props.color === 'default'
        ? '#3f3f3f'
        : buttonColors[props.color]};
    `}

  ${props =>
    props.variant === 'outline' &&
    css`
      border: 1px solid
        ${props.color === 'default' ? '#3f3f3f' : buttonColors[props.color]};
      background: transparent;
      box-shadow: none;

      &:hover {
        background: ${buttonHoverBackgrounds.variant[props.color]};
      }
    `}

  ${props =>
    props.variant === 'text' &&
    css`
      background: transparent;
      box-shadow: none;

      &:hover {
        background: ${buttonHoverBackgrounds.variant[props.color]};
      }
    `}
`;
