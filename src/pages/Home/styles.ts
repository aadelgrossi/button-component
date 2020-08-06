import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  margin: 5rem auto 0;
  align-items: flex-start;

  > .row {
    display: flex;
    flex-direction: row;
  }
`;

export const ButtonItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  min-width: 15rem;
  & + & {
    margin-left: 5rem;
  }

  span {
    margin-bottom: 6px;
  }
`;
