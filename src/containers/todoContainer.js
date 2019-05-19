import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from '@material-ui/core/Paper';
import TodoForm from '../components/todoForm';
import TodoList from '../components/todoList';
import * as actions from '../actions/actions';

class TodoContainer extends Component {

  state = {
    text: ''
  }
  
  handleChangeTodoText = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleAddTodo = event => {
    event.preventDefault();

    if (!this.state.text.length) {
      return;
    }

    const time = new Date();
    const id = time.getMilliseconds();

    this.props.addTodo({ text: this.state.text, id, comments: [] });

    this.setState({ text: '' });
  }

  handleDeleteTodo = id => {
    if (id) {
      this.props.deleteTodo(id);
    }
  }

  handleSelectTodo = todo => {
    if (todo) {
      this.props.selectTodo(todo);
    }
  };

  render() {
    const { text } = this.state;
    const { todos } = this.props;

    return (
      <Paper
        elevation={5}
        className='Todos-container'
      >
        <h2>Todos</h2>

        <TodoForm
          value={text}
          onHandleChangeTodoText={this.handleChangeTodoText}
          onHandleAddTodo={this.handleAddTodo}
        />
        <TodoList
          todos={todos}
          onHandleDeleteTodo={this.handleDeleteTodo}
          onHandleSelectTodo={this.handleSelectTodo}
        />
      </Paper>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.rootReducer.todos,
    lang: state.i18nState.lang
  };
};

const mapDispatchToProps = dispatch => ({
...bindActionCreators(actions, dispatch),
});

export default  connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
