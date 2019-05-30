import React, { Component } from 'react';
import moment from 'moment';
import { Container, Form } from './styles';
import logo from '../../assets/logo.png';
import List from '../../components/List';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    input: '',
    repositories: [],
    repositoryError: false,
  };

  handleAddRepository = async (event) => {
    event.preventDefault();
    try {
      const { data: repository } = await api.get(`/repos/${this.state.input}`);
      repository.lastCommit = moment(repository.pushed_at).fromNow();
      this.setState({
        input: '',
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
      });
    } catch (error) {
      this.setState({ repositoryError: true });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Git Compare" />
        <Form error={this.state.repositoryError} onSubmit={this.handleAddRepository} action="">
          <input
            type="text"
            placeholder="usuário/repositorio"
            value={this.state.input}
            onChange={(event) => {
              this.setState({ input: event.target.value });
            }}
          />
          <button type="submit">OK</button>
        </Form>
        <List repositories={this.state.repositories} />
      </Container>
    );
  }
}
