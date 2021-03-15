import React from 'react';

import Photos from './components/Photos';
import HeaderNavBar from './components/composed/HeaderNavBar';
import HeaderJumbotron from './components/composed/HeaderJumbotron';
import Footer from './components/composed/FooterNavBar';

function App() {
  return (
    <>
      <HeaderNavBar />
      <HeaderJumbotron />
      <Photos />
      <Footer />
    </>
  );
}

export default App;
