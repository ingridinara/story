import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledRotateLeft } from './Photos.styles';
const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    console.log('Scrolltop:', scrollTop);
    console.log('ClientHeight:', clientHeight);
    console.log('ScrollHeight:', scrollHeight);

    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prev) => prev + 1);
    }
  };

  async function fetchData(page) {
    let response = await axios(
      `https://jsonplaceholder.typicode.com/photos/?page=${page}&results=10`
    );
    return response.data;
  }

  useEffect(() => {
    const loadPhotos = async () => {
      const newPhotos = await fetchData(page);
      setPhotos((prev) => [...prev, ...newPhotos]);
    };
    loadPhotos();
    fetchData();
  }, [page]);

  return (
    <div>
      {photos.length > 0 ? (
        <div
          onScroll={handleScroll}
          style={{ height: '90vh', overflowY: 'auto' }}
        >
          {photos.map((photo) => (
            <div key={photo.id}>
              <div>
                <div>Title: {photo.title}</div>
                <div>Album Id:{photo.albumId}</div>
                {window.innerWidth > 1025 ? (
                  <div>
                    <img src={photo.url} alt={photo.title}></img>
                    <div>Page Number: {page}</div>
                  </div>
                ) : (
                  <div>
                    <img src={photo.thumbnailUrl} alt={photo.title}></img>
                    <div>Page Number: {page}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <StyledRotateLeft
            style={{ fontSize: '300px', width: '100vw', height: '100vh' }}
          ></StyledRotateLeft>
        </div>
      )}
    </div>
  );
};

export default Photos;
