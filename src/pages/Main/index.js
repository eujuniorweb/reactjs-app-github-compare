import React from 'react';
import { Container, Form } from './styles';
import logo from '../../assets/logo.png';
import List from '../../components/List';

const Main = () => (
  <Container>
    <img src={logo} alt="Git Compare" />
    <Form action="">
      <input type="text" placeholder="usuário/repositorio" />
      <button type="submit">OK</button>
    </Form>
    <List />
  </Container>
);
export default Main;
