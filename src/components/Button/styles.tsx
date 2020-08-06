import styled, { css } from 'styled-components';

export const buttonDisabledTextColor = '#9E9E9E';

interface ButtonColorProperty {
  [type: string]: string;
}

const buttonBackgrounds: ButtonColorProperty = {
  default: 'background: #E0E0E0',
  primary: 'background: #3D5AFE',
  secondary: 'background: #455A64',
  danger: 'background: #D32F2F',
};

const buttonHoverBackgrounds: ButtonColorProperty = {
  default: 'background: #AEAEAE',
  primary: 'background: #0039CB',
  secondary: 'background: #1C313A',
  danger: 'background: #9A0007',
};

export const Container = styled.button`
  width: fit-content;
  height: 36px;
  border-radius: 6px;
  padding: 8px 16px;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  transition: background-color 150ms ease-in-out;
  color: ${props => props.color !== 'default' && '#fff'};

  &:hover {
    background: #aeaeae;

    ${props =>
      props.color &&
      css`
        ${buttonHoverBackgrounds[props.color]}
      `}
  }

  ${props =>
    props.color &&
    css`
      ${buttonBackgrounds[props.color]}
    `}
`;
