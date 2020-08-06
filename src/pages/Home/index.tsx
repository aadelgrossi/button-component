import React from 'react';

import { Container, ButtonItem } from './styles';
import Button from '../../components/Button';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Buttons</h1>
      <div className="row">
        <ButtonItem>
          <span>{'<Button />'}</span>
          <Button>Default</Button>
        </ButtonItem>
        <ButtonItem>
          <span>&:hover, &:focus</span>
          <Button>Default</Button>
        </ButtonItem>
      </div>
    </Container>
  );
};

export default Home;
