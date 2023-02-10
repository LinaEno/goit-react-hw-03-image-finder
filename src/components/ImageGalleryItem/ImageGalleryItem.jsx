import React from 'react';
import Modal from 'components/Modal';

const ImageGalleryItem = ({ webformatURL, tags, onClose, largeImageURL }) => {
  return (
    <li>
      <img src={webformatURL} alt={tags} />
      <Modal onClose={onClose} largeImageURL={largeImageURL} tags={tags} />
    </li>
  );
};

export default ImageGalleryItem;
