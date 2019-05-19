import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class TodoForm extends Component {
  render() {
    return (
      <form className='Todo-form' noValidate autoComplete='off' onSubmit={this.props.onHandleAddTodo}>
        <TextField
          id='standard-name'
          label='Type name here...'
          value={this.props.value}
          onChange={this.props.onHandleChangeTodoText('text')}
          fullWidth
          margin='normal'
        />

        <Button
          variant='contained'
          color='primary'
          className=''
          onClick={this.props.onHandleAddTodo}
        >
          Add new
        </Button>
      </form>
    )
  }
}

export default TodoForm;
