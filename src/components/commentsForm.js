import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class TodoForm extends Component {
  render() {
    return (
      <form className='Comments-form' noValidate autoComplete='off'>
         <TextField
          label='Comment'
          multiline
          fullWidth
          rows='4'
          margin='normal'
          value={this.props.value}
          onChange={this.props.onHandleChangeCommentText('text')}
        />

        <Button
          alignItems='flex-end'
          variant='contained'
          color='primary'
          onClick={this.props.onHandleAddComment}
        >
          Add new
        </Button>
      </form>
    )
  }
}

export default TodoForm;
