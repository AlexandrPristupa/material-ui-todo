import React, { Component, Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import map from 'lodash/map';


class TodoList extends Component {
  render() {
    return (
      <List component='nav'>
      {!this.props.todos && (
        <div>No todos</div>
      )}

      {this.props.todos && (
        map(this.props.todos, (todo) => (
          <Fragment key={todo.id}>
            <ListItem button onClick={() => this.props.onHandleSelectTodo(todo)}>
              <ListItemText primary={todo.text} />
              <Button
                variant='outlined'
                color='secondary'
                onClick={() => this.props.onHandleDeleteTodo(todo.id)}
              >
                Delete
              </Button>
            </ListItem>
            <Divider />
          </Fragment>
        ))
      )}
      </List>
    )
  }
}

export default TodoList;
