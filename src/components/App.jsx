import { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import fetchImages from './Api';
import ImageGallery from './ImageGallery';
import Button from './Button';
import { InfinitySpin } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    totalImages: 0,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { query, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const response = await fetchImages(query, page);

      console.log(response);
      this.setState({
        images: [...this.state.images, ...response.hits],
        totalImages: response.totalHits,
      });
      if (response.hits.length < 1) {
        toast.error('Nothing was found for your request');
        return;
      }
    } catch (error) {
      console.log(error);
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  setQuery = query => {
    if (query === this.state.query) {
      toast.error('Enter new request');
    }
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
    const { images, totalImages, isLoading } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.setQuery} />
        {isLoading && <InfinitySpin width="200" color="#3f51b5" />}
        {images.length === 0 ? (
          <p>No images</p>
        ) : (
          <ImageGallery images={images} />
        )}

        {totalImages !== images.length && (
          <Button onClickLoadMore={this.handleLoadMore} />
        )}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          theme="colored"
          closeOnClick
        />
      </>
    );
  }
}
