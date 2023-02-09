import React from 'react';
import { Component } from 'react';

class SearchBar extends Component {
  state = {
    value: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.resetForm();
  };
  handleChange = e => {
    const value = e.target.value;
    this.setState({ value });
  };
  resetForm = () => {
    this.setState({ value: '' });
  };
  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

// SearchBar.propTypes = {};

export default SearchBar;
