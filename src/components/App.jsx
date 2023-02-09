import { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import fetchImages from './Api';
import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {
    images: [],
  };

  getImages = async value => {
    console.log(value);
    const response = await fetchImages(value);
    console.log(response);
    this.setState({ images: response.hits });
  };

  render() {
    const { images } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.getImages} />
        <ImageGallery images={images} />
      </>
    );
  }
}
