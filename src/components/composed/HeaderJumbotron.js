import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import {
  StyledJumbotron,
  StyledTitle,
  StyledSubTitle,
  StyledParagraphDiv,
} from './HeaderJumbotron.styles';

const HeaderJumbotron = () => {
  return (
    <StyledJumbotron>
      <Jumbo field className="jumbo">
        <div className="overlay"></div>
        <Container>
          <StyledTitle>Get Started Now!</StyledTitle>
          <StyledParagraphDiv>
            <p>If you click on a photo, it will disappear.</p>
            <p>
              If your screen size get smaller, you will get to see only two
              small pictures at a row.
            </p>
            <p>We have an infinity scroll, so scrolling will never end.</p>
          </StyledParagraphDiv>
          <StyledSubTitle>Try it now!</StyledSubTitle>
        </Container>
      </Jumbo>
    </StyledJumbotron>
  );
};

export default HeaderJumbotron;
