import React, { Component, Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import map from 'lodash/map';

class CommentsList extends Component {
  render() {
    console.log(this.props.todo);

    return (
      <Fragment>
        <List component='nav'>
          {map(this.props.todo.comments, (comment) => (
            <Fragment key={comment.id}>
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText
                  secondary={
                    comment.text
                  }
                />
                </ListItem>
                <Divider />
              </Fragment>
          ))}
        </List>
      </Fragment>
    )
  }
}

export default CommentsList;
