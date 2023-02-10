import { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import fetchImages from './Api';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    showModal: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.getImages(this.state.query, this.state.page);
    }
  }

  getImages = async (value, page = 1) => {
    console.log(value);
    const response = await fetchImages(value, page);
    console.log(response);
    this.setState({
      images: [...this.state.images, ...response.hits],
      query: value,
    });
  };

  setQuery = query => {
    this.setState({
      query,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.setQuery} />
        <ImageGallery images={images} onClose={this.toggleModal} />
        {/* <Modal onClose={this.toggleModal} /> */}
        {images.length === 0 ? null : (
          <Button onClickLoadMore={this.handleLoadMore} />
        )}
      </>
    );
  }
}
