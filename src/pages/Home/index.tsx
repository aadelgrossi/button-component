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
      <div className="row">
        <ButtonItem>
          <span>{'<Button color="default"/>'}</span>
          <Button color="default">Default</Button>
        </ButtonItem>
        <ButtonItem>
          <span>{'<Button color="primary"/>'}</span>
          <Button color="primary">Default</Button>
        </ButtonItem>
        <ButtonItem>
          <span>{'<Button color="secondary"/>'}</span>
          <Button color="secondary">Secondary</Button>
        </ButtonItem>
        <ButtonItem>
          <span>{'<Button color="danger"/>'}</span>
          <Button color="danger">Danger</Button>
        </ButtonItem>
      </div>
    </Container>
  );
};

export default Home;
