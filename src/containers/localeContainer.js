import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

class LocaleContainer extends Component {

  state = {
    locale: ''
  }

  handleChangeLocale = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <FormControl>
        <InputLabel htmlFor="languages">Age</InputLabel>
          <Select
            // value={this.state.age}
            // onChange={this.handleChange}
            inputProps={{
              name: 'Languages',
              id: 'languages',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
...bindActionCreators(actions, dispatch),
});

export default  connect(mapStateToProps, mapDispatchToProps)(LocaleContainer);
