import { Button, Container, TextField } from '@material-ui/core';
import React from 'react';

type State = { value: string }

class TaskForm extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: any) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Container maxWidth="sm">
        <form onSubmit={this.handleSubmit}>
          <TextField label="name" value={this.state.value} onChange={this.handleChange} />
          <Button variant="contained" color="primary" type="submit">Submit</Button>
          {/* <input type="submit" value="Submit" /> */}
        </form>
      </Container>
    );
  }
}

export default TaskForm;