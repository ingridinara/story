import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  StyledRotateLeft,
  StyledImg,
  StyledWapper,
  StyledImgDiv,
} from './Photos.styles';
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

  const handleClick = (index) => {
    let newPhotosList = photos;
    newPhotosList.splice([index], 1);
    console.log(newPhotosList);
    setPhotos([...newPhotosList]);
  };

  return (
    <div>
      {photos.length > 0 ? (
        <StyledWapper
          onScroll={handleScroll}
          style={{ height: '90vh', overflowY: 'auto' }}
        >
          {photos.map((photo, index) => (
            <StyledImgDiv key={index}>
              <div>
                <p>
                  <strong>Title:</strong> {photo.title}
                </p>
                <small>
                  <strong>Album Id:</strong>
                  {photo.albumId}
                </small>

                {window.innerWidth > 1025 ? (
                  <div>
                    <StyledImg
                      onClick={handleClick}
                      src={photo.url}
                      alt={photo.title}
                    ></StyledImg>
                    <small>
                      <strong>Page Number:</strong> {page}
                    </small>
                  </div>
                ) : (
                  <div>
                    <img
                      style={{ display: 'flex' }}
                      onClick={handleClick}
                      src={photo.thumbnailUrl}
                      alt={photo.title}
                    ></img>
                    <small>Page Number: {page}</small>
                  </div>
                )}
              </div>
            </StyledImgDiv>
          ))}
        </StyledWapper>
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
