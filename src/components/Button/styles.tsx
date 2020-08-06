import styled from 'styled-components';

import * as buttonStyles from '../../styles/global';

export const Container = styled.button`
  width: fit-content;
  height: 36px;
  border-radius: 6px;
  padding: 8px 16px;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  background-color: ${buttonStyles.buttonDefault};

  transition: background-color 150ms ease-in-out;

  &:hover {
    background-color: ${buttonStyles.buttonDefaultHover};
  }
`;
