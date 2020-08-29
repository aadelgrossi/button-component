import styled, { css } from 'styled-components';

const buttonDisabledTextColor = '#9E9E9E';
const buttonDisabledBackground = '#E0E0E0';
const buttonDefaultTextColor = '#3F3F3F';

interface ButtonProps {
  color: string;
  variant?: string;
  size: string;
  disableShadow?: boolean;
  disabled?: boolean;
  startIcon?: string;
  endIcon?: string;
}

const buttonColors: ButtonProperty = {
  default: '#E0E0E0',
  primary: '#3D5AFE',
  secondary: '#455A64',
  danger: '#D32F2F',
};

const buttonSizes: ButtonSizes = {
  sm: 12,
  md: 16,
  lg: 22,
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  height: ${props => `${buttonSizes[props.size] + 20}px`};
  padding: ${props =>
    `${buttonSizes[props.size] / 2}px ${buttonSizes[props.size]}px`};
  
  border-radius: 6px;
  box-shadow: ${props =>
    props.disableShadow ? 'none' : '0px 2px 3px rgba(51, 51, 51, 0.2)'};
  transition: background-color 150ms ease-in-out;
  color: ${props =>
    props.color === 'default' ? buttonDefaultTextColor : '#fff'};

  ${props =>
    props.color &&
    css`
      background: ${buttonColors[props.color]};
    `}

  &:hover, &:focus {
    ${props =>
      props.color &&
      !props.disabled &&
      css`
        background: ${buttonHoverBackgrounds.regular[props.color]}};
      `}
  }

  ${props =>
    props.variant !== 'fill' &&
    css`
      color: ${props.color === 'default'
        ? buttonDefaultTextColor
        : buttonColors[props.color]};
      background: transparent;
      box-shadow: none;
    `}

  ${props =>
    props.variant === 'outline' &&
    !props.disabled &&
    css`
      border: 1px solid
        ${props.color === 'default'
          ? buttonDefaultTextColor
          : buttonColors[props.color]};

      &:hover,
      &:focus {
        background: ${buttonHoverBackgrounds.variant[props.color]};
      }
    `}

  ${props =>
    props.variant === 'text' &&
    css`
      &:hover,
      &:focus {
        background: ${buttonHoverBackgrounds.variant[props.color]};
      }
    `}

  i {
    color: #fff;
    font-size: 14px;

    margin-right: ${props => (props.startIcon ? '6px' : 0)};
    margin-left: ${props => (props.endIcon ? '6px' : 0)}

  }

  ${props =>
    props.disabled &&
    css`
      color: ${buttonDisabledTextColor};
      cursor: auto;
      background-color: ${buttonDisabledBackground};
    `}

`;
