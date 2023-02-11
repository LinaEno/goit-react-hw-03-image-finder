import React, { Component } from 'react';
import Modal from 'components/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <li onClick={this.toggleModal} className="ImageGalleryItem">
        <img
          className="ImageGalleryItemImage"
          src={this.props.webformatURL}
          alt={this.props.tags}
        />
        {showModal ? (
          <Modal
            largeImageURL={this.props.largeImageURL}
            tags={this.props.tags}
            // onClose={this.toggleModal}
            onClick={this.toggleModal}
          />
        ) : null}
      </li>
    );
  }
}

export default ImageGalleryItem;
