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
      </div>
      <div className="row">
        <ButtonItem>
          <span>{'<Button variant="outline"/>'}</span>
          <Button variant="outline">Default</Button>
        </ButtonItem>
        <ButtonItem>
          <span>{'<Button color="primary" variant="outline"/>'}</span>
          <Button color="primary" variant="outline">
            Default
          </Button>
        </ButtonItem>
        <ButtonItem>
          <span>{'<Button color="secondary" variant="outline"/>'}</span>
          <Button color="secondary" variant="outline">
            Default
          </Button>
        </ButtonItem>
        <ButtonItem>
          <span>{'<Button color="danger" variant="outline"/>'}</span>
          <Button color="danger" variant="outline">
            Default
          </Button>
        </ButtonItem>
      </div>
      <div className="row">
        <ButtonItem>
          <span>{'<Button variant="text"/>'}</span>
          <Button variant="text">Default</Button>
        </ButtonItem>
        <ButtonItem>
          <span>{'<Button color="primary" variant="text"/>'}</span>
          <Button color="primary" variant="text">
            Default
          </Button>
        </ButtonItem>
        <ButtonItem>
          <span>{'<Button color="secondary" variant="text"/>'}</span>
          <Button color="secondary" variant="text">
            Default
          </Button>
        </ButtonItem>
        <ButtonItem>
          <span>{'<Button color="danger" variant="text"/>'}</span>
          <Button color="danger" variant="text">
            Default
          </Button>
        </ButtonItem>
      </div>
      <div className="row">
        <ButtonItem>
          <span>{'<Button disableShadow/>'}</span>
          <Button color="primary" disableShadow>
            Default
          </Button>
        </ButtonItem>
      </div>
      <div className="row">
        <ButtonItem>
          <span>{'<Button size="sm"/>'}</span>
          <Button color="primary" size="sm">
            Default
          </Button>
        </ButtonItem>
        <ButtonItem>
          <span>{'<Button size="md"/>'}</span>
          <Button color="primary">Default</Button>
        </ButtonItem>
        <ButtonItem>
          <span>{'<Button size="lg" />'}</span>
          <Button color="primary" size="lg">
            Default
          </Button>
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
