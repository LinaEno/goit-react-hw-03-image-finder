import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, webformatURL, tags }) => {
        return (
          <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
