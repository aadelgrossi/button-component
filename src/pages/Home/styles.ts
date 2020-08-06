import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  margin: 5rem 20vw 0;
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

  & + & {
    margin-left: 15rem;
  }

  span {
    margin-bottom: 6px;
  }
`;
