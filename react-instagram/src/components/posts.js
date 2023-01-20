import React, { useState, useEffect } from 'react';

function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from API
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        setImages(data);
      });
  }, []);

  return (
    <div class="container">
  <div class="row">
  <div class="col">{images.map(image => (
        <img key={image.id} src={image.thumbnailUrl} alt={image.title}/>
      ))}</div>
  </div>
  <div class="row">
    <div class="col-8">col-8</div>
   
  </div>
</div>
  );
}

export default ImageGallery;


