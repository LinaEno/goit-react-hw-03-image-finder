import { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import fetchImages from './Api';
import ImageGallery from './ImageGallery';
import Button from './Button';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    totalImages: 0,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { query, page } = this.state;
    const response = await fetchImages(query, page);

    console.log(response);
    this.setState({
      images: [...this.state.images, ...response.hits],
      totalImages: response.totalHits,
    });
  };

  setQuery = query => {
    this.setState({
      query,
      page: 1,
      images: [],
      totalImages: 0,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, totalImages } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.setQuery} />
        <ImageGallery images={images} />
        {totalImages !== images.length && (
          <Button onClickLoadMore={this.handleLoadMore} />
        )}
      </>
    );
  }
}
