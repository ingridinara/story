import React from 'react';
import Photos from './components/Photos';
import HeaderNavBar from './components/composed/HeaderNavBar';
import HeaderJumbotron from './components/composed/HeaderJumbotron';

function App() {
  return (
    <>
      <HeaderNavBar />
      <HeaderJumbotron />
      <Photos />
    </>
  );
}

export default App;
