import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
// import Modal from 'components/Modal';

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
