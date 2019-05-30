import React, { Component } from 'react';
import { Container, Form } from './styles';
import logo from '../../assets/logo.png';
import List from '../../components/List';

export default class Main extends Component {
  state = {
    repositories: [],
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Git Compare" />
        <Form action="">
          <input type="text" placeholder="usuário/repositorio" />
          <button type="submit">OK</button>
        </Form>
        <List repositories={this.state.repositories} />
      </Container>
    );
  }
}
