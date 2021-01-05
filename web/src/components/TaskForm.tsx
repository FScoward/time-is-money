import { Button, Container, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';

type Inputs = {
  name: string
}
function TaskForm() {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => console.log(data);

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="name" name="name" inputRef={register} />
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>
    </Container>
  );
}

export default TaskForm;