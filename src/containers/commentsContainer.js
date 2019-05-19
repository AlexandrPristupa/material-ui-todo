import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from '@material-ui/core/Paper';
import CommentsList from '../components/commentsList';
import CommentsForm from '../components/commentsForm';
import size from 'lodash/size';
import forEach from 'lodash/forEach';
import * as actions from '../actions/actions';

class TodoContainer extends Component {

  state = {
    text: '',
    todo: {}
  }

  componentDidUpdate(prevProps) {
    // only update chart if the data has changed
    if (prevProps.selectedTodosId !== this.props.selectedTodosId) {
      forEach(this.props.todos, (todo) => {
        if (todo.id === this.props.selectedTodosId) {
          this.setState({ todo }, () => { console.log(this.state) });
        }
      });
    }
  }

  handleChangeCommentText = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleAddComment = (event) => {
    event.preventDefault();

    if (!this.state.text.length) {
      return;
    }

    const todo = this.state.todo;
    const time = new Date();
    const id = time.getMilliseconds();
    const comment = { text: this.state.text, id };

    todo.comments.push(comment);

    this.props.addComment({ todo });

    this.setState({ text: '' });
  };

  render() {
    const { todo } = this.props;
    const { text } = this.state;

    return (
      <Paper
        elevation={5}
        className='Comments-container'
      >
        <h2>Comments {`#${size(this.state.todo.comments)}`}</h2>

        <CommentsList todo={this.state.todo} />

        {size(this.state.todo) && (
          <CommentsForm
            onHandleChangeCommentText={this.handleChangeCommentText}
            onHandleAddComment={this.handleAddComment}
            value={text}
          />
        )}
      </Paper>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedTodosId: state.rootReducer.selectedTodo,
    todos: state.rootReducer.todos
  }
};

const mapDispatchToProps = dispatch => ({
...bindActionCreators(actions, dispatch),
});

export default  connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
