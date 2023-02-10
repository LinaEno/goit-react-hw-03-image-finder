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
      <header className="SearchBar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchFormButton">
            <span className="SearchFormButtonLabel">Search</span>
          </button>
          <input
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            className="SearchFormInput"
          />
        </form>
      </header>
    );
  }
}

// SearchBar.propTypes = {};

export default SearchBar;
