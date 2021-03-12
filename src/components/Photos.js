import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  async function fetchData() {
    let response = await axios(`https://jsonplaceholder.typicode.com/photos`);
    let array = await response.data;
    setPhotos(array);
    console.log(photos);
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      {photos.map((photo) => (
        <div>
          <div key={photo.id}>
            <div>Title: {photo.title}</div>
            <div>Album Id:{photo.albumId}</div>
            {window.innerWidth > 1025 ? (
              <div>
                <img src={photo.url} alt={photo.title}></img>
              </div>
            ) : (
              <div>
                <img src={photo.thumbnailUrl} alt={photo.title}></img>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Photos;
