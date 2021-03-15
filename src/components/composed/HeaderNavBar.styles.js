import styled from 'styled-components';

export const StyledHeader = styled.div`
  .navbar {
    background-color: #ccc;
    font-weight: bold;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: green;
  }
  &.hover {
    color: #bbb;
  }
`;
