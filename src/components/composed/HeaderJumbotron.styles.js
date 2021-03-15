import styled from 'styled-components';
import image from 'assets/image.jpg';
export const StyledJumbotron = styled.div`
  .jumbo {
    background: url(${image}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 50vh;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const StyledTitle = styled.h1`
  color: green;
  text-align: center;
`;

export const StyledParagraphDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  text-align: center;
`;

export const StyledSubTitle = styled.h4`
  color: green;
  text-align: center;
  margin-bottom: 1rem;
`;
